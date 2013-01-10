AlloyUnitTesting
================

A try to make Appcelerator Alloy unit-testable.

Usage
-----------------
You will need to install jasmine-node

  npm install -g jasmine-node


After cloning

  cd AlloyUnitTesting
  export NODE_PATH=$(pwd)/Resources
  alloy compile; jasmine-node spec

The .spec.js files in *AlloyUnitTesting/spec* will be tested.

Background
-----------------
The export is needed to be compatible to the Alloy requires in the generated files which will be tested in the end.

The file *AlloyUnitTesting/spec/tistub.js* is needed to simulate the Ti namespace. As of yet this is not complete which is true for this whole project. It works in this way. Everything else needs to be tested.

The sql Adapter does not work yet so we are using a very simple runtime adapter (*app/lib/alloy/sync/MyRuntimeSync*) for the collection testing.