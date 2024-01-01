import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import { CheckoutConfig } from '@spartacus/checkout/base/root';
import { AuthConfig, FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from '@spartacus/core';
import {
  defaultCmsContentProviders,
  layoutConfig,
  mediaConfig,
  PWAModuleConfig,
  ViewConfig
} from '@spartacus/storefront';
import { environment } from '../../environments/environment';
import { customRoutingConfig } from '../custom-routing.config';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    ...defaultCmsContentProviders,
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          prefix: environment.backend.occ.prefix,
          baseUrl: environment.backend.occ.baseUrl,
        }
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {},
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
    }),
    provideConfig(<PWAModuleConfig>{
      pwa: {
        enabled: true,
        addToHomeScreen: true,
      }
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '6.4'
      }
    }),
    provideConfig(<CheckoutConfig>{
      checkout: {
        guest: true
      }
    }),
    provideConfig(<AuthConfig>{
      authentication: {
        client_id: 'mobile_android',
        client_secret: 'secret',
      },
    }),
    provideConfig(customRoutingConfig)
  ]
})
export class SpartacusConfigurationModule {}
