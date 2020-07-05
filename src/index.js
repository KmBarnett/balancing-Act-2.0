// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file

// packages
import $ from 'jquery';
import { everyPage } from './Veiws/AllPages.js'

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

const renderPage = () => {
  root.prepend( everyPage.nav)
  rootMain.append(everyPage.header)
}


$( document ).ready(function() {
  renderPage()
});
