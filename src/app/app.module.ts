import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { BlockchainService } from './services/blockchain.service';
import { SettingsComponent } from './pages/settings/settings.component';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';
import { WalletBalanceComponent } from './pages/wallet-balance/wallet-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockViewComponent,
    BlockchainViewerComponent,
    TransactionsTableComponent,
    SettingsComponent,
    CreateTransactionComponent,
    PendingTransactionsComponent,
    WalletBalanceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [BlockchainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
