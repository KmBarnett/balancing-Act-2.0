import moment from 'moment';

export const everyPage = {
  header: `<h1>Balancing Act</h1>`,
  nav: `
  <nav>
    <section class='home-icon'>
      <img class='icon home-icon' src='./images/icons/elephant.svg' alt="Home icon">
    </section>
    <section class='nav-feildset' id='nav-selection-js'>
      <section>
        <input checked id='dashboard-icon-js' type="radio" name="nav" value="dashboard" />
        <label data-tooltip='Navigate To Dashboard' for="dashboard-icon-js">
          <img class='icon' src='./images/icons/dashboard.svg' alt="dashboard icon">
        </label>
      </section>
      <section>
        <input id='wallet-icon-js' type="radio" name="nav" value="wallet"/>
        <label data-tooltip='Navigate To Transaction Details' for="wallet-icon-js">
          <img class='icon' src='./../images/icons/credit-card.svg' alt=" wallet icon">
        </label>
      </section>
      <section>
        <input id='profile-icon-js' type="radio" name="nav" value="profile" />
        <label data-tooltip='Navigate To Profile' for="profile-icon-js">
          <img class='icon' src='./../images/icons/profile.svg' alt="profile icon">
        </label>
      </section>
    </section>
  </nav>
  `
}

export const dashboard = {
  columns: `
  <section id="page" class='page'>
    <section id="column-1" class="column">
    </section>
    <section id="column-2" class="column">
    </section>
  </section>
  `,
  banner: name => `
  <section id='banner-js' class='banner'>
    <h2>Welcome ${name}</h2>
    <button class='close-icon' id="close-icon-js" type="button" name="button">
      <img class='close-icon' src='./images/icons/close.svg' alt="Home icon">
    </button>
  </section>
  `,
  accountOverveiw: (income, expenses, creditScore) => `
  <section class ='account-interview'>
    <div class='data-box'>
      <p class='data-item data-type'>Income</p>
      <p class='data-item'>$${income}</p>
    </div>
    <div class='data-box'>
      <p class='data-item data-type'>Expenses</p>
      <p class='data-item'>$${expenses}</p>
    </div>
    <div class='data-box'>
      <p class='data-item data-type'>Credit Score</p>
      <p class='data-item'>${creditScore}</p>
    </div>
  </section>
  `,
  accountCloseButton: `
    <button data-tooltip='Remove Account' class='account-close-button account-close-js' type="button" name="button">
      <img class='account-close-icon' src='./images/icons/close.svg' alt="Home icon">
    </button>
  `,
  accountAddForm: `
  <form id='account-add-form-js' class='account-add-form'>
    <section class='add-input-container'>
      <label for='account-selector-js'>*Account Type:
        <select id='account-selector-js' name="account selector">
          <option selected disabled value="">
            Select Account Type
          </option>
          <option value="checking">
            Checking
          </option>
          <option value="credit">
            Credit
          </option>
          <option value="savings">
            Savings
          </option>
        </select>
      </label>
      <label for='inflow-js'>*Company/Nickname:
        <input id='account-name-js' type="text" name="Account Name" placeholder='Account Name'>
      </label>
    </section>
    <button id='account-add-button-js' type="button" data-tooltip='Add Account' class='account-add-button' name='add account'>
      <img class='account-add-icon' src='./images/icons/plus.svg' alt="Home icon">
    </button>
  </form>
  `,
  accounts: `
  <section class='accounts-section'>
    <section id='accounts-head-js' class='accounts-head'>
      <h3 id='manage-head-js'>Accounts</h3>
      <button id="manage-accounts-js" type="button" name="button">
        Manage Accounts
      </button>
    </section>
    <section id='accounts-js' class='accounts-container'>
    </section>
  </section>
  `,
  account: (account) => {
    const { id, type, company } = account
    const accountTypes = {
      credit: '../images/icons/credit-card.svg',
      savings: '../images/icons/savings.svg',
      checking: '../images/icons/checking.svg'
    }
    return `
    <section id="${id}" class='account-details account-details-js'>
      <img class='icon' src="${accountTypes[type.toLowerCase()]}" alt="${type} icon">
      <p class='account-detail'>${company}</p>
      <p class='account-detail'>${type}</p>
    </section>
    `
  },
  transactions: ({totalIn, totalOut}) => {
    let total = totalIn - totalOut;
    let totalClass = total > 0 ? 'inflow' : 'outflow';
    if (total === 0) {
      totalClass = ''
    }

    return  `
      <section class='recent-transactions'>
        <section class='transactions-header'>
          <h3>Recent Transaction</h3>
          <button id='new-transaction-js' class="btn trans" type="button" name="New Transaction">New Transaction</button>
        </section>
        <table class='transactions'>
          <tbody id='transactions-js'>
            <tr id='table-heads' class="trow">
              <th>Date</th>
              <th>Payee</th>
              <th>Inflow</th>
              <th>Outflow</th>
            </tr>
          </tbody>
        </table>
        <ul class='totals'>
          <li class='inflow'><span class='total-label'>In:</span> $${totalIn}</li>
          <li class='outflow'><span class='total-label'>Out:</span> -$${totalOut}</li>
          <li class='${totalClass}'><span class='total-label'>Total:</span> $${total}</li>
        </ul>
      </section>
      `
  },
  accountOption: (account) => {
    let {company, type} = account;
    let value = `${company}: ${type}`
    let option = `<option value="${value}">${value}</option>`
    return option
  },
  requiredParameterErrMsg: `
  <p id='err-msg' class='error'>Please Fill Out All *required Feilds<p>
  `
  ,
  requiredAmountInputErrMsg: `
  <p id='err-msg' class='error'>Please Inflow/Outflow amount must be greater than 0<p>
  `
  ,
  newTransactionModle: `
    <section id='new-transaction-modle' class='new-transaction-modle'>
      <button class='close-modle-button' id="close-form-js" type="button" name="button">
        <img class='close-icon' src='./images/icons/close.svg' alt="Home icon">
      </button>
      <h3>Transaction<h3>
      <form>
        <label for='date-js'>*Date:
          <input id='date-js' type="text" name="date" value=${moment().format("MM/DD/YY")}>
        </label>
        <label for='account-selector-js'>*Account from/to:
          <select id='account-selector-js' name="account selector">
            <option id='account-option-js' selected disabled value="">Select Account</option>
          </select>
        </label>
        <label for='payee-js'>*Payee:
          <input id='payee-js' type="text" name="payee" placeholder="Who">
        </label>
        <label for='inflow-js'>Inflow:
          <input id='inflow-js' type="number" name="inflow" placeholder='0'>
        </label>
        <label for='outflow-js'>Outflow:
          <input id='outflow-js' type="number" name="outflow" placeholder='0'>
        </label>
        <button id='log-transaction' type="button" name="log">Log Transaction</button>
      </form>
    </section>
    `,
  transaction: (date, payee, inflow, outflow) => `
    <tr class="trow">
      <td>${date}</td>
      <td>${payee}</td>
      <td class='inflow inflow-js'>$${inflow}</td>
      <td class='outflow outflow-js'>-$${outflow}</td>
    </tr>
  `
}
