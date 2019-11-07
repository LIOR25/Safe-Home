import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './frontend/components/header/header.component';
import { HomePageComponent } from './frontend/pages/home-page/home-page.component';
import { WebcamComponent } from './frontend/components/webcam/webcam.component';
import { TableComponent } from './frontend/components/table/table.component';
import { NavigationComponent } from './frontend/components/navigation/navigation.component';
import { ContentComponent } from './frontend/components/content/content.component';
import { BoolToYesNoPipe } from './frontend/pipes/bool-to-yes-no.pipe';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DesktopCameraService } from './frontend/services/desktop-camera.service';
import { MobileCameraService } from './frontend/services/mobile-camera.service';
import { FaceRecognitionService } from './frontend/services/face-recognition.service';
import { PlatformInformationProvider } from './frontend/services/plaform-information.provider';
import { AbstractCameraService, cameraFactory } from './frontend/services/abstract-camera.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    WebcamComponent,
    TableComponent,
    NavigationComponent,
    ContentComponent,
    BoolToYesNoPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    DesktopCameraService,
    MobileCameraService,
    FaceRecognitionService,
    PlatformInformationProvider,
    {
      provide: AbstractCameraService,
      useFactory: cameraFactory,
      deps: [PlatformInformationProvider]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
