const url =
"https://snozoneuk.com/booking/ajaxGrouped.php?getGroupDates=1&productId=857&locationId=1&qty=1&newDate=2026-05-25&getminprice=0";

async function run() {

  const res = await fetch(url);
  const text = await res.text();

  console.log("API response:", text);

  if (text !== "[]") {
    console.log("DATES AVAILABLE FOR 25–29 MAY");
    process.exit(1); // fail workflow -> triggers GitHub notification
  }

}

run();
