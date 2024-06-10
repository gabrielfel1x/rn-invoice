import dateFormat from "dateformat";

function GetTime(date) {
  var hours = parseInt(dateFormat(date, "hh"));
  var minutes = parseInt(dateFormat(date, "MM"));
  var ampm = hours >= 12 ? "AM" : "PM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

const PdfCode = (
  name,
  address,
  mobileNo,
  quantity,
  invoice,
  product,
  total,
  receivedBalance,
  paymentType,
  remainingBalance
) => `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body>
    <div style="min-height: auto;
    width: 100%;
    height : 97vh;
    border: solid 2px #000;">
    <div style="height: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;">
    <div class="data-title">
        <div style="display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 2rem;  
        padding-left: 20px;">Dakkhan Suppliers Apshinge<br></div>
    <div style="
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    padding-left: 20px;
    ">At Post Apshinge tal Koregaon Dist Satara.</div>
    </div>
   
        <img style="
        height: 90px;
    width: 90px;
    margin-right:15px;
        " src="https://i.ibb.co/Rv9KpGf/logo.png" />
    </div>
    <hr />
        <hr/>


        <div style="
        width: 100%;
        height: auto;
        padding: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        ">
            <div style="
            width: 50%;
            align-items: flex-start;
            ">
                <p class="invoice-user">
                    Bill To : <br/>
                    Name : ${name} <br/>
                    Address : ${address} <br/>
                    Phone No : +91 ${mobileNo}
                </p>
            </div>
            <div style="align-items: flex-end;">
                <p>Invoice No : ${invoice}<br/>
                Date : ${dateFormat(Date.now(), "dd-mm-yyyy")}<br/>
                Time :${GetTime(new Date())}</p>
                <br/>
                <br/>
                <p>Mobile No :- <br/>
                +91 8208553219<br/>
                +91 9309780761
                </p>
            </div>
        </div>
        <hr/>
        <hr/>
        <div style="height: auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;">
            <table style="width:100%; border-collapse: collapse;">
                <tr style="background-color: rgba(255, 0, 62, 0.8); color: white;">
                  <th style="height: 30px;">Index</th>
                  <th style="height: 30px;">Product Name</th>
                  <th style="height: 30px;">Price(Per)</th>
                  <th style="height: 30px;">Quantity</th>
                  <th style="height: 30px;">Total</th>
                </tr>
                <tr style="background-color: rgba(246, 221, 178, 0.8);">
                  <td style="text-align: center;height: 30px;">1</td>
                  <td style="text-align: center;height: 30px;">${product}</td>
                  <td style="text-align: center;height: 30px;">${parseFloat(
                    parseFloat(total) / parseFloat(quantity)
                  ).toFixed(2)}</td>
                  <td style="text-align: center;height: 30px;">${quantity}</td>
                  <td style="text-align: center;height: 30px;">₹ ${total}</td>
                </tr>
               
              </table>
              
              <div style="width:100%;align-self: flex-end; display: flex; flex-direction: row;">
                <div style="width:40%"></div>
                  <table style="width: 50%; align-self: flex-end;">
                  <tr>
                  <th style="text-align: start;">Grand Total : </th>
                  <td style="text-align: center;height: 30px;">₹ ${total}</td>
              </tr>
                        <tr style="border-bottom: solid ;">
                            <th style="text-align: start;">Received Balance : </th>
                            <td style="text-align: center;height: 30px;">₹ ${receivedBalance}</td>
                        </tr>
                       
                        <tr style="border-bottom: solid ;">
                        <th style="text-align: start;">Remaining Balance : </th>
                        <td style="text-align: center;height: 30px;">₹ ${remainingBalance}</td>
                    </tr>
                        <tr>
                            <th style="text-align: start;">Payment Method: </th>
                            <td style="text-align: center;height: 30px;">${paymentType}</td>
                        </tr>
                  </table>
              </div>
        </div>
        <hr/>
        <hr/>
        <div style="height:auto; padding: 20px;">

            <p>Account Details - <br/>
            Bank Name: HDFC BANK, DHANGARWADI<br/>
            Bank Account no : 50100272967118<br/>
            Bank IFSC code : HDFC0004850<br/>
            </p>

        </div>

    </div>
  </body>
</html>
`;

const style = `
    .container {
      margin : 15px;
      border : solid 2px #000
    }
`;

export { PdfCode };
