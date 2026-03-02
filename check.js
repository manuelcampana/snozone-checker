import fetch from "node-fetch";

const url = "https://snozoneuk.com/booking/ajaxGrouped.php?getGroupDates=1&productId=857&locationId=1&qty=1&newDate=2026-05-01&getminprice=0";

async function check() {

  const res = await fetch(url);
  const text = await res.text();

  console.log("API response:", text);

  if (text !== "[]") {
    console.log("DATES AVAILABLE");
    process.exit(1); // forces GitHub Action to fail so you notice
  }

}

check();
