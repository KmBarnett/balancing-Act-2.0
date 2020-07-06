import moment from 'moment';

export const everyPage = {
  header: `<h1>Balancing Act</h1>`,
  nav: `
  <nav>
    <button class='home-icon' id="home-icon-js" type="button" name="button">
      <img class='icon home-icon' src='./images/icons/elephant.svg' alt="Home icon">
    </button>
    <section class='nav-feildset' id='nav-selection-js'>
      <section>
        <input checked id='dashboard-icon-js' type="radio" name="nav" value="dashboard"/>
        <label for="dashboard-icon-js">
          <img class='icon' src='./images/icons/dashboard.svg' alt="dashboard icon">
        </label>
      </section>
      <section>
        <input id='wallet-icon-js' type="radio" name="nav" value="wallet"/>
        <label for="wallet-icon-js">
          <img class='icon' src='./../images/icons/credit-card.svg' alt=" wallet icon">
        </label>
      </section>
      <section>
        <input id='profile-icon-js' type="radio" name="nav" value="profile"/>
        <label for="profile-icon-js">
          <img class='icon' src='./../images/icons/profile.svg' alt="profile icon">
        </label>
      </section>
    </section>
  </nav>
  `
}

export const dashboard = {
  columns:`
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
      <img class='icon close-icon' src='./images/icons/close.svg' alt="Home icon">
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
  accounts: `
  <section>
    <section class='accounts-head'>
      <h3>Accounts</h3>
      <button id="manage-accounts-js" type="button" name="button">
        Manage Accounts
      </button>
    </section>
    <section id='accounts-js' class='accounts-container'>
    </section>
  </section>
  `,
  account: (account) => {
    const { type, company } = account
    const accountTypes = {
      credit: '../images/icons/credit-card.svg',
      savings: '../images/icons/savings.svg',
      checking: '../images/icons/checking.svg'
    }
    return `
    <section class='account-details'>
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
  newTransactionModle: `
    <section id='new-transaction-modle' class='new-transaction-modle'>
      <h3>Transaction<h3>
      <form>
        <label for='date-js'>Date:
          <input id='date-js' type="text" name="date" value=${moment().format("MM/DD/YY")}>
        </label>
        <label for='payee-js'>Payee:
          <input id='payee-js' type="text" name="payee" placeholder="payee">
        </label>
        <label for='inflow-js'>Inflow:
          <input id='inflow-js' type="text" name="inflow" placeholder="inflow">
        </label>
        <label for='outflow-js'>Outflow:
          <input id='outflow-js' type="text" name="outflow" placeholder="outflow">
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
