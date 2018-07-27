//// [1computedStringEnums.ts]
declare function bar(): string
enum E {
  foo = bar();
}

//// [1computedStringEnums.js]
var E;
(function (E) {
    E[E["foo"] = bar()] = "foo";
})(E || (E = {}));
