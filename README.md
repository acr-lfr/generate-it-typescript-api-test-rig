#openapi-nodegen-typescript-api-test-rig

! This is a work in progress.

## Setup
- In a new directory `run npm init`
- Add to the dev dependencies [openapi-nodegen](https://www.npmjs.com/package/openapi-nodegen)
  - `npm i --save-dev openapi-nodegen`
- Add the nodegen to the `package.json` scripts:
  ```
  "generate:nodegen:test-rig": "openapi-nodegen ./openapi.yml -m openapi-nodegen ./api_1.0.0.yml -t ../open-source-projects/openapi-nodegen-typescript-api-test-rig",
  ```

## Run it
Assuming the above setup steps have been successfully completed you can simply run the script you added.
 (Ensure you correct the name of the swagger file, the above assumes the swagger file is at the root of the directory and named "./api_1.0.0.yml")
```
npm run generate:nodegen:test-rig
```

This will output the empty test files and the client files which will call the api you are testing.

#### Example
"tests/AdminTest.ts"
```typescript
import AdminService from '../src/nodegen/services/AdminService';

describe('Admin', () => {
  it('Operation ID: adminHealthGet', next => {
    //
    next();
  });
});
```

