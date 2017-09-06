# Angular Swagger FormField

Angular (2 and above) module with some components to build a model-driven form using the generated classes from the [swagger-ts-generator](https://www.npmjs.com/package/swagger-ts-generator).
After you setup and executed the [swagger-ts-generator](https://www.npmjs.com/package/swagger-ts-generator), 
you can use the generated classes to build model driven forms using this module.

See [angular-swagger-form-field-sample](https://github.com/areijngoudt/angular-swagger-form-field-sample) for a sample how to use the generated classes and the classes from this package.

# Setup
Download the module with npm:

```bash
npm install --save angular-swagger-form-field
```

If you use SystemJS, add the module in `systemjs.config.js`:

```javascript
    ...
    map: {
      ...
      'angular-swagger-form-field': 'npm:angular-swagger-form-field/bundles'
      ...
    },

    packages: {
      ...
      'angular-swagger-form-field': { defaultExtension: 'js' }
      ...
    }
```

Add the module to your AppModule:

```typescript
...
import { SwaggerFormFieldModule } from 'angular-swagger-form-field';
...
@NgModule({
  imports: [
    ...
    SwaggerFormFieldModule,
    ...
  ],
})
```

## ng2-translate
The contents of the generated enum language files can be used in ng2-translate to translate select-options in the UI.

Include ngx-translate in the AppModule:

```typescript
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
// export function HttpLoaderFactory(http: Http) {
//   return new TranslateHttpLoader(http);
// }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
...
@NgModule({
   ...
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ...
  ],
  ...
})
...
```

Configure ng2-translate in the AppComponent:

```typescript
import { TranslateService } from '@ngx-translate/core';
...
export class AppComponent {
    constructor(
        ...
        private translate: TranslateService,
        ...) {
            // this language will be used as a fallback when a translation isn't found in the current language
            translate.setDefaultLang('en');

            // the lang to use, if the lang isn't available, it will use the current loader to get them
            translate.use('en');
        }
}
```

# Model driven form
You can use the generated models to build an Angular (2 and above) model driven form (aka reactive form).
Each model contains a `$FormGroup` property. This property can be used in a component to create a model driven form 
by feeding it to the FormBuilder:

```typescript
import { Pet } from '../models/webapi';
...
export class XxxComponent implements OnInit {
    constructor(
        private formBuilder: FormBuilder,
        ...) {
    }

    form: FormGroup;
    showErrors = false;
    allEnums: AllEnums;
    pet: Pet;

    ngOnInit() {
        this.allEnums = AllEnums.instance;
        this.pet = this.petService.createPet();
        this.form = this.formBuilder.group({
            pet: $formGroup,
        });
    }

    validateForm(form: FormGroup) {
        this.showErrors = !this.form.valid;
        if (!form.valid) {
            return false;
        }
        this.pet.setValues(this.form.value.pet);
        return true;
    }
}
```

Now the View can bind to the fields:

```html
<form class="col-sm-9 form" role="form" 
    [formGroup]="form" 
    (ngSubmit)="validateForm(form)" 
    [ngClass]="{'form-show-errors': showErrors}" 
    novalidate>
    <fieldset formGroupName="pet">
        <h4>Pet</h4>
        <sf-form-field label="name" cols="2">
            <input type="text" 
                name="name" 
                class="form-control form-control-sm" 
                formControlName="name" />
        </sf-form-field>
    </fieldset>
</form>
```

The `sf-form-field` is a wrapper component which generates a formfield using a Bootstrap structure and wrappes the elements content in an `sf-form-input` component.
The `sf-form-input` component adds validation message logic and UI.
For the actual validation a third component named `sf-validation-messages` is used.

**Tip:**
You can choose to implement your own form-field components if the provided bootstrap options don't satisfy your needs. 
Just look at the implemented components and roll up your own. You can use the `form-control-finder` to find the real input field to attach the validations to.             

# enums
The generated enums and enum language files can be used to populate a select boxes.

Define the AllEnums in the Component so the View can bind to it (see the enums section above) and use in the View:

```html
<sf-form-field label="type" cols="2">
    <select name="type" class="form-control" formControlName="type">
        <option value=""></option>
        <option *ngFor="let enum of allEnums.type | tfEnum" [ngValue]="enum">
            {{enum | translate}}
        </option>
    </select>
</sf-form-field>
```

(the `tfEnum` pipe converts an enum instance to an array. The `translate` pipe translates the enum value to the value from the language file).

# ValidationMessages
The `validation-messages` class contains the validation messages to use:

```typescript
    /**
     * The individual validation messages with placeholders.
     */
    private static config = {
        'required': 'Dit veld is verplicht',
        'minlength': 'Dit veld moet minimaal {{required}} karakters bevatten maar bevat er {{actual}}',
        'maxlength': 'Dit veld mag maximaal {{required}} karakters bevatten maar bevat er {{actual}}',
        'minValue': 'Dit veld mag minimaal {{required}} bevatten maar bevat {{actual}}',
        'maxValue': 'Dit veld mag maximaal {{required}} bevatten maar bevat {{actual}}',
        'email': 'Dit veld bevat een ongedlig email adres',
        'pattern': 'Dit veld bevat tenminste één ongeldig karakter (patroon is {{required}})',
    };
```

You can override a message by calling the `setValidationErrorMessage` method in AppComponent:

```typescript
import { ValidationMessages } from 'angular-swagger-form-field/components';
...
export class AppComponent {
    constructor(...) {
        ValidationMessages.setValidationErrorMessage(
            'required', 'This field is mandatory'
        );
    }
}
```

