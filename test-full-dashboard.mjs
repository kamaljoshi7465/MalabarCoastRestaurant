// import { chromium } from "playwright";

// const shot = (name) => `/tmp/claude-1000/-home-kamal-joshi-Desktop-Projects-MalabarCoastRestaurant/d42a02f6-8059-47b2-8d61-33562b05ee00/scratchpad/${name}.png`;
// const browser = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
// const page = await browser.newPage();
// const errors = [];
// page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
// page.on("pageerror", (e) => errors.push(String(e)));

// const DASH = {
//   success: true, message: "ok",
//   data: {
//     restaurant: { id: 1, name: "The Malabar Coast", outlet_name: "M3M Atrium 57" },
//     summary: { total_bookings: 9, today_bookings: 0, upcoming_bookings: 7, completed_bookings: 0, pending_bookings: 6, accepted_bookings: 1, rejected_bookings: 0, cancelled_bookings: 1 },
//     today: { date: "2026-08-04", available_slots: 0, disabled_slots: 0 },
//     booking_status_count: { PENDING: 6, ACCEPTED: 1, REJECTED: 0, COMPLETED: 0, CANCELLED: 1, NO_SHOW: 0, CONFIRMED: 1 },
//     upcoming_bookings: [
//       { id: 108, booking_number: "MC000108", outlet_id: 1, restaurant: "The Malabar Coast", outlet_name: "M3M Atrium 57", date: "2026-08-05", time: "15:00", guests: 3, occasion: "Birthday", name: "Test User", email: "kamal@yopmail.com", phone: "7579457073", special_requests: "Window seat", status: "PENDING", cancel_reason: null, rejection_reason: null, created_at: "2026-08-04 19:29:58" },
//       { id: 109, booking_number: "MC000109", outlet_id: 1, restaurant: "The Malabar Coast", outlet_name: "M3M Atrium 57", date: "2026-08-05", time: "18:00", guests: 3, occasion: "Birthday", name: "Test User", email: "kamal@yopmail.com", phone: "7579457073", special_requests: "Window seat", status: "PENDING", cancel_reason: null, rejection_reason: null, created_at: "2026-08-04 19:30:11" },
//     ],
//     today_bookings: [],
//     recent_bookings: [
//       { id: 109, booking_number: "MC000109", outlet_id: 1, restaurant: "The Malabar Coast", outlet_name: "M3M Atrium 57", date: "2026-08-05", time: "18:00", guests: 3, occasion: "Birthday", name: "Test User", email: "kamal@yopmail.com", phone: "7579457073", special_requests: "Window seat", status: "PENDING", cancel_reason: null, rejection_reason: null, created_at: "2026-08-04 19:30:11" },
//       { id: 107, booking_number: "MC000107", outlet_id: 1, restaurant: "The Malabar Coast", outlet_name: "M3M Atrium 57", date: "2026-09-02", time: "20:00", guests: 4, occasion: "Birthday", name: "Test User", email: "kamal@yopmail.com", phone: "7579457073", special_requests: "Window seat", status: "CANCELLED", cancel_reason: "Plans changed", rejection_reason: null, created_at: "2026-08-04 14:14:01" },
//     ],
//     chart_data: { weekly_bookings: [ { date: "2026-07-29", count: 0 }, { date: "2026-08-04", count: 2 } ] },
//     notifications: { pending_approval: 6, reschedule_requests: 0, cancel_requests: 0 },
//   },
// };

// const captured = {};
// await page.route("**/restaurant/dashboard", (route) => route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify(DASH) }));
// await page.route("**/restaurant/booking-slots**", (route) => {
//   const url = new URL(route.request().url());
//   captured.slotsDate = url.searchParams.get("date");
//   route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: true, message: "Success", data: { slots: [
//     { outlet_id: 1, date: captured.slotsDate, time: "18:00", status: "ENABLED", reason: null },
//     { outlet_id: 1, date: captured.slotsDate, time: "18:30", status: "ENABLED", reason: null },
//     { outlet_id: 1, date: captured.slotsDate, time: "19:00", status: "DISABLED", reason: "Restaurant Full" },
//   ] } }) });
// });
// await page.route("**/admin/bookings/status", async (route) => {
//   captured.bookingStatusBody = route.request().postDataJSON();
//   await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: true, message: "Updated", data: { ...DASH.data.upcoming_bookings[0], status: "ACCEPTED" } }) });
// });
// await page.route("**/admin/booking-slots/status", async (route) => {
//   captured.slotStatusBody = route.request().postDataJSON();
//   await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: true, message: "Updated", data: [] }) });
// });

// await page.goto("http://localhost:5173/", { waitUntil: "domcontentloaded" });
// await page.evaluate(() => localStorage.setItem("malabar_admin_token", "fake-token"));

// // --- Bookings tab ---
// await page.goto("http://localhost:5173/restaurant-dashboard/bookings", { waitUntil: "domcontentloaded" });
// await page.waitForSelector("text=All Bookings");
// await page.screenshot({ path: shot("full-bookings"), fullPage: true });

// // Approve a PENDING booking in "Upcoming Bookings" and verify the real API call
// const card = page.locator(".card", { hasText: "MC000108" }).first();
// await card.getByRole("button", { name: "Approve" }).click();
// await page.waitForFunction(() => document.body.innerText.includes("approved"));
// console.log("Booking status update body:", JSON.stringify(captured.bookingStatusBody));

// // --- Slots tab ---
// await page.goto("http://localhost:5173/restaurant-dashboard/slots", { waitUntil: "domcontentloaded" });
// await page.waitForSelector("text=Manage Slot Availability");
// console.log("Slots fetched for date:", captured.slotsDate);
// await page.screenshot({ path: shot("full-slots-initial") });

// await page.fill("#slots-date", "2026-08-15");
// await page.waitForFunction((d) => document.body.innerText.includes("15 Aug"), "2026-08-15").catch(() => {});
// await page.waitForTimeout(300);
// console.log("Slots refetched for new date:", captured.slotsDate);
// await page.screenshot({ path: shot("full-slots-datechange") });

// // Disable a slot and verify real API call
// await page.click("text=6:00 PM");
// await page.click("text=Disable Selected");
// await page.fill("input[placeholder*='Reason']", "Testing");
// await page.click("text=Confirm Disable");
// await page.waitForFunction(() => document.body.innerText.includes("disabled"));
// console.log("Slot status update body:", JSON.stringify(captured.slotStatusBody));

// // --- Analytics tab ---
// await page.goto("http://localhost:5173/restaurant-dashboard/analytics", { waitUntil: "domcontentloaded" });
// await page.waitForSelector("text=Status Breakdown");
// await page.screenshot({ path: shot("full-analytics"), fullPage: true });

// console.log("CONSOLE_ERRORS:", JSON.stringify(errors, null, 2));
// await browser.close();
