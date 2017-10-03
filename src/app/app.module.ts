import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

// Login
import { PreLoginPage } from '../pages/pre-login/pre-login';
import { LoginPage } from '../pages/pre-login/login/login';
import { LoginVerifyPage } from '../pages/pre-login/login-verify/login-verify';
import { LoginOtpPage } from '../pages/pre-login/login-otp/login-otp';
import { LoginSetPasswordPage } from '../pages/pre-login/login-set-password/login-set-password';
import { LoginPinPage } from '../pages/pre-login/login-pin/login-pin';
import { RegisterPage } from '../pages/register/register';

// Profile
import { ProfilePage } from '../pages/profile/profile';

// Payment
import { PaymentPage } from '../pages/payment/payment';
import { InvestmentLedgerPage } from '../pages/investment-ledger/investment-ledger';
import { TransactionHistoryPage } from '../pages/transaction-history/transaction-history';
import { PaymentWithdrawalPage } from '../pages/payment/payment-withdrawal/payment-withdrawal';
import { PaymentResponsePage } from '../pages/payment/payment-response/payment-response';
import { PaymentDepositPage } from '../pages/payment/payment-deposit/payment-deposit';
import { PaymentRecurringPage } from '../pages/payment/payment-recurring/payment-recurring';

// Components
import { TabsPage } from '../pages/tabs/tabs';
import { NavbarComponent } from '../components/navbar/navbar';
import { LoginLogoComponent } from '../components/login-logo/login-logo';

// Charts
import { ChartsPage } from '../pages/charts/charts';
import { ChartsModule } from 'ng2-charts';
import { GraphsPage } from '../pages/charts/graphs/graphs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BTProvider } from '../providers/braintree';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,

    PreLoginPage,
    LoginPage,
    RegisterPage,
    LoginVerifyPage,
    LoginOtpPage,
    LoginSetPasswordPage,
    LoginPinPage,

    ProfilePage,

    PaymentPage,
    InvestmentLedgerPage,
    TransactionHistoryPage,
    PaymentWithdrawalPage,
    PaymentResponsePage,
    PaymentDepositPage,
    PaymentRecurringPage,

    ChartsPage,
    GraphsPage,

    LoginLogoComponent,
    NavbarComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,

    PreLoginPage,
    LoginPage,
    RegisterPage,
    LoginVerifyPage,
    LoginOtpPage,
    LoginSetPasswordPage,
    LoginPinPage,

    ProfilePage,

    PaymentPage,
    InvestmentLedgerPage,
    TransactionHistoryPage,
    PaymentResponsePage,
    PaymentDepositPage,
    PaymentRecurringPage,

    ChartsPage,
    GraphsPage,

    LoginLogoComponent,
    NavbarComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BTProvider
  ]
})
export class AppModule {}
