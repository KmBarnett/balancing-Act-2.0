export const everyPage = {
  header: `<h1>Balancing Act</h1>`,
  nav: `
  <nav>
    <button id="home-js" type="button" name="button">
      <img class='icon' src='./images/icons/elephant.svg' alt="Home icon">
    </button>
    <fieldset id='nav-selection'>
      <label for="dashboard-icon-js">
        <input id='dashboard-icon-js' type="radio" name="nav" value="dashboard"/>
        <img class='icon' src='./images/icons/dashboard.svg' alt="dashboard icon">
      </label>
      <label for="wallet-icon-js">
        <input id='wallet-icon-js' type="radio" name="nav" value="wallet"/>
        <img class='icon' src='./../images/icons/credit-card.svg' alt=" wallet icon">
      </label>
      <label for="profile-icon-js">
        <input id='profile-icon-js' type="radio" name="nav" value="profile"/>
        <img class='icon' src='./../images/icons/profile.svg' alt="profile icon">
      </label>
    </fieldset>
  </nav>
  `
}

export const dashboard = {
  banner: name => `<h2>Welcome ${name} </h2>`,
  accountOverVeiw: (income, expenses, creditScore) => `
  <section>
    <div class='data-box'>
      <p class='data-item data-type'>Income</p>
      <p class='data-item'>${income}</p>
    </div>
    <div class='data-box'>
      <p class='data-item data-type'>Expenses</p>
      <p class='data-item'>${expenses}</p>
    </div>
    <div class='data-box'>
      <p class='data-item data-type'>Credit Score</p>
      <p class='data-item'>${creditScore}</p>
    </div>
  </section>
  `,
  accounts: `
  <section>
    <section>
      <h3>Accounts</h3>
      <button id="manage-accounts-js" type="button" name="button">
        Manage Accounts
      </button>
    </section>
    <section id='accounts-js'>
    </section>
  </section>
  `,
  account: (type, company) => {
    const accountTypes = {
      credit: '../images/icons/credit-card.svg',
      savings: '../images/icons/savings.svg',
      checking: '../images/icons/checking.svg'
    }
    return `
    <section>
      <img class='icon' src="${accountTypes[type]}" alt="${type} icon">
      <p>${company}</p>
      <p>${type}</p>
    </section>
    `
  },
  transactions: `
    <table>
      <tbody class='transactions'>
        <tr class="trow">
          <th class="tleft">Date</th>
          <th class="tleft">Payee</th>
          <th class="tright">Inflow</th>
          <th class="tright">Outflow</th>
        </tr>
      </tbody>
    </table>
    `
}
