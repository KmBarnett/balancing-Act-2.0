// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file

// packages
import $ from 'jquery';
import uniqid from 'uniqid';
import { everyPage, dashboard } from './Veiws/AllPages.js'

// images & styles
import './css/base.scss';
import './images/icons/checking.svg';
import './images/icons/close.svg';
import './images/icons/credit-card.svg';
import './images/icons/dashboard.svg';
import './images/icons/plus.svg';
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
    id: uniqid(),
    type: 'savings',
    company: 'USAA'
  },
  {
    id: uniqid(),
    type: 'credit',
    company: 'chase'
  },
  {
    id: uniqid(),
    type: 'checking',
    company: 'USAA'
  },
  {
    id: uniqid(),
    type: 'credit',
    company: 'USAA'
  },
];
const transactions = []

// render page
const renderPage = page => {
  rootMain.empty()
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

const validateAccountAdd = () => {
  const form = $('#account-add-form-js')
  $('#err-msg').remove()
  let type = $('#account-selector-js').val()
  let company = $('#account-name-js').val()
  const newAccount = {
    id: uniqid(),
    type,
    company
  }
  for (let requiredParameter of ['type', 'company']) {
    if (!newAccount[requiredParameter]) {
      form.prepend(dashboard.requiredParameterErrMsg)
      return
    }
  }
  form.trigger('reset')
  accounts.push(newAccount)
  renderAccounts()
  attachCloseAccountBtns()
  // renderPage('dashboard')
}

const renderAccounts = () => {
  const accountsContainer = $('#accounts-js')
  accountsContainer.empty()
  accounts.forEach(account => {
    accountsContainer.prepend(dashboard.account(account))
  });
}

const renderAddAccount = () => {
  $(dashboard.accountAddForm).insertAfter('#accounts-head-js')
  $('#account-add-button-js').on('click', validateAccountAdd)
}

const attachCloseAccountBtns  = () => {
  $('.account-details-js').prepend(dashboard.accountCloseButton)
  $('.account-close-js').on('click', e => {
    accounts = accounts.filter(account => account.id !== e.target.closest('section').id)
    $(e.target.closest('section')).remove()
  })
}

const renderManageAccounts = () => {
  $('#manage-accounts-js').on('click', () => {
    $('#manage-accounts-js').text('Done').off().attr("id", "done-js")
    renderAddAccount()
    attachCloseAccountBtns()
    $('#done-js').on('click', () => {
      renderPage('dashboard')
    })
  })
}

const renderAccountsContainer = (node) => {
  node.append(dashboard.accounts)
  renderAccounts()
  renderManageAccounts()
}

const totalsHelper = () => {
  return transactions.reduce((totals, transaction) => {
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
const renderAccountOptions = () => {
  accounts.forEach(account => {
    $(dashboard.accountOption(account)).insertAfter('#account-option-js')
  });
}

const validateTransction = transction => {
  $('#err-msg').remove()
  for (let requiredParameter of ['date', 'payee', 'account']) {
    if (!transction[requiredParameter]) {
      $('#new-transaction-modle').prepend(dashboard.requiredParameterErrMsg)
      return
    }
  }
  let inOutEmpty = transction.inflow === 0 && transction.outflow === 0;
  if (inOutEmpty) {
    $('#new-transaction-modle').prepend(dashboard.requiredAmountInputErrMsg)
    return
  }
  transactions.push(transction)
  $('#new-transaction-modle').remove()
  renderPage('dashboard')
}

const renderTransactionsModle = () => {
  $('#new-transaction-modle').remove()
  root.append(dashboard.newTransactionModle)
  renderAccountOptions()
  $('#close-form-js').on('click', e => {
    $(e.target.closest('section')).remove()
  })
  $('#log-transaction').on('click', (e) => {
    e.preventDefault()
    let date = $('#date-js').val()
    let payee = $('#payee-js').val()
    let account = $('#account-selector-js').val()
    let inflow = $('#inflow-js').val() || 0
    let outflow = $('#outflow-js').val() || 0
    let transction = {
      date,
      payee,
      account,
      inflow: parseInt(inflow),
      outflow: parseInt(outflow)
    }
    validateTransction(transction)
  })
}

const renderTransactions = (node) => {
  node.append(dashboard.transactions(totalsHelper()))
  $('#new-transaction-js').on('click', () => {
    renderTransactionsModle()
  })
  transactions.forEach(transaction => {
    const {date, payee, inflow, outflow} = transaction
    $(dashboard.transaction(date, payee, inflow, outflow)).insertAfter('#table-heads')
  });

}

const renderDashboard = () => {
  rootMain.append(everyPage.header)
  rootMain.append(dashboard.columns)
  const columnOne = $('#column-1')
  const columnTwo = $('#column-2')
  !bannerClosed && columnOne.append(dashboard.banner(userName))
  renderAccountOverveiw(columnOne)
  renderAccountsContainer(columnOne)
  renderTransactions(columnTwo)
}


$( document ).ready(function() {
  root.prepend(everyPage.nav)
  $('input[name="nav"]').on('click', e => {
    renderPage(e.target.value)
  })
  renderPage('dashboard')
});
