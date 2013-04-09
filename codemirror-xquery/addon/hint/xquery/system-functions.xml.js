CodeMirror.defineXQueryModule({
  "prefix" : "fn",
  "prefixRequired" : false,
  "namespace" : "http://www.w3.org/2005/xpath-functions",
  "functions" : [ {
    "name" : "abs",
    "params" : [ {
      "name" : "arg",
      "as" : "numeric?"
    } ],
    "info" : "<p xmlns=\"http://www.w3.org/1999/xhtml\"><b>Summary:</b><br/>Returns the absolute value of <code>$arg</code>. If<code>$arg</code> is negative returns <code>-$arg</code> otherwise returns <code>$arg</code>. If type of <code>$arg</code> is one ofthe four numeric types <code>xs:float</code>,<code>xs:double</code>, <code>xs:decimal</code> or<code>xs:integer</code> the type of the result is the same as thetype of <code>$arg</code>. If the type of <code>$arg</code> is atype derived from one of the numeric types, the result is aninstance of the base numeric type.</p>"
  }, {
    "name" : "adjust-date-to-timezone",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:date?"
    } ]
  }, {
    "name" : "adjust-date-to-timezone",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:date?"
    }, {
      "name" : "timezone",
      "as" : "xs:dayTimeDuration?"
    } ]
  }, {
    "name" : "adjust-dateTime-to-timezone",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:dateTime?"
    } ]
  }, {
    "name" : "adjust-dateTime-to-timezone",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:dateTime?"
    }, {
      "name" : "timezone",
      "as" : "xs:dayTimeDuration?"
    } ]
  }, {
    "name" : "adjust-time-to-timezone",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:time?"
    } ]
  }, {
    "name" : "adjust-time-to-timezone",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:time?"
    }, {
      "name" : "timezone",
      "as" : "xs:dayTimeDuration?"
    } ]
  }, {
    "name" : "avg",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType*"
    } ]
  }, {
    "name" : "base-uri",
    "params" : []
  }, {
    "name" : "base-uri",
    "params" : [ {
      "name" : "arg",
      "as" : "node()?"
    } ]
  }, {
    "name" : "boolean",
    "params" : [ {
      "name" : "arg",
      "as" : "item()*"
    } ]
  }, {
    "name" : "ceiling",
    "params" : [ {
      "name" : "arg",
      "as" : "numeric?"
    } ]
  }, {
    "name" : "codepoint-equal",
    "params" : [ {
      "name" : "comparand1",
      "as" : "xs:string?"
    }, {
      "name" : "comparand2",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "codepoints-to-string",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:integer*"
    } ]
  }, {
    "name" : "collection",
    "params" : []
  }, {
    "name" : "collection",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "compare",
    "params" : [ {
      "name" : "comparand1",
      "as" : "xs:string?"
    }, {
      "name" : "comparand2",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "compare",
    "params" : [ {
      "name" : "comparand1",
      "as" : "xs:string?"
    }, {
      "name" : "comparand2",
      "as" : "xs:string?"
    }, {
      "name" : "collation",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "concat",
    "params" : [ {
      "name" : "arg1",
      "as" : "xs:anyAtomicType?"
    }, {
      "name" : "arg2",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "contains",
    "params" : [ {
      "name" : "arg1",
      "as" : "xs:string?"
    }, {
      "name" : "arg2",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "contains",
    "params" : [ {
      "name" : "arg1",
      "as" : "xs:string?"
    }, {
      "name" : "arg2",
      "as" : "xs:string?"
    }, {
      "name" : "collation",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "count",
    "params" : [ {
      "name" : "arg",
      "as" : "item()*"
    } ]
  }, {
    "name" : "current-date",
    "params" : []
  }, {
    "name" : "current-dateTime",
    "params" : []
  }, {
    "name" : "current-time",
    "params" : []
  }, {
    "name" : "data",
    "params" : [ {
      "name" : "arg",
      "as" : "item()*"
    } ]
  }, {
    "name" : "dateTime",
    "params" : [ {
      "name" : "arg1",
      "as" : "xs:date?"
    }, {
      "name" : "arg2",
      "as" : "xs:time?"
    } ]
  }, {
    "name" : "day-from-date",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:date?"
    } ]
  }, {
    "name" : "day-from-dateTime",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:dateTime?"
    } ]
  }, {
    "name" : "days-from-duration",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:duration?"
    } ]
  }, {
    "name" : "deep-equal",
    "params" : [ {
      "name" : "parameter1",
      "as" : "item()*"
    }, {
      "name" : "parameter2",
      "as" : "item()*"
    } ]
  }, {
    "name" : "deep-equal",
    "params" : [ {
      "name" : "parameter1",
      "as" : "item()*"
    }, {
      "name" : "parameter2",
      "as" : "item()*"
    }, {
      "name" : "collation",
      "as" : "string"
    } ]
  }, {
    "name" : "default-collation",
    "params" : []
  }, {
    "name" : "distinct-values",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType*"
    } ]
  }, {
    "name" : "distinct-values",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType*"
    }, {
      "name" : "collation",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "doc",
    "params" : [ {
      "name" : "uri",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "doc-available",
    "params" : [ {
      "name" : "uri",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "document-uri",
    "params" : [ {
      "name" : "arg",
      "as" : "node()?"
    } ]
  }, {
    "name" : "empty",
    "params" : [ {
      "name" : "arg",
      "as" : "item()*"
    } ]
  }, {
    "name" : "encode-for-uri",
    "params" : [ {
      "name" : "uri-part",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "ends-with",
    "params" : [ {
      "name" : "arg1",
      "as" : "xs:string?"
    }, {
      "name" : "arg2",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "ends-with",
    "params" : [ {
      "name" : "arg1",
      "as" : "xs:string?"
    }, {
      "name" : "arg2",
      "as" : "xs:string?"
    }, {
      "name" : "collation",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "error",
    "params" : []
  }, {
    "name" : "error",
    "params" : [ {
      "name" : "error",
      "as" : "xs:QName"
    } ]
  }, {
    "name" : "error",
    "params" : [ {
      "name" : "error",
      "as" : "xs:QName?"
    }, {
      "name" : "description",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "error",
    "params" : [ {
      "name" : "error",
      "as" : "xs:QName?"
    }, {
      "name" : "description",
      "as" : "xs:string"
    }, {
      "name" : "error-object",
      "as" : "item()*"
    } ]
  }, {
    "name" : "escape-html-uri",
    "params" : [ {
      "name" : "uri",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "exactly-one",
    "params" : [ {
      "name" : "arg",
      "as" : "item()*"
    } ]
  }, {
    "name" : "exists",
    "params" : [ {
      "name" : "arg",
      "as" : "item()*"
    } ]
  }, {
    "name" : "false",
    "params" : []
  }, {
    "name" : "floor",
    "params" : [ {
      "name" : "arg",
      "as" : "numeric?"
    } ]
  }, {
    "name" : "hours-from-dateTime",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:dateTime?"
    } ]
  }, {
    "name" : "hours-from-duration",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:duration?"
    } ]
  }, {
    "name" : "hours-from-time",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:time?"
    } ]
  }, {
    "name" : "id",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:string*"
    } ]
  }, {
    "name" : "id",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:string*"
    }, {
      "name" : "node",
      "as" : "\nnode()"
    } ]
  }, {
    "name" : "idref",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:string*"
    } ]
  }, {
    "name" : "idref",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:string*"
    }, {
      "name" : "node",
      "as" : "\nnode()"
    } ]
  }, {
    "name" : "implicit-timezone",
    "params" : []
  }, {
    "name" : "in-scope-prefixes",
    "params" : [ {
      "name" : "element",
      "as" : "element()"
    } ]
  }, {
    "name" : "index-of",
    "params" : [ {
      "name" : "seqParam",
      "as" : "xs:anyAtomicType*"
    }, {
      "name" : "srchParam",
      "as" : "xs:anyAtomicType"
    } ]
  }, {
    "name" : "index-of",
    "params" : [ {
      "name" : "seqParam",
      "as" : "xs:anyAtomicType*"
    }, {
      "name" : "srchParam",
      "as" : "xs:anyAtomicType"
    }, {
      "name" : "collation",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "insert-before",
    "params" : [ {
      "name" : "target",
      "as" : "item()*"
    }, {
      "name" : "position",
      "as" : "xs:integer"
    }, {
      "name" : "inserts",
      "as" : "item()*"
    } ]
  }, {
    "name" : "iri-to-uri",
    "params" : [ {
      "name" : "iri",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "lang",
    "params" : [ {
      "name" : "testlang",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "lang",
    "params" : [ {
      "name" : "testlang",
      "as" : "xs:string?"
    }, {
      "name" : "node",
      "as" : "node()"
    } ]
  }, {
    "name" : "last",
    "params" : []
  }, {
    "name" : "local-name",
    "params" : []
  }, {
    "name" : "local-name",
    "params" : [ {
      "name" : "arg",
      "as" : "node()?"
    } ]
  }, {
    "name" : "local-name-from-QName",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:QName?"
    } ]
  }, {
    "name" : "lower-case",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "matches",
    "params" : [ {
      "name" : "input",
      "as" : "xs:string?"
    }, {
      "name" : "pattern",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "matches",
    "params" : [ {
      "name" : "input",
      "as" : "xs:string?"
    }, {
      "name" : "pattern",
      "as" : "xs:string"
    }, {
      "name" : "flags",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "max",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType*"
    } ]
  }, {
    "name" : "max",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType*"
    }, {
      "name" : "collation",
      "as" : "string"
    } ]
  }, {
    "name" : "min",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType*"
    } ]
  }, {
    "name" : "min",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType*"
    }, {
      "name" : "collation",
      "as" : "string"
    } ]
  }, {
    "name" : "minutes-from-dateTime",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:dateTime?"
    } ]
  }, {
    "name" : "minutes-from-duration",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:duration?"
    } ]
  }, {
    "name" : "minutes-from-time",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:time?"
    } ]
  }, {
    "name" : "month-from-date",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:date?"
    } ]
  }, {
    "name" : "month-from-dateTime",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:dateTime?"
    } ]
  }, {
    "name" : "months-from-duration",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:duration?"
    } ]
  }, {
    "name" : "name",
    "params" : []
  }, {
    "name" : "name",
    "params" : [ {
      "name" : "arg",
      "as" : "node()?"
    } ]
  }, {
    "name" : "namespace-uri",
    "params" : []
  }, {
    "name" : "namespace-uri",
    "params" : [ {
      "name" : "arg",
      "as" : "node()?"
    } ]
  }, {
    "name" : "namespace-uri-for-prefix",
    "params" : [ {
      "name" : "prefix",
      "as" : "xs:string?"
    }, {
      "name" : "element",
      "as" : "element()"
    } ]
  }, {
    "name" : "namespace-uri-from-QName",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:QName?"
    } ]
  }, {
    "name" : "nilled",
    "params" : [ {
      "name" : "arg",
      "as" : "node()?"
    } ]
  }, {
    "name" : "node-name",
    "params" : [ {
      "name" : "arg",
      "as" : "node()?"
    } ]
  }, {
    "name" : "normalize-space",
    "params" : []
  }, {
    "name" : "normalize-space",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "normalize-unicode",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "normalize-unicode",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:string?"
    }, {
      "name" : "normalizationForm",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "not",
    "params" : [ {
      "name" : "arg",
      "as" : "item()*"
    } ]
  }, {
    "name" : "number",
    "params" : []
  }, {
    "name" : "number",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "one-or-more",
    "params" : [ {
      "name" : "arg",
      "as" : "item()*"
    } ]
  }, {
    "name" : "position",
    "params" : []
  }, {
    "name" : "prefix-from-QName",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:QName?"
    } ]
  }, {
    "name" : "QName",
    "params" : [ {
      "name" : "paramURI",
      "as" : "xs:string?"
    }, {
      "name" : "paramQName",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "remove",
    "params" : [ {
      "name" : "target",
      "as" : "item()*"
    }, {
      "name" : "position",
      "as" : "xs:integer"
    } ]
  }, {
    "name" : "replace",
    "params" : [ {
      "name" : "input",
      "as" : "xs:string?"
    }, {
      "name" : "pattern",
      "as" : "xs:string"
    }, {
      "name" : "replacement",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "replace",
    "params" : [ {
      "name" : "input",
      "as" : "xs:string?"
    }, {
      "name" : "pattern",
      "as" : "xs:string"
    }, {
      "name" : "replacement",
      "as" : "xs:string"
    }, {
      "name" : "flags",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "resolve-QName",
    "params" : [ {
      "name" : "qname",
      "as" : "xs:string?"
    }, {
      "name" : "element",
      "as" : "element()"
    } ]
  }, {
    "name" : "resolve-uri",
    "params" : [ {
      "name" : "relative",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "resolve-uri",
    "params" : [ {
      "name" : "relative",
      "as" : "xs:string?"
    }, {
      "name" : "base",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "reverse",
    "params" : [ {
      "name" : "arg",
      "as" : "item()*"
    } ]
  }, {
    "name" : "root",
    "params" : []
  }, {
    "name" : "root",
    "params" : [ {
      "name" : "arg",
      "as" : "node()?"
    } ]
  }, {
    "name" : "round",
    "params" : [ {
      "name" : "arg",
      "as" : "numeric?"
    } ]
  }, {
    "name" : "round-half-to-even",
    "params" : [ {
      "name" : "arg",
      "as" : "numeric?"
    } ]
  }, {
    "name" : "round-half-to-even",
    "params" : [ {
      "name" : "arg",
      "as" : "numeric?"
    }, {
      "name" : "precision",
      "as" : "xs:integer"
    } ]
  }, {
    "name" : "seconds-from-dateTime",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:dateTime?"
    } ]
  }, {
    "name" : "seconds-from-duration",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:duration?"
    } ]
  }, {
    "name" : "seconds-from-time",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:time?"
    } ]
  }, {
    "name" : "starts-with",
    "params" : [ {
      "name" : "arg1",
      "as" : "xs:string?"
    }, {
      "name" : "arg2",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "starts-with",
    "params" : [ {
      "name" : "arg1",
      "as" : "xs:string?"
    }, {
      "name" : "arg2",
      "as" : "xs:string?"
    }, {
      "name" : "collation",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "static-base-uri",
    "params" : []
  }, {
    "name" : "string",
    "params" : []
  }, {
    "name" : "string",
    "params" : [ {
      "name" : "arg",
      "as" : "item()?"
    } ]
  }, {
    "name" : "string-join",
    "params" : [ {
      "name" : "arg1",
      "as" : "xs:string*"
    }, {
      "name" : "arg2",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "string-length",
    "params" : []
  }, {
    "name" : "string-length",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "string-to-codepoints",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "subsequence",
    "params" : [ {
      "name" : "sourceSeq",
      "as" : "item()*"
    }, {
      "name" : "startingLoc",
      "as" : "xs:double"
    } ]
  }, {
    "name" : "subsequence",
    "params" : [ {
      "name" : "sourceSeq",
      "as" : "item()*"
    }, {
      "name" : "startingLoc",
      "as" : "xs:double"
    }, {
      "name" : "length",
      "as" : "xs:double"
    } ]
  }, {
    "name" : "substring",
    "params" : [ {
      "name" : "sourceString",
      "as" : "xs:string?"
    }, {
      "name" : "startingLoc",
      "as" : "xs:double"
    } ]
  }, {
    "name" : "substring",
    "params" : [ {
      "name" : "sourceString",
      "as" : "xs:string?"
    }, {
      "name" : "startingLoc",
      "as" : "xs:double"
    }, {
      "name" : "length",
      "as" : "xs:double"
    } ]
  }, {
    "name" : "substring-after",
    "params" : [ {
      "name" : "arg1",
      "as" : "xs:string?"
    }, {
      "name" : "arg2",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "substring-after",
    "params" : [ {
      "name" : "arg1",
      "as" : "xs:string?"
    }, {
      "name" : "arg2",
      "as" : "xs:string?"
    }, {
      "name" : "collation",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "substring-before",
    "params" : [ {
      "name" : "arg1",
      "as" : "xs:string?"
    }, {
      "name" : "arg2",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "substring-before",
    "params" : [ {
      "name" : "arg1",
      "as" : "xs:string?"
    }, {
      "name" : "arg2",
      "as" : "xs:string?"
    }, {
      "name" : "collation",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "sum",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType*"
    } ]
  }, {
    "name" : "sum",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType*"
    }, {
      "name" : "zero",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "timezone-from-date",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:date?"
    } ]
  }, {
    "name" : "timezone-from-dateTime",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:dateTime?"
    } ]
  }, {
    "name" : "timezone-from-time",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:time?"
    } ]
  }, {
    "name" : "tokenize",
    "params" : [ {
      "name" : "input",
      "as" : "xs:string?"
    }, {
      "name" : "pattern",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "tokenize",
    "params" : [ {
      "name" : "input",
      "as" : "xs:string?"
    }, {
      "name" : "pattern",
      "as" : "xs:string"
    }, {
      "name" : "flags",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "trace",
    "params" : [ {
      "name" : "value",
      "as" : "item()*"
    }, {
      "name" : "label",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "translate",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:string?"
    }, {
      "name" : "mapString",
      "as" : "xs:string"
    }, {
      "name" : "transString",
      "as" : "xs:string"
    } ]
  }, {
    "name" : "true",
    "params" : []
  }, {
    "name" : "unordered",
    "params" : [ {
      "name" : "sourceSeq",
      "as" : "item()*"
    } ]
  }, {
    "name" : "upper-case",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:string?"
    } ]
  }, {
    "name" : "year-from-date",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:date?"
    } ]
  }, {
    "name" : "year-from-dateTime",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:dateTime?"
    } ]
  }, {
    "name" : "years-from-duration",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:duration?"
    } ]
  }, {
    "name" : "zero-or-one",
    "params" : [ {
      "name" : "arg",
      "as" : "item()*"
    } ]
  } ]
});
CodeMirror.defineXQueryModule({
  "prefix" : "xs",
  "namespace" : "http://www.w3.org/2001/XMLSchema",
  "functions" : [ {
    "name" : "anyURI",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "base64Binary",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "boolean",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "byte",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "date",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "dateTime",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "dayTimeDuration",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "decimal",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "double",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "duration",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "ENTITY",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "float",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "gDay",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "gMonth",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "gMonthDay",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "gYear",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "gYearMonth",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "hexBinary",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "int",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "integer",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "language",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "long",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "Name",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "NCName",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "negativeInteger",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "nonNegativeInteger",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "nonPositiveInteger",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "normalizedString",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "positiveInteger",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "QName",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType"
    } ]
  }, {
    "name" : "short",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "string",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "time",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "token",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "unsignedByte",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "unsignedInt",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "unsignedLong",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "unsignedShort",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "untypedAtomic",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  }, {
    "name" : "yearMonthDuration",
    "params" : [ {
      "name" : "arg",
      "as" : "xs:anyAtomicType?"
    } ]
  } ]
});
