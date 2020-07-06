// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file

// packages
import $ from 'jquery';
import { everyPage, dashboard } from './Veiws/AllPages.js'

// images & styles
import './css/base.scss';
import './images/icons/checking.svg';
import './images/icons/close.svg';
import './images/icons/credit-card.svg';
import './images/icons/dashboard.svg';
import './images/icons/elephant.svg';
import './images/icons/insights.svg';
import './images/icons/profile.svg';
import './images/icons/savings.svg';
import './images/icons/transactions.svg';


const root = $('#root')
const rootMain = $('#root-main')
const userName = 'Bill';
let bannerClosed = false
let income = 2000;
let expenses = 1500;
let creditScore = 750;
let accounts = [
  {
    type: 'savings',
    company: 'USAA'
  },
  {
    type: 'credit',
    company: 'chase'
  },
  {
    type: 'checking',
    company: 'USAA'
  },
  {
    type: 'credit',
    company: 'USAA'
  },
];
const transactions = []

// render page
const renderPage = page => {
  rootMain.empty()
  rootMain.append(everyPage.header)
  page === 'dashboard' && renderDashboard()
}

// render dashboard

const renderAccountOverveiw = (node) => {
  node.append(dashboard.accountOverveiw(income, expenses, creditScore))
  $('#close-icon-js').on('click', function() {
    bannerClosed = true
    renderPage('dashboard')
  })
}

const renderAccounts = (node) => {
  node.append(dashboard.accounts)
  accounts.forEach(account => {
    $('#accounts-js').append(dashboard.account(account))
  });
}

const totalsHelper = () => {
  return transactions.reduce((totals, transaction) => {
    console.log(totals);
    if (transaction.inflow) {
      totals.totalIn += transaction.inflow
    }
    if (transaction.outflow) {
      totals.totalOut += transaction.outflow
    }
    return totals
  }, {
    totalIn: 0,
    totalOut: 0,
  })
}

const renderTransactions = (node) => {
  node.append(dashboard.transactions(totalsHelper()))
  $('#new-transaction-js').on('click', () => {
    root.append(dashboard.newTransactionModle)
    $('#log-transaction').on('click', (e) => {
      e.preventDefault()
      let date = $('#date-js').val()
      let payee = $('#payee-js').val()
      let inflow = $('#inflow-js').val()
      let outflow = $('#outflow-js').val()
      transactions.push({
        date,
        payee,
        inflow: parseInt(inflow),
        outflow: parseInt(outflow)
      })
      $('#new-transaction-modle').remove()
      renderPage('dashboard')
    })
  })
  transactions.forEach(transaction => {
    const {date, payee, inflow, outflow} = transaction
    $(dashboard.transaction(date, payee, inflow, outflow)).insertAfter('#table-heads')
  });

}

const renderDashboard = () => {
  rootMain.append(dashboard.columns)
  const columnOne = $('#column-1')
  const columnTwo = $('#column-2')
  !bannerClosed && columnOne.append(dashboard.banner(userName))
  renderAccountOverveiw(columnOne)
  renderAccounts(columnOne)
  renderTransactions(columnTwo)
}


$( document ).ready(function() {
  root.prepend( everyPage.nav)
  renderPage('dashboard')
});
