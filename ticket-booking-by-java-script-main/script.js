const subtotal    = document.getElementById("subtotal");
const vat         = document.getElementById("vat");
const total       = document.getElementById("total");
const fclass_qty  = document.getElementById("fclass_qty");
const econo_qty   = document.getElementById("econo_qty");

const fclass_price  = 150;
const econo_price   = 100;

subtotal.innerText = "$0";
vat.innerText = "$0";
total.innerText = "$0";
fclass_qty.value = 0;
econo_qty.value = 0;

var subtotal_val = 0
var vat_val = 0
var total_val = 0

fclass_qty.addEventListener("change", function() {
  update_prices();
});

econo_qty.addEventListener("change", function() {
  update_prices();
});


function update_prices() {
  let fclass_cost = fclass_qty.value * fclass_price;
  let econo_cost = econo_qty.value * econo_price;
  subtotal_val = fclass_cost + econo_cost;
  vat_val = subtotal_val * 0.1; 
  total_val = subtotal_val + vat_val;
  subtotal.innerText = "$"+subtotal_val; 
  vat.innerText = "$"+vat_val; 
  total.innerText = "$"+total_val; 
}