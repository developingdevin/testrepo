import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { BlockchainService } from './services/blockchain.service';
@NgModule({
  declarations: [AppComponent, BlockViewComponent, BlockchainViewerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BlockchainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
