let account_holder = {
  user_name: '',
  password: '',
  name: '',
  acc_no: '',
  ifsc: '' ,
  branch: '',
  balance: 0,
  transaction_history: [],
};

function update_localstorage() {

  let local_holder = JSON.stringify(account_holder);
  localStorage.setItem("account", local_holder);

}

function Create () {
  
  document.getElementById("home").classList.add('hidden');
  document.getElementById("create").classList.remove('hidden');

}

function Submit() {
  
  account_holder.user_name = document.getElementById('user_name').value;
  account_holder.password = document.getElementById('password').value;
  account_holder.name = document.getElementById('name').value;
  account_holder.acc_no = document.getElementById('acc_no').value;
  account_holder.ifsc = document.getElementById('ifsc').value;
  account_holder.branch = document.getElementById('branch').value;
 
  update_localstorage();

  document.getElementById("home").classList.remove('hidden');
  document.getElementById("create").classList.add('hidden');
  document.getElementById("Create_btn").classList.add('hidden');
  document.getElementById("login_btn").classList.remove('hidden');

}

function Login() {

  document.getElementById('Login').classList.remove('hidden');
  account_holder = localStorage.getItem('account');
  console.log(account_holder);
  account_holder = JSON.parse(account_holder);

  let inputUserName = document.getElementById('login_user_name').value;
  let inputPassword = document.getElementById('login_pwd').value;

  if (inputUserName === account_holder.user_name && inputPassword === account_holder.password) {
    localStorage.setItem('logged_in', true);
    document.getElementById('Login_btn').classList.add('hidden');
  } else {
    alert('Invalid username or password');
  }

}




function Deposit() {
  let amount = prompt("Enter the amount to deposit:");
  amount = Number(amount);
  account_holder.transaction_history.push({
    type_of_transaction: "Deposited",
    date: new Date(),
    amount: amount,
  });
  console.log("Amount added to balance!");
  account_holder.balance = account_holder.balance + amount;
  console.log(account_holder.transaction_history);
  update_localstorage();
}

function Withdraw() {
  let amount = prompt("Enter the amount to withdraw:");
  amount = Number(amount);
  if (account_holder.balance - amount < 0) {
    console.log(`Negative Balance! ${amount} cannot be withdrawn!`);
  } else {
    account_holder.transaction_history.push({
      type_of_transaction: "Withdrawed",
      date: new Date(),
      amount: amount,
    });
    console.log("Amount subtracted from balance!");
    account_holder.balance = account_holder.balance - amount;
    console.log(account_holder.transaction_history);
  }
}
function Balance() {
  console.log(account_holder.balance);
}

function ViewAccount() {
  console.log(account_holder);
}


