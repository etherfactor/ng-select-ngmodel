# NgSelectNgmodel

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Issue replication

1. Attempt to change the content of the [ng-select](https://github.com/ng-select/ng-select) components by clicking the `Item #` buttons below, or clear out the ng-select components by clicking `Clear`. The components should update accordingly.
2. Click both of the ng-select components to open the dropdown.
3. Attempt to change the content again by using the `Item #` or `Clear` buttons. The ng-select without [editableSearchTerm]="true" will update, while the ng-select with [editableSearchTerm]="true" will no longer appear to update.
4. Clear out both components using the `x`.
5. Attempt to change the content again by using the `Item #` or `Clear` buttons. Both ng-select components should update as expected again.
