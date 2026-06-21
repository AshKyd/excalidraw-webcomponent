var ON = Object.create, dc = Object.defineProperty, LN = Object.getOwnPropertyDescriptor, Mh = Object.getOwnPropertyNames, DN = Object.getPrototypeOf, MN = Object.prototype.hasOwnProperty, s = (t, e) => dc(t, "name", { value: e, configurable: !0 }), xN = (t, e) => function() {
  return t && (e = (0, t[Mh(t)[0]])(t = 0)), e;
}, Y = (t, e) => function() {
  return e || (0, t[Mh(t)[0]])((e = { exports: {} }).exports, e), e.exports;
}, Jr = (t, e) => {
  for (var r in e)
    dc(t, r, { get: e[r], enumerable: !0 });
}, xh = (t, e, r, n) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let a of Mh(e))
      !MN.call(t, a) && a !== r && dc(t, a, { get: () => e[a], enumerable: !(n = LN(e, a)) || n.enumerable });
  return t;
}, cf = (t, e, r) => (xh(t, e, "default"), r), Fh = (t, e, r) => (r = t != null ? ON(DN(t)) : {}, xh(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  dc(r, "default", { value: t, enumerable: !0 }),
  t
)), Gh = (t) => xh(dc({}, "__esModule", { value: !0 }), t), uf = {};
Jr(uf, {
  AnnotatedTextEdit: () => vr,
  ChangeAnnotation: () => cn,
  ChangeAnnotationIdentifier: () => Xe,
  CodeAction: () => $p,
  CodeActionContext: () => Rp,
  CodeActionKind: () => Tp,
  CodeActionTriggerKind: () => wl,
  CodeDescription: () => Jd,
  CodeLens: () => Ap,
  Color: () => eu,
  ColorInformation: () => qd,
  ColorPresentation: () => Wd,
  Command: () => ln,
  CompletionItem: () => op,
  CompletionItemKind: () => tp,
  CompletionItemLabelDetails: () => sp,
  CompletionItemTag: () => np,
  CompletionList: () => lp,
  CreateFile: () => va,
  DeleteFile: () => Ra,
  Diagnostic: () => _l,
  DiagnosticRelatedInformation: () => tu,
  DiagnosticSeverity: () => Yd,
  DiagnosticTag: () => Xd,
  DocumentHighlight: () => pp,
  DocumentHighlightKind: () => dp,
  DocumentLink: () => _p,
  DocumentSymbol: () => vp,
  DocumentUri: () => zd,
  EOL: () => pT,
  FoldingRange: () => Hd,
  FoldingRangeKind: () => Vd,
  FormattingOptions: () => Ep,
  Hover: () => cp,
  InlayHint: () => Op,
  InlayHintKind: () => au,
  InlayHintLabelPart: () => iu,
  InlineCompletionContext: () => Gp,
  InlineCompletionItem: () => Dp,
  InlineCompletionList: () => Mp,
  InlineCompletionTriggerKind: () => xp,
  InlineValueContext: () => Pp,
  InlineValueEvaluatableExpression: () => kp,
  InlineValueText: () => Ip,
  InlineValueVariableLookup: () => Np,
  InsertReplaceEdit: () => ap,
  InsertTextFormat: () => rp,
  InsertTextMode: () => ip,
  Location: () => El,
  LocationLink: () => Kd,
  MarkedString: () => Sl,
  MarkupContent: () => $a,
  MarkupKind: () => nu,
  OptionalVersionedTextDocumentIdentifier: () => bl,
  ParameterInformation: () => up,
  Position: () => ie,
  Range: () => ee,
  RenameFile: () => Ta,
  SelectedCompletionInfo: () => Fp,
  SelectionRange: () => Cp,
  SemanticTokenModifiers: () => Sp,
  SemanticTokenTypes: () => bp,
  SemanticTokens: () => wp,
  SignatureInformation: () => fp,
  StringValue: () => Lp,
  SymbolInformation: () => gp,
  SymbolKind: () => hp,
  SymbolTag: () => mp,
  TextDocument: () => Up,
  TextDocumentEdit: () => Cl,
  TextDocumentIdentifier: () => Zd,
  TextDocumentItem: () => ep,
  TextEdit: () => tr,
  URI: () => Qc,
  VersionedTextDocumentIdentifier: () => Qd,
  WorkspaceChange: () => dT,
  WorkspaceEdit: () => ru,
  WorkspaceFolder: () => jp,
  WorkspaceSymbol: () => yp,
  integer: () => Bd,
  uinteger: () => Al
});
var zd, Qc, Bd, Al, ie, ee, El, Kd, eu, qd, Wd, Vd, Hd, tu, Yd, Xd, Jd, _l, ln, tr, cn, Xe, vr, Cl, va, Ta, Ra, ru, dl, Td, dT, Zd, Qd, bl, ep, nu, $a, tp, rp, np, ap, ip, sp, op, lp, Sl, cp, up, fp, dp, pp, hp, mp, gp, yp, vp, Tp, wl, Rp, $p, Ap, Ep, _p, Cp, bp, Sp, wp, Ip, Np, kp, Pp, au, iu, Op, Lp, Dp, Mp, xp, Fp, Gp, jp, pT, Up, Ay, E, pc = xN({
  "../../node_modules/.pnpm/vscode-languageserver-types@3.17.5/node_modules/vscode-languageserver-types/lib/esm/main.js"() {
    var t, e, r, n;
    (function(a) {
      function i(o) {
        return typeof o == "string";
      }
      s(i, "is"), a.is = i;
    })(zd || (zd = {})), (function(a) {
      function i(o) {
        return typeof o == "string";
      }
      s(i, "is"), a.is = i;
    })(Qc || (Qc = {})), (function(a) {
      a.MIN_VALUE = -2147483648, a.MAX_VALUE = 2147483647;
      function i(o) {
        return typeof o == "number" && a.MIN_VALUE <= o && o <= a.MAX_VALUE;
      }
      s(i, "is"), a.is = i;
    })(Bd || (Bd = {})), (function(a) {
      a.MIN_VALUE = 0, a.MAX_VALUE = 2147483647;
      function i(o) {
        return typeof o == "number" && a.MIN_VALUE <= o && o <= a.MAX_VALUE;
      }
      s(i, "is"), a.is = i;
    })(Al || (Al = {})), (function(a) {
      function i(c, l) {
        return c === Number.MAX_VALUE && (c = Al.MAX_VALUE), l === Number.MAX_VALUE && (l = Al.MAX_VALUE), { line: c, character: l };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.objectLiteral(l) && E.uinteger(l.line) && E.uinteger(l.character);
      }
      s(o, "is"), a.is = o;
    })(ie || (ie = {})), (function(a) {
      function i(c, l, u, f) {
        if (E.uinteger(c) && E.uinteger(l) && E.uinteger(u) && E.uinteger(f))
          return { start: ie.create(c, l), end: ie.create(u, f) };
        if (ie.is(c) && ie.is(l))
          return { start: c, end: l };
        throw new Error(`Range#create called with invalid arguments[${c}, ${l}, ${u}, ${f}]`);
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.objectLiteral(l) && ie.is(l.start) && ie.is(l.end);
      }
      s(o, "is"), a.is = o;
    })(ee || (ee = {})), (function(a) {
      function i(c, l) {
        return { uri: c, range: l };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.objectLiteral(l) && ee.is(l.range) && (E.string(l.uri) || E.undefined(l.uri));
      }
      s(o, "is"), a.is = o;
    })(El || (El = {})), (function(a) {
      function i(c, l, u, f) {
        return { targetUri: c, targetRange: l, targetSelectionRange: u, originSelectionRange: f };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.objectLiteral(l) && ee.is(l.targetRange) && E.string(l.targetUri) && ee.is(l.targetSelectionRange) && (ee.is(l.originSelectionRange) || E.undefined(l.originSelectionRange));
      }
      s(o, "is"), a.is = o;
    })(Kd || (Kd = {})), (function(a) {
      function i(c, l, u, f) {
        return {
          red: c,
          green: l,
          blue: u,
          alpha: f
        };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        const l = c;
        return E.objectLiteral(l) && E.numberRange(l.red, 0, 1) && E.numberRange(l.green, 0, 1) && E.numberRange(l.blue, 0, 1) && E.numberRange(l.alpha, 0, 1);
      }
      s(o, "is"), a.is = o;
    })(eu || (eu = {})), (function(a) {
      function i(c, l) {
        return {
          range: c,
          color: l
        };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        const l = c;
        return E.objectLiteral(l) && ee.is(l.range) && eu.is(l.color);
      }
      s(o, "is"), a.is = o;
    })(qd || (qd = {})), (function(a) {
      function i(c, l, u) {
        return {
          label: c,
          textEdit: l,
          additionalTextEdits: u
        };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        const l = c;
        return E.objectLiteral(l) && E.string(l.label) && (E.undefined(l.textEdit) || tr.is(l)) && (E.undefined(l.additionalTextEdits) || E.typedArray(l.additionalTextEdits, tr.is));
      }
      s(o, "is"), a.is = o;
    })(Wd || (Wd = {})), (function(a) {
      a.Comment = "comment", a.Imports = "imports", a.Region = "region";
    })(Vd || (Vd = {})), (function(a) {
      function i(c, l, u, f, d, p) {
        const g = {
          startLine: c,
          endLine: l
        };
        return E.defined(u) && (g.startCharacter = u), E.defined(f) && (g.endCharacter = f), E.defined(d) && (g.kind = d), E.defined(p) && (g.collapsedText = p), g;
      }
      s(i, "create"), a.create = i;
      function o(c) {
        const l = c;
        return E.objectLiteral(l) && E.uinteger(l.startLine) && E.uinteger(l.startLine) && (E.undefined(l.startCharacter) || E.uinteger(l.startCharacter)) && (E.undefined(l.endCharacter) || E.uinteger(l.endCharacter)) && (E.undefined(l.kind) || E.string(l.kind));
      }
      s(o, "is"), a.is = o;
    })(Hd || (Hd = {})), (function(a) {
      function i(c, l) {
        return {
          location: c,
          message: l
        };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.defined(l) && El.is(l.location) && E.string(l.message);
      }
      s(o, "is"), a.is = o;
    })(tu || (tu = {})), (function(a) {
      a.Error = 1, a.Warning = 2, a.Information = 3, a.Hint = 4;
    })(Yd || (Yd = {})), (function(a) {
      a.Unnecessary = 1, a.Deprecated = 2;
    })(Xd || (Xd = {})), (function(a) {
      function i(o) {
        const c = o;
        return E.objectLiteral(c) && E.string(c.href);
      }
      s(i, "is"), a.is = i;
    })(Jd || (Jd = {})), (function(a) {
      function i(c, l, u, f, d, p) {
        let g = { range: c, message: l };
        return E.defined(u) && (g.severity = u), E.defined(f) && (g.code = f), E.defined(d) && (g.source = d), E.defined(p) && (g.relatedInformation = p), g;
      }
      s(i, "create"), a.create = i;
      function o(c) {
        var l;
        let u = c;
        return E.defined(u) && ee.is(u.range) && E.string(u.message) && (E.number(u.severity) || E.undefined(u.severity)) && (E.integer(u.code) || E.string(u.code) || E.undefined(u.code)) && (E.undefined(u.codeDescription) || E.string((l = u.codeDescription) === null || l === void 0 ? void 0 : l.href)) && (E.string(u.source) || E.undefined(u.source)) && (E.undefined(u.relatedInformation) || E.typedArray(u.relatedInformation, tu.is));
      }
      s(o, "is"), a.is = o;
    })(_l || (_l = {})), (function(a) {
      function i(c, l, ...u) {
        let f = { title: c, command: l };
        return E.defined(u) && u.length > 0 && (f.arguments = u), f;
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.defined(l) && E.string(l.title) && E.string(l.command);
      }
      s(o, "is"), a.is = o;
    })(ln || (ln = {})), (function(a) {
      function i(u, f) {
        return { range: u, newText: f };
      }
      s(i, "replace"), a.replace = i;
      function o(u, f) {
        return { range: { start: u, end: u }, newText: f };
      }
      s(o, "insert"), a.insert = o;
      function c(u) {
        return { range: u, newText: "" };
      }
      s(c, "del"), a.del = c;
      function l(u) {
        const f = u;
        return E.objectLiteral(f) && E.string(f.newText) && ee.is(f.range);
      }
      s(l, "is"), a.is = l;
    })(tr || (tr = {})), (function(a) {
      function i(c, l, u) {
        const f = { label: c };
        return l !== void 0 && (f.needsConfirmation = l), u !== void 0 && (f.description = u), f;
      }
      s(i, "create"), a.create = i;
      function o(c) {
        const l = c;
        return E.objectLiteral(l) && E.string(l.label) && (E.boolean(l.needsConfirmation) || l.needsConfirmation === void 0) && (E.string(l.description) || l.description === void 0);
      }
      s(o, "is"), a.is = o;
    })(cn || (cn = {})), (function(a) {
      function i(o) {
        const c = o;
        return E.string(c);
      }
      s(i, "is"), a.is = i;
    })(Xe || (Xe = {})), (function(a) {
      function i(u, f, d) {
        return { range: u, newText: f, annotationId: d };
      }
      s(i, "replace"), a.replace = i;
      function o(u, f, d) {
        return { range: { start: u, end: u }, newText: f, annotationId: d };
      }
      s(o, "insert"), a.insert = o;
      function c(u, f) {
        return { range: u, newText: "", annotationId: f };
      }
      s(c, "del"), a.del = c;
      function l(u) {
        const f = u;
        return tr.is(f) && (cn.is(f.annotationId) || Xe.is(f.annotationId));
      }
      s(l, "is"), a.is = l;
    })(vr || (vr = {})), (function(a) {
      function i(c, l) {
        return { textDocument: c, edits: l };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.defined(l) && bl.is(l.textDocument) && Array.isArray(l.edits);
      }
      s(o, "is"), a.is = o;
    })(Cl || (Cl = {})), (function(a) {
      function i(c, l, u) {
        let f = {
          kind: "create",
          uri: c
        };
        return l !== void 0 && (l.overwrite !== void 0 || l.ignoreIfExists !== void 0) && (f.options = l), u !== void 0 && (f.annotationId = u), f;
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return l && l.kind === "create" && E.string(l.uri) && (l.options === void 0 || (l.options.overwrite === void 0 || E.boolean(l.options.overwrite)) && (l.options.ignoreIfExists === void 0 || E.boolean(l.options.ignoreIfExists))) && (l.annotationId === void 0 || Xe.is(l.annotationId));
      }
      s(o, "is"), a.is = o;
    })(va || (va = {})), (function(a) {
      function i(c, l, u, f) {
        let d = {
          kind: "rename",
          oldUri: c,
          newUri: l
        };
        return u !== void 0 && (u.overwrite !== void 0 || u.ignoreIfExists !== void 0) && (d.options = u), f !== void 0 && (d.annotationId = f), d;
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return l && l.kind === "rename" && E.string(l.oldUri) && E.string(l.newUri) && (l.options === void 0 || (l.options.overwrite === void 0 || E.boolean(l.options.overwrite)) && (l.options.ignoreIfExists === void 0 || E.boolean(l.options.ignoreIfExists))) && (l.annotationId === void 0 || Xe.is(l.annotationId));
      }
      s(o, "is"), a.is = o;
    })(Ta || (Ta = {})), (function(a) {
      function i(c, l, u) {
        let f = {
          kind: "delete",
          uri: c
        };
        return l !== void 0 && (l.recursive !== void 0 || l.ignoreIfNotExists !== void 0) && (f.options = l), u !== void 0 && (f.annotationId = u), f;
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return l && l.kind === "delete" && E.string(l.uri) && (l.options === void 0 || (l.options.recursive === void 0 || E.boolean(l.options.recursive)) && (l.options.ignoreIfNotExists === void 0 || E.boolean(l.options.ignoreIfNotExists))) && (l.annotationId === void 0 || Xe.is(l.annotationId));
      }
      s(o, "is"), a.is = o;
    })(Ra || (Ra = {})), (function(a) {
      function i(o) {
        let c = o;
        return c && (c.changes !== void 0 || c.documentChanges !== void 0) && (c.documentChanges === void 0 || c.documentChanges.every((l) => E.string(l.kind) ? va.is(l) || Ta.is(l) || Ra.is(l) : Cl.is(l)));
      }
      s(i, "is"), a.is = i;
    })(ru || (ru = {})), dl = (t = class {
      constructor(i, o) {
        this.edits = i, this.changeAnnotations = o;
      }
      insert(i, o, c) {
        let l, u;
        if (c === void 0 ? l = tr.insert(i, o) : Xe.is(c) ? (u = c, l = vr.insert(i, o, c)) : (this.assertChangeAnnotations(this.changeAnnotations), u = this.changeAnnotations.manage(c), l = vr.insert(i, o, u)), this.edits.push(l), u !== void 0)
          return u;
      }
      replace(i, o, c) {
        let l, u;
        if (c === void 0 ? l = tr.replace(i, o) : Xe.is(c) ? (u = c, l = vr.replace(i, o, c)) : (this.assertChangeAnnotations(this.changeAnnotations), u = this.changeAnnotations.manage(c), l = vr.replace(i, o, u)), this.edits.push(l), u !== void 0)
          return u;
      }
      delete(i, o) {
        let c, l;
        if (o === void 0 ? c = tr.del(i) : Xe.is(o) ? (l = o, c = vr.del(i, o)) : (this.assertChangeAnnotations(this.changeAnnotations), l = this.changeAnnotations.manage(o), c = vr.del(i, l)), this.edits.push(c), l !== void 0)
          return l;
      }
      add(i) {
        this.edits.push(i);
      }
      all() {
        return this.edits;
      }
      clear() {
        this.edits.splice(0, this.edits.length);
      }
      assertChangeAnnotations(i) {
        if (i === void 0)
          throw new Error("Text edit change is not configured to manage change annotations.");
      }
    }, s(t, "TextEditChangeImpl"), t), Td = (e = class {
      constructor(i) {
        this._annotations = i === void 0 ? /* @__PURE__ */ Object.create(null) : i, this._counter = 0, this._size = 0;
      }
      all() {
        return this._annotations;
      }
      get size() {
        return this._size;
      }
      manage(i, o) {
        let c;
        if (Xe.is(i) ? c = i : (c = this.nextId(), o = i), this._annotations[c] !== void 0)
          throw new Error(`Id ${c} is already in use.`);
        if (o === void 0)
          throw new Error(`No annotation provided for id ${c}`);
        return this._annotations[c] = o, this._size++, c;
      }
      nextId() {
        return this._counter++, this._counter.toString();
      }
    }, s(e, "ChangeAnnotations"), e), dT = (r = class {
      constructor(i) {
        this._textEditChanges = /* @__PURE__ */ Object.create(null), i !== void 0 ? (this._workspaceEdit = i, i.documentChanges ? (this._changeAnnotations = new Td(i.changeAnnotations), i.changeAnnotations = this._changeAnnotations.all(), i.documentChanges.forEach((o) => {
          if (Cl.is(o)) {
            const c = new dl(o.edits, this._changeAnnotations);
            this._textEditChanges[o.textDocument.uri] = c;
          }
        })) : i.changes && Object.keys(i.changes).forEach((o) => {
          const c = new dl(i.changes[o]);
          this._textEditChanges[o] = c;
        })) : this._workspaceEdit = {};
      }
      /**
       * Returns the underlying {@link WorkspaceEdit} literal
       * use to be returned from a workspace edit operation like rename.
       */
      get edit() {
        return this.initDocumentChanges(), this._changeAnnotations !== void 0 && (this._changeAnnotations.size === 0 ? this._workspaceEdit.changeAnnotations = void 0 : this._workspaceEdit.changeAnnotations = this._changeAnnotations.all()), this._workspaceEdit;
      }
      getTextEditChange(i) {
        if (bl.is(i)) {
          if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
            throw new Error("Workspace edit is not configured for document changes.");
          const o = { uri: i.uri, version: i.version };
          let c = this._textEditChanges[o.uri];
          if (!c) {
            const l = [], u = {
              textDocument: o,
              edits: l
            };
            this._workspaceEdit.documentChanges.push(u), c = new dl(l, this._changeAnnotations), this._textEditChanges[o.uri] = c;
          }
          return c;
        } else {
          if (this.initChanges(), this._workspaceEdit.changes === void 0)
            throw new Error("Workspace edit is not configured for normal text edit changes.");
          let o = this._textEditChanges[i];
          if (!o) {
            let c = [];
            this._workspaceEdit.changes[i] = c, o = new dl(c), this._textEditChanges[i] = o;
          }
          return o;
        }
      }
      initDocumentChanges() {
        this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._changeAnnotations = new Td(), this._workspaceEdit.documentChanges = [], this._workspaceEdit.changeAnnotations = this._changeAnnotations.all());
      }
      initChanges() {
        this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0 && (this._workspaceEdit.changes = /* @__PURE__ */ Object.create(null));
      }
      createFile(i, o, c) {
        if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
          throw new Error("Workspace edit is not configured for document changes.");
        let l;
        cn.is(o) || Xe.is(o) ? l = o : c = o;
        let u, f;
        if (l === void 0 ? u = va.create(i, c) : (f = Xe.is(l) ? l : this._changeAnnotations.manage(l), u = va.create(i, c, f)), this._workspaceEdit.documentChanges.push(u), f !== void 0)
          return f;
      }
      renameFile(i, o, c, l) {
        if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
          throw new Error("Workspace edit is not configured for document changes.");
        let u;
        cn.is(c) || Xe.is(c) ? u = c : l = c;
        let f, d;
        if (u === void 0 ? f = Ta.create(i, o, l) : (d = Xe.is(u) ? u : this._changeAnnotations.manage(u), f = Ta.create(i, o, l, d)), this._workspaceEdit.documentChanges.push(f), d !== void 0)
          return d;
      }
      deleteFile(i, o, c) {
        if (this.initDocumentChanges(), this._workspaceEdit.documentChanges === void 0)
          throw new Error("Workspace edit is not configured for document changes.");
        let l;
        cn.is(o) || Xe.is(o) ? l = o : c = o;
        let u, f;
        if (l === void 0 ? u = Ra.create(i, c) : (f = Xe.is(l) ? l : this._changeAnnotations.manage(l), u = Ra.create(i, c, f)), this._workspaceEdit.documentChanges.push(u), f !== void 0)
          return f;
      }
    }, s(r, "WorkspaceChange"), r), (function(a) {
      function i(c) {
        return { uri: c };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.defined(l) && E.string(l.uri);
      }
      s(o, "is"), a.is = o;
    })(Zd || (Zd = {})), (function(a) {
      function i(c, l) {
        return { uri: c, version: l };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.defined(l) && E.string(l.uri) && E.integer(l.version);
      }
      s(o, "is"), a.is = o;
    })(Qd || (Qd = {})), (function(a) {
      function i(c, l) {
        return { uri: c, version: l };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.defined(l) && E.string(l.uri) && (l.version === null || E.integer(l.version));
      }
      s(o, "is"), a.is = o;
    })(bl || (bl = {})), (function(a) {
      function i(c, l, u, f) {
        return { uri: c, languageId: l, version: u, text: f };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.defined(l) && E.string(l.uri) && E.string(l.languageId) && E.integer(l.version) && E.string(l.text);
      }
      s(o, "is"), a.is = o;
    })(ep || (ep = {})), (function(a) {
      a.PlainText = "plaintext", a.Markdown = "markdown";
      function i(o) {
        const c = o;
        return c === a.PlainText || c === a.Markdown;
      }
      s(i, "is"), a.is = i;
    })(nu || (nu = {})), (function(a) {
      function i(o) {
        const c = o;
        return E.objectLiteral(o) && nu.is(c.kind) && E.string(c.value);
      }
      s(i, "is"), a.is = i;
    })($a || ($a = {})), (function(a) {
      a.Text = 1, a.Method = 2, a.Function = 3, a.Constructor = 4, a.Field = 5, a.Variable = 6, a.Class = 7, a.Interface = 8, a.Module = 9, a.Property = 10, a.Unit = 11, a.Value = 12, a.Enum = 13, a.Keyword = 14, a.Snippet = 15, a.Color = 16, a.File = 17, a.Reference = 18, a.Folder = 19, a.EnumMember = 20, a.Constant = 21, a.Struct = 22, a.Event = 23, a.Operator = 24, a.TypeParameter = 25;
    })(tp || (tp = {})), (function(a) {
      a.PlainText = 1, a.Snippet = 2;
    })(rp || (rp = {})), (function(a) {
      a.Deprecated = 1;
    })(np || (np = {})), (function(a) {
      function i(c, l, u) {
        return { newText: c, insert: l, replace: u };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        const l = c;
        return l && E.string(l.newText) && ee.is(l.insert) && ee.is(l.replace);
      }
      s(o, "is"), a.is = o;
    })(ap || (ap = {})), (function(a) {
      a.asIs = 1, a.adjustIndentation = 2;
    })(ip || (ip = {})), (function(a) {
      function i(o) {
        const c = o;
        return c && (E.string(c.detail) || c.detail === void 0) && (E.string(c.description) || c.description === void 0);
      }
      s(i, "is"), a.is = i;
    })(sp || (sp = {})), (function(a) {
      function i(o) {
        return { label: o };
      }
      s(i, "create"), a.create = i;
    })(op || (op = {})), (function(a) {
      function i(o, c) {
        return { items: o || [], isIncomplete: !!c };
      }
      s(i, "create"), a.create = i;
    })(lp || (lp = {})), (function(a) {
      function i(c) {
        return c.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
      }
      s(i, "fromPlainText"), a.fromPlainText = i;
      function o(c) {
        const l = c;
        return E.string(l) || E.objectLiteral(l) && E.string(l.language) && E.string(l.value);
      }
      s(o, "is"), a.is = o;
    })(Sl || (Sl = {})), (function(a) {
      function i(o) {
        let c = o;
        return !!c && E.objectLiteral(c) && ($a.is(c.contents) || Sl.is(c.contents) || E.typedArray(c.contents, Sl.is)) && (o.range === void 0 || ee.is(o.range));
      }
      s(i, "is"), a.is = i;
    })(cp || (cp = {})), (function(a) {
      function i(o, c) {
        return c ? { label: o, documentation: c } : { label: o };
      }
      s(i, "create"), a.create = i;
    })(up || (up = {})), (function(a) {
      function i(o, c, ...l) {
        let u = { label: o };
        return E.defined(c) && (u.documentation = c), E.defined(l) ? u.parameters = l : u.parameters = [], u;
      }
      s(i, "create"), a.create = i;
    })(fp || (fp = {})), (function(a) {
      a.Text = 1, a.Read = 2, a.Write = 3;
    })(dp || (dp = {})), (function(a) {
      function i(o, c) {
        let l = { range: o };
        return E.number(c) && (l.kind = c), l;
      }
      s(i, "create"), a.create = i;
    })(pp || (pp = {})), (function(a) {
      a.File = 1, a.Module = 2, a.Namespace = 3, a.Package = 4, a.Class = 5, a.Method = 6, a.Property = 7, a.Field = 8, a.Constructor = 9, a.Enum = 10, a.Interface = 11, a.Function = 12, a.Variable = 13, a.Constant = 14, a.String = 15, a.Number = 16, a.Boolean = 17, a.Array = 18, a.Object = 19, a.Key = 20, a.Null = 21, a.EnumMember = 22, a.Struct = 23, a.Event = 24, a.Operator = 25, a.TypeParameter = 26;
    })(hp || (hp = {})), (function(a) {
      a.Deprecated = 1;
    })(mp || (mp = {})), (function(a) {
      function i(o, c, l, u, f) {
        let d = {
          name: o,
          kind: c,
          location: { uri: u, range: l }
        };
        return f && (d.containerName = f), d;
      }
      s(i, "create"), a.create = i;
    })(gp || (gp = {})), (function(a) {
      function i(o, c, l, u) {
        return u !== void 0 ? { name: o, kind: c, location: { uri: l, range: u } } : { name: o, kind: c, location: { uri: l } };
      }
      s(i, "create"), a.create = i;
    })(yp || (yp = {})), (function(a) {
      function i(c, l, u, f, d, p) {
        let g = {
          name: c,
          detail: l,
          kind: u,
          range: f,
          selectionRange: d
        };
        return p !== void 0 && (g.children = p), g;
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return l && E.string(l.name) && E.number(l.kind) && ee.is(l.range) && ee.is(l.selectionRange) && (l.detail === void 0 || E.string(l.detail)) && (l.deprecated === void 0 || E.boolean(l.deprecated)) && (l.children === void 0 || Array.isArray(l.children)) && (l.tags === void 0 || Array.isArray(l.tags));
      }
      s(o, "is"), a.is = o;
    })(vp || (vp = {})), (function(a) {
      a.Empty = "", a.QuickFix = "quickfix", a.Refactor = "refactor", a.RefactorExtract = "refactor.extract", a.RefactorInline = "refactor.inline", a.RefactorRewrite = "refactor.rewrite", a.Source = "source", a.SourceOrganizeImports = "source.organizeImports", a.SourceFixAll = "source.fixAll";
    })(Tp || (Tp = {})), (function(a) {
      a.Invoked = 1, a.Automatic = 2;
    })(wl || (wl = {})), (function(a) {
      function i(c, l, u) {
        let f = { diagnostics: c };
        return l != null && (f.only = l), u != null && (f.triggerKind = u), f;
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.defined(l) && E.typedArray(l.diagnostics, _l.is) && (l.only === void 0 || E.typedArray(l.only, E.string)) && (l.triggerKind === void 0 || l.triggerKind === wl.Invoked || l.triggerKind === wl.Automatic);
      }
      s(o, "is"), a.is = o;
    })(Rp || (Rp = {})), (function(a) {
      function i(c, l, u) {
        let f = { title: c }, d = !0;
        return typeof l == "string" ? (d = !1, f.kind = l) : ln.is(l) ? f.command = l : f.edit = l, d && u !== void 0 && (f.kind = u), f;
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return l && E.string(l.title) && (l.diagnostics === void 0 || E.typedArray(l.diagnostics, _l.is)) && (l.kind === void 0 || E.string(l.kind)) && (l.edit !== void 0 || l.command !== void 0) && (l.command === void 0 || ln.is(l.command)) && (l.isPreferred === void 0 || E.boolean(l.isPreferred)) && (l.edit === void 0 || ru.is(l.edit));
      }
      s(o, "is"), a.is = o;
    })($p || ($p = {})), (function(a) {
      function i(c, l) {
        let u = { range: c };
        return E.defined(l) && (u.data = l), u;
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.defined(l) && ee.is(l.range) && (E.undefined(l.command) || ln.is(l.command));
      }
      s(o, "is"), a.is = o;
    })(Ap || (Ap = {})), (function(a) {
      function i(c, l) {
        return { tabSize: c, insertSpaces: l };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.defined(l) && E.uinteger(l.tabSize) && E.boolean(l.insertSpaces);
      }
      s(o, "is"), a.is = o;
    })(Ep || (Ep = {})), (function(a) {
      function i(c, l, u) {
        return { range: c, target: l, data: u };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.defined(l) && ee.is(l.range) && (E.undefined(l.target) || E.string(l.target));
      }
      s(o, "is"), a.is = o;
    })(_p || (_p = {})), (function(a) {
      function i(c, l) {
        return { range: c, parent: l };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        let l = c;
        return E.objectLiteral(l) && ee.is(l.range) && (l.parent === void 0 || a.is(l.parent));
      }
      s(o, "is"), a.is = o;
    })(Cp || (Cp = {})), (function(a) {
      a.namespace = "namespace", a.type = "type", a.class = "class", a.enum = "enum", a.interface = "interface", a.struct = "struct", a.typeParameter = "typeParameter", a.parameter = "parameter", a.variable = "variable", a.property = "property", a.enumMember = "enumMember", a.event = "event", a.function = "function", a.method = "method", a.macro = "macro", a.keyword = "keyword", a.modifier = "modifier", a.comment = "comment", a.string = "string", a.number = "number", a.regexp = "regexp", a.operator = "operator", a.decorator = "decorator";
    })(bp || (bp = {})), (function(a) {
      a.declaration = "declaration", a.definition = "definition", a.readonly = "readonly", a.static = "static", a.deprecated = "deprecated", a.abstract = "abstract", a.async = "async", a.modification = "modification", a.documentation = "documentation", a.defaultLibrary = "defaultLibrary";
    })(Sp || (Sp = {})), (function(a) {
      function i(o) {
        const c = o;
        return E.objectLiteral(c) && (c.resultId === void 0 || typeof c.resultId == "string") && Array.isArray(c.data) && (c.data.length === 0 || typeof c.data[0] == "number");
      }
      s(i, "is"), a.is = i;
    })(wp || (wp = {})), (function(a) {
      function i(c, l) {
        return { range: c, text: l };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        const l = c;
        return l != null && ee.is(l.range) && E.string(l.text);
      }
      s(o, "is"), a.is = o;
    })(Ip || (Ip = {})), (function(a) {
      function i(c, l, u) {
        return { range: c, variableName: l, caseSensitiveLookup: u };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        const l = c;
        return l != null && ee.is(l.range) && E.boolean(l.caseSensitiveLookup) && (E.string(l.variableName) || l.variableName === void 0);
      }
      s(o, "is"), a.is = o;
    })(Np || (Np = {})), (function(a) {
      function i(c, l) {
        return { range: c, expression: l };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        const l = c;
        return l != null && ee.is(l.range) && (E.string(l.expression) || l.expression === void 0);
      }
      s(o, "is"), a.is = o;
    })(kp || (kp = {})), (function(a) {
      function i(c, l) {
        return { frameId: c, stoppedLocation: l };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        const l = c;
        return E.defined(l) && ee.is(c.stoppedLocation);
      }
      s(o, "is"), a.is = o;
    })(Pp || (Pp = {})), (function(a) {
      a.Type = 1, a.Parameter = 2;
      function i(o) {
        return o === 1 || o === 2;
      }
      s(i, "is"), a.is = i;
    })(au || (au = {})), (function(a) {
      function i(c) {
        return { value: c };
      }
      s(i, "create"), a.create = i;
      function o(c) {
        const l = c;
        return E.objectLiteral(l) && (l.tooltip === void 0 || E.string(l.tooltip) || $a.is(l.tooltip)) && (l.location === void 0 || El.is(l.location)) && (l.command === void 0 || ln.is(l.command));
      }
      s(o, "is"), a.is = o;
    })(iu || (iu = {})), (function(a) {
      function i(c, l, u) {
        const f = { position: c, label: l };
        return u !== void 0 && (f.kind = u), f;
      }
      s(i, "create"), a.create = i;
      function o(c) {
        const l = c;
        return E.objectLiteral(l) && ie.is(l.position) && (E.string(l.label) || E.typedArray(l.label, iu.is)) && (l.kind === void 0 || au.is(l.kind)) && l.textEdits === void 0 || E.typedArray(l.textEdits, tr.is) && (l.tooltip === void 0 || E.string(l.tooltip) || $a.is(l.tooltip)) && (l.paddingLeft === void 0 || E.boolean(l.paddingLeft)) && (l.paddingRight === void 0 || E.boolean(l.paddingRight));
      }
      s(o, "is"), a.is = o;
    })(Op || (Op = {})), (function(a) {
      function i(o) {
        return { kind: "snippet", value: o };
      }
      s(i, "createSnippet"), a.createSnippet = i;
    })(Lp || (Lp = {})), (function(a) {
      function i(o, c, l, u) {
        return { insertText: o, filterText: c, range: l, command: u };
      }
      s(i, "create"), a.create = i;
    })(Dp || (Dp = {})), (function(a) {
      function i(o) {
        return { items: o };
      }
      s(i, "create"), a.create = i;
    })(Mp || (Mp = {})), (function(a) {
      a.Invoked = 0, a.Automatic = 1;
    })(xp || (xp = {})), (function(a) {
      function i(o, c) {
        return { range: o, text: c };
      }
      s(i, "create"), a.create = i;
    })(Fp || (Fp = {})), (function(a) {
      function i(o, c) {
        return { triggerKind: o, selectedCompletionInfo: c };
      }
      s(i, "create"), a.create = i;
    })(Gp || (Gp = {})), (function(a) {
      function i(o) {
        const c = o;
        return E.objectLiteral(c) && Qc.is(c.uri) && E.string(c.name);
      }
      s(i, "is"), a.is = i;
    })(jp || (jp = {})), pT = [`
`, `\r
`, "\r"], (function(a) {
      function i(u, f, d, p) {
        return new Ay(u, f, d, p);
      }
      s(i, "create"), a.create = i;
      function o(u) {
        let f = u;
        return !!(E.defined(f) && E.string(f.uri) && (E.undefined(f.languageId) || E.string(f.languageId)) && E.uinteger(f.lineCount) && E.func(f.getText) && E.func(f.positionAt) && E.func(f.offsetAt));
      }
      s(o, "is"), a.is = o;
      function c(u, f) {
        let d = u.getText(), p = l(f, (m, T) => {
          let _ = m.range.start.line - T.range.start.line;
          return _ === 0 ? m.range.start.character - T.range.start.character : _;
        }), g = d.length;
        for (let m = p.length - 1; m >= 0; m--) {
          let T = p[m], _ = u.offsetAt(T.range.start), v = u.offsetAt(T.range.end);
          if (v <= g)
            d = d.substring(0, _) + T.newText + d.substring(v, d.length);
          else
            throw new Error("Overlapping edit");
          g = _;
        }
        return d;
      }
      s(c, "applyEdits"), a.applyEdits = c;
      function l(u, f) {
        if (u.length <= 1)
          return u;
        const d = u.length / 2 | 0, p = u.slice(0, d), g = u.slice(d);
        l(p, f), l(g, f);
        let m = 0, T = 0, _ = 0;
        for (; m < p.length && T < g.length; )
          f(p[m], g[T]) <= 0 ? u[_++] = p[m++] : u[_++] = g[T++];
        for (; m < p.length; )
          u[_++] = p[m++];
        for (; T < g.length; )
          u[_++] = g[T++];
        return u;
      }
      s(l, "mergeSort");
    })(Up || (Up = {})), Ay = (n = class {
      constructor(i, o, c, l) {
        this._uri = i, this._languageId = o, this._version = c, this._content = l, this._lineOffsets = void 0;
      }
      get uri() {
        return this._uri;
      }
      get languageId() {
        return this._languageId;
      }
      get version() {
        return this._version;
      }
      getText(i) {
        if (i) {
          let o = this.offsetAt(i.start), c = this.offsetAt(i.end);
          return this._content.substring(o, c);
        }
        return this._content;
      }
      update(i, o) {
        this._content = i.text, this._version = o, this._lineOffsets = void 0;
      }
      getLineOffsets() {
        if (this._lineOffsets === void 0) {
          let i = [], o = this._content, c = !0;
          for (let l = 0; l < o.length; l++) {
            c && (i.push(l), c = !1);
            let u = o.charAt(l);
            c = u === "\r" || u === `
`, u === "\r" && l + 1 < o.length && o.charAt(l + 1) === `
` && l++;
          }
          c && o.length > 0 && i.push(o.length), this._lineOffsets = i;
        }
        return this._lineOffsets;
      }
      positionAt(i) {
        i = Math.max(Math.min(i, this._content.length), 0);
        let o = this.getLineOffsets(), c = 0, l = o.length;
        if (l === 0)
          return ie.create(0, i);
        for (; c < l; ) {
          let f = Math.floor((c + l) / 2);
          o[f] > i ? l = f : c = f + 1;
        }
        let u = c - 1;
        return ie.create(u, i - o[u]);
      }
      offsetAt(i) {
        let o = this.getLineOffsets();
        if (i.line >= o.length)
          return this._content.length;
        if (i.line < 0)
          return 0;
        let c = o[i.line], l = i.line + 1 < o.length ? o[i.line + 1] : this._content.length;
        return Math.max(Math.min(c + i.character, l), c);
      }
      get lineCount() {
        return this.getLineOffsets().length;
      }
    }, s(n, "FullTextDocument"), n), (function(a) {
      const i = Object.prototype.toString;
      function o(v) {
        return typeof v < "u";
      }
      s(o, "defined"), a.defined = o;
      function c(v) {
        return typeof v > "u";
      }
      s(c, "undefined"), a.undefined = c;
      function l(v) {
        return v === !0 || v === !1;
      }
      s(l, "boolean"), a.boolean = l;
      function u(v) {
        return i.call(v) === "[object String]";
      }
      s(u, "string"), a.string = u;
      function f(v) {
        return i.call(v) === "[object Number]";
      }
      s(f, "number"), a.number = f;
      function d(v, w, C) {
        return i.call(v) === "[object Number]" && w <= v && v <= C;
      }
      s(d, "numberRange"), a.numberRange = d;
      function p(v) {
        return i.call(v) === "[object Number]" && -2147483648 <= v && v <= 2147483647;
      }
      s(p, "integer"), a.integer = p;
      function g(v) {
        return i.call(v) === "[object Number]" && 0 <= v && v <= 2147483647;
      }
      s(g, "uinteger"), a.uinteger = g;
      function m(v) {
        return i.call(v) === "[object Function]";
      }
      s(m, "func"), a.func = m;
      function T(v) {
        return v !== null && typeof v == "object";
      }
      s(T, "objectLiteral"), a.objectLiteral = T;
      function _(v, w) {
        return Array.isArray(v) && v.every(w);
      }
      s(_, "typedArray"), a.typedArray = _;
    })(E || (E = {}));
  }
}), jn = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/ral.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e;
    function r() {
      if (e === void 0)
        throw new Error("No runtime abstraction layer installed");
      return e;
    }
    s(r, "RAL"), (function(n) {
      function a(i) {
        if (i === void 0)
          throw new Error("No runtime abstraction layer provided");
        e = i;
      }
      s(a, "install"), n.install = a;
    })(r || (r = {})), t.default = r;
  }
}), hc = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/is.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.stringArray = t.array = t.func = t.error = t.number = t.string = t.boolean = void 0;
    function e(l) {
      return l === !0 || l === !1;
    }
    s(e, "boolean"), t.boolean = e;
    function r(l) {
      return typeof l == "string" || l instanceof String;
    }
    s(r, "string"), t.string = r;
    function n(l) {
      return typeof l == "number" || l instanceof Number;
    }
    s(n, "number"), t.number = n;
    function a(l) {
      return l instanceof Error;
    }
    s(a, "error"), t.error = a;
    function i(l) {
      return typeof l == "function";
    }
    s(i, "func"), t.func = i;
    function o(l) {
      return Array.isArray(l);
    }
    s(o, "array"), t.array = o;
    function c(l) {
      return o(l) && l.every((u) => r(u));
    }
    s(c, "stringArray"), t.stringArray = c;
  }
}), Fo = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/events.js"(t) {
    var i, o;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Emitter = t.Event = void 0;
    var e = jn(), r;
    (function(c) {
      const l = { dispose() {
      } };
      c.None = function() {
        return l;
      };
    })(r || (t.Event = r = {}));
    var n = (i = class {
      add(l, u = null, f) {
        this._callbacks || (this._callbacks = [], this._contexts = []), this._callbacks.push(l), this._contexts.push(u), Array.isArray(f) && f.push({ dispose: /* @__PURE__ */ s(() => this.remove(l, u), "dispose") });
      }
      remove(l, u = null) {
        if (!this._callbacks)
          return;
        let f = !1;
        for (let d = 0, p = this._callbacks.length; d < p; d++)
          if (this._callbacks[d] === l)
            if (this._contexts[d] === u) {
              this._callbacks.splice(d, 1), this._contexts.splice(d, 1);
              return;
            } else
              f = !0;
        if (f)
          throw new Error("When adding a listener with a context, you should remove it with the same context");
      }
      invoke(...l) {
        if (!this._callbacks)
          return [];
        const u = [], f = this._callbacks.slice(0), d = this._contexts.slice(0);
        for (let p = 0, g = f.length; p < g; p++)
          try {
            u.push(f[p].apply(d[p], l));
          } catch (m) {
            (0, e.default)().console.error(m);
          }
        return u;
      }
      isEmpty() {
        return !this._callbacks || this._callbacks.length === 0;
      }
      dispose() {
        this._callbacks = void 0, this._contexts = void 0;
      }
    }, s(i, "CallbackList"), i), a = (o = class {
      constructor(l) {
        this._options = l;
      }
      /**
       * For the public to allow to subscribe
       * to events from this Emitter
       */
      get event() {
        return this._event || (this._event = (l, u, f) => {
          this._callbacks || (this._callbacks = new n()), this._options && this._options.onFirstListenerAdd && this._callbacks.isEmpty() && this._options.onFirstListenerAdd(this), this._callbacks.add(l, u);
          const d = {
            dispose: /* @__PURE__ */ s(() => {
              this._callbacks && (this._callbacks.remove(l, u), d.dispose = o._noop, this._options && this._options.onLastListenerRemove && this._callbacks.isEmpty() && this._options.onLastListenerRemove(this));
            }, "dispose")
          };
          return Array.isArray(f) && f.push(d), d;
        }), this._event;
      }
      /**
       * To be kept private to fire an event to
       * subscribers
       */
      fire(l) {
        this._callbacks && this._callbacks.invoke.call(this._callbacks, l);
      }
      dispose() {
        this._callbacks && (this._callbacks.dispose(), this._callbacks = void 0);
      }
    }, s(o, "Emitter"), o);
    t.Emitter = a, a._noop = function() {
    };
  }
}), ff = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/cancellation.js"(t) {
    var l, u;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.CancellationTokenSource = t.CancellationToken = void 0;
    var e = jn(), r = hc(), n = Fo(), a;
    (function(f) {
      f.None = Object.freeze({
        isCancellationRequested: !1,
        onCancellationRequested: n.Event.None
      }), f.Cancelled = Object.freeze({
        isCancellationRequested: !0,
        onCancellationRequested: n.Event.None
      });
      function d(p) {
        const g = p;
        return g && (g === f.None || g === f.Cancelled || r.boolean(g.isCancellationRequested) && !!g.onCancellationRequested);
      }
      s(d, "is"), f.is = d;
    })(a || (t.CancellationToken = a = {}));
    var i = Object.freeze(function(f, d) {
      const p = (0, e.default)().timer.setTimeout(f.bind(d), 0);
      return { dispose() {
        p.dispose();
      } };
    }), o = (l = class {
      constructor() {
        this._isCancelled = !1;
      }
      cancel() {
        this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
      }
      get isCancellationRequested() {
        return this._isCancelled;
      }
      get onCancellationRequested() {
        return this._isCancelled ? i : (this._emitter || (this._emitter = new n.Emitter()), this._emitter.event);
      }
      dispose() {
        this._emitter && (this._emitter.dispose(), this._emitter = void 0);
      }
    }, s(l, "MutableToken"), l), c = (u = class {
      get token() {
        return this._token || (this._token = new o()), this._token;
      }
      cancel() {
        this._token ? this._token.cancel() : this._token = a.Cancelled;
      }
      dispose() {
        this._token ? this._token instanceof o && this._token.dispose() : this._token = a.None;
      }
    }, s(u, "CancellationTokenSource"), u);
    t.CancellationTokenSource = c;
  }
}), hT = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messages.js"(t) {
    var P, b, R, I, $, A, S, O, M, L, j, F, te, U, Q, fe, de, pe, ye, Ie, he, J, Ue, le, He;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Message = t.NotificationType9 = t.NotificationType8 = t.NotificationType7 = t.NotificationType6 = t.NotificationType5 = t.NotificationType4 = t.NotificationType3 = t.NotificationType2 = t.NotificationType1 = t.NotificationType0 = t.NotificationType = t.RequestType9 = t.RequestType8 = t.RequestType7 = t.RequestType6 = t.RequestType5 = t.RequestType4 = t.RequestType3 = t.RequestType2 = t.RequestType1 = t.RequestType = t.RequestType0 = t.AbstractMessageSignature = t.ParameterStructures = t.ResponseError = t.ErrorCodes = void 0;
    var e = hc(), r;
    (function(ve) {
      ve.ParseError = -32700, ve.InvalidRequest = -32600, ve.MethodNotFound = -32601, ve.InvalidParams = -32602, ve.InternalError = -32603, ve.jsonrpcReservedErrorRangeStart = -32099, ve.serverErrorStart = -32099, ve.MessageWriteError = -32099, ve.MessageReadError = -32098, ve.PendingResponseRejected = -32097, ve.ConnectionInactive = -32096, ve.ServerNotInitialized = -32002, ve.UnknownErrorCode = -32001, ve.jsonrpcReservedErrorRangeEnd = -32e3, ve.serverErrorEnd = -32e3;
    })(r || (t.ErrorCodes = r = {}));
    var n = (P = class extends Error {
      constructor(x, ze, Xt) {
        super(ze), this.code = e.number(x) ? x : r.UnknownErrorCode, this.data = Xt, Object.setPrototypeOf(this, P.prototype);
      }
      toJson() {
        const x = {
          code: this.code,
          message: this.message
        };
        return this.data !== void 0 && (x.data = this.data), x;
      }
    }, s(P, "ResponseError"), P);
    t.ResponseError = n;
    var a = (b = class {
      constructor(x) {
        this.kind = x;
      }
      static is(x) {
        return x === b.auto || x === b.byName || x === b.byPosition;
      }
      toString() {
        return this.kind;
      }
    }, s(b, "ParameterStructures"), b);
    t.ParameterStructures = a, a.auto = new a("auto"), a.byPosition = new a("byPosition"), a.byName = new a("byName");
    var i = (R = class {
      constructor(x, ze) {
        this.method = x, this.numberOfParams = ze;
      }
      get parameterStructures() {
        return a.auto;
      }
    }, s(R, "AbstractMessageSignature"), R);
    t.AbstractMessageSignature = i;
    var o = (I = class extends i {
      constructor(x) {
        super(x, 0);
      }
    }, s(I, "RequestType0"), I);
    t.RequestType0 = o;
    var c = ($ = class extends i {
      constructor(x, ze = a.auto) {
        super(x, 1), this._parameterStructures = ze;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    }, s($, "RequestType"), $);
    t.RequestType = c;
    var l = (A = class extends i {
      constructor(x, ze = a.auto) {
        super(x, 1), this._parameterStructures = ze;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    }, s(A, "RequestType1"), A);
    t.RequestType1 = l;
    var u = (S = class extends i {
      constructor(x) {
        super(x, 2);
      }
    }, s(S, "RequestType2"), S);
    t.RequestType2 = u;
    var f = (O = class extends i {
      constructor(x) {
        super(x, 3);
      }
    }, s(O, "RequestType3"), O);
    t.RequestType3 = f;
    var d = (M = class extends i {
      constructor(x) {
        super(x, 4);
      }
    }, s(M, "RequestType4"), M);
    t.RequestType4 = d;
    var p = (L = class extends i {
      constructor(x) {
        super(x, 5);
      }
    }, s(L, "RequestType5"), L);
    t.RequestType5 = p;
    var g = (j = class extends i {
      constructor(x) {
        super(x, 6);
      }
    }, s(j, "RequestType6"), j);
    t.RequestType6 = g;
    var m = (F = class extends i {
      constructor(x) {
        super(x, 7);
      }
    }, s(F, "RequestType7"), F);
    t.RequestType7 = m;
    var T = (te = class extends i {
      constructor(x) {
        super(x, 8);
      }
    }, s(te, "RequestType8"), te);
    t.RequestType8 = T;
    var _ = (U = class extends i {
      constructor(x) {
        super(x, 9);
      }
    }, s(U, "RequestType9"), U);
    t.RequestType9 = _;
    var v = (Q = class extends i {
      constructor(x, ze = a.auto) {
        super(x, 1), this._parameterStructures = ze;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    }, s(Q, "NotificationType"), Q);
    t.NotificationType = v;
    var w = (fe = class extends i {
      constructor(x) {
        super(x, 0);
      }
    }, s(fe, "NotificationType0"), fe);
    t.NotificationType0 = w;
    var C = (de = class extends i {
      constructor(x, ze = a.auto) {
        super(x, 1), this._parameterStructures = ze;
      }
      get parameterStructures() {
        return this._parameterStructures;
      }
    }, s(de, "NotificationType1"), de);
    t.NotificationType1 = C;
    var k = (pe = class extends i {
      constructor(x) {
        super(x, 2);
      }
    }, s(pe, "NotificationType2"), pe);
    t.NotificationType2 = k;
    var B = (ye = class extends i {
      constructor(x) {
        super(x, 3);
      }
    }, s(ye, "NotificationType3"), ye);
    t.NotificationType3 = B;
    var re = (Ie = class extends i {
      constructor(x) {
        super(x, 4);
      }
    }, s(Ie, "NotificationType4"), Ie);
    t.NotificationType4 = re;
    var X = (he = class extends i {
      constructor(x) {
        super(x, 5);
      }
    }, s(he, "NotificationType5"), he);
    t.NotificationType5 = X;
    var ge = (J = class extends i {
      constructor(x) {
        super(x, 6);
      }
    }, s(J, "NotificationType6"), J);
    t.NotificationType6 = ge;
    var Ee = (Ue = class extends i {
      constructor(x) {
        super(x, 7);
      }
    }, s(Ue, "NotificationType7"), Ue);
    t.NotificationType7 = Ee;
    var we = (le = class extends i {
      constructor(x) {
        super(x, 8);
      }
    }, s(le, "NotificationType8"), le);
    t.NotificationType8 = we;
    var oe = (He = class extends i {
      constructor(x) {
        super(x, 9);
      }
    }, s(He, "NotificationType9"), He);
    t.NotificationType9 = oe;
    var tt;
    (function(ve) {
      function x(Nt) {
        const Te = Nt;
        return Te && e.string(Te.method) && (e.string(Te.id) || e.number(Te.id));
      }
      s(x, "isRequest"), ve.isRequest = x;
      function ze(Nt) {
        const Te = Nt;
        return Te && e.string(Te.method) && Nt.id === void 0;
      }
      s(ze, "isNotification"), ve.isNotification = ze;
      function Xt(Nt) {
        const Te = Nt;
        return Te && (Te.result !== void 0 || !!Te.error) && (e.string(Te.id) || e.number(Te.id) || Te.id === null);
      }
      s(Xt, "isResponse"), ve.isResponse = Xt;
    })(tt || (t.Message = tt = {}));
  }
}), mT = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/linkedMap.js"(t) {
    var i, o;
    var e;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.LRUCache = t.LinkedMap = t.Touch = void 0;
    var r;
    (function(c) {
      c.None = 0, c.First = 1, c.AsOld = c.First, c.Last = 2, c.AsNew = c.Last;
    })(r || (t.Touch = r = {}));
    var n = (i = class {
      constructor() {
        this[e] = "LinkedMap", this._map = /* @__PURE__ */ new Map(), this._head = void 0, this._tail = void 0, this._size = 0, this._state = 0;
      }
      clear() {
        this._map.clear(), this._head = void 0, this._tail = void 0, this._size = 0, this._state++;
      }
      isEmpty() {
        return !this._head && !this._tail;
      }
      get size() {
        return this._size;
      }
      get first() {
        return this._head?.value;
      }
      get last() {
        return this._tail?.value;
      }
      has(l) {
        return this._map.has(l);
      }
      get(l, u = r.None) {
        const f = this._map.get(l);
        if (f)
          return u !== r.None && this.touch(f, u), f.value;
      }
      set(l, u, f = r.None) {
        let d = this._map.get(l);
        if (d)
          d.value = u, f !== r.None && this.touch(d, f);
        else {
          switch (d = { key: l, value: u, next: void 0, previous: void 0 }, f) {
            case r.None:
              this.addItemLast(d);
              break;
            case r.First:
              this.addItemFirst(d);
              break;
            case r.Last:
              this.addItemLast(d);
              break;
            default:
              this.addItemLast(d);
              break;
          }
          this._map.set(l, d), this._size++;
        }
        return this;
      }
      delete(l) {
        return !!this.remove(l);
      }
      remove(l) {
        const u = this._map.get(l);
        if (u)
          return this._map.delete(l), this.removeItem(u), this._size--, u.value;
      }
      shift() {
        if (!this._head && !this._tail)
          return;
        if (!this._head || !this._tail)
          throw new Error("Invalid list");
        const l = this._head;
        return this._map.delete(l.key), this.removeItem(l), this._size--, l.value;
      }
      forEach(l, u) {
        const f = this._state;
        let d = this._head;
        for (; d; ) {
          if (u ? l.bind(u)(d.value, d.key, this) : l(d.value, d.key, this), this._state !== f)
            throw new Error("LinkedMap got modified during iteration.");
          d = d.next;
        }
      }
      keys() {
        const l = this._state;
        let u = this._head;
        const f = {
          [Symbol.iterator]: () => f,
          next: /* @__PURE__ */ s(() => {
            if (this._state !== l)
              throw new Error("LinkedMap got modified during iteration.");
            if (u) {
              const d = { value: u.key, done: !1 };
              return u = u.next, d;
            } else
              return { value: void 0, done: !0 };
          }, "next")
        };
        return f;
      }
      values() {
        const l = this._state;
        let u = this._head;
        const f = {
          [Symbol.iterator]: () => f,
          next: /* @__PURE__ */ s(() => {
            if (this._state !== l)
              throw new Error("LinkedMap got modified during iteration.");
            if (u) {
              const d = { value: u.value, done: !1 };
              return u = u.next, d;
            } else
              return { value: void 0, done: !0 };
          }, "next")
        };
        return f;
      }
      entries() {
        const l = this._state;
        let u = this._head;
        const f = {
          [Symbol.iterator]: () => f,
          next: /* @__PURE__ */ s(() => {
            if (this._state !== l)
              throw new Error("LinkedMap got modified during iteration.");
            if (u) {
              const d = { value: [u.key, u.value], done: !1 };
              return u = u.next, d;
            } else
              return { value: void 0, done: !0 };
          }, "next")
        };
        return f;
      }
      [(e = Symbol.toStringTag, Symbol.iterator)]() {
        return this.entries();
      }
      trimOld(l) {
        if (l >= this.size)
          return;
        if (l === 0) {
          this.clear();
          return;
        }
        let u = this._head, f = this.size;
        for (; u && f > l; )
          this._map.delete(u.key), u = u.next, f--;
        this._head = u, this._size = f, u && (u.previous = void 0), this._state++;
      }
      addItemFirst(l) {
        if (!this._head && !this._tail)
          this._tail = l;
        else if (this._head)
          l.next = this._head, this._head.previous = l;
        else
          throw new Error("Invalid list");
        this._head = l, this._state++;
      }
      addItemLast(l) {
        if (!this._head && !this._tail)
          this._head = l;
        else if (this._tail)
          l.previous = this._tail, this._tail.next = l;
        else
          throw new Error("Invalid list");
        this._tail = l, this._state++;
      }
      removeItem(l) {
        if (l === this._head && l === this._tail)
          this._head = void 0, this._tail = void 0;
        else if (l === this._head) {
          if (!l.next)
            throw new Error("Invalid list");
          l.next.previous = void 0, this._head = l.next;
        } else if (l === this._tail) {
          if (!l.previous)
            throw new Error("Invalid list");
          l.previous.next = void 0, this._tail = l.previous;
        } else {
          const u = l.next, f = l.previous;
          if (!u || !f)
            throw new Error("Invalid list");
          u.previous = f, f.next = u;
        }
        l.next = void 0, l.previous = void 0, this._state++;
      }
      touch(l, u) {
        if (!this._head || !this._tail)
          throw new Error("Invalid list");
        if (!(u !== r.First && u !== r.Last)) {
          if (u === r.First) {
            if (l === this._head)
              return;
            const f = l.next, d = l.previous;
            l === this._tail ? (d.next = void 0, this._tail = d) : (f.previous = d, d.next = f), l.previous = void 0, l.next = this._head, this._head.previous = l, this._head = l, this._state++;
          } else if (u === r.Last) {
            if (l === this._tail)
              return;
            const f = l.next, d = l.previous;
            l === this._head ? (f.previous = void 0, this._head = f) : (f.previous = d, d.next = f), l.next = void 0, l.previous = this._tail, this._tail.next = l, this._tail = l, this._state++;
          }
        }
      }
      toJSON() {
        const l = [];
        return this.forEach((u, f) => {
          l.push([f, u]);
        }), l;
      }
      fromJSON(l) {
        this.clear();
        for (const [u, f] of l)
          this.set(u, f);
      }
    }, s(i, "LinkedMap"), i);
    t.LinkedMap = n;
    var a = (o = class extends n {
      constructor(l, u = 1) {
        super(), this._limit = l, this._ratio = Math.min(Math.max(0, u), 1);
      }
      get limit() {
        return this._limit;
      }
      set limit(l) {
        this._limit = l, this.checkTrim();
      }
      get ratio() {
        return this._ratio;
      }
      set ratio(l) {
        this._ratio = Math.min(Math.max(0, l), 1), this.checkTrim();
      }
      get(l, u = r.AsNew) {
        return super.get(l, u);
      }
      peek(l) {
        return super.get(l, r.None);
      }
      set(l, u) {
        return super.set(l, u, r.Last), this.checkTrim(), this;
      }
      checkTrim() {
        this.size > this._limit && this.trimOld(Math.round(this._limit * this._ratio));
      }
    }, s(o, "LRUCache"), o);
    t.LRUCache = a;
  }
}), FN = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/disposable.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Disposable = void 0;
    var e;
    (function(r) {
      function n(a) {
        return {
          dispose: a
        };
      }
      s(n, "create"), r.create = n;
    })(e || (t.Disposable = e = {}));
  }
}), GN = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/sharedArrayCancellation.js"(t) {
    var c, l, u, f;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.SharedArrayReceiverStrategy = t.SharedArraySenderStrategy = void 0;
    var e = ff(), r;
    (function(d) {
      d.Continue = 0, d.Cancelled = 1;
    })(r || (r = {}));
    var n = (c = class {
      constructor() {
        this.buffers = /* @__PURE__ */ new Map();
      }
      enableCancellation(p) {
        if (p.id === null)
          return;
        const g = new SharedArrayBuffer(4), m = new Int32Array(g, 0, 1);
        m[0] = r.Continue, this.buffers.set(p.id, g), p.$cancellationData = g;
      }
      async sendCancellation(p, g) {
        const m = this.buffers.get(g);
        if (m === void 0)
          return;
        const T = new Int32Array(m, 0, 1);
        Atomics.store(T, 0, r.Cancelled);
      }
      cleanup(p) {
        this.buffers.delete(p);
      }
      dispose() {
        this.buffers.clear();
      }
    }, s(c, "SharedArraySenderStrategy"), c);
    t.SharedArraySenderStrategy = n;
    var a = (l = class {
      constructor(p) {
        this.data = new Int32Array(p, 0, 1);
      }
      get isCancellationRequested() {
        return Atomics.load(this.data, 0) === r.Cancelled;
      }
      get onCancellationRequested() {
        throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events");
      }
    }, s(l, "SharedArrayBufferCancellationToken"), l), i = (u = class {
      constructor(p) {
        this.token = new a(p);
      }
      cancel() {
      }
      dispose() {
      }
    }, s(u, "SharedArrayBufferCancellationTokenSource"), u), o = (f = class {
      constructor() {
        this.kind = "request";
      }
      createCancellationTokenSource(p) {
        const g = p.$cancellationData;
        return g === void 0 ? new e.CancellationTokenSource() : new i(g);
      }
    }, s(f, "SharedArrayReceiverStrategy"), f);
    t.SharedArrayReceiverStrategy = o;
  }
}), gT = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/semaphore.js"(t) {
    var n;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Semaphore = void 0;
    var e = jn(), r = (n = class {
      constructor(i = 1) {
        if (i <= 0)
          throw new Error("Capacity must be greater than 0");
        this._capacity = i, this._active = 0, this._waiting = [];
      }
      lock(i) {
        return new Promise((o, c) => {
          this._waiting.push({ thunk: i, resolve: o, reject: c }), this.runNext();
        });
      }
      get active() {
        return this._active;
      }
      runNext() {
        this._waiting.length === 0 || this._active === this._capacity || (0, e.default)().timer.setImmediate(() => this.doRunNext());
      }
      doRunNext() {
        if (this._waiting.length === 0 || this._active === this._capacity)
          return;
        const i = this._waiting.shift();
        if (this._active++, this._active > this._capacity)
          throw new Error("To many thunks active");
        try {
          const o = i.thunk();
          o instanceof Promise ? o.then((c) => {
            this._active--, i.resolve(c), this.runNext();
          }, (c) => {
            this._active--, i.reject(c), this.runNext();
          }) : (this._active--, i.resolve(o), this.runNext());
        } catch (o) {
          this._active--, i.reject(o), this.runNext();
        }
      }
    }, s(n, "Semaphore"), n);
    t.Semaphore = r;
  }
}), jN = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageReader.js"(t) {
    var u, f;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ReadableStreamMessageReader = t.AbstractMessageReader = t.MessageReader = void 0;
    var e = jn(), r = hc(), n = Fo(), a = gT(), i;
    (function(d) {
      function p(g) {
        let m = g;
        return m && r.func(m.listen) && r.func(m.dispose) && r.func(m.onError) && r.func(m.onClose) && r.func(m.onPartialMessage);
      }
      s(p, "is"), d.is = p;
    })(i || (t.MessageReader = i = {}));
    var o = (u = class {
      constructor() {
        this.errorEmitter = new n.Emitter(), this.closeEmitter = new n.Emitter(), this.partialMessageEmitter = new n.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose(), this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(p) {
        this.errorEmitter.fire(this.asError(p));
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      get onPartialMessage() {
        return this.partialMessageEmitter.event;
      }
      firePartialMessage(p) {
        this.partialMessageEmitter.fire(p);
      }
      asError(p) {
        return p instanceof Error ? p : new Error(`Reader received error. Reason: ${r.string(p.message) ? p.message : "unknown"}`);
      }
    }, s(u, "AbstractMessageReader"), u);
    t.AbstractMessageReader = o;
    var c;
    (function(d) {
      function p(g) {
        let m, T;
        const _ = /* @__PURE__ */ new Map();
        let v;
        const w = /* @__PURE__ */ new Map();
        if (g === void 0 || typeof g == "string")
          m = g ?? "utf-8";
        else {
          if (m = g.charset ?? "utf-8", g.contentDecoder !== void 0 && (T = g.contentDecoder, _.set(T.name, T)), g.contentDecoders !== void 0)
            for (const C of g.contentDecoders)
              _.set(C.name, C);
          if (g.contentTypeDecoder !== void 0 && (v = g.contentTypeDecoder, w.set(v.name, v)), g.contentTypeDecoders !== void 0)
            for (const C of g.contentTypeDecoders)
              w.set(C.name, C);
        }
        return v === void 0 && (v = (0, e.default)().applicationJson.decoder, w.set(v.name, v)), { charset: m, contentDecoder: T, contentDecoders: _, contentTypeDecoder: v, contentTypeDecoders: w };
      }
      s(p, "fromOptions"), d.fromOptions = p;
    })(c || (c = {}));
    var l = (f = class extends o {
      constructor(p, g) {
        super(), this.readable = p, this.options = c.fromOptions(g), this.buffer = (0, e.default)().messageBuffer.create(this.options.charset), this._partialMessageTimeout = 1e4, this.nextMessageLength = -1, this.messageToken = 0, this.readSemaphore = new a.Semaphore(1);
      }
      set partialMessageTimeout(p) {
        this._partialMessageTimeout = p;
      }
      get partialMessageTimeout() {
        return this._partialMessageTimeout;
      }
      listen(p) {
        this.nextMessageLength = -1, this.messageToken = 0, this.partialMessageTimer = void 0, this.callback = p;
        const g = this.readable.onData((m) => {
          this.onData(m);
        });
        return this.readable.onError((m) => this.fireError(m)), this.readable.onClose(() => this.fireClose()), g;
      }
      onData(p) {
        try {
          for (this.buffer.append(p); ; ) {
            if (this.nextMessageLength === -1) {
              const m = this.buffer.tryReadHeaders(!0);
              if (!m)
                return;
              const T = m.get("content-length");
              if (!T) {
                this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(m))}`));
                return;
              }
              const _ = parseInt(T);
              if (isNaN(_)) {
                this.fireError(new Error(`Content-Length value must be a number. Got ${T}`));
                return;
              }
              this.nextMessageLength = _;
            }
            const g = this.buffer.tryReadBody(this.nextMessageLength);
            if (g === void 0) {
              this.setPartialMessageTimer();
              return;
            }
            this.clearPartialMessageTimer(), this.nextMessageLength = -1, this.readSemaphore.lock(async () => {
              const m = this.options.contentDecoder !== void 0 ? await this.options.contentDecoder.decode(g) : g, T = await this.options.contentTypeDecoder.decode(m, this.options);
              this.callback(T);
            }).catch((m) => {
              this.fireError(m);
            });
          }
        } catch (g) {
          this.fireError(g);
        }
      }
      clearPartialMessageTimer() {
        this.partialMessageTimer && (this.partialMessageTimer.dispose(), this.partialMessageTimer = void 0);
      }
      setPartialMessageTimer() {
        this.clearPartialMessageTimer(), !(this._partialMessageTimeout <= 0) && (this.partialMessageTimer = (0, e.default)().timer.setTimeout((p, g) => {
          this.partialMessageTimer = void 0, p === this.messageToken && (this.firePartialMessage({ messageToken: p, waitingTime: g }), this.setPartialMessageTimer());
        }, this._partialMessageTimeout, this.messageToken, this._partialMessageTimeout));
      }
    }, s(f, "ReadableStreamMessageReader"), f);
    t.ReadableStreamMessageReader = l;
  }
}), UN = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageWriter.js"(t) {
    var d, p;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.WriteableStreamMessageWriter = t.AbstractMessageWriter = t.MessageWriter = void 0;
    var e = jn(), r = hc(), n = gT(), a = Fo(), i = "Content-Length: ", o = `\r
`, c;
    (function(g) {
      function m(T) {
        let _ = T;
        return _ && r.func(_.dispose) && r.func(_.onClose) && r.func(_.onError) && r.func(_.write);
      }
      s(m, "is"), g.is = m;
    })(c || (t.MessageWriter = c = {}));
    var l = (d = class {
      constructor() {
        this.errorEmitter = new a.Emitter(), this.closeEmitter = new a.Emitter();
      }
      dispose() {
        this.errorEmitter.dispose(), this.closeEmitter.dispose();
      }
      get onError() {
        return this.errorEmitter.event;
      }
      fireError(m, T, _) {
        this.errorEmitter.fire([this.asError(m), T, _]);
      }
      get onClose() {
        return this.closeEmitter.event;
      }
      fireClose() {
        this.closeEmitter.fire(void 0);
      }
      asError(m) {
        return m instanceof Error ? m : new Error(`Writer received error. Reason: ${r.string(m.message) ? m.message : "unknown"}`);
      }
    }, s(d, "AbstractMessageWriter"), d);
    t.AbstractMessageWriter = l;
    var u;
    (function(g) {
      function m(T) {
        return T === void 0 || typeof T == "string" ? { charset: T ?? "utf-8", contentTypeEncoder: (0, e.default)().applicationJson.encoder } : { charset: T.charset ?? "utf-8", contentEncoder: T.contentEncoder, contentTypeEncoder: T.contentTypeEncoder ?? (0, e.default)().applicationJson.encoder };
      }
      s(m, "fromOptions"), g.fromOptions = m;
    })(u || (u = {}));
    var f = (p = class extends l {
      constructor(m, T) {
        super(), this.writable = m, this.options = u.fromOptions(T), this.errorCount = 0, this.writeSemaphore = new n.Semaphore(1), this.writable.onError((_) => this.fireError(_)), this.writable.onClose(() => this.fireClose());
      }
      async write(m) {
        return this.writeSemaphore.lock(async () => this.options.contentTypeEncoder.encode(m, this.options).then((_) => this.options.contentEncoder !== void 0 ? this.options.contentEncoder.encode(_) : _).then((_) => {
          const v = [];
          return v.push(i, _.byteLength.toString(), o), v.push(o), this.doWrite(m, v, _);
        }, (_) => {
          throw this.fireError(_), _;
        }));
      }
      async doWrite(m, T, _) {
        try {
          return await this.writable.write(T.join(""), "ascii"), this.writable.write(_);
        } catch (v) {
          return this.handleError(v, m), Promise.reject(v);
        }
      }
      handleError(m, T) {
        this.errorCount++, this.fireError(m, T, this.errorCount);
      }
      end() {
        this.writable.end();
      }
    }, s(p, "WriteableStreamMessageWriter"), p);
    t.WriteableStreamMessageWriter = f;
  }
}), zN = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/messageBuffer.js"(t) {
    var i;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.AbstractMessageBuffer = void 0;
    var e = 13, r = 10, n = `\r
`, a = (i = class {
      constructor(c = "utf-8") {
        this._encoding = c, this._chunks = [], this._totalLength = 0;
      }
      get encoding() {
        return this._encoding;
      }
      append(c) {
        const l = typeof c == "string" ? this.fromString(c, this._encoding) : c;
        this._chunks.push(l), this._totalLength += l.byteLength;
      }
      tryReadHeaders(c = !1) {
        if (this._chunks.length === 0)
          return;
        let l = 0, u = 0, f = 0, d = 0;
        e: for (; u < this._chunks.length; ) {
          const T = this._chunks[u];
          for (f = 0; f < T.length; ) {
            switch (T[f]) {
              case e:
                switch (l) {
                  case 0:
                    l = 1;
                    break;
                  case 2:
                    l = 3;
                    break;
                  default:
                    l = 0;
                }
                break;
              case r:
                switch (l) {
                  case 1:
                    l = 2;
                    break;
                  case 3:
                    l = 4, f++;
                    break e;
                  default:
                    l = 0;
                }
                break;
              default:
                l = 0;
            }
            f++;
          }
          d += T.byteLength, u++;
        }
        if (l !== 4)
          return;
        const p = this._read(d + f), g = /* @__PURE__ */ new Map(), m = this.toString(p, "ascii").split(n);
        if (m.length < 2)
          return g;
        for (let T = 0; T < m.length - 2; T++) {
          const _ = m[T], v = _.indexOf(":");
          if (v === -1)
            throw new Error(`Message header must separate key and value using ':'
${_}`);
          const w = _.substr(0, v), C = _.substr(v + 1).trim();
          g.set(c ? w.toLowerCase() : w, C);
        }
        return g;
      }
      tryReadBody(c) {
        if (!(this._totalLength < c))
          return this._read(c);
      }
      get numberOfBytes() {
        return this._totalLength;
      }
      _read(c) {
        if (c === 0)
          return this.emptyBuffer();
        if (c > this._totalLength)
          throw new Error("Cannot read so many bytes!");
        if (this._chunks[0].byteLength === c) {
          const d = this._chunks[0];
          return this._chunks.shift(), this._totalLength -= c, this.asNative(d);
        }
        if (this._chunks[0].byteLength > c) {
          const d = this._chunks[0], p = this.asNative(d, c);
          return this._chunks[0] = d.slice(c), this._totalLength -= c, p;
        }
        const l = this.allocNative(c);
        let u = 0, f = 0;
        for (; c > 0; ) {
          const d = this._chunks[f];
          if (d.byteLength > c) {
            const p = d.slice(0, c);
            l.set(p, u), u += c, this._chunks[f] = d.slice(c), this._totalLength -= c, c -= c;
          } else
            l.set(d, u), u += d.byteLength, this._chunks.shift(), this._totalLength -= d.byteLength, c -= d.byteLength;
        }
        return l;
      }
    }, s(i, "AbstractMessageBuffer"), i);
    t.AbstractMessageBuffer = a;
  }
}), BN = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/connection.js"(t) {
    var P, b;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.createMessageConnection = t.ConnectionOptions = t.MessageStrategy = t.CancellationStrategy = t.CancellationSenderStrategy = t.CancellationReceiverStrategy = t.RequestCancellationReceiverStrategy = t.IdCancellationReceiverStrategy = t.ConnectionStrategy = t.ConnectionError = t.ConnectionErrors = t.LogTraceNotification = t.SetTraceNotification = t.TraceFormat = t.TraceValues = t.Trace = t.NullLogger = t.ProgressType = t.ProgressToken = void 0;
    var e = jn(), r = hc(), n = hT(), a = mT(), i = Fo(), o = ff(), c;
    (function(R) {
      R.type = new n.NotificationType("$/cancelRequest");
    })(c || (c = {}));
    var l;
    (function(R) {
      function I($) {
        return typeof $ == "string" || typeof $ == "number";
      }
      s(I, "is"), R.is = I;
    })(l || (t.ProgressToken = l = {}));
    var u;
    (function(R) {
      R.type = new n.NotificationType("$/progress");
    })(u || (u = {}));
    var f = (P = class {
      constructor() {
      }
    }, s(P, "ProgressType"), P);
    t.ProgressType = f;
    var d;
    (function(R) {
      function I($) {
        return r.func($);
      }
      s(I, "is"), R.is = I;
    })(d || (d = {})), t.NullLogger = Object.freeze({
      error: /* @__PURE__ */ s(() => {
      }, "error"),
      warn: /* @__PURE__ */ s(() => {
      }, "warn"),
      info: /* @__PURE__ */ s(() => {
      }, "info"),
      log: /* @__PURE__ */ s(() => {
      }, "log")
    });
    var p;
    (function(R) {
      R[R.Off = 0] = "Off", R[R.Messages = 1] = "Messages", R[R.Compact = 2] = "Compact", R[R.Verbose = 3] = "Verbose";
    })(p || (t.Trace = p = {}));
    var g;
    (function(R) {
      R.Off = "off", R.Messages = "messages", R.Compact = "compact", R.Verbose = "verbose";
    })(g || (t.TraceValues = g = {})), (function(R) {
      function I(A) {
        if (!r.string(A))
          return R.Off;
        switch (A = A.toLowerCase(), A) {
          case "off":
            return R.Off;
          case "messages":
            return R.Messages;
          case "compact":
            return R.Compact;
          case "verbose":
            return R.Verbose;
          default:
            return R.Off;
        }
      }
      s(I, "fromString"), R.fromString = I;
      function $(A) {
        switch (A) {
          case R.Off:
            return "off";
          case R.Messages:
            return "messages";
          case R.Compact:
            return "compact";
          case R.Verbose:
            return "verbose";
          default:
            return "off";
        }
      }
      s($, "toString"), R.toString = $;
    })(p || (t.Trace = p = {}));
    var m;
    (function(R) {
      R.Text = "text", R.JSON = "json";
    })(m || (t.TraceFormat = m = {})), (function(R) {
      function I($) {
        return r.string($) ? ($ = $.toLowerCase(), $ === "json" ? R.JSON : R.Text) : R.Text;
      }
      s(I, "fromString"), R.fromString = I;
    })(m || (t.TraceFormat = m = {}));
    var T;
    (function(R) {
      R.type = new n.NotificationType("$/setTrace");
    })(T || (t.SetTraceNotification = T = {}));
    var _;
    (function(R) {
      R.type = new n.NotificationType("$/logTrace");
    })(_ || (t.LogTraceNotification = _ = {}));
    var v;
    (function(R) {
      R[R.Closed = 1] = "Closed", R[R.Disposed = 2] = "Disposed", R[R.AlreadyListening = 3] = "AlreadyListening";
    })(v || (t.ConnectionErrors = v = {}));
    var w = (b = class extends Error {
      constructor(I, $) {
        super($), this.code = I, Object.setPrototypeOf(this, b.prototype);
      }
    }, s(b, "ConnectionError"), b);
    t.ConnectionError = w;
    var C;
    (function(R) {
      function I($) {
        const A = $;
        return A && r.func(A.cancelUndispatched);
      }
      s(I, "is"), R.is = I;
    })(C || (t.ConnectionStrategy = C = {}));
    var k;
    (function(R) {
      function I($) {
        const A = $;
        return A && (A.kind === void 0 || A.kind === "id") && r.func(A.createCancellationTokenSource) && (A.dispose === void 0 || r.func(A.dispose));
      }
      s(I, "is"), R.is = I;
    })(k || (t.IdCancellationReceiverStrategy = k = {}));
    var B;
    (function(R) {
      function I($) {
        const A = $;
        return A && A.kind === "request" && r.func(A.createCancellationTokenSource) && (A.dispose === void 0 || r.func(A.dispose));
      }
      s(I, "is"), R.is = I;
    })(B || (t.RequestCancellationReceiverStrategy = B = {}));
    var re;
    (function(R) {
      R.Message = Object.freeze({
        createCancellationTokenSource($) {
          return new o.CancellationTokenSource();
        }
      });
      function I($) {
        return k.is($) || B.is($);
      }
      s(I, "is"), R.is = I;
    })(re || (t.CancellationReceiverStrategy = re = {}));
    var X;
    (function(R) {
      R.Message = Object.freeze({
        sendCancellation($, A) {
          return $.sendNotification(c.type, { id: A });
        },
        cleanup($) {
        }
      });
      function I($) {
        const A = $;
        return A && r.func(A.sendCancellation) && r.func(A.cleanup);
      }
      s(I, "is"), R.is = I;
    })(X || (t.CancellationSenderStrategy = X = {}));
    var ge;
    (function(R) {
      R.Message = Object.freeze({
        receiver: re.Message,
        sender: X.Message
      });
      function I($) {
        const A = $;
        return A && re.is(A.receiver) && X.is(A.sender);
      }
      s(I, "is"), R.is = I;
    })(ge || (t.CancellationStrategy = ge = {}));
    var Ee;
    (function(R) {
      function I($) {
        const A = $;
        return A && r.func(A.handleMessage);
      }
      s(I, "is"), R.is = I;
    })(Ee || (t.MessageStrategy = Ee = {}));
    var we;
    (function(R) {
      function I($) {
        const A = $;
        return A && (ge.is(A.cancellationStrategy) || C.is(A.connectionStrategy) || Ee.is(A.messageStrategy));
      }
      s(I, "is"), R.is = I;
    })(we || (t.ConnectionOptions = we = {}));
    var oe;
    (function(R) {
      R[R.New = 1] = "New", R[R.Listening = 2] = "Listening", R[R.Closed = 3] = "Closed", R[R.Disposed = 4] = "Disposed";
    })(oe || (oe = {}));
    function tt(R, I, $, A) {
      const S = $ !== void 0 ? $ : t.NullLogger;
      let O = 0, M = 0, L = 0;
      const j = "2.0";
      let F;
      const te = /* @__PURE__ */ new Map();
      let U;
      const Q = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map();
      let de, pe = new a.LinkedMap(), ye = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Map(), J = p.Off, Ue = m.Text, le, He = oe.New;
      const ve = new i.Emitter(), x = new i.Emitter(), ze = new i.Emitter(), Xt = new i.Emitter(), Nt = new i.Emitter(), Te = A && A.cancellationStrategy ? A.cancellationStrategy : ge.Message;
      function oa(y) {
        if (y === null)
          throw new Error("Can't send requests with id null since the response can't be correlated.");
        return "req-" + y.toString();
      }
      s(oa, "createRequestQueueKey");
      function Yo(y) {
        return y === null ? "res-unknown-" + (++L).toString() : "res-" + y.toString();
      }
      s(Yo, "createResponseQueueKey");
      function Xo() {
        return "not-" + (++M).toString();
      }
      s(Xo, "createNotificationQueueKey");
      function Jo(y, N) {
        n.Message.isRequest(N) ? y.set(oa(N.id), N) : n.Message.isResponse(N) ? y.set(Yo(N.id), N) : y.set(Xo(), N);
      }
      s(Jo, "addMessageToQueue");
      function Zo(y) {
      }
      s(Zo, "cancelUndispatched");
      function la() {
        return He === oe.Listening;
      }
      s(la, "isListening");
      function ca() {
        return He === oe.Closed;
      }
      s(ca, "isClosed");
      function Jt() {
        return He === oe.Disposed;
      }
      s(Jt, "isDisposed");
      function ua() {
        (He === oe.New || He === oe.Listening) && (He = oe.Closed, x.fire(void 0));
      }
      s(ua, "closeHandler");
      function Qo(y) {
        ve.fire([y, void 0, void 0]);
      }
      s(Qo, "readErrorHandler");
      function el(y) {
        ve.fire(y);
      }
      s(el, "writeErrorHandler"), R.onClose(ua), R.onError(Qo), I.onClose(ua), I.onError(el);
      function fa() {
        de || pe.size === 0 || (de = (0, e.default)().timer.setImmediate(() => {
          de = void 0, tl();
        }));
      }
      s(fa, "triggerMessageQueue");
      function da(y) {
        n.Message.isRequest(y) ? rl(y) : n.Message.isNotification(y) ? al(y) : n.Message.isResponse(y) ? nl(y) : il(y);
      }
      s(da, "handleMessage");
      function tl() {
        if (pe.size === 0)
          return;
        const y = pe.shift();
        try {
          const N = A?.messageStrategy;
          Ee.is(N) ? N.handleMessage(y, da) : da(y);
        } finally {
          fa();
        }
      }
      s(tl, "processMessageQueue");
      const Lc = /* @__PURE__ */ s((y) => {
        try {
          if (n.Message.isNotification(y) && y.method === c.type.method) {
            const N = y.params.id, D = oa(N), G = pe.get(D);
            if (n.Message.isRequest(G)) {
              const me = A?.connectionStrategy, Me = me && me.cancelUndispatched ? me.cancelUndispatched(G, Zo) : void 0;
              if (Me && (Me.error !== void 0 || Me.result !== void 0)) {
                pe.delete(D), he.delete(N), Me.id = G.id, Fr(Me, y.method, Date.now()), I.write(Me).catch(() => S.error("Sending response for canceled message failed."));
                return;
              }
            }
            const _e = he.get(N);
            if (_e !== void 0) {
              _e.cancel(), rn(y);
              return;
            } else
              Ie.add(N);
          }
          Jo(pe, y);
        } finally {
          fa();
        }
      }, "callback");
      function rl(y) {
        if (Jt())
          return;
        function N(ne, Oe, ce) {
          const Ke = {
            jsonrpc: j,
            id: y.id
          };
          ne instanceof n.ResponseError ? Ke.error = ne.toJson() : Ke.result = ne === void 0 ? null : ne, Fr(Ke, Oe, ce), I.write(Ke).catch(() => S.error("Sending response failed."));
        }
        s(N, "reply");
        function D(ne, Oe, ce) {
          const Ke = {
            jsonrpc: j,
            id: y.id,
            error: ne.toJson()
          };
          Fr(Ke, Oe, ce), I.write(Ke).catch(() => S.error("Sending response failed."));
        }
        s(D, "replyError");
        function G(ne, Oe, ce) {
          ne === void 0 && (ne = null);
          const Ke = {
            jsonrpc: j,
            id: y.id,
            result: ne
          };
          Fr(Ke, Oe, ce), I.write(Ke).catch(() => S.error("Sending response failed."));
        }
        s(G, "replySuccess"), ll(y);
        const _e = te.get(y.method);
        let me, Me;
        _e && (me = _e.type, Me = _e.handler);
        const Ge = Date.now();
        if (Me || F) {
          const ne = y.id ?? String(Date.now()), Oe = k.is(Te.receiver) ? Te.receiver.createCancellationTokenSource(ne) : Te.receiver.createCancellationTokenSource(y);
          y.id !== null && Ie.has(y.id) && Oe.cancel(), y.id !== null && he.set(ne, Oe);
          try {
            let ce;
            if (Me)
              if (y.params === void 0) {
                if (me !== void 0 && me.numberOfParams !== 0) {
                  D(new n.ResponseError(n.ErrorCodes.InvalidParams, `Request ${y.method} defines ${me.numberOfParams} params but received none.`), y.method, Ge);
                  return;
                }
                ce = Me(Oe.token);
              } else if (Array.isArray(y.params)) {
                if (me !== void 0 && me.parameterStructures === n.ParameterStructures.byName) {
                  D(new n.ResponseError(n.ErrorCodes.InvalidParams, `Request ${y.method} defines parameters by name but received parameters by position`), y.method, Ge);
                  return;
                }
                ce = Me(...y.params, Oe.token);
              } else {
                if (me !== void 0 && me.parameterStructures === n.ParameterStructures.byPosition) {
                  D(new n.ResponseError(n.ErrorCodes.InvalidParams, `Request ${y.method} defines parameters by position but received parameters by name`), y.method, Ge);
                  return;
                }
                ce = Me(y.params, Oe.token);
              }
            else F && (ce = F(y.method, y.params, Oe.token));
            const Ke = ce;
            ce ? Ke.then ? Ke.then((rt) => {
              he.delete(ne), N(rt, y.method, Ge);
            }, (rt) => {
              he.delete(ne), rt instanceof n.ResponseError ? D(rt, y.method, Ge) : rt && r.string(rt.message) ? D(new n.ResponseError(n.ErrorCodes.InternalError, `Request ${y.method} failed with message: ${rt.message}`), y.method, Ge) : D(new n.ResponseError(n.ErrorCodes.InternalError, `Request ${y.method} failed unexpectedly without providing any details.`), y.method, Ge);
            }) : (he.delete(ne), N(ce, y.method, Ge)) : (he.delete(ne), G(ce, y.method, Ge));
          } catch (ce) {
            he.delete(ne), ce instanceof n.ResponseError ? N(ce, y.method, Ge) : ce && r.string(ce.message) ? D(new n.ResponseError(n.ErrorCodes.InternalError, `Request ${y.method} failed with message: ${ce.message}`), y.method, Ge) : D(new n.ResponseError(n.ErrorCodes.InternalError, `Request ${y.method} failed unexpectedly without providing any details.`), y.method, Ge);
          }
        } else
          D(new n.ResponseError(n.ErrorCodes.MethodNotFound, `Unhandled method ${y.method}`), y.method, Ge);
      }
      s(rl, "handleRequest");
      function nl(y) {
        if (!Jt())
          if (y.id === null)
            y.error ? S.error(`Received response message without id: Error is: 
${JSON.stringify(y.error, void 0, 4)}`) : S.error("Received response message without id. No further error information provided.");
          else {
            const N = y.id, D = ye.get(N);
            if (cl(y, D), D !== void 0) {
              ye.delete(N);
              try {
                if (y.error) {
                  const G = y.error;
                  D.reject(new n.ResponseError(G.code, G.message, G.data));
                } else if (y.result !== void 0)
                  D.resolve(y.result);
                else
                  throw new Error("Should never happen.");
              } catch (G) {
                G.message ? S.error(`Response handler '${D.method}' failed with message: ${G.message}`) : S.error(`Response handler '${D.method}' failed unexpectedly.`);
              }
            }
          }
      }
      s(nl, "handleResponse");
      function al(y) {
        if (Jt())
          return;
        let N, D;
        if (y.method === c.type.method) {
          const G = y.params.id;
          Ie.delete(G), rn(y);
          return;
        } else {
          const G = Q.get(y.method);
          G && (D = G.handler, N = G.type);
        }
        if (D || U)
          try {
            if (rn(y), D)
              if (y.params === void 0)
                N !== void 0 && N.numberOfParams !== 0 && N.parameterStructures !== n.ParameterStructures.byName && S.error(`Notification ${y.method} defines ${N.numberOfParams} params but received none.`), D();
              else if (Array.isArray(y.params)) {
                const G = y.params;
                y.method === u.type.method && G.length === 2 && l.is(G[0]) ? D({ token: G[0], value: G[1] }) : (N !== void 0 && (N.parameterStructures === n.ParameterStructures.byName && S.error(`Notification ${y.method} defines parameters by name but received parameters by position`), N.numberOfParams !== y.params.length && S.error(`Notification ${y.method} defines ${N.numberOfParams} params but received ${G.length} arguments`)), D(...G));
              } else
                N !== void 0 && N.parameterStructures === n.ParameterStructures.byPosition && S.error(`Notification ${y.method} defines parameters by position but received parameters by name`), D(y.params);
            else U && U(y.method, y.params);
          } catch (G) {
            G.message ? S.error(`Notification handler '${y.method}' failed with message: ${G.message}`) : S.error(`Notification handler '${y.method}' failed unexpectedly.`);
          }
        else
          ze.fire(y);
      }
      s(al, "handleNotification");
      function il(y) {
        if (!y) {
          S.error("Received empty message.");
          return;
        }
        S.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(y, null, 4)}`);
        const N = y;
        if (r.string(N.id) || r.number(N.id)) {
          const D = N.id, G = ye.get(D);
          G && G.reject(new Error("The received response has neither a result nor an error property."));
        }
      }
      s(il, "handleInvalidMessage");
      function kt(y) {
        if (y != null)
          switch (J) {
            case p.Verbose:
              return JSON.stringify(y, null, 4);
            case p.Compact:
              return JSON.stringify(y);
            default:
              return;
          }
      }
      s(kt, "stringifyTrace");
      function sl(y) {
        if (!(J === p.Off || !le))
          if (Ue === m.Text) {
            let N;
            (J === p.Verbose || J === p.Compact) && y.params && (N = `Params: ${kt(y.params)}

`), le.log(`Sending request '${y.method} - (${y.id})'.`, N);
          } else
            Zt("send-request", y);
      }
      s(sl, "traceSendingRequest");
      function ol(y) {
        if (!(J === p.Off || !le))
          if (Ue === m.Text) {
            let N;
            (J === p.Verbose || J === p.Compact) && (y.params ? N = `Params: ${kt(y.params)}

` : N = `No parameters provided.

`), le.log(`Sending notification '${y.method}'.`, N);
          } else
            Zt("send-notification", y);
      }
      s(ol, "traceSendingNotification");
      function Fr(y, N, D) {
        if (!(J === p.Off || !le))
          if (Ue === m.Text) {
            let G;
            (J === p.Verbose || J === p.Compact) && (y.error && y.error.data ? G = `Error data: ${kt(y.error.data)}

` : y.result ? G = `Result: ${kt(y.result)}

` : y.error === void 0 && (G = `No result returned.

`)), le.log(`Sending response '${N} - (${y.id})'. Processing request took ${Date.now() - D}ms`, G);
          } else
            Zt("send-response", y);
      }
      s(Fr, "traceSendingResponse");
      function ll(y) {
        if (!(J === p.Off || !le))
          if (Ue === m.Text) {
            let N;
            (J === p.Verbose || J === p.Compact) && y.params && (N = `Params: ${kt(y.params)}

`), le.log(`Received request '${y.method} - (${y.id})'.`, N);
          } else
            Zt("receive-request", y);
      }
      s(ll, "traceReceivedRequest");
      function rn(y) {
        if (!(J === p.Off || !le || y.method === _.type.method))
          if (Ue === m.Text) {
            let N;
            (J === p.Verbose || J === p.Compact) && (y.params ? N = `Params: ${kt(y.params)}

` : N = `No parameters provided.

`), le.log(`Received notification '${y.method}'.`, N);
          } else
            Zt("receive-notification", y);
      }
      s(rn, "traceReceivedNotification");
      function cl(y, N) {
        if (!(J === p.Off || !le))
          if (Ue === m.Text) {
            let D;
            if ((J === p.Verbose || J === p.Compact) && (y.error && y.error.data ? D = `Error data: ${kt(y.error.data)}

` : y.result ? D = `Result: ${kt(y.result)}

` : y.error === void 0 && (D = `No result returned.

`)), N) {
              const G = y.error ? ` Request failed: ${y.error.message} (${y.error.code}).` : "";
              le.log(`Received response '${N.method} - (${y.id})' in ${Date.now() - N.timerStart}ms.${G}`, D);
            } else
              le.log(`Received response ${y.id} without active response promise.`, D);
          } else
            Zt("receive-response", y);
      }
      s(cl, "traceReceivedResponse");
      function Zt(y, N) {
        if (!le || J === p.Off)
          return;
        const D = {
          isLSPMessage: !0,
          type: y,
          message: N,
          timestamp: Date.now()
        };
        le.log(D);
      }
      s(Zt, "logLSPMessage");
      function gr() {
        if (ca())
          throw new w(v.Closed, "Connection is closed.");
        if (Jt())
          throw new w(v.Disposed, "Connection is disposed.");
      }
      s(gr, "throwIfClosedOrDisposed");
      function ul() {
        if (la())
          throw new w(v.AlreadyListening, "Connection is already listening");
      }
      s(ul, "throwIfListening");
      function fl() {
        if (!la())
          throw new Error("Call listen() first.");
      }
      s(fl, "throwIfNotListening");
      function h(y) {
        return y === void 0 ? null : y;
      }
      s(h, "undefinedToNull");
      function se(y) {
        if (y !== null)
          return y;
      }
      s(se, "nullToUndefined");
      function Ne(y) {
        return y != null && !Array.isArray(y) && typeof y == "object";
      }
      s(Ne, "isNamedParam");
      function H(y, N) {
        switch (y) {
          case n.ParameterStructures.auto:
            return Ne(N) ? se(N) : [h(N)];
          case n.ParameterStructures.byName:
            if (!Ne(N))
              throw new Error("Received parameters by name but param is not an object literal.");
            return se(N);
          case n.ParameterStructures.byPosition:
            return [h(N)];
          default:
            throw new Error(`Unknown parameter structure ${y.toString()}`);
        }
      }
      s(H, "computeSingleParam");
      function Pe(y, N) {
        let D;
        const G = y.numberOfParams;
        switch (G) {
          case 0:
            D = void 0;
            break;
          case 1:
            D = H(y.parameterStructures, N[0]);
            break;
          default:
            D = [];
            for (let _e = 0; _e < N.length && _e < G; _e++)
              D.push(h(N[_e]));
            if (N.length < G)
              for (let _e = N.length; _e < G; _e++)
                D.push(null);
            break;
        }
        return D;
      }
      s(Pe, "computeMessageParams");
      const pa = {
        sendNotification: /* @__PURE__ */ s((y, ...N) => {
          gr();
          let D, G;
          if (r.string(y)) {
            D = y;
            const me = N[0];
            let Me = 0, Ge = n.ParameterStructures.auto;
            n.ParameterStructures.is(me) && (Me = 1, Ge = me);
            let ne = N.length;
            const Oe = ne - Me;
            switch (Oe) {
              case 0:
                G = void 0;
                break;
              case 1:
                G = H(Ge, N[Me]);
                break;
              default:
                if (Ge === n.ParameterStructures.byName)
                  throw new Error(`Received ${Oe} parameters for 'by Name' notification parameter structure.`);
                G = N.slice(Me, ne).map((ce) => h(ce));
                break;
            }
          } else {
            const me = N;
            D = y.method, G = Pe(y, me);
          }
          const _e = {
            jsonrpc: j,
            method: D,
            params: G
          };
          return ol(_e), I.write(_e).catch((me) => {
            throw S.error("Sending notification failed."), me;
          });
        }, "sendNotification"),
        onNotification: /* @__PURE__ */ s((y, N) => {
          gr();
          let D;
          return r.func(y) ? U = y : N && (r.string(y) ? (D = y, Q.set(y, { type: void 0, handler: N })) : (D = y.method, Q.set(y.method, { type: y, handler: N }))), {
            dispose: /* @__PURE__ */ s(() => {
              D !== void 0 ? Q.delete(D) : U = void 0;
            }, "dispose")
          };
        }, "onNotification"),
        onProgress: /* @__PURE__ */ s((y, N, D) => {
          if (fe.has(N))
            throw new Error(`Progress handler for token ${N} already registered`);
          return fe.set(N, D), {
            dispose: /* @__PURE__ */ s(() => {
              fe.delete(N);
            }, "dispose")
          };
        }, "onProgress"),
        sendProgress: /* @__PURE__ */ s((y, N, D) => pa.sendNotification(u.type, { token: N, value: D }), "sendProgress"),
        onUnhandledProgress: Xt.event,
        sendRequest: /* @__PURE__ */ s((y, ...N) => {
          gr(), fl();
          let D, G, _e;
          if (r.string(y)) {
            D = y;
            const ne = N[0], Oe = N[N.length - 1];
            let ce = 0, Ke = n.ParameterStructures.auto;
            n.ParameterStructures.is(ne) && (ce = 1, Ke = ne);
            let rt = N.length;
            o.CancellationToken.is(Oe) && (rt = rt - 1, _e = Oe);
            const Qt = rt - ce;
            switch (Qt) {
              case 0:
                G = void 0;
                break;
              case 1:
                G = H(Ke, N[ce]);
                break;
              default:
                if (Ke === n.ParameterStructures.byName)
                  throw new Error(`Received ${Qt} parameters for 'by Name' request parameter structure.`);
                G = N.slice(ce, rt).map((PN) => h(PN));
                break;
            }
          } else {
            const ne = N;
            D = y.method, G = Pe(y, ne);
            const Oe = y.numberOfParams;
            _e = o.CancellationToken.is(ne[Oe]) ? ne[Oe] : void 0;
          }
          const me = O++;
          let Me;
          _e && (Me = _e.onCancellationRequested(() => {
            const ne = Te.sender.sendCancellation(pa, me);
            return ne === void 0 ? (S.log(`Received no promise from cancellation strategy when cancelling id ${me}`), Promise.resolve()) : ne.catch(() => {
              S.log(`Sending cancellation messages for id ${me} failed`);
            });
          }));
          const Ge = {
            jsonrpc: j,
            id: me,
            method: D,
            params: G
          };
          return sl(Ge), typeof Te.sender.enableCancellation == "function" && Te.sender.enableCancellation(Ge), new Promise(async (ne, Oe) => {
            const ce = /* @__PURE__ */ s((Qt) => {
              ne(Qt), Te.sender.cleanup(me), Me?.dispose();
            }, "resolveWithCleanup"), Ke = /* @__PURE__ */ s((Qt) => {
              Oe(Qt), Te.sender.cleanup(me), Me?.dispose();
            }, "rejectWithCleanup"), rt = { method: D, timerStart: Date.now(), resolve: ce, reject: Ke };
            try {
              await I.write(Ge), ye.set(me, rt);
            } catch (Qt) {
              throw S.error("Sending request failed."), rt.reject(new n.ResponseError(n.ErrorCodes.MessageWriteError, Qt.message ? Qt.message : "Unknown reason")), Qt;
            }
          });
        }, "sendRequest"),
        onRequest: /* @__PURE__ */ s((y, N) => {
          gr();
          let D = null;
          return d.is(y) ? (D = void 0, F = y) : r.string(y) ? (D = null, N !== void 0 && (D = y, te.set(y, { handler: N, type: void 0 }))) : N !== void 0 && (D = y.method, te.set(y.method, { type: y, handler: N })), {
            dispose: /* @__PURE__ */ s(() => {
              D !== null && (D !== void 0 ? te.delete(D) : F = void 0);
            }, "dispose")
          };
        }, "onRequest"),
        hasPendingResponse: /* @__PURE__ */ s(() => ye.size > 0, "hasPendingResponse"),
        trace: /* @__PURE__ */ s(async (y, N, D) => {
          let G = !1, _e = m.Text;
          D !== void 0 && (r.boolean(D) ? G = D : (G = D.sendNotification || !1, _e = D.traceFormat || m.Text)), J = y, Ue = _e, J === p.Off ? le = void 0 : le = N, G && !ca() && !Jt() && await pa.sendNotification(T.type, { value: p.toString(y) });
        }, "trace"),
        onError: ve.event,
        onClose: x.event,
        onUnhandledNotification: ze.event,
        onDispose: Nt.event,
        end: /* @__PURE__ */ s(() => {
          I.end();
        }, "end"),
        dispose: /* @__PURE__ */ s(() => {
          if (Jt())
            return;
          He = oe.Disposed, Nt.fire(void 0);
          const y = new n.ResponseError(n.ErrorCodes.PendingResponseRejected, "Pending response rejected since connection got disposed");
          for (const N of ye.values())
            N.reject(y);
          ye = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Set(), pe = new a.LinkedMap(), r.func(I.dispose) && I.dispose(), r.func(R.dispose) && R.dispose();
        }, "dispose"),
        listen: /* @__PURE__ */ s(() => {
          gr(), ul(), He = oe.Listening, R.listen(Lc);
        }, "listen"),
        inspect: /* @__PURE__ */ s(() => {
          (0, e.default)().console.log("inspect");
        }, "inspect")
      };
      return pa.onNotification(_.type, (y) => {
        if (J === p.Off || !le)
          return;
        const N = J === p.Verbose || J === p.Compact;
        le.log(y.message, N ? y.verbose : void 0);
      }), pa.onNotification(u.type, (y) => {
        const N = fe.get(y.token);
        N ? N(y.value) : Xt.fire(y);
      }), pa;
    }
    s(tt, "createMessageConnection"), t.createMessageConnection = tt;
  }
}), zp = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/common/api.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ProgressType = t.ProgressToken = t.createMessageConnection = t.NullLogger = t.ConnectionOptions = t.ConnectionStrategy = t.AbstractMessageBuffer = t.WriteableStreamMessageWriter = t.AbstractMessageWriter = t.MessageWriter = t.ReadableStreamMessageReader = t.AbstractMessageReader = t.MessageReader = t.SharedArrayReceiverStrategy = t.SharedArraySenderStrategy = t.CancellationToken = t.CancellationTokenSource = t.Emitter = t.Event = t.Disposable = t.LRUCache = t.Touch = t.LinkedMap = t.ParameterStructures = t.NotificationType9 = t.NotificationType8 = t.NotificationType7 = t.NotificationType6 = t.NotificationType5 = t.NotificationType4 = t.NotificationType3 = t.NotificationType2 = t.NotificationType1 = t.NotificationType0 = t.NotificationType = t.ErrorCodes = t.ResponseError = t.RequestType9 = t.RequestType8 = t.RequestType7 = t.RequestType6 = t.RequestType5 = t.RequestType4 = t.RequestType3 = t.RequestType2 = t.RequestType1 = t.RequestType0 = t.RequestType = t.Message = t.RAL = void 0, t.MessageStrategy = t.CancellationStrategy = t.CancellationSenderStrategy = t.CancellationReceiverStrategy = t.ConnectionError = t.ConnectionErrors = t.LogTraceNotification = t.SetTraceNotification = t.TraceFormat = t.TraceValues = t.Trace = void 0;
    var e = hT();
    Object.defineProperty(t, "Message", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.Message;
    }, "get") }), Object.defineProperty(t, "RequestType", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.RequestType;
    }, "get") }), Object.defineProperty(t, "RequestType0", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.RequestType0;
    }, "get") }), Object.defineProperty(t, "RequestType1", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.RequestType1;
    }, "get") }), Object.defineProperty(t, "RequestType2", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.RequestType2;
    }, "get") }), Object.defineProperty(t, "RequestType3", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.RequestType3;
    }, "get") }), Object.defineProperty(t, "RequestType4", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.RequestType4;
    }, "get") }), Object.defineProperty(t, "RequestType5", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.RequestType5;
    }, "get") }), Object.defineProperty(t, "RequestType6", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.RequestType6;
    }, "get") }), Object.defineProperty(t, "RequestType7", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.RequestType7;
    }, "get") }), Object.defineProperty(t, "RequestType8", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.RequestType8;
    }, "get") }), Object.defineProperty(t, "RequestType9", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.RequestType9;
    }, "get") }), Object.defineProperty(t, "ResponseError", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.ResponseError;
    }, "get") }), Object.defineProperty(t, "ErrorCodes", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.ErrorCodes;
    }, "get") }), Object.defineProperty(t, "NotificationType", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.NotificationType;
    }, "get") }), Object.defineProperty(t, "NotificationType0", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.NotificationType0;
    }, "get") }), Object.defineProperty(t, "NotificationType1", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.NotificationType1;
    }, "get") }), Object.defineProperty(t, "NotificationType2", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.NotificationType2;
    }, "get") }), Object.defineProperty(t, "NotificationType3", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.NotificationType3;
    }, "get") }), Object.defineProperty(t, "NotificationType4", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.NotificationType4;
    }, "get") }), Object.defineProperty(t, "NotificationType5", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.NotificationType5;
    }, "get") }), Object.defineProperty(t, "NotificationType6", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.NotificationType6;
    }, "get") }), Object.defineProperty(t, "NotificationType7", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.NotificationType7;
    }, "get") }), Object.defineProperty(t, "NotificationType8", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.NotificationType8;
    }, "get") }), Object.defineProperty(t, "NotificationType9", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.NotificationType9;
    }, "get") }), Object.defineProperty(t, "ParameterStructures", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return e.ParameterStructures;
    }, "get") });
    var r = mT();
    Object.defineProperty(t, "LinkedMap", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return r.LinkedMap;
    }, "get") }), Object.defineProperty(t, "LRUCache", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return r.LRUCache;
    }, "get") }), Object.defineProperty(t, "Touch", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return r.Touch;
    }, "get") });
    var n = FN();
    Object.defineProperty(t, "Disposable", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return n.Disposable;
    }, "get") });
    var a = Fo();
    Object.defineProperty(t, "Event", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return a.Event;
    }, "get") }), Object.defineProperty(t, "Emitter", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return a.Emitter;
    }, "get") });
    var i = ff();
    Object.defineProperty(t, "CancellationTokenSource", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return i.CancellationTokenSource;
    }, "get") }), Object.defineProperty(t, "CancellationToken", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return i.CancellationToken;
    }, "get") });
    var o = GN();
    Object.defineProperty(t, "SharedArraySenderStrategy", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return o.SharedArraySenderStrategy;
    }, "get") }), Object.defineProperty(t, "SharedArrayReceiverStrategy", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return o.SharedArrayReceiverStrategy;
    }, "get") });
    var c = jN();
    Object.defineProperty(t, "MessageReader", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return c.MessageReader;
    }, "get") }), Object.defineProperty(t, "AbstractMessageReader", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return c.AbstractMessageReader;
    }, "get") }), Object.defineProperty(t, "ReadableStreamMessageReader", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return c.ReadableStreamMessageReader;
    }, "get") });
    var l = UN();
    Object.defineProperty(t, "MessageWriter", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return l.MessageWriter;
    }, "get") }), Object.defineProperty(t, "AbstractMessageWriter", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return l.AbstractMessageWriter;
    }, "get") }), Object.defineProperty(t, "WriteableStreamMessageWriter", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return l.WriteableStreamMessageWriter;
    }, "get") });
    var u = zN();
    Object.defineProperty(t, "AbstractMessageBuffer", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return u.AbstractMessageBuffer;
    }, "get") });
    var f = BN();
    Object.defineProperty(t, "ConnectionStrategy", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.ConnectionStrategy;
    }, "get") }), Object.defineProperty(t, "ConnectionOptions", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.ConnectionOptions;
    }, "get") }), Object.defineProperty(t, "NullLogger", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.NullLogger;
    }, "get") }), Object.defineProperty(t, "createMessageConnection", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.createMessageConnection;
    }, "get") }), Object.defineProperty(t, "ProgressToken", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.ProgressToken;
    }, "get") }), Object.defineProperty(t, "ProgressType", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.ProgressType;
    }, "get") }), Object.defineProperty(t, "Trace", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.Trace;
    }, "get") }), Object.defineProperty(t, "TraceValues", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.TraceValues;
    }, "get") }), Object.defineProperty(t, "TraceFormat", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.TraceFormat;
    }, "get") }), Object.defineProperty(t, "SetTraceNotification", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.SetTraceNotification;
    }, "get") }), Object.defineProperty(t, "LogTraceNotification", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.LogTraceNotification;
    }, "get") }), Object.defineProperty(t, "ConnectionErrors", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.ConnectionErrors;
    }, "get") }), Object.defineProperty(t, "ConnectionError", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.ConnectionError;
    }, "get") }), Object.defineProperty(t, "CancellationReceiverStrategy", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.CancellationReceiverStrategy;
    }, "get") }), Object.defineProperty(t, "CancellationSenderStrategy", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.CancellationSenderStrategy;
    }, "get") }), Object.defineProperty(t, "CancellationStrategy", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.CancellationStrategy;
    }, "get") }), Object.defineProperty(t, "MessageStrategy", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.MessageStrategy;
    }, "get") });
    var d = jn();
    t.RAL = d.default;
  }
}), KN = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/browser/ril.js"(t) {
    var l, u, f;
    Object.defineProperty(t, "__esModule", { value: !0 });
    var e = zp(), r = (l = class extends e.AbstractMessageBuffer {
      constructor(p = "utf-8") {
        super(p), this.asciiDecoder = new TextDecoder("ascii");
      }
      emptyBuffer() {
        return l.emptyBuffer;
      }
      fromString(p, g) {
        return new TextEncoder().encode(p);
      }
      toString(p, g) {
        return g === "ascii" ? this.asciiDecoder.decode(p) : new TextDecoder(g).decode(p);
      }
      asNative(p, g) {
        return g === void 0 ? p : p.slice(0, g);
      }
      allocNative(p) {
        return new Uint8Array(p);
      }
    }, s(l, "MessageBuffer"), l);
    r.emptyBuffer = new Uint8Array(0);
    var n = (u = class {
      constructor(p) {
        this.socket = p, this._onData = new e.Emitter(), this._messageListener = (g) => {
          g.data.arrayBuffer().then((T) => {
            this._onData.fire(new Uint8Array(T));
          }, () => {
            (0, e.RAL)().console.error("Converting blob to array buffer failed.");
          });
        }, this.socket.addEventListener("message", this._messageListener);
      }
      onClose(p) {
        return this.socket.addEventListener("close", p), e.Disposable.create(() => this.socket.removeEventListener("close", p));
      }
      onError(p) {
        return this.socket.addEventListener("error", p), e.Disposable.create(() => this.socket.removeEventListener("error", p));
      }
      onEnd(p) {
        return this.socket.addEventListener("end", p), e.Disposable.create(() => this.socket.removeEventListener("end", p));
      }
      onData(p) {
        return this._onData.event(p);
      }
    }, s(u, "ReadableStreamWrapper"), u), a = (f = class {
      constructor(p) {
        this.socket = p;
      }
      onClose(p) {
        return this.socket.addEventListener("close", p), e.Disposable.create(() => this.socket.removeEventListener("close", p));
      }
      onError(p) {
        return this.socket.addEventListener("error", p), e.Disposable.create(() => this.socket.removeEventListener("error", p));
      }
      onEnd(p) {
        return this.socket.addEventListener("end", p), e.Disposable.create(() => this.socket.removeEventListener("end", p));
      }
      write(p, g) {
        if (typeof p == "string") {
          if (g !== void 0 && g !== "utf-8")
            throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${g}`);
          this.socket.send(p);
        } else
          this.socket.send(p);
        return Promise.resolve();
      }
      end() {
        this.socket.close();
      }
    }, s(f, "WritableStreamWrapper"), f), i = new TextEncoder(), o = Object.freeze({
      messageBuffer: Object.freeze({
        create: /* @__PURE__ */ s((d) => new r(d), "create")
      }),
      applicationJson: Object.freeze({
        encoder: Object.freeze({
          name: "application/json",
          encode: /* @__PURE__ */ s((d, p) => {
            if (p.charset !== "utf-8")
              throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${p.charset}`);
            return Promise.resolve(i.encode(JSON.stringify(d, void 0, 0)));
          }, "encode")
        }),
        decoder: Object.freeze({
          name: "application/json",
          decode: /* @__PURE__ */ s((d, p) => {
            if (!(d instanceof Uint8Array))
              throw new Error("In a Browser environments only Uint8Arrays are supported.");
            return Promise.resolve(JSON.parse(new TextDecoder(p.charset).decode(d)));
          }, "decode")
        })
      }),
      stream: Object.freeze({
        asReadableStream: /* @__PURE__ */ s((d) => new n(d), "asReadableStream"),
        asWritableStream: /* @__PURE__ */ s((d) => new a(d), "asWritableStream")
      }),
      console,
      timer: Object.freeze({
        setTimeout(d, p, ...g) {
          const m = setTimeout(d, p, ...g);
          return { dispose: /* @__PURE__ */ s(() => clearTimeout(m), "dispose") };
        },
        setImmediate(d, ...p) {
          const g = setTimeout(d, 0, ...p);
          return { dispose: /* @__PURE__ */ s(() => clearTimeout(g), "dispose") };
        },
        setInterval(d, p, ...g) {
          const m = setInterval(d, p, ...g);
          return { dispose: /* @__PURE__ */ s(() => clearInterval(m), "dispose") };
        }
      })
    });
    function c() {
      return o;
    }
    s(c, "RIL"), (function(d) {
      function p() {
        e.RAL.install(o);
      }
      s(p, "install"), d.install = p;
    })(c || (c = {})), t.default = c;
  }
}), Go = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/lib/browser/main.js"(t) {
    var l, u;
    var e = t && t.__createBinding || (Object.create ? (function(f, d, p, g) {
      g === void 0 && (g = p);
      var m = Object.getOwnPropertyDescriptor(d, p);
      (!m || ("get" in m ? !d.__esModule : m.writable || m.configurable)) && (m = { enumerable: !0, get: /* @__PURE__ */ s(function() {
        return d[p];
      }, "get") }), Object.defineProperty(f, g, m);
    }) : (function(f, d, p, g) {
      g === void 0 && (g = p), f[g] = d[p];
    })), r = t && t.__exportStar || function(f, d) {
      for (var p in f) p !== "default" && !Object.prototype.hasOwnProperty.call(d, p) && e(d, f, p);
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.createMessageConnection = t.BrowserMessageWriter = t.BrowserMessageReader = void 0;
    var n = KN();
    n.default.install();
    var a = zp();
    r(zp(), t);
    var i = (l = class extends a.AbstractMessageReader {
      constructor(d) {
        super(), this._onData = new a.Emitter(), this._messageListener = (p) => {
          this._onData.fire(p.data);
        }, d.addEventListener("error", (p) => this.fireError(p)), d.onmessage = this._messageListener;
      }
      listen(d) {
        return this._onData.event(d);
      }
    }, s(l, "BrowserMessageReader"), l);
    t.BrowserMessageReader = i;
    var o = (u = class extends a.AbstractMessageWriter {
      constructor(d) {
        super(), this.port = d, this.errorCount = 0, d.addEventListener("error", (p) => this.fireError(p));
      }
      write(d) {
        try {
          return this.port.postMessage(d), Promise.resolve();
        } catch (p) {
          return this.handleError(p, d), Promise.reject(p);
        }
      }
      handleError(d, p) {
        this.errorCount++, this.fireError(d, p, this.errorCount);
      }
      end() {
      }
    }, s(u, "BrowserMessageWriter"), u);
    t.BrowserMessageWriter = o;
    function c(f, d, p, g) {
      return p === void 0 && (p = a.NullLogger), a.ConnectionStrategy.is(g) && (g = { connectionStrategy: g }), (0, a.createMessageConnection)(f, d, p, g);
    }
    s(c, "createMessageConnection"), t.createMessageConnection = c;
  }
}), Ey = Y({
  "../../node_modules/.pnpm/vscode-jsonrpc@8.2.0/node_modules/vscode-jsonrpc/browser.js"(t, e) {
    e.exports = Go();
  }
}), De = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/messages.js"(t) {
    var l, u, f, d, p;
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ProtocolNotificationType = t.ProtocolNotificationType0 = t.ProtocolRequestType = t.ProtocolRequestType0 = t.RegistrationType = t.MessageDirection = void 0;
    var e = Go(), r;
    (function(g) {
      g.clientToServer = "clientToServer", g.serverToClient = "serverToClient", g.both = "both";
    })(r || (t.MessageDirection = r = {}));
    var n = (l = class {
      constructor(m) {
        this.method = m;
      }
    }, s(l, "RegistrationType"), l);
    t.RegistrationType = n;
    var a = (u = class extends e.RequestType0 {
      constructor(m) {
        super(m);
      }
    }, s(u, "ProtocolRequestType0"), u);
    t.ProtocolRequestType0 = a;
    var i = (f = class extends e.RequestType {
      constructor(m) {
        super(m, e.ParameterStructures.byName);
      }
    }, s(f, "ProtocolRequestType"), f);
    t.ProtocolRequestType = i;
    var o = (d = class extends e.NotificationType0 {
      constructor(m) {
        super(m);
      }
    }, s(d, "ProtocolNotificationType0"), d);
    t.ProtocolNotificationType0 = o;
    var c = (p = class extends e.NotificationType {
      constructor(m) {
        super(m, e.ParameterStructures.byName);
      }
    }, s(p, "ProtocolNotificationType"), p);
    t.ProtocolNotificationType = c;
  }
}), jh = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/utils/is.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.objectLiteral = t.typedArray = t.stringArray = t.array = t.func = t.error = t.number = t.string = t.boolean = void 0;
    function e(f) {
      return f === !0 || f === !1;
    }
    s(e, "boolean"), t.boolean = e;
    function r(f) {
      return typeof f == "string" || f instanceof String;
    }
    s(r, "string"), t.string = r;
    function n(f) {
      return typeof f == "number" || f instanceof Number;
    }
    s(n, "number"), t.number = n;
    function a(f) {
      return f instanceof Error;
    }
    s(a, "error"), t.error = a;
    function i(f) {
      return typeof f == "function";
    }
    s(i, "func"), t.func = i;
    function o(f) {
      return Array.isArray(f);
    }
    s(o, "array"), t.array = o;
    function c(f) {
      return o(f) && f.every((d) => r(d));
    }
    s(c, "stringArray"), t.stringArray = c;
    function l(f, d) {
      return Array.isArray(f) && f.every(d);
    }
    s(l, "typedArray"), t.typedArray = l;
    function u(f) {
      return f !== null && typeof f == "object";
    }
    s(u, "objectLiteral"), t.objectLiteral = u;
  }
}), qN = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.implementation.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ImplementationRequest = void 0;
    var e = De(), r;
    (function(n) {
      n.method = "textDocument/implementation", n.messageDirection = e.MessageDirection.clientToServer, n.type = new e.ProtocolRequestType(n.method);
    })(r || (t.ImplementationRequest = r = {}));
  }
}), WN = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeDefinition.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.TypeDefinitionRequest = void 0;
    var e = De(), r;
    (function(n) {
      n.method = "textDocument/typeDefinition", n.messageDirection = e.MessageDirection.clientToServer, n.type = new e.ProtocolRequestType(n.method);
    })(r || (t.TypeDefinitionRequest = r = {}));
  }
}), VN = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.workspaceFolder.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.DidChangeWorkspaceFoldersNotification = t.WorkspaceFoldersRequest = void 0;
    var e = De(), r;
    (function(a) {
      a.method = "workspace/workspaceFolders", a.messageDirection = e.MessageDirection.serverToClient, a.type = new e.ProtocolRequestType0(a.method);
    })(r || (t.WorkspaceFoldersRequest = r = {}));
    var n;
    (function(a) {
      a.method = "workspace/didChangeWorkspaceFolders", a.messageDirection = e.MessageDirection.clientToServer, a.type = new e.ProtocolNotificationType(a.method);
    })(n || (t.DidChangeWorkspaceFoldersNotification = n = {}));
  }
}), HN = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.configuration.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ConfigurationRequest = void 0;
    var e = De(), r;
    (function(n) {
      n.method = "workspace/configuration", n.messageDirection = e.MessageDirection.serverToClient, n.type = new e.ProtocolRequestType(n.method);
    })(r || (t.ConfigurationRequest = r = {}));
  }
}), YN = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.colorProvider.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ColorPresentationRequest = t.DocumentColorRequest = void 0;
    var e = De(), r;
    (function(a) {
      a.method = "textDocument/documentColor", a.messageDirection = e.MessageDirection.clientToServer, a.type = new e.ProtocolRequestType(a.method);
    })(r || (t.DocumentColorRequest = r = {}));
    var n;
    (function(a) {
      a.method = "textDocument/colorPresentation", a.messageDirection = e.MessageDirection.clientToServer, a.type = new e.ProtocolRequestType(a.method);
    })(n || (t.ColorPresentationRequest = n = {}));
  }
}), XN = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.foldingRange.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.FoldingRangeRefreshRequest = t.FoldingRangeRequest = void 0;
    var e = De(), r;
    (function(a) {
      a.method = "textDocument/foldingRange", a.messageDirection = e.MessageDirection.clientToServer, a.type = new e.ProtocolRequestType(a.method);
    })(r || (t.FoldingRangeRequest = r = {}));
    var n;
    (function(a) {
      a.method = "workspace/foldingRange/refresh", a.messageDirection = e.MessageDirection.serverToClient, a.type = new e.ProtocolRequestType0(a.method);
    })(n || (t.FoldingRangeRefreshRequest = n = {}));
  }
}), JN = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.declaration.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.DeclarationRequest = void 0;
    var e = De(), r;
    (function(n) {
      n.method = "textDocument/declaration", n.messageDirection = e.MessageDirection.clientToServer, n.type = new e.ProtocolRequestType(n.method);
    })(r || (t.DeclarationRequest = r = {}));
  }
}), ZN = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.selectionRange.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.SelectionRangeRequest = void 0;
    var e = De(), r;
    (function(n) {
      n.method = "textDocument/selectionRange", n.messageDirection = e.MessageDirection.clientToServer, n.type = new e.ProtocolRequestType(n.method);
    })(r || (t.SelectionRangeRequest = r = {}));
  }
}), QN = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.progress.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.WorkDoneProgressCancelNotification = t.WorkDoneProgressCreateRequest = t.WorkDoneProgress = void 0;
    var e = Go(), r = De(), n;
    (function(o) {
      o.type = new e.ProgressType();
      function c(l) {
        return l === o.type;
      }
      s(c, "is"), o.is = c;
    })(n || (t.WorkDoneProgress = n = {}));
    var a;
    (function(o) {
      o.method = "window/workDoneProgress/create", o.messageDirection = r.MessageDirection.serverToClient, o.type = new r.ProtocolRequestType(o.method);
    })(a || (t.WorkDoneProgressCreateRequest = a = {}));
    var i;
    (function(o) {
      o.method = "window/workDoneProgress/cancel", o.messageDirection = r.MessageDirection.clientToServer, o.type = new r.ProtocolNotificationType(o.method);
    })(i || (t.WorkDoneProgressCancelNotification = i = {}));
  }
}), ek = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.callHierarchy.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.CallHierarchyOutgoingCallsRequest = t.CallHierarchyIncomingCallsRequest = t.CallHierarchyPrepareRequest = void 0;
    var e = De(), r;
    (function(i) {
      i.method = "textDocument/prepareCallHierarchy", i.messageDirection = e.MessageDirection.clientToServer, i.type = new e.ProtocolRequestType(i.method);
    })(r || (t.CallHierarchyPrepareRequest = r = {}));
    var n;
    (function(i) {
      i.method = "callHierarchy/incomingCalls", i.messageDirection = e.MessageDirection.clientToServer, i.type = new e.ProtocolRequestType(i.method);
    })(n || (t.CallHierarchyIncomingCallsRequest = n = {}));
    var a;
    (function(i) {
      i.method = "callHierarchy/outgoingCalls", i.messageDirection = e.MessageDirection.clientToServer, i.type = new e.ProtocolRequestType(i.method);
    })(a || (t.CallHierarchyOutgoingCallsRequest = a = {}));
  }
}), tk = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.semanticTokens.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.SemanticTokensRefreshRequest = t.SemanticTokensRangeRequest = t.SemanticTokensDeltaRequest = t.SemanticTokensRequest = t.SemanticTokensRegistrationType = t.TokenFormat = void 0;
    var e = De(), r;
    (function(l) {
      l.Relative = "relative";
    })(r || (t.TokenFormat = r = {}));
    var n;
    (function(l) {
      l.method = "textDocument/semanticTokens", l.type = new e.RegistrationType(l.method);
    })(n || (t.SemanticTokensRegistrationType = n = {}));
    var a;
    (function(l) {
      l.method = "textDocument/semanticTokens/full", l.messageDirection = e.MessageDirection.clientToServer, l.type = new e.ProtocolRequestType(l.method), l.registrationMethod = n.method;
    })(a || (t.SemanticTokensRequest = a = {}));
    var i;
    (function(l) {
      l.method = "textDocument/semanticTokens/full/delta", l.messageDirection = e.MessageDirection.clientToServer, l.type = new e.ProtocolRequestType(l.method), l.registrationMethod = n.method;
    })(i || (t.SemanticTokensDeltaRequest = i = {}));
    var o;
    (function(l) {
      l.method = "textDocument/semanticTokens/range", l.messageDirection = e.MessageDirection.clientToServer, l.type = new e.ProtocolRequestType(l.method), l.registrationMethod = n.method;
    })(o || (t.SemanticTokensRangeRequest = o = {}));
    var c;
    (function(l) {
      l.method = "workspace/semanticTokens/refresh", l.messageDirection = e.MessageDirection.serverToClient, l.type = new e.ProtocolRequestType0(l.method);
    })(c || (t.SemanticTokensRefreshRequest = c = {}));
  }
}), rk = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.showDocument.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.ShowDocumentRequest = void 0;
    var e = De(), r;
    (function(n) {
      n.method = "window/showDocument", n.messageDirection = e.MessageDirection.serverToClient, n.type = new e.ProtocolRequestType(n.method);
    })(r || (t.ShowDocumentRequest = r = {}));
  }
}), nk = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.linkedEditingRange.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.LinkedEditingRangeRequest = void 0;
    var e = De(), r;
    (function(n) {
      n.method = "textDocument/linkedEditingRange", n.messageDirection = e.MessageDirection.clientToServer, n.type = new e.ProtocolRequestType(n.method);
    })(r || (t.LinkedEditingRangeRequest = r = {}));
  }
}), ak = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.fileOperations.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.WillDeleteFilesRequest = t.DidDeleteFilesNotification = t.DidRenameFilesNotification = t.WillRenameFilesRequest = t.DidCreateFilesNotification = t.WillCreateFilesRequest = t.FileOperationPatternKind = void 0;
    var e = De(), r;
    (function(u) {
      u.file = "file", u.folder = "folder";
    })(r || (t.FileOperationPatternKind = r = {}));
    var n;
    (function(u) {
      u.method = "workspace/willCreateFiles", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
    })(n || (t.WillCreateFilesRequest = n = {}));
    var a;
    (function(u) {
      u.method = "workspace/didCreateFiles", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolNotificationType(u.method);
    })(a || (t.DidCreateFilesNotification = a = {}));
    var i;
    (function(u) {
      u.method = "workspace/willRenameFiles", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
    })(i || (t.WillRenameFilesRequest = i = {}));
    var o;
    (function(u) {
      u.method = "workspace/didRenameFiles", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolNotificationType(u.method);
    })(o || (t.DidRenameFilesNotification = o = {}));
    var c;
    (function(u) {
      u.method = "workspace/didDeleteFiles", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolNotificationType(u.method);
    })(c || (t.DidDeleteFilesNotification = c = {}));
    var l;
    (function(u) {
      u.method = "workspace/willDeleteFiles", u.messageDirection = e.MessageDirection.clientToServer, u.type = new e.ProtocolRequestType(u.method);
    })(l || (t.WillDeleteFilesRequest = l = {}));
  }
}), ik = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.moniker.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MonikerRequest = t.MonikerKind = t.UniquenessLevel = void 0;
    var e = De(), r;
    (function(i) {
      i.document = "document", i.project = "project", i.group = "group", i.scheme = "scheme", i.global = "global";
    })(r || (t.UniquenessLevel = r = {}));
    var n;
    (function(i) {
      i.$import = "import", i.$export = "export", i.local = "local";
    })(n || (t.MonikerKind = n = {}));
    var a;
    (function(i) {
      i.method = "textDocument/moniker", i.messageDirection = e.MessageDirection.clientToServer, i.type = new e.ProtocolRequestType(i.method);
    })(a || (t.MonikerRequest = a = {}));
  }
}), sk = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.typeHierarchy.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.TypeHierarchySubtypesRequest = t.TypeHierarchySupertypesRequest = t.TypeHierarchyPrepareRequest = void 0;
    var e = De(), r;
    (function(i) {
      i.method = "textDocument/prepareTypeHierarchy", i.messageDirection = e.MessageDirection.clientToServer, i.type = new e.ProtocolRequestType(i.method);
    })(r || (t.TypeHierarchyPrepareRequest = r = {}));
    var n;
    (function(i) {
      i.method = "typeHierarchy/supertypes", i.messageDirection = e.MessageDirection.clientToServer, i.type = new e.ProtocolRequestType(i.method);
    })(n || (t.TypeHierarchySupertypesRequest = n = {}));
    var a;
    (function(i) {
      i.method = "typeHierarchy/subtypes", i.messageDirection = e.MessageDirection.clientToServer, i.type = new e.ProtocolRequestType(i.method);
    })(a || (t.TypeHierarchySubtypesRequest = a = {}));
  }
}), ok = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineValue.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.InlineValueRefreshRequest = t.InlineValueRequest = void 0;
    var e = De(), r;
    (function(a) {
      a.method = "textDocument/inlineValue", a.messageDirection = e.MessageDirection.clientToServer, a.type = new e.ProtocolRequestType(a.method);
    })(r || (t.InlineValueRequest = r = {}));
    var n;
    (function(a) {
      a.method = "workspace/inlineValue/refresh", a.messageDirection = e.MessageDirection.serverToClient, a.type = new e.ProtocolRequestType0(a.method);
    })(n || (t.InlineValueRefreshRequest = n = {}));
  }
}), lk = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlayHint.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.InlayHintRefreshRequest = t.InlayHintResolveRequest = t.InlayHintRequest = void 0;
    var e = De(), r;
    (function(i) {
      i.method = "textDocument/inlayHint", i.messageDirection = e.MessageDirection.clientToServer, i.type = new e.ProtocolRequestType(i.method);
    })(r || (t.InlayHintRequest = r = {}));
    var n;
    (function(i) {
      i.method = "inlayHint/resolve", i.messageDirection = e.MessageDirection.clientToServer, i.type = new e.ProtocolRequestType(i.method);
    })(n || (t.InlayHintResolveRequest = n = {}));
    var a;
    (function(i) {
      i.method = "workspace/inlayHint/refresh", i.messageDirection = e.MessageDirection.serverToClient, i.type = new e.ProtocolRequestType0(i.method);
    })(a || (t.InlayHintRefreshRequest = a = {}));
  }
}), ck = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.diagnostic.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.DiagnosticRefreshRequest = t.WorkspaceDiagnosticRequest = t.DocumentDiagnosticRequest = t.DocumentDiagnosticReportKind = t.DiagnosticServerCancellationData = void 0;
    var e = Go(), r = jh(), n = De(), a;
    (function(u) {
      function f(d) {
        const p = d;
        return p && r.boolean(p.retriggerRequest);
      }
      s(f, "is"), u.is = f;
    })(a || (t.DiagnosticServerCancellationData = a = {}));
    var i;
    (function(u) {
      u.Full = "full", u.Unchanged = "unchanged";
    })(i || (t.DocumentDiagnosticReportKind = i = {}));
    var o;
    (function(u) {
      u.method = "textDocument/diagnostic", u.messageDirection = n.MessageDirection.clientToServer, u.type = new n.ProtocolRequestType(u.method), u.partialResult = new e.ProgressType();
    })(o || (t.DocumentDiagnosticRequest = o = {}));
    var c;
    (function(u) {
      u.method = "workspace/diagnostic", u.messageDirection = n.MessageDirection.clientToServer, u.type = new n.ProtocolRequestType(u.method), u.partialResult = new e.ProgressType();
    })(c || (t.WorkspaceDiagnosticRequest = c = {}));
    var l;
    (function(u) {
      u.method = "workspace/diagnostic/refresh", u.messageDirection = n.MessageDirection.serverToClient, u.type = new n.ProtocolRequestType0(u.method);
    })(l || (t.DiagnosticRefreshRequest = l = {}));
  }
}), uk = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.notebook.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.DidCloseNotebookDocumentNotification = t.DidSaveNotebookDocumentNotification = t.DidChangeNotebookDocumentNotification = t.NotebookCellArrayChange = t.DidOpenNotebookDocumentNotification = t.NotebookDocumentSyncRegistrationType = t.NotebookDocument = t.NotebookCell = t.ExecutionSummary = t.NotebookCellKind = void 0;
    var e = (pc(), Gh(uf)), r = jh(), n = De(), a;
    (function(m) {
      m.Markup = 1, m.Code = 2;
      function T(_) {
        return _ === 1 || _ === 2;
      }
      s(T, "is"), m.is = T;
    })(a || (t.NotebookCellKind = a = {}));
    var i;
    (function(m) {
      function T(w, C) {
        const k = { executionOrder: w };
        return (C === !0 || C === !1) && (k.success = C), k;
      }
      s(T, "create"), m.create = T;
      function _(w) {
        const C = w;
        return r.objectLiteral(C) && e.uinteger.is(C.executionOrder) && (C.success === void 0 || r.boolean(C.success));
      }
      s(_, "is"), m.is = _;
      function v(w, C) {
        return w === C ? !0 : w == null || C === null || C === void 0 ? !1 : w.executionOrder === C.executionOrder && w.success === C.success;
      }
      s(v, "equals"), m.equals = v;
    })(i || (t.ExecutionSummary = i = {}));
    var o;
    (function(m) {
      function T(C, k) {
        return { kind: C, document: k };
      }
      s(T, "create"), m.create = T;
      function _(C) {
        const k = C;
        return r.objectLiteral(k) && a.is(k.kind) && e.DocumentUri.is(k.document) && (k.metadata === void 0 || r.objectLiteral(k.metadata));
      }
      s(_, "is"), m.is = _;
      function v(C, k) {
        const B = /* @__PURE__ */ new Set();
        return C.document !== k.document && B.add("document"), C.kind !== k.kind && B.add("kind"), C.executionSummary !== k.executionSummary && B.add("executionSummary"), (C.metadata !== void 0 || k.metadata !== void 0) && !w(C.metadata, k.metadata) && B.add("metadata"), (C.executionSummary !== void 0 || k.executionSummary !== void 0) && !i.equals(C.executionSummary, k.executionSummary) && B.add("executionSummary"), B;
      }
      s(v, "diff"), m.diff = v;
      function w(C, k) {
        if (C === k)
          return !0;
        if (C == null || k === null || k === void 0 || typeof C != typeof k || typeof C != "object")
          return !1;
        const B = Array.isArray(C), re = Array.isArray(k);
        if (B !== re)
          return !1;
        if (B && re) {
          if (C.length !== k.length)
            return !1;
          for (let X = 0; X < C.length; X++)
            if (!w(C[X], k[X]))
              return !1;
        }
        if (r.objectLiteral(C) && r.objectLiteral(k)) {
          const X = Object.keys(C), ge = Object.keys(k);
          if (X.length !== ge.length || (X.sort(), ge.sort(), !w(X, ge)))
            return !1;
          for (let Ee = 0; Ee < X.length; Ee++) {
            const we = X[Ee];
            if (!w(C[we], k[we]))
              return !1;
          }
        }
        return !0;
      }
      s(w, "equalsMetadata");
    })(o || (t.NotebookCell = o = {}));
    var c;
    (function(m) {
      function T(v, w, C, k) {
        return { uri: v, notebookType: w, version: C, cells: k };
      }
      s(T, "create"), m.create = T;
      function _(v) {
        const w = v;
        return r.objectLiteral(w) && r.string(w.uri) && e.integer.is(w.version) && r.typedArray(w.cells, o.is);
      }
      s(_, "is"), m.is = _;
    })(c || (t.NotebookDocument = c = {}));
    var l;
    (function(m) {
      m.method = "notebookDocument/sync", m.messageDirection = n.MessageDirection.clientToServer, m.type = new n.RegistrationType(m.method);
    })(l || (t.NotebookDocumentSyncRegistrationType = l = {}));
    var u;
    (function(m) {
      m.method = "notebookDocument/didOpen", m.messageDirection = n.MessageDirection.clientToServer, m.type = new n.ProtocolNotificationType(m.method), m.registrationMethod = l.method;
    })(u || (t.DidOpenNotebookDocumentNotification = u = {}));
    var f;
    (function(m) {
      function T(v) {
        const w = v;
        return r.objectLiteral(w) && e.uinteger.is(w.start) && e.uinteger.is(w.deleteCount) && (w.cells === void 0 || r.typedArray(w.cells, o.is));
      }
      s(T, "is"), m.is = T;
      function _(v, w, C) {
        const k = { start: v, deleteCount: w };
        return C !== void 0 && (k.cells = C), k;
      }
      s(_, "create"), m.create = _;
    })(f || (t.NotebookCellArrayChange = f = {}));
    var d;
    (function(m) {
      m.method = "notebookDocument/didChange", m.messageDirection = n.MessageDirection.clientToServer, m.type = new n.ProtocolNotificationType(m.method), m.registrationMethod = l.method;
    })(d || (t.DidChangeNotebookDocumentNotification = d = {}));
    var p;
    (function(m) {
      m.method = "notebookDocument/didSave", m.messageDirection = n.MessageDirection.clientToServer, m.type = new n.ProtocolNotificationType(m.method), m.registrationMethod = l.method;
    })(p || (t.DidSaveNotebookDocumentNotification = p = {}));
    var g;
    (function(m) {
      m.method = "notebookDocument/didClose", m.messageDirection = n.MessageDirection.clientToServer, m.type = new n.ProtocolNotificationType(m.method), m.registrationMethod = l.method;
    })(g || (t.DidCloseNotebookDocumentNotification = g = {}));
  }
}), fk = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.inlineCompletion.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.InlineCompletionRequest = void 0;
    var e = De(), r;
    (function(n) {
      n.method = "textDocument/inlineCompletion", n.messageDirection = e.MessageDirection.clientToServer, n.type = new e.ProtocolRequestType(n.method);
    })(r || (t.InlineCompletionRequest = r = {}));
  }
}), dk = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/protocol.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.WorkspaceSymbolRequest = t.CodeActionResolveRequest = t.CodeActionRequest = t.DocumentSymbolRequest = t.DocumentHighlightRequest = t.ReferencesRequest = t.DefinitionRequest = t.SignatureHelpRequest = t.SignatureHelpTriggerKind = t.HoverRequest = t.CompletionResolveRequest = t.CompletionRequest = t.CompletionTriggerKind = t.PublishDiagnosticsNotification = t.WatchKind = t.RelativePattern = t.FileChangeType = t.DidChangeWatchedFilesNotification = t.WillSaveTextDocumentWaitUntilRequest = t.WillSaveTextDocumentNotification = t.TextDocumentSaveReason = t.DidSaveTextDocumentNotification = t.DidCloseTextDocumentNotification = t.DidChangeTextDocumentNotification = t.TextDocumentContentChangeEvent = t.DidOpenTextDocumentNotification = t.TextDocumentSyncKind = t.TelemetryEventNotification = t.LogMessageNotification = t.ShowMessageRequest = t.ShowMessageNotification = t.MessageType = t.DidChangeConfigurationNotification = t.ExitNotification = t.ShutdownRequest = t.InitializedNotification = t.InitializeErrorCodes = t.InitializeRequest = t.WorkDoneProgressOptions = t.TextDocumentRegistrationOptions = t.StaticRegistrationOptions = t.PositionEncodingKind = t.FailureHandlingKind = t.ResourceOperationKind = t.UnregistrationRequest = t.RegistrationRequest = t.DocumentSelector = t.NotebookCellTextDocumentFilter = t.NotebookDocumentFilter = t.TextDocumentFilter = void 0, t.MonikerRequest = t.MonikerKind = t.UniquenessLevel = t.WillDeleteFilesRequest = t.DidDeleteFilesNotification = t.WillRenameFilesRequest = t.DidRenameFilesNotification = t.WillCreateFilesRequest = t.DidCreateFilesNotification = t.FileOperationPatternKind = t.LinkedEditingRangeRequest = t.ShowDocumentRequest = t.SemanticTokensRegistrationType = t.SemanticTokensRefreshRequest = t.SemanticTokensRangeRequest = t.SemanticTokensDeltaRequest = t.SemanticTokensRequest = t.TokenFormat = t.CallHierarchyPrepareRequest = t.CallHierarchyOutgoingCallsRequest = t.CallHierarchyIncomingCallsRequest = t.WorkDoneProgressCancelNotification = t.WorkDoneProgressCreateRequest = t.WorkDoneProgress = t.SelectionRangeRequest = t.DeclarationRequest = t.FoldingRangeRefreshRequest = t.FoldingRangeRequest = t.ColorPresentationRequest = t.DocumentColorRequest = t.ConfigurationRequest = t.DidChangeWorkspaceFoldersNotification = t.WorkspaceFoldersRequest = t.TypeDefinitionRequest = t.ImplementationRequest = t.ApplyWorkspaceEditRequest = t.ExecuteCommandRequest = t.PrepareRenameRequest = t.RenameRequest = t.PrepareSupportDefaultBehavior = t.DocumentOnTypeFormattingRequest = t.DocumentRangesFormattingRequest = t.DocumentRangeFormattingRequest = t.DocumentFormattingRequest = t.DocumentLinkResolveRequest = t.DocumentLinkRequest = t.CodeLensRefreshRequest = t.CodeLensResolveRequest = t.CodeLensRequest = t.WorkspaceSymbolResolveRequest = void 0, t.InlineCompletionRequest = t.DidCloseNotebookDocumentNotification = t.DidSaveNotebookDocumentNotification = t.DidChangeNotebookDocumentNotification = t.NotebookCellArrayChange = t.DidOpenNotebookDocumentNotification = t.NotebookDocumentSyncRegistrationType = t.NotebookDocument = t.NotebookCell = t.ExecutionSummary = t.NotebookCellKind = t.DiagnosticRefreshRequest = t.WorkspaceDiagnosticRequest = t.DocumentDiagnosticRequest = t.DocumentDiagnosticReportKind = t.DiagnosticServerCancellationData = t.InlayHintRefreshRequest = t.InlayHintResolveRequest = t.InlayHintRequest = t.InlineValueRefreshRequest = t.InlineValueRequest = t.TypeHierarchySupertypesRequest = t.TypeHierarchySubtypesRequest = t.TypeHierarchyPrepareRequest = void 0;
    var e = De(), r = (pc(), Gh(uf)), n = jh(), a = qN();
    Object.defineProperty(t, "ImplementationRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return a.ImplementationRequest;
    }, "get") });
    var i = WN();
    Object.defineProperty(t, "TypeDefinitionRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return i.TypeDefinitionRequest;
    }, "get") });
    var o = VN();
    Object.defineProperty(t, "WorkspaceFoldersRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return o.WorkspaceFoldersRequest;
    }, "get") }), Object.defineProperty(t, "DidChangeWorkspaceFoldersNotification", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return o.DidChangeWorkspaceFoldersNotification;
    }, "get") });
    var c = HN();
    Object.defineProperty(t, "ConfigurationRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return c.ConfigurationRequest;
    }, "get") });
    var l = YN();
    Object.defineProperty(t, "DocumentColorRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return l.DocumentColorRequest;
    }, "get") }), Object.defineProperty(t, "ColorPresentationRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return l.ColorPresentationRequest;
    }, "get") });
    var u = XN();
    Object.defineProperty(t, "FoldingRangeRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return u.FoldingRangeRequest;
    }, "get") }), Object.defineProperty(t, "FoldingRangeRefreshRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return u.FoldingRangeRefreshRequest;
    }, "get") });
    var f = JN();
    Object.defineProperty(t, "DeclarationRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return f.DeclarationRequest;
    }, "get") });
    var d = ZN();
    Object.defineProperty(t, "SelectionRangeRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return d.SelectionRangeRequest;
    }, "get") });
    var p = QN();
    Object.defineProperty(t, "WorkDoneProgress", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return p.WorkDoneProgress;
    }, "get") }), Object.defineProperty(t, "WorkDoneProgressCreateRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return p.WorkDoneProgressCreateRequest;
    }, "get") }), Object.defineProperty(t, "WorkDoneProgressCancelNotification", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return p.WorkDoneProgressCancelNotification;
    }, "get") });
    var g = ek();
    Object.defineProperty(t, "CallHierarchyIncomingCallsRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return g.CallHierarchyIncomingCallsRequest;
    }, "get") }), Object.defineProperty(t, "CallHierarchyOutgoingCallsRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return g.CallHierarchyOutgoingCallsRequest;
    }, "get") }), Object.defineProperty(t, "CallHierarchyPrepareRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return g.CallHierarchyPrepareRequest;
    }, "get") });
    var m = tk();
    Object.defineProperty(t, "TokenFormat", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return m.TokenFormat;
    }, "get") }), Object.defineProperty(t, "SemanticTokensRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return m.SemanticTokensRequest;
    }, "get") }), Object.defineProperty(t, "SemanticTokensDeltaRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return m.SemanticTokensDeltaRequest;
    }, "get") }), Object.defineProperty(t, "SemanticTokensRangeRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return m.SemanticTokensRangeRequest;
    }, "get") }), Object.defineProperty(t, "SemanticTokensRefreshRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return m.SemanticTokensRefreshRequest;
    }, "get") }), Object.defineProperty(t, "SemanticTokensRegistrationType", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return m.SemanticTokensRegistrationType;
    }, "get") });
    var T = rk();
    Object.defineProperty(t, "ShowDocumentRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return T.ShowDocumentRequest;
    }, "get") });
    var _ = nk();
    Object.defineProperty(t, "LinkedEditingRangeRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return _.LinkedEditingRangeRequest;
    }, "get") });
    var v = ak();
    Object.defineProperty(t, "FileOperationPatternKind", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return v.FileOperationPatternKind;
    }, "get") }), Object.defineProperty(t, "DidCreateFilesNotification", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return v.DidCreateFilesNotification;
    }, "get") }), Object.defineProperty(t, "WillCreateFilesRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return v.WillCreateFilesRequest;
    }, "get") }), Object.defineProperty(t, "DidRenameFilesNotification", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return v.DidRenameFilesNotification;
    }, "get") }), Object.defineProperty(t, "WillRenameFilesRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return v.WillRenameFilesRequest;
    }, "get") }), Object.defineProperty(t, "DidDeleteFilesNotification", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return v.DidDeleteFilesNotification;
    }, "get") }), Object.defineProperty(t, "WillDeleteFilesRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return v.WillDeleteFilesRequest;
    }, "get") });
    var w = ik();
    Object.defineProperty(t, "UniquenessLevel", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return w.UniquenessLevel;
    }, "get") }), Object.defineProperty(t, "MonikerKind", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return w.MonikerKind;
    }, "get") }), Object.defineProperty(t, "MonikerRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return w.MonikerRequest;
    }, "get") });
    var C = sk();
    Object.defineProperty(t, "TypeHierarchyPrepareRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return C.TypeHierarchyPrepareRequest;
    }, "get") }), Object.defineProperty(t, "TypeHierarchySubtypesRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return C.TypeHierarchySubtypesRequest;
    }, "get") }), Object.defineProperty(t, "TypeHierarchySupertypesRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return C.TypeHierarchySupertypesRequest;
    }, "get") });
    var k = ok();
    Object.defineProperty(t, "InlineValueRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return k.InlineValueRequest;
    }, "get") }), Object.defineProperty(t, "InlineValueRefreshRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return k.InlineValueRefreshRequest;
    }, "get") });
    var B = lk();
    Object.defineProperty(t, "InlayHintRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return B.InlayHintRequest;
    }, "get") }), Object.defineProperty(t, "InlayHintResolveRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return B.InlayHintResolveRequest;
    }, "get") }), Object.defineProperty(t, "InlayHintRefreshRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return B.InlayHintRefreshRequest;
    }, "get") });
    var re = ck();
    Object.defineProperty(t, "DiagnosticServerCancellationData", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return re.DiagnosticServerCancellationData;
    }, "get") }), Object.defineProperty(t, "DocumentDiagnosticReportKind", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return re.DocumentDiagnosticReportKind;
    }, "get") }), Object.defineProperty(t, "DocumentDiagnosticRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return re.DocumentDiagnosticRequest;
    }, "get") }), Object.defineProperty(t, "WorkspaceDiagnosticRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return re.WorkspaceDiagnosticRequest;
    }, "get") }), Object.defineProperty(t, "DiagnosticRefreshRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return re.DiagnosticRefreshRequest;
    }, "get") });
    var X = uk();
    Object.defineProperty(t, "NotebookCellKind", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return X.NotebookCellKind;
    }, "get") }), Object.defineProperty(t, "ExecutionSummary", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return X.ExecutionSummary;
    }, "get") }), Object.defineProperty(t, "NotebookCell", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return X.NotebookCell;
    }, "get") }), Object.defineProperty(t, "NotebookDocument", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return X.NotebookDocument;
    }, "get") }), Object.defineProperty(t, "NotebookDocumentSyncRegistrationType", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return X.NotebookDocumentSyncRegistrationType;
    }, "get") }), Object.defineProperty(t, "DidOpenNotebookDocumentNotification", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return X.DidOpenNotebookDocumentNotification;
    }, "get") }), Object.defineProperty(t, "NotebookCellArrayChange", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return X.NotebookCellArrayChange;
    }, "get") }), Object.defineProperty(t, "DidChangeNotebookDocumentNotification", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return X.DidChangeNotebookDocumentNotification;
    }, "get") }), Object.defineProperty(t, "DidSaveNotebookDocumentNotification", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return X.DidSaveNotebookDocumentNotification;
    }, "get") }), Object.defineProperty(t, "DidCloseNotebookDocumentNotification", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return X.DidCloseNotebookDocumentNotification;
    }, "get") });
    var ge = fk();
    Object.defineProperty(t, "InlineCompletionRequest", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return ge.InlineCompletionRequest;
    }, "get") });
    var Ee;
    (function(h) {
      function se(Ne) {
        const H = Ne;
        return n.string(H) || n.string(H.language) || n.string(H.scheme) || n.string(H.pattern);
      }
      s(se, "is"), h.is = se;
    })(Ee || (t.TextDocumentFilter = Ee = {}));
    var we;
    (function(h) {
      function se(Ne) {
        const H = Ne;
        return n.objectLiteral(H) && (n.string(H.notebookType) || n.string(H.scheme) || n.string(H.pattern));
      }
      s(se, "is"), h.is = se;
    })(we || (t.NotebookDocumentFilter = we = {}));
    var oe;
    (function(h) {
      function se(Ne) {
        const H = Ne;
        return n.objectLiteral(H) && (n.string(H.notebook) || we.is(H.notebook)) && (H.language === void 0 || n.string(H.language));
      }
      s(se, "is"), h.is = se;
    })(oe || (t.NotebookCellTextDocumentFilter = oe = {}));
    var tt;
    (function(h) {
      function se(Ne) {
        if (!Array.isArray(Ne))
          return !1;
        for (let H of Ne)
          if (!n.string(H) && !Ee.is(H) && !oe.is(H))
            return !1;
        return !0;
      }
      s(se, "is"), h.is = se;
    })(tt || (t.DocumentSelector = tt = {}));
    var P;
    (function(h) {
      h.method = "client/registerCapability", h.messageDirection = e.MessageDirection.serverToClient, h.type = new e.ProtocolRequestType(h.method);
    })(P || (t.RegistrationRequest = P = {}));
    var b;
    (function(h) {
      h.method = "client/unregisterCapability", h.messageDirection = e.MessageDirection.serverToClient, h.type = new e.ProtocolRequestType(h.method);
    })(b || (t.UnregistrationRequest = b = {}));
    var R;
    (function(h) {
      h.Create = "create", h.Rename = "rename", h.Delete = "delete";
    })(R || (t.ResourceOperationKind = R = {}));
    var I;
    (function(h) {
      h.Abort = "abort", h.Transactional = "transactional", h.TextOnlyTransactional = "textOnlyTransactional", h.Undo = "undo";
    })(I || (t.FailureHandlingKind = I = {}));
    var $;
    (function(h) {
      h.UTF8 = "utf-8", h.UTF16 = "utf-16", h.UTF32 = "utf-32";
    })($ || (t.PositionEncodingKind = $ = {}));
    var A;
    (function(h) {
      function se(Ne) {
        const H = Ne;
        return H && n.string(H.id) && H.id.length > 0;
      }
      s(se, "hasId"), h.hasId = se;
    })(A || (t.StaticRegistrationOptions = A = {}));
    var S;
    (function(h) {
      function se(Ne) {
        const H = Ne;
        return H && (H.documentSelector === null || tt.is(H.documentSelector));
      }
      s(se, "is"), h.is = se;
    })(S || (t.TextDocumentRegistrationOptions = S = {}));
    var O;
    (function(h) {
      function se(H) {
        const Pe = H;
        return n.objectLiteral(Pe) && (Pe.workDoneProgress === void 0 || n.boolean(Pe.workDoneProgress));
      }
      s(se, "is"), h.is = se;
      function Ne(H) {
        const Pe = H;
        return Pe && n.boolean(Pe.workDoneProgress);
      }
      s(Ne, "hasWorkDoneProgress"), h.hasWorkDoneProgress = Ne;
    })(O || (t.WorkDoneProgressOptions = O = {}));
    var M;
    (function(h) {
      h.method = "initialize", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(M || (t.InitializeRequest = M = {}));
    var L;
    (function(h) {
      h.unknownProtocolVersion = 1;
    })(L || (t.InitializeErrorCodes = L = {}));
    var j;
    (function(h) {
      h.method = "initialized", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolNotificationType(h.method);
    })(j || (t.InitializedNotification = j = {}));
    var F;
    (function(h) {
      h.method = "shutdown", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType0(h.method);
    })(F || (t.ShutdownRequest = F = {}));
    var te;
    (function(h) {
      h.method = "exit", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolNotificationType0(h.method);
    })(te || (t.ExitNotification = te = {}));
    var U;
    (function(h) {
      h.method = "workspace/didChangeConfiguration", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolNotificationType(h.method);
    })(U || (t.DidChangeConfigurationNotification = U = {}));
    var Q;
    (function(h) {
      h.Error = 1, h.Warning = 2, h.Info = 3, h.Log = 4, h.Debug = 5;
    })(Q || (t.MessageType = Q = {}));
    var fe;
    (function(h) {
      h.method = "window/showMessage", h.messageDirection = e.MessageDirection.serverToClient, h.type = new e.ProtocolNotificationType(h.method);
    })(fe || (t.ShowMessageNotification = fe = {}));
    var de;
    (function(h) {
      h.method = "window/showMessageRequest", h.messageDirection = e.MessageDirection.serverToClient, h.type = new e.ProtocolRequestType(h.method);
    })(de || (t.ShowMessageRequest = de = {}));
    var pe;
    (function(h) {
      h.method = "window/logMessage", h.messageDirection = e.MessageDirection.serverToClient, h.type = new e.ProtocolNotificationType(h.method);
    })(pe || (t.LogMessageNotification = pe = {}));
    var ye;
    (function(h) {
      h.method = "telemetry/event", h.messageDirection = e.MessageDirection.serverToClient, h.type = new e.ProtocolNotificationType(h.method);
    })(ye || (t.TelemetryEventNotification = ye = {}));
    var Ie;
    (function(h) {
      h.None = 0, h.Full = 1, h.Incremental = 2;
    })(Ie || (t.TextDocumentSyncKind = Ie = {}));
    var he;
    (function(h) {
      h.method = "textDocument/didOpen", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolNotificationType(h.method);
    })(he || (t.DidOpenTextDocumentNotification = he = {}));
    var J;
    (function(h) {
      function se(H) {
        let Pe = H;
        return Pe != null && typeof Pe.text == "string" && Pe.range !== void 0 && (Pe.rangeLength === void 0 || typeof Pe.rangeLength == "number");
      }
      s(se, "isIncremental"), h.isIncremental = se;
      function Ne(H) {
        let Pe = H;
        return Pe != null && typeof Pe.text == "string" && Pe.range === void 0 && Pe.rangeLength === void 0;
      }
      s(Ne, "isFull"), h.isFull = Ne;
    })(J || (t.TextDocumentContentChangeEvent = J = {}));
    var Ue;
    (function(h) {
      h.method = "textDocument/didChange", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolNotificationType(h.method);
    })(Ue || (t.DidChangeTextDocumentNotification = Ue = {}));
    var le;
    (function(h) {
      h.method = "textDocument/didClose", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolNotificationType(h.method);
    })(le || (t.DidCloseTextDocumentNotification = le = {}));
    var He;
    (function(h) {
      h.method = "textDocument/didSave", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolNotificationType(h.method);
    })(He || (t.DidSaveTextDocumentNotification = He = {}));
    var ve;
    (function(h) {
      h.Manual = 1, h.AfterDelay = 2, h.FocusOut = 3;
    })(ve || (t.TextDocumentSaveReason = ve = {}));
    var x;
    (function(h) {
      h.method = "textDocument/willSave", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolNotificationType(h.method);
    })(x || (t.WillSaveTextDocumentNotification = x = {}));
    var ze;
    (function(h) {
      h.method = "textDocument/willSaveWaitUntil", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(ze || (t.WillSaveTextDocumentWaitUntilRequest = ze = {}));
    var Xt;
    (function(h) {
      h.method = "workspace/didChangeWatchedFiles", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolNotificationType(h.method);
    })(Xt || (t.DidChangeWatchedFilesNotification = Xt = {}));
    var Nt;
    (function(h) {
      h.Created = 1, h.Changed = 2, h.Deleted = 3;
    })(Nt || (t.FileChangeType = Nt = {}));
    var Te;
    (function(h) {
      function se(Ne) {
        const H = Ne;
        return n.objectLiteral(H) && (r.URI.is(H.baseUri) || r.WorkspaceFolder.is(H.baseUri)) && n.string(H.pattern);
      }
      s(se, "is"), h.is = se;
    })(Te || (t.RelativePattern = Te = {}));
    var oa;
    (function(h) {
      h.Create = 1, h.Change = 2, h.Delete = 4;
    })(oa || (t.WatchKind = oa = {}));
    var Yo;
    (function(h) {
      h.method = "textDocument/publishDiagnostics", h.messageDirection = e.MessageDirection.serverToClient, h.type = new e.ProtocolNotificationType(h.method);
    })(Yo || (t.PublishDiagnosticsNotification = Yo = {}));
    var Xo;
    (function(h) {
      h.Invoked = 1, h.TriggerCharacter = 2, h.TriggerForIncompleteCompletions = 3;
    })(Xo || (t.CompletionTriggerKind = Xo = {}));
    var Jo;
    (function(h) {
      h.method = "textDocument/completion", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(Jo || (t.CompletionRequest = Jo = {}));
    var Zo;
    (function(h) {
      h.method = "completionItem/resolve", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(Zo || (t.CompletionResolveRequest = Zo = {}));
    var la;
    (function(h) {
      h.method = "textDocument/hover", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(la || (t.HoverRequest = la = {}));
    var ca;
    (function(h) {
      h.Invoked = 1, h.TriggerCharacter = 2, h.ContentChange = 3;
    })(ca || (t.SignatureHelpTriggerKind = ca = {}));
    var Jt;
    (function(h) {
      h.method = "textDocument/signatureHelp", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(Jt || (t.SignatureHelpRequest = Jt = {}));
    var ua;
    (function(h) {
      h.method = "textDocument/definition", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(ua || (t.DefinitionRequest = ua = {}));
    var Qo;
    (function(h) {
      h.method = "textDocument/references", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(Qo || (t.ReferencesRequest = Qo = {}));
    var el;
    (function(h) {
      h.method = "textDocument/documentHighlight", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(el || (t.DocumentHighlightRequest = el = {}));
    var fa;
    (function(h) {
      h.method = "textDocument/documentSymbol", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(fa || (t.DocumentSymbolRequest = fa = {}));
    var da;
    (function(h) {
      h.method = "textDocument/codeAction", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(da || (t.CodeActionRequest = da = {}));
    var tl;
    (function(h) {
      h.method = "codeAction/resolve", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(tl || (t.CodeActionResolveRequest = tl = {}));
    var Lc;
    (function(h) {
      h.method = "workspace/symbol", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(Lc || (t.WorkspaceSymbolRequest = Lc = {}));
    var rl;
    (function(h) {
      h.method = "workspaceSymbol/resolve", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(rl || (t.WorkspaceSymbolResolveRequest = rl = {}));
    var nl;
    (function(h) {
      h.method = "textDocument/codeLens", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(nl || (t.CodeLensRequest = nl = {}));
    var al;
    (function(h) {
      h.method = "codeLens/resolve", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(al || (t.CodeLensResolveRequest = al = {}));
    var il;
    (function(h) {
      h.method = "workspace/codeLens/refresh", h.messageDirection = e.MessageDirection.serverToClient, h.type = new e.ProtocolRequestType0(h.method);
    })(il || (t.CodeLensRefreshRequest = il = {}));
    var kt;
    (function(h) {
      h.method = "textDocument/documentLink", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(kt || (t.DocumentLinkRequest = kt = {}));
    var sl;
    (function(h) {
      h.method = "documentLink/resolve", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(sl || (t.DocumentLinkResolveRequest = sl = {}));
    var ol;
    (function(h) {
      h.method = "textDocument/formatting", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(ol || (t.DocumentFormattingRequest = ol = {}));
    var Fr;
    (function(h) {
      h.method = "textDocument/rangeFormatting", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(Fr || (t.DocumentRangeFormattingRequest = Fr = {}));
    var ll;
    (function(h) {
      h.method = "textDocument/rangesFormatting", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(ll || (t.DocumentRangesFormattingRequest = ll = {}));
    var rn;
    (function(h) {
      h.method = "textDocument/onTypeFormatting", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(rn || (t.DocumentOnTypeFormattingRequest = rn = {}));
    var cl;
    (function(h) {
      h.Identifier = 1;
    })(cl || (t.PrepareSupportDefaultBehavior = cl = {}));
    var Zt;
    (function(h) {
      h.method = "textDocument/rename", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(Zt || (t.RenameRequest = Zt = {}));
    var gr;
    (function(h) {
      h.method = "textDocument/prepareRename", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(gr || (t.PrepareRenameRequest = gr = {}));
    var ul;
    (function(h) {
      h.method = "workspace/executeCommand", h.messageDirection = e.MessageDirection.clientToServer, h.type = new e.ProtocolRequestType(h.method);
    })(ul || (t.ExecuteCommandRequest = ul = {}));
    var fl;
    (function(h) {
      h.method = "workspace/applyEdit", h.messageDirection = e.MessageDirection.serverToClient, h.type = new e.ProtocolRequestType("workspace/applyEdit");
    })(fl || (t.ApplyWorkspaceEditRequest = fl = {}));
  }
}), pk = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/connection.js"(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.createProtocolConnection = void 0;
    var e = Go();
    function r(n, a, i, o) {
      return e.ConnectionStrategy.is(o) && (o = { connectionStrategy: o }), (0, e.createMessageConnection)(n, a, i, o);
    }
    s(r, "createProtocolConnection"), t.createProtocolConnection = r;
  }
}), hk = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/common/api.js"(t) {
    var e = t && t.__createBinding || (Object.create ? (function(i, o, c, l) {
      l === void 0 && (l = c);
      var u = Object.getOwnPropertyDescriptor(o, c);
      (!u || ("get" in u ? !o.__esModule : u.writable || u.configurable)) && (u = { enumerable: !0, get: /* @__PURE__ */ s(function() {
        return o[c];
      }, "get") }), Object.defineProperty(i, l, u);
    }) : (function(i, o, c, l) {
      l === void 0 && (l = c), i[l] = o[c];
    })), r = t && t.__exportStar || function(i, o) {
      for (var c in i) c !== "default" && !Object.prototype.hasOwnProperty.call(o, c) && e(o, i, c);
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.LSPErrorCodes = t.createProtocolConnection = void 0, r(Go(), t), r((pc(), Gh(uf)), t), r(De(), t), r(dk(), t);
    var n = pk();
    Object.defineProperty(t, "createProtocolConnection", { enumerable: !0, get: /* @__PURE__ */ s(function() {
      return n.createProtocolConnection;
    }, "get") });
    var a;
    (function(i) {
      i.lspReservedErrorRangeStart = -32899, i.RequestFailed = -32803, i.ServerCancelled = -32802, i.ContentModified = -32801, i.RequestCancelled = -32800, i.lspReservedErrorRangeEnd = -32800;
    })(a || (t.LSPErrorCodes = a = {}));
  }
}), mk = Y({
  "../../node_modules/.pnpm/vscode-languageserver-protocol@3.17.5/node_modules/vscode-languageserver-protocol/lib/browser/main.js"(t) {
    var e = t && t.__createBinding || (Object.create ? (function(i, o, c, l) {
      l === void 0 && (l = c);
      var u = Object.getOwnPropertyDescriptor(o, c);
      (!u || ("get" in u ? !o.__esModule : u.writable || u.configurable)) && (u = { enumerable: !0, get: /* @__PURE__ */ s(function() {
        return o[c];
      }, "get") }), Object.defineProperty(i, l, u);
    }) : (function(i, o, c, l) {
      l === void 0 && (l = c), i[l] = o[c];
    })), r = t && t.__exportStar || function(i, o) {
      for (var c in i) c !== "default" && !Object.prototype.hasOwnProperty.call(o, c) && e(o, i, c);
    };
    Object.defineProperty(t, "__esModule", { value: !0 }), t.createProtocolConnection = void 0;
    var n = Ey();
    r(Ey(), t), r(hk(), t);
    function a(i, o, c, l) {
      return (0, n.createMessageConnection)(i, o, c, l);
    }
    s(a, "createProtocolConnection"), t.createProtocolConnection = a;
  }
}), yT = {};
Jr(yT, {
  AbstractAstReflection: () => Bh,
  AbstractCstNode: () => qg,
  AbstractLangiumParser: () => Vg,
  AbstractParserErrorMessageProvider: () => iI,
  AbstractThreadedAsyncParser: () => Gj,
  AstUtils: () => Kh,
  BiMap: () => af,
  Cancellation: () => $e,
  CompositeCstNodeImpl: () => od,
  ContextCache: () => hd,
  CstNodeBuilder: () => rI,
  CstUtils: () => Uh,
  DEFAULT_TOKENIZE_OPTIONS: () => fy,
  DONE_RESULT: () => nt,
  DatatypeSymbol: () => ef,
  DefaultAstNodeDescriptionProvider: () => DI,
  DefaultAstNodeLocator: () => xI,
  DefaultAsyncParser: () => tN,
  DefaultCommentProvider: () => eN,
  DefaultConfigurationProvider: () => FI,
  DefaultDocumentBuilder: () => GI,
  DefaultDocumentValidator: () => LI,
  DefaultHydrator: () => nN,
  DefaultIndexManager: () => jI,
  DefaultJsonSerializer: () => NI,
  DefaultLangiumDocumentFactory: () => $I,
  DefaultLangiumDocuments: () => AI,
  DefaultLangiumProfiler: () => Kj,
  DefaultLexer: () => dy,
  DefaultLexerErrorMessageProvider: () => zI,
  DefaultLinker: () => EI,
  DefaultNameProvider: () => _I,
  DefaultReferenceDescriptionProvider: () => MI,
  DefaultReferences: () => CI,
  DefaultScopeComputation: () => bI,
  DefaultScopeProvider: () => II,
  DefaultServiceRegistry: () => kI,
  DefaultTokenBuilder: () => ud,
  DefaultValueConverter: () => ey,
  DefaultWorkspaceLock: () => rN,
  DefaultWorkspaceManager: () => UI,
  Deferred: () => Pr,
  Disposable: () => On,
  DisposableCache: () => pd,
  DocumentCache: () => wI,
  DocumentState: () => Z,
  DocumentValidator: () => Ot,
  EMPTY_SCOPE: () => Dj,
  EMPTY_STREAM: () => bo,
  EmptyFileSystem: () => Gt,
  EmptyFileSystemProvider: () => sN,
  ErrorWithLocation: () => Rf,
  GrammarAST: () => RT,
  GrammarUtils: () => Rm,
  IndentationAwareLexer: () => Uj,
  IndentationAwareTokenBuilder: () => iN,
  JSDocDocumentationProvider: () => QI,
  LangiumCompletionParser: () => sI,
  LangiumParser: () => aI,
  LangiumParserErrorMessageProvider: () => Hg,
  LeafCstNodeImpl: () => Qu,
  LexingMode: () => kn,
  MapScope: () => Lj,
  Module: () => Eh,
  MultiMap: () => Or,
  MultiMapScope: () => SI,
  OperationCancelled: () => sr,
  ParserWorker: () => jj,
  ProfilingTask: () => lN,
  Reduction: () => Xl,
  RefResolving: () => pn,
  RegExpUtils: () => Am,
  RootCstNodeImpl: () => Wg,
  SimpleCache: () => sy,
  StreamImpl: () => ir,
  StreamScope: () => Th,
  TextDocument: () => rf,
  TreeStreamImpl: () => So,
  URI: () => Rt,
  UriTrie: () => ay,
  UriUtils: () => it,
  VALIDATE_EACH_NODE: () => OI,
  ValidationCategory: () => sf,
  ValidationRegistry: () => PI,
  ValueConverter: () => nr,
  WorkspaceCache: () => oy,
  assertCondition: () => $m,
  assertUnreachable: () => Zr,
  createCompletionParser: () => Jg,
  createDefaultCoreModule: () => bt,
  createDefaultSharedCoreModule: () => St,
  createGrammarConfig: () => jm,
  createLangiumParser: () => Zg,
  createParser: () => ld,
  delayNextTick: () => fd,
  diagnosticData: () => Nn,
  eagerLoad: () => Ty,
  getDiagnosticRange: () => cy,
  indentationBuilderDefaultOptions: () => Ch,
  inject: () => ke,
  interruptAndCheck: () => Ye,
  isAstNode: () => Be,
  isAstNodeDescription: () => zh,
  isAstNodeWithComment: () => ly,
  isCompositeCstNode: () => _r,
  isIMultiModeLexerDefinition: () => yd,
  isJSDoc: () => hy,
  isLeafCstNode: () => Un,
  isLinkingError: () => gn,
  isMultiReference: () => or,
  isNamed: () => iy,
  isOperationCancelled: () => sa,
  isReference: () => at,
  isRootCstNode: () => df,
  isTokenTypeArray: () => gd,
  isTokenTypeDictionary: () => of,
  loadGrammarFromJson: () => wt,
  parseJSDoc: () => py,
  prepareLangiumParser: () => Qg,
  setInterruptionPeriod: () => ty,
  startCancelableOperation: () => dd,
  stream: () => ue,
  toDiagnosticData: () => uy,
  toDiagnosticSeverity: () => Hl
});
var Uh = {};
Jr(Uh, {
  DefaultNameRegexp: () => mm,
  RangeComparison: () => ar,
  compareRange: () => pm,
  findCommentNode: () => gm,
  findDeclarationNodeAtOffset: () => GT,
  findLeafNodeAtOffset: () => Tf,
  findLeafNodeBeforeOffset: () => ym,
  flattenCst: () => FT,
  getDatatypeNode: () => xT,
  getInteriorNodes: () => zT,
  getNextNode: () => jT,
  getPreviousNode: () => Tm,
  getStartlineNode: () => UT,
  inRange: () => hm,
  isChildNode: () => dm,
  isCommentNode: () => xu,
  streamCst: () => ko,
  toDocumentSegment: () => Po,
  tokenToRange: () => Jl
});
function Be(t) {
  return typeof t == "object" && t !== null && typeof t.$type == "string";
}
s(Be, "isAstNode");
function at(t) {
  return typeof t == "object" && t !== null && typeof t.$refText == "string" && "ref" in t;
}
s(at, "isReference");
function or(t) {
  return typeof t == "object" && t !== null && typeof t.$refText == "string" && "items" in t;
}
s(or, "isMultiReference");
function zh(t) {
  return typeof t == "object" && t !== null && typeof t.name == "string" && typeof t.type == "string" && typeof t.path == "string";
}
s(zh, "isAstNodeDescription");
function gn(t) {
  return typeof t == "object" && t !== null && typeof t.info == "object" && typeof t.message == "string";
}
s(gn, "isLinkingError");
var Ua, Bh = (Ua = class {
  constructor() {
    this.subtypes = {}, this.allSubtypes = {};
  }
  getAllTypes() {
    return Object.keys(this.types);
  }
  getReferenceType(e) {
    const r = this.types[e.container.$type];
    if (!r)
      throw new Error(`Type ${e.container.$type || "undefined"} not found.`);
    const n = r.properties[e.property]?.referenceType;
    if (!n)
      throw new Error(`Property ${e.property || "undefined"} of type ${e.container.$type} is not a reference.`);
    return n;
  }
  getTypeMetaData(e) {
    const r = this.types[e];
    return r || {
      name: e,
      properties: {},
      superTypes: []
    };
  }
  isInstance(e, r) {
    return Be(e) && this.isSubtype(e.$type, r);
  }
  isSubtype(e, r) {
    if (e === r)
      return !0;
    let n = this.subtypes[e];
    n || (n = this.subtypes[e] = {});
    const a = n[r];
    if (a !== void 0)
      return a;
    {
      const i = this.types[e], o = i ? i.superTypes.some((c) => this.isSubtype(c, r)) : !1;
      return n[r] = o, o;
    }
  }
  getAllSubTypes(e) {
    const r = this.allSubtypes[e];
    if (r)
      return r;
    {
      const n = this.getAllTypes(), a = [];
      for (const i of n)
        this.isSubtype(i, e) && a.push(i);
      return this.allSubtypes[e] = a, a;
    }
  }
}, s(Ua, "AbstractAstReflection"), Ua);
function _r(t) {
  return typeof t == "object" && t !== null && Array.isArray(t.content);
}
s(_r, "isCompositeCstNode");
function Un(t) {
  return typeof t == "object" && t !== null && typeof t.tokenType == "object";
}
s(Un, "isLeafCstNode");
function df(t) {
  return _r(t) && typeof t.fullText == "string";
}
s(df, "isRootCstNode");
var ht, ir = (ht = class {
  constructor(e, r) {
    this.startFn = e, this.nextFn = r;
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: /* @__PURE__ */ s(() => this.nextFn(e.state), "next"),
      [Symbol.iterator]: () => e
    };
    return e;
  }
  [Symbol.iterator]() {
    return this.iterator();
  }
  isEmpty() {
    return !!this.iterator().next().done;
  }
  count() {
    const e = this.iterator();
    let r = 0, n = e.next();
    for (; !n.done; )
      r++, n = e.next();
    return r;
  }
  toArray() {
    const e = [], r = this.iterator();
    let n;
    do
      n = r.next(), n.value !== void 0 && e.push(n.value);
    while (!n.done);
    return e;
  }
  toSet() {
    return new Set(this);
  }
  toMap(e, r) {
    const n = this.map((a) => [
      e ? e(a) : a,
      r ? r(a) : a
    ]);
    return new Map(n);
  }
  toString() {
    return this.join();
  }
  concat(e) {
    return new ht(() => ({ first: this.startFn(), firstDone: !1, iterator: e[Symbol.iterator]() }), (r) => {
      let n;
      if (!r.firstDone) {
        do
          if (n = this.nextFn(r.first), !n.done)
            return n;
        while (!n.done);
        r.firstDone = !0;
      }
      do
        if (n = r.iterator.next(), !n.done)
          return n;
      while (!n.done);
      return nt;
    });
  }
  join(e = ",") {
    const r = this.iterator();
    let n = "", a, i = !1;
    do
      a = r.next(), a.done || (i && (n += e), n += vT(a.value)), i = !0;
    while (!a.done);
    return n;
  }
  indexOf(e, r = 0) {
    const n = this.iterator();
    let a = 0, i = n.next();
    for (; !i.done; ) {
      if (a >= r && i.value === e)
        return a;
      i = n.next(), a++;
    }
    return -1;
  }
  every(e) {
    const r = this.iterator();
    let n = r.next();
    for (; !n.done; ) {
      if (!e(n.value))
        return !1;
      n = r.next();
    }
    return !0;
  }
  some(e) {
    const r = this.iterator();
    let n = r.next();
    for (; !n.done; ) {
      if (e(n.value))
        return !0;
      n = r.next();
    }
    return !1;
  }
  forEach(e) {
    const r = this.iterator();
    let n = 0, a = r.next();
    for (; !a.done; )
      e(a.value, n), a = r.next(), n++;
  }
  map(e) {
    return new ht(this.startFn, (r) => {
      const { done: n, value: a } = this.nextFn(r);
      return n ? nt : { done: !1, value: e(a) };
    });
  }
  filter(e) {
    return new ht(this.startFn, (r) => {
      let n;
      do
        if (n = this.nextFn(r), !n.done && e(n.value))
          return n;
      while (!n.done);
      return nt;
    });
  }
  nonNullable() {
    return this.filter((e) => e != null);
  }
  reduce(e, r) {
    const n = this.iterator();
    let a = r, i = n.next();
    for (; !i.done; )
      a === void 0 ? a = i.value : a = e(a, i.value), i = n.next();
    return a;
  }
  reduceRight(e, r) {
    return this.recursiveReduce(this.iterator(), e, r);
  }
  recursiveReduce(e, r, n) {
    const a = e.next();
    if (a.done)
      return n;
    const i = this.recursiveReduce(e, r, n);
    return i === void 0 ? a.value : r(i, a.value);
  }
  find(e) {
    const r = this.iterator();
    let n = r.next();
    for (; !n.done; ) {
      if (e(n.value))
        return n.value;
      n = r.next();
    }
  }
  findIndex(e) {
    const r = this.iterator();
    let n = 0, a = r.next();
    for (; !a.done; ) {
      if (e(a.value))
        return n;
      a = r.next(), n++;
    }
    return -1;
  }
  includes(e) {
    const r = this.iterator();
    let n = r.next();
    for (; !n.done; ) {
      if (n.value === e)
        return !0;
      n = r.next();
    }
    return !1;
  }
  flatMap(e) {
    return new ht(() => ({ this: this.startFn() }), (r) => {
      do {
        if (r.iterator) {
          const i = r.iterator.next();
          if (i.done)
            r.iterator = void 0;
          else
            return i;
        }
        const { done: n, value: a } = this.nextFn(r.this);
        if (!n) {
          const i = e(a);
          if (Yl(i))
            r.iterator = i[Symbol.iterator]();
          else
            return { done: !1, value: i };
        }
      } while (r.iterator);
      return nt;
    });
  }
  flat(e) {
    if (e === void 0 && (e = 1), e <= 0)
      return this;
    const r = e > 1 ? this.flat(e - 1) : this;
    return new ht(() => ({ this: r.startFn() }), (n) => {
      do {
        if (n.iterator) {
          const o = n.iterator.next();
          if (o.done)
            n.iterator = void 0;
          else
            return o;
        }
        const { done: a, value: i } = r.nextFn(n.this);
        if (!a)
          if (Yl(i))
            n.iterator = i[Symbol.iterator]();
          else
            return { done: !1, value: i };
      } while (n.iterator);
      return nt;
    });
  }
  head() {
    const r = this.iterator().next();
    if (!r.done)
      return r.value;
  }
  tail(e = 1) {
    return new ht(() => {
      const r = this.startFn();
      for (let n = 0; n < e; n++)
        if (this.nextFn(r).done)
          return r;
      return r;
    }, this.nextFn);
  }
  limit(e) {
    return new ht(() => ({ size: 0, state: this.startFn() }), (r) => (r.size++, r.size > e ? nt : this.nextFn(r.state)));
  }
  distinct(e) {
    return new ht(() => ({ set: /* @__PURE__ */ new Set(), internalState: this.startFn() }), (r) => {
      let n;
      do
        if (n = this.nextFn(r.internalState), !n.done) {
          const a = e ? e(n.value) : n.value;
          if (!r.set.has(a))
            return r.set.add(a), n;
        }
      while (!n.done);
      return nt;
    });
  }
  exclude(e, r) {
    const n = /* @__PURE__ */ new Set();
    for (const a of e) {
      const i = r ? r(a) : a;
      n.add(i);
    }
    return this.filter((a) => {
      const i = r ? r(a) : a;
      return !n.has(i);
    });
  }
}, s(ht, "StreamImpl"), ht);
function vT(t) {
  return typeof t == "string" ? t : typeof t > "u" ? "undefined" : typeof t.toString == "function" ? t.toString() : Object.prototype.toString.call(t);
}
s(vT, "toString");
function Yl(t) {
  return !!t && typeof t[Symbol.iterator] == "function";
}
s(Yl, "isIterable");
var bo = new ir(() => {
}, () => nt), nt = Object.freeze({ done: !0, value: void 0 });
function ue(...t) {
  if (t.length === 1) {
    const e = t[0];
    if (e instanceof ir)
      return e;
    if (Yl(e))
      return new ir(() => e[Symbol.iterator](), (r) => r.next());
    if (typeof e.length == "number")
      return new ir(() => ({ index: 0 }), (r) => r.index < e.length ? { done: !1, value: e[r.index++] } : nt);
  }
  return t.length > 1 ? new ir(() => ({ collIndex: 0, arrIndex: 0 }), (e) => {
    do {
      if (e.iterator) {
        const r = e.iterator.next();
        if (!r.done)
          return r;
        e.iterator = void 0;
      }
      if (e.array) {
        if (e.arrIndex < e.array.length)
          return { done: !1, value: e.array[e.arrIndex++] };
        e.array = void 0, e.arrIndex = 0;
      }
      if (e.collIndex < t.length) {
        const r = t[e.collIndex++];
        Yl(r) ? e.iterator = r[Symbol.iterator]() : r && typeof r.length == "number" && (e.array = r);
      }
    } while (e.iterator || e.array || e.collIndex < t.length);
    return nt;
  }) : bo;
}
s(ue, "stream");
var za, So = (za = class extends ir {
  constructor(e, r, n) {
    super(() => ({
      iterators: n?.includeRoot ? [[e][Symbol.iterator]()] : [r(e)[Symbol.iterator]()],
      pruned: !1
    }), (a) => {
      for (a.pruned && (a.iterators.pop(), a.pruned = !1); a.iterators.length > 0; ) {
        const o = a.iterators[a.iterators.length - 1].next();
        if (o.done)
          a.iterators.pop();
        else
          return a.iterators.push(r(o.value)[Symbol.iterator]()), o;
      }
      return nt;
    });
  }
  iterator() {
    const e = {
      state: this.startFn(),
      next: /* @__PURE__ */ s(() => this.nextFn(e.state), "next"),
      prune: /* @__PURE__ */ s(() => {
        e.state.pruned = !0;
      }, "prune"),
      [Symbol.iterator]: () => e
    };
    return e;
  }
}, s(za, "TreeStreamImpl"), za), Xl;
(function(t) {
  function e(i) {
    return i.reduce((o, c) => o + c, 0);
  }
  s(e, "sum"), t.sum = e;
  function r(i) {
    return i.reduce((o, c) => o * c, 0);
  }
  s(r, "product"), t.product = r;
  function n(i) {
    return i.reduce((o, c) => Math.min(o, c));
  }
  s(n, "min"), t.min = n;
  function a(i) {
    return i.reduce((o, c) => Math.max(o, c));
  }
  s(a, "max"), t.max = a;
})(Xl || (Xl = {}));
var Kh = {};
Jr(Kh, {
  assignMandatoryProperties: () => qh,
  copyAstNode: () => Eu,
  findRootNode: () => xa,
  getContainerOfType: () => zn,
  getDocument: () => Bt,
  getReferenceNodes: () => $u,
  hasContainerOfType: () => TT,
  linkContentToContainer: () => wo,
  streamAllContents: () => Lr,
  streamAst: () => Kt,
  streamContents: () => mc,
  streamReferences: () => Io
});
function wo(t, e = {}) {
  for (const [r, n] of Object.entries(t))
    r.startsWith("$") || (Array.isArray(n) ? n.forEach((a, i) => {
      Be(a) && (a.$container = t, a.$containerProperty = r, a.$containerIndex = i, e.deep && wo(a, e));
    }) : Be(n) && (n.$container = t, n.$containerProperty = r, e.deep && wo(n, e)));
}
s(wo, "linkContentToContainer");
function zn(t, e) {
  let r = t;
  for (; r; ) {
    if (e(r))
      return r;
    r = r.$container;
  }
}
s(zn, "getContainerOfType");
function TT(t, e) {
  let r = t;
  for (; r; ) {
    if (e(r))
      return !0;
    r = r.$container;
  }
  return !1;
}
s(TT, "hasContainerOfType");
function Bt(t) {
  const r = xa(t).$document;
  if (!r)
    throw new Error("AST node has no document.");
  return r;
}
s(Bt, "getDocument");
function xa(t) {
  for (; t.$container; )
    t = t.$container;
  return t;
}
s(xa, "findRootNode");
function $u(t) {
  return at(t) ? t.ref ? [t.ref] : [] : or(t) ? t.items.map((e) => e.ref) : [];
}
s($u, "getReferenceNodes");
function mc(t, e) {
  if (!t)
    throw new Error("Node must be an AstNode.");
  const r = e?.range;
  return new ir(() => ({
    keys: Object.keys(t),
    keyIndex: 0,
    arrayIndex: 0
  }), (n) => {
    for (; n.keyIndex < n.keys.length; ) {
      const a = n.keys[n.keyIndex];
      if (!a.startsWith("$")) {
        const i = t[a];
        if (Be(i)) {
          if (n.keyIndex++, Au(i, r))
            return { done: !1, value: i };
        } else if (Array.isArray(i)) {
          for (; n.arrayIndex < i.length; ) {
            const o = n.arrayIndex++, c = i[o];
            if (Be(c) && Au(c, r))
              return { done: !1, value: c };
          }
          n.arrayIndex = 0;
        }
      }
      n.keyIndex++;
    }
    return nt;
  });
}
s(mc, "streamContents");
function Lr(t, e) {
  if (!t)
    throw new Error("Root node must be an AstNode.");
  return new So(t, (r) => mc(r, e));
}
s(Lr, "streamAllContents");
function Kt(t, e) {
  if (t) {
    if (e?.range && !Au(t, e.range))
      return new So(t, () => []);
  } else throw new Error("Root node must be an AstNode.");
  return new So(t, (r) => mc(r, e), { includeRoot: !0 });
}
s(Kt, "streamAst");
function Au(t, e) {
  if (!e)
    return !0;
  const r = t.$cstNode?.range;
  return r ? hm(r, e) : !1;
}
s(Au, "isAstNodeInRange");
function Io(t) {
  return new ir(() => ({
    keys: Object.keys(t),
    keyIndex: 0,
    arrayIndex: 0
  }), (e) => {
    for (; e.keyIndex < e.keys.length; ) {
      const r = e.keys[e.keyIndex];
      if (!r.startsWith("$")) {
        const n = t[r];
        if (at(n) || or(n))
          return e.keyIndex++, { done: !1, value: { reference: n, container: t, property: r } };
        if (Array.isArray(n)) {
          for (; e.arrayIndex < n.length; ) {
            const a = e.arrayIndex++, i = n[a];
            if (at(i) || or(n))
              return { done: !1, value: { reference: i, container: t, property: r, index: a } };
          }
          e.arrayIndex = 0;
        }
      }
      e.keyIndex++;
    }
    return nt;
  });
}
s(Io, "streamReferences");
function qh(t, e) {
  const r = t.getTypeMetaData(e.$type), n = e;
  for (const a of Object.values(r.properties))
    a.defaultValue !== void 0 && n[a.name] === void 0 && (n[a.name] = Wh(a.defaultValue));
}
s(qh, "assignMandatoryProperties");
function Wh(t) {
  return Array.isArray(t) ? [...t.map(Wh)] : t;
}
s(Wh, "copyDefaultValue");
function Eu(t, e, r) {
  const n = { $type: t.$type };
  r && (r.set(t, n), r.set(n, t));
  for (const [a, i] of Object.entries(t))
    if (!a.startsWith("$"))
      if (Be(i))
        n[a] = Eu(i, e, r);
      else if (at(i))
        n[a] = e(n, a, i.$refNode, i.$refText, i);
      else if (Array.isArray(i)) {
        const o = [];
        for (const c of i)
          Be(c) ? o.push(Eu(c, e, r)) : at(c) ? o.push(e(n, a, c.$refNode, c.$refText, c)) : o.push(c);
        n[a] = o;
      } else
        n[a] = i;
  return wo(n, { deep: !0 }), n;
}
s(Eu, "copyAstNode");
var RT = {};
Jr(RT, {
  AbstractElement: () => dt,
  AbstractParserRule: () => Ll,
  AbstractRule: () => Ia,
  AbstractType: () => Tt,
  Action: () => jr,
  Alternatives: () => Dl,
  ArrayLiteral: () => _u,
  ArrayType: () => Cu,
  Assignment: () => Ur,
  BooleanLiteral: () => bu,
  CharacterRange: () => zr,
  Condition: () => Br,
  Conjunction: () => Ml,
  CrossReference: () => Kr,
  Disjunction: () => xl,
  EndOfFile: () => Su,
  Grammar: () => $r,
  GrammarImport: () => wu,
  Group: () => yn,
  InferredType: () => Iu,
  InfixRule: () => rr,
  InfixRuleOperatorList: () => Fl,
  InfixRuleOperators: () => Nu,
  Interface: () => Na,
  Keyword: () => ka,
  LangiumGrammarAstReflection: () => fm,
  LangiumGrammarTerminals: () => gk,
  NamedArgument: () => Pa,
  NegatedToken: () => vn,
  Negation: () => ku,
  NumberLiteral: () => Pu,
  Parameter: () => Oa,
  ParameterReference: () => Ou,
  ParserRule: () => jt,
  ReferenceType: () => Gl,
  RegexToken: () => Tn,
  ReturnType: () => Lu,
  RuleCall: () => Rn,
  SimpleType: () => La,
  StringLiteral: () => Du,
  TerminalAlternatives: () => $n,
  TerminalElement: () => pt,
  TerminalGroup: () => An,
  TerminalRule: () => Ar,
  TerminalRuleCall: () => En,
  Type: () => jl,
  TypeAttribute: () => _n,
  TypeDefinition: () => Cn,
  UnionType: () => Mu,
  UnorderedGroup: () => Ul,
  UntilToken: () => bn,
  ValueLiteral: () => Sn,
  Wildcard: () => Da,
  isAbstractElement: () => pf,
  isAbstractParserRule: () => Bn,
  isAbstractRule: () => $T,
  isAbstractType: () => AT,
  isAction: () => Wr,
  isAlternatives: () => hf,
  isArrayLiteral: () => ET,
  isArrayType: () => Vh,
  isAssignment: () => Cr,
  isBooleanLiteral: () => Hh,
  isCharacterRange: () => Yh,
  isCondition: () => _T,
  isConjunction: () => Xh,
  isCrossReference: () => Kn,
  isDisjunction: () => Jh,
  isEndOfFile: () => Zh,
  isGrammar: () => CT,
  isGrammarImport: () => bT,
  isGroup: () => qn,
  isInferredType: () => gc,
  isInfixRule: () => No,
  isInfixRuleOperatorList: () => ST,
  isInfixRuleOperators: () => wT,
  isInterface: () => Qh,
  isKeyword: () => br,
  isNamedArgument: () => IT,
  isNegatedToken: () => em,
  isNegation: () => tm,
  isNumberLiteral: () => NT,
  isParameter: () => kT,
  isParameterReference: () => rm,
  isParserRule: () => ot,
  isReferenceType: () => nm,
  isRegexToken: () => am,
  isReturnType: () => im,
  isRuleCall: () => Sr,
  isSimpleType: () => mf,
  isStringLiteral: () => PT,
  isTerminalAlternatives: () => sm,
  isTerminalElement: () => OT,
  isTerminalGroup: () => om,
  isTerminalRule: () => xt,
  isTerminalRuleCall: () => gf,
  isType: () => yf,
  isTypeAttribute: () => LT,
  isTypeDefinition: () => DT,
  isUnionType: () => lm,
  isUnorderedGroup: () => vf,
  isUntilToken: () => cm,
  isValueLiteral: () => MT,
  isWildcard: () => um,
  reflection: () => K
});
var gk = {
  ID: /\^?[_a-zA-Z][\w_]*/,
  STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
  NUMBER: /NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,
  RegexLiteral: /\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,
  WS: /\s+/,
  ML_COMMENT: /\/\*[\s\S]*?\*\//,
  SL_COMMENT: /\/\/[^\n\r]*/
}, dt = {
  $type: "AbstractElement",
  cardinality: "cardinality"
};
function pf(t) {
  return K.isInstance(t, dt.$type);
}
s(pf, "isAbstractElement");
var Ll = {
  $type: "AbstractParserRule"
};
function Bn(t) {
  return K.isInstance(t, Ll.$type);
}
s(Bn, "isAbstractParserRule");
var Ia = {
  $type: "AbstractRule"
};
function $T(t) {
  return K.isInstance(t, Ia.$type);
}
s($T, "isAbstractRule");
var Tt = {
  $type: "AbstractType"
};
function AT(t) {
  return K.isInstance(t, Tt.$type);
}
s(AT, "isAbstractType");
var jr = {
  $type: "Action",
  cardinality: "cardinality",
  feature: "feature",
  inferredType: "inferredType",
  operator: "operator",
  type: "type"
};
function Wr(t) {
  return K.isInstance(t, jr.$type);
}
s(Wr, "isAction");
var Dl = {
  $type: "Alternatives",
  cardinality: "cardinality",
  elements: "elements"
};
function hf(t) {
  return K.isInstance(t, Dl.$type);
}
s(hf, "isAlternatives");
var _u = {
  $type: "ArrayLiteral",
  elements: "elements"
};
function ET(t) {
  return K.isInstance(t, _u.$type);
}
s(ET, "isArrayLiteral");
var Cu = {
  $type: "ArrayType",
  elementType: "elementType"
};
function Vh(t) {
  return K.isInstance(t, Cu.$type);
}
s(Vh, "isArrayType");
var Ur = {
  $type: "Assignment",
  cardinality: "cardinality",
  feature: "feature",
  operator: "operator",
  predicate: "predicate",
  terminal: "terminal"
};
function Cr(t) {
  return K.isInstance(t, Ur.$type);
}
s(Cr, "isAssignment");
var bu = {
  $type: "BooleanLiteral",
  true: "true"
};
function Hh(t) {
  return K.isInstance(t, bu.$type);
}
s(Hh, "isBooleanLiteral");
var zr = {
  $type: "CharacterRange",
  cardinality: "cardinality",
  left: "left",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  right: "right"
};
function Yh(t) {
  return K.isInstance(t, zr.$type);
}
s(Yh, "isCharacterRange");
var Br = {
  $type: "Condition"
};
function _T(t) {
  return K.isInstance(t, Br.$type);
}
s(_T, "isCondition");
var Ml = {
  $type: "Conjunction",
  left: "left",
  right: "right"
};
function Xh(t) {
  return K.isInstance(t, Ml.$type);
}
s(Xh, "isConjunction");
var Kr = {
  $type: "CrossReference",
  cardinality: "cardinality",
  deprecatedSyntax: "deprecatedSyntax",
  isMulti: "isMulti",
  terminal: "terminal",
  type: "type"
};
function Kn(t) {
  return K.isInstance(t, Kr.$type);
}
s(Kn, "isCrossReference");
var xl = {
  $type: "Disjunction",
  left: "left",
  right: "right"
};
function Jh(t) {
  return K.isInstance(t, xl.$type);
}
s(Jh, "isDisjunction");
var Su = {
  $type: "EndOfFile",
  cardinality: "cardinality"
};
function Zh(t) {
  return K.isInstance(t, Su.$type);
}
s(Zh, "isEndOfFile");
var $r = {
  $type: "Grammar",
  imports: "imports",
  interfaces: "interfaces",
  isDeclared: "isDeclared",
  name: "name",
  rules: "rules",
  types: "types"
};
function CT(t) {
  return K.isInstance(t, $r.$type);
}
s(CT, "isGrammar");
var wu = {
  $type: "GrammarImport",
  path: "path"
};
function bT(t) {
  return K.isInstance(t, wu.$type);
}
s(bT, "isGrammarImport");
var yn = {
  $type: "Group",
  cardinality: "cardinality",
  elements: "elements",
  guardCondition: "guardCondition",
  predicate: "predicate"
};
function qn(t) {
  return K.isInstance(t, yn.$type);
}
s(qn, "isGroup");
var Iu = {
  $type: "InferredType",
  name: "name"
};
function gc(t) {
  return K.isInstance(t, Iu.$type);
}
s(gc, "isInferredType");
var rr = {
  $type: "InfixRule",
  call: "call",
  dataType: "dataType",
  inferredType: "inferredType",
  name: "name",
  operators: "operators",
  parameters: "parameters",
  returnType: "returnType"
};
function No(t) {
  return K.isInstance(t, rr.$type);
}
s(No, "isInfixRule");
var Fl = {
  $type: "InfixRuleOperatorList",
  associativity: "associativity",
  operators: "operators"
};
function ST(t) {
  return K.isInstance(t, Fl.$type);
}
s(ST, "isInfixRuleOperatorList");
var Nu = {
  $type: "InfixRuleOperators",
  precedences: "precedences"
};
function wT(t) {
  return K.isInstance(t, Nu.$type);
}
s(wT, "isInfixRuleOperators");
var Na = {
  $type: "Interface",
  attributes: "attributes",
  name: "name",
  superTypes: "superTypes"
};
function Qh(t) {
  return K.isInstance(t, Na.$type);
}
s(Qh, "isInterface");
var ka = {
  $type: "Keyword",
  cardinality: "cardinality",
  predicate: "predicate",
  value: "value"
};
function br(t) {
  return K.isInstance(t, ka.$type);
}
s(br, "isKeyword");
var Pa = {
  $type: "NamedArgument",
  calledByName: "calledByName",
  parameter: "parameter",
  value: "value"
};
function IT(t) {
  return K.isInstance(t, Pa.$type);
}
s(IT, "isNamedArgument");
var vn = {
  $type: "NegatedToken",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  terminal: "terminal"
};
function em(t) {
  return K.isInstance(t, vn.$type);
}
s(em, "isNegatedToken");
var ku = {
  $type: "Negation",
  value: "value"
};
function tm(t) {
  return K.isInstance(t, ku.$type);
}
s(tm, "isNegation");
var Pu = {
  $type: "NumberLiteral",
  value: "value"
};
function NT(t) {
  return K.isInstance(t, Pu.$type);
}
s(NT, "isNumberLiteral");
var Oa = {
  $type: "Parameter",
  name: "name"
};
function kT(t) {
  return K.isInstance(t, Oa.$type);
}
s(kT, "isParameter");
var Ou = {
  $type: "ParameterReference",
  parameter: "parameter"
};
function rm(t) {
  return K.isInstance(t, Ou.$type);
}
s(rm, "isParameterReference");
var jt = {
  $type: "ParserRule",
  dataType: "dataType",
  definition: "definition",
  entry: "entry",
  fragment: "fragment",
  inferredType: "inferredType",
  name: "name",
  parameters: "parameters",
  returnType: "returnType"
};
function ot(t) {
  return K.isInstance(t, jt.$type);
}
s(ot, "isParserRule");
var Gl = {
  $type: "ReferenceType",
  isMulti: "isMulti",
  referenceType: "referenceType"
};
function nm(t) {
  return K.isInstance(t, Gl.$type);
}
s(nm, "isReferenceType");
var Tn = {
  $type: "RegexToken",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  regex: "regex"
};
function am(t) {
  return K.isInstance(t, Tn.$type);
}
s(am, "isRegexToken");
var Lu = {
  $type: "ReturnType",
  name: "name"
};
function im(t) {
  return K.isInstance(t, Lu.$type);
}
s(im, "isReturnType");
var Rn = {
  $type: "RuleCall",
  arguments: "arguments",
  cardinality: "cardinality",
  predicate: "predicate",
  rule: "rule"
};
function Sr(t) {
  return K.isInstance(t, Rn.$type);
}
s(Sr, "isRuleCall");
var La = {
  $type: "SimpleType",
  primitiveType: "primitiveType",
  stringType: "stringType",
  typeRef: "typeRef"
};
function mf(t) {
  return K.isInstance(t, La.$type);
}
s(mf, "isSimpleType");
var Du = {
  $type: "StringLiteral",
  value: "value"
};
function PT(t) {
  return K.isInstance(t, Du.$type);
}
s(PT, "isStringLiteral");
var $n = {
  $type: "TerminalAlternatives",
  cardinality: "cardinality",
  elements: "elements",
  lookahead: "lookahead",
  parenthesized: "parenthesized"
};
function sm(t) {
  return K.isInstance(t, $n.$type);
}
s(sm, "isTerminalAlternatives");
var pt = {
  $type: "TerminalElement",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized"
};
function OT(t) {
  return K.isInstance(t, pt.$type);
}
s(OT, "isTerminalElement");
var An = {
  $type: "TerminalGroup",
  cardinality: "cardinality",
  elements: "elements",
  lookahead: "lookahead",
  parenthesized: "parenthesized"
};
function om(t) {
  return K.isInstance(t, An.$type);
}
s(om, "isTerminalGroup");
var Ar = {
  $type: "TerminalRule",
  definition: "definition",
  fragment: "fragment",
  hidden: "hidden",
  name: "name",
  type: "type"
};
function xt(t) {
  return K.isInstance(t, Ar.$type);
}
s(xt, "isTerminalRule");
var En = {
  $type: "TerminalRuleCall",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  rule: "rule"
};
function gf(t) {
  return K.isInstance(t, En.$type);
}
s(gf, "isTerminalRuleCall");
var jl = {
  $type: "Type",
  name: "name",
  type: "type"
};
function yf(t) {
  return K.isInstance(t, jl.$type);
}
s(yf, "isType");
var _n = {
  $type: "TypeAttribute",
  defaultValue: "defaultValue",
  isOptional: "isOptional",
  name: "name",
  type: "type"
};
function LT(t) {
  return K.isInstance(t, _n.$type);
}
s(LT, "isTypeAttribute");
var Cn = {
  $type: "TypeDefinition"
};
function DT(t) {
  return K.isInstance(t, Cn.$type);
}
s(DT, "isTypeDefinition");
var Mu = {
  $type: "UnionType",
  types: "types"
};
function lm(t) {
  return K.isInstance(t, Mu.$type);
}
s(lm, "isUnionType");
var Ul = {
  $type: "UnorderedGroup",
  cardinality: "cardinality",
  elements: "elements"
};
function vf(t) {
  return K.isInstance(t, Ul.$type);
}
s(vf, "isUnorderedGroup");
var bn = {
  $type: "UntilToken",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized",
  terminal: "terminal"
};
function cm(t) {
  return K.isInstance(t, bn.$type);
}
s(cm, "isUntilToken");
var Sn = {
  $type: "ValueLiteral"
};
function MT(t) {
  return K.isInstance(t, Sn.$type);
}
s(MT, "isValueLiteral");
var Da = {
  $type: "Wildcard",
  cardinality: "cardinality",
  lookahead: "lookahead",
  parenthesized: "parenthesized"
};
function um(t) {
  return K.isInstance(t, Da.$type);
}
s(um, "isWildcard");
var Ba, fm = (Ba = class extends Bh {
  constructor() {
    super(...arguments), this.types = {
      AbstractElement: {
        name: dt.$type,
        properties: {
          cardinality: {
            name: dt.cardinality
          }
        },
        superTypes: []
      },
      AbstractParserRule: {
        name: Ll.$type,
        properties: {},
        superTypes: [Ia.$type, Tt.$type]
      },
      AbstractRule: {
        name: Ia.$type,
        properties: {},
        superTypes: []
      },
      AbstractType: {
        name: Tt.$type,
        properties: {},
        superTypes: []
      },
      Action: {
        name: jr.$type,
        properties: {
          cardinality: {
            name: jr.cardinality
          },
          feature: {
            name: jr.feature
          },
          inferredType: {
            name: jr.inferredType
          },
          operator: {
            name: jr.operator
          },
          type: {
            name: jr.type,
            referenceType: Tt.$type
          }
        },
        superTypes: [dt.$type]
      },
      Alternatives: {
        name: Dl.$type,
        properties: {
          cardinality: {
            name: Dl.cardinality
          },
          elements: {
            name: Dl.elements,
            defaultValue: []
          }
        },
        superTypes: [dt.$type]
      },
      ArrayLiteral: {
        name: _u.$type,
        properties: {
          elements: {
            name: _u.elements,
            defaultValue: []
          }
        },
        superTypes: [Sn.$type]
      },
      ArrayType: {
        name: Cu.$type,
        properties: {
          elementType: {
            name: Cu.elementType
          }
        },
        superTypes: [Cn.$type]
      },
      Assignment: {
        name: Ur.$type,
        properties: {
          cardinality: {
            name: Ur.cardinality
          },
          feature: {
            name: Ur.feature
          },
          operator: {
            name: Ur.operator
          },
          predicate: {
            name: Ur.predicate
          },
          terminal: {
            name: Ur.terminal
          }
        },
        superTypes: [dt.$type]
      },
      BooleanLiteral: {
        name: bu.$type,
        properties: {
          true: {
            name: bu.true,
            defaultValue: !1
          }
        },
        superTypes: [Br.$type, Sn.$type]
      },
      CharacterRange: {
        name: zr.$type,
        properties: {
          cardinality: {
            name: zr.cardinality
          },
          left: {
            name: zr.left
          },
          lookahead: {
            name: zr.lookahead
          },
          parenthesized: {
            name: zr.parenthesized,
            defaultValue: !1
          },
          right: {
            name: zr.right
          }
        },
        superTypes: [pt.$type]
      },
      Condition: {
        name: Br.$type,
        properties: {},
        superTypes: []
      },
      Conjunction: {
        name: Ml.$type,
        properties: {
          left: {
            name: Ml.left
          },
          right: {
            name: Ml.right
          }
        },
        superTypes: [Br.$type]
      },
      CrossReference: {
        name: Kr.$type,
        properties: {
          cardinality: {
            name: Kr.cardinality
          },
          deprecatedSyntax: {
            name: Kr.deprecatedSyntax,
            defaultValue: !1
          },
          isMulti: {
            name: Kr.isMulti,
            defaultValue: !1
          },
          terminal: {
            name: Kr.terminal
          },
          type: {
            name: Kr.type,
            referenceType: Tt.$type
          }
        },
        superTypes: [dt.$type]
      },
      Disjunction: {
        name: xl.$type,
        properties: {
          left: {
            name: xl.left
          },
          right: {
            name: xl.right
          }
        },
        superTypes: [Br.$type]
      },
      EndOfFile: {
        name: Su.$type,
        properties: {
          cardinality: {
            name: Su.cardinality
          }
        },
        superTypes: [dt.$type]
      },
      Grammar: {
        name: $r.$type,
        properties: {
          imports: {
            name: $r.imports,
            defaultValue: []
          },
          interfaces: {
            name: $r.interfaces,
            defaultValue: []
          },
          isDeclared: {
            name: $r.isDeclared,
            defaultValue: !1
          },
          name: {
            name: $r.name
          },
          rules: {
            name: $r.rules,
            defaultValue: []
          },
          types: {
            name: $r.types,
            defaultValue: []
          }
        },
        superTypes: []
      },
      GrammarImport: {
        name: wu.$type,
        properties: {
          path: {
            name: wu.path
          }
        },
        superTypes: []
      },
      Group: {
        name: yn.$type,
        properties: {
          cardinality: {
            name: yn.cardinality
          },
          elements: {
            name: yn.elements,
            defaultValue: []
          },
          guardCondition: {
            name: yn.guardCondition
          },
          predicate: {
            name: yn.predicate
          }
        },
        superTypes: [dt.$type]
      },
      InferredType: {
        name: Iu.$type,
        properties: {
          name: {
            name: Iu.name
          }
        },
        superTypes: [Tt.$type]
      },
      InfixRule: {
        name: rr.$type,
        properties: {
          call: {
            name: rr.call
          },
          dataType: {
            name: rr.dataType
          },
          inferredType: {
            name: rr.inferredType
          },
          name: {
            name: rr.name
          },
          operators: {
            name: rr.operators
          },
          parameters: {
            name: rr.parameters,
            defaultValue: []
          },
          returnType: {
            name: rr.returnType,
            referenceType: Tt.$type
          }
        },
        superTypes: [Ll.$type]
      },
      InfixRuleOperatorList: {
        name: Fl.$type,
        properties: {
          associativity: {
            name: Fl.associativity
          },
          operators: {
            name: Fl.operators,
            defaultValue: []
          }
        },
        superTypes: []
      },
      InfixRuleOperators: {
        name: Nu.$type,
        properties: {
          precedences: {
            name: Nu.precedences,
            defaultValue: []
          }
        },
        superTypes: []
      },
      Interface: {
        name: Na.$type,
        properties: {
          attributes: {
            name: Na.attributes,
            defaultValue: []
          },
          name: {
            name: Na.name
          },
          superTypes: {
            name: Na.superTypes,
            defaultValue: [],
            referenceType: Tt.$type
          }
        },
        superTypes: [Tt.$type]
      },
      Keyword: {
        name: ka.$type,
        properties: {
          cardinality: {
            name: ka.cardinality
          },
          predicate: {
            name: ka.predicate
          },
          value: {
            name: ka.value
          }
        },
        superTypes: [dt.$type]
      },
      NamedArgument: {
        name: Pa.$type,
        properties: {
          calledByName: {
            name: Pa.calledByName,
            defaultValue: !1
          },
          parameter: {
            name: Pa.parameter,
            referenceType: Oa.$type
          },
          value: {
            name: Pa.value
          }
        },
        superTypes: []
      },
      NegatedToken: {
        name: vn.$type,
        properties: {
          cardinality: {
            name: vn.cardinality
          },
          lookahead: {
            name: vn.lookahead
          },
          parenthesized: {
            name: vn.parenthesized,
            defaultValue: !1
          },
          terminal: {
            name: vn.terminal
          }
        },
        superTypes: [pt.$type]
      },
      Negation: {
        name: ku.$type,
        properties: {
          value: {
            name: ku.value
          }
        },
        superTypes: [Br.$type]
      },
      NumberLiteral: {
        name: Pu.$type,
        properties: {
          value: {
            name: Pu.value
          }
        },
        superTypes: [Sn.$type]
      },
      Parameter: {
        name: Oa.$type,
        properties: {
          name: {
            name: Oa.name
          }
        },
        superTypes: []
      },
      ParameterReference: {
        name: Ou.$type,
        properties: {
          parameter: {
            name: Ou.parameter,
            referenceType: Oa.$type
          }
        },
        superTypes: [Br.$type]
      },
      ParserRule: {
        name: jt.$type,
        properties: {
          dataType: {
            name: jt.dataType
          },
          definition: {
            name: jt.definition
          },
          entry: {
            name: jt.entry,
            defaultValue: !1
          },
          fragment: {
            name: jt.fragment,
            defaultValue: !1
          },
          inferredType: {
            name: jt.inferredType
          },
          name: {
            name: jt.name
          },
          parameters: {
            name: jt.parameters,
            defaultValue: []
          },
          returnType: {
            name: jt.returnType,
            referenceType: Tt.$type
          }
        },
        superTypes: [Ll.$type]
      },
      ReferenceType: {
        name: Gl.$type,
        properties: {
          isMulti: {
            name: Gl.isMulti,
            defaultValue: !1
          },
          referenceType: {
            name: Gl.referenceType
          }
        },
        superTypes: [Cn.$type]
      },
      RegexToken: {
        name: Tn.$type,
        properties: {
          cardinality: {
            name: Tn.cardinality
          },
          lookahead: {
            name: Tn.lookahead
          },
          parenthesized: {
            name: Tn.parenthesized,
            defaultValue: !1
          },
          regex: {
            name: Tn.regex
          }
        },
        superTypes: [pt.$type]
      },
      ReturnType: {
        name: Lu.$type,
        properties: {
          name: {
            name: Lu.name
          }
        },
        superTypes: []
      },
      RuleCall: {
        name: Rn.$type,
        properties: {
          arguments: {
            name: Rn.arguments,
            defaultValue: []
          },
          cardinality: {
            name: Rn.cardinality
          },
          predicate: {
            name: Rn.predicate
          },
          rule: {
            name: Rn.rule,
            referenceType: Ia.$type
          }
        },
        superTypes: [dt.$type]
      },
      SimpleType: {
        name: La.$type,
        properties: {
          primitiveType: {
            name: La.primitiveType
          },
          stringType: {
            name: La.stringType
          },
          typeRef: {
            name: La.typeRef,
            referenceType: Tt.$type
          }
        },
        superTypes: [Cn.$type]
      },
      StringLiteral: {
        name: Du.$type,
        properties: {
          value: {
            name: Du.value
          }
        },
        superTypes: [Sn.$type]
      },
      TerminalAlternatives: {
        name: $n.$type,
        properties: {
          cardinality: {
            name: $n.cardinality
          },
          elements: {
            name: $n.elements,
            defaultValue: []
          },
          lookahead: {
            name: $n.lookahead
          },
          parenthesized: {
            name: $n.parenthesized,
            defaultValue: !1
          }
        },
        superTypes: [pt.$type]
      },
      TerminalElement: {
        name: pt.$type,
        properties: {
          cardinality: {
            name: pt.cardinality
          },
          lookahead: {
            name: pt.lookahead
          },
          parenthesized: {
            name: pt.parenthesized,
            defaultValue: !1
          }
        },
        superTypes: [dt.$type]
      },
      TerminalGroup: {
        name: An.$type,
        properties: {
          cardinality: {
            name: An.cardinality
          },
          elements: {
            name: An.elements,
            defaultValue: []
          },
          lookahead: {
            name: An.lookahead
          },
          parenthesized: {
            name: An.parenthesized,
            defaultValue: !1
          }
        },
        superTypes: [pt.$type]
      },
      TerminalRule: {
        name: Ar.$type,
        properties: {
          definition: {
            name: Ar.definition
          },
          fragment: {
            name: Ar.fragment,
            defaultValue: !1
          },
          hidden: {
            name: Ar.hidden,
            defaultValue: !1
          },
          name: {
            name: Ar.name
          },
          type: {
            name: Ar.type
          }
        },
        superTypes: [Ia.$type]
      },
      TerminalRuleCall: {
        name: En.$type,
        properties: {
          cardinality: {
            name: En.cardinality
          },
          lookahead: {
            name: En.lookahead
          },
          parenthesized: {
            name: En.parenthesized,
            defaultValue: !1
          },
          rule: {
            name: En.rule,
            referenceType: Ar.$type
          }
        },
        superTypes: [pt.$type]
      },
      Type: {
        name: jl.$type,
        properties: {
          name: {
            name: jl.name
          },
          type: {
            name: jl.type
          }
        },
        superTypes: [Tt.$type]
      },
      TypeAttribute: {
        name: _n.$type,
        properties: {
          defaultValue: {
            name: _n.defaultValue
          },
          isOptional: {
            name: _n.isOptional,
            defaultValue: !1
          },
          name: {
            name: _n.name
          },
          type: {
            name: _n.type
          }
        },
        superTypes: []
      },
      TypeDefinition: {
        name: Cn.$type,
        properties: {},
        superTypes: []
      },
      UnionType: {
        name: Mu.$type,
        properties: {
          types: {
            name: Mu.types,
            defaultValue: []
          }
        },
        superTypes: [Cn.$type]
      },
      UnorderedGroup: {
        name: Ul.$type,
        properties: {
          cardinality: {
            name: Ul.cardinality
          },
          elements: {
            name: Ul.elements,
            defaultValue: []
          }
        },
        superTypes: [dt.$type]
      },
      UntilToken: {
        name: bn.$type,
        properties: {
          cardinality: {
            name: bn.cardinality
          },
          lookahead: {
            name: bn.lookahead
          },
          parenthesized: {
            name: bn.parenthesized,
            defaultValue: !1
          },
          terminal: {
            name: bn.terminal
          }
        },
        superTypes: [pt.$type]
      },
      ValueLiteral: {
        name: Sn.$type,
        properties: {},
        superTypes: []
      },
      Wildcard: {
        name: Da.$type,
        properties: {
          cardinality: {
            name: Da.cardinality
          },
          lookahead: {
            name: Da.lookahead
          },
          parenthesized: {
            name: Da.parenthesized,
            defaultValue: !1
          }
        },
        superTypes: [pt.$type]
      }
    };
  }
}, s(Ba, "LangiumGrammarAstReflection"), Ba), K = new fm();
function xT(t) {
  let e = t, r = !1;
  for (; e; ) {
    const n = zn(e.grammarSource, ot);
    if (n && n.dataType)
      e = e.container, r = !0;
    else return r ? e : void 0;
  }
}
s(xT, "getDatatypeNode");
function ko(t) {
  return new So(t, (e) => _r(e) ? e.content : [], { includeRoot: !0 });
}
s(ko, "streamCst");
function FT(t) {
  return ko(t).filter(Un);
}
s(FT, "flattenCst");
function dm(t, e) {
  for (; t.container; )
    if (t = t.container, t === e)
      return !0;
  return !1;
}
s(dm, "isChildNode");
function Jl(t) {
  return {
    start: {
      character: t.startColumn - 1,
      line: t.startLine - 1
    },
    end: {
      character: t.endColumn,
      // endColumn uses the correct index
      line: t.endLine - 1
    }
  };
}
s(Jl, "tokenToRange");
function Po(t) {
  if (!t)
    return;
  const { offset: e, end: r, range: n } = t;
  return {
    range: n,
    offset: e,
    end: r,
    length: r - e
  };
}
s(Po, "toDocumentSegment");
var ar;
(function(t) {
  t[t.Before = 0] = "Before", t[t.After = 1] = "After", t[t.OverlapFront = 2] = "OverlapFront", t[t.OverlapBack = 3] = "OverlapBack", t[t.Inside = 4] = "Inside", t[t.Outside = 5] = "Outside";
})(ar || (ar = {}));
function pm(t, e) {
  if (t.end.line < e.start.line || t.end.line === e.start.line && t.end.character <= e.start.character)
    return ar.Before;
  if (t.start.line > e.end.line || t.start.line === e.end.line && t.start.character >= e.end.character)
    return ar.After;
  const r = t.start.line > e.start.line || t.start.line === e.start.line && t.start.character >= e.start.character, n = t.end.line < e.end.line || t.end.line === e.end.line && t.end.character <= e.end.character;
  return r && n ? ar.Inside : r ? ar.OverlapBack : n ? ar.OverlapFront : ar.Outside;
}
s(pm, "compareRange");
function hm(t, e) {
  return pm(t, e) > ar.After;
}
s(hm, "inRange");
var mm = /^[\w\p{L}]$/u;
function GT(t, e, r = mm) {
  if (t) {
    if (e > 0) {
      const n = e - t.offset, a = t.text.charAt(n);
      r.test(a) || e--;
    }
    return Tf(t, e);
  }
}
s(GT, "findDeclarationNodeAtOffset");
function gm(t, e) {
  if (t) {
    const r = Tm(t, !0);
    if (r && xu(r, e))
      return r;
    if (df(t)) {
      const n = t.content.findIndex((a) => !a.hidden);
      for (let a = n - 1; a >= 0; a--) {
        const i = t.content[a];
        if (xu(i, e))
          return i;
      }
    }
  }
}
s(gm, "findCommentNode");
function xu(t, e) {
  return Un(t) && e.includes(t.tokenType.name);
}
s(xu, "isCommentNode");
function Tf(t, e) {
  if (Un(t))
    return t;
  if (_r(t)) {
    const r = vm(t, e, !1);
    if (r)
      return Tf(r, e);
  }
}
s(Tf, "findLeafNodeAtOffset");
function ym(t, e) {
  if (Un(t))
    return t;
  if (_r(t)) {
    const r = vm(t, e, !0);
    if (r)
      return ym(r, e);
  }
}
s(ym, "findLeafNodeBeforeOffset");
function vm(t, e, r) {
  let n = 0, a = t.content.length - 1, i;
  for (; n <= a; ) {
    const o = Math.floor((n + a) / 2), c = t.content[o];
    if (c.offset <= e && c.end > e)
      return c;
    c.end <= e ? (i = r ? c : void 0, n = o + 1) : a = o - 1;
  }
  return i;
}
s(vm, "binarySearch");
function Tm(t, e = !0) {
  for (; t.container; ) {
    const r = t.container;
    let n = r.content.indexOf(t);
    for (; n > 0; ) {
      n--;
      const a = r.content[n];
      if (e || !a.hidden)
        return a;
    }
    t = r;
  }
}
s(Tm, "getPreviousNode");
function jT(t, e = !0) {
  for (; t.container; ) {
    const r = t.container;
    let n = r.content.indexOf(t);
    const a = r.content.length - 1;
    for (; n < a; ) {
      n++;
      const i = r.content[n];
      if (e || !i.hidden)
        return i;
    }
    t = r;
  }
}
s(jT, "getNextNode");
function UT(t) {
  if (t.range.start.character === 0)
    return t;
  const e = t.range.start.line;
  let r = t, n;
  for (; t.container; ) {
    const a = t.container, i = n ?? a.content.indexOf(t);
    if (i === 0 ? (t = a, n = void 0) : (n = i - 1, t = a.content[n]), t.range.start.line !== e)
      break;
    r = t;
  }
  return r;
}
s(UT, "getStartlineNode");
function zT(t, e) {
  const r = BT(t, e);
  return r ? r.parent.content.slice(r.a + 1, r.b) : [];
}
s(zT, "getInteriorNodes");
function BT(t, e) {
  const r = Bp(t), n = Bp(e);
  let a;
  for (let i = 0; i < r.length && i < n.length; i++) {
    const o = r[i], c = n[i];
    if (o.parent === c.parent)
      a = {
        parent: o.parent,
        a: o.index,
        b: c.index
      };
    else
      break;
  }
  return a;
}
s(BT, "getCommonParent");
function Bp(t) {
  const e = [];
  for (; t.container; ) {
    const r = t.container, n = r.content.indexOf(t);
    e.push({
      parent: r,
      index: n
    }), t = r;
  }
  return e.reverse();
}
s(Bp, "getParentChain");
var Rm = {};
Jr(Rm, {
  findAssignment: () => Om,
  findNameAssignment: () => Sf,
  findNodeForKeyword: () => Pm,
  findNodeForProperty: () => _f,
  findNodesForKeyword: () => JT,
  findNodesForKeywordInternal: () => bf,
  findNodesForProperty: () => km,
  getActionAtElement: () => Dm,
  getActionType: () => xm,
  getAllReachableRules: () => Ef,
  getAllRulesUsedForCrossReferences: () => XT,
  getCrossReferenceTerminal: () => Im,
  getEntryRule: () => bm,
  getExplicitRuleType: () => vc,
  getHiddenRules: () => Sm,
  getRuleType: () => Fm,
  getRuleTypeName: () => rR,
  getTypeName: () => Mn,
  isArrayCardinality: () => QT,
  isArrayOperator: () => eR,
  isCommentTerminal: () => Nm,
  isDataType: () => tR,
  isDataTypeRule: () => yc,
  isOptionalCardinality: () => ZT,
  terminalRegex: () => Tc
});
var Ka, Rf = (Ka = class extends Error {
  constructor(e, r) {
    super(e ? `${r} at ${e.range.start.line}:${e.range.start.character}` : r);
  }
}, s(Ka, "ErrorWithLocation"), Ka);
function Zr(t, e = "Error: Got unexpected value.") {
  throw new Error(e);
}
s(Zr, "assertUnreachable");
function $m(t, e = "Error: Condition is violated.") {
  if (!t)
    throw new Error(e);
}
s($m, "assertCondition");
var Am = {};
Jr(Am, {
  NEWLINE_REGEXP: () => WT,
  escapeRegExp: () => jo,
  getTerminalParts: () => HT,
  isMultilineComment: () => Em,
  isWhitespace: () => Af,
  partialMatches: () => _m,
  partialRegExp: () => Cm,
  whitespaceCharacters: () => YT
});
function W(t) {
  return t.charCodeAt(0);
}
s(W, "cc");
function su(t, e) {
  Array.isArray(t) ? t.forEach(function(r) {
    e.push(r);
  }) : e.push(t);
}
s(su, "insertToSet");
function Aa(t, e) {
  if (t[e] === !0)
    throw "duplicate flag " + e;
  t[e], t[e] = !0;
}
s(Aa, "addFlag");
function un(t) {
  if (t === void 0)
    throw Error("Internal Error - Should never get here!");
  return !0;
}
s(un, "ASSERT_EXISTS");
function KT() {
  throw Error("Internal Error - Should never get here!");
}
s(KT, "ASSERT_NEVER_REACH_HERE");
function Kp(t) {
  return t.type === "Character";
}
s(Kp, "isCharacter");
var Fu = [];
for (let t = W("0"); t <= W("9"); t++)
  Fu.push(t);
var Gu = [W("_")].concat(Fu);
for (let t = W("a"); t <= W("z"); t++)
  Gu.push(t);
for (let t = W("A"); t <= W("Z"); t++)
  Gu.push(t);
var _y = [
  W(" "),
  W("\f"),
  W(`
`),
  W("\r"),
  W("	"),
  W("\v"),
  W("	"),
  W(" "),
  W(" "),
  W(" "),
  W(" "),
  W(" "),
  W(" "),
  W(" "),
  W(" "),
  W(" "),
  W(" "),
  W(" "),
  W(" "),
  W(" "),
  W("\u2028"),
  W("\u2029"),
  W(" "),
  W(" "),
  W("　"),
  W("\uFEFF")
], yk = /[0-9a-fA-F]/, Dc = /[0-9]/, vk = /[1-9]/, qa, qT = (qa = class {
  constructor() {
    this.idx = 0, this.input = "", this.groupIdx = 0;
  }
  saveState() {
    return {
      idx: this.idx,
      input: this.input,
      groupIdx: this.groupIdx
    };
  }
  restoreState(e) {
    this.idx = e.idx, this.input = e.input, this.groupIdx = e.groupIdx;
  }
  pattern(e) {
    this.idx = 0, this.input = e, this.groupIdx = 0, this.consumeChar("/");
    const r = this.disjunction();
    this.consumeChar("/");
    const n = {
      type: "Flags",
      loc: { begin: this.idx, end: e.length },
      global: !1,
      ignoreCase: !1,
      multiLine: !1,
      unicode: !1,
      sticky: !1
    };
    for (; this.isRegExpFlag(); )
      switch (this.popChar()) {
        case "g":
          Aa(n, "global");
          break;
        case "i":
          Aa(n, "ignoreCase");
          break;
        case "m":
          Aa(n, "multiLine");
          break;
        case "u":
          Aa(n, "unicode");
          break;
        case "y":
          Aa(n, "sticky");
          break;
      }
    if (this.idx !== this.input.length)
      throw Error("Redundant input: " + this.input.substring(this.idx));
    return {
      type: "Pattern",
      flags: n,
      value: r,
      loc: this.loc(0)
    };
  }
  disjunction() {
    const e = [], r = this.idx;
    for (e.push(this.alternative()); this.peekChar() === "|"; )
      this.consumeChar("|"), e.push(this.alternative());
    return { type: "Disjunction", value: e, loc: this.loc(r) };
  }
  alternative() {
    const e = [], r = this.idx;
    for (; this.isTerm(); )
      e.push(this.term());
    return { type: "Alternative", value: e, loc: this.loc(r) };
  }
  term() {
    return this.isAssertion() ? this.assertion() : this.atom();
  }
  assertion() {
    const e = this.idx;
    switch (this.popChar()) {
      case "^":
        return {
          type: "StartAnchor",
          loc: this.loc(e)
        };
      case "$":
        return { type: "EndAnchor", loc: this.loc(e) };
      // '\b' or '\B'
      case "\\":
        switch (this.popChar()) {
          case "b":
            return {
              type: "WordBoundary",
              loc: this.loc(e)
            };
          case "B":
            return {
              type: "NonWordBoundary",
              loc: this.loc(e)
            };
        }
        throw Error("Invalid Assertion Escape");
      // '(?=' or '(?!'
      case "(":
        this.consumeChar("?");
        let r;
        switch (this.popChar()) {
          case "=":
            r = "Lookahead";
            break;
          case "!":
            r = "NegativeLookahead";
            break;
          case "<": {
            switch (this.popChar()) {
              case "=":
                r = "Lookbehind";
                break;
              case "!":
                r = "NegativeLookbehind";
            }
            break;
          }
        }
        un(r);
        const n = this.disjunction();
        return this.consumeChar(")"), {
          type: r,
          value: n,
          loc: this.loc(e)
        };
    }
    return KT();
  }
  quantifier(e = !1) {
    let r;
    const n = this.idx;
    switch (this.popChar()) {
      case "*":
        r = {
          atLeast: 0,
          atMost: 1 / 0
        };
        break;
      case "+":
        r = {
          atLeast: 1,
          atMost: 1 / 0
        };
        break;
      case "?":
        r = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        const a = this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            r = {
              atLeast: a,
              atMost: a
            };
            break;
          case ",":
            let i;
            this.isDigit() ? (i = this.integerIncludingZero(), r = {
              atLeast: a,
              atMost: i
            }) : r = {
              atLeast: a,
              atMost: 1 / 0
            }, this.consumeChar("}");
            break;
        }
        if (e === !0 && r === void 0)
          return;
        un(r);
        break;
    }
    if (!(e === !0 && r === void 0) && un(r))
      return this.peekChar(0) === "?" ? (this.consumeChar("?"), r.greedy = !1) : r.greedy = !0, r.type = "Quantifier", r.loc = this.loc(n), r;
  }
  atom() {
    let e;
    const r = this.idx;
    switch (this.peekChar()) {
      case ".":
        e = this.dotAll();
        break;
      case "\\":
        e = this.atomEscape();
        break;
      case "[":
        e = this.characterClass();
        break;
      case "(":
        e = this.group();
        break;
    }
    if (e === void 0 && this.isPatternCharacter() && (e = this.patternCharacter()), un(e))
      return e.loc = this.loc(r), this.isQuantifier() && (e.quantifier = this.quantifier()), e;
  }
  dotAll() {
    return this.consumeChar("."), {
      type: "Set",
      complement: !0,
      value: [W(`
`), W("\r"), W("\u2028"), W("\u2029")]
    };
  }
  atomEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return this.decimalEscapeAtom();
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    return { type: "GroupBackReference", value: this.positiveInteger() };
  }
  characterClassEscape() {
    let e, r = !1;
    switch (this.popChar()) {
      case "d":
        e = Fu;
        break;
      case "D":
        e = Fu, r = !0;
        break;
      case "s":
        e = _y;
        break;
      case "S":
        e = _y, r = !0;
        break;
      case "w":
        e = Gu;
        break;
      case "W":
        e = Gu, r = !0;
        break;
    }
    if (un(e))
      return { type: "Set", value: e, complement: r };
  }
  controlEscapeAtom() {
    let e;
    switch (this.popChar()) {
      case "f":
        e = W("\f");
        break;
      case "n":
        e = W(`
`);
        break;
      case "r":
        e = W("\r");
        break;
      case "t":
        e = W("	");
        break;
      case "v":
        e = W("\v");
        break;
    }
    if (un(e))
      return { type: "Character", value: e };
  }
  controlLetterEscapeAtom() {
    this.consumeChar("c");
    const e = this.popChar();
    if (/[a-zA-Z]/.test(e) === !1)
      throw Error("Invalid ");
    return { type: "Character", value: e.toUpperCase().charCodeAt(0) - 64 };
  }
  nulCharacterAtom() {
    return this.consumeChar("0"), { type: "Character", value: W("\0") };
  }
  hexEscapeSequenceAtom() {
    return this.consumeChar("x"), this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    return this.consumeChar("u"), this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const e = this.popChar();
    return { type: "Character", value: W(e) };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
      // istanbul ignore next
      case "\\":
      // istanbul ignore next
      case "]":
        throw Error("TBD");
      default:
        const e = this.popChar();
        return { type: "Character", value: W(e) };
    }
  }
  characterClass() {
    const e = [];
    let r = !1;
    for (this.consumeChar("["), this.peekChar(0) === "^" && (this.consumeChar("^"), r = !0); this.isClassAtom(); ) {
      const n = this.classAtom();
      if (n.type, Kp(n) && this.isRangeDash()) {
        this.consumeChar("-");
        const a = this.classAtom();
        if (a.type, Kp(a)) {
          if (a.value < n.value)
            throw Error("Range out of order in character class");
          e.push({ from: n.value, to: a.value });
        } else
          su(n.value, e), e.push(W("-")), su(a.value, e);
      } else
        su(n.value, e);
    }
    return this.consumeChar("]"), { type: "Set", complement: r, value: e };
  }
  classAtom() {
    switch (this.peekChar()) {
      // istanbul ignore next
      case "]":
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
        throw Error("TBD");
      case "\\":
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    switch (this.consumeChar("\\"), this.peekChar()) {
      // Matches a backspace.
      // (Not to be confused with \b word boundary outside characterClass)
      case "b":
        return this.consumeChar("b"), { type: "Character", value: W("\b") };
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let e = !0;
    this.consumeChar("("), this.peekChar(0) === "?" ? (this.consumeChar("?"), this.consumeChar(":"), e = !1) : this.groupIdx++;
    const r = this.disjunction();
    this.consumeChar(")");
    const n = {
      type: "Group",
      capturing: e,
      value: r
    };
    return e && (n.idx = this.groupIdx), n;
  }
  positiveInteger() {
    let e = this.popChar();
    if (vk.test(e) === !1)
      throw Error("Expecting a positive integer");
    for (; Dc.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  integerIncludingZero() {
    let e = this.popChar();
    if (Dc.test(e) === !1)
      throw Error("Expecting an integer");
    for (; Dc.test(this.peekChar(0)); )
      e += this.popChar();
    return parseInt(e, 10);
  }
  patternCharacter() {
    const e = this.popChar();
    switch (e) {
      // istanbul ignore next
      case `
`:
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
      // istanbul ignore next
      case "^":
      // istanbul ignore next
      case "$":
      // istanbul ignore next
      case "\\":
      // istanbul ignore next
      case ".":
      // istanbul ignore next
      case "*":
      // istanbul ignore next
      case "+":
      // istanbul ignore next
      case "?":
      // istanbul ignore next
      case "(":
      // istanbul ignore next
      case ")":
      // istanbul ignore next
      case "[":
      // istanbul ignore next
      case "|":
        throw Error("TBD");
      default:
        return { type: "Character", value: W(e) };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case "g":
      case "i":
      case "m":
      case "u":
      case "y":
        return !0;
      default:
        return !1;
    }
  }
  isRangeDash() {
    return this.peekChar() === "-" && this.isClassAtom(1);
  }
  isDigit() {
    return Dc.test(this.peekChar(0));
  }
  isClassAtom(e = 0) {
    switch (this.peekChar(e)) {
      case "]":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return !1;
      default:
        return !0;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter())
      return !0;
    switch (this.peekChar(0)) {
      case ".":
      case "\\":
      // atomEscape
      case "[":
      // characterClass
      // TODO: isAtom must be called before isAssertion - disambiguate
      case "(":
        return !0;
      default:
        return !1;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case "^":
      case "$":
        return !0;
      // '\b' or '\B'
      case "\\":
        switch (this.peekChar(1)) {
          case "b":
          case "B":
            return !0;
          default:
            return !1;
        }
      // '(?=' or '(?!' or `(?<=` or `(?<!`
      case "(":
        return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!" || this.peekChar(2) === "<" && (this.peekChar(3) === "=" || this.peekChar(3) === "!"));
      default:
        return !1;
    }
  }
  isQuantifier() {
    const e = this.saveState();
    try {
      return this.quantifier(!0) !== void 0;
    } catch {
      return !1;
    } finally {
      this.restoreState(e);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
      case "/":
      case `
`:
      case "\r":
      case "\u2028":
      case "\u2029":
        return !1;
      default:
        return !0;
    }
  }
  parseHexDigits(e) {
    let r = "";
    for (let a = 0; a < e; a++) {
      const i = this.popChar();
      if (yk.test(i) === !1)
        throw Error("Expecting a HexDecimal digits");
      r += i;
    }
    return { type: "Character", value: parseInt(r, 16) };
  }
  peekChar(e = 0) {
    return this.input[this.idx + e];
  }
  popChar() {
    const e = this.peekChar(0);
    return this.consumeChar(void 0), e;
  }
  consumeChar(e) {
    if (e !== void 0 && this.input[this.idx] !== e)
      throw Error("Expected: '" + e + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
    if (this.idx >= this.input.length)
      throw Error("Unexpected end of input");
    this.idx++;
  }
  loc(e) {
    return { begin: e, end: this.idx };
  }
}, s(qa, "RegExpParser"), qa), Wa, $f = (Wa = class {
  visitChildren(e) {
    for (const r in e) {
      const n = e[r];
      e.hasOwnProperty(r) && (n.type !== void 0 ? this.visit(n) : Array.isArray(n) && n.forEach((a) => {
        this.visit(a);
      }, this));
    }
  }
  visit(e) {
    switch (e.type) {
      case "Pattern":
        this.visitPattern(e);
        break;
      case "Flags":
        this.visitFlags(e);
        break;
      case "Disjunction":
        this.visitDisjunction(e);
        break;
      case "Alternative":
        this.visitAlternative(e);
        break;
      case "StartAnchor":
        this.visitStartAnchor(e);
        break;
      case "EndAnchor":
        this.visitEndAnchor(e);
        break;
      case "WordBoundary":
        this.visitWordBoundary(e);
        break;
      case "NonWordBoundary":
        this.visitNonWordBoundary(e);
        break;
      case "Lookahead":
        this.visitLookahead(e);
        break;
      case "NegativeLookahead":
        this.visitNegativeLookahead(e);
        break;
      case "Lookbehind":
        this.visitLookbehind(e);
        break;
      case "NegativeLookbehind":
        this.visitNegativeLookbehind(e);
        break;
      case "Character":
        this.visitCharacter(e);
        break;
      case "Set":
        this.visitSet(e);
        break;
      case "Group":
        this.visitGroup(e);
        break;
      case "GroupBackReference":
        this.visitGroupBackReference(e);
        break;
      case "Quantifier":
        this.visitQuantifier(e);
        break;
    }
    this.visitChildren(e);
  }
  visitPattern(e) {
  }
  visitFlags(e) {
  }
  visitDisjunction(e) {
  }
  visitAlternative(e) {
  }
  // Assertion
  visitStartAnchor(e) {
  }
  visitEndAnchor(e) {
  }
  visitWordBoundary(e) {
  }
  visitNonWordBoundary(e) {
  }
  visitLookahead(e) {
  }
  visitNegativeLookahead(e) {
  }
  visitLookbehind(e) {
  }
  visitNegativeLookbehind(e) {
  }
  // atoms
  visitCharacter(e) {
  }
  visitSet(e) {
  }
  visitGroup(e) {
  }
  visitGroupBackReference(e) {
  }
  visitQuantifier(e) {
  }
}, s(Wa, "BaseRegExpVisitor"), Wa), WT = /\r?\n/gm, VT = new qT(), Va, Tk = (Va = class extends $f {
  constructor() {
    super(...arguments), this.isStarting = !0, this.endRegexpStack = [], this.multiline = !1;
  }
  get endRegex() {
    return this.endRegexpStack.join("");
  }
  reset(e) {
    this.multiline = !1, this.regex = e, this.startRegexp = "", this.isStarting = !0, this.endRegexpStack = [];
  }
  visitGroup(e) {
    e.quantifier && (this.isStarting = !1, this.endRegexpStack = []);
  }
  visitCharacter(e) {
    const r = String.fromCharCode(e.value);
    if (!this.multiline && r === `
` && (this.multiline = !0), e.quantifier)
      this.isStarting = !1, this.endRegexpStack = [];
    else {
      const n = jo(r);
      this.endRegexpStack.push(n), this.isStarting && (this.startRegexp += n);
    }
  }
  visitSet(e) {
    if (!this.multiline) {
      const r = this.regex.substring(e.loc.begin, e.loc.end), n = new RegExp(r);
      this.multiline = !!`
`.match(n);
    }
    if (e.quantifier)
      this.isStarting = !1, this.endRegexpStack = [];
    else {
      const r = this.regex.substring(e.loc.begin, e.loc.end);
      this.endRegexpStack.push(r), this.isStarting && (this.startRegexp += r);
    }
  }
  visitChildren(e) {
    e.type === "Group" && e.quantifier || super.visitChildren(e);
  }
}, s(Va, "TerminalRegExpVisitor"), Va), wn = new Tk();
function HT(t) {
  try {
    typeof t != "string" && (t = t.source), t = `/${t}/`;
    const e = VT.pattern(t), r = [];
    for (const n of e.value.value)
      wn.reset(t), wn.visit(n), r.push({
        start: wn.startRegexp,
        end: wn.endRegex
      });
    return r;
  } catch {
    return [];
  }
}
s(HT, "getTerminalParts");
function Em(t) {
  try {
    return typeof t == "string" && (t = new RegExp(t)), t = t.toString(), wn.reset(t), wn.visit(VT.pattern(t)), wn.multiline;
  } catch {
    return !1;
  }
}
s(Em, "isMultilineComment");
var YT = `\f
\r	\v              \u2028\u2029  　\uFEFF`.split("");
function Af(t) {
  const e = typeof t == "string" ? new RegExp(t) : t;
  return YT.some((r) => e.test(r));
}
s(Af, "isWhitespace");
function jo(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
s(jo, "escapeRegExp");
function _m(t, e) {
  const r = Cm(t), n = e.match(r);
  return !!n && n[0].length > 0;
}
s(_m, "partialMatches");
function Cm(t) {
  typeof t == "string" && (t = new RegExp(t));
  const e = t, r = t.source;
  let n = 0;
  function a() {
    let i = "", o;
    function c(u) {
      i += r.substr(n, u), n += u;
    }
    s(c, "appendRaw");
    function l(u) {
      i += "(?:" + r.substr(n, u) + "|$)", n += u;
    }
    for (s(l, "appendOptional"); n < r.length; )
      switch (r[n]) {
        case "\\":
          switch (r[n + 1]) {
            case "c":
              l(3);
              break;
            case "x":
              l(4);
              break;
            case "u":
              e.unicode ? r[n + 2] === "{" ? l(r.indexOf("}", n) - n + 1) : l(6) : l(2);
              break;
            case "p":
            case "P":
              e.unicode ? l(r.indexOf("}", n) - n + 1) : l(2);
              break;
            case "k":
              l(r.indexOf(">", n) - n + 1);
              break;
            default:
              l(2);
              break;
          }
          break;
        case "[":
          o = /\[(?:\\.|.)*?\]/g, o.lastIndex = n, o = o.exec(r) || [], l(o[0].length);
          break;
        case "|":
        case "^":
        case "$":
        case "*":
        case "+":
        case "?":
          c(1);
          break;
        case "{":
          o = /\{\d+,?\d*\}/g, o.lastIndex = n, o = o.exec(r), o ? c(o[0].length) : l(1);
          break;
        case "(":
          if (r[n + 1] === "?")
            switch (r[n + 2]) {
              case ":":
                i += "(?:", n += 3, i += a() + "|$)";
                break;
              case "=":
                i += "(?=", n += 3, i += a() + ")";
                break;
              case "!":
                o = n, n += 3, a(), i += r.substr(o, n - o);
                break;
              case "<":
                switch (r[n + 3]) {
                  case "=":
                  case "!":
                    o = n, n += 4, a(), i += r.substr(o, n - o);
                    break;
                  default:
                    c(r.indexOf(">", n) - n + 1), i += a() + "|$)";
                    break;
                }
                break;
            }
          else
            c(1), i += a() + "|$)";
          break;
        case ")":
          return ++n, i;
        default:
          l(1);
          break;
      }
    return i;
  }
  return s(a, "process"), new RegExp(a(), t.flags);
}
s(Cm, "partialRegExp");
function bm(t) {
  return t.rules.find((e) => ot(e) && e.entry);
}
s(bm, "getEntryRule");
function Sm(t) {
  return t.rules.filter((e) => xt(e) && e.hidden);
}
s(Sm, "getHiddenRules");
function Ef(t, e) {
  const r = /* @__PURE__ */ new Set(), n = bm(t);
  if (!n)
    return new Set(t.rules);
  const a = [n].concat(Sm(t));
  for (const o of a)
    wm(o, r, e);
  const i = /* @__PURE__ */ new Set();
  for (const o of t.rules)
    (r.has(o.name) || xt(o) && o.hidden) && i.add(o);
  return i;
}
s(Ef, "getAllReachableRules");
function wm(t, e, r) {
  e.add(t.name), Lr(t).forEach((n) => {
    if (Sr(n) || r && gf(n)) {
      const a = n.rule.ref;
      a && !e.has(a.name) && wm(a, e, r);
    }
  });
}
s(wm, "ruleDfs");
function XT(t) {
  const e = /* @__PURE__ */ new Set();
  return Lr(t).forEach((r) => {
    Kn(r) && (ot(r.type.ref) && e.add(r.type.ref), gc(r.type.ref) && ot(r.type.ref.$container) && e.add(r.type.ref.$container));
  }), e;
}
s(XT, "getAllRulesUsedForCrossReferences");
function Im(t) {
  if (t.terminal)
    return t.terminal;
  if (t.type.ref)
    return Sf(t.type.ref)?.terminal;
}
s(Im, "getCrossReferenceTerminal");
function Nm(t) {
  return t.hidden && !Af(Tc(t));
}
s(Nm, "isCommentTerminal");
function km(t, e) {
  return !t || !e ? [] : Cf(t, e, t.astNode, !0);
}
s(km, "findNodesForProperty");
function _f(t, e, r) {
  if (!t || !e)
    return;
  const n = Cf(t, e, t.astNode, !0);
  if (n.length !== 0)
    return r !== void 0 ? r = Math.max(0, Math.min(r, n.length - 1)) : r = 0, n[r];
}
s(_f, "findNodeForProperty");
function Cf(t, e, r, n) {
  if (!n) {
    const a = zn(t.grammarSource, Cr);
    if (a && a.feature === e)
      return [t];
  }
  return _r(t) && t.astNode === r ? t.content.flatMap((a) => Cf(a, e, r, !1)) : [];
}
s(Cf, "findNodesForPropertyInternal");
function JT(t, e) {
  return t ? bf(t, e, t?.astNode) : [];
}
s(JT, "findNodesForKeyword");
function Pm(t, e, r) {
  if (!t)
    return;
  const n = bf(t, e, t?.astNode);
  if (n.length !== 0)
    return r !== void 0 ? r = Math.max(0, Math.min(r, n.length - 1)) : r = 0, n[r];
}
s(Pm, "findNodeForKeyword");
function bf(t, e, r) {
  if (t.astNode !== r)
    return [];
  if (br(t.grammarSource) && t.grammarSource.value === e)
    return [t];
  const n = ko(t).iterator();
  let a;
  const i = [];
  do
    if (a = n.next(), !a.done) {
      const o = a.value;
      o.astNode === r ? br(o.grammarSource) && o.grammarSource.value === e && i.push(o) : n.prune();
    }
  while (!a.done);
  return i;
}
s(bf, "findNodesForKeywordInternal");
function Om(t) {
  const e = t.astNode;
  for (; e === t.container?.astNode; ) {
    const r = zn(t.grammarSource, Cr);
    if (r)
      return r;
    t = t.container;
  }
}
s(Om, "findAssignment");
function Sf(t) {
  let e = t;
  return gc(e) && (Wr(e.$container) ? e = e.$container.$container : Bn(e.$container) ? e = e.$container : Zr(e.$container)), Lm(t, e, /* @__PURE__ */ new Map());
}
s(Sf, "findNameAssignment");
function Lm(t, e, r) {
  function n(a, i) {
    let o;
    return zn(a, Cr) || (o = Lm(i, i, r)), r.set(t, o), o;
  }
  if (s(n, "go"), r.has(t))
    return r.get(t);
  r.set(t, void 0);
  for (const a of Lr(e)) {
    if (Cr(a) && a.feature.toLowerCase() === "name")
      return r.set(t, a), a;
    if (Sr(a) && ot(a.rule.ref))
      return n(a, a.rule.ref);
    if (mf(a) && a.typeRef?.ref)
      return n(a, a.typeRef.ref);
  }
}
s(Lm, "findNameAssignmentInternal");
function Dm(t) {
  const e = t.$container;
  if (qn(e)) {
    const r = e.elements, n = r.indexOf(t);
    for (let a = n - 1; a >= 0; a--) {
      const i = r[a];
      if (Wr(i))
        return i;
      {
        const o = Lr(r[a]).find(Wr);
        if (o)
          return o;
      }
    }
  }
  if (pf(e))
    return Dm(e);
}
s(Dm, "getActionAtElement");
function ZT(t, e) {
  return t === "?" || t === "*" || qn(e) && !!e.guardCondition;
}
s(ZT, "isOptionalCardinality");
function QT(t) {
  return t === "*" || t === "+";
}
s(QT, "isArrayCardinality");
function eR(t) {
  return t === "+=";
}
s(eR, "isArrayOperator");
function yc(t) {
  return Mm(t, /* @__PURE__ */ new Set());
}
s(yc, "isDataTypeRule");
function Mm(t, e) {
  if (e.has(t))
    return !0;
  e.add(t);
  for (const r of Lr(t))
    if (Sr(r)) {
      if (!r.rule.ref || ot(r.rule.ref) && !Mm(r.rule.ref, e) || No(r.rule.ref))
        return !1;
    } else {
      if (Cr(r))
        return !1;
      if (Wr(r))
        return !1;
    }
  return !!t.definition;
}
s(Mm, "isDataTypeRuleInternal");
function tR(t) {
  return ju(t.type, /* @__PURE__ */ new Set());
}
s(tR, "isDataType");
function ju(t, e) {
  if (e.has(t))
    return !0;
  if (e.add(t), Vh(t))
    return !1;
  if (nm(t))
    return !1;
  if (lm(t))
    return t.types.every((r) => ju(r, e));
  if (mf(t)) {
    if (t.primitiveType !== void 0)
      return !0;
    if (t.stringType !== void 0)
      return !0;
    if (t.typeRef !== void 0) {
      const r = t.typeRef.ref;
      return yf(r) ? ju(r.type, e) : !1;
    } else
      return !1;
  } else
    return !1;
}
s(ju, "isDataTypeInternal");
function vc(t) {
  if (!xt(t)) {
    if (t.inferredType)
      return t.inferredType.name;
    if (t.dataType)
      return t.dataType;
    if (t.returnType) {
      const e = t.returnType.ref;
      if (e)
        return e.name;
    }
  }
}
s(vc, "getExplicitRuleType");
function Mn(t) {
  if (Bn(t))
    return ot(t) && yc(t) ? t.name : vc(t) ?? t.name;
  if (Qh(t) || yf(t) || im(t))
    return t.name;
  if (Wr(t)) {
    const e = xm(t);
    if (e)
      return e;
  } else if (gc(t))
    return t.name;
  throw new Error("Cannot get name of Unknown Type");
}
s(Mn, "getTypeName");
function xm(t) {
  if (t.inferredType)
    return t.inferredType.name;
  if (t.type?.ref)
    return Mn(t.type.ref);
}
s(xm, "getActionType");
function rR(t) {
  return xt(t) ? t.type?.name ?? "string" : ot(t) && yc(t) ? t.name : vc(t) ?? t.name;
}
s(rR, "getRuleTypeName");
function Fm(t) {
  return xt(t) ? t.type?.name ?? "string" : vc(t) ?? t.name;
}
s(Fm, "getRuleType");
function Tc(t) {
  const e = {
    s: !1,
    i: !1,
    u: !1
  }, r = Wn(t.definition, e), n = Object.entries(e).filter(([, a]) => a).map(([a]) => a).join("");
  return new RegExp(r, n);
}
s(Tc, "terminalRegex");
var Gm = /[\s\S]/.source;
function Wn(t, e) {
  if (sm(t))
    return nR(t);
  if (om(t))
    return aR(t);
  if (Yh(t))
    return oR(t);
  if (gf(t)) {
    const r = t.rule.ref;
    if (!r)
      throw new Error("Missing rule reference.");
    return lr(Wn(r.definition), {
      cardinality: t.cardinality,
      lookahead: t.lookahead,
      parenthesized: t.parenthesized
    });
  } else {
    if (em(t))
      return sR(t);
    if (cm(t))
      return iR(t);
    if (am(t)) {
      const r = t.regex.lastIndexOf("/"), n = t.regex.substring(1, r), a = t.regex.substring(r + 1);
      return e && (e.i = a.includes("i"), e.s = a.includes("s"), e.u = a.includes("u")), lr(n, {
        cardinality: t.cardinality,
        lookahead: t.lookahead,
        parenthesized: t.parenthesized,
        wrap: !1
      });
    } else {
      if (um(t))
        return lr(Gm, {
          cardinality: t.cardinality,
          lookahead: t.lookahead,
          parenthesized: t.parenthesized
        });
      throw new Error(`Invalid terminal element: ${t?.$type}, ${t?.$cstNode?.text}`);
    }
  }
}
s(Wn, "abstractElementToRegex");
function nR(t) {
  return lr(t.elements.map((e) => Wn(e)).join("|"), {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    parenthesized: t.parenthesized,
    wrap: !1
    // wrapping is not required for top level alternatives, and nested alternatives are already parenthesized according to the grammar
  });
}
s(nR, "terminalAlternativesToRegex");
function aR(t) {
  return lr(t.elements.map((e) => Wn(e)).join(""), {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    parenthesized: t.parenthesized,
    wrap: !1
    // wrapping is not required for top level group, and nested group are already parenthesized according to the grammar
  });
}
s(aR, "terminalGroupToRegex");
function iR(t) {
  return lr(`${Gm}*?${Wn(t.terminal)}`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    parenthesized: t.parenthesized
  });
}
s(iR, "untilTokenToRegex");
function sR(t) {
  return lr(`(?!${Wn(t.terminal)})${Gm}*?`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    parenthesized: t.parenthesized
  });
}
s(sR, "negateTokenToRegex");
function oR(t) {
  return t.right ? lr(`[${ou(t.left)}-${ou(t.right)}]`, {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    parenthesized: t.parenthesized,
    wrap: !1
  }) : lr(ou(t.left), {
    cardinality: t.cardinality,
    lookahead: t.lookahead,
    parenthesized: t.parenthesized,
    wrap: !1
  });
}
s(oR, "characterRangeToRegex");
function ou(t) {
  return jo(t.value);
}
s(ou, "keywordToRegex");
function lr(t, e) {
  return (e.parenthesized || e.lookahead || e.wrap !== !1) && (t = `(${e.lookahead ?? (e.parenthesized ? "" : "?:")}${t})`), e.cardinality ? `${t}${e.cardinality}` : t;
}
s(lr, "withCardinality");
function jm(t) {
  const e = [], r = t.Grammar;
  for (const n of r.rules)
    xt(n) && Nm(n) && Em(Tc(n)) && e.push(n.name);
  return {
    multilineCommentRules: e,
    nameRegexp: mm
  };
}
s(jm, "createGrammarConfig");
var Rk = typeof global == "object" && global && global.Object === Object && global, lR = Rk, $k = typeof self == "object" && self && self.Object === Object && self, Ak = lR || $k || Function("return this")(), ur = Ak, Ek = ur.Symbol, Dt = Ek, cR = Object.prototype, _k = cR.hasOwnProperty, Ck = cR.toString, pl = Dt ? Dt.toStringTag : void 0;
function uR(t) {
  var e = _k.call(t, pl), r = t[pl];
  try {
    t[pl] = void 0;
    var n = !0;
  } catch {
  }
  var a = Ck.call(t);
  return n && (e ? t[pl] = r : delete t[pl]), a;
}
s(uR, "getRawTag");
var bk = uR, Sk = Object.prototype, wk = Sk.toString;
function fR(t) {
  return wk.call(t);
}
s(fR, "objectToString");
var Ik = fR, Nk = "[object Null]", kk = "[object Undefined]", Cy = Dt ? Dt.toStringTag : void 0;
function dR(t) {
  return t == null ? t === void 0 ? kk : Nk : Cy && Cy in Object(t) ? bk(t) : Ik(t);
}
s(dR, "baseGetTag");
var Qr = dR;
function pR(t) {
  return t != null && typeof t == "object";
}
s(pR, "isObjectLike");
var Vt = pR, Pk = "[object Symbol]";
function hR(t) {
  return typeof t == "symbol" || Vt(t) && Qr(t) == Pk;
}
s(hR, "isSymbol");
var wf = hR;
function mR(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, a = Array(n); ++r < n; )
    a[r] = e(t[r], r, t);
  return a;
}
s(mR, "arrayMap");
var Rc = mR, Ok = Array.isArray, ae = Ok, by = Dt ? Dt.prototype : void 0, Sy = by ? by.toString : void 0;
function Um(t) {
  if (typeof t == "string")
    return t;
  if (ae(t))
    return Rc(t, Um) + "";
  if (wf(t))
    return Sy ? Sy.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
s(Um, "baseToString");
var Lk = Um, Dk = /\s/;
function gR(t) {
  for (var e = t.length; e-- && Dk.test(t.charAt(e)); )
    ;
  return e;
}
s(gR, "trimmedEndIndex");
var Mk = gR, xk = /^\s+/;
function yR(t) {
  return t && t.slice(0, Mk(t) + 1).replace(xk, "");
}
s(yR, "baseTrim");
var Fk = yR;
function vR(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
s(vR, "isObject");
var Mt = vR, wy = NaN, Gk = /^[-+]0x[0-9a-f]+$/i, jk = /^0b[01]+$/i, Uk = /^0o[0-7]+$/i, zk = parseInt;
function TR(t) {
  if (typeof t == "number")
    return t;
  if (wf(t))
    return wy;
  if (Mt(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Mt(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Fk(t);
  var r = jk.test(t);
  return r || Uk.test(t) ? zk(t.slice(2), r ? 2 : 8) : Gk.test(t) ? wy : +t;
}
s(TR, "toNumber");
var Bk = TR, Iy = 1 / 0, Kk = 17976931348623157e292;
function RR(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Bk(t), t === Iy || t === -Iy) {
    var e = t < 0 ? -1 : 1;
    return e * Kk;
  }
  return t === t ? t : 0;
}
s(RR, "toFinite");
var qk = RR;
function $R(t) {
  var e = qk(t), r = e % 1;
  return e === e ? r ? e - r : e : 0;
}
s($R, "toInteger");
var $c = $R;
function AR(t) {
  return t;
}
s(AR, "identity");
var Oo = AR, Wk = "[object AsyncFunction]", Vk = "[object Function]", Hk = "[object GeneratorFunction]", Yk = "[object Proxy]";
function ER(t) {
  if (!Mt(t))
    return !1;
  var e = Qr(t);
  return e == Vk || e == Hk || e == Wk || e == Yk;
}
s(ER, "isFunction");
var Dr = ER, Xk = ur["__core-js_shared__"], Rd = Xk, Ny = (function() {
  var t = /[^.]+$/.exec(Rd && Rd.keys && Rd.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function _R(t) {
  return !!Ny && Ny in t;
}
s(_R, "isMasked");
var Jk = _R, Zk = Function.prototype, Qk = Zk.toString;
function CR(t) {
  if (t != null) {
    try {
      return Qk.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
s(CR, "toSource");
var Vn = CR, eP = /[\\^$.*+?()[\]{}|]/g, tP = /^\[object .+?Constructor\]$/, rP = Function.prototype, nP = Object.prototype, aP = rP.toString, iP = nP.hasOwnProperty, sP = RegExp(
  "^" + aP.call(iP).replace(eP, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function bR(t) {
  if (!Mt(t) || Jk(t))
    return !1;
  var e = Dr(t) ? sP : tP;
  return e.test(Vn(t));
}
s(bR, "baseIsNative");
var oP = bR;
function SR(t, e) {
  return t?.[e];
}
s(SR, "getValue");
var lP = SR;
function wR(t, e) {
  var r = lP(t, e);
  return oP(r) ? r : void 0;
}
s(wR, "getNative");
var Hn = wR, cP = Hn(ur, "WeakMap"), qp = cP, ky = Object.create, uP = /* @__PURE__ */ (function() {
  function t() {
  }
  return s(t, "object"), function(e) {
    if (!Mt(e))
      return {};
    if (ky)
      return ky(e);
    t.prototype = e;
    var r = new t();
    return t.prototype = void 0, r;
  };
})(), fP = uP;
function IR(t, e, r) {
  switch (r.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, r[0]);
    case 2:
      return t.call(e, r[0], r[1]);
    case 3:
      return t.call(e, r[0], r[1], r[2]);
  }
  return t.apply(e, r);
}
s(IR, "apply");
var dP = IR;
function NR() {
}
s(NR, "noop");
var qe = NR;
function kR(t, e) {
  var r = -1, n = t.length;
  for (e || (e = Array(n)); ++r < n; )
    e[r] = t[r];
  return e;
}
s(kR, "copyArray");
var pP = kR, hP = 800, mP = 16, gP = Date.now;
function PR(t) {
  var e = 0, r = 0;
  return function() {
    var n = gP(), a = mP - (n - r);
    if (r = n, a > 0) {
      if (++e >= hP)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
s(PR, "shortOut");
var yP = PR;
function OR(t) {
  return function() {
    return t;
  };
}
s(OR, "constant");
var vP = OR, TP = (function() {
  try {
    var t = Hn(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
})(), Uu = TP, RP = Uu ? function(t, e) {
  return Uu(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: vP(e),
    writable: !0
  });
} : Oo, $P = RP, AP = yP($P), EP = AP;
function LR(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n && e(t[r], r, t) !== !1; )
    ;
  return t;
}
s(LR, "arrayEach");
var DR = LR;
function MR(t, e, r, n) {
  for (var a = t.length, i = r + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (e(t[i], i, t))
      return i;
  return -1;
}
s(MR, "baseFindIndex");
var xR = MR;
function FR(t) {
  return t !== t;
}
s(FR, "baseIsNaN");
var _P = FR;
function GR(t, e, r) {
  for (var n = r - 1, a = t.length; ++n < a; )
    if (t[n] === e)
      return n;
  return -1;
}
s(GR, "strictIndexOf");
var CP = GR;
function jR(t, e, r) {
  return e === e ? CP(t, e, r) : xR(t, _P, r);
}
s(jR, "baseIndexOf");
var zm = jR;
function UR(t, e) {
  var r = t == null ? 0 : t.length;
  return !!r && zm(t, e, 0) > -1;
}
s(UR, "arrayIncludes");
var zR = UR, bP = 9007199254740991, SP = /^(?:0|[1-9]\d*)$/;
function BR(t, e) {
  var r = typeof t;
  return e = e ?? bP, !!e && (r == "number" || r != "symbol" && SP.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
s(BR, "isIndex");
var If = BR;
function KR(t, e, r) {
  e == "__proto__" && Uu ? Uu(t, e, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : t[e] = r;
}
s(KR, "baseAssignValue");
var Bm = KR;
function qR(t, e) {
  return t === e || t !== t && e !== e;
}
s(qR, "eq");
var Ac = qR, wP = Object.prototype, IP = wP.hasOwnProperty;
function WR(t, e, r) {
  var n = t[e];
  (!(IP.call(t, e) && Ac(n, r)) || r === void 0 && !(e in t)) && Bm(t, e, r);
}
s(WR, "assignValue");
var Nf = WR;
function VR(t, e, r, n) {
  var a = !r;
  r || (r = {});
  for (var i = -1, o = e.length; ++i < o; ) {
    var c = e[i], l = n ? n(r[c], t[c], c, r, t) : void 0;
    l === void 0 && (l = t[c]), a ? Bm(r, c, l) : Nf(r, c, l);
  }
  return r;
}
s(VR, "copyObject");
var Ec = VR, Py = Math.max;
function HR(t, e, r) {
  return e = Py(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var n = arguments, a = -1, i = Py(n.length - e, 0), o = Array(i); ++a < i; )
      o[a] = n[e + a];
    a = -1;
    for (var c = Array(e + 1); ++a < e; )
      c[a] = n[a];
    return c[e] = r(o), dP(t, this, c);
  };
}
s(HR, "overRest");
var NP = HR;
function YR(t, e) {
  return EP(NP(t, e, Oo), t + "");
}
s(YR, "baseRest");
var Km = YR, kP = 9007199254740991;
function XR(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= kP;
}
s(XR, "isLength");
var qm = XR;
function JR(t) {
  return t != null && qm(t.length) && !Dr(t);
}
s(JR, "isArrayLike");
var fr = JR;
function ZR(t, e, r) {
  if (!Mt(r))
    return !1;
  var n = typeof e;
  return (n == "number" ? fr(r) && If(e, r.length) : n == "string" && e in r) ? Ac(r[e], t) : !1;
}
s(ZR, "isIterateeCall");
var kf = ZR;
function QR(t) {
  return Km(function(e, r) {
    var n = -1, a = r.length, i = a > 1 ? r[a - 1] : void 0, o = a > 2 ? r[2] : void 0;
    for (i = t.length > 3 && typeof i == "function" ? (a--, i) : void 0, o && kf(r[0], r[1], o) && (i = a < 3 ? void 0 : i, a = 1), e = Object(e); ++n < a; ) {
      var c = r[n];
      c && t(e, c, n, i);
    }
    return e;
  });
}
s(QR, "createAssigner");
var PP = QR, OP = Object.prototype;
function e$(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || OP;
  return t === r;
}
s(e$, "isPrototype");
var _c = e$;
function t$(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
s(t$, "baseTimes");
var LP = t$, DP = "[object Arguments]";
function r$(t) {
  return Vt(t) && Qr(t) == DP;
}
s(r$, "baseIsArguments");
var Oy = r$, n$ = Object.prototype, MP = n$.hasOwnProperty, xP = n$.propertyIsEnumerable, FP = Oy(/* @__PURE__ */ (function() {
  return arguments;
})()) ? Oy : function(t) {
  return Vt(t) && MP.call(t, "callee") && !xP.call(t, "callee");
}, Pf = FP;
function a$() {
  return !1;
}
s(a$, "stubFalse");
var GP = a$, i$ = typeof exports == "object" && exports && !exports.nodeType && exports, Ly = i$ && typeof module == "object" && module && !module.nodeType && module, jP = Ly && Ly.exports === i$, Dy = jP ? ur.Buffer : void 0, UP = Dy ? Dy.isBuffer : void 0, zP = UP || GP, Zl = zP, BP = "[object Arguments]", KP = "[object Array]", qP = "[object Boolean]", WP = "[object Date]", VP = "[object Error]", HP = "[object Function]", YP = "[object Map]", XP = "[object Number]", JP = "[object Object]", ZP = "[object RegExp]", QP = "[object Set]", e0 = "[object String]", t0 = "[object WeakMap]", r0 = "[object ArrayBuffer]", n0 = "[object DataView]", a0 = "[object Float32Array]", i0 = "[object Float64Array]", s0 = "[object Int8Array]", o0 = "[object Int16Array]", l0 = "[object Int32Array]", c0 = "[object Uint8Array]", u0 = "[object Uint8ClampedArray]", f0 = "[object Uint16Array]", d0 = "[object Uint32Array]", Ce = {};
Ce[a0] = Ce[i0] = Ce[s0] = Ce[o0] = Ce[l0] = Ce[c0] = Ce[u0] = Ce[f0] = Ce[d0] = !0;
Ce[BP] = Ce[KP] = Ce[r0] = Ce[qP] = Ce[n0] = Ce[WP] = Ce[VP] = Ce[HP] = Ce[YP] = Ce[XP] = Ce[JP] = Ce[ZP] = Ce[QP] = Ce[e0] = Ce[t0] = !1;
function s$(t) {
  return Vt(t) && qm(t.length) && !!Ce[Qr(t)];
}
s(s$, "baseIsTypedArray");
var p0 = s$;
function o$(t) {
  return function(e) {
    return t(e);
  };
}
s(o$, "baseUnary");
var Cc = o$, l$ = typeof exports == "object" && exports && !exports.nodeType && exports, zl = l$ && typeof module == "object" && module && !module.nodeType && module, h0 = zl && zl.exports === l$, $d = h0 && lR.process, m0 = (function() {
  try {
    var t = zl && zl.require && zl.require("util").types;
    return t || $d && $d.binding && $d.binding("util");
  } catch {
  }
})(), Vr = m0, My = Vr && Vr.isTypedArray, g0 = My ? Cc(My) : p0, Wm = g0, y0 = Object.prototype, v0 = y0.hasOwnProperty;
function c$(t, e) {
  var r = ae(t), n = !r && Pf(t), a = !r && !n && Zl(t), i = !r && !n && !a && Wm(t), o = r || n || a || i, c = o ? LP(t.length, String) : [], l = c.length;
  for (var u in t)
    (e || v0.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    If(u, l))) && c.push(u);
  return c;
}
s(c$, "arrayLikeKeys");
var u$ = c$;
function f$(t, e) {
  return function(r) {
    return t(e(r));
  };
}
s(f$, "overArg");
var d$ = f$, T0 = d$(Object.keys, Object), R0 = T0, $0 = Object.prototype, A0 = $0.hasOwnProperty;
function p$(t) {
  if (!_c(t))
    return R0(t);
  var e = [];
  for (var r in Object(t))
    A0.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
s(p$, "baseKeys");
var h$ = p$;
function m$(t) {
  return fr(t) ? u$(t) : h$(t);
}
s(m$, "keys");
var $t = m$, E0 = Object.prototype, _0 = E0.hasOwnProperty, C0 = PP(function(t, e) {
  if (_c(e) || fr(e)) {
    Ec(e, $t(e), t);
    return;
  }
  for (var r in e)
    _0.call(e, r) && Nf(t, r, e[r]);
}), At = C0;
function g$(t) {
  var e = [];
  if (t != null)
    for (var r in Object(t))
      e.push(r);
  return e;
}
s(g$, "nativeKeysIn");
var b0 = g$, S0 = Object.prototype, w0 = S0.hasOwnProperty;
function y$(t) {
  if (!Mt(t))
    return b0(t);
  var e = _c(t), r = [];
  for (var n in t)
    n == "constructor" && (e || !w0.call(t, n)) || r.push(n);
  return r;
}
s(y$, "baseKeysIn");
var I0 = y$;
function v$(t) {
  return fr(t) ? u$(t, !0) : I0(t);
}
s(v$, "keysIn");
var Of = v$, N0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, k0 = /^\w*$/;
function T$(t, e) {
  if (ae(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || wf(t) ? !0 : k0.test(t) || !N0.test(t) || e != null && t in Object(e);
}
s(T$, "isKey");
var Vm = T$, P0 = Hn(Object, "create"), Ql = P0;
function R$() {
  this.__data__ = Ql ? Ql(null) : {}, this.size = 0;
}
s(R$, "hashClear");
var O0 = R$;
function $$(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
s($$, "hashDelete");
var L0 = $$, D0 = "__lodash_hash_undefined__", M0 = Object.prototype, x0 = M0.hasOwnProperty;
function A$(t) {
  var e = this.__data__;
  if (Ql) {
    var r = e[t];
    return r === D0 ? void 0 : r;
  }
  return x0.call(e, t) ? e[t] : void 0;
}
s(A$, "hashGet");
var F0 = A$, G0 = Object.prototype, j0 = G0.hasOwnProperty;
function E$(t) {
  var e = this.__data__;
  return Ql ? e[t] !== void 0 : j0.call(e, t);
}
s(E$, "hashHas");
var U0 = E$, z0 = "__lodash_hash_undefined__";
function _$(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = Ql && e === void 0 ? z0 : e, this;
}
s(_$, "hashSet");
var B0 = _$;
function Yn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
s(Yn, "Hash");
Yn.prototype.clear = O0;
Yn.prototype.delete = L0;
Yn.prototype.get = F0;
Yn.prototype.has = U0;
Yn.prototype.set = B0;
var xy = Yn;
function C$() {
  this.__data__ = [], this.size = 0;
}
s(C$, "listCacheClear");
var K0 = C$;
function b$(t, e) {
  for (var r = t.length; r--; )
    if (Ac(t[r][0], e))
      return r;
  return -1;
}
s(b$, "assocIndexOf");
var Lf = b$, q0 = Array.prototype, W0 = q0.splice;
function S$(t) {
  var e = this.__data__, r = Lf(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : W0.call(e, r, 1), --this.size, !0;
}
s(S$, "listCacheDelete");
var V0 = S$;
function w$(t) {
  var e = this.__data__, r = Lf(e, t);
  return r < 0 ? void 0 : e[r][1];
}
s(w$, "listCacheGet");
var H0 = w$;
function I$(t) {
  return Lf(this.__data__, t) > -1;
}
s(I$, "listCacheHas");
var Y0 = I$;
function N$(t, e) {
  var r = this.__data__, n = Lf(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
s(N$, "listCacheSet");
var X0 = N$;
function Xn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
s(Xn, "ListCache");
Xn.prototype.clear = K0;
Xn.prototype.delete = V0;
Xn.prototype.get = H0;
Xn.prototype.has = Y0;
Xn.prototype.set = X0;
var Df = Xn, J0 = Hn(ur, "Map"), ec = J0;
function k$() {
  this.size = 0, this.__data__ = {
    hash: new xy(),
    map: new (ec || Df)(),
    string: new xy()
  };
}
s(k$, "mapCacheClear");
var Z0 = k$;
function P$(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
s(P$, "isKeyable");
var Q0 = P$;
function O$(t, e) {
  var r = t.__data__;
  return Q0(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
s(O$, "getMapData");
var Mf = O$;
function L$(t) {
  var e = Mf(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
s(L$, "mapCacheDelete");
var eO = L$;
function D$(t) {
  return Mf(this, t).get(t);
}
s(D$, "mapCacheGet");
var tO = D$;
function M$(t) {
  return Mf(this, t).has(t);
}
s(M$, "mapCacheHas");
var rO = M$;
function x$(t, e) {
  var r = Mf(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
s(x$, "mapCacheSet");
var nO = x$;
function Jn(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
s(Jn, "MapCache");
Jn.prototype.clear = Z0;
Jn.prototype.delete = eO;
Jn.prototype.get = tO;
Jn.prototype.has = rO;
Jn.prototype.set = nO;
var xf = Jn, aO = "Expected a function";
function Ff(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(aO);
  var r = /* @__PURE__ */ s(function() {
    var n = arguments, a = e ? e.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = t.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  }, "memoized");
  return r.cache = new (Ff.Cache || xf)(), r;
}
s(Ff, "memoize");
Ff.Cache = xf;
var iO = Ff, sO = 500;
function F$(t) {
  var e = iO(t, function(n) {
    return r.size === sO && r.clear(), n;
  }), r = e.cache;
  return e;
}
s(F$, "memoizeCapped");
var oO = F$, lO = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, cO = /\\(\\)?/g, uO = oO(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(lO, function(r, n, a, i) {
    e.push(a ? i.replace(cO, "$1") : n || r);
  }), e;
}), fO = uO;
function G$(t) {
  return t == null ? "" : Lk(t);
}
s(G$, "toString");
var dO = G$;
function j$(t, e) {
  return ae(t) ? t : Vm(t, e) ? [t] : fO(dO(t));
}
s(j$, "castPath");
var Gf = j$;
function U$(t) {
  if (typeof t == "string" || wf(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
s(U$, "toKey");
var bc = U$;
function z$(t, e) {
  e = Gf(e, t);
  for (var r = 0, n = e.length; t != null && r < n; )
    t = t[bc(e[r++])];
  return r && r == n ? t : void 0;
}
s(z$, "baseGet");
var Hm = z$;
function B$(t, e, r) {
  var n = t == null ? void 0 : Hm(t, e);
  return n === void 0 ? r : n;
}
s(B$, "get");
var pO = B$;
function K$(t, e) {
  for (var r = -1, n = e.length, a = t.length; ++r < n; )
    t[a + r] = e[r];
  return t;
}
s(K$, "arrayPush");
var Ym = K$, Fy = Dt ? Dt.isConcatSpreadable : void 0;
function q$(t) {
  return ae(t) || Pf(t) || !!(Fy && t && t[Fy]);
}
s(q$, "isFlattenable");
var hO = q$;
function Xm(t, e, r, n, a) {
  var i = -1, o = t.length;
  for (r || (r = hO), a || (a = []); ++i < o; ) {
    var c = t[i];
    e > 0 && r(c) ? e > 1 ? Xm(c, e - 1, r, n, a) : Ym(a, c) : n || (a[a.length] = c);
  }
  return a;
}
s(Xm, "baseFlatten");
var Jm = Xm;
function W$(t) {
  var e = t == null ? 0 : t.length;
  return e ? Jm(t, 1) : [];
}
s(W$, "flatten");
var qt = W$, mO = d$(Object.getPrototypeOf, Object), V$ = mO;
function H$(t, e, r) {
  var n = -1, a = t.length;
  e < 0 && (e = -e > a ? 0 : a + e), r = r > a ? a : r, r < 0 && (r += a), a = e > r ? 0 : r - e >>> 0, e >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = t[n + e];
  return i;
}
s(H$, "baseSlice");
var Y$ = H$;
function X$(t, e, r, n) {
  var a = -1, i = t == null ? 0 : t.length;
  for (n && i && (r = t[++a]); ++a < i; )
    r = e(r, t[a], a, t);
  return r;
}
s(X$, "arrayReduce");
var gO = X$;
function J$() {
  this.__data__ = new Df(), this.size = 0;
}
s(J$, "stackClear");
var yO = J$;
function Z$(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
s(Z$, "stackDelete");
var vO = Z$;
function Q$(t) {
  return this.__data__.get(t);
}
s(Q$, "stackGet");
var TO = Q$;
function eA(t) {
  return this.__data__.has(t);
}
s(eA, "stackHas");
var RO = eA, $O = 200;
function tA(t, e) {
  var r = this.__data__;
  if (r instanceof Df) {
    var n = r.__data__;
    if (!ec || n.length < $O - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new xf(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
s(tA, "stackSet");
var AO = tA;
function Zn(t) {
  var e = this.__data__ = new Df(t);
  this.size = e.size;
}
s(Zn, "Stack");
Zn.prototype.clear = yO;
Zn.prototype.delete = vO;
Zn.prototype.get = TO;
Zn.prototype.has = RO;
Zn.prototype.set = AO;
var Bl = Zn;
function rA(t, e) {
  return t && Ec(e, $t(e), t);
}
s(rA, "baseAssign");
var EO = rA;
function nA(t, e) {
  return t && Ec(e, Of(e), t);
}
s(nA, "baseAssignIn");
var _O = nA, aA = typeof exports == "object" && exports && !exports.nodeType && exports, Gy = aA && typeof module == "object" && module && !module.nodeType && module, CO = Gy && Gy.exports === aA, jy = CO ? ur.Buffer : void 0, Uy = jy ? jy.allocUnsafe : void 0;
function iA(t, e) {
  if (e)
    return t.slice();
  var r = t.length, n = Uy ? Uy(r) : new t.constructor(r);
  return t.copy(n), n;
}
s(iA, "cloneBuffer");
var bO = iA;
function sA(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, a = 0, i = []; ++r < n; ) {
    var o = t[r];
    e(o, r, t) && (i[a++] = o);
  }
  return i;
}
s(sA, "arrayFilter");
var Zm = sA;
function oA() {
  return [];
}
s(oA, "stubArray");
var lA = oA, SO = Object.prototype, wO = SO.propertyIsEnumerable, zy = Object.getOwnPropertySymbols, IO = zy ? function(t) {
  return t == null ? [] : (t = Object(t), Zm(zy(t), function(e) {
    return wO.call(t, e);
  }));
} : lA, Qm = IO;
function cA(t, e) {
  return Ec(t, Qm(t), e);
}
s(cA, "copySymbols");
var NO = cA, kO = Object.getOwnPropertySymbols, PO = kO ? function(t) {
  for (var e = []; t; )
    Ym(e, Qm(t)), t = V$(t);
  return e;
} : lA, uA = PO;
function fA(t, e) {
  return Ec(t, uA(t), e);
}
s(fA, "copySymbolsIn");
var OO = fA;
function dA(t, e, r) {
  var n = e(t);
  return ae(t) ? n : Ym(n, r(t));
}
s(dA, "baseGetAllKeys");
var pA = dA;
function hA(t) {
  return pA(t, $t, Qm);
}
s(hA, "getAllKeys");
var Wp = hA;
function mA(t) {
  return pA(t, Of, uA);
}
s(mA, "getAllKeysIn");
var gA = mA, LO = Hn(ur, "DataView"), Vp = LO, DO = Hn(ur, "Promise"), Hp = DO, MO = Hn(ur, "Set"), Fa = MO, By = "[object Map]", xO = "[object Object]", Ky = "[object Promise]", qy = "[object Set]", Wy = "[object WeakMap]", Vy = "[object DataView]", FO = Vn(Vp), GO = Vn(ec), jO = Vn(Hp), UO = Vn(Fa), zO = Vn(qp), fn = Qr;
(Vp && fn(new Vp(new ArrayBuffer(1))) != Vy || ec && fn(new ec()) != By || Hp && fn(Hp.resolve()) != Ky || Fa && fn(new Fa()) != qy || qp && fn(new qp()) != Wy) && (fn = /* @__PURE__ */ s(function(t) {
  var e = Qr(t), r = e == xO ? t.constructor : void 0, n = r ? Vn(r) : "";
  if (n)
    switch (n) {
      case FO:
        return Vy;
      case GO:
        return By;
      case jO:
        return Ky;
      case UO:
        return qy;
      case zO:
        return Wy;
    }
  return e;
}, "getTag"));
var Lo = fn, BO = Object.prototype, KO = BO.hasOwnProperty;
function yA(t) {
  var e = t.length, r = new t.constructor(e);
  return e && typeof t[0] == "string" && KO.call(t, "index") && (r.index = t.index, r.input = t.input), r;
}
s(yA, "initCloneArray");
var qO = yA, WO = ur.Uint8Array, zu = WO;
function vA(t) {
  var e = new t.constructor(t.byteLength);
  return new zu(e).set(new zu(t)), e;
}
s(vA, "cloneArrayBuffer");
var eg = vA;
function TA(t, e) {
  var r = e ? eg(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.byteLength);
}
s(TA, "cloneDataView");
var VO = TA, HO = /\w*$/;
function RA(t) {
  var e = new t.constructor(t.source, HO.exec(t));
  return e.lastIndex = t.lastIndex, e;
}
s(RA, "cloneRegExp");
var YO = RA, Hy = Dt ? Dt.prototype : void 0, Yy = Hy ? Hy.valueOf : void 0;
function $A(t) {
  return Yy ? Object(Yy.call(t)) : {};
}
s($A, "cloneSymbol");
var XO = $A;
function AA(t, e) {
  var r = e ? eg(t.buffer) : t.buffer;
  return new t.constructor(r, t.byteOffset, t.length);
}
s(AA, "cloneTypedArray");
var JO = AA, ZO = "[object Boolean]", QO = "[object Date]", eL = "[object Map]", tL = "[object Number]", rL = "[object RegExp]", nL = "[object Set]", aL = "[object String]", iL = "[object Symbol]", sL = "[object ArrayBuffer]", oL = "[object DataView]", lL = "[object Float32Array]", cL = "[object Float64Array]", uL = "[object Int8Array]", fL = "[object Int16Array]", dL = "[object Int32Array]", pL = "[object Uint8Array]", hL = "[object Uint8ClampedArray]", mL = "[object Uint16Array]", gL = "[object Uint32Array]";
function EA(t, e, r) {
  var n = t.constructor;
  switch (e) {
    case sL:
      return eg(t);
    case ZO:
    case QO:
      return new n(+t);
    case oL:
      return VO(t, r);
    case lL:
    case cL:
    case uL:
    case fL:
    case dL:
    case pL:
    case hL:
    case mL:
    case gL:
      return JO(t, r);
    case eL:
      return new n();
    case tL:
    case aL:
      return new n(t);
    case rL:
      return YO(t);
    case nL:
      return new n();
    case iL:
      return XO(t);
  }
}
s(EA, "initCloneByTag");
var yL = EA;
function _A(t) {
  return typeof t.constructor == "function" && !_c(t) ? fP(V$(t)) : {};
}
s(_A, "initCloneObject");
var vL = _A, TL = "[object Map]";
function CA(t) {
  return Vt(t) && Lo(t) == TL;
}
s(CA, "baseIsMap");
var RL = CA, Xy = Vr && Vr.isMap, $L = Xy ? Cc(Xy) : RL, AL = $L, EL = "[object Set]";
function bA(t) {
  return Vt(t) && Lo(t) == EL;
}
s(bA, "baseIsSet");
var _L = bA, Jy = Vr && Vr.isSet, CL = Jy ? Cc(Jy) : _L, bL = CL, SL = 1, wL = 2, IL = 4, SA = "[object Arguments]", NL = "[object Array]", kL = "[object Boolean]", PL = "[object Date]", OL = "[object Error]", wA = "[object Function]", LL = "[object GeneratorFunction]", DL = "[object Map]", ML = "[object Number]", IA = "[object Object]", xL = "[object RegExp]", FL = "[object Set]", GL = "[object String]", jL = "[object Symbol]", UL = "[object WeakMap]", zL = "[object ArrayBuffer]", BL = "[object DataView]", KL = "[object Float32Array]", qL = "[object Float64Array]", WL = "[object Int8Array]", VL = "[object Int16Array]", HL = "[object Int32Array]", YL = "[object Uint8Array]", XL = "[object Uint8ClampedArray]", JL = "[object Uint16Array]", ZL = "[object Uint32Array]", Re = {};
Re[SA] = Re[NL] = Re[zL] = Re[BL] = Re[kL] = Re[PL] = Re[KL] = Re[qL] = Re[WL] = Re[VL] = Re[HL] = Re[DL] = Re[ML] = Re[IA] = Re[xL] = Re[FL] = Re[GL] = Re[jL] = Re[YL] = Re[XL] = Re[JL] = Re[ZL] = !0;
Re[OL] = Re[wA] = Re[UL] = !1;
function Kl(t, e, r, n, a, i) {
  var o, c = e & SL, l = e & wL, u = e & IL;
  if (r && (o = a ? r(t, n, a, i) : r(t)), o !== void 0)
    return o;
  if (!Mt(t))
    return t;
  var f = ae(t);
  if (f) {
    if (o = qO(t), !c)
      return pP(t, o);
  } else {
    var d = Lo(t), p = d == wA || d == LL;
    if (Zl(t))
      return bO(t, c);
    if (d == IA || d == SA || p && !a) {
      if (o = l || p ? {} : vL(t), !c)
        return l ? OO(t, _O(o, t)) : NO(t, EO(o, t));
    } else {
      if (!Re[d])
        return a ? t : {};
      o = yL(t, d, c);
    }
  }
  i || (i = new Bl());
  var g = i.get(t);
  if (g)
    return g;
  i.set(t, o), bL(t) ? t.forEach(function(_) {
    o.add(Kl(_, e, r, _, t, i));
  }) : AL(t) && t.forEach(function(_, v) {
    o.set(v, Kl(_, e, r, v, t, i));
  });
  var m = u ? l ? gA : Wp : l ? Of : $t, T = f ? void 0 : m(t);
  return DR(T || t, function(_, v) {
    T && (v = _, _ = t[v]), Nf(o, v, Kl(_, e, r, v, t, i));
  }), o;
}
s(Kl, "baseClone");
var QL = Kl, eD = 4;
function NA(t) {
  return QL(t, eD);
}
s(NA, "clone");
var et = NA;
function kA(t) {
  for (var e = -1, r = t == null ? 0 : t.length, n = 0, a = []; ++e < r; ) {
    var i = t[e];
    i && (a[n++] = i);
  }
  return a;
}
s(kA, "compact");
var Sc = kA, tD = "__lodash_hash_undefined__";
function PA(t) {
  return this.__data__.set(t, tD), this;
}
s(PA, "setCacheAdd");
var rD = PA;
function OA(t) {
  return this.__data__.has(t);
}
s(OA, "setCacheHas");
var nD = OA;
function tc(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new xf(); ++e < r; )
    this.add(t[e]);
}
s(tc, "SetCache");
tc.prototype.add = tc.prototype.push = rD;
tc.prototype.has = nD;
var tg = tc;
function LA(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
s(LA, "arraySome");
var DA = LA;
function MA(t, e) {
  return t.has(e);
}
s(MA, "cacheHas");
var rg = MA, aD = 1, iD = 2;
function xA(t, e, r, n, a, i) {
  var o = r & aD, c = t.length, l = e.length;
  if (c != l && !(o && l > c))
    return !1;
  var u = i.get(t), f = i.get(e);
  if (u && f)
    return u == e && f == t;
  var d = -1, p = !0, g = r & iD ? new tg() : void 0;
  for (i.set(t, e), i.set(e, t); ++d < c; ) {
    var m = t[d], T = e[d];
    if (n)
      var _ = o ? n(T, m, d, e, t, i) : n(m, T, d, t, e, i);
    if (_ !== void 0) {
      if (_)
        continue;
      p = !1;
      break;
    }
    if (g) {
      if (!DA(e, function(v, w) {
        if (!rg(g, w) && (m === v || a(m, v, r, n, i)))
          return g.push(w);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === T || a(m, T, r, n, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(t), i.delete(e), p;
}
s(xA, "equalArrays");
var FA = xA;
function GA(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n, a) {
    r[++e] = [a, n];
  }), r;
}
s(GA, "mapToArray");
var sD = GA;
function jA(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n) {
    r[++e] = n;
  }), r;
}
s(jA, "setToArray");
var ng = jA, oD = 1, lD = 2, cD = "[object Boolean]", uD = "[object Date]", fD = "[object Error]", dD = "[object Map]", pD = "[object Number]", hD = "[object RegExp]", mD = "[object Set]", gD = "[object String]", yD = "[object Symbol]", vD = "[object ArrayBuffer]", TD = "[object DataView]", Zy = Dt ? Dt.prototype : void 0, Ad = Zy ? Zy.valueOf : void 0;
function UA(t, e, r, n, a, i, o) {
  switch (r) {
    case TD:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case vD:
      return !(t.byteLength != e.byteLength || !i(new zu(t), new zu(e)));
    case cD:
    case uD:
    case pD:
      return Ac(+t, +e);
    case fD:
      return t.name == e.name && t.message == e.message;
    case hD:
    case gD:
      return t == e + "";
    case dD:
      var c = sD;
    case mD:
      var l = n & oD;
      if (c || (c = ng), t.size != e.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      n |= lD, o.set(t, e);
      var f = FA(c(t), c(e), n, a, i, o);
      return o.delete(t), f;
    case yD:
      if (Ad)
        return Ad.call(t) == Ad.call(e);
  }
  return !1;
}
s(UA, "equalByTag");
var RD = UA, $D = 1, AD = Object.prototype, ED = AD.hasOwnProperty;
function zA(t, e, r, n, a, i) {
  var o = r & $D, c = Wp(t), l = c.length, u = Wp(e), f = u.length;
  if (l != f && !o)
    return !1;
  for (var d = l; d--; ) {
    var p = c[d];
    if (!(o ? p in e : ED.call(e, p)))
      return !1;
  }
  var g = i.get(t), m = i.get(e);
  if (g && m)
    return g == e && m == t;
  var T = !0;
  i.set(t, e), i.set(e, t);
  for (var _ = o; ++d < l; ) {
    p = c[d];
    var v = t[p], w = e[p];
    if (n)
      var C = o ? n(w, v, p, e, t, i) : n(v, w, p, t, e, i);
    if (!(C === void 0 ? v === w || a(v, w, r, n, i) : C)) {
      T = !1;
      break;
    }
    _ || (_ = p == "constructor");
  }
  if (T && !_) {
    var k = t.constructor, B = e.constructor;
    k != B && "constructor" in t && "constructor" in e && !(typeof k == "function" && k instanceof k && typeof B == "function" && B instanceof B) && (T = !1);
  }
  return i.delete(t), i.delete(e), T;
}
s(zA, "equalObjects");
var _D = zA, CD = 1, Qy = "[object Arguments]", ev = "[object Array]", Mc = "[object Object]", bD = Object.prototype, tv = bD.hasOwnProperty;
function BA(t, e, r, n, a, i) {
  var o = ae(t), c = ae(e), l = o ? ev : Lo(t), u = c ? ev : Lo(e);
  l = l == Qy ? Mc : l, u = u == Qy ? Mc : u;
  var f = l == Mc, d = u == Mc, p = l == u;
  if (p && Zl(t)) {
    if (!Zl(e))
      return !1;
    o = !0, f = !1;
  }
  if (p && !f)
    return i || (i = new Bl()), o || Wm(t) ? FA(t, e, r, n, a, i) : RD(t, e, l, r, n, a, i);
  if (!(r & CD)) {
    var g = f && tv.call(t, "__wrapped__"), m = d && tv.call(e, "__wrapped__");
    if (g || m) {
      var T = g ? t.value() : t, _ = m ? e.value() : e;
      return i || (i = new Bl()), a(T, _, r, n, i);
    }
  }
  return p ? (i || (i = new Bl()), _D(t, e, r, n, a, i)) : !1;
}
s(BA, "baseIsEqualDeep");
var SD = BA;
function ag(t, e, r, n, a) {
  return t === e ? !0 : t == null || e == null || !Vt(t) && !Vt(e) ? t !== t && e !== e : SD(t, e, r, n, ag, a);
}
s(ag, "baseIsEqual");
var KA = ag, wD = 1, ID = 2;
function qA(t, e, r, n) {
  var a = r.length, i = a, o = !n;
  if (t == null)
    return !i;
  for (t = Object(t); a--; ) {
    var c = r[a];
    if (o && c[2] ? c[1] !== t[c[0]] : !(c[0] in t))
      return !1;
  }
  for (; ++a < i; ) {
    c = r[a];
    var l = c[0], u = t[l], f = c[1];
    if (o && c[2]) {
      if (u === void 0 && !(l in t))
        return !1;
    } else {
      var d = new Bl();
      if (n)
        var p = n(u, f, l, t, e, d);
      if (!(p === void 0 ? KA(f, u, wD | ID, n, d) : p))
        return !1;
    }
  }
  return !0;
}
s(qA, "baseIsMatch");
var ND = qA;
function WA(t) {
  return t === t && !Mt(t);
}
s(WA, "isStrictComparable");
var VA = WA;
function HA(t) {
  for (var e = $t(t), r = e.length; r--; ) {
    var n = e[r], a = t[n];
    e[r] = [n, a, VA(a)];
  }
  return e;
}
s(HA, "getMatchData");
var kD = HA;
function YA(t, e) {
  return function(r) {
    return r == null ? !1 : r[t] === e && (e !== void 0 || t in Object(r));
  };
}
s(YA, "matchesStrictComparable");
var XA = YA;
function JA(t) {
  var e = kD(t);
  return e.length == 1 && e[0][2] ? XA(e[0][0], e[0][1]) : function(r) {
    return r === t || ND(r, t, e);
  };
}
s(JA, "baseMatches");
var PD = JA;
function ZA(t, e) {
  return t != null && e in Object(t);
}
s(ZA, "baseHasIn");
var OD = ZA;
function QA(t, e, r) {
  e = Gf(e, t);
  for (var n = -1, a = e.length, i = !1; ++n < a; ) {
    var o = bc(e[n]);
    if (!(i = t != null && r(t, o)))
      break;
    t = t[o];
  }
  return i || ++n != a ? i : (a = t == null ? 0 : t.length, !!a && qm(a) && If(o, a) && (ae(t) || Pf(t)));
}
s(QA, "hasPath");
var eE = QA;
function tE(t, e) {
  return t != null && eE(t, e, OD);
}
s(tE, "hasIn");
var LD = tE, DD = 1, MD = 2;
function rE(t, e) {
  return Vm(t) && VA(e) ? XA(bc(t), e) : function(r) {
    var n = pO(r, t);
    return n === void 0 && n === e ? LD(r, t) : KA(e, n, DD | MD);
  };
}
s(rE, "baseMatchesProperty");
var xD = rE;
function nE(t) {
  return function(e) {
    return e?.[t];
  };
}
s(nE, "baseProperty");
var FD = nE;
function aE(t) {
  return function(e) {
    return Hm(e, t);
  };
}
s(aE, "basePropertyDeep");
var GD = aE;
function iE(t) {
  return Vm(t) ? FD(bc(t)) : GD(t);
}
s(iE, "property");
var jD = iE;
function sE(t) {
  return typeof t == "function" ? t : t == null ? Oo : typeof t == "object" ? ae(t) ? xD(t[0], t[1]) : PD(t) : jD(t);
}
s(sE, "baseIteratee");
var dr = sE;
function oE(t, e, r, n) {
  for (var a = -1, i = t == null ? 0 : t.length; ++a < i; ) {
    var o = t[a];
    e(n, o, r(o), t);
  }
  return n;
}
s(oE, "arrayAggregator");
var UD = oE;
function lE(t) {
  return function(e, r, n) {
    for (var a = -1, i = Object(e), o = n(e), c = o.length; c--; ) {
      var l = o[t ? c : ++a];
      if (r(i[l], l, i) === !1)
        break;
    }
    return e;
  };
}
s(lE, "createBaseFor");
var zD = lE, BD = zD(), KD = BD;
function cE(t, e) {
  return t && KD(t, e, $t);
}
s(cE, "baseForOwn");
var qD = cE;
function uE(t, e) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!fr(r))
      return t(r, n);
    for (var a = r.length, i = e ? a : -1, o = Object(r); (e ? i-- : ++i < a) && n(o[i], i, o) !== !1; )
      ;
    return r;
  };
}
s(uE, "createBaseEach");
var WD = uE, VD = WD(qD), Qn = VD;
function fE(t, e, r, n) {
  return Qn(t, function(a, i, o) {
    e(n, a, r(a), o);
  }), n;
}
s(fE, "baseAggregator");
var HD = fE;
function dE(t, e) {
  return function(r, n) {
    var a = ae(r) ? UD : HD, i = e ? e() : {};
    return a(r, t, dr(n), i);
  };
}
s(dE, "createAggregator");
var YD = dE, pE = Object.prototype, XD = pE.hasOwnProperty, JD = Km(function(t, e) {
  t = Object(t);
  var r = -1, n = e.length, a = n > 2 ? e[2] : void 0;
  for (a && kf(e[0], e[1], a) && (n = 1); ++r < n; )
    for (var i = e[r], o = Of(i), c = -1, l = o.length; ++c < l; ) {
      var u = o[c], f = t[u];
      (f === void 0 || Ac(f, pE[u]) && !XD.call(t, u)) && (t[u] = i[u]);
    }
  return t;
}), ig = JD;
function hE(t) {
  return Vt(t) && fr(t);
}
s(hE, "isArrayLikeObject");
var rv = hE;
function mE(t, e, r) {
  for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
    if (r(e, t[n]))
      return !0;
  return !1;
}
s(mE, "arrayIncludesWith");
var gE = mE, ZD = 200;
function yE(t, e, r, n) {
  var a = -1, i = zR, o = !0, c = t.length, l = [], u = e.length;
  if (!c)
    return l;
  r && (e = Rc(e, Cc(r))), n ? (i = gE, o = !1) : e.length >= ZD && (i = rg, o = !1, e = new tg(e));
  e:
    for (; ++a < c; ) {
      var f = t[a], d = r == null ? f : r(f);
      if (f = n || f !== 0 ? f : 0, o && d === d) {
        for (var p = u; p--; )
          if (e[p] === d)
            continue e;
        l.push(f);
      } else i(e, d, n) || l.push(f);
    }
  return l;
}
s(yE, "baseDifference");
var QD = yE, eM = Km(function(t, e) {
  return rv(t) ? QD(t, Jm(e, 1, rv, !0)) : [];
}), jf = eM;
function vE(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
s(vE, "last");
var xn = vE;
function TE(t, e, r) {
  var n = t == null ? 0 : t.length;
  return n ? (e = r || e === void 0 ? 1 : $c(e), Y$(t, e < 0 ? 0 : e, n)) : [];
}
s(TE, "drop");
var Ze = TE;
function RE(t, e, r) {
  var n = t == null ? 0 : t.length;
  return n ? (e = r || e === void 0 ? 1 : $c(e), e = n - e, Y$(t, 0, e < 0 ? 0 : e)) : [];
}
s(RE, "dropRight");
var rc = RE;
function $E(t) {
  return typeof t == "function" ? t : Oo;
}
s($E, "castFunction");
var tM = $E;
function AE(t, e) {
  var r = ae(t) ? DR : Qn;
  return r(t, tM(e));
}
s(AE, "forEach");
var V = AE;
function EE(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
    if (!e(t[r], r, t))
      return !1;
  return !0;
}
s(EE, "arrayEvery");
var rM = EE;
function _E(t, e) {
  var r = !0;
  return Qn(t, function(n, a, i) {
    return r = !!e(n, a, i), r;
  }), r;
}
s(_E, "baseEvery");
var nM = _E;
function CE(t, e, r) {
  var n = ae(t) ? rM : nM;
  return r && kf(t, e, r) && (e = void 0), n(t, dr(e));
}
s(CE, "every");
var Wt = CE;
function bE(t, e) {
  var r = [];
  return Qn(t, function(n, a, i) {
    e(n, a, i) && r.push(n);
  }), r;
}
s(bE, "baseFilter");
var SE = bE;
function wE(t, e) {
  var r = ae(t) ? Zm : SE;
  return r(t, dr(e));
}
s(wE, "filter");
var Ft = wE;
function IE(t) {
  return function(e, r, n) {
    var a = Object(e);
    if (!fr(e)) {
      var i = dr(r);
      e = $t(e), r = /* @__PURE__ */ s(function(c) {
        return i(a[c], c, a);
      }, "predicate");
    }
    var o = t(e, r, n);
    return o > -1 ? a[i ? e[o] : o] : void 0;
  };
}
s(IE, "createFind");
var aM = IE, iM = Math.max;
function NE(t, e, r) {
  var n = t == null ? 0 : t.length;
  if (!n)
    return -1;
  var a = r == null ? 0 : $c(r);
  return a < 0 && (a = iM(n + a, 0)), xR(t, dr(e), a);
}
s(NE, "findIndex");
var sM = NE, oM = aM(sM), Do = oM;
function kE(t) {
  return t && t.length ? t[0] : void 0;
}
s(kE, "head");
var Ht = kE;
function PE(t, e) {
  var r = -1, n = fr(t) ? Array(t.length) : [];
  return Qn(t, function(a, i, o) {
    n[++r] = e(a, i, o);
  }), n;
}
s(PE, "baseMap");
var lM = PE;
function OE(t, e) {
  var r = ae(t) ? Rc : lM;
  return r(t, dr(e));
}
s(OE, "map");
var z = OE;
function LE(t, e) {
  return Jm(z(t, e), 1);
}
s(LE, "flatMap");
var Lt = LE, cM = Object.prototype, uM = cM.hasOwnProperty, fM = YD(function(t, e, r) {
  uM.call(t, r) ? t[r].push(e) : Bm(t, r, [e]);
}), dM = fM, pM = Object.prototype, hM = pM.hasOwnProperty;
function DE(t, e) {
  return t != null && hM.call(t, e);
}
s(DE, "baseHas");
var mM = DE;
function ME(t, e) {
  return t != null && eE(t, e, mM);
}
s(ME, "has");
var q = ME, gM = "[object String]";
function xE(t) {
  return typeof t == "string" || !ae(t) && Vt(t) && Qr(t) == gM;
}
s(xE, "isString");
var mt = xE;
function FE(t, e) {
  return Rc(e, function(r) {
    return t[r];
  });
}
s(FE, "baseValues");
var yM = FE;
function GE(t) {
  return t == null ? [] : yM(t, $t(t));
}
s(GE, "values");
var We = GE, vM = Math.max;
function jE(t, e, r, n) {
  t = fr(t) ? t : We(t), r = r && !n ? $c(r) : 0;
  var a = t.length;
  return r < 0 && (r = vM(a + r, 0)), mt(t) ? r <= a && t.indexOf(e, r) > -1 : !!a && zm(t, e, r) > -1;
}
s(jE, "includes");
var ft = jE, TM = Math.max;
function UE(t, e, r) {
  var n = t == null ? 0 : t.length;
  if (!n)
    return -1;
  var a = r == null ? 0 : $c(r);
  return a < 0 && (a = TM(n + a, 0)), zm(t, e, a);
}
s(UE, "indexOf");
var nv = UE, RM = "[object Map]", $M = "[object Set]", AM = Object.prototype, EM = AM.hasOwnProperty;
function zE(t) {
  if (t == null)
    return !0;
  if (fr(t) && (ae(t) || typeof t == "string" || typeof t.splice == "function" || Zl(t) || Wm(t) || Pf(t)))
    return !t.length;
  var e = Lo(t);
  if (e == RM || e == $M)
    return !t.size;
  if (_c(t))
    return !h$(t).length;
  for (var r in t)
    if (EM.call(t, r))
      return !1;
  return !0;
}
s(zE, "isEmpty");
var Ae = zE, _M = "[object RegExp]";
function BE(t) {
  return Vt(t) && Qr(t) == _M;
}
s(BE, "baseIsRegExp");
var CM = BE, av = Vr && Vr.isRegExp, bM = av ? Cc(av) : CM, wr = bM;
function KE(t) {
  return t === void 0;
}
s(KE, "isUndefined");
var Ir = KE, SM = "Expected a function";
function qE(t) {
  if (typeof t != "function")
    throw new TypeError(SM);
  return function() {
    var e = arguments;
    switch (e.length) {
      case 0:
        return !t.call(this);
      case 1:
        return !t.call(this, e[0]);
      case 2:
        return !t.call(this, e[0], e[1]);
      case 3:
        return !t.call(this, e[0], e[1], e[2]);
    }
    return !t.apply(this, e);
  };
}
s(qE, "negate");
var wM = qE;
function WE(t, e, r, n) {
  if (!Mt(t))
    return t;
  e = Gf(e, t);
  for (var a = -1, i = e.length, o = i - 1, c = t; c != null && ++a < i; ) {
    var l = bc(e[a]), u = r;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (a != o) {
      var f = c[l];
      u = n ? n(f, l, c) : void 0, u === void 0 && (u = Mt(f) ? f : If(e[a + 1]) ? [] : {});
    }
    Nf(c, l, u), c = c[l];
  }
  return t;
}
s(WE, "baseSet");
var IM = WE;
function VE(t, e, r) {
  for (var n = -1, a = e.length, i = {}; ++n < a; ) {
    var o = e[n], c = Hm(t, o);
    r(c, o) && IM(i, Gf(o, t), c);
  }
  return i;
}
s(VE, "basePickBy");
var NM = VE;
function HE(t, e) {
  if (t == null)
    return {};
  var r = Rc(gA(t), function(n) {
    return [n];
  });
  return e = dr(e), NM(t, r, function(n, a) {
    return e(n, a[0]);
  });
}
s(HE, "pickBy");
var Yt = HE;
function YE(t, e, r, n, a) {
  return a(t, function(i, o, c) {
    r = n ? (n = !1, i) : e(r, i, o, c);
  }), r;
}
s(YE, "baseReduce");
var kM = YE;
function XE(t, e, r) {
  var n = ae(t) ? gO : kM, a = arguments.length < 3;
  return n(t, dr(e), r, a, Qn);
}
s(XE, "reduce");
var Et = XE;
function JE(t, e) {
  var r = ae(t) ? Zm : SE;
  return r(t, wM(dr(e)));
}
s(JE, "reject");
var Uf = JE;
function ZE(t, e) {
  var r;
  return Qn(t, function(n, a, i) {
    return r = e(n, a, i), !r;
  }), !!r;
}
s(ZE, "baseSome");
var PM = ZE;
function QE(t, e, r) {
  var n = ae(t) ? DA : PM;
  return r && kf(t, e, r) && (e = void 0), n(t, dr(e));
}
s(QE, "some");
var e_ = QE, OM = 1 / 0, LM = Fa && 1 / ng(new Fa([, -0]))[1] == OM ? function(t) {
  return new Fa(t);
} : qe, DM = LM, MM = 200;
function t_(t, e, r) {
  var n = -1, a = zR, i = t.length, o = !0, c = [], l = c;
  if (r)
    o = !1, a = gE;
  else if (i >= MM) {
    var u = e ? null : DM(t);
    if (u)
      return ng(u);
    o = !1, a = rg, l = new tg();
  } else
    l = e ? [] : c;
  e:
    for (; ++n < i; ) {
      var f = t[n], d = e ? e(f) : f;
      if (f = r || f !== 0 ? f : 0, o && d === d) {
        for (var p = l.length; p--; )
          if (l[p] === d)
            continue e;
        e && l.push(d), c.push(f);
      } else a(l, d, r) || (l !== c && l.push(d), c.push(f));
    }
  return c;
}
s(t_, "baseUniq");
var xM = t_;
function r_(t) {
  return t && t.length ? xM(t) : [];
}
s(r_, "uniq");
var sg = r_;
function Bu(t) {
  console && console.error && console.error(`Error: ${t}`);
}
s(Bu, "PRINT_ERROR");
function og(t) {
  console && console.warn && console.warn(`Warning: ${t}`);
}
s(og, "PRINT_WARNING");
function lg(t) {
  const e = (/* @__PURE__ */ new Date()).getTime(), r = t();
  return { time: (/* @__PURE__ */ new Date()).getTime() - e, value: r };
}
s(lg, "timer");
function cg(t) {
  function e() {
  }
  s(e, "FakeConstructor"), e.prototype = t;
  const r = new e();
  function n() {
    return typeof r.bar;
  }
  return s(n, "fakeAccess"), n(), n(), t;
}
s(cg, "toFastProperties");
function n_(t) {
  return a_(t) ? t.LABEL : t.name;
}
s(n_, "tokenLabel");
function a_(t) {
  return mt(t.LABEL) && t.LABEL !== "";
}
s(a_, "hasTokenLabel");
var Ha, pr = (Ha = class {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    this._definition = e;
  }
  accept(e) {
    e.visit(this), V(this.definition, (r) => {
      r.accept(e);
    });
  }
}, s(Ha, "AbstractProduction"), Ha), Ya, lt = (Ya = class extends pr {
  constructor(e) {
    super([]), this.idx = 1, At(this, Yt(e, (r) => r !== void 0));
  }
  set definition(e) {
  }
  get definition() {
    return this.referencedRule !== void 0 ? this.referencedRule.definition : [];
  }
  accept(e) {
    e.visit(this);
  }
}, s(Ya, "NonTerminal"), Ya), Xa, Uo = (Xa = class extends pr {
  constructor(e) {
    super(e.definition), this.orgText = "", At(this, Yt(e, (r) => r !== void 0));
  }
}, s(Xa, "Rule"), Xa), Ja, gt = (Ja = class extends pr {
  constructor(e) {
    super(e.definition), this.ignoreAmbiguities = !1, At(this, Yt(e, (r) => r !== void 0));
  }
}, s(Ja, "Alternative"), Ja), Za, Qe = (Za = class extends pr {
  constructor(e) {
    super(e.definition), this.idx = 1, At(this, Yt(e, (r) => r !== void 0));
  }
}, s(Za, "Option"), Za), Qa, _t = (Qa = class extends pr {
  constructor(e) {
    super(e.definition), this.idx = 1, At(this, Yt(e, (r) => r !== void 0));
  }
}, s(Qa, "RepetitionMandatory"), Qa), ei, Ct = (ei = class extends pr {
  constructor(e) {
    super(e.definition), this.idx = 1, At(this, Yt(e, (r) => r !== void 0));
  }
}, s(ei, "RepetitionMandatoryWithSeparator"), ei), ti, xe = (ti = class extends pr {
  constructor(e) {
    super(e.definition), this.idx = 1, At(this, Yt(e, (r) => r !== void 0));
  }
}, s(ti, "Repetition"), ti), ri, yt = (ri = class extends pr {
  constructor(e) {
    super(e.definition), this.idx = 1, At(this, Yt(e, (r) => r !== void 0));
  }
}, s(ri, "RepetitionWithSeparator"), ri), ni, vt = (ni = class extends pr {
  get definition() {
    return this._definition;
  }
  set definition(e) {
    this._definition = e;
  }
  constructor(e) {
    super(e.definition), this.idx = 1, this.ignoreAmbiguities = !1, this.hasPredicates = !1, At(this, Yt(e, (r) => r !== void 0));
  }
}, s(ni, "Alternation"), ni), ai, Se = (ai = class {
  constructor(e) {
    this.idx = 1, At(this, Yt(e, (r) => r !== void 0));
  }
  accept(e) {
    e.visit(this);
  }
}, s(ai, "Terminal"), ai);
function i_(t) {
  return z(t, ql);
}
s(i_, "serializeGrammar");
function ql(t) {
  function e(r) {
    return z(r, ql);
  }
  if (s(e, "convertDefinition"), t instanceof lt) {
    const r = {
      type: "NonTerminal",
      name: t.nonTerminalName,
      idx: t.idx
    };
    return mt(t.label) && (r.label = t.label), r;
  } else {
    if (t instanceof gt)
      return {
        type: "Alternative",
        definition: e(t.definition)
      };
    if (t instanceof Qe)
      return {
        type: "Option",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof _t)
      return {
        type: "RepetitionMandatory",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof Ct)
      return {
        type: "RepetitionMandatoryWithSeparator",
        idx: t.idx,
        separator: ql(new Se({ terminalType: t.separator })),
        definition: e(t.definition)
      };
    if (t instanceof yt)
      return {
        type: "RepetitionWithSeparator",
        idx: t.idx,
        separator: ql(new Se({ terminalType: t.separator })),
        definition: e(t.definition)
      };
    if (t instanceof xe)
      return {
        type: "Repetition",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof vt)
      return {
        type: "Alternation",
        idx: t.idx,
        definition: e(t.definition)
      };
    if (t instanceof Se) {
      const r = {
        type: "Terminal",
        name: t.terminalType.name,
        label: n_(t.terminalType),
        idx: t.idx
      };
      mt(t.label) && (r.terminalLabel = t.label);
      const n = t.terminalType.PATTERN;
      return t.terminalType.PATTERN && (r.pattern = wr(n) ? n.source : n), r;
    } else {
      if (t instanceof Uo)
        return {
          type: "Rule",
          name: t.name,
          orgText: t.orgText,
          definition: e(t.definition)
        };
      throw Error("non exhaustive match");
    }
  }
}
s(ql, "serializeProduction");
var ii, zo = (ii = class {
  visit(e) {
    const r = e;
    switch (r.constructor) {
      case lt:
        return this.visitNonTerminal(r);
      case gt:
        return this.visitAlternative(r);
      case Qe:
        return this.visitOption(r);
      case _t:
        return this.visitRepetitionMandatory(r);
      case Ct:
        return this.visitRepetitionMandatoryWithSeparator(r);
      case yt:
        return this.visitRepetitionWithSeparator(r);
      case xe:
        return this.visitRepetition(r);
      case vt:
        return this.visitAlternation(r);
      case Se:
        return this.visitTerminal(r);
      case Uo:
        return this.visitRule(r);
      /* c8 ignore next 2 */
      default:
        throw Error("non exhaustive match");
    }
  }
  /* c8 ignore next */
  visitNonTerminal(e) {
  }
  /* c8 ignore next */
  visitAlternative(e) {
  }
  /* c8 ignore next */
  visitOption(e) {
  }
  /* c8 ignore next */
  visitRepetition(e) {
  }
  /* c8 ignore next */
  visitRepetitionMandatory(e) {
  }
  /* c8 ignore next 3 */
  visitRepetitionMandatoryWithSeparator(e) {
  }
  /* c8 ignore next */
  visitRepetitionWithSeparator(e) {
  }
  /* c8 ignore next */
  visitAlternation(e) {
  }
  /* c8 ignore next */
  visitTerminal(e) {
  }
  /* c8 ignore next */
  visitRule(e) {
  }
}, s(ii, "GAstVisitor"), ii);
function s_(t) {
  return t instanceof gt || t instanceof Qe || t instanceof xe || t instanceof _t || t instanceof Ct || t instanceof yt || t instanceof Se || t instanceof Uo;
}
s(s_, "isSequenceProd");
function nc(t, e = []) {
  return t instanceof Qe || t instanceof xe || t instanceof yt ? !0 : t instanceof vt ? e_(t.definition, (n) => nc(n, e)) : t instanceof lt && ft(e, t) ? !1 : t instanceof pr ? (t instanceof lt && e.push(t), Wt(t.definition, (n) => nc(n, e))) : !1;
}
s(nc, "isOptionalProd");
function o_(t) {
  return t instanceof vt;
}
s(o_, "isBranchingProd");
function Ut(t) {
  if (t instanceof lt)
    return "SUBRULE";
  if (t instanceof Qe)
    return "OPTION";
  if (t instanceof vt)
    return "OR";
  if (t instanceof _t)
    return "AT_LEAST_ONE";
  if (t instanceof Ct)
    return "AT_LEAST_ONE_SEP";
  if (t instanceof yt)
    return "MANY_SEP";
  if (t instanceof xe)
    return "MANY";
  if (t instanceof Se)
    return "CONSUME";
  throw Error("non exhaustive match");
}
s(Ut, "getProductionDslName");
var si, zf = (si = class {
  walk(e, r = []) {
    V(e.definition, (n, a) => {
      const i = Ze(e.definition, a + 1);
      if (n instanceof lt)
        this.walkProdRef(n, i, r);
      else if (n instanceof Se)
        this.walkTerminal(n, i, r);
      else if (n instanceof gt)
        this.walkFlat(n, i, r);
      else if (n instanceof Qe)
        this.walkOption(n, i, r);
      else if (n instanceof _t)
        this.walkAtLeastOne(n, i, r);
      else if (n instanceof Ct)
        this.walkAtLeastOneSep(n, i, r);
      else if (n instanceof yt)
        this.walkManySep(n, i, r);
      else if (n instanceof xe)
        this.walkMany(n, i, r);
      else if (n instanceof vt)
        this.walkOr(n, i, r);
      else
        throw Error("non exhaustive match");
    });
  }
  walkTerminal(e, r, n) {
  }
  walkProdRef(e, r, n) {
  }
  walkFlat(e, r, n) {
    const a = r.concat(n);
    this.walk(e, a);
  }
  walkOption(e, r, n) {
    const a = r.concat(n);
    this.walk(e, a);
  }
  walkAtLeastOne(e, r, n) {
    const a = [
      new Qe({ definition: e.definition })
    ].concat(r, n);
    this.walk(e, a);
  }
  walkAtLeastOneSep(e, r, n) {
    const a = Yp(e, r, n);
    this.walk(e, a);
  }
  walkMany(e, r, n) {
    const a = [
      new Qe({ definition: e.definition })
    ].concat(r, n);
    this.walk(e, a);
  }
  walkManySep(e, r, n) {
    const a = Yp(e, r, n);
    this.walk(e, a);
  }
  walkOr(e, r, n) {
    const a = r.concat(n);
    V(e.definition, (i) => {
      const o = new gt({ definition: [i] });
      this.walk(o, a);
    });
  }
}, s(si, "RestWalker"), si);
function Yp(t, e, r) {
  return [
    new Qe({
      definition: [
        new Se({ terminalType: t.separator })
      ].concat(t.definition)
    })
  ].concat(e, r);
}
s(Yp, "restForRepetitionWithSeparator");
function Bo(t) {
  if (t instanceof lt)
    return Bo(t.referencedRule);
  if (t instanceof Se)
    return u_(t);
  if (s_(t))
    return l_(t);
  if (o_(t))
    return c_(t);
  throw Error("non exhaustive match");
}
s(Bo, "first");
function l_(t) {
  let e = [];
  const r = t.definition;
  let n = 0, a = r.length > n, i, o = !0;
  for (; a && o; )
    i = r[n], o = nc(i), e = e.concat(Bo(i)), n = n + 1, a = r.length > n;
  return sg(e);
}
s(l_, "firstForSequence");
function c_(t) {
  const e = z(t.definition, (r) => Bo(r));
  return sg(qt(e));
}
s(c_, "firstForBranching");
function u_(t) {
  return [t.terminalType];
}
s(u_, "firstForTerminal");
var f_ = "_~IN~_", oi, FM = (oi = class extends zf {
  constructor(e) {
    super(), this.topProd = e, this.follows = {};
  }
  startWalking() {
    return this.walk(this.topProd), this.follows;
  }
  walkTerminal(e, r, n) {
  }
  walkProdRef(e, r, n) {
    const a = p_(e.referencedRule, e.idx) + this.topProd.name, i = r.concat(n), o = new gt({ definition: i }), c = Bo(o);
    this.follows[a] = c;
  }
}, s(oi, "ResyncFollowsWalker"), oi);
function d_(t) {
  const e = {};
  return V(t, (r) => {
    const n = new FM(r).startWalking();
    At(e, n);
  }), e;
}
s(d_, "computeAllProdsFollows");
function p_(t, e) {
  return t.name + e + f_;
}
s(p_, "buildBetweenProdsFollowPrefix");
var lu = {}, GM = new qT();
function wc(t) {
  const e = t.toString();
  if (lu.hasOwnProperty(e))
    return lu[e];
  {
    const r = GM.pattern(e);
    return lu[e] = r, r;
  }
}
s(wc, "getRegExpAst");
function h_() {
  lu = {};
}
s(h_, "clearRegExpParserCache");
var m_ = "Complement Sets are not supported for first char optimization", Ku = `Unable to use "first char" lexer optimizations:
`;
function g_(t, e = !1) {
  try {
    const r = wc(t);
    return qu(r.value, {}, r.flags.ignoreCase);
  } catch (r) {
    if (r.message === m_)
      e && og(`${Ku}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
    else {
      let n = "";
      e && (n = `
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`), Bu(`${Ku}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + n);
    }
  }
  return [];
}
s(g_, "getOptimizedStartCodesIndices");
function qu(t, e, r) {
  switch (t.type) {
    case "Disjunction":
      for (let a = 0; a < t.value.length; a++)
        qu(t.value[a], e, r);
      break;
    case "Alternative":
      const n = t.value;
      for (let a = 0; a < n.length; a++) {
        const i = n[a];
        switch (i.type) {
          case "EndAnchor":
          // A group back reference cannot affect potential starting char.
          // because if a back reference is the first production than automatically
          // the group being referenced has had to come BEFORE so its codes have already been added
          case "GroupBackReference":
          // assertions do not affect potential starting codes
          case "Lookahead":
          case "NegativeLookahead":
          case "Lookbehind":
          case "NegativeLookbehind":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        const o = i;
        switch (o.type) {
          case "Character":
            Il(o.value, e, r);
            break;
          case "Set":
            if (o.complement === !0)
              throw Error(m_);
            V(o.value, (l) => {
              if (typeof l == "number")
                Il(l, e, r);
              else {
                const u = l;
                if (r === !0)
                  for (let f = u.from; f <= u.to; f++)
                    Il(f, e, r);
                else {
                  for (let f = u.from; f <= u.to && f < kl; f++)
                    Il(f, e, r);
                  if (u.to >= kl) {
                    const f = u.from >= kl ? u.from : kl, d = u.to, p = Nr(f), g = Nr(d);
                    for (let m = p; m <= g; m++)
                      e[m] = m;
                  }
                }
              }
            });
            break;
          case "Group":
            qu(o.value, e, r);
            break;
          /* istanbul ignore next */
          default:
            throw Error("Non Exhaustive Match");
        }
        const c = o.quantifier !== void 0 && o.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          o.type === "Group" && Wu(o) === !1 || // If this term is not a group it may only be optional if it has an optional quantifier
          o.type !== "Group" && c === !1
        )
          break;
      }
      break;
    /* istanbul ignore next */
    default:
      throw Error("non exhaustive match!");
  }
  return We(e);
}
s(qu, "firstCharOptimizedIndices");
function Il(t, e, r) {
  const n = Nr(t);
  e[n] = n, r === !0 && y_(t, e);
}
s(Il, "addOptimizedIdxToResult");
function y_(t, e) {
  const r = String.fromCharCode(t), n = r.toUpperCase();
  if (n !== r) {
    const a = Nr(n.charCodeAt(0));
    e[a] = a;
  } else {
    const a = r.toLowerCase();
    if (a !== r) {
      const i = Nr(a.charCodeAt(0));
      e[i] = i;
    }
  }
}
s(y_, "handleIgnoreCase");
function Xp(t, e) {
  return Do(t.value, (r) => {
    if (typeof r == "number")
      return ft(e, r);
    {
      const n = r;
      return Do(e, (a) => n.from <= a && a <= n.to) !== void 0;
    }
  });
}
s(Xp, "findCode");
function Wu(t) {
  const e = t.quantifier;
  return e && e.atLeast === 0 ? !0 : t.value ? ae(t.value) ? Wt(t.value, Wu) : Wu(t.value) : !1;
}
s(Wu, "isWholeOptional");
var li, jM = (li = class extends $f {
  constructor(e) {
    super(), this.targetCharCodes = e, this.found = !1;
  }
  visitChildren(e) {
    if (this.found !== !0) {
      switch (e.type) {
        case "Lookahead":
          this.visitLookahead(e);
          return;
        case "NegativeLookahead":
          this.visitNegativeLookahead(e);
          return;
        case "Lookbehind":
          this.visitLookbehind(e);
          return;
        case "NegativeLookbehind":
          this.visitNegativeLookbehind(e);
          return;
      }
      super.visitChildren(e);
    }
  }
  visitCharacter(e) {
    ft(this.targetCharCodes, e.value) && (this.found = !0);
  }
  visitSet(e) {
    e.complement ? Xp(e, this.targetCharCodes) === void 0 && (this.found = !0) : Xp(e, this.targetCharCodes) !== void 0 && (this.found = !0);
  }
}, s(li, "CharCodeFinder"), li);
function Bf(t, e) {
  if (e instanceof RegExp) {
    const r = wc(e), n = new jM(t);
    return n.visit(r), n.found;
  } else
    return Do(e, (r) => ft(t, r.charCodeAt(0))) !== void 0;
}
s(Bf, "canMatchCharCode");
var Fn = "PATTERN", Nl = "defaultMode", xc = "modes", v_ = typeof new RegExp("(?:)").sticky == "boolean";
function T_(t, e) {
  e = ig(e, {
    useSticky: v_,
    debug: !1,
    safeMode: !1,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", `
`],
    tracer: /* @__PURE__ */ s((w, C) => C(), "tracer")
  });
  const r = e.tracer;
  r("initCharCodeToOptimizedIndexMap", () => {
    j_();
  });
  let n;
  r("Reject Lexer.NA", () => {
    n = Uf(t, (w) => w[Fn] === st.NA);
  });
  let a = !1, i;
  r("Transform Patterns", () => {
    a = !1, i = z(n, (w) => {
      const C = w[Fn];
      if (wr(C)) {
        const k = C.source;
        return k.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        k !== "^" && k !== "$" && k !== "." && !C.ignoreCase ? k : k.length === 2 && k[0] === "\\" && // not a meta character
        !ft([
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ], k[1]) ? k[1] : e.useSticky ? Zp(C) : Jp(C);
      } else {
        if (Dr(C))
          return a = !0, { exec: C };
        if (typeof C == "object")
          return a = !0, C;
        if (typeof C == "string") {
          if (C.length === 1)
            return C;
          {
            const k = C.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&"), B = new RegExp(k);
            return e.useSticky ? Zp(B) : Jp(B);
          }
        } else
          throw Error("non exhaustive match");
      }
    });
  });
  let o, c, l, u, f;
  r("misc mapping", () => {
    o = z(n, (w) => w.tokenTypeIdx), c = z(n, (w) => {
      const C = w.GROUP;
      if (C !== st.SKIPPED) {
        if (mt(C))
          return C;
        if (Ir(C))
          return !1;
        throw Error("non exhaustive match");
      }
    }), l = z(n, (w) => {
      const C = w.LONGER_ALT;
      if (C)
        return ae(C) ? z(C, (B) => nv(n, B)) : [nv(n, C)];
    }), u = z(n, (w) => w.PUSH_MODE), f = z(n, (w) => q(w, "POP_MODE"));
  });
  let d;
  r("Line Terminator Handling", () => {
    const w = dg(e.lineTerminatorCharacters);
    d = z(n, (C) => !1), e.positionTracking !== "onlyOffset" && (d = z(n, (C) => q(C, "LINE_BREAKS") ? !!C.LINE_BREAKS : fg(C, w) === !1 && Bf(w, C.PATTERN)));
  });
  let p, g, m, T;
  r("Misc Mapping #2", () => {
    p = z(n, ug), g = z(i, F_), m = Et(n, (w, C) => {
      const k = C.GROUP;
      return mt(k) && k !== st.SKIPPED && (w[k] = []), w;
    }, {}), T = z(i, (w, C) => ({
      pattern: i[C],
      longerAlt: l[C],
      canLineTerminator: d[C],
      isCustom: p[C],
      short: g[C],
      group: c[C],
      push: u[C],
      pop: f[C],
      tokenTypeIdx: o[C],
      tokenType: n[C]
    }));
  });
  let _ = !0, v = [];
  return e.safeMode || r("First Char Optimization", () => {
    v = Et(n, (w, C, k) => {
      if (typeof C.PATTERN == "string") {
        const B = C.PATTERN.charCodeAt(0), re = Nr(B);
        cu(w, re, T[k]);
      } else if (ae(C.START_CHARS_HINT)) {
        let B;
        V(C.START_CHARS_HINT, (re) => {
          const X = typeof re == "string" ? re.charCodeAt(0) : re, ge = Nr(X);
          B !== ge && (B = ge, cu(w, ge, T[k]));
        });
      } else if (wr(C.PATTERN))
        if (C.PATTERN.unicode)
          _ = !1, e.ensureOptimizations && Bu(`${Ku}	Unable to analyze < ${C.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
        else {
          const B = g_(C.PATTERN, e.ensureOptimizations);
          Ae(B) && (_ = !1), V(B, (re) => {
            cu(w, re, T[k]);
          });
        }
      else
        e.ensureOptimizations && Bu(`${Ku}	TokenType: <${C.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`), _ = !1;
      return w;
    }, []);
  }), {
    emptyGroups: m,
    patternIdxToConfig: T,
    charCodeToPatternIdxToConfig: v,
    hasCustom: a,
    canBeOptimized: _
  };
}
s(T_, "analyzeTokenTypes");
function R_(t, e) {
  let r = [];
  const n = A_(t);
  r = r.concat(n.errors);
  const a = E_(n.valid), i = a.valid;
  return r = r.concat(a.errors), r = r.concat($_(i)), r = r.concat(I_(i)), r = r.concat(N_(i, e)), r = r.concat(k_(i)), r;
}
s(R_, "validatePatterns");
function $_(t) {
  let e = [];
  const r = Ft(t, (n) => wr(n[Fn]));
  return e = e.concat(__(r)), e = e.concat(b_(r)), e = e.concat(S_(r)), e = e.concat(w_(r)), e = e.concat(C_(r)), e;
}
s($_, "validateRegExpPattern");
function A_(t) {
  const e = Ft(t, (a) => !q(a, Fn)), r = z(e, (a) => ({
    message: "Token Type: ->" + a.name + "<- missing static 'PATTERN' property",
    type: Fe.MISSING_PATTERN,
    tokenTypes: [a]
  })), n = jf(t, e);
  return { errors: r, valid: n };
}
s(A_, "findMissingPatterns");
function E_(t) {
  const e = Ft(t, (a) => {
    const i = a[Fn];
    return !wr(i) && !Dr(i) && !q(i, "exec") && !mt(i);
  }), r = z(e, (a) => ({
    message: "Token Type: ->" + a.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
    type: Fe.INVALID_PATTERN,
    tokenTypes: [a]
  })), n = jf(t, e);
  return { errors: r, valid: n };
}
s(E_, "findInvalidPatterns");
var UM = /[^\\][$]/;
function __(t) {
  const a = class a extends $f {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitEndAnchor(o) {
      this.found = !0;
    }
  };
  s(a, "EndAnchorFinder");
  let e = a;
  const r = Ft(t, (i) => {
    const o = i.PATTERN;
    try {
      const c = wc(o), l = new e();
      return l.visit(c), l.found;
    } catch {
      return UM.test(o.source);
    }
  });
  return z(r, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: Fe.EOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
s(__, "findEndOfInputAnchor");
function C_(t) {
  const e = Ft(t, (n) => n.PATTERN.test(""));
  return z(e, (n) => ({
    message: "Token Type: ->" + n.name + "<- static 'PATTERN' must not match an empty string",
    type: Fe.EMPTY_MATCH_PATTERN,
    tokenTypes: [n]
  }));
}
s(C_, "findEmptyMatchRegExps");
var zM = /[^\\[][\^]|^\^/;
function b_(t) {
  const a = class a extends $f {
    constructor() {
      super(...arguments), this.found = !1;
    }
    visitStartAnchor(o) {
      this.found = !0;
    }
  };
  s(a, "StartAnchorFinder");
  let e = a;
  const r = Ft(t, (i) => {
    const o = i.PATTERN;
    try {
      const c = wc(o), l = new e();
      return l.visit(c), l.found;
    } catch {
      return zM.test(o.source);
    }
  });
  return z(r, (i) => ({
    message: `Unexpected RegExp Anchor Error:
	Token Type: ->` + i.name + `<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,
    type: Fe.SOI_ANCHOR_FOUND,
    tokenTypes: [i]
  }));
}
s(b_, "findStartOfInputAnchor");
function S_(t) {
  const e = Ft(t, (n) => {
    const a = n[Fn];
    return a instanceof RegExp && (a.multiline || a.global);
  });
  return z(e, (n) => ({
    message: "Token Type: ->" + n.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
    type: Fe.UNSUPPORTED_FLAGS_FOUND,
    tokenTypes: [n]
  }));
}
s(S_, "findUnsupportedFlags");
function w_(t) {
  const e = [];
  let r = z(t, (i) => Et(t, (o, c) => (i.PATTERN.source === c.PATTERN.source && !ft(e, c) && c.PATTERN !== st.NA && (e.push(c), o.push(c)), o), []));
  r = Sc(r);
  const n = Ft(r, (i) => i.length > 1);
  return z(n, (i) => {
    const o = z(i, (l) => l.name);
    return {
      message: `The same RegExp pattern ->${Ht(i).PATTERN}<-has been used in all of the following Token Types: ${o.join(", ")} <-`,
      type: Fe.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: i
    };
  });
}
s(w_, "findDuplicatePatterns");
function I_(t) {
  const e = Ft(t, (n) => {
    if (!q(n, "GROUP"))
      return !1;
    const a = n.GROUP;
    return a !== st.SKIPPED && a !== st.NA && !mt(a);
  });
  return z(e, (n) => ({
    message: "Token Type: ->" + n.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
    type: Fe.INVALID_GROUP_TYPE_FOUND,
    tokenTypes: [n]
  }));
}
s(I_, "findInvalidGroupType");
function N_(t, e) {
  const r = Ft(t, (a) => a.PUSH_MODE !== void 0 && !ft(e, a.PUSH_MODE));
  return z(r, (a) => ({
    message: `Token Type: ->${a.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${a.PUSH_MODE}<-which does not exist`,
    type: Fe.PUSH_MODE_DOES_NOT_EXIST,
    tokenTypes: [a]
  }));
}
s(N_, "findModesThatDoNotExist");
function k_(t) {
  const e = [], r = Et(t, (n, a, i) => {
    const o = a.PATTERN;
    return o === st.NA || (mt(o) ? n.push({ str: o, idx: i, tokenType: a }) : wr(o) && O_(o) && n.push({ str: o.source, idx: i, tokenType: a })), n;
  }, []);
  return V(t, (n, a) => {
    V(r, ({ str: i, idx: o, tokenType: c }) => {
      if (a < o && P_(i, n.PATTERN)) {
        const l = `Token: ->${c.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        e.push({
          message: l,
          type: Fe.UNREACHABLE_PATTERN,
          tokenTypes: [n, c]
        });
      }
    });
  }), e;
}
s(k_, "findUnreachablePatterns");
function P_(t, e) {
  if (wr(e)) {
    if (L_(e))
      return !1;
    const r = e.exec(t);
    return r !== null && r.index === 0;
  } else {
    if (Dr(e))
      return e(t, 0, [], {});
    if (q(e, "exec"))
      return e.exec(t, 0, [], {});
    if (typeof e == "string")
      return e === t;
    throw Error("non exhaustive match");
  }
}
s(P_, "tryToMatchStrToPattern");
function O_(t) {
  return Do([
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ], (r) => t.source.indexOf(r) !== -1) === void 0;
}
s(O_, "noMetaChar");
function L_(t) {
  return /(\(\?=)|(\(\?!)|(\(\?<=)|(\(\?<!)/.test(t.source);
}
s(L_, "usesLookAheadOrBehind");
function Jp(t) {
  const e = t.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${t.source})`, e);
}
s(Jp, "addStartOfInput");
function Zp(t) {
  const e = t.ignoreCase ? "iy" : "y";
  return new RegExp(`${t.source}`, e);
}
s(Zp, "addStickyFlag");
function D_(t, e, r) {
  const n = [];
  return q(t, Nl) || n.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + Nl + `> property in its definition
`,
    type: Fe.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
  }), q(t, xc) || n.push({
    message: "A MultiMode Lexer cannot be initialized without a <" + xc + `> property in its definition
`,
    type: Fe.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
  }), q(t, xc) && q(t, Nl) && !q(t.modes, t.defaultMode) && n.push({
    message: `A MultiMode Lexer cannot be initialized with a ${Nl}: <${t.defaultMode}>which does not exist
`,
    type: Fe.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
  }), q(t, xc) && V(t.modes, (a, i) => {
    V(a, (o, c) => {
      if (Ir(o))
        n.push({
          message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${i}> at index: <${c}>
`,
          type: Fe.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
        });
      else if (q(o, "LONGER_ALT")) {
        const l = ae(o.LONGER_ALT) ? o.LONGER_ALT : [o.LONGER_ALT];
        V(l, (u) => {
          !Ir(u) && !ft(a, u) && n.push({
            message: `A MultiMode Lexer cannot be initialized with a longer_alt <${u.name}> on token <${o.name}> outside of mode <${i}>
`,
            type: Fe.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
          });
        });
      }
    });
  }), n;
}
s(D_, "performRuntimeChecks");
function M_(t, e, r) {
  const n = [];
  let a = !1;
  const i = Sc(qt(We(t.modes))), o = Uf(i, (l) => l[Fn] === st.NA), c = dg(r);
  return e && V(o, (l) => {
    const u = fg(l, c);
    if (u !== !1) {
      const d = {
        message: G_(l, u),
        type: u.issue,
        tokenType: l
      };
      n.push(d);
    } else
      q(l, "LINE_BREAKS") ? l.LINE_BREAKS === !0 && (a = !0) : Bf(c, l.PATTERN) && (a = !0);
  }), e && !a && n.push({
    message: `Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,
    type: Fe.NO_LINE_BREAKS_FLAGS
  }), n;
}
s(M_, "performWarningRuntimeChecks");
function x_(t) {
  const e = {}, r = $t(t);
  return V(r, (n) => {
    const a = t[n];
    if (ae(a))
      e[n] = [];
    else
      throw Error("non exhaustive match");
  }), e;
}
s(x_, "cloneEmptyGroups");
function ug(t) {
  const e = t.PATTERN;
  if (wr(e))
    return !1;
  if (Dr(e))
    return !0;
  if (q(e, "exec"))
    return !0;
  if (mt(e))
    return !1;
  throw Error("non exhaustive match");
}
s(ug, "isCustomPattern");
function F_(t) {
  return mt(t) && t.length === 1 ? t.charCodeAt(0) : !1;
}
s(F_, "isShortPattern");
var BM = {
  // implements /\n|\r\n?/g.test
  test: /* @__PURE__ */ s(function(t) {
    const e = t.length;
    for (let r = this.lastIndex; r < e; r++) {
      const n = t.charCodeAt(r);
      if (n === 10)
        return this.lastIndex = r + 1, !0;
      if (n === 13)
        return t.charCodeAt(r + 1) === 10 ? this.lastIndex = r + 2 : this.lastIndex = r + 1, !0;
    }
    return !1;
  }, "test"),
  lastIndex: 0
};
function fg(t, e) {
  if (q(t, "LINE_BREAKS"))
    return !1;
  if (wr(t.PATTERN)) {
    try {
      Bf(e, t.PATTERN);
    } catch (r) {
      return {
        issue: Fe.IDENTIFY_TERMINATOR,
        errMsg: r.message
      };
    }
    return !1;
  } else {
    if (mt(t.PATTERN))
      return !1;
    if (ug(t))
      return { issue: Fe.CUSTOM_LINE_BREAK };
    throw Error("non exhaustive match");
  }
}
s(fg, "checkLineBreaksIssues");
function G_(t, e) {
  if (e.issue === Fe.IDENTIFY_TERMINATOR)
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  if (e.issue === Fe.CUSTOM_LINE_BREAK)
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  throw Error("non exhaustive match");
}
s(G_, "buildLineBreakIssueMessage");
function dg(t) {
  return z(t, (r) => mt(r) ? r.charCodeAt(0) : r);
}
s(dg, "getCharCodes");
function cu(t, e, r) {
  t[e] === void 0 ? t[e] = [r] : t[e].push(r);
}
s(cu, "addToMapOfArrays");
var kl = 256, uu = [];
function Nr(t) {
  return t < kl ? t : uu[t];
}
s(Nr, "charCodeToOptimizedIndex");
function j_() {
  if (Ae(uu)) {
    uu = new Array(65536);
    for (let t = 0; t < 65536; t++)
      uu[t] = t > 255 ? 255 + ~~(t / 255) : t;
  }
}
s(j_, "initCharCodeToOptimizedIndexMap");
function Ko(t, e) {
  const r = t.tokenTypeIdx;
  return r === e.tokenTypeIdx ? !0 : e.isParent === !0 && e.categoryMatchesMap[r] === !0;
}
s(Ko, "tokenStructuredMatcher");
function ac(t, e) {
  return t.tokenTypeIdx === e.tokenTypeIdx;
}
s(ac, "tokenStructuredMatcherNoCategories");
var iv = 1, U_ = {};
function qo(t) {
  const e = z_(t);
  B_(e), q_(e), K_(e), V(e, (r) => {
    r.isParent = r.categoryMatches.length > 0;
  });
}
s(qo, "augmentTokenTypes");
function z_(t) {
  let e = et(t), r = t, n = !0;
  for (; n; ) {
    r = Sc(qt(z(r, (i) => i.CATEGORIES)));
    const a = jf(r, e);
    e = e.concat(a), Ae(a) ? n = !1 : r = a;
  }
  return e;
}
s(z_, "expandCategories");
function B_(t) {
  V(t, (e) => {
    hg(e) || (U_[iv] = e, e.tokenTypeIdx = iv++), Qp(e) && !ae(e.CATEGORIES) && (e.CATEGORIES = [e.CATEGORIES]), Qp(e) || (e.CATEGORIES = []), W_(e) || (e.categoryMatches = []), V_(e) || (e.categoryMatchesMap = {});
  });
}
s(B_, "assignTokenDefaultProps");
function K_(t) {
  V(t, (e) => {
    e.categoryMatches = [], V(e.categoryMatchesMap, (r, n) => {
      e.categoryMatches.push(U_[n].tokenTypeIdx);
    });
  });
}
s(K_, "assignCategoriesTokensProp");
function q_(t) {
  V(t, (e) => {
    pg([], e);
  });
}
s(q_, "assignCategoriesMapProp");
function pg(t, e) {
  V(t, (r) => {
    e.categoryMatchesMap[r.tokenTypeIdx] = !0;
  }), V(e.CATEGORIES, (r) => {
    const n = t.concat(e);
    ft(n, r) || pg(n, r);
  });
}
s(pg, "singleAssignCategoriesToksMap");
function hg(t) {
  return q(t, "tokenTypeIdx");
}
s(hg, "hasShortKeyProperty");
function Qp(t) {
  return q(t, "CATEGORIES");
}
s(Qp, "hasCategoriesProperty");
function W_(t) {
  return q(t, "categoryMatches");
}
s(W_, "hasExtendingTokensTypesProperty");
function V_(t) {
  return q(t, "categoryMatchesMap");
}
s(V_, "hasExtendingTokensTypesMapProperty");
function H_(t) {
  return q(t, "tokenTypeIdx");
}
s(H_, "isTokenType");
var eh = {
  buildUnableToPopLexerModeMessage(t) {
    return `Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(t, e, r, n, a, i) {
    return `unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${r} characters.`;
  }
}, Fe;
(function(t) {
  t[t.MISSING_PATTERN = 0] = "MISSING_PATTERN", t[t.INVALID_PATTERN = 1] = "INVALID_PATTERN", t[t.EOI_ANCHOR_FOUND = 2] = "EOI_ANCHOR_FOUND", t[t.UNSUPPORTED_FLAGS_FOUND = 3] = "UNSUPPORTED_FLAGS_FOUND", t[t.DUPLICATE_PATTERNS_FOUND = 4] = "DUPLICATE_PATTERNS_FOUND", t[t.INVALID_GROUP_TYPE_FOUND = 5] = "INVALID_GROUP_TYPE_FOUND", t[t.PUSH_MODE_DOES_NOT_EXIST = 6] = "PUSH_MODE_DOES_NOT_EXIST", t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE", t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY", t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST", t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED", t[t.SOI_ANCHOR_FOUND = 11] = "SOI_ANCHOR_FOUND", t[t.EMPTY_MATCH_PATTERN = 12] = "EMPTY_MATCH_PATTERN", t[t.NO_LINE_BREAKS_FLAGS = 13] = "NO_LINE_BREAKS_FLAGS", t[t.UNREACHABLE_PATTERN = 14] = "UNREACHABLE_PATTERN", t[t.IDENTIFY_TERMINATOR = 15] = "IDENTIFY_TERMINATOR", t[t.CUSTOM_LINE_BREAK = 16] = "CUSTOM_LINE_BREAK", t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(Fe || (Fe = {}));
var Pl = {
  deferDefinitionErrorsHandling: !1,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: [`
`, "\r"],
  ensureOptimizations: !1,
  safeMode: !1,
  errorMessageProvider: eh,
  traceInitPerf: !1,
  skipValidations: !1,
  recoveryEnabled: !0
};
Object.freeze(Pl);
var ci, st = (ci = class {
  constructor(e, r = Pl) {
    if (this.lexerDefinition = e, this.lexerDefinitionErrors = [], this.lexerDefinitionWarning = [], this.patternIdxToConfig = {}, this.charCodeToPatternIdxToConfig = {}, this.modes = [], this.emptyGroups = {}, this.trackStartLines = !0, this.trackEndLines = !0, this.hasCustom = !1, this.canModeBeOptimized = {}, this.TRACE_INIT = (a, i) => {
      if (this.traceInitPerf === !0) {
        this.traceInitIndent++;
        const o = new Array(this.traceInitIndent + 1).join("	");
        this.traceInitIndent < this.traceInitMaxIdent && console.log(`${o}--> <${a}>`);
        const { time: c, value: l } = lg(i), u = c > 10 ? console.warn : console.log;
        return this.traceInitIndent < this.traceInitMaxIdent && u(`${o}<-- <${a}> time: ${c}ms`), this.traceInitIndent--, l;
      } else
        return i();
    }, typeof r == "boolean")
      throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);
    this.config = At({}, Pl, r);
    const n = this.config.traceInitPerf;
    n === !0 ? (this.traceInitMaxIdent = 1 / 0, this.traceInitPerf = !0) : typeof n == "number" && (this.traceInitMaxIdent = n, this.traceInitPerf = !0), this.traceInitIndent = -1, this.TRACE_INIT("Lexer Constructor", () => {
      let a, i = !0;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === Pl.lineTerminatorsPattern)
          this.config.lineTerminatorsPattern = BM;
        else if (this.config.lineTerminatorCharacters === Pl.lineTerminatorCharacters)
          throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);
        if (r.safeMode && r.ensureOptimizations)
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking), this.trackEndLines = /full/i.test(this.config.positionTracking), ae(e) ? a = {
          modes: { defaultMode: et(e) },
          defaultMode: Nl
        } : (i = !1, a = et(e));
      }), this.config.skipValidations === !1 && (this.TRACE_INIT("performRuntimeChecks", () => {
        this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(D_(a, this.trackStartLines, this.config.lineTerminatorCharacters));
      }), this.TRACE_INIT("performWarningRuntimeChecks", () => {
        this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(M_(a, this.trackStartLines, this.config.lineTerminatorCharacters));
      })), a.modes = a.modes ? a.modes : {}, V(a.modes, (c, l) => {
        a.modes[l] = Uf(c, (u) => Ir(u));
      });
      const o = $t(a.modes);
      if (V(a.modes, (c, l) => {
        this.TRACE_INIT(`Mode: <${l}> processing`, () => {
          if (this.modes.push(l), this.config.skipValidations === !1 && this.TRACE_INIT("validatePatterns", () => {
            this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(R_(c, o));
          }), Ae(this.lexerDefinitionErrors)) {
            qo(c);
            let u;
            this.TRACE_INIT("analyzeTokenTypes", () => {
              u = T_(c, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: r.positionTracking,
                ensureOptimizations: r.ensureOptimizations,
                safeMode: r.safeMode,
                tracer: this.TRACE_INIT
              });
            }), this.patternIdxToConfig[l] = u.patternIdxToConfig, this.charCodeToPatternIdxToConfig[l] = u.charCodeToPatternIdxToConfig, this.emptyGroups = At({}, this.emptyGroups, u.emptyGroups), this.hasCustom = u.hasCustom || this.hasCustom, this.canModeBeOptimized[l] = u.canBeOptimized;
          }
        });
      }), this.defaultMode = a.defaultMode, !Ae(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        const l = z(this.lexerDefinitionErrors, (u) => u.message).join(`-----------------------
`);
        throw new Error(`Errors detected in definition of Lexer:
` + l);
      }
      V(this.lexerDefinitionWarning, (c) => {
        og(c.message);
      }), this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (v_ ? (this.chopInput = Oo, this.match = this.matchWithTest) : (this.updateLastIndex = qe, this.match = this.matchWithExec), i && (this.handleModes = qe), this.trackStartLines === !1 && (this.computeNewColumn = Oo), this.trackEndLines === !1 && (this.updateTokenEndLineColumnLocation = qe), /full/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createFullToken;
        else if (/onlyStart/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createStartOnlyToken;
        else if (/onlyOffset/i.test(this.config.positionTracking))
          this.createTokenInstance = this.createOffsetOnlyToken;
        else
          throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        this.hasCustom ? (this.addToken = this.addTokenUsingPush, this.handlePayload = this.handlePayloadWithCustom) : (this.addToken = this.addTokenUsingMemberAccess, this.handlePayload = this.handlePayloadNoCustom);
      }), this.TRACE_INIT("Failed Optimization Warnings", () => {
        const c = Et(this.canModeBeOptimized, (l, u, f) => (u === !1 && l.push(f), l), []);
        if (r.ensureOptimizations && !Ae(c))
          throw Error(`Lexer Modes: < ${c.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
      }), this.TRACE_INIT("clearRegExpParserCache", () => {
        h_();
      }), this.TRACE_INIT("toFastProperties", () => {
        cg(this);
      });
    });
  }
  tokenize(e, r = this.defaultMode) {
    if (!Ae(this.lexerDefinitionErrors)) {
      const a = z(this.lexerDefinitionErrors, (i) => i.message).join(`-----------------------
`);
      throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
` + a);
    }
    return this.tokenizeInternal(e, r);
  }
  // There is quite a bit of duplication between this and "tokenizeInternalLazy"
  // This is intentional due to performance considerations.
  // this method also used quite a bit of `!` none null assertions because it is too optimized
  // for `tsc` to always understand it is "safe"
  tokenizeInternal(e, r) {
    let n, a, i, o, c, l, u, f, d, p, g, m, T, _, v;
    const w = e, C = w.length;
    let k = 0, B = 0;
    const re = this.hasCustom ? 0 : Math.floor(e.length / 10), X = new Array(re), ge = [];
    let Ee = this.trackStartLines ? 1 : void 0, we = this.trackStartLines ? 1 : void 0;
    const oe = x_(this.emptyGroups), tt = this.trackStartLines, P = this.config.lineTerminatorsPattern;
    let b = 0, R = [], I = [];
    const $ = [], A = [];
    Object.freeze(A);
    let S;
    function O() {
      return R;
    }
    s(O, "getPossiblePatternsSlow");
    function M(U) {
      const Q = Nr(U), fe = I[Q];
      return fe === void 0 ? A : fe;
    }
    s(M, "getPossiblePatternsOptimized");
    const L = /* @__PURE__ */ s((U) => {
      if ($.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      U.tokenType.PUSH_MODE === void 0) {
        const Q = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(U);
        ge.push({
          offset: U.startOffset,
          line: U.startLine,
          column: U.startColumn,
          length: U.image.length,
          message: Q
        });
      } else {
        $.pop();
        const Q = xn($);
        R = this.patternIdxToConfig[Q], I = this.charCodeToPatternIdxToConfig[Q], b = R.length;
        const fe = this.canModeBeOptimized[Q] && this.config.safeMode === !1;
        I && fe ? S = M : S = O;
      }
    }, "pop_mode");
    function j(U) {
      $.push(U), I = this.charCodeToPatternIdxToConfig[U], R = this.patternIdxToConfig[U], b = R.length, b = R.length;
      const Q = this.canModeBeOptimized[U] && this.config.safeMode === !1;
      I && Q ? S = M : S = O;
    }
    s(j, "push_mode"), j.call(this, r);
    let F;
    const te = this.config.recoveryEnabled;
    for (; k < C; ) {
      l = null;
      const U = w.charCodeAt(k), Q = S(U), fe = Q.length;
      for (n = 0; n < fe; n++) {
        F = Q[n];
        const de = F.pattern;
        u = null;
        const pe = F.short;
        if (pe !== !1 ? U === pe && (l = de) : F.isCustom === !0 ? (v = de.exec(w, k, X, oe), v !== null ? (l = v[0], v.payload !== void 0 && (u = v.payload)) : l = null) : (this.updateLastIndex(de, k), l = this.match(de, e, k)), l !== null) {
          if (c = F.longerAlt, c !== void 0) {
            const ye = c.length;
            for (i = 0; i < ye; i++) {
              const Ie = R[c[i]], he = Ie.pattern;
              if (f = null, Ie.isCustom === !0 ? (v = he.exec(w, k, X, oe), v !== null ? (o = v[0], v.payload !== void 0 && (f = v.payload)) : o = null) : (this.updateLastIndex(he, k), o = this.match(he, e, k)), o && o.length > l.length) {
                l = o, u = f, F = Ie;
                break;
              }
            }
          }
          break;
        }
      }
      if (l !== null) {
        if (d = l.length, p = F.group, p !== void 0 && (g = F.tokenTypeIdx, m = this.createTokenInstance(l, k, g, F.tokenType, Ee, we, d), this.handlePayload(m, u), p === !1 ? B = this.addToken(X, B, m) : oe[p].push(m)), e = this.chopInput(e, d), k = k + d, we = this.computeNewColumn(we, d), tt === !0 && F.canLineTerminator === !0) {
          let de = 0, pe, ye;
          P.lastIndex = 0;
          do
            pe = P.test(l), pe === !0 && (ye = P.lastIndex - 1, de++);
          while (pe === !0);
          de !== 0 && (Ee = Ee + de, we = d - ye, this.updateTokenEndLineColumnLocation(m, p, ye, de, Ee, we, d));
        }
        this.handleModes(F, L, j, m);
      } else {
        const de = k, pe = Ee, ye = we;
        let Ie = te === !1;
        for (; Ie === !1 && k < C; )
          for (e = this.chopInput(e, 1), k++, a = 0; a < b; a++) {
            const he = R[a], J = he.pattern, Ue = he.short;
            if (Ue !== !1 ? w.charCodeAt(k) === Ue && (Ie = !0) : he.isCustom === !0 ? Ie = J.exec(w, k, X, oe) !== null : (this.updateLastIndex(J, k), Ie = J.exec(e) !== null), Ie === !0)
              break;
          }
        if (T = k - de, we = this.computeNewColumn(we, T), _ = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(w, de, T, pe, ye, xn($)), ge.push({
          offset: de,
          line: pe,
          column: ye,
          length: T,
          message: _
        }), te === !1)
          break;
      }
    }
    return this.hasCustom || (X.length = B), {
      tokens: X,
      groups: oe,
      errors: ge
    };
  }
  handleModes(e, r, n, a) {
    if (e.pop === !0) {
      const i = e.push;
      r(a), i !== void 0 && n.call(this, i);
    } else e.push !== void 0 && n.call(this, e.push);
  }
  chopInput(e, r) {
    return e.substring(r);
  }
  updateLastIndex(e, r) {
    e.lastIndex = r;
  }
  // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
  updateTokenEndLineColumnLocation(e, r, n, a, i, o, c) {
    let l, u;
    r !== void 0 && (l = n === c - 1, u = l ? -1 : 0, a === 1 && l === !0 || (e.endLine = i + u, e.endColumn = o - 1 + -u));
  }
  computeNewColumn(e, r) {
    return e + r;
  }
  createOffsetOnlyToken(e, r, n, a) {
    return {
      image: e,
      startOffset: r,
      tokenTypeIdx: n,
      tokenType: a
    };
  }
  createStartOnlyToken(e, r, n, a, i, o) {
    return {
      image: e,
      startOffset: r,
      startLine: i,
      startColumn: o,
      tokenTypeIdx: n,
      tokenType: a
    };
  }
  createFullToken(e, r, n, a, i, o, c) {
    return {
      image: e,
      startOffset: r,
      endOffset: r + c - 1,
      startLine: i,
      endLine: i,
      startColumn: o,
      endColumn: o + c - 1,
      tokenTypeIdx: n,
      tokenType: a
    };
  }
  addTokenUsingPush(e, r, n) {
    return e.push(n), r;
  }
  addTokenUsingMemberAccess(e, r, n) {
    return e[r] = n, r++, r;
  }
  handlePayloadNoCustom(e, r) {
  }
  handlePayloadWithCustom(e, r) {
    r !== null && (e.payload = r);
  }
  matchWithTest(e, r, n) {
    return e.test(r) === !0 ? r.substring(n, e.lastIndex) : null;
  }
  matchWithExec(e, r) {
    const n = e.exec(r);
    return n !== null ? n[0] : null;
  }
}, s(ci, "Lexer"), ci);
st.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it will be consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
st.NA = /NOT_APPLICABLE/;
function Pn(t) {
  return mg(t) ? t.LABEL : t.name;
}
s(Pn, "tokenLabel");
function mg(t) {
  return mt(t.LABEL) && t.LABEL !== "";
}
s(mg, "hasTokenLabel");
var KM = "parent", sv = "categories", ov = "label", lv = "group", cv = "push_mode", uv = "pop_mode", fv = "longer_alt", dv = "line_breaks", pv = "start_chars_hint";
function Ga(t) {
  return Y_(t);
}
s(Ga, "createToken");
function Y_(t) {
  const e = t.pattern, r = {};
  if (r.name = t.name, Ir(e) || (r.PATTERN = e), q(t, KM))
    throw `The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;
  return q(t, sv) && (r.CATEGORIES = t[sv]), qo([r]), q(t, ov) && (r.LABEL = t[ov]), q(t, lv) && (r.GROUP = t[lv]), q(t, uv) && (r.POP_MODE = t[uv]), q(t, cv) && (r.PUSH_MODE = t[cv]), q(t, fv) && (r.LONGER_ALT = t[fv]), q(t, dv) && (r.LINE_BREAKS = t[dv]), q(t, pv) && (r.START_CHARS_HINT = t[pv]), r;
}
s(Y_, "createTokenInternal");
var Hr = Ga({ name: "EOF", pattern: st.NA });
qo([Hr]);
function Ic(t, e, r, n, a, i, o, c) {
  return {
    image: e,
    startOffset: r,
    endOffset: n,
    startLine: a,
    endLine: i,
    startColumn: o,
    endColumn: c,
    tokenTypeIdx: t.tokenTypeIdx,
    tokenType: t
  };
}
s(Ic, "createTokenInstance");
function gg(t, e) {
  return Ko(t, e);
}
s(gg, "tokenMatcher");
var Ma = {
  buildMismatchTokenMessage({ expected: t, actual: e, previous: r, ruleName: n }) {
    return `Expecting ${mg(t) ? `--> ${Pn(t)} <--` : `token of type --> ${t.name} <--`} but found --> '${e.image}' <--`;
  },
  buildNotAllInputParsedMessage({ firstRedundant: t, ruleName: e }) {
    return "Redundant input, expecting EOF but found: " + t.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt: t, actual: e, previous: r, customUserDescription: n, ruleName: a }) {
    const i = "Expecting: ", c = `
but found: '` + Ht(e).image + "'";
    if (n)
      return i + n + c;
    {
      const l = Et(t, (p, g) => p.concat(g), []), u = z(l, (p) => `[${z(p, (g) => Pn(g)).join(", ")}]`), d = `one of these possible Token sequences:
${z(u, (p, g) => `  ${g + 1}. ${p}`).join(`
`)}`;
      return i + d + c;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths: t, actual: e, customUserDescription: r, ruleName: n }) {
    const a = "Expecting: ", o = `
but found: '` + Ht(e).image + "'";
    if (r)
      return a + r + o;
    {
      const l = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${z(t, (u) => `[${z(u, (f) => Pn(f)).join(",")}]`).join(" ,")}>`;
      return a + l + o;
    }
  }
};
Object.freeze(Ma);
var qM = {
  buildRuleNotFoundError(t, e) {
    return "Invalid grammar, reference to a rule which is not defined: ->" + e.nonTerminalName + `<-
inside top level rule: ->` + t.name + "<-";
  }
}, In = {
  buildDuplicateFoundError(t, e) {
    function r(f) {
      return f instanceof Se ? f.terminalType.name : f instanceof lt ? f.nonTerminalName : "";
    }
    s(r, "getExtraProductionArgument");
    const n = t.name, a = Ht(e), i = a.idx, o = Ut(a), c = r(a), l = i > 0;
    let u = `->${o}${l ? i : ""}<- ${c ? `with argument: ->${c}<-` : ""}
                  appears more than once (${e.length} times) in the top level rule: ->${n}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
    return u = u.replace(/[ \t]+/g, " "), u = u.replace(/\s\s+/g, `
`), u;
  },
  buildNamespaceConflictError(t) {
    return `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
  },
  buildAlternationPrefixAmbiguityError(t) {
    const e = z(t.prefixPath, (a) => Pn(a)).join(", "), r = t.alternation.idx === 0 ? "" : t.alternation.idx;
    return `Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
  },
  buildAlternationAmbiguityError(t) {
    const e = z(t.prefixPath, (a) => Pn(a)).join(", "), r = t.alternation.idx === 0 ? "" : t.alternation.idx;
    let n = `Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
    return n = n + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n;
  },
  buildEmptyRepetitionError(t) {
    let e = Ut(t.repetition);
    return t.repetition.idx !== 0 && (e += t.repetition.idx), `The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildTokenNameError(t) {
    return "deprecated";
  },
  buildEmptyAlternationError(t) {
    return `Ambiguous empty alternative: <${t.emptyChoiceIdx + 1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
  },
  buildTooManyAlternativesError(t) {
    return `An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length + 1} alternatives.`;
  },
  buildLeftRecursionError(t) {
    const e = t.topLevelRule.name, r = z(t.leftRecursionPath, (i) => i.name), n = `${e} --> ${r.concat([e]).join(" --> ")}`;
    return `Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildInvalidRuleNameError(t) {
    return "deprecated";
  },
  buildDuplicateRuleNameError(t) {
    let e;
    return t.topLevelRule instanceof Uo ? e = t.topLevelRule.name : e = t.topLevelRule, `Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`;
  }
};
function X_(t, e) {
  const r = new WM(t, e);
  return r.resolveRefs(), r.errors;
}
s(X_, "resolveGrammar");
var ui, WM = (ui = class extends zo {
  constructor(e, r) {
    super(), this.nameToTopRule = e, this.errMsgProvider = r, this.errors = [];
  }
  resolveRefs() {
    V(We(this.nameToTopRule), (e) => {
      this.currTopLevel = e, e.accept(this);
    });
  }
  visitNonTerminal(e) {
    const r = this.nameToTopRule[e.nonTerminalName];
    if (r)
      e.referencedRule = r;
    else {
      const n = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, e);
      this.errors.push({
        message: n,
        type: ct.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: e.nonTerminalName
      });
    }
  }
}, s(ui, "GastRefResolverVisitor"), ui), fi, VM = (fi = class extends zf {
  constructor(e, r) {
    super(), this.topProd = e, this.path = r, this.possibleTokTypes = [], this.nextProductionName = "", this.nextProductionOccurrence = 0, this.found = !1, this.isAtEndOfPath = !1;
  }
  startWalking() {
    if (this.found = !1, this.path.ruleStack[0] !== this.topProd.name)
      throw Error("The path does not start with the walker's top Rule!");
    return this.ruleStack = et(this.path.ruleStack).reverse(), this.occurrenceStack = et(this.path.occurrenceStack).reverse(), this.ruleStack.pop(), this.occurrenceStack.pop(), this.updateExpectedNext(), this.walk(this.topProd), this.possibleTokTypes;
  }
  walk(e, r = []) {
    this.found || super.walk(e, r);
  }
  walkProdRef(e, r, n) {
    if (e.referencedRule.name === this.nextProductionName && e.idx === this.nextProductionOccurrence) {
      const a = r.concat(n);
      this.updateExpectedNext(), this.walk(e.referencedRule, a);
    }
  }
  updateExpectedNext() {
    Ae(this.ruleStack) ? (this.nextProductionName = "", this.nextProductionOccurrence = 0, this.isAtEndOfPath = !0) : (this.nextProductionName = this.ruleStack.pop(), this.nextProductionOccurrence = this.occurrenceStack.pop());
  }
}, s(fi, "AbstractNextPossibleTokensWalker"), fi), di, HM = (di = class extends VM {
  constructor(e, r) {
    super(e, r), this.path = r, this.nextTerminalName = "", this.nextTerminalOccurrence = 0, this.nextTerminalName = this.path.lastTok.name, this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(e, r, n) {
    if (this.isAtEndOfPath && e.terminalType.name === this.nextTerminalName && e.idx === this.nextTerminalOccurrence && !this.found) {
      const a = r.concat(n), i = new gt({ definition: a });
      this.possibleTokTypes = Bo(i), this.found = !0;
    }
  }
}, s(di, "NextAfterTokenWalker"), di), pi, Kf = (pi = class extends zf {
  constructor(e, r) {
    super(), this.topRule = e, this.occurrence = r, this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    return this.walk(this.topRule), this.result;
  }
}, s(pi, "AbstractNextTerminalAfterProductionWalker"), pi), hi, YM = (hi = class extends Kf {
  walkMany(e, r, n) {
    if (e.idx === this.occurrence) {
      const a = Ht(r.concat(n));
      this.result.isEndOfRule = a === void 0, a instanceof Se && (this.result.token = a.terminalType, this.result.occurrence = a.idx);
    } else
      super.walkMany(e, r, n);
  }
}, s(hi, "NextTerminalAfterManyWalker"), hi), mi, hv = (mi = class extends Kf {
  walkManySep(e, r, n) {
    if (e.idx === this.occurrence) {
      const a = Ht(r.concat(n));
      this.result.isEndOfRule = a === void 0, a instanceof Se && (this.result.token = a.terminalType, this.result.occurrence = a.idx);
    } else
      super.walkManySep(e, r, n);
  }
}, s(mi, "NextTerminalAfterManySepWalker"), mi), gi, XM = (gi = class extends Kf {
  walkAtLeastOne(e, r, n) {
    if (e.idx === this.occurrence) {
      const a = Ht(r.concat(n));
      this.result.isEndOfRule = a === void 0, a instanceof Se && (this.result.token = a.terminalType, this.result.occurrence = a.idx);
    } else
      super.walkAtLeastOne(e, r, n);
  }
}, s(gi, "NextTerminalAfterAtLeastOneWalker"), gi), yi, mv = (yi = class extends Kf {
  walkAtLeastOneSep(e, r, n) {
    if (e.idx === this.occurrence) {
      const a = Ht(r.concat(n));
      this.result.isEndOfRule = a === void 0, a instanceof Se && (this.result.token = a.terminalType, this.result.occurrence = a.idx);
    } else
      super.walkAtLeastOneSep(e, r, n);
  }
}, s(yi, "NextTerminalAfterAtLeastOneSepWalker"), yi);
function Vu(t, e, r = []) {
  r = et(r);
  let n = [], a = 0;
  function i(c) {
    return c.concat(Ze(t, a + 1));
  }
  s(i, "remainingPathWith");
  function o(c) {
    const l = Vu(i(c), e, r);
    return n.concat(l);
  }
  for (s(o, "getAlternativesForProd"); r.length < e && a < t.length; ) {
    const c = t[a];
    if (c instanceof gt)
      return o(c.definition);
    if (c instanceof lt)
      return o(c.definition);
    if (c instanceof Qe)
      n = o(c.definition);
    else if (c instanceof _t) {
      const l = c.definition.concat([
        new xe({
          definition: c.definition
        })
      ]);
      return o(l);
    } else if (c instanceof Ct) {
      const l = [
        new gt({ definition: c.definition }),
        new xe({
          definition: [new Se({ terminalType: c.separator })].concat(c.definition)
        })
      ];
      return o(l);
    } else if (c instanceof yt) {
      const l = c.definition.concat([
        new xe({
          definition: [new Se({ terminalType: c.separator })].concat(c.definition)
        })
      ]);
      n = o(l);
    } else if (c instanceof xe) {
      const l = c.definition.concat([
        new xe({
          definition: c.definition
        })
      ]);
      n = o(l);
    } else {
      if (c instanceof vt)
        return V(c.definition, (l) => {
          Ae(l.definition) === !1 && (n = o(l.definition));
        }), n;
      if (c instanceof Se)
        r.push(c.terminalType);
      else
        throw Error("non exhaustive match");
    }
    a++;
  }
  return n.push({
    partialPath: r,
    suffixDef: Ze(t, a)
  }), n;
}
s(Vu, "possiblePathsFrom");
function yg(t, e, r, n) {
  const a = "EXIT_NONE_TERMINAL", i = [a], o = "EXIT_ALTERNATIVE";
  let c = !1;
  const l = e.length, u = l - n - 1, f = [], d = [];
  for (d.push({
    idx: -1,
    def: t,
    ruleStack: [],
    occurrenceStack: []
  }); !Ae(d); ) {
    const p = d.pop();
    if (p === o) {
      c && xn(d).idx <= u && d.pop();
      continue;
    }
    const g = p.def, m = p.idx, T = p.ruleStack, _ = p.occurrenceStack;
    if (Ae(g))
      continue;
    const v = g[0];
    if (v === a) {
      const w = {
        idx: m,
        def: Ze(g),
        ruleStack: rc(T),
        occurrenceStack: rc(_)
      };
      d.push(w);
    } else if (v instanceof Se)
      if (m < l - 1) {
        const w = m + 1, C = e[w];
        if (r(C, v.terminalType)) {
          const k = {
            idx: w,
            def: Ze(g),
            ruleStack: T,
            occurrenceStack: _
          };
          d.push(k);
        }
      } else if (m === l - 1)
        f.push({
          nextTokenType: v.terminalType,
          nextTokenOccurrence: v.idx,
          ruleStack: T,
          occurrenceStack: _
        }), c = !0;
      else
        throw Error("non exhaustive match");
    else if (v instanceof lt) {
      const w = et(T);
      w.push(v.nonTerminalName);
      const C = et(_);
      C.push(v.idx);
      const k = {
        idx: m,
        def: v.definition.concat(i, Ze(g)),
        ruleStack: w,
        occurrenceStack: C
      };
      d.push(k);
    } else if (v instanceof Qe) {
      const w = {
        idx: m,
        def: Ze(g),
        ruleStack: T,
        occurrenceStack: _
      };
      d.push(w), d.push(o);
      const C = {
        idx: m,
        def: v.definition.concat(Ze(g)),
        ruleStack: T,
        occurrenceStack: _
      };
      d.push(C);
    } else if (v instanceof _t) {
      const w = new xe({
        definition: v.definition,
        idx: v.idx
      }), C = v.definition.concat([w], Ze(g)), k = {
        idx: m,
        def: C,
        ruleStack: T,
        occurrenceStack: _
      };
      d.push(k);
    } else if (v instanceof Ct) {
      const w = new Se({
        terminalType: v.separator
      }), C = new xe({
        definition: [w].concat(v.definition),
        idx: v.idx
      }), k = v.definition.concat([C], Ze(g)), B = {
        idx: m,
        def: k,
        ruleStack: T,
        occurrenceStack: _
      };
      d.push(B);
    } else if (v instanceof yt) {
      const w = {
        idx: m,
        def: Ze(g),
        ruleStack: T,
        occurrenceStack: _
      };
      d.push(w), d.push(o);
      const C = new Se({
        terminalType: v.separator
      }), k = new xe({
        definition: [C].concat(v.definition),
        idx: v.idx
      }), B = v.definition.concat([k], Ze(g)), re = {
        idx: m,
        def: B,
        ruleStack: T,
        occurrenceStack: _
      };
      d.push(re);
    } else if (v instanceof xe) {
      const w = {
        idx: m,
        def: Ze(g),
        ruleStack: T,
        occurrenceStack: _
      };
      d.push(w), d.push(o);
      const C = new xe({
        definition: v.definition,
        idx: v.idx
      }), k = v.definition.concat([C], Ze(g)), B = {
        idx: m,
        def: k,
        ruleStack: T,
        occurrenceStack: _
      };
      d.push(B);
    } else if (v instanceof vt)
      for (let w = v.definition.length - 1; w >= 0; w--) {
        const C = v.definition[w], k = {
          idx: m,
          def: C.definition.concat(Ze(g)),
          ruleStack: T,
          occurrenceStack: _
        };
        d.push(k), d.push(o);
      }
    else if (v instanceof gt)
      d.push({
        idx: m,
        def: v.definition.concat(Ze(g)),
        ruleStack: T,
        occurrenceStack: _
      });
    else if (v instanceof Uo)
      d.push(J_(v, m, T, _));
    else
      throw Error("non exhaustive match");
  }
  return f;
}
s(yg, "nextPossibleTokensAfter");
function J_(t, e, r, n) {
  const a = et(r);
  a.push(t.name);
  const i = et(n);
  return i.push(1), {
    idx: e,
    def: t.definition,
    ruleStack: a,
    occurrenceStack: i
  };
}
s(J_, "expandTopLevelRule");
var Le;
(function(t) {
  t[t.OPTION = 0] = "OPTION", t[t.REPETITION = 1] = "REPETITION", t[t.REPETITION_MANDATORY = 2] = "REPETITION_MANDATORY", t[t.REPETITION_MANDATORY_WITH_SEPARATOR = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR", t[t.REPETITION_WITH_SEPARATOR = 4] = "REPETITION_WITH_SEPARATOR", t[t.ALTERNATION = 5] = "ALTERNATION";
})(Le || (Le = {}));
function qf(t) {
  if (t instanceof Qe || t === "Option")
    return Le.OPTION;
  if (t instanceof xe || t === "Repetition")
    return Le.REPETITION;
  if (t instanceof _t || t === "RepetitionMandatory")
    return Le.REPETITION_MANDATORY;
  if (t instanceof Ct || t === "RepetitionMandatoryWithSeparator")
    return Le.REPETITION_MANDATORY_WITH_SEPARATOR;
  if (t instanceof yt || t === "RepetitionWithSeparator")
    return Le.REPETITION_WITH_SEPARATOR;
  if (t instanceof vt || t === "Alternation")
    return Le.ALTERNATION;
  throw Error("non exhaustive match");
}
s(qf, "getProdType");
function th(t) {
  const { occurrence: e, rule: r, prodType: n, maxLookahead: a } = t, i = qf(n);
  return i === Le.ALTERNATION ? Nc(e, r, a) : kc(e, r, i, a);
}
s(th, "getLookaheadPaths");
function Z_(t, e, r, n, a, i) {
  const o = Nc(t, e, r), c = Tg(o) ? ac : Ko;
  return i(o, n, c, a);
}
s(Z_, "buildLookaheadFuncForOr");
function Q_(t, e, r, n, a, i) {
  const o = kc(t, e, a, r), c = Tg(o) ? ac : Ko;
  return i(o[0], c, n);
}
s(Q_, "buildLookaheadFuncForOptionalProd");
function eC(t, e, r, n) {
  const a = t.length, i = Wt(t, (o) => Wt(o, (c) => c.length === 1));
  if (e)
    return function(o) {
      const c = z(o, (l) => l.GATE);
      for (let l = 0; l < a; l++) {
        const u = t[l], f = u.length, d = c[l];
        if (!(d !== void 0 && d.call(this) === !1))
          e: for (let p = 0; p < f; p++) {
            const g = u[p], m = g.length;
            for (let T = 0; T < m; T++) {
              const _ = this.LA(T + 1);
              if (r(_, g[T]) === !1)
                continue e;
            }
            return l;
          }
      }
    };
  if (i && !n) {
    const o = z(t, (l) => qt(l)), c = Et(o, (l, u, f) => (V(u, (d) => {
      q(l, d.tokenTypeIdx) || (l[d.tokenTypeIdx] = f), V(d.categoryMatches, (p) => {
        q(l, p) || (l[p] = f);
      });
    }), l), {});
    return function() {
      const l = this.LA(1);
      return c[l.tokenTypeIdx];
    };
  } else
    return function() {
      for (let o = 0; o < a; o++) {
        const c = t[o], l = c.length;
        e: for (let u = 0; u < l; u++) {
          const f = c[u], d = f.length;
          for (let p = 0; p < d; p++) {
            const g = this.LA(p + 1);
            if (r(g, f[p]) === !1)
              continue e;
          }
          return o;
        }
      }
    };
}
s(eC, "buildAlternativesLookAheadFunc");
function tC(t, e, r) {
  const n = Wt(t, (i) => i.length === 1), a = t.length;
  if (n && !r) {
    const i = qt(t);
    if (i.length === 1 && Ae(i[0].categoryMatches)) {
      const c = i[0].tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === c;
      };
    } else {
      const o = Et(i, (c, l, u) => (c[l.tokenTypeIdx] = !0, V(l.categoryMatches, (f) => {
        c[f] = !0;
      }), c), []);
      return function() {
        const c = this.LA(1);
        return o[c.tokenTypeIdx] === !0;
      };
    }
  } else
    return function() {
      e: for (let i = 0; i < a; i++) {
        const o = t[i], c = o.length;
        for (let l = 0; l < c; l++) {
          const u = this.LA(l + 1);
          if (e(u, o[l]) === !1)
            continue e;
        }
        return !0;
      }
      return !1;
    };
}
s(tC, "buildSingleAlternativeLookaheadFunction");
var vi, JM = (vi = class extends zf {
  constructor(e, r, n) {
    super(), this.topProd = e, this.targetOccurrence = r, this.targetProdType = n;
  }
  startWalking() {
    return this.walk(this.topProd), this.restDef;
  }
  checkIsTarget(e, r, n, a) {
    return e.idx === this.targetOccurrence && this.targetProdType === r ? (this.restDef = n.concat(a), !0) : !1;
  }
  walkOption(e, r, n) {
    this.checkIsTarget(e, Le.OPTION, r, n) || super.walkOption(e, r, n);
  }
  walkAtLeastOne(e, r, n) {
    this.checkIsTarget(e, Le.REPETITION_MANDATORY, r, n) || super.walkOption(e, r, n);
  }
  walkAtLeastOneSep(e, r, n) {
    this.checkIsTarget(e, Le.REPETITION_MANDATORY_WITH_SEPARATOR, r, n) || super.walkOption(e, r, n);
  }
  walkMany(e, r, n) {
    this.checkIsTarget(e, Le.REPETITION, r, n) || super.walkOption(e, r, n);
  }
  walkManySep(e, r, n) {
    this.checkIsTarget(e, Le.REPETITION_WITH_SEPARATOR, r, n) || super.walkOption(e, r, n);
  }
}, s(vi, "RestDefinitionFinderWalker"), vi), Ti, rC = (Ti = class extends zo {
  constructor(e, r, n) {
    super(), this.targetOccurrence = e, this.targetProdType = r, this.targetRef = n, this.result = [];
  }
  checkIsTarget(e, r) {
    e.idx === this.targetOccurrence && this.targetProdType === r && (this.targetRef === void 0 || e === this.targetRef) && (this.result = e.definition);
  }
  visitOption(e) {
    this.checkIsTarget(e, Le.OPTION);
  }
  visitRepetition(e) {
    this.checkIsTarget(e, Le.REPETITION);
  }
  visitRepetitionMandatory(e) {
    this.checkIsTarget(e, Le.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.checkIsTarget(e, Le.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(e) {
    this.checkIsTarget(e, Le.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(e) {
    this.checkIsTarget(e, Le.ALTERNATION);
  }
}, s(Ti, "InsideDefinitionFinderVisitor"), Ti);
function rh(t) {
  const e = new Array(t);
  for (let r = 0; r < t; r++)
    e[r] = [];
  return e;
}
s(rh, "initializeArrayOfArrays");
function fu(t) {
  let e = [""];
  for (let r = 0; r < t.length; r++) {
    const n = t[r], a = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i];
      a.push(o + "_" + n.tokenTypeIdx);
      for (let c = 0; c < n.categoryMatches.length; c++) {
        const l = "_" + n.categoryMatches[c];
        a.push(o + l);
      }
    }
    e = a;
  }
  return e;
}
s(fu, "pathToHashKeys");
function nC(t, e, r) {
  for (let n = 0; n < t.length; n++) {
    if (n === r)
      continue;
    const a = t[n];
    for (let i = 0; i < e.length; i++) {
      const o = e[i];
      if (a[o] === !0)
        return !1;
    }
  }
  return !0;
}
s(nC, "isUniquePrefixHash");
function vg(t, e) {
  const r = z(t, (o) => Vu([o], 1)), n = rh(r.length), a = z(r, (o) => {
    const c = {};
    return V(o, (l) => {
      const u = fu(l.partialPath);
      V(u, (f) => {
        c[f] = !0;
      });
    }), c;
  });
  let i = r;
  for (let o = 1; o <= e; o++) {
    const c = i;
    i = rh(c.length);
    for (let l = 0; l < c.length; l++) {
      const u = c[l];
      for (let f = 0; f < u.length; f++) {
        const d = u[f].partialPath, p = u[f].suffixDef, g = fu(d);
        if (nC(a, g, l) || Ae(p) || d.length === e) {
          const T = n[l];
          if (Hu(T, d) === !1) {
            T.push(d);
            for (let _ = 0; _ < g.length; _++) {
              const v = g[_];
              a[l][v] = !0;
            }
          }
        } else {
          const T = Vu(p, o + 1, d);
          i[l] = i[l].concat(T), V(T, (_) => {
            const v = fu(_.partialPath);
            V(v, (w) => {
              a[l][w] = !0;
            });
          });
        }
      }
    }
  }
  return n;
}
s(vg, "lookAheadSequenceFromAlternatives");
function Nc(t, e, r, n) {
  const a = new rC(t, Le.ALTERNATION, n);
  return e.accept(a), vg(a.result, r);
}
s(Nc, "getLookaheadPathsForOr");
function kc(t, e, r, n) {
  const a = new rC(t, r);
  e.accept(a);
  const i = a.result, c = new JM(e, t, r).startWalking(), l = new gt({ definition: i }), u = new gt({ definition: c });
  return vg([l, u], n);
}
s(kc, "getLookaheadPathsForOptionalProd");
function Hu(t, e) {
  e: for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (n.length === e.length) {
      for (let a = 0; a < n.length; a++) {
        const i = e[a], o = n[a];
        if ((i === o || o.categoryMatchesMap[i.tokenTypeIdx] !== void 0) === !1)
          continue e;
      }
      return !0;
    }
  }
  return !1;
}
s(Hu, "containsPath");
function aC(t, e) {
  return t.length < e.length && Wt(t, (r, n) => {
    const a = e[n];
    return r === a || a.categoryMatchesMap[r.tokenTypeIdx];
  });
}
s(aC, "isStrictPrefixOfPath");
function Tg(t) {
  return Wt(t, (e) => Wt(e, (r) => Wt(r, (n) => Ae(n.categoryMatches))));
}
s(Tg, "areTokenCategoriesNotUsed");
function iC(t) {
  const e = t.lookaheadStrategy.validate({
    rules: t.rules,
    tokenTypes: t.tokenTypes,
    grammarName: t.grammarName
  });
  return z(e, (r) => Object.assign({ type: ct.CUSTOM_LOOKAHEAD_VALIDATION }, r));
}
s(iC, "validateLookahead");
function sC(t, e, r, n) {
  const a = Lt(t, (l) => oC(l, r)), i = yC(t, e, r), o = Lt(t, (l) => pC(l, r)), c = Lt(t, (l) => cC(l, t, n, r));
  return a.concat(i, o, c);
}
s(sC, "validateGrammar");
function oC(t, e) {
  const r = new ZM();
  t.accept(r);
  const n = r.allProductions, a = dM(n, lC), i = Yt(a, (c) => c.length > 1);
  return z(We(i), (c) => {
    const l = Ht(c), u = e.buildDuplicateFoundError(t, c), f = Ut(l), d = {
      message: u,
      type: ct.DUPLICATE_PRODUCTIONS,
      ruleName: t.name,
      dslName: f,
      occurrence: l.idx
    }, p = Rg(l);
    return p && (d.parameter = p), d;
  });
}
s(oC, "validateDuplicateProductions");
function lC(t) {
  return `${Ut(t)}_#_${t.idx}_#_${Rg(t)}`;
}
s(lC, "identifyProductionForDuplicates");
function Rg(t) {
  return t instanceof Se ? t.terminalType.name : t instanceof lt ? t.nonTerminalName : "";
}
s(Rg, "getExtraProductionArgument");
var Ri, ZM = (Ri = class extends zo {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitNonTerminal(e) {
    this.allProductions.push(e);
  }
  visitOption(e) {
    this.allProductions.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
  visitAlternation(e) {
    this.allProductions.push(e);
  }
  visitTerminal(e) {
    this.allProductions.push(e);
  }
}, s(Ri, "OccurrenceValidationCollector"), Ri);
function cC(t, e, r, n) {
  const a = [];
  if (Et(e, (o, c) => c.name === t.name ? o + 1 : o, 0) > 1) {
    const o = n.buildDuplicateRuleNameError({
      topLevelRule: t,
      grammarName: r
    });
    a.push({
      message: o,
      type: ct.DUPLICATE_RULE_NAME,
      ruleName: t.name
    });
  }
  return a;
}
s(cC, "validateRuleDoesNotAlreadyExist");
function uC(t, e, r) {
  const n = [];
  let a;
  return ft(e, t) || (a = `Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${r}<-as it is not defined in any of the super grammars `, n.push({
    message: a,
    type: ct.INVALID_RULE_OVERRIDE,
    ruleName: t
  })), n;
}
s(uC, "validateRuleIsOverridden");
function $g(t, e, r, n = []) {
  const a = [], i = Wl(e.definition);
  if (Ae(i))
    return [];
  {
    const o = t.name;
    ft(i, t) && a.push({
      message: r.buildLeftRecursionError({
        topLevelRule: t,
        leftRecursionPath: n
      }),
      type: ct.LEFT_RECURSION,
      ruleName: o
    });
    const l = jf(i, n.concat([t])), u = Lt(l, (f) => {
      const d = et(n);
      return d.push(f), $g(t, f, r, d);
    });
    return a.concat(u);
  }
}
s($g, "validateNoLeftRecursion");
function Wl(t) {
  let e = [];
  if (Ae(t))
    return e;
  const r = Ht(t);
  if (r instanceof lt)
    e.push(r.referencedRule);
  else if (r instanceof gt || r instanceof Qe || r instanceof _t || r instanceof Ct || r instanceof yt || r instanceof xe)
    e = e.concat(Wl(r.definition));
  else if (r instanceof vt)
    e = qt(z(r.definition, (i) => Wl(i.definition)));
  else if (!(r instanceof Se)) throw Error("non exhaustive match");
  const n = nc(r), a = t.length > 1;
  if (n && a) {
    const i = Ze(t);
    return e.concat(Wl(i));
  } else
    return e;
}
s(Wl, "getFirstNoneTerminal");
var $i, Ag = ($i = class extends zo {
  constructor() {
    super(...arguments), this.alternations = [];
  }
  visitAlternation(e) {
    this.alternations.push(e);
  }
}, s($i, "OrCollector"), $i);
function fC(t, e) {
  const r = new Ag();
  t.accept(r);
  const n = r.alternations;
  return Lt(n, (i) => {
    const o = rc(i.definition);
    return Lt(o, (c, l) => {
      const u = yg([c], [], Ko, 1);
      return Ae(u) ? [
        {
          message: e.buildEmptyAlternationError({
            topLevelRule: t,
            alternation: i,
            emptyChoiceIdx: l
          }),
          type: ct.NONE_LAST_EMPTY_ALT,
          ruleName: t.name,
          occurrence: i.idx,
          alternative: l + 1
        }
      ] : [];
    });
  });
}
s(fC, "validateEmptyOrAlternative");
function dC(t, e, r) {
  const n = new Ag();
  t.accept(n);
  let a = n.alternations;
  return a = Uf(a, (o) => o.ignoreAmbiguities === !0), Lt(a, (o) => {
    const c = o.idx, l = o.maxLookahead || e, u = Nc(c, t, l, o), f = mC(u, o, t, r), d = gC(u, o, t, r);
    return f.concat(d);
  });
}
s(dC, "validateAmbiguousAlternationAlternatives");
var Ai, QM = (Ai = class extends zo {
  constructor() {
    super(...arguments), this.allProductions = [];
  }
  visitRepetitionWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatory(e) {
    this.allProductions.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.allProductions.push(e);
  }
  visitRepetition(e) {
    this.allProductions.push(e);
  }
}, s(Ai, "RepetitionCollector"), Ai);
function pC(t, e) {
  const r = new Ag();
  t.accept(r);
  const n = r.alternations;
  return Lt(n, (i) => i.definition.length > 255 ? [
    {
      message: e.buildTooManyAlternativesError({
        topLevelRule: t,
        alternation: i
      }),
      type: ct.TOO_MANY_ALTS,
      ruleName: t.name,
      occurrence: i.idx
    }
  ] : []);
}
s(pC, "validateTooManyAlts");
function hC(t, e, r) {
  const n = [];
  return V(t, (a) => {
    const i = new QM();
    a.accept(i);
    const o = i.allProductions;
    V(o, (c) => {
      const l = qf(c), u = c.maxLookahead || e, f = c.idx, p = kc(f, a, l, u)[0];
      if (Ae(qt(p))) {
        const g = r.buildEmptyRepetitionError({
          topLevelRule: a,
          repetition: c
        });
        n.push({
          message: g,
          type: ct.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: a.name
        });
      }
    });
  }), n;
}
s(hC, "validateSomeNonEmptyLookaheadPath");
function mC(t, e, r, n) {
  const a = [], i = Et(t, (c, l, u) => (e.definition[u].ignoreAmbiguities === !0 || V(l, (f) => {
    const d = [u];
    V(t, (p, g) => {
      u !== g && Hu(p, f) && // ignore (skip) ambiguities with this "other" alternative
      e.definition[g].ignoreAmbiguities !== !0 && d.push(g);
    }), d.length > 1 && !Hu(a, f) && (a.push(f), c.push({
      alts: d,
      path: f
    }));
  }), c), []);
  return z(i, (c) => {
    const l = z(c.alts, (f) => f + 1);
    return {
      message: n.buildAlternationAmbiguityError({
        topLevelRule: r,
        alternation: e,
        ambiguityIndices: l,
        prefixPath: c.path
      }),
      type: ct.AMBIGUOUS_ALTS,
      ruleName: r.name,
      occurrence: e.idx,
      alternatives: c.alts
    };
  });
}
s(mC, "checkAlternativesAmbiguities");
function gC(t, e, r, n) {
  const a = Et(t, (o, c, l) => {
    const u = z(c, (f) => ({ idx: l, path: f }));
    return o.concat(u);
  }, []);
  return Sc(Lt(a, (o) => {
    if (e.definition[o.idx].ignoreAmbiguities === !0)
      return [];
    const l = o.idx, u = o.path, f = Ft(a, (p) => (
      // ignore (skip) ambiguities with this "other" alternative
      e.definition[p.idx].ignoreAmbiguities !== !0 && p.idx < l && // checking for strict prefix because identical lookaheads
      // will be be detected using a different validation.
      aC(p.path, u)
    ));
    return z(f, (p) => {
      const g = [p.idx + 1, l + 1], m = e.idx === 0 ? "" : e.idx;
      return {
        message: n.buildAlternationPrefixAmbiguityError({
          topLevelRule: r,
          alternation: e,
          ambiguityIndices: g,
          prefixPath: p.path
        }),
        type: ct.AMBIGUOUS_PREFIX_ALTS,
        ruleName: r.name,
        occurrence: m,
        alternatives: g
      };
    });
  }));
}
s(gC, "checkPrefixAlternativesAmbiguities");
function yC(t, e, r) {
  const n = [], a = z(e, (i) => i.name);
  return V(t, (i) => {
    const o = i.name;
    if (ft(a, o)) {
      const c = r.buildNamespaceConflictError(i);
      n.push({
        message: c,
        type: ct.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: o
      });
    }
  }), n;
}
s(yC, "checkTerminalAndNoneTerminalsNameSpace");
function vC(t) {
  const e = ig(t, {
    errMsgProvider: qM
  }), r = {};
  return V(t.rules, (n) => {
    r[n.name] = n;
  }), X_(r, e.errMsgProvider);
}
s(vC, "resolveGrammar");
function TC(t) {
  return t = ig(t, {
    errMsgProvider: In
  }), sC(t.rules, t.tokenTypes, t.errMsgProvider, t.grammarName);
}
s(TC, "validateGrammar");
var RC = "MismatchedTokenException", $C = "NoViableAltException", AC = "EarlyExitException", EC = "NotAllInputParsedException", _C = [
  RC,
  $C,
  AC,
  EC
];
Object.freeze(_C);
function ic(t) {
  return ft(_C, t.name);
}
s(ic, "isRecognitionException");
var Ei, Wf = (Ei = class extends Error {
  constructor(e, r) {
    super(e), this.token = r, this.resyncedTokens = [], Object.setPrototypeOf(this, new.target.prototype), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
  }
}, s(Ei, "RecognitionException"), Ei), _i, CC = (_i = class extends Wf {
  constructor(e, r, n) {
    super(e, r), this.previousToken = n, this.name = RC;
  }
}, s(_i, "MismatchedTokenException"), _i), Ci, ex = (Ci = class extends Wf {
  constructor(e, r, n) {
    super(e, r), this.previousToken = n, this.name = $C;
  }
}, s(Ci, "NoViableAltException"), Ci), bi, tx = (bi = class extends Wf {
  constructor(e, r) {
    super(e, r), this.name = EC;
  }
}, s(bi, "NotAllInputParsedException"), bi), Si, rx = (Si = class extends Wf {
  constructor(e, r, n) {
    super(e, r), this.previousToken = n, this.name = AC;
  }
}, s(Si, "EarlyExitException"), Si), Ed = {}, bC = "InRuleRecoveryException", wi, nx = (wi = class extends Error {
  constructor(e) {
    super(e), this.name = bC;
  }
}, s(wi, "InRuleRecoveryException"), wi), Ii, ax = (Ii = class {
  initRecoverable(e) {
    this.firstAfterRepMap = {}, this.resyncFollows = {}, this.recoveryEnabled = q(e, "recoveryEnabled") ? e.recoveryEnabled : kr.recoveryEnabled, this.recoveryEnabled && (this.attemptInRepetitionRecovery = SC);
  }
  getTokenToInsert(e) {
    const r = Ic(e, "", NaN, NaN, NaN, NaN, NaN, NaN);
    return r.isInsertedInRecovery = !0, r;
  }
  canTokenTypeBeInsertedInRecovery(e) {
    return !0;
  }
  canTokenTypeBeDeletedInRecovery(e) {
    return !0;
  }
  tryInRepetitionRecovery(e, r, n, a) {
    const i = this.findReSyncTokenType(), o = this.exportLexerState(), c = [];
    let l = !1;
    const u = this.LA(1);
    let f = this.LA(1);
    const d = /* @__PURE__ */ s(() => {
      const p = this.LA(0), g = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: a,
        actual: u,
        previous: p,
        ruleName: this.getCurrRuleFullName()
      }), m = new CC(g, u, this.LA(0));
      m.resyncedTokens = rc(c), this.SAVE_ERROR(m);
    }, "generateErrorMessage");
    for (; !l; )
      if (this.tokenMatcher(f, a)) {
        d();
        return;
      } else if (n.call(this)) {
        d(), e.apply(this, r);
        return;
      } else this.tokenMatcher(f, i) ? l = !0 : (f = this.SKIP_TOKEN(), this.addToResyncTokens(f, c));
    this.importLexerState(o);
  }
  shouldInRepetitionRecoveryBeTried(e, r, n) {
    return !(n === !1 || this.tokenMatcher(this.LA(1), e) || this.isBackTracking() || this.canPerformInRuleRecovery(e, this.getFollowsForInRuleRecovery(e, r)));
  }
  // Error Recovery functionality
  getFollowsForInRuleRecovery(e, r) {
    const n = this.getCurrentGrammarPath(e, r);
    return this.getNextPossibleTokenTypes(n);
  }
  tryInRuleRecovery(e, r) {
    if (this.canRecoverWithSingleTokenInsertion(e, r))
      return this.getTokenToInsert(e);
    if (this.canRecoverWithSingleTokenDeletion(e)) {
      const n = this.SKIP_TOKEN();
      return this.consumeToken(), n;
    }
    throw new nx("sad sad panda");
  }
  canPerformInRuleRecovery(e, r) {
    return this.canRecoverWithSingleTokenInsertion(e, r) || this.canRecoverWithSingleTokenDeletion(e);
  }
  canRecoverWithSingleTokenInsertion(e, r) {
    if (!this.canTokenTypeBeInsertedInRecovery(e) || Ae(r))
      return !1;
    const n = this.LA(1);
    return Do(r, (i) => this.tokenMatcher(n, i)) !== void 0;
  }
  canRecoverWithSingleTokenDeletion(e) {
    return this.canTokenTypeBeDeletedInRecovery(e) ? this.tokenMatcher(this.LA(2), e) : !1;
  }
  isInCurrentRuleReSyncSet(e) {
    const r = this.getCurrFollowKey(), n = this.getFollowSetFromFollowKey(r);
    return ft(n, e);
  }
  findReSyncTokenType() {
    const e = this.flattenFollowSet();
    let r = this.LA(1), n = 2;
    for (; ; ) {
      const a = Do(e, (i) => gg(r, i));
      if (a !== void 0)
        return a;
      r = this.LA(n), n++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1)
      return Ed;
    const e = this.getLastExplicitRuleShortName(), r = this.getLastExplicitRuleOccurrenceIndex(), n = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(e),
      idxInCallingRule: r,
      inRule: this.shortRuleNameToFullName(n)
    };
  }
  buildFullFollowKeyStack() {
    const e = this.RULE_STACK, r = this.RULE_OCCURRENCE_STACK;
    return z(e, (n, a) => a === 0 ? Ed : {
      ruleName: this.shortRuleNameToFullName(n),
      idxInCallingRule: r[a],
      inRule: this.shortRuleNameToFullName(e[a - 1])
    });
  }
  flattenFollowSet() {
    const e = z(this.buildFullFollowKeyStack(), (r) => this.getFollowSetFromFollowKey(r));
    return qt(e);
  }
  getFollowSetFromFollowKey(e) {
    if (e === Ed)
      return [Hr];
    const r = e.ruleName + e.idxInCallingRule + f_ + e.inRule;
    return this.resyncFollows[r];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(e, r) {
    return this.tokenMatcher(e, Hr) || r.push(e), r;
  }
  reSyncTo(e) {
    const r = [];
    let n = this.LA(1);
    for (; this.tokenMatcher(n, e) === !1; )
      n = this.SKIP_TOKEN(), this.addToResyncTokens(n, r);
    return rc(r);
  }
  attemptInRepetitionRecovery(e, r, n, a, i, o, c) {
  }
  getCurrentGrammarPath(e, r) {
    const n = this.getHumanReadableRuleStack(), a = et(this.RULE_OCCURRENCE_STACK);
    return {
      ruleStack: n,
      occurrenceStack: a,
      lastTok: e,
      lastTokOccurrence: r
    };
  }
  getHumanReadableRuleStack() {
    return z(this.RULE_STACK, (e) => this.shortRuleNameToFullName(e));
  }
}, s(Ii, "Recoverable"), Ii);
function SC(t, e, r, n, a, i, o) {
  const c = this.getKeyForAutomaticLookahead(n, a);
  let l = this.firstAfterRepMap[c];
  if (l === void 0) {
    const p = this.getCurrRuleFullName(), g = this.getGAstProductions()[p];
    l = new i(g, a).startWalking(), this.firstAfterRepMap[c] = l;
  }
  let u = l.token, f = l.occurrence;
  const d = l.isEndOfRule;
  this.RULE_STACK.length === 1 && d && u === void 0 && (u = Hr, f = 1), !(u === void 0 || f === void 0) && this.shouldInRepetitionRecoveryBeTried(u, f, o) && this.tryInRepetitionRecovery(t, e, r, u);
}
s(SC, "attemptInRepetitionRecovery");
var ix = 4, en = 8, wC = 1 << en, IC = 2 << en, nh = 3 << en, ah = 4 << en, ih = 5 << en, du = 6 << en;
function pu(t, e, r) {
  return r | e | t;
}
s(pu, "getKeyForAutomaticLookahead");
var Ni, Eg = (Ni = class {
  constructor(e) {
    var r;
    this.maxLookahead = (r = e?.maxLookahead) !== null && r !== void 0 ? r : kr.maxLookahead;
  }
  validate(e) {
    const r = this.validateNoLeftRecursion(e.rules);
    if (Ae(r)) {
      const n = this.validateEmptyOrAlternatives(e.rules), a = this.validateAmbiguousAlternationAlternatives(e.rules, this.maxLookahead), i = this.validateSomeNonEmptyLookaheadPath(e.rules, this.maxLookahead);
      return [
        ...r,
        ...n,
        ...a,
        ...i
      ];
    }
    return r;
  }
  validateNoLeftRecursion(e) {
    return Lt(e, (r) => $g(r, r, In));
  }
  validateEmptyOrAlternatives(e) {
    return Lt(e, (r) => fC(r, In));
  }
  validateAmbiguousAlternationAlternatives(e, r) {
    return Lt(e, (n) => dC(n, r, In));
  }
  validateSomeNonEmptyLookaheadPath(e, r) {
    return hC(e, r, In);
  }
  buildLookaheadForAlternation(e) {
    return Z_(e.prodOccurrence, e.rule, e.maxLookahead, e.hasPredicates, e.dynamicTokensEnabled, eC);
  }
  buildLookaheadForOptional(e) {
    return Q_(e.prodOccurrence, e.rule, e.maxLookahead, e.dynamicTokensEnabled, qf(e.prodType), tC);
  }
}, s(Ni, "LLkLookaheadStrategy"), Ni), ki, sx = (ki = class {
  initLooksAhead(e) {
    this.dynamicTokensEnabled = q(e, "dynamicTokensEnabled") ? e.dynamicTokensEnabled : kr.dynamicTokensEnabled, this.maxLookahead = q(e, "maxLookahead") ? e.maxLookahead : kr.maxLookahead, this.lookaheadStrategy = q(e, "lookaheadStrategy") ? e.lookaheadStrategy : new Eg({ maxLookahead: this.maxLookahead }), this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(e) {
    V(e, (r) => {
      this.TRACE_INIT(`${r.name} Rule Lookahead`, () => {
        const { alternation: n, repetition: a, option: i, repetitionMandatory: o, repetitionMandatoryWithSeparator: c, repetitionWithSeparator: l } = NC(r);
        V(n, (u) => {
          const f = u.idx === 0 ? "" : u.idx;
          this.TRACE_INIT(`${Ut(u)}${f}`, () => {
            const d = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: u.idx,
              rule: r,
              maxLookahead: u.maxLookahead || this.maxLookahead,
              hasPredicates: u.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            }), p = pu(this.fullRuleNameToShort[r.name], wC, u.idx);
            this.setLaFuncCache(p, d);
          });
        }), V(a, (u) => {
          this.computeLookaheadFunc(r, u.idx, nh, "Repetition", u.maxLookahead, Ut(u));
        }), V(i, (u) => {
          this.computeLookaheadFunc(r, u.idx, IC, "Option", u.maxLookahead, Ut(u));
        }), V(o, (u) => {
          this.computeLookaheadFunc(r, u.idx, ah, "RepetitionMandatory", u.maxLookahead, Ut(u));
        }), V(c, (u) => {
          this.computeLookaheadFunc(r, u.idx, du, "RepetitionMandatoryWithSeparator", u.maxLookahead, Ut(u));
        }), V(l, (u) => {
          this.computeLookaheadFunc(r, u.idx, ih, "RepetitionWithSeparator", u.maxLookahead, Ut(u));
        });
      });
    });
  }
  computeLookaheadFunc(e, r, n, a, i, o) {
    this.TRACE_INIT(`${o}${r === 0 ? "" : r}`, () => {
      const c = this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence: r,
        rule: e,
        maxLookahead: i || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType: a
      }), l = pu(this.fullRuleNameToShort[e.name], n, r);
      this.setLaFuncCache(l, c);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(e, r) {
    const n = this.getLastExplicitRuleShortName();
    return pu(n, e, r);
  }
  getLaFuncFromCache(e) {
    return this.lookAheadFuncsCache.get(e);
  }
  /* istanbul ignore next */
  setLaFuncCache(e, r) {
    this.lookAheadFuncsCache.set(e, r);
  }
}, s(ki, "LooksAhead"), ki), Pi, ox = (Pi = class extends zo {
  constructor() {
    super(...arguments), this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  reset() {
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  visitOption(e) {
    this.dslMethods.option.push(e);
  }
  visitRepetitionWithSeparator(e) {
    this.dslMethods.repetitionWithSeparator.push(e);
  }
  visitRepetitionMandatory(e) {
    this.dslMethods.repetitionMandatory.push(e);
  }
  visitRepetitionMandatoryWithSeparator(e) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(e);
  }
  visitRepetition(e) {
    this.dslMethods.repetition.push(e);
  }
  visitAlternation(e) {
    this.dslMethods.alternation.push(e);
  }
}, s(Pi, "DslMethodsCollectorVisitor"), Pi), Fc = new ox();
function NC(t) {
  Fc.reset(), t.accept(Fc);
  const e = Fc.dslMethods;
  return Fc.reset(), e;
}
s(NC, "collectMethods");
function sh(t, e) {
  isNaN(t.startOffset) === !0 ? (t.startOffset = e.startOffset, t.endOffset = e.endOffset) : t.endOffset < e.endOffset && (t.endOffset = e.endOffset);
}
s(sh, "setNodeLocationOnlyOffset");
function oh(t, e) {
  isNaN(t.startOffset) === !0 ? (t.startOffset = e.startOffset, t.startColumn = e.startColumn, t.startLine = e.startLine, t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine) : t.endOffset < e.endOffset && (t.endOffset = e.endOffset, t.endColumn = e.endColumn, t.endLine = e.endLine);
}
s(oh, "setNodeLocationFull");
function kC(t, e, r) {
  t.children[r] === void 0 ? t.children[r] = [e] : t.children[r].push(e);
}
s(kC, "addTerminalToCst");
function PC(t, e, r) {
  t.children[e] === void 0 ? t.children[e] = [r] : t.children[e].push(r);
}
s(PC, "addNoneTerminalToCst");
var lx = "name";
function _g(t, e) {
  Object.defineProperty(t, lx, {
    enumerable: !1,
    configurable: !0,
    writable: !1,
    value: e
  });
}
s(_g, "defineNameProp");
function OC(t, e) {
  const r = $t(t), n = r.length;
  for (let a = 0; a < n; a++) {
    const i = r[a], o = t[i], c = o.length;
    for (let l = 0; l < c; l++) {
      const u = o[l];
      u.tokenTypeIdx === void 0 && this[u.name](u.children, e);
    }
  }
}
s(OC, "defaultVisit");
function LC(t, e) {
  const r = /* @__PURE__ */ s(function() {
  }, "derivedConstructor");
  _g(r, t + "BaseSemantics");
  const n = {
    visit: /* @__PURE__ */ s(function(a, i) {
      if (ae(a) && (a = a[0]), !Ir(a))
        return this[a.name](a.children, i);
    }, "visit"),
    validateVisitor: /* @__PURE__ */ s(function() {
      const a = MC(this, e);
      if (!Ae(a)) {
        const i = z(a, (o) => o.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${i.join(`

`).replace(/\n/g, `
	`)}`);
      }
    }, "validateVisitor")
  };
  return r.prototype = n, r.prototype.constructor = r, r._RULE_NAMES = e, r;
}
s(LC, "createBaseSemanticVisitorConstructor");
function DC(t, e, r) {
  const n = /* @__PURE__ */ s(function() {
  }, "derivedConstructor");
  _g(n, t + "BaseSemanticsWithDefaults");
  const a = Object.create(r.prototype);
  return V(e, (i) => {
    a[i] = OC;
  }), n.prototype = a, n.prototype.constructor = n, n;
}
s(DC, "createBaseVisitorConstructorWithDefaults");
var lh;
(function(t) {
  t[t.REDUNDANT_METHOD = 0] = "REDUNDANT_METHOD", t[t.MISSING_METHOD = 1] = "MISSING_METHOD";
})(lh || (lh = {}));
function MC(t, e) {
  return xC(t, e);
}
s(MC, "validateVisitor");
function xC(t, e) {
  const r = Ft(e, (a) => Dr(t[a]) === !1), n = z(r, (a) => ({
    msg: `Missing visitor method: <${a}> on ${t.constructor.name} CST Visitor.`,
    type: lh.MISSING_METHOD,
    methodName: a
  }));
  return Sc(n);
}
s(xC, "validateMissingCstMethods");
var Oi, cx = (Oi = class {
  initTreeBuilder(e) {
    if (this.CST_STACK = [], this.outputCst = e.outputCst, this.nodeLocationTracking = q(e, "nodeLocationTracking") ? e.nodeLocationTracking : kr.nodeLocationTracking, !this.outputCst)
      this.cstInvocationStateUpdate = qe, this.cstFinallyStateUpdate = qe, this.cstPostTerminal = qe, this.cstPostNonTerminal = qe, this.cstPostRule = qe;
    else if (/full/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = oh, this.setNodeLocationFromNode = oh, this.cstPostRule = qe, this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery) : (this.setNodeLocationFromToken = qe, this.setNodeLocationFromNode = qe, this.cstPostRule = this.cstPostRuleFull, this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular);
    else if (/onlyOffset/i.test(this.nodeLocationTracking))
      this.recoveryEnabled ? (this.setNodeLocationFromToken = sh, this.setNodeLocationFromNode = sh, this.cstPostRule = qe, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery) : (this.setNodeLocationFromToken = qe, this.setNodeLocationFromNode = qe, this.cstPostRule = this.cstPostRuleOnlyOffset, this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular);
    else if (/none/i.test(this.nodeLocationTracking))
      this.setNodeLocationFromToken = qe, this.setNodeLocationFromNode = qe, this.cstPostRule = qe, this.setInitialNodeLocation = qe;
    else
      throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`);
  }
  setInitialNodeLocationOnlyOffsetRecovery(e) {
    e.location = {
      startOffset: NaN,
      endOffset: NaN
    };
  }
  setInitialNodeLocationOnlyOffsetRegular(e) {
    e.location = {
      // without error recovery the starting Location of a new CstNode is guaranteed
      // To be the next Token's startOffset (for valid inputs).
      // For invalid inputs there won't be any CSTOutput so this potential
      // inaccuracy does not matter
      startOffset: this.LA(1).startOffset,
      endOffset: NaN
    };
  }
  setInitialNodeLocationFullRecovery(e) {
    e.location = {
      startOffset: NaN,
      startLine: NaN,
      startColumn: NaN,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */
  setInitialNodeLocationFullRegular(e) {
    const r = this.LA(1);
    e.location = {
      startOffset: r.startOffset,
      startLine: r.startLine,
      startColumn: r.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(e) {
    const r = {
      name: e,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(r), this.CST_STACK.push(r);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(e) {
    const r = this.LA(0), n = e.location;
    n.startOffset <= r.startOffset ? (n.endOffset = r.endOffset, n.endLine = r.endLine, n.endColumn = r.endColumn) : (n.startOffset = NaN, n.startLine = NaN, n.startColumn = NaN);
  }
  cstPostRuleOnlyOffset(e) {
    const r = this.LA(0), n = e.location;
    n.startOffset <= r.startOffset ? n.endOffset = r.endOffset : n.startOffset = NaN;
  }
  cstPostTerminal(e, r) {
    const n = this.CST_STACK[this.CST_STACK.length - 1];
    kC(n, r, e), this.setNodeLocationFromToken(n.location, r);
  }
  cstPostNonTerminal(e, r) {
    const n = this.CST_STACK[this.CST_STACK.length - 1];
    PC(n, r, e), this.setNodeLocationFromNode(n.location, e.location);
  }
  getBaseCstVisitorConstructor() {
    if (Ir(this.baseCstVisitorConstructor)) {
      const e = LC(this.className, $t(this.gastProductionsCache));
      return this.baseCstVisitorConstructor = e, e;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (Ir(this.baseCstVisitorWithDefaultsConstructor)) {
      const e = DC(this.className, $t(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
      return this.baseCstVisitorWithDefaultsConstructor = e, e;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getLastExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 1];
  }
  getPreviousExplicitRuleShortName() {
    const e = this.RULE_STACK;
    return e[e.length - 2];
  }
  getLastExplicitRuleOccurrenceIndex() {
    const e = this.RULE_OCCURRENCE_STACK;
    return e[e.length - 1];
  }
}, s(Oi, "TreeBuilder"), Oi), Li, ux = (Li = class {
  initLexerAdapter() {
    this.tokVector = [], this.tokVectorLength = 0, this.currIdx = -1;
  }
  set input(e) {
    if (this.selfAnalysisDone !== !0)
      throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");
    this.reset(), this.tokVector = e, this.tokVectorLength = e.length;
  }
  get input() {
    return this.tokVector;
  }
  // skips a token and returns the next token
  SKIP_TOKEN() {
    return this.currIdx <= this.tokVector.length - 2 ? (this.consumeToken(), this.LA(1)) : Yu;
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  LA(e) {
    const r = this.currIdx + e;
    return r < 0 || this.tokVectorLength <= r ? Yu : this.tokVector[r];
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(e) {
    this.currIdx = e;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVector.length - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
}, s(Li, "LexerAdapter"), Li), Di, fx = (Di = class {
  ACTION(e) {
    return e.call(this);
  }
  consume(e, r, n) {
    return this.consumeInternal(r, e, n);
  }
  subrule(e, r, n) {
    return this.subruleInternal(r, e, n);
  }
  option(e, r) {
    return this.optionInternal(r, e);
  }
  or(e, r) {
    return this.orInternal(r, e);
  }
  many(e, r) {
    return this.manyInternal(e, r);
  }
  atLeastOne(e, r) {
    return this.atLeastOneInternal(e, r);
  }
  CONSUME(e, r) {
    return this.consumeInternal(e, 0, r);
  }
  CONSUME1(e, r) {
    return this.consumeInternal(e, 1, r);
  }
  CONSUME2(e, r) {
    return this.consumeInternal(e, 2, r);
  }
  CONSUME3(e, r) {
    return this.consumeInternal(e, 3, r);
  }
  CONSUME4(e, r) {
    return this.consumeInternal(e, 4, r);
  }
  CONSUME5(e, r) {
    return this.consumeInternal(e, 5, r);
  }
  CONSUME6(e, r) {
    return this.consumeInternal(e, 6, r);
  }
  CONSUME7(e, r) {
    return this.consumeInternal(e, 7, r);
  }
  CONSUME8(e, r) {
    return this.consumeInternal(e, 8, r);
  }
  CONSUME9(e, r) {
    return this.consumeInternal(e, 9, r);
  }
  SUBRULE(e, r) {
    return this.subruleInternal(e, 0, r);
  }
  SUBRULE1(e, r) {
    return this.subruleInternal(e, 1, r);
  }
  SUBRULE2(e, r) {
    return this.subruleInternal(e, 2, r);
  }
  SUBRULE3(e, r) {
    return this.subruleInternal(e, 3, r);
  }
  SUBRULE4(e, r) {
    return this.subruleInternal(e, 4, r);
  }
  SUBRULE5(e, r) {
    return this.subruleInternal(e, 5, r);
  }
  SUBRULE6(e, r) {
    return this.subruleInternal(e, 6, r);
  }
  SUBRULE7(e, r) {
    return this.subruleInternal(e, 7, r);
  }
  SUBRULE8(e, r) {
    return this.subruleInternal(e, 8, r);
  }
  SUBRULE9(e, r) {
    return this.subruleInternal(e, 9, r);
  }
  OPTION(e) {
    return this.optionInternal(e, 0);
  }
  OPTION1(e) {
    return this.optionInternal(e, 1);
  }
  OPTION2(e) {
    return this.optionInternal(e, 2);
  }
  OPTION3(e) {
    return this.optionInternal(e, 3);
  }
  OPTION4(e) {
    return this.optionInternal(e, 4);
  }
  OPTION5(e) {
    return this.optionInternal(e, 5);
  }
  OPTION6(e) {
    return this.optionInternal(e, 6);
  }
  OPTION7(e) {
    return this.optionInternal(e, 7);
  }
  OPTION8(e) {
    return this.optionInternal(e, 8);
  }
  OPTION9(e) {
    return this.optionInternal(e, 9);
  }
  OR(e) {
    return this.orInternal(e, 0);
  }
  OR1(e) {
    return this.orInternal(e, 1);
  }
  OR2(e) {
    return this.orInternal(e, 2);
  }
  OR3(e) {
    return this.orInternal(e, 3);
  }
  OR4(e) {
    return this.orInternal(e, 4);
  }
  OR5(e) {
    return this.orInternal(e, 5);
  }
  OR6(e) {
    return this.orInternal(e, 6);
  }
  OR7(e) {
    return this.orInternal(e, 7);
  }
  OR8(e) {
    return this.orInternal(e, 8);
  }
  OR9(e) {
    return this.orInternal(e, 9);
  }
  MANY(e) {
    this.manyInternal(0, e);
  }
  MANY1(e) {
    this.manyInternal(1, e);
  }
  MANY2(e) {
    this.manyInternal(2, e);
  }
  MANY3(e) {
    this.manyInternal(3, e);
  }
  MANY4(e) {
    this.manyInternal(4, e);
  }
  MANY5(e) {
    this.manyInternal(5, e);
  }
  MANY6(e) {
    this.manyInternal(6, e);
  }
  MANY7(e) {
    this.manyInternal(7, e);
  }
  MANY8(e) {
    this.manyInternal(8, e);
  }
  MANY9(e) {
    this.manyInternal(9, e);
  }
  MANY_SEP(e) {
    this.manySepFirstInternal(0, e);
  }
  MANY_SEP1(e) {
    this.manySepFirstInternal(1, e);
  }
  MANY_SEP2(e) {
    this.manySepFirstInternal(2, e);
  }
  MANY_SEP3(e) {
    this.manySepFirstInternal(3, e);
  }
  MANY_SEP4(e) {
    this.manySepFirstInternal(4, e);
  }
  MANY_SEP5(e) {
    this.manySepFirstInternal(5, e);
  }
  MANY_SEP6(e) {
    this.manySepFirstInternal(6, e);
  }
  MANY_SEP7(e) {
    this.manySepFirstInternal(7, e);
  }
  MANY_SEP8(e) {
    this.manySepFirstInternal(8, e);
  }
  MANY_SEP9(e) {
    this.manySepFirstInternal(9, e);
  }
  AT_LEAST_ONE(e) {
    this.atLeastOneInternal(0, e);
  }
  AT_LEAST_ONE1(e) {
    return this.atLeastOneInternal(1, e);
  }
  AT_LEAST_ONE2(e) {
    this.atLeastOneInternal(2, e);
  }
  AT_LEAST_ONE3(e) {
    this.atLeastOneInternal(3, e);
  }
  AT_LEAST_ONE4(e) {
    this.atLeastOneInternal(4, e);
  }
  AT_LEAST_ONE5(e) {
    this.atLeastOneInternal(5, e);
  }
  AT_LEAST_ONE6(e) {
    this.atLeastOneInternal(6, e);
  }
  AT_LEAST_ONE7(e) {
    this.atLeastOneInternal(7, e);
  }
  AT_LEAST_ONE8(e) {
    this.atLeastOneInternal(8, e);
  }
  AT_LEAST_ONE9(e) {
    this.atLeastOneInternal(9, e);
  }
  AT_LEAST_ONE_SEP(e) {
    this.atLeastOneSepFirstInternal(0, e);
  }
  AT_LEAST_ONE_SEP1(e) {
    this.atLeastOneSepFirstInternal(1, e);
  }
  AT_LEAST_ONE_SEP2(e) {
    this.atLeastOneSepFirstInternal(2, e);
  }
  AT_LEAST_ONE_SEP3(e) {
    this.atLeastOneSepFirstInternal(3, e);
  }
  AT_LEAST_ONE_SEP4(e) {
    this.atLeastOneSepFirstInternal(4, e);
  }
  AT_LEAST_ONE_SEP5(e) {
    this.atLeastOneSepFirstInternal(5, e);
  }
  AT_LEAST_ONE_SEP6(e) {
    this.atLeastOneSepFirstInternal(6, e);
  }
  AT_LEAST_ONE_SEP7(e) {
    this.atLeastOneSepFirstInternal(7, e);
  }
  AT_LEAST_ONE_SEP8(e) {
    this.atLeastOneSepFirstInternal(8, e);
  }
  AT_LEAST_ONE_SEP9(e) {
    this.atLeastOneSepFirstInternal(9, e);
  }
  RULE(e, r, n = Xu) {
    if (ft(this.definedRulesNames, e)) {
      const o = {
        message: In.buildDuplicateRuleNameError({
          topLevelRule: e,
          grammarName: this.className
        }),
        type: ct.DUPLICATE_RULE_NAME,
        ruleName: e
      };
      this.definitionErrors.push(o);
    }
    this.definedRulesNames.push(e);
    const a = this.defineRule(e, r, n);
    return this[e] = a, a;
  }
  OVERRIDE_RULE(e, r, n = Xu) {
    const a = uC(e, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(a);
    const i = this.defineRule(e, r, n);
    return this[e] = i, i;
  }
  BACKTRACK(e, r) {
    return function() {
      this.isBackTrackingStack.push(1);
      const n = this.saveRecogState();
      try {
        return e.apply(this, r), !0;
      } catch (a) {
        if (ic(a))
          return !1;
        throw a;
      } finally {
        this.reloadRecogState(n), this.isBackTrackingStack.pop();
      }
    };
  }
  // GAST export APIs
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return i_(We(this.gastProductionsCache));
  }
}, s(Di, "RecognizerApi"), Di), Mi, dx = (Mi = class {
  initRecognizerEngine(e, r) {
    if (this.className = this.constructor.name, this.shortRuleNameToFull = {}, this.fullRuleNameToShort = {}, this.ruleShortNameIdx = 256, this.tokenMatcher = ac, this.subruleIdx = 0, this.definedRulesNames = [], this.tokensMap = {}, this.isBackTrackingStack = [], this.RULE_STACK = [], this.RULE_OCCURRENCE_STACK = [], this.gastProductionsCache = {}, q(r, "serializedGrammar"))
      throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);
    if (ae(e)) {
      if (Ae(e))
        throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);
      if (typeof e[0].startOffset == "number")
        throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`);
    }
    if (ae(e))
      this.tokensMap = Et(e, (i, o) => (i[o.name] = o, i), {});
    else if (q(e, "modes") && Wt(qt(We(e.modes)), H_)) {
      const i = qt(We(e.modes)), o = sg(i);
      this.tokensMap = Et(o, (c, l) => (c[l.name] = l, c), {});
    } else if (Mt(e))
      this.tokensMap = et(e);
    else
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    this.tokensMap.EOF = Hr;
    const n = q(e, "modes") ? qt(We(e.modes)) : We(e), a = Wt(n, (i) => Ae(i.categoryMatches));
    this.tokenMatcher = a ? ac : Ko, qo(We(this.tokensMap));
  }
  defineRule(e, r, n) {
    if (this.selfAnalysisDone)
      throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    const a = q(n, "resyncEnabled") ? n.resyncEnabled : Xu.resyncEnabled, i = q(n, "recoveryValueFunc") ? n.recoveryValueFunc : Xu.recoveryValueFunc, o = this.ruleShortNameIdx << ix + en;
    this.ruleShortNameIdx++, this.shortRuleNameToFull[o] = e, this.fullRuleNameToShort[e] = o;
    let c;
    return this.outputCst === !0 ? c = /* @__PURE__ */ s(function(...f) {
      try {
        this.ruleInvocationStateUpdate(o, e, this.subruleIdx), r.apply(this, f);
        const d = this.CST_STACK[this.CST_STACK.length - 1];
        return this.cstPostRule(d), d;
      } catch (d) {
        return this.invokeRuleCatch(d, a, i);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, "invokeRuleWithTry") : c = /* @__PURE__ */ s(function(...f) {
      try {
        return this.ruleInvocationStateUpdate(o, e, this.subruleIdx), r.apply(this, f);
      } catch (d) {
        return this.invokeRuleCatch(d, a, i);
      } finally {
        this.ruleFinallyStateUpdate();
      }
    }, "invokeRuleWithTryCst"), Object.assign(c, { ruleName: e, originalGrammarAction: r });
  }
  invokeRuleCatch(e, r, n) {
    const a = this.RULE_STACK.length === 1, i = r && !this.isBackTracking() && this.recoveryEnabled;
    if (ic(e)) {
      const o = e;
      if (i) {
        const c = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(c))
          if (o.resyncedTokens = this.reSyncTo(c), this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            return l.recoveredNode = !0, l;
          } else
            return n(e);
        else {
          if (this.outputCst) {
            const l = this.CST_STACK[this.CST_STACK.length - 1];
            l.recoveredNode = !0, o.partialCstResult = l;
          }
          throw o;
        }
      } else {
        if (a)
          return this.moveToTerminatedState(), n(e);
        throw o;
      }
    } else
      throw e;
  }
  // Implementation of parsing DSL
  optionInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(IC, r);
    return this.optionInternalLogic(e, r, n);
  }
  optionInternalLogic(e, r, n) {
    let a = this.getLaFuncFromCache(n), i;
    if (typeof e != "function") {
      i = e.DEF;
      const o = e.GATE;
      if (o !== void 0) {
        const c = a;
        a = /* @__PURE__ */ s(() => o.call(this) && c.call(this), "lookAheadFunc");
      }
    } else
      i = e;
    if (a.call(this) === !0)
      return i.call(this);
  }
  atLeastOneInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(ah, e);
    return this.atLeastOneInternalLogic(e, r, n);
  }
  atLeastOneInternalLogic(e, r, n) {
    let a = this.getLaFuncFromCache(n), i;
    if (typeof r != "function") {
      i = r.DEF;
      const o = r.GATE;
      if (o !== void 0) {
        const c = a;
        a = /* @__PURE__ */ s(() => o.call(this) && c.call(this), "lookAheadFunc");
      }
    } else
      i = r;
    if (a.call(this) === !0) {
      let o = this.doSingleRepetition(i);
      for (; a.call(this) === !0 && o === !0; )
        o = this.doSingleRepetition(i);
    } else
      throw this.raiseEarlyExitException(e, Le.REPETITION_MANDATORY, r.ERR_MSG);
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [e, r], a, ah, e, XM);
  }
  atLeastOneSepFirstInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(du, e);
    this.atLeastOneSepFirstInternalLogic(e, r, n);
  }
  atLeastOneSepFirstInternalLogic(e, r, n) {
    const a = r.DEF, i = r.SEP;
    if (this.getLaFuncFromCache(n).call(this) === !0) {
      a.call(this);
      const c = /* @__PURE__ */ s(() => this.tokenMatcher(this.LA(1), i), "separatorLookAheadFunc");
      for (; this.tokenMatcher(this.LA(1), i) === !0; )
        this.CONSUME(i), a.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        i,
        c,
        a,
        mv
      ], c, du, e, mv);
    } else
      throw this.raiseEarlyExitException(e, Le.REPETITION_MANDATORY_WITH_SEPARATOR, r.ERR_MSG);
  }
  manyInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(nh, e);
    return this.manyInternalLogic(e, r, n);
  }
  manyInternalLogic(e, r, n) {
    let a = this.getLaFuncFromCache(n), i;
    if (typeof r != "function") {
      i = r.DEF;
      const c = r.GATE;
      if (c !== void 0) {
        const l = a;
        a = /* @__PURE__ */ s(() => c.call(this) && l.call(this), "lookaheadFunction");
      }
    } else
      i = r;
    let o = !0;
    for (; a.call(this) === !0 && o === !0; )
      o = this.doSingleRepetition(i);
    this.attemptInRepetitionRecovery(
      this.manyInternal,
      [e, r],
      a,
      nh,
      e,
      YM,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      o
    );
  }
  manySepFirstInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(ih, e);
    this.manySepFirstInternalLogic(e, r, n);
  }
  manySepFirstInternalLogic(e, r, n) {
    const a = r.DEF, i = r.SEP;
    if (this.getLaFuncFromCache(n).call(this) === !0) {
      a.call(this);
      const c = /* @__PURE__ */ s(() => this.tokenMatcher(this.LA(1), i), "separatorLookAheadFunc");
      for (; this.tokenMatcher(this.LA(1), i) === !0; )
        this.CONSUME(i), a.call(this);
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        e,
        i,
        c,
        a,
        hv
      ], c, ih, e, hv);
    }
  }
  repetitionSepSecondInternal(e, r, n, a, i) {
    for (; n(); )
      this.CONSUME(r), a.call(this);
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      e,
      r,
      n,
      a,
      i
    ], n, du, e, i);
  }
  doSingleRepetition(e) {
    const r = this.getLexerPosition();
    return e.call(this), this.getLexerPosition() > r;
  }
  orInternal(e, r) {
    const n = this.getKeyForAutomaticLookahead(wC, r), a = ae(e) ? e : e.DEF, o = this.getLaFuncFromCache(n).call(this, a);
    if (o !== void 0)
      return a[o].ALT.call(this);
    this.raiseNoAltException(r, e.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    if (this.RULE_STACK.pop(), this.RULE_OCCURRENCE_STACK.pop(), this.cstFinallyStateUpdate(), this.RULE_STACK.length === 0 && this.isAtEndOfInput() === !1) {
      const e = this.LA(1), r = this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: e,
        ruleName: this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new tx(r, e));
    }
  }
  subruleInternal(e, r, n) {
    let a;
    try {
      const i = n !== void 0 ? n.ARGS : void 0;
      return this.subruleIdx = r, a = e.apply(this, i), this.cstPostNonTerminal(a, n !== void 0 && n.LABEL !== void 0 ? n.LABEL : e.ruleName), a;
    } catch (i) {
      throw this.subruleInternalError(i, n, e.ruleName);
    }
  }
  subruleInternalError(e, r, n) {
    throw ic(e) && e.partialCstResult !== void 0 && (this.cstPostNonTerminal(e.partialCstResult, r !== void 0 && r.LABEL !== void 0 ? r.LABEL : n), delete e.partialCstResult), e;
  }
  consumeInternal(e, r, n) {
    let a;
    try {
      const i = this.LA(1);
      this.tokenMatcher(i, e) === !0 ? (this.consumeToken(), a = i) : this.consumeInternalError(e, i, n);
    } catch (i) {
      a = this.consumeInternalRecovery(e, r, i);
    }
    return this.cstPostTerminal(n !== void 0 && n.LABEL !== void 0 ? n.LABEL : e.name, a), a;
  }
  consumeInternalError(e, r, n) {
    let a;
    const i = this.LA(0);
    throw n !== void 0 && n.ERR_MSG ? a = n.ERR_MSG : a = this.errorMessageProvider.buildMismatchTokenMessage({
      expected: e,
      actual: r,
      previous: i,
      ruleName: this.getCurrRuleFullName()
    }), this.SAVE_ERROR(new CC(a, r, i));
  }
  consumeInternalRecovery(e, r, n) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    n.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const a = this.getFollowsForInRuleRecovery(e, r);
      try {
        return this.tryInRuleRecovery(e, a);
      } catch (i) {
        throw i.name === bC ? n : i;
      }
    } else
      throw n;
  }
  saveRecogState() {
    const e = this.errors, r = et(this.RULE_STACK);
    return {
      errors: e,
      lexerState: this.exportLexerState(),
      RULE_STACK: r,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(e) {
    this.errors = e.errors, this.importLexerState(e.lexerState), this.RULE_STACK = e.RULE_STACK;
  }
  ruleInvocationStateUpdate(e, r, n) {
    this.RULE_OCCURRENCE_STACK.push(n), this.RULE_STACK.push(e), this.cstInvocationStateUpdate(r);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    const e = this.getLastExplicitRuleShortName();
    return this.shortRuleNameToFull[e];
  }
  shortRuleNameToFullName(e) {
    return this.shortRuleNameToFull[e];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(this.LA(1), Hr);
  }
  reset() {
    this.resetLexerState(), this.subruleIdx = 0, this.isBackTrackingStack = [], this.errors = [], this.RULE_STACK = [], this.CST_STACK = [], this.RULE_OCCURRENCE_STACK = [];
  }
}, s(Mi, "RecognizerEngine"), Mi), xi, px = (xi = class {
  initErrorHandler(e) {
    this._errors = [], this.errorMessageProvider = q(e, "errorMessageProvider") ? e.errorMessageProvider : kr.errorMessageProvider;
  }
  SAVE_ERROR(e) {
    if (ic(e))
      return e.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: et(this.RULE_OCCURRENCE_STACK)
      }, this._errors.push(e), e;
    throw Error("Trying to save an Error which is not a RecognitionException");
  }
  get errors() {
    return et(this._errors);
  }
  set errors(e) {
    this._errors = e;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(e, r, n) {
    const a = this.getCurrRuleFullName(), i = this.getGAstProductions()[a], c = kc(e, i, r, this.maxLookahead)[0], l = [];
    for (let f = 1; f <= this.maxLookahead; f++)
      l.push(this.LA(f));
    const u = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: c,
      actual: l,
      previous: this.LA(0),
      customUserDescription: n,
      ruleName: a
    });
    throw this.SAVE_ERROR(new rx(u, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(e, r) {
    const n = this.getCurrRuleFullName(), a = this.getGAstProductions()[n], i = Nc(e, a, this.maxLookahead), o = [];
    for (let u = 1; u <= this.maxLookahead; u++)
      o.push(this.LA(u));
    const c = this.LA(0), l = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: i,
      actual: o,
      previous: c,
      customUserDescription: r,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new ex(l, this.LA(1), c));
  }
}, s(xi, "ErrorHandler"), xi), Fi, hx = (Fi = class {
  initContentAssist() {
  }
  computeContentAssist(e, r) {
    const n = this.gastProductionsCache[e];
    if (Ir(n))
      throw Error(`Rule ->${e}<- does not exist in this grammar.`);
    return yg([n], r, this.tokenMatcher, this.maxLookahead);
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(e) {
    const r = Ht(e.ruleStack), a = this.getGAstProductions()[r];
    return new HM(a, e).startWalking();
  }
}, s(Fi, "ContentAssist"), Fi), Vf = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(Vf);
var gv = !0, yv = Math.pow(2, en) - 1, FC = Ga({ name: "RECORDING_PHASE_TOKEN", pattern: st.NA });
qo([FC]);
var GC = Ic(
  FC,
  `This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
  // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
);
Object.freeze(GC);
var mx = {
  name: `This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,
  children: {}
}, Gi, gx = (Gi = class {
  initGastRecorder(e) {
    this.recordingProdStack = [], this.RECORDING_PHASE = !1;
  }
  enableRecording() {
    this.RECORDING_PHASE = !0, this.TRACE_INIT("Enable Recording", () => {
      for (let e = 0; e < 10; e++) {
        const r = e > 0 ? e : "";
        this[`CONSUME${r}`] = function(n, a) {
          return this.consumeInternalRecord(n, e, a);
        }, this[`SUBRULE${r}`] = function(n, a) {
          return this.subruleInternalRecord(n, e, a);
        }, this[`OPTION${r}`] = function(n) {
          return this.optionInternalRecord(n, e);
        }, this[`OR${r}`] = function(n) {
          return this.orInternalRecord(n, e);
        }, this[`MANY${r}`] = function(n) {
          this.manyInternalRecord(e, n);
        }, this[`MANY_SEP${r}`] = function(n) {
          this.manySepFirstInternalRecord(e, n);
        }, this[`AT_LEAST_ONE${r}`] = function(n) {
          this.atLeastOneInternalRecord(e, n);
        }, this[`AT_LEAST_ONE_SEP${r}`] = function(n) {
          this.atLeastOneSepFirstInternalRecord(e, n);
        };
      }
      this.consume = function(e, r, n) {
        return this.consumeInternalRecord(r, e, n);
      }, this.subrule = function(e, r, n) {
        return this.subruleInternalRecord(r, e, n);
      }, this.option = function(e, r) {
        return this.optionInternalRecord(r, e);
      }, this.or = function(e, r) {
        return this.orInternalRecord(r, e);
      }, this.many = function(e, r) {
        this.manyInternalRecord(e, r);
      }, this.atLeastOne = function(e, r) {
        this.atLeastOneInternalRecord(e, r);
      }, this.ACTION = this.ACTION_RECORD, this.BACKTRACK = this.BACKTRACK_RECORD, this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = !1, this.TRACE_INIT("Deleting Recording methods", () => {
      const e = this;
      for (let r = 0; r < 10; r++) {
        const n = r > 0 ? r : "";
        delete e[`CONSUME${n}`], delete e[`SUBRULE${n}`], delete e[`OPTION${n}`], delete e[`OR${n}`], delete e[`MANY${n}`], delete e[`MANY_SEP${n}`], delete e[`AT_LEAST_ONE${n}`], delete e[`AT_LEAST_ONE_SEP${n}`];
      }
      delete e.consume, delete e.subrule, delete e.option, delete e.or, delete e.many, delete e.atLeastOne, delete e.ACTION, delete e.BACKTRACK, delete e.LA;
    });
  }
  //   Parser methods are called inside an ACTION?
  //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
  // @ts-expect-error -- noop place holder
  ACTION_RECORD(e) {
  }
  // Executing backtracking logic will break our recording logic assumptions
  BACKTRACK_RECORD(e, r) {
    return () => !0;
  }
  // LA is part of the official API and may be used for custom lookahead logic
  // by end users who may forget to wrap it in ACTION or inside a GATE
  LA_RECORD(e) {
    return Yu;
  }
  topLevelRuleRecord(e, r) {
    try {
      const n = new Uo({ definition: [], name: e });
      return n.name = e, this.recordingProdStack.push(n), r.call(this), this.recordingProdStack.pop(), n;
    } catch (n) {
      if (n.KNOWN_RECORDER_ERROR !== !0)
        try {
          n.message = n.message + `
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`;
        } catch {
          throw n;
        }
      throw n;
    }
  }
  // Implementation of parsing DSL
  optionInternalRecord(e, r) {
    return Ea.call(this, Qe, e, r);
  }
  atLeastOneInternalRecord(e, r) {
    Ea.call(this, _t, r, e);
  }
  atLeastOneSepFirstInternalRecord(e, r) {
    Ea.call(this, Ct, r, e, gv);
  }
  manyInternalRecord(e, r) {
    Ea.call(this, xe, r, e);
  }
  manySepFirstInternalRecord(e, r) {
    Ea.call(this, yt, r, e, gv);
  }
  orInternalRecord(e, r) {
    return jC.call(this, e, r);
  }
  subruleInternalRecord(e, r, n) {
    if (sc(r), !e || q(e, "ruleName") === !1) {
      const c = new Error(`<SUBRULE${ch(r)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw c.KNOWN_RECORDER_ERROR = !0, c;
    }
    const a = xn(this.recordingProdStack), i = e.ruleName, o = new lt({
      idx: r,
      nonTerminalName: i,
      label: n?.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    return a.definition.push(o), this.outputCst ? mx : Vf;
  }
  consumeInternalRecord(e, r, n) {
    if (sc(r), !hg(e)) {
      const o = new Error(`<CONSUME${ch(r)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      throw o.KNOWN_RECORDER_ERROR = !0, o;
    }
    const a = xn(this.recordingProdStack), i = new Se({
      idx: r,
      terminalType: e,
      label: n?.LABEL
    });
    return a.definition.push(i), GC;
  }
}, s(Gi, "GastRecorder"), Gi);
function Ea(t, e, r, n = !1) {
  sc(r);
  const a = xn(this.recordingProdStack), i = Dr(e) ? e : e.DEF, o = new t({ definition: [], idx: r });
  return n && (o.separator = e.SEP), q(e, "MAX_LOOKAHEAD") && (o.maxLookahead = e.MAX_LOOKAHEAD), this.recordingProdStack.push(o), i.call(this), a.definition.push(o), this.recordingProdStack.pop(), Vf;
}
s(Ea, "recordProd");
function jC(t, e) {
  sc(e);
  const r = xn(this.recordingProdStack), n = ae(t) === !1, a = n === !1 ? t : t.DEF, i = new vt({
    definition: [],
    idx: e,
    ignoreAmbiguities: n && t.IGNORE_AMBIGUITIES === !0
  });
  q(t, "MAX_LOOKAHEAD") && (i.maxLookahead = t.MAX_LOOKAHEAD);
  const o = e_(a, (c) => Dr(c.GATE));
  return i.hasPredicates = o, r.definition.push(i), V(a, (c) => {
    const l = new gt({ definition: [] });
    i.definition.push(l), q(c, "IGNORE_AMBIGUITIES") ? l.ignoreAmbiguities = c.IGNORE_AMBIGUITIES : q(c, "GATE") && (l.ignoreAmbiguities = !0), this.recordingProdStack.push(l), c.ALT.call(this), this.recordingProdStack.pop();
  }), Vf;
}
s(jC, "recordOrProd");
function ch(t) {
  return t === 0 ? "" : `${t}`;
}
s(ch, "getIdxSuffix");
function sc(t) {
  if (t < 0 || t > yv) {
    const e = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${yv + 1}`
    );
    throw e.KNOWN_RECORDER_ERROR = !0, e;
  }
}
s(sc, "assertMethodIdxIsValid");
var ji, yx = (ji = class {
  initPerformanceTracer(e) {
    if (q(e, "traceInitPerf")) {
      const r = e.traceInitPerf, n = typeof r == "number";
      this.traceInitMaxIdent = n ? r : 1 / 0, this.traceInitPerf = n ? r > 0 : r;
    } else
      this.traceInitMaxIdent = 0, this.traceInitPerf = kr.traceInitPerf;
    this.traceInitIndent = -1;
  }
  TRACE_INIT(e, r) {
    if (this.traceInitPerf === !0) {
      this.traceInitIndent++;
      const n = new Array(this.traceInitIndent + 1).join("	");
      this.traceInitIndent < this.traceInitMaxIdent && console.log(`${n}--> <${e}>`);
      const { time: a, value: i } = lg(r), o = a > 10 ? console.warn : console.log;
      return this.traceInitIndent < this.traceInitMaxIdent && o(`${n}<-- <${e}> time: ${a}ms`), this.traceInitIndent--, i;
    } else
      return r();
  }
}, s(ji, "PerformanceTracer"), ji);
function UC(t, e) {
  e.forEach((r) => {
    const n = r.prototype;
    Object.getOwnPropertyNames(n).forEach((a) => {
      if (a === "constructor")
        return;
      const i = Object.getOwnPropertyDescriptor(n, a);
      i && (i.get || i.set) ? Object.defineProperty(t.prototype, a, i) : t.prototype[a] = r.prototype[a];
    });
  });
}
s(UC, "applyMixins");
var Yu = Ic(Hr, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(Yu);
var kr = Object.freeze({
  recoveryEnabled: !1,
  maxLookahead: 3,
  dynamicTokensEnabled: !1,
  outputCst: !0,
  errorMessageProvider: Ma,
  nodeLocationTracking: "none",
  traceInitPerf: !1,
  skipValidations: !1
}), Xu = Object.freeze({
  recoveryValueFunc: /* @__PURE__ */ s(() => {
  }, "recoveryValueFunc"),
  resyncEnabled: !0
}), ct;
(function(t) {
  t[t.INVALID_RULE_NAME = 0] = "INVALID_RULE_NAME", t[t.DUPLICATE_RULE_NAME = 1] = "DUPLICATE_RULE_NAME", t[t.INVALID_RULE_OVERRIDE = 2] = "INVALID_RULE_OVERRIDE", t[t.DUPLICATE_PRODUCTIONS = 3] = "DUPLICATE_PRODUCTIONS", t[t.UNRESOLVED_SUBRULE_REF = 4] = "UNRESOLVED_SUBRULE_REF", t[t.LEFT_RECURSION = 5] = "LEFT_RECURSION", t[t.NONE_LAST_EMPTY_ALT = 6] = "NONE_LAST_EMPTY_ALT", t[t.AMBIGUOUS_ALTS = 7] = "AMBIGUOUS_ALTS", t[t.CONFLICT_TOKENS_RULES_NAMESPACE = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE", t[t.INVALID_TOKEN_NAME = 9] = "INVALID_TOKEN_NAME", t[t.NO_NON_EMPTY_LOOKAHEAD = 10] = "NO_NON_EMPTY_LOOKAHEAD", t[t.AMBIGUOUS_PREFIX_ALTS = 11] = "AMBIGUOUS_PREFIX_ALTS", t[t.TOO_MANY_ALTS = 12] = "TOO_MANY_ALTS", t[t.CUSTOM_LOOKAHEAD_VALIDATION = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ct || (ct = {}));
function uh(t = void 0) {
  return function() {
    return t;
  };
}
s(uh, "EMPTY_ALT");
var Ln, Cg = (Ln = class {
  /**
   *  @deprecated use the **instance** method with the same name instead
   */
  static performSelfAnalysis(e) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let e;
      this.selfAnalysisDone = !0;
      const r = this.className;
      this.TRACE_INIT("toFastProps", () => {
        cg(this);
      }), this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording(), V(this.definedRulesNames, (a) => {
            const o = this[a].originalGrammarAction;
            let c;
            this.TRACE_INIT(`${a} Rule`, () => {
              c = this.topLevelRuleRecord(a, o);
            }), this.gastProductionsCache[a] = c;
          });
        } finally {
          this.disableRecording();
        }
      });
      let n = [];
      if (this.TRACE_INIT("Grammar Resolving", () => {
        n = vC({
          rules: We(this.gastProductionsCache)
        }), this.definitionErrors = this.definitionErrors.concat(n);
      }), this.TRACE_INIT("Grammar Validations", () => {
        if (Ae(n) && this.skipValidations === !1) {
          const a = TC({
            rules: We(this.gastProductionsCache),
            tokenTypes: We(this.tokensMap),
            errMsgProvider: In,
            grammarName: r
          }), i = iC({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: We(this.gastProductionsCache),
            tokenTypes: We(this.tokensMap),
            grammarName: r
          });
          this.definitionErrors = this.definitionErrors.concat(a, i);
        }
      }), Ae(this.definitionErrors) && (this.recoveryEnabled && this.TRACE_INIT("computeAllProdsFollows", () => {
        const a = d_(We(this.gastProductionsCache));
        this.resyncFollows = a;
      }), this.TRACE_INIT("ComputeLookaheadFunctions", () => {
        var a, i;
        (i = (a = this.lookaheadStrategy).initialize) === null || i === void 0 || i.call(a, {
          rules: We(this.gastProductionsCache)
        }), this.preComputeLookaheadFunctions(We(this.gastProductionsCache));
      })), !Ln.DEFER_DEFINITION_ERRORS_HANDLING && !Ae(this.definitionErrors))
        throw e = z(this.definitionErrors, (a) => a.message), new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`);
    });
  }
  constructor(e, r) {
    this.definitionErrors = [], this.selfAnalysisDone = !1;
    const n = this;
    if (n.initErrorHandler(r), n.initLexerAdapter(), n.initLooksAhead(r), n.initRecognizerEngine(e, r), n.initRecoverable(r), n.initTreeBuilder(r), n.initContentAssist(), n.initGastRecorder(r), n.initPerformanceTracer(r), q(r, "ignoredIssues"))
      throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);
    this.skipValidations = q(r, "skipValidations") ? r.skipValidations : kr.skipValidations;
  }
}, s(Ln, "Parser"), Ln);
Cg.DEFER_DEFINITION_ERRORS_HANDLING = !1;
UC(Cg, [
  ax,
  sx,
  cx,
  ux,
  dx,
  fx,
  px,
  hx,
  gx,
  yx
]);
var Ui, vx = (Ui = class extends Cg {
  constructor(e, r = kr) {
    const n = et(r);
    n.outputCst = !1, super(e, n);
  }
}, s(Ui, "EmbeddedActionsParser"), Ui);
function zC(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, a = Array(n); ++r < n; )
    a[r] = e(t[r], r, t);
  return a;
}
s(zC, "arrayMap");
var BC = zC;
function KC() {
  this.__data__ = [], this.size = 0;
}
s(KC, "listCacheClear");
var Tx = KC;
function qC(t, e) {
  return t === e || t !== t && e !== e;
}
s(qC, "eq");
var WC = qC;
function VC(t, e) {
  for (var r = t.length; r--; )
    if (WC(t[r][0], e))
      return r;
  return -1;
}
s(VC, "assocIndexOf");
var Hf = VC, Rx = Array.prototype, $x = Rx.splice;
function HC(t) {
  var e = this.__data__, r = Hf(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : $x.call(e, r, 1), --this.size, !0;
}
s(HC, "listCacheDelete");
var Ax = HC;
function YC(t) {
  var e = this.__data__, r = Hf(e, t);
  return r < 0 ? void 0 : e[r][1];
}
s(YC, "listCacheGet");
var Ex = YC;
function XC(t) {
  return Hf(this.__data__, t) > -1;
}
s(XC, "listCacheHas");
var _x = XC;
function JC(t, e) {
  var r = this.__data__, n = Hf(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
s(JC, "listCacheSet");
var Cx = JC;
function ea(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
s(ea, "ListCache");
ea.prototype.clear = Tx;
ea.prototype.delete = Ax;
ea.prototype.get = Ex;
ea.prototype.has = _x;
ea.prototype.set = Cx;
var Yf = ea;
function ZC() {
  this.__data__ = new Yf(), this.size = 0;
}
s(ZC, "stackClear");
var bx = ZC;
function QC(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
s(QC, "stackDelete");
var Sx = QC;
function eb(t) {
  return this.__data__.get(t);
}
s(eb, "stackGet");
var wx = eb;
function tb(t) {
  return this.__data__.has(t);
}
s(tb, "stackHas");
var Ix = tb, Nx = typeof global == "object" && global && global.Object === Object && global, rb = Nx, kx = typeof self == "object" && self && self.Object === Object && self, Px = rb || kx || Function("return this")(), Mr = Px, Ox = Mr.Symbol, cr = Ox, nb = Object.prototype, Lx = nb.hasOwnProperty, Dx = nb.toString, hl = cr ? cr.toStringTag : void 0;
function ab(t) {
  var e = Lx.call(t, hl), r = t[hl];
  try {
    t[hl] = void 0;
    var n = !0;
  } catch {
  }
  var a = Dx.call(t);
  return n && (e ? t[hl] = r : delete t[hl]), a;
}
s(ab, "getRawTag");
var Mx = ab, xx = Object.prototype, Fx = xx.toString;
function ib(t) {
  return Fx.call(t);
}
s(ib, "objectToString");
var Gx = ib, jx = "[object Null]", Ux = "[object Undefined]", vv = cr ? cr.toStringTag : void 0;
function sb(t) {
  return t == null ? t === void 0 ? Ux : jx : vv && vv in Object(t) ? Mx(t) : Gx(t);
}
s(sb, "baseGetTag");
var Wo = sb;
function ob(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
s(ob, "isObject");
var bg = ob, zx = "[object AsyncFunction]", Bx = "[object Function]", Kx = "[object GeneratorFunction]", qx = "[object Proxy]";
function lb(t) {
  if (!bg(t))
    return !1;
  var e = Wo(t);
  return e == Bx || e == Kx || e == zx || e == qx;
}
s(lb, "isFunction");
var cb = lb, Wx = Mr["__core-js_shared__"], _d = Wx, Tv = (function() {
  var t = /[^.]+$/.exec(_d && _d.keys && _d.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
})();
function ub(t) {
  return !!Tv && Tv in t;
}
s(ub, "isMasked");
var Vx = ub, Hx = Function.prototype, Yx = Hx.toString;
function fb(t) {
  if (t != null) {
    try {
      return Yx.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
s(fb, "toSource");
var ta = fb, Xx = /[\\^$.*+?()[\]{}|]/g, Jx = /^\[object .+?Constructor\]$/, Zx = Function.prototype, Qx = Object.prototype, e1 = Zx.toString, t1 = Qx.hasOwnProperty, r1 = RegExp(
  "^" + e1.call(t1).replace(Xx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function db(t) {
  if (!bg(t) || Vx(t))
    return !1;
  var e = cb(t) ? r1 : Jx;
  return e.test(ta(t));
}
s(db, "baseIsNative");
var n1 = db;
function pb(t, e) {
  return t?.[e];
}
s(pb, "getValue");
var a1 = pb;
function hb(t, e) {
  var r = a1(t, e);
  return n1(r) ? r : void 0;
}
s(hb, "getNative");
var Vo = hb, i1 = Vo(Mr, "Map"), oc = i1, s1 = Vo(Object, "create"), lc = s1;
function mb() {
  this.__data__ = lc ? lc(null) : {}, this.size = 0;
}
s(mb, "hashClear");
var o1 = mb;
function gb(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
s(gb, "hashDelete");
var l1 = gb, c1 = "__lodash_hash_undefined__", u1 = Object.prototype, f1 = u1.hasOwnProperty;
function yb(t) {
  var e = this.__data__;
  if (lc) {
    var r = e[t];
    return r === c1 ? void 0 : r;
  }
  return f1.call(e, t) ? e[t] : void 0;
}
s(yb, "hashGet");
var d1 = yb, p1 = Object.prototype, h1 = p1.hasOwnProperty;
function vb(t) {
  var e = this.__data__;
  return lc ? e[t] !== void 0 : h1.call(e, t);
}
s(vb, "hashHas");
var m1 = vb, g1 = "__lodash_hash_undefined__";
function Tb(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = lc && e === void 0 ? g1 : e, this;
}
s(Tb, "hashSet");
var y1 = Tb;
function ra(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
s(ra, "Hash");
ra.prototype.clear = o1;
ra.prototype.delete = l1;
ra.prototype.get = d1;
ra.prototype.has = m1;
ra.prototype.set = y1;
var Rv = ra;
function Rb() {
  this.size = 0, this.__data__ = {
    hash: new Rv(),
    map: new (oc || Yf)(),
    string: new Rv()
  };
}
s(Rb, "mapCacheClear");
var v1 = Rb;
function $b(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
s($b, "isKeyable");
var T1 = $b;
function Ab(t, e) {
  var r = t.__data__;
  return T1(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
s(Ab, "getMapData");
var Xf = Ab;
function Eb(t) {
  var e = Xf(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
s(Eb, "mapCacheDelete");
var R1 = Eb;
function _b(t) {
  return Xf(this, t).get(t);
}
s(_b, "mapCacheGet");
var $1 = _b;
function Cb(t) {
  return Xf(this, t).has(t);
}
s(Cb, "mapCacheHas");
var A1 = Cb;
function bb(t, e) {
  var r = Xf(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
s(bb, "mapCacheSet");
var E1 = bb;
function na(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
s(na, "MapCache");
na.prototype.clear = v1;
na.prototype.delete = R1;
na.prototype.get = $1;
na.prototype.has = A1;
na.prototype.set = E1;
var Jf = na, _1 = 200;
function Sb(t, e) {
  var r = this.__data__;
  if (r instanceof Yf) {
    var n = r.__data__;
    if (!oc || n.length < _1 - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new Jf(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
s(Sb, "stackSet");
var C1 = Sb;
function aa(t) {
  var e = this.__data__ = new Yf(t);
  this.size = e.size;
}
s(aa, "Stack");
aa.prototype.clear = bx;
aa.prototype.delete = Sx;
aa.prototype.get = wx;
aa.prototype.has = Ix;
aa.prototype.set = C1;
var hu = aa, b1 = "__lodash_hash_undefined__";
function wb(t) {
  return this.__data__.set(t, b1), this;
}
s(wb, "setCacheAdd");
var S1 = wb;
function Ib(t) {
  return this.__data__.has(t);
}
s(Ib, "setCacheHas");
var w1 = Ib;
function cc(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new Jf(); ++e < r; )
    this.add(t[e]);
}
s(cc, "SetCache");
cc.prototype.add = cc.prototype.push = S1;
cc.prototype.has = w1;
var Nb = cc;
function kb(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
s(kb, "arraySome");
var I1 = kb;
function Pb(t, e) {
  return t.has(e);
}
s(Pb, "cacheHas");
var Ob = Pb, N1 = 1, k1 = 2;
function Lb(t, e, r, n, a, i) {
  var o = r & N1, c = t.length, l = e.length;
  if (c != l && !(o && l > c))
    return !1;
  var u = i.get(t), f = i.get(e);
  if (u && f)
    return u == e && f == t;
  var d = -1, p = !0, g = r & k1 ? new Nb() : void 0;
  for (i.set(t, e), i.set(e, t); ++d < c; ) {
    var m = t[d], T = e[d];
    if (n)
      var _ = o ? n(T, m, d, e, t, i) : n(m, T, d, t, e, i);
    if (_ !== void 0) {
      if (_)
        continue;
      p = !1;
      break;
    }
    if (g) {
      if (!I1(e, function(v, w) {
        if (!Ob(g, w) && (m === v || a(m, v, r, n, i)))
          return g.push(w);
      })) {
        p = !1;
        break;
      }
    } else if (!(m === T || a(m, T, r, n, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(t), i.delete(e), p;
}
s(Lb, "equalArrays");
var Db = Lb, P1 = Mr.Uint8Array, $v = P1;
function Mb(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n, a) {
    r[++e] = [a, n];
  }), r;
}
s(Mb, "mapToArray");
var O1 = Mb;
function xb(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n) {
    r[++e] = n;
  }), r;
}
s(xb, "setToArray");
var Sg = xb, L1 = 1, D1 = 2, M1 = "[object Boolean]", x1 = "[object Date]", F1 = "[object Error]", G1 = "[object Map]", j1 = "[object Number]", U1 = "[object RegExp]", z1 = "[object Set]", B1 = "[object String]", K1 = "[object Symbol]", q1 = "[object ArrayBuffer]", W1 = "[object DataView]", Av = cr ? cr.prototype : void 0, Cd = Av ? Av.valueOf : void 0;
function Fb(t, e, r, n, a, i, o) {
  switch (r) {
    case W1:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case q1:
      return !(t.byteLength != e.byteLength || !i(new $v(t), new $v(e)));
    case M1:
    case x1:
    case j1:
      return WC(+t, +e);
    case F1:
      return t.name == e.name && t.message == e.message;
    case U1:
    case B1:
      return t == e + "";
    case G1:
      var c = O1;
    case z1:
      var l = n & L1;
      if (c || (c = Sg), t.size != e.size && !l)
        return !1;
      var u = o.get(t);
      if (u)
        return u == e;
      n |= D1, o.set(t, e);
      var f = Db(c(t), c(e), n, a, i, o);
      return o.delete(t), f;
    case K1:
      if (Cd)
        return Cd.call(t) == Cd.call(e);
  }
  return !1;
}
s(Fb, "equalByTag");
var V1 = Fb;
function Gb(t, e) {
  for (var r = -1, n = e.length, a = t.length; ++r < n; )
    t[a + r] = e[r];
  return t;
}
s(Gb, "arrayPush");
var jb = Gb, H1 = Array.isArray, ut = H1;
function Ub(t, e, r) {
  var n = e(t);
  return ut(t) ? n : jb(n, r(t));
}
s(Ub, "baseGetAllKeys");
var Y1 = Ub;
function zb(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, a = 0, i = []; ++r < n; ) {
    var o = t[r];
    e(o, r, t) && (i[a++] = o);
  }
  return i;
}
s(zb, "arrayFilter");
var Bb = zb;
function Kb() {
  return [];
}
s(Kb, "stubArray");
var X1 = Kb, J1 = Object.prototype, Z1 = J1.propertyIsEnumerable, Ev = Object.getOwnPropertySymbols, Q1 = Ev ? function(t) {
  return t == null ? [] : (t = Object(t), Bb(Ev(t), function(e) {
    return Z1.call(t, e);
  }));
} : X1, eF = Q1;
function qb(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
s(qb, "baseTimes");
var tF = qb;
function Wb(t) {
  return t != null && typeof t == "object";
}
s(Wb, "isObjectLike");
var Mo = Wb, rF = "[object Arguments]";
function Vb(t) {
  return Mo(t) && Wo(t) == rF;
}
s(Vb, "baseIsArguments");
var _v = Vb, Hb = Object.prototype, nF = Hb.hasOwnProperty, aF = Hb.propertyIsEnumerable, iF = _v(/* @__PURE__ */ (function() {
  return arguments;
})()) ? _v : function(t) {
  return Mo(t) && nF.call(t, "callee") && !aF.call(t, "callee");
}, Zf = iF;
function Yb() {
  return !1;
}
s(Yb, "stubFalse");
var sF = Yb, Xb = typeof exports == "object" && exports && !exports.nodeType && exports, Cv = Xb && typeof module == "object" && module && !module.nodeType && module, oF = Cv && Cv.exports === Xb, bv = oF ? Mr.Buffer : void 0, lF = bv ? bv.isBuffer : void 0, cF = lF || sF, Ju = cF, uF = 9007199254740991, fF = /^(?:0|[1-9]\d*)$/;
function Jb(t, e) {
  var r = typeof t;
  return e = e ?? uF, !!e && (r == "number" || r != "symbol" && fF.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
s(Jb, "isIndex");
var Zb = Jb, dF = 9007199254740991;
function Qb(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= dF;
}
s(Qb, "isLength");
var wg = Qb, pF = "[object Arguments]", hF = "[object Array]", mF = "[object Boolean]", gF = "[object Date]", yF = "[object Error]", vF = "[object Function]", TF = "[object Map]", RF = "[object Number]", $F = "[object Object]", AF = "[object RegExp]", EF = "[object Set]", _F = "[object String]", CF = "[object WeakMap]", bF = "[object ArrayBuffer]", SF = "[object DataView]", wF = "[object Float32Array]", IF = "[object Float64Array]", NF = "[object Int8Array]", kF = "[object Int16Array]", PF = "[object Int32Array]", OF = "[object Uint8Array]", LF = "[object Uint8ClampedArray]", DF = "[object Uint16Array]", MF = "[object Uint32Array]", be = {};
be[wF] = be[IF] = be[NF] = be[kF] = be[PF] = be[OF] = be[LF] = be[DF] = be[MF] = !0;
be[pF] = be[hF] = be[bF] = be[mF] = be[SF] = be[gF] = be[yF] = be[vF] = be[TF] = be[RF] = be[$F] = be[AF] = be[EF] = be[_F] = be[CF] = !1;
function eS(t) {
  return Mo(t) && wg(t.length) && !!be[Wo(t)];
}
s(eS, "baseIsTypedArray");
var xF = eS;
function tS(t) {
  return function(e) {
    return t(e);
  };
}
s(tS, "baseUnary");
var FF = tS, rS = typeof exports == "object" && exports && !exports.nodeType && exports, Vl = rS && typeof module == "object" && module && !module.nodeType && module, GF = Vl && Vl.exports === rS, bd = GF && rb.process, jF = (function() {
  try {
    var t = Vl && Vl.require && Vl.require("util").types;
    return t || bd && bd.binding && bd.binding("util");
  } catch {
  }
})(), Sv = jF, wv = Sv && Sv.isTypedArray, UF = wv ? FF(wv) : xF, Ig = UF, zF = Object.prototype, BF = zF.hasOwnProperty;
function nS(t, e) {
  var r = ut(t), n = !r && Zf(t), a = !r && !n && Ju(t), i = !r && !n && !a && Ig(t), o = r || n || a || i, c = o ? tF(t.length, String) : [], l = c.length;
  for (var u in t)
    (e || BF.call(t, u)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Zb(u, l))) && c.push(u);
  return c;
}
s(nS, "arrayLikeKeys");
var KF = nS, qF = Object.prototype;
function aS(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || qF;
  return t === r;
}
s(aS, "isPrototype");
var iS = aS;
function sS(t, e) {
  return function(r) {
    return t(e(r));
  };
}
s(sS, "overArg");
var WF = sS, VF = WF(Object.keys, Object), HF = VF, YF = Object.prototype, XF = YF.hasOwnProperty;
function oS(t) {
  if (!iS(t))
    return HF(t);
  var e = [];
  for (var r in Object(t))
    XF.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
s(oS, "baseKeys");
var lS = oS;
function cS(t) {
  return t != null && wg(t.length) && !cb(t);
}
s(cS, "isArrayLike");
var Qf = cS;
function uS(t) {
  return Qf(t) ? KF(t) : lS(t);
}
s(uS, "keys");
var Ng = uS;
function fS(t) {
  return Y1(t, Ng, eF);
}
s(fS, "getAllKeys");
var Iv = fS, JF = 1, ZF = Object.prototype, QF = ZF.hasOwnProperty;
function dS(t, e, r, n, a, i) {
  var o = r & JF, c = Iv(t), l = c.length, u = Iv(e), f = u.length;
  if (l != f && !o)
    return !1;
  for (var d = l; d--; ) {
    var p = c[d];
    if (!(o ? p in e : QF.call(e, p)))
      return !1;
  }
  var g = i.get(t), m = i.get(e);
  if (g && m)
    return g == e && m == t;
  var T = !0;
  i.set(t, e), i.set(e, t);
  for (var _ = o; ++d < l; ) {
    p = c[d];
    var v = t[p], w = e[p];
    if (n)
      var C = o ? n(w, v, p, e, t, i) : n(v, w, p, t, e, i);
    if (!(C === void 0 ? v === w || a(v, w, r, n, i) : C)) {
      T = !1;
      break;
    }
    _ || (_ = p == "constructor");
  }
  if (T && !_) {
    var k = t.constructor, B = e.constructor;
    k != B && "constructor" in t && "constructor" in e && !(typeof k == "function" && k instanceof k && typeof B == "function" && B instanceof B) && (T = !1);
  }
  return i.delete(t), i.delete(e), T;
}
s(dS, "equalObjects");
var eG = dS, tG = Vo(Mr, "DataView"), fh = tG, rG = Vo(Mr, "Promise"), dh = rG, nG = Vo(Mr, "Set"), ja = nG, aG = Vo(Mr, "WeakMap"), ph = aG, Nv = "[object Map]", iG = "[object Object]", kv = "[object Promise]", Pv = "[object Set]", Ov = "[object WeakMap]", Lv = "[object DataView]", sG = ta(fh), oG = ta(oc), lG = ta(dh), cG = ta(ja), uG = ta(ph), dn = Wo;
(fh && dn(new fh(new ArrayBuffer(1))) != Lv || oc && dn(new oc()) != Nv || dh && dn(dh.resolve()) != kv || ja && dn(new ja()) != Pv || ph && dn(new ph()) != Ov) && (dn = /* @__PURE__ */ s(function(t) {
  var e = Wo(t), r = e == iG ? t.constructor : void 0, n = r ? ta(r) : "";
  if (n)
    switch (n) {
      case sG:
        return Lv;
      case oG:
        return Nv;
      case lG:
        return kv;
      case cG:
        return Pv;
      case uG:
        return Ov;
    }
  return e;
}, "getTag"));
var hh = dn, fG = 1, Dv = "[object Arguments]", Mv = "[object Array]", Gc = "[object Object]", dG = Object.prototype, xv = dG.hasOwnProperty;
function pS(t, e, r, n, a, i) {
  var o = ut(t), c = ut(e), l = o ? Mv : hh(t), u = c ? Mv : hh(e);
  l = l == Dv ? Gc : l, u = u == Dv ? Gc : u;
  var f = l == Gc, d = u == Gc, p = l == u;
  if (p && Ju(t)) {
    if (!Ju(e))
      return !1;
    o = !0, f = !1;
  }
  if (p && !f)
    return i || (i = new hu()), o || Ig(t) ? Db(t, e, r, n, a, i) : V1(t, e, l, r, n, a, i);
  if (!(r & fG)) {
    var g = f && xv.call(t, "__wrapped__"), m = d && xv.call(e, "__wrapped__");
    if (g || m) {
      var T = g ? t.value() : t, _ = m ? e.value() : e;
      return i || (i = new hu()), a(T, _, r, n, i);
    }
  }
  return p ? (i || (i = new hu()), eG(t, e, r, n, a, i)) : !1;
}
s(pS, "baseIsEqualDeep");
var pG = pS;
function kg(t, e, r, n, a) {
  return t === e ? !0 : t == null || e == null || !Mo(t) && !Mo(e) ? t !== t && e !== e : pG(t, e, r, n, kg, a);
}
s(kg, "baseIsEqual");
var hS = kg, hG = 1, mG = 2;
function mS(t, e, r, n) {
  var a = r.length, i = a, o = !n;
  if (t == null)
    return !i;
  for (t = Object(t); a--; ) {
    var c = r[a];
    if (o && c[2] ? c[1] !== t[c[0]] : !(c[0] in t))
      return !1;
  }
  for (; ++a < i; ) {
    c = r[a];
    var l = c[0], u = t[l], f = c[1];
    if (o && c[2]) {
      if (u === void 0 && !(l in t))
        return !1;
    } else {
      var d = new hu();
      if (n)
        var p = n(u, f, l, t, e, d);
      if (!(p === void 0 ? hS(f, u, hG | mG, n, d) : p))
        return !1;
    }
  }
  return !0;
}
s(mS, "baseIsMatch");
var gG = mS;
function gS(t) {
  return t === t && !bg(t);
}
s(gS, "isStrictComparable");
var yS = gS;
function vS(t) {
  for (var e = Ng(t), r = e.length; r--; ) {
    var n = e[r], a = t[n];
    e[r] = [n, a, yS(a)];
  }
  return e;
}
s(vS, "getMatchData");
var yG = vS;
function TS(t, e) {
  return function(r) {
    return r == null ? !1 : r[t] === e && (e !== void 0 || t in Object(r));
  };
}
s(TS, "matchesStrictComparable");
var RS = TS;
function $S(t) {
  var e = yG(t);
  return e.length == 1 && e[0][2] ? RS(e[0][0], e[0][1]) : function(r) {
    return r === t || gG(r, t, e);
  };
}
s($S, "baseMatches");
var vG = $S, TG = "[object Symbol]";
function AS(t) {
  return typeof t == "symbol" || Mo(t) && Wo(t) == TG;
}
s(AS, "isSymbol");
var ed = AS, RG = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $G = /^\w*$/;
function ES(t, e) {
  if (ut(t))
    return !1;
  var r = typeof t;
  return r == "number" || r == "symbol" || r == "boolean" || t == null || ed(t) ? !0 : $G.test(t) || !RG.test(t) || e != null && t in Object(e);
}
s(ES, "isKey");
var Pg = ES, AG = "Expected a function";
function td(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(AG);
  var r = /* @__PURE__ */ s(function() {
    var n = arguments, a = e ? e.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = t.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  }, "memoized");
  return r.cache = new (td.Cache || Jf)(), r;
}
s(td, "memoize");
td.Cache = Jf;
var EG = td, _G = 500;
function _S(t) {
  var e = EG(t, function(n) {
    return r.size === _G && r.clear(), n;
  }), r = e.cache;
  return e;
}
s(_S, "memoizeCapped");
var CG = _S, bG = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, SG = /\\(\\)?/g, wG = CG(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(bG, function(r, n, a, i) {
    e.push(a ? i.replace(SG, "$1") : n || r);
  }), e;
}), IG = wG, Fv = cr ? cr.prototype : void 0, Gv = Fv ? Fv.toString : void 0;
function Og(t) {
  if (typeof t == "string")
    return t;
  if (ut(t))
    return BC(t, Og) + "";
  if (ed(t))
    return Gv ? Gv.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
s(Og, "baseToString");
var NG = Og;
function CS(t) {
  return t == null ? "" : NG(t);
}
s(CS, "toString");
var kG = CS;
function bS(t, e) {
  return ut(t) ? t : Pg(t, e) ? [t] : IG(kG(t));
}
s(bS, "castPath");
var SS = bS;
function wS(t) {
  if (typeof t == "string" || ed(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
s(wS, "toKey");
var rd = wS;
function IS(t, e) {
  e = SS(e, t);
  for (var r = 0, n = e.length; t != null && r < n; )
    t = t[rd(e[r++])];
  return r && r == n ? t : void 0;
}
s(IS, "baseGet");
var NS = IS;
function kS(t, e, r) {
  var n = t == null ? void 0 : NS(t, e);
  return n === void 0 ? r : n;
}
s(kS, "get");
var PG = kS;
function PS(t, e) {
  return t != null && e in Object(t);
}
s(PS, "baseHasIn");
var OG = PS;
function OS(t, e, r) {
  e = SS(e, t);
  for (var n = -1, a = e.length, i = !1; ++n < a; ) {
    var o = rd(e[n]);
    if (!(i = t != null && r(t, o)))
      break;
    t = t[o];
  }
  return i || ++n != a ? i : (a = t == null ? 0 : t.length, !!a && wg(a) && Zb(o, a) && (ut(t) || Zf(t)));
}
s(OS, "hasPath");
var LG = OS;
function LS(t, e) {
  return t != null && LG(t, e, OG);
}
s(LS, "hasIn");
var DG = LS, MG = 1, xG = 2;
function DS(t, e) {
  return Pg(t) && yS(e) ? RS(rd(t), e) : function(r) {
    var n = PG(r, t);
    return n === void 0 && n === e ? DG(r, t) : hS(e, n, MG | xG);
  };
}
s(DS, "baseMatchesProperty");
var FG = DS;
function MS(t) {
  return t;
}
s(MS, "identity");
var Lg = MS;
function xS(t) {
  return function(e) {
    return e?.[t];
  };
}
s(xS, "baseProperty");
var GG = xS;
function FS(t) {
  return function(e) {
    return NS(e, t);
  };
}
s(FS, "basePropertyDeep");
var jG = FS;
function GS(t) {
  return Pg(t) ? GG(rd(t)) : jG(t);
}
s(GS, "property");
var UG = GS;
function jS(t) {
  return typeof t == "function" ? t : t == null ? Lg : typeof t == "object" ? ut(t) ? FG(t[0], t[1]) : vG(t) : UG(t);
}
s(jS, "baseIteratee");
var nd = jS;
function US(t) {
  return function(e, r, n) {
    for (var a = -1, i = Object(e), o = n(e), c = o.length; c--; ) {
      var l = o[t ? c : ++a];
      if (r(i[l], l, i) === !1)
        break;
    }
    return e;
  };
}
s(US, "createBaseFor");
var zG = US, BG = zG(), KG = BG;
function zS(t, e) {
  return t && KG(t, e, Ng);
}
s(zS, "baseForOwn");
var qG = zS;
function BS(t, e) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!Qf(r))
      return t(r, n);
    for (var a = r.length, i = e ? a : -1, o = Object(r); (e ? i-- : ++i < a) && n(o[i], i, o) !== !1; )
      ;
    return r;
  };
}
s(BS, "createBaseEach");
var WG = BS, VG = WG(qG), ad = VG;
function KS(t, e) {
  var r = -1, n = Qf(t) ? Array(t.length) : [];
  return ad(t, function(a, i, o) {
    n[++r] = e(a, i, o);
  }), n;
}
s(KS, "baseMap");
var HG = KS;
function qS(t, e) {
  var r = ut(t) ? BC : HG;
  return r(t, nd(e));
}
s(qS, "map");
var Er = qS;
function WS(t, e) {
  var r = [];
  return ad(t, function(n, a, i) {
    e(n, a, i) && r.push(n);
  }), r;
}
s(WS, "baseFilter");
var YG = WS;
function VS(t, e) {
  var r = ut(t) ? Bb : YG;
  return r(t, nd(e));
}
s(VS, "filter");
var XG = VS;
function Gn(t, e, r) {
  return `${t.name}_${e}_${r}`;
}
s(Gn, "buildATNKey");
var Yr = 1, JG = 2, HS = 4, YS = 5, Pc = 7, ZG = 8, QG = 9, ej = 10, tj = 11, XS = 12, zi, Dg = (zi = class {
  constructor(e) {
    this.target = e;
  }
  isEpsilon() {
    return !1;
  }
}, s(zi, "AbstractTransition"), zi), Bi, Mg = (Bi = class extends Dg {
  constructor(e, r) {
    super(e), this.tokenType = r;
  }
}, s(Bi, "AtomTransition"), Bi), Ki, JS = (Ki = class extends Dg {
  constructor(e) {
    super(e);
  }
  isEpsilon() {
    return !0;
  }
}, s(Ki, "EpsilonTransition"), Ki), qi, xg = (qi = class extends Dg {
  constructor(e, r, n) {
    super(e), this.rule = r, this.followState = n;
  }
  isEpsilon() {
    return !0;
  }
}, s(qi, "RuleTransition"), qi);
function ZS(t) {
  const e = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: /* @__PURE__ */ new Map(),
    ruleToStopState: /* @__PURE__ */ new Map(),
    states: []
  };
  QS(e, t);
  const r = t.length;
  for (let n = 0; n < r; n++) {
    const a = t[n], i = tn(e, a, a);
    i !== void 0 && uw(e, a, i);
  }
  return e;
}
s(ZS, "createATN");
function QS(t, e) {
  const r = e.length;
  for (let n = 0; n < r; n++) {
    const a = e[n], i = Ve(t, a, void 0, {
      type: JG
    }), o = Ve(t, a, void 0, {
      type: Pc
    });
    i.stop = o, t.ruleToStartState.set(a, i), t.ruleToStopState.set(a, o);
  }
}
s(QS, "createRuleStartAndStopATNStates");
function Fg(t, e, r) {
  return r instanceof Se ? id(t, e, r.terminalType, r) : r instanceof lt ? cw(t, e, r) : r instanceof vt ? aw(t, e, r) : r instanceof Qe ? iw(t, e, r) : r instanceof xe ? ew(t, e, r) : r instanceof yt ? tw(t, e, r) : r instanceof _t ? rw(t, e, r) : r instanceof Ct ? nw(t, e, r) : tn(t, e, r);
}
s(Fg, "atom");
function ew(t, e, r) {
  const n = Ve(t, e, r, {
    type: YS
  });
  xr(t, n);
  const a = ia(t, e, n, r, tn(t, e, r));
  return jg(t, e, r, a);
}
s(ew, "repetition");
function tw(t, e, r) {
  const n = Ve(t, e, r, {
    type: YS
  });
  xr(t, n);
  const a = ia(t, e, n, r, tn(t, e, r)), i = id(t, e, r.separator, r);
  return jg(t, e, r, a, i);
}
s(tw, "repetitionSep");
function rw(t, e, r) {
  const n = Ve(t, e, r, {
    type: HS
  });
  xr(t, n);
  const a = ia(t, e, n, r, tn(t, e, r));
  return Gg(t, e, r, a);
}
s(rw, "repetitionMandatory");
function nw(t, e, r) {
  const n = Ve(t, e, r, {
    type: HS
  });
  xr(t, n);
  const a = ia(t, e, n, r, tn(t, e, r)), i = id(t, e, r.separator, r);
  return Gg(t, e, r, a, i);
}
s(nw, "repetitionMandatorySep");
function aw(t, e, r) {
  const n = Ve(t, e, r, {
    type: Yr
  });
  xr(t, n);
  const a = Er(r.definition, (o) => Fg(t, e, o));
  return ia(t, e, n, r, ...a);
}
s(aw, "alternation");
function iw(t, e, r) {
  const n = Ve(t, e, r, {
    type: Yr
  });
  xr(t, n);
  const a = ia(t, e, n, r, tn(t, e, r));
  return sw(t, e, r, a);
}
s(iw, "option");
function tn(t, e, r) {
  const n = XG(Er(r.definition, (a) => Fg(t, e, a)), (a) => a !== void 0);
  return n.length === 1 ? n[0] : n.length === 0 ? void 0 : lw(t, n);
}
s(tn, "block");
function Gg(t, e, r, n, a) {
  const i = n.left, o = n.right, c = Ve(t, e, r, {
    type: tj
  });
  xr(t, c);
  const l = Ve(t, e, r, {
    type: XS
  });
  return i.loopback = c, l.loopback = c, t.decisionMap[Gn(e, a ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", r.idx)] = c, je(o, c), a === void 0 ? (je(c, i), je(c, l)) : (je(c, l), je(c, a.left), je(a.right, i)), {
    left: i,
    right: l
  };
}
s(Gg, "plus");
function jg(t, e, r, n, a) {
  const i = n.left, o = n.right, c = Ve(t, e, r, {
    type: ej
  });
  xr(t, c);
  const l = Ve(t, e, r, {
    type: XS
  }), u = Ve(t, e, r, {
    type: QG
  });
  return c.loopback = u, l.loopback = u, je(c, i), je(c, l), je(o, u), a !== void 0 ? (je(u, l), je(u, a.left), je(a.right, i)) : je(u, c), t.decisionMap[Gn(e, a ? "RepetitionWithSeparator" : "Repetition", r.idx)] = c, {
    left: c,
    right: l
  };
}
s(jg, "star");
function sw(t, e, r, n) {
  const a = n.left, i = n.right;
  return je(a, i), t.decisionMap[Gn(e, "Option", r.idx)] = a, n;
}
s(sw, "optional");
function xr(t, e) {
  return t.decisionStates.push(e), e.decision = t.decisionStates.length - 1, e.decision;
}
s(xr, "defineDecisionState");
function ia(t, e, r, n, ...a) {
  const i = Ve(t, e, n, {
    type: ZG,
    start: r
  });
  r.end = i;
  for (const c of a)
    c !== void 0 ? (je(r, c.left), je(c.right, i)) : je(r, i);
  const o = {
    left: r,
    right: i
  };
  return t.decisionMap[Gn(e, ow(n), n.idx)] = r, o;
}
s(ia, "makeAlts");
function ow(t) {
  if (t instanceof vt)
    return "Alternation";
  if (t instanceof Qe)
    return "Option";
  if (t instanceof xe)
    return "Repetition";
  if (t instanceof yt)
    return "RepetitionWithSeparator";
  if (t instanceof _t)
    return "RepetitionMandatory";
  if (t instanceof Ct)
    return "RepetitionMandatoryWithSeparator";
  throw new Error("Invalid production type encountered");
}
s(ow, "getProdType");
function lw(t, e) {
  const r = e.length;
  for (let i = 0; i < r - 1; i++) {
    const o = e[i];
    let c;
    o.left.transitions.length === 1 && (c = o.left.transitions[0]);
    const l = c instanceof xg, u = c, f = e[i + 1].left;
    o.left.type === Yr && o.right.type === Yr && c !== void 0 && (l && u.followState === o.right || c.target === o.right) ? (l ? u.followState = f : c.target = f, fw(t, o.right)) : je(o.right, f);
  }
  const n = e[0], a = e[r - 1];
  return {
    left: n.left,
    right: a.right
  };
}
s(lw, "makeBlock");
function id(t, e, r, n) {
  const a = Ve(t, e, n, {
    type: Yr
  }), i = Ve(t, e, n, {
    type: Yr
  });
  return sd(a, new Mg(i, r)), {
    left: a,
    right: i
  };
}
s(id, "tokenRef");
function cw(t, e, r) {
  const n = r.referencedRule, a = t.ruleToStartState.get(n), i = Ve(t, e, r, {
    type: Yr
  }), o = Ve(t, e, r, {
    type: Yr
  }), c = new xg(a, n, o);
  return sd(i, c), {
    left: i,
    right: o
  };
}
s(cw, "ruleRef");
function uw(t, e, r) {
  const n = t.ruleToStartState.get(e);
  je(n, r.left);
  const a = t.ruleToStopState.get(e);
  return je(r.right, a), {
    left: n,
    right: a
  };
}
s(uw, "buildRuleHandle");
function je(t, e) {
  const r = new JS(e);
  sd(t, r);
}
s(je, "epsilon");
function Ve(t, e, r, n) {
  const a = Object.assign({
    atn: t,
    production: r,
    epsilonOnlyTransitions: !1,
    rule: e,
    transitions: [],
    nextTokenWithinRule: [],
    stateNumber: t.states.length
  }, n);
  return t.states.push(a), a;
}
s(Ve, "newState");
function sd(t, e) {
  t.transitions.length === 0 && (t.epsilonOnlyTransitions = e.isEpsilon()), t.transitions.push(e);
}
s(sd, "addTransition");
function fw(t, e) {
  t.states.splice(t.states.indexOf(e), 1);
}
s(fw, "removeState");
var Zu = {}, Wi, mh = (Wi = class {
  constructor() {
    this.map = {}, this.configs = [];
  }
  get size() {
    return this.configs.length;
  }
  finalize() {
    this.map = {};
  }
  add(e) {
    const r = Ug(e);
    r in this.map || (this.map[r] = this.configs.length, this.configs.push(e));
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return Er(this.configs, (e) => e.alt);
  }
  get key() {
    let e = "";
    for (const r in this.map)
      e += r + ":";
    return e;
  }
}, s(Wi, "ATNConfigSet"), Wi);
function Ug(t, e = !0) {
  return `${e ? `a${t.alt}` : ""}s${t.state.stateNumber}:${t.stack.map((r) => r.stateNumber.toString()).join("_")}`;
}
s(Ug, "getATNConfigKey");
function dw(t, e, r) {
  for (var n = -1, a = t.length; ++n < a; ) {
    var i = t[n], o = e(i);
    if (o != null && (c === void 0 ? o === o && !ed(o) : r(o, c)))
      var c = o, l = i;
  }
  return l;
}
s(dw, "baseExtremum");
var rj = dw;
function pw(t, e) {
  return t < e;
}
s(pw, "baseLt");
var nj = pw;
function hw(t) {
  return t && t.length ? rj(t, Lg, nj) : void 0;
}
s(hw, "min");
var aj = hw, jv = cr ? cr.isConcatSpreadable : void 0;
function mw(t) {
  return ut(t) || Zf(t) || !!(jv && t && t[jv]);
}
s(mw, "isFlattenable");
var ij = mw;
function zg(t, e, r, n, a) {
  var i = -1, o = t.length;
  for (r || (r = ij), a || (a = []); ++i < o; ) {
    var c = t[i];
    e > 0 && r(c) ? e > 1 ? zg(c, e - 1, r, n, a) : jb(a, c) : n || (a[a.length] = c);
  }
  return a;
}
s(zg, "baseFlatten");
var gw = zg;
function yw(t, e) {
  return gw(Er(t, e), 1);
}
s(yw, "flatMap");
var sj = yw;
function vw(t, e, r, n) {
  for (var a = t.length, i = r + (n ? 1 : -1); n ? i-- : ++i < a; )
    if (e(t[i], i, t))
      return i;
  return -1;
}
s(vw, "baseFindIndex");
var oj = vw;
function Tw(t) {
  return t !== t;
}
s(Tw, "baseIsNaN");
var lj = Tw;
function Rw(t, e, r) {
  for (var n = r - 1, a = t.length; ++n < a; )
    if (t[n] === e)
      return n;
  return -1;
}
s(Rw, "strictIndexOf");
var cj = Rw;
function $w(t, e, r) {
  return e === e ? cj(t, e, r) : oj(t, lj, r);
}
s($w, "baseIndexOf");
var uj = $w;
function Aw(t, e) {
  var r = t == null ? 0 : t.length;
  return !!r && uj(t, e, 0) > -1;
}
s(Aw, "arrayIncludes");
var fj = Aw;
function Ew(t, e, r) {
  for (var n = -1, a = t == null ? 0 : t.length; ++n < a; )
    if (r(e, t[n]))
      return !0;
  return !1;
}
s(Ew, "arrayIncludesWith");
var dj = Ew;
function _w() {
}
s(_w, "noop");
var pj = _w, hj = 1 / 0, mj = ja && 1 / Sg(new ja([, -0]))[1] == hj ? function(t) {
  return new ja(t);
} : pj, gj = mj, yj = 200;
function Cw(t, e, r) {
  var n = -1, a = fj, i = t.length, o = !0, c = [], l = c;
  if (r)
    o = !1, a = dj;
  else if (i >= yj) {
    var u = e ? null : gj(t);
    if (u)
      return Sg(u);
    o = !1, a = Ob, l = new Nb();
  } else
    l = e ? [] : c;
  e:
    for (; ++n < i; ) {
      var f = t[n], d = e ? e(f) : f;
      if (f = r || f !== 0 ? f : 0, o && d === d) {
        for (var p = l.length; p--; )
          if (l[p] === d)
            continue e;
        e && l.push(d), c.push(f);
      } else a(l, d, r) || (l !== c && l.push(d), c.push(f));
    }
  return c;
}
s(Cw, "baseUniq");
var vj = Cw;
function bw(t, e) {
  return t && t.length ? vj(t, nd(e)) : [];
}
s(bw, "uniqBy");
var Tj = bw;
function Sw(t) {
  var e = t == null ? 0 : t.length;
  return e ? gw(t, 1) : [];
}
s(Sw, "flatten");
var Rj = Sw;
function ww(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n && e(t[r], r, t) !== !1; )
    ;
  return t;
}
s(ww, "arrayEach");
var $j = ww;
function Iw(t) {
  return typeof t == "function" ? t : Lg;
}
s(Iw, "castFunction");
var Aj = Iw;
function Nw(t, e) {
  var r = ut(t) ? $j : ad;
  return r(t, Aj(e));
}
s(Nw, "forEach");
var Sd = Nw, Ej = "[object Map]", _j = "[object Set]", Cj = Object.prototype, bj = Cj.hasOwnProperty;
function kw(t) {
  if (t == null)
    return !0;
  if (Qf(t) && (ut(t) || typeof t == "string" || typeof t.splice == "function" || Ju(t) || Ig(t) || Zf(t)))
    return !t.length;
  var e = hh(t);
  if (e == Ej || e == _j)
    return !t.size;
  if (iS(t))
    return !lS(t).length;
  for (var r in t)
    if (bj.call(t, r))
      return !1;
  return !0;
}
s(kw, "isEmpty");
var Sj = kw;
function Pw(t, e, r, n) {
  var a = -1, i = t == null ? 0 : t.length;
  for (n && i && (r = t[++a]); ++a < i; )
    r = e(r, t[a], a, t);
  return r;
}
s(Pw, "arrayReduce");
var wj = Pw;
function Ow(t, e, r, n, a) {
  return a(t, function(i, o, c) {
    r = n ? (n = !1, i) : e(r, i, o, c);
  }), r;
}
s(Ow, "baseReduce");
var Ij = Ow;
function Lw(t, e, r) {
  var n = ut(t) ? wj : Ij, a = arguments.length < 3;
  return n(t, nd(e), r, a, ad);
}
s(Lw, "reduce");
var Uv = Lw;
function Dw(t, e) {
  const r = {};
  return (n) => {
    const a = n.toString();
    let i = r[a];
    return i !== void 0 || (i = {
      atnStartState: t,
      decision: e,
      states: {}
    }, r[a] = i), i;
  };
}
s(Dw, "createDFACache");
var Vi, Mw = (Vi = class {
  constructor() {
    this.predicates = [];
  }
  is(e) {
    return e >= this.predicates.length || this.predicates[e];
  }
  set(e, r) {
    this.predicates[e] = r;
  }
  toString() {
    let e = "";
    const r = this.predicates.length;
    for (let n = 0; n < r; n++)
      e += this.predicates[n] === !0 ? "1" : "0";
    return e;
  }
}, s(Vi, "PredicateSet"), Vi), zv = new Mw(), Hi, Nj = (Hi = class extends Eg {
  constructor(e) {
    var r;
    super(), this.logging = (r = e?.logging) !== null && r !== void 0 ? r : ((n) => console.log(n));
  }
  initialize(e) {
    this.atn = ZS(e.rules), this.dfas = xw(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(e) {
    const { prodOccurrence: r, rule: n, hasPredicates: a, dynamicTokensEnabled: i } = e, o = this.dfas, c = this.logging, l = Gn(n, "Alternation", r), f = this.atn.decisionMap[l].decision, d = Er(th({
      maxLookahead: 1,
      occurrence: r,
      prodType: "Alternation",
      rule: n
    }), (p) => Er(p, (g) => g[0]));
    if (gh(d, !1) && !i) {
      const p = Uv(d, (g, m, T) => (Sd(m, (_) => {
        _ && (g[_.tokenTypeIdx] = T, Sd(_.categoryMatches, (v) => {
          g[v] = T;
        }));
      }), g), {});
      return a ? function(g) {
        var m;
        const T = this.LA(1), _ = p[T.tokenTypeIdx];
        if (g !== void 0 && _ !== void 0) {
          const v = (m = g[_]) === null || m === void 0 ? void 0 : m.GATE;
          if (v !== void 0 && v.call(this) === !1)
            return;
        }
        return _;
      } : function() {
        const g = this.LA(1);
        return p[g.tokenTypeIdx];
      };
    } else return a ? function(p) {
      const g = new Mw(), m = p === void 0 ? 0 : p.length;
      for (let _ = 0; _ < m; _++) {
        const v = p?.[_].GATE;
        g.set(_, v === void 0 || v.call(this));
      }
      const T = mu.call(this, o, f, g, c);
      return typeof T == "number" ? T : void 0;
    } : function() {
      const p = mu.call(this, o, f, zv, c);
      return typeof p == "number" ? p : void 0;
    };
  }
  buildLookaheadForOptional(e) {
    const { prodOccurrence: r, rule: n, prodType: a, dynamicTokensEnabled: i } = e, o = this.dfas, c = this.logging, l = Gn(n, a, r), f = this.atn.decisionMap[l].decision, d = Er(th({
      maxLookahead: 1,
      occurrence: r,
      prodType: a,
      rule: n
    }), (p) => Er(p, (g) => g[0]));
    if (gh(d) && d[0][0] && !i) {
      const p = d[0], g = Rj(p);
      if (g.length === 1 && Sj(g[0].categoryMatches)) {
        const T = g[0].tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === T;
        };
      } else {
        const m = Uv(g, (T, _) => (_ !== void 0 && (T[_.tokenTypeIdx] = !0, Sd(_.categoryMatches, (v) => {
          T[v] = !0;
        })), T), {});
        return function() {
          const T = this.LA(1);
          return m[T.tokenTypeIdx] === !0;
        };
      }
    }
    return function() {
      const p = mu.call(this, o, f, zv, c);
      return typeof p == "object" ? !1 : p === 0;
    };
  }
}, s(Hi, "LLStarLookaheadStrategy"), Hi);
function gh(t, e = !0) {
  const r = /* @__PURE__ */ new Set();
  for (const n of t) {
    const a = /* @__PURE__ */ new Set();
    for (const i of n) {
      if (i === void 0) {
        if (e)
          break;
        return !1;
      }
      const o = [i.tokenTypeIdx].concat(i.categoryMatches);
      for (const c of o)
        if (r.has(c)) {
          if (!a.has(c))
            return !1;
        } else
          r.add(c), a.add(c);
    }
  }
  return !0;
}
s(gh, "isLL1Sequence");
function xw(t) {
  const e = t.decisionStates.length, r = Array(e);
  for (let n = 0; n < e; n++)
    r[n] = Dw(t.decisionStates[n], n);
  return r;
}
s(xw, "initATNSimulator");
function mu(t, e, r, n) {
  const a = t[e](r);
  let i = a.start;
  if (i === void 0) {
    const c = Hw(a.atnStartState);
    i = Kg(a, Bg(c)), a.start = i;
  }
  return Fw.apply(this, [a, i, r, n]);
}
s(mu, "adaptivePredict");
function Fw(t, e, r, n) {
  let a = e, i = 1;
  const o = [];
  let c = this.LA(i++);
  for (; ; ) {
    let l = Kw(a, c);
    if (l === void 0 && (l = Gw.apply(this, [t, a, c, i, r, n])), l === Zu)
      return Bw(o, a, c);
    if (l.isAcceptState === !0)
      return l.prediction;
    a = l, o.push(c), c = this.LA(i++);
  }
}
s(Fw, "performLookahead");
function Gw(t, e, r, n, a, i) {
  const o = qw(e.configs, r, a);
  if (o.size === 0)
    return yh(t, e, r, Zu), Zu;
  let c = Bg(o);
  const l = Vw(o, a);
  if (l !== void 0)
    c.isAcceptState = !0, c.prediction = l, c.configs.uniqueAlt = l;
  else if (Zw(o)) {
    const u = aj(o.alts);
    c.isAcceptState = !0, c.prediction = u, c.configs.uniqueAlt = u, jw.apply(this, [t, n, o.alts, i]);
  }
  return c = yh(t, e, r, c), c;
}
s(Gw, "computeLookaheadTarget");
function jw(t, e, r, n) {
  const a = [];
  for (let u = 1; u <= e; u++)
    a.push(this.LA(u).tokenType);
  const i = t.atnStartState, o = i.rule, c = i.production, l = Uw({
    topLevelRule: o,
    ambiguityIndices: r,
    production: c,
    prefixPath: a
  });
  n(l);
}
s(jw, "reportLookaheadAmbiguity");
function Uw(t) {
  const e = Er(t.prefixPath, (a) => Pn(a)).join(", "), r = t.production.idx === 0 ? "" : t.production.idx;
  let n = `Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${zw(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;
  return n = n + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`, n;
}
s(Uw, "buildAmbiguityError");
function zw(t) {
  if (t instanceof lt)
    return "SUBRULE";
  if (t instanceof Qe)
    return "OPTION";
  if (t instanceof vt)
    return "OR";
  if (t instanceof _t)
    return "AT_LEAST_ONE";
  if (t instanceof Ct)
    return "AT_LEAST_ONE_SEP";
  if (t instanceof yt)
    return "MANY_SEP";
  if (t instanceof xe)
    return "MANY";
  if (t instanceof Se)
    return "CONSUME";
  throw Error("non exhaustive match");
}
s(zw, "getProductionDslName");
function Bw(t, e, r) {
  const n = sj(e.configs.elements, (i) => i.state.transitions), a = Tj(n.filter((i) => i instanceof Mg).map((i) => i.tokenType), (i) => i.tokenTypeIdx);
  return {
    actualToken: r,
    possibleTokenTypes: a,
    tokenPath: t
  };
}
s(Bw, "buildAdaptivePredictError");
function Kw(t, e) {
  return t.edges[e.tokenTypeIdx];
}
s(Kw, "getExistingTargetState");
function qw(t, e, r) {
  const n = new mh(), a = [];
  for (const o of t.elements) {
    if (r.is(o.alt) === !1)
      continue;
    if (o.state.type === Pc) {
      a.push(o);
      continue;
    }
    const c = o.state.transitions.length;
    for (let l = 0; l < c; l++) {
      const u = o.state.transitions[l], f = Ww(u, e);
      f !== void 0 && n.add({
        state: f,
        alt: o.alt,
        stack: o.stack
      });
    }
  }
  let i;
  if (a.length === 0 && n.size === 1 && (i = n), i === void 0) {
    i = new mh();
    for (const o of n.elements)
      uc(o, i);
  }
  if (a.length > 0 && !Xw(i))
    for (const o of a)
      i.add(o);
  return i;
}
s(qw, "computeReachSet");
function Ww(t, e) {
  if (t instanceof Mg && gg(e, t.tokenType))
    return t.target;
}
s(Ww, "getReachableTarget");
function Vw(t, e) {
  let r;
  for (const n of t.elements)
    if (e.is(n.alt) === !0) {
      if (r === void 0)
        r = n.alt;
      else if (r !== n.alt)
        return;
    }
  return r;
}
s(Vw, "getUniqueAlt");
function Bg(t) {
  return {
    configs: t,
    edges: {},
    isAcceptState: !1,
    prediction: -1
  };
}
s(Bg, "newDFAState");
function yh(t, e, r, n) {
  return n = Kg(t, n), e.edges[r.tokenTypeIdx] = n, n;
}
s(yh, "addDFAEdge");
function Kg(t, e) {
  if (e === Zu)
    return e;
  const r = e.configs.key, n = t.states[r];
  return n !== void 0 ? n : (e.configs.finalize(), t.states[r] = e, e);
}
s(Kg, "addDFAState");
function Hw(t) {
  const e = new mh(), r = t.transitions.length;
  for (let n = 0; n < r; n++) {
    const i = {
      state: t.transitions[n].target,
      alt: n,
      stack: []
    };
    uc(i, e);
  }
  return e;
}
s(Hw, "computeStartState");
function uc(t, e) {
  const r = t.state;
  if (r.type === Pc) {
    if (t.stack.length > 0) {
      const a = [...t.stack], o = {
        state: a.pop(),
        alt: t.alt,
        stack: a
      };
      uc(o, e);
    } else
      e.add(t);
    return;
  }
  r.epsilonOnlyTransitions || e.add(t);
  const n = r.transitions.length;
  for (let a = 0; a < n; a++) {
    const i = r.transitions[a], o = Yw(t, i);
    o !== void 0 && uc(o, e);
  }
}
s(uc, "closure");
function Yw(t, e) {
  if (e instanceof JS)
    return {
      state: e.target,
      alt: t.alt,
      stack: t.stack
    };
  if (e instanceof xg) {
    const r = [...t.stack, e.followState];
    return {
      state: e.target,
      alt: t.alt,
      stack: r
    };
  }
}
s(Yw, "getEpsilonTarget");
function Xw(t) {
  for (const e of t.elements)
    if (e.state.type === Pc)
      return !0;
  return !1;
}
s(Xw, "hasConfigInRuleStopState");
function Jw(t) {
  for (const e of t.elements)
    if (e.state.type !== Pc)
      return !1;
  return !0;
}
s(Jw, "allConfigsInRuleStopStates");
function Zw(t) {
  if (Jw(t))
    return !0;
  const e = Qw(t.elements);
  return eI(e) && !tI(e);
}
s(Zw, "hasConflictTerminatingPrediction");
function Qw(t) {
  const e = /* @__PURE__ */ new Map();
  for (const r of t) {
    const n = Ug(r, !1);
    let a = e.get(n);
    a === void 0 && (a = {}, e.set(n, a)), a[r.alt] = !0;
  }
  return e;
}
s(Qw, "getConflictingAltSets");
function eI(t) {
  for (const e of Array.from(t.values()))
    if (Object.keys(e).length > 1)
      return !0;
  return !1;
}
s(eI, "hasConflictingAltSet");
function tI(t) {
  for (const e of Array.from(t.values()))
    if (Object.keys(e).length === 1)
      return !0;
  return !1;
}
s(tI, "hasStateAssociatedWithOneAlt");
pc();
var Yi, rI = (Yi = class {
  constructor() {
    this.nodeStack = [];
  }
  get current() {
    return this.nodeStack[this.nodeStack.length - 1] ?? this.rootNode;
  }
  buildRootNode(e) {
    return this.rootNode = new Wg(e), this.rootNode.root = this.rootNode, this.nodeStack = [this.rootNode], this.rootNode;
  }
  buildCompositeNode(e) {
    const r = new od();
    return r.grammarSource = e, r.root = this.rootNode, this.current.content.push(r), this.nodeStack.push(r), r;
  }
  buildLeafNode(e, r) {
    const n = new Qu(e.startOffset, e.image.length, Jl(e), e.tokenType, !r);
    return n.grammarSource = r, n.root = this.rootNode, this.current.content.push(n), n;
  }
  removeNode(e) {
    const r = e.container;
    if (r) {
      const n = r.content.indexOf(e);
      n >= 0 && r.content.splice(n, 1);
    }
  }
  addHiddenNodes(e) {
    const r = [];
    for (const i of e) {
      const o = new Qu(i.startOffset, i.image.length, Jl(i), i.tokenType, !0);
      o.root = this.rootNode, r.push(o);
    }
    let n = this.current, a = !1;
    if (n.content.length > 0) {
      n.content.push(...r);
      return;
    }
    for (; n.container; ) {
      const i = n.container.content.indexOf(n);
      if (i > 0) {
        n.container.content.splice(i, 0, ...r), a = !0;
        break;
      }
      n = n.container;
    }
    a || this.rootNode.content.unshift(...r);
  }
  construct(e) {
    const r = this.current;
    typeof e.$type == "string" && !e.$infix && (this.current.astNode = e), e.$cstNode = r;
    const n = this.nodeStack.pop();
    n?.content.length === 0 && this.removeNode(n);
  }
}, s(Yi, "CstNodeBuilder"), Yi), Xi, qg = (Xi = class {
  get hidden() {
    return !1;
  }
  get astNode() {
    const e = typeof this._astNode?.$type == "string" ? this._astNode : this.container?.astNode;
    if (!e)
      throw new Error("This node has no associated AST element");
    return e;
  }
  set astNode(e) {
    this._astNode = e;
  }
  get text() {
    return this.root.fullText.substring(this.offset, this.end);
  }
}, s(Xi, "AbstractCstNode"), Xi), Ji, Qu = (Ji = class extends qg {
  get offset() {
    return this._offset;
  }
  get length() {
    return this._length;
  }
  get end() {
    return this._offset + this._length;
  }
  get hidden() {
    return this._hidden;
  }
  get tokenType() {
    return this._tokenType;
  }
  get range() {
    return this._range;
  }
  constructor(e, r, n, a, i = !1) {
    super(), this._hidden = i, this._offset = e, this._tokenType = a, this._length = r, this._range = n;
  }
}, s(Ji, "LeafCstNodeImpl"), Ji), Zi, od = (Zi = class extends qg {
  constructor() {
    super(...arguments), this.content = new kj(this);
  }
  get offset() {
    return this.firstNonHiddenNode?.offset ?? 0;
  }
  get length() {
    return this.end - this.offset;
  }
  get end() {
    return this.lastNonHiddenNode?.end ?? 0;
  }
  get range() {
    const e = this.firstNonHiddenNode, r = this.lastNonHiddenNode;
    if (e && r) {
      if (this._rangeCache === void 0) {
        const { range: n } = e, { range: a } = r;
        this._rangeCache = { start: n.start, end: a.end.line < n.start.line ? n.start : a.end };
      }
      return this._rangeCache;
    } else
      return { start: ie.create(0, 0), end: ie.create(0, 0) };
  }
  get firstNonHiddenNode() {
    for (const e of this.content)
      if (!e.hidden)
        return e;
    return this.content[0];
  }
  get lastNonHiddenNode() {
    for (let e = this.content.length - 1; e >= 0; e--) {
      const r = this.content[e];
      if (!r.hidden)
        return r;
    }
    return this.content[this.content.length - 1];
  }
}, s(Zi, "CompositeCstNodeImpl"), Zi), Dn, kj = (Dn = class extends Array {
  constructor(e) {
    super(), this.parent = e, Object.setPrototypeOf(this, Dn.prototype);
  }
  push(...e) {
    return this.addParents(e), super.push(...e);
  }
  unshift(...e) {
    return this.addParents(e), super.unshift(...e);
  }
  splice(e, r, ...n) {
    return this.addParents(n), super.splice(e, r, ...n);
  }
  addParents(e) {
    for (const r of e)
      r.container = this.parent;
  }
}, s(Dn, "CstNodeContainer"), Dn), Qi, Wg = (Qi = class extends od {
  get text() {
    return this._text.substring(this.offset, this.end);
  }
  get fullText() {
    return this._text;
  }
  constructor(e) {
    super(), this._text = "", this._text = e ?? "";
  }
}, s(Qi, "RootCstNodeImpl"), Qi), ef = /* @__PURE__ */ Symbol("Datatype");
function gu(t) {
  return t.$type === ef;
}
s(gu, "isDataTypeNode");
var Bv = "​", nI = /* @__PURE__ */ s((t) => t.endsWith(Bv) ? t : t + Bv, "withRuleSuffix"), es, Vg = (es = class {
  constructor(e) {
    this._unorderedGroups = /* @__PURE__ */ new Map(), this.allRules = /* @__PURE__ */ new Map(), this.lexer = e.parser.Lexer;
    const r = this.lexer.definition, n = e.LanguageMetaData.mode === "production";
    e.shared.profilers.LangiumProfiler?.isActive("parsing") ? this.wrapper = new Oj(r, {
      ...e.parser.ParserConfig,
      skipValidations: n,
      errorMessageProvider: e.parser.ParserErrorMessageProvider
    }, e.shared.profilers.LangiumProfiler.createTask("parsing", e.LanguageMetaData.languageId)) : this.wrapper = new oI(r, {
      ...e.parser.ParserConfig,
      skipValidations: n,
      errorMessageProvider: e.parser.ParserErrorMessageProvider
    });
  }
  alternatives(e, r) {
    this.wrapper.wrapOr(e, r);
  }
  optional(e, r) {
    this.wrapper.wrapOption(e, r);
  }
  many(e, r) {
    this.wrapper.wrapMany(e, r);
  }
  atLeastOne(e, r) {
    this.wrapper.wrapAtLeastOne(e, r);
  }
  getRule(e) {
    return this.allRules.get(e);
  }
  isRecording() {
    return this.wrapper.IS_RECORDING;
  }
  get unorderedGroups() {
    return this._unorderedGroups;
  }
  getRuleStack() {
    return this.wrapper.RULE_STACK;
  }
  finalize() {
    this.wrapper.wrapSelfAnalysis();
  }
}, s(es, "AbstractLangiumParser"), es), ts, aI = (ts = class extends Vg {
  get current() {
    return this.stack[this.stack.length - 1];
  }
  constructor(e) {
    super(e), this.nodeBuilder = new rI(), this.stack = [], this.assignmentMap = /* @__PURE__ */ new Map(), this.operatorPrecedence = /* @__PURE__ */ new Map(), this.linker = e.references.Linker, this.converter = e.parser.ValueConverter, this.astReflection = e.shared.AstReflection;
  }
  rule(e, r) {
    const n = this.computeRuleType(e);
    let a;
    No(e) && (a = e.name, this.registerPrecedenceMap(e));
    const i = this.wrapper.DEFINE_RULE(nI(e.name), this.startImplementation(n, a, r).bind(this));
    return this.allRules.set(e.name, i), ot(e) && e.entry && (this.mainRule = i), i;
  }
  registerPrecedenceMap(e) {
    const r = e.name, n = /* @__PURE__ */ new Map();
    for (let a = 0; a < e.operators.precedences.length; a++) {
      const i = e.operators.precedences[a];
      for (const o of i.operators)
        n.set(o.value, {
          precedence: a,
          rightAssoc: i.associativity === "right"
        });
    }
    this.operatorPrecedence.set(r, n);
  }
  computeRuleType(e) {
    return No(e) ? Mn(e) : e.fragment ? void 0 : yc(e) ? ef : Mn(e);
  }
  parse(e, r = {}) {
    this.nodeBuilder.buildRootNode(e);
    const n = this.lexerResult = this.lexer.tokenize(e);
    this.wrapper.input = n.tokens;
    const a = r.rule ? this.allRules.get(r.rule) : this.mainRule;
    if (!a)
      throw new Error(r.rule ? `No rule found with name '${r.rule}'` : "No main rule available.");
    const i = this.doParse(a);
    return this.nodeBuilder.addHiddenNodes(n.hidden), this.unorderedGroups.clear(), this.lexerResult = void 0, wo(i, { deep: !0 }), {
      value: i,
      lexerErrors: n.errors,
      lexerReport: n.report,
      parserErrors: this.wrapper.errors
    };
  }
  doParse(e) {
    let r = this.wrapper.rule(e);
    if (this.stack.length > 0 && (r = this.construct()), r === void 0)
      throw new Error("No result from parser");
    if (this.stack.length > 0)
      throw new Error("Parser stack is not empty after parsing");
    return r;
  }
  startImplementation(e, r, n) {
    return (a) => {
      const i = !this.isRecording() && e !== void 0;
      if (i) {
        const o = { $type: e };
        this.stack.push(o), e === ef ? o.value = "" : r !== void 0 && (o.$infixName = r);
      }
      return n(a), i ? this.construct() : void 0;
    };
  }
  extractHiddenTokens(e) {
    const r = this.lexerResult.hidden;
    if (!r.length)
      return [];
    const n = e.startOffset;
    for (let a = 0; a < r.length; a++)
      if (r[a].startOffset > n)
        return r.splice(0, a);
    return r.splice(0, r.length);
  }
  consume(e, r, n) {
    const a = this.wrapper.wrapConsume(e, r);
    if (!this.isRecording() && this.isValidToken(a)) {
      const i = this.extractHiddenTokens(a);
      this.nodeBuilder.addHiddenNodes(i);
      const o = this.nodeBuilder.buildLeafNode(a, n), { assignment: c, crossRef: l } = this.getAssignment(n), u = this.current;
      if (c) {
        const f = br(n) ? a.image : this.converter.convert(a.image, o);
        this.assign(c.operator, c.feature, f, o, l);
      } else if (gu(u)) {
        let f = a.image;
        br(n) || (f = this.converter.convert(f, o).toString()), u.value += f;
      }
    }
  }
  /**
   * Most consumed parser tokens are valid. However there are two cases in which they are not valid:
   *
   * 1. They were inserted during error recovery by the parser. These tokens don't really exist and should not be further processed
   * 2. They contain invalid token ranges. This might include the special EOF token, or other tokens produced by invalid token builders.
   */
  isValidToken(e) {
    return !e.isInsertedInRecovery && !isNaN(e.startOffset) && typeof e.endOffset == "number" && !isNaN(e.endOffset);
  }
  subrule(e, r, n, a, i) {
    let o;
    !this.isRecording() && !n && (o = this.nodeBuilder.buildCompositeNode(a));
    let c;
    try {
      c = this.wrapper.wrapSubrule(e, r, i);
    } finally {
      this.isRecording() || (c === void 0 && !n && (c = this.construct()), c !== void 0 && o && o.length > 0 && this.performSubruleAssignment(c, a, o));
    }
  }
  performSubruleAssignment(e, r, n) {
    const { assignment: a, crossRef: i } = this.getAssignment(r);
    if (a)
      this.assign(a.operator, a.feature, e, n, i);
    else if (!a) {
      const o = this.current;
      if (gu(o))
        o.value += e.toString();
      else if (typeof e == "object" && e) {
        const l = this.assignWithoutOverride(e, o);
        this.stack.pop(), this.stack.push(l);
      }
    }
  }
  action(e, r) {
    if (!this.isRecording()) {
      let n = this.current;
      if (r.feature && r.operator) {
        n = this.construct(), this.nodeBuilder.removeNode(n.$cstNode), this.nodeBuilder.buildCompositeNode(r).content.push(n.$cstNode);
        const i = { $type: e };
        this.stack.push(i), this.assign(r.operator, r.feature, n, n.$cstNode);
      } else
        n.$type = e;
    }
  }
  construct() {
    if (this.isRecording())
      return;
    const e = this.stack.pop();
    return this.nodeBuilder.construct(e), "$infixName" in e ? this.constructInfix(e, this.operatorPrecedence.get(e.$infixName)) : gu(e) ? this.converter.convert(e.value, e.$cstNode) : (qh(this.astReflection, e), e);
  }
  constructInfix(e, r) {
    const n = e.parts;
    if (!Array.isArray(n) || n.length === 0)
      return;
    const a = e.operators;
    if (!Array.isArray(a) || n.length < 2)
      return n[0];
    let i = 0, o = -1;
    for (let T = 0; T < a.length; T++) {
      const _ = a[T], v = r.get(_) ?? {
        precedence: 1 / 0,
        rightAssoc: !1
      };
      v.precedence > o ? (o = v.precedence, i = T) : v.precedence === o && (v.rightAssoc || (i = T));
    }
    const c = a.slice(0, i), l = a.slice(i + 1), u = n.slice(0, i + 1), f = n.slice(i + 1), d = {
      $infixName: e.$infixName,
      $type: e.$type,
      $cstNode: e.$cstNode,
      parts: u,
      operators: c
    }, p = {
      $infixName: e.$infixName,
      $type: e.$type,
      $cstNode: e.$cstNode,
      parts: f,
      operators: l
    }, g = this.constructInfix(d, r), m = this.constructInfix(p, r);
    return {
      $type: e.$type,
      $cstNode: e.$cstNode,
      left: g,
      operator: a[i],
      right: m
    };
  }
  getAssignment(e) {
    if (!this.assignmentMap.has(e)) {
      const r = zn(e, Cr);
      this.assignmentMap.set(e, {
        assignment: r,
        crossRef: r && Kn(r.terminal) ? r.terminal.isMulti ? "multi" : "single" : void 0
      });
    }
    return this.assignmentMap.get(e);
  }
  assign(e, r, n, a, i) {
    const o = this.current;
    let c;
    switch (i === "single" && typeof n == "string" ? c = this.linker.buildReference(o, r, a, n) : i === "multi" && typeof n == "string" ? c = this.linker.buildMultiReference(o, r, a, n) : c = n, e) {
      case "=": {
        o[r] = c;
        break;
      }
      case "?=": {
        o[r] = !0;
        break;
      }
      case "+=":
        Array.isArray(o[r]) || (o[r] = []), o[r].push(c);
    }
  }
  assignWithoutOverride(e, r) {
    for (const [a, i] of Object.entries(r)) {
      const o = e[a];
      o === void 0 ? e[a] = i : Array.isArray(o) && Array.isArray(i) && (i.push(...o), e[a] = i);
    }
    const n = e.$cstNode;
    return n && (n.astNode = void 0, e.$cstNode = void 0), e;
  }
  get definitionErrors() {
    return this.wrapper.definitionErrors;
  }
}, s(ts, "LangiumParser"), ts), rs, iI = (rs = class {
  buildMismatchTokenMessage(e) {
    return Ma.buildMismatchTokenMessage(e);
  }
  buildNotAllInputParsedMessage(e) {
    return Ma.buildNotAllInputParsedMessage(e);
  }
  buildNoViableAltMessage(e) {
    return Ma.buildNoViableAltMessage(e);
  }
  buildEarlyExitMessage(e) {
    return Ma.buildEarlyExitMessage(e);
  }
}, s(rs, "AbstractParserErrorMessageProvider"), rs), ns, Hg = (ns = class extends iI {
  buildMismatchTokenMessage({ expected: e, actual: r }) {
    return `Expecting ${e.LABEL ? "`" + e.LABEL + "`" : e.name.endsWith(":KW") ? `keyword '${e.name.substring(0, e.name.length - 3)}'` : `token of type '${e.name}'`} but found \`${r.image}\`.`;
  }
  buildNotAllInputParsedMessage({ firstRedundant: e }) {
    return `Expecting end of file but found \`${e.image}\`.`;
  }
}, s(ns, "LangiumParserErrorMessageProvider"), ns), as, sI = (as = class extends Vg {
  constructor() {
    super(...arguments), this.tokens = [], this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  action() {
  }
  construct() {
  }
  parse(e) {
    this.resetState();
    const r = this.lexer.tokenize(e, { mode: "partial" });
    return this.tokens = r.tokens, this.wrapper.input = [...this.tokens], this.mainRule.call(this.wrapper, {}), this.unorderedGroups.clear(), {
      tokens: this.tokens,
      elementStack: [...this.lastElementStack],
      tokenIndex: this.nextTokenIndex
    };
  }
  rule(e, r) {
    const n = this.wrapper.DEFINE_RULE(nI(e.name), this.startImplementation(r).bind(this));
    return this.allRules.set(e.name, n), e.entry && (this.mainRule = n), n;
  }
  resetState() {
    this.elementStack = [], this.lastElementStack = [], this.nextTokenIndex = 0, this.stackSize = 0;
  }
  startImplementation(e) {
    return (r) => {
      const n = this.keepStackSize();
      try {
        e(r);
      } finally {
        this.resetStackSize(n);
      }
    };
  }
  removeUnexpectedElements() {
    this.elementStack.splice(this.stackSize);
  }
  keepStackSize() {
    const e = this.elementStack.length;
    return this.stackSize = e, e;
  }
  resetStackSize(e) {
    this.removeUnexpectedElements(), this.stackSize = e;
  }
  consume(e, r, n) {
    this.wrapper.wrapConsume(e, r), this.isRecording() || (this.lastElementStack = [...this.elementStack, n], this.nextTokenIndex = this.currIdx + 1);
  }
  subrule(e, r, n, a, i) {
    this.before(a), this.wrapper.wrapSubrule(e, r, i), this.after(a);
  }
  before(e) {
    this.isRecording() || this.elementStack.push(e);
  }
  after(e) {
    if (!this.isRecording()) {
      const r = this.elementStack.lastIndexOf(e);
      r >= 0 && this.elementStack.splice(r);
    }
  }
  get currIdx() {
    return this.wrapper.currIdx;
  }
}, s(as, "LangiumCompletionParser"), as), Pj = {
  recoveryEnabled: !0,
  nodeLocationTracking: "full",
  skipValidations: !0,
  errorMessageProvider: new Hg()
}, is, oI = (is = class extends vx {
  constructor(e, r) {
    const n = r && "maxLookahead" in r;
    super(e, {
      ...Pj,
      lookaheadStrategy: n ? new Eg({ maxLookahead: r.maxLookahead }) : new Nj({
        // If validations are skipped, don't log the lookahead warnings
        logging: r.skipValidations ? () => {
        } : void 0
      }),
      ...r
    });
  }
  get IS_RECORDING() {
    return this.RECORDING_PHASE;
  }
  DEFINE_RULE(e, r, n) {
    return this.RULE(e, r, n);
  }
  wrapSelfAnalysis() {
    this.performSelfAnalysis();
  }
  wrapConsume(e, r) {
    return this.consume(e, r, void 0);
  }
  wrapSubrule(e, r, n) {
    return this.subrule(e, r, {
      ARGS: [n]
    });
  }
  wrapOr(e, r) {
    this.or(e, r);
  }
  wrapOption(e, r) {
    this.option(e, r);
  }
  wrapMany(e, r) {
    this.many(e, r);
  }
  wrapAtLeastOne(e, r) {
    this.atLeastOne(e, r);
  }
  rule(e) {
    return e.call(this, {});
  }
}, s(is, "ChevrotainWrapper"), is), ss, Oj = (ss = class extends oI {
  constructor(e, r, n) {
    super(e, r), this.task = n;
  }
  rule(e) {
    this.task.start(), this.task.startSubTask(this.ruleName(e));
    try {
      return super.rule(e);
    } finally {
      this.task.stopSubTask(this.ruleName(e)), this.task.stop();
    }
  }
  ruleName(e) {
    return e.ruleName;
  }
  subrule(e, r, n) {
    this.task.startSubTask(this.ruleName(r));
    try {
      return super.subrule(e, r, n);
    } finally {
      this.task.stopSubTask(this.ruleName(r));
    }
  }
}, s(ss, "ProfilerWrapper"), ss);
function ld(t, e, r) {
  return lI({
    parser: e,
    tokens: r,
    ruleNames: /* @__PURE__ */ new Map()
  }, t), e;
}
s(ld, "createParser");
function lI(t, e) {
  const r = Ef(e, !1), n = ue(e.rules).filter(ot).filter((i) => r.has(i));
  for (const i of n) {
    const o = {
      ...t,
      consume: 1,
      optional: 1,
      subrule: 1,
      many: 1,
      or: 1
    };
    t.parser.rule(i, Xr(o, i.definition));
  }
  const a = ue(e.rules).filter(No).filter((i) => r.has(i));
  for (const i of a)
    t.parser.rule(i, cI(t, i));
}
s(lI, "buildRules");
function cI(t, e) {
  const r = e.call.rule.ref;
  if (!r)
    throw new Error("Could not resolve reference to infix operator rule: " + e.call.rule.$refText);
  if (xt(r))
    throw new Error("Cannot use terminal rule in infix expression");
  const n = e.operators.precedences.flatMap((g) => g.operators), a = {
    $type: "Group",
    elements: []
  }, i = {
    $container: a,
    $type: "Assignment",
    feature: "parts",
    operator: "+=",
    terminal: e.call
  }, o = {
    $container: a,
    $type: "Group",
    elements: [],
    cardinality: "*"
  };
  a.elements.push(i, o);
  const l = {
    $container: o,
    $type: "Assignment",
    feature: "operators",
    operator: "+=",
    terminal: {
      $type: "Alternatives",
      elements: n
    }
  }, u = {
    ...i,
    $container: o
  };
  o.elements.push(l, u);
  const d = n.map((g) => t.tokens[g.value]).map((g, m) => ({
    ALT: /* @__PURE__ */ s(() => t.parser.consume(m, g, l), "ALT")
  }));
  let p;
  return (g) => {
    p ?? (p = cd(t, r)), t.parser.subrule(0, p, !1, i, g), t.parser.many(0, {
      DEF: /* @__PURE__ */ s(() => {
        t.parser.alternatives(0, d), t.parser.subrule(1, p, !1, u, g);
      }, "DEF")
    });
  };
}
s(cI, "buildInfixRule");
function Xr(t, e, r = !1) {
  let n;
  if (br(e))
    n = gI(t, e);
  else if (Wr(e))
    n = uI(t, e);
  else if (Cr(e))
    n = Xr(t, e.terminal);
  else if (Kn(e))
    n = Yg(t, e);
  else if (Sr(e))
    n = fI(t, e);
  else if (hf(e))
    n = pI(t, e);
  else if (vf(e))
    n = hI(t, e);
  else if (qn(e))
    n = mI(t, e);
  else if (Zh(e)) {
    const a = t.consume++;
    n = /* @__PURE__ */ s(() => t.parser.consume(a, Hr, e), "method");
  } else
    throw new Rf(e.$cstNode, `Unexpected element type: ${e.$type}`);
  return Xg(t, r ? void 0 : fc(e), n, e.cardinality);
}
s(Xr, "buildElement");
function uI(t, e) {
  const r = Mn(e);
  return () => t.parser.action(r, e);
}
s(uI, "buildAction");
function fI(t, e) {
  const r = e.rule.ref;
  if (Bn(r)) {
    const n = t.subrule++, a = ot(r) && r.fragment, i = e.arguments.length > 0 ? dI(r, e.arguments) : () => ({});
    let o;
    return (c) => {
      o ?? (o = cd(t, r)), t.parser.subrule(n, o, a, e, i(c));
    };
  } else if (xt(r)) {
    const n = t.consume++, a = tf(t, r.name);
    return () => t.parser.consume(n, a, e);
  } else if (r)
    Zr();
  else
    throw new Rf(e.$cstNode, `Undefined rule: ${e.rule.$refText}`);
}
s(fI, "buildRuleCall");
function dI(t, e) {
  if (e.some((n) => n.calledByName)) {
    const n = e.map((a) => ({
      parameterName: a.parameter?.ref?.name,
      predicate: zt(a.value)
    }));
    return (a) => {
      const i = {};
      for (const { parameterName: o, predicate: c } of n)
        o && (i[o] = c(a));
      return i;
    };
  } else {
    const n = e.map((a) => zt(a.value));
    return (a) => {
      const i = {};
      for (let o = 0; o < n.length; o++)
        if (o < t.parameters.length) {
          const c = t.parameters[o].name, l = n[o];
          i[c] = l(a);
        }
      return i;
    };
  }
}
s(dI, "buildRuleCallPredicate");
function zt(t) {
  if (Jh(t)) {
    const e = zt(t.left), r = zt(t.right);
    return (n) => e(n) || r(n);
  } else if (Xh(t)) {
    const e = zt(t.left), r = zt(t.right);
    return (n) => e(n) && r(n);
  } else if (tm(t)) {
    const e = zt(t.value);
    return (r) => !e(r);
  } else if (rm(t)) {
    const e = t.parameter.ref.name;
    return (r) => r !== void 0 && r[e] === !0;
  } else if (Hh(t)) {
    const e = !!t.true;
    return () => e;
  }
  Zr();
}
s(zt, "buildPredicate");
function pI(t, e) {
  if (e.elements.length === 1)
    return Xr(t, e.elements[0]);
  {
    const r = [];
    for (const a of e.elements) {
      const i = {
        // Since we handle the guard condition in the alternative already
        // We can ignore the group guard condition inside
        ALT: Xr(t, a, !0)
      }, o = fc(a);
      o && (i.GATE = zt(o)), r.push(i);
    }
    const n = t.or++;
    return (a) => t.parser.alternatives(n, r.map((i) => {
      const o = {
        ALT: /* @__PURE__ */ s(() => i.ALT(a), "ALT")
      }, c = i.GATE;
      return c && (o.GATE = () => c(a)), o;
    }));
  }
}
s(pI, "buildAlternatives");
function hI(t, e) {
  if (e.elements.length === 1)
    return Xr(t, e.elements[0]);
  const r = [];
  for (const c of e.elements) {
    const l = {
      // Since we handle the guard condition in the alternative already
      // We can ignore the group guard condition inside
      ALT: Xr(t, c, !0)
    }, u = fc(c);
    u && (l.GATE = zt(u)), r.push(l);
  }
  const n = t.or++, a = /* @__PURE__ */ s((c, l) => {
    const u = l.getRuleStack().join("-");
    return `uGroup_${c}_${u}`;
  }, "idFunc"), i = /* @__PURE__ */ s((c) => t.parser.alternatives(n, r.map((l, u) => {
    const f = { ALT: /* @__PURE__ */ s(() => !0, "ALT") }, d = t.parser;
    f.ALT = () => {
      if (l.ALT(c), !d.isRecording()) {
        const g = a(n, d);
        d.unorderedGroups.get(g) || d.unorderedGroups.set(g, []);
        const m = d.unorderedGroups.get(g);
        typeof m?.[u] > "u" && (m[u] = !0);
      }
    };
    const p = l.GATE;
    return p ? f.GATE = () => p(c) : f.GATE = () => !d.unorderedGroups.get(a(n, d))?.[u], f;
  })), "alternatives"), o = Xg(t, fc(e), i, "*");
  return (c) => {
    o(c), t.parser.isRecording() || t.parser.unorderedGroups.delete(a(n, t.parser));
  };
}
s(hI, "buildUnorderedGroup");
function mI(t, e) {
  const r = e.elements.map((n) => Xr(t, n));
  return (n) => r.forEach((a) => a(n));
}
s(mI, "buildGroup");
function fc(t) {
  if (qn(t))
    return t.guardCondition;
}
s(fc, "getGuardCondition");
function Yg(t, e, r = e.terminal) {
  if (r)
    if (Sr(r) && ot(r.rule.ref)) {
      const n = r.rule.ref, a = t.subrule++;
      let i;
      return (o) => {
        i ?? (i = cd(t, n)), t.parser.subrule(a, i, !1, e, o);
      };
    } else if (Sr(r) && xt(r.rule.ref)) {
      const n = t.consume++, a = tf(t, r.rule.ref.name);
      return () => t.parser.consume(n, a, e);
    } else if (br(r)) {
      const n = t.consume++, a = tf(t, r.value);
      return () => t.parser.consume(n, a, e);
    } else
      throw new Error("Could not build cross reference parser");
  else {
    if (!e.type.ref)
      throw new Error("Could not resolve reference to type: " + e.type.$refText);
    const a = Sf(e.type.ref)?.terminal;
    if (!a)
      throw new Error("Could not find name assignment for type: " + Mn(e.type.ref));
    return Yg(t, e, a);
  }
}
s(Yg, "buildCrossReference");
function gI(t, e) {
  const r = t.consume++, n = t.tokens[e.value];
  if (!n)
    throw new Error("Could not find token for keyword: " + e.value);
  return () => t.parser.consume(r, n, e);
}
s(gI, "buildKeyword");
function Xg(t, e, r, n) {
  const a = e && zt(e);
  if (!n)
    if (a) {
      const i = t.or++;
      return (o) => t.parser.alternatives(i, [
        {
          ALT: /* @__PURE__ */ s(() => r(o), "ALT"),
          GATE: /* @__PURE__ */ s(() => a(o), "GATE")
        },
        {
          ALT: uh(),
          GATE: /* @__PURE__ */ s(() => !a(o), "GATE")
        }
      ]);
    } else
      return r;
  if (n === "*") {
    const i = t.many++;
    return (o) => t.parser.many(i, {
      DEF: /* @__PURE__ */ s(() => r(o), "DEF"),
      GATE: a ? () => a(o) : void 0
    });
  } else if (n === "+") {
    const i = t.many++;
    if (a) {
      const o = t.or++;
      return (c) => t.parser.alternatives(o, [
        {
          ALT: /* @__PURE__ */ s(() => t.parser.atLeastOne(i, {
            DEF: /* @__PURE__ */ s(() => r(c), "DEF")
          }), "ALT"),
          GATE: /* @__PURE__ */ s(() => a(c), "GATE")
        },
        {
          ALT: uh(),
          GATE: /* @__PURE__ */ s(() => !a(c), "GATE")
        }
      ]);
    } else
      return (o) => t.parser.atLeastOne(i, {
        DEF: /* @__PURE__ */ s(() => r(o), "DEF")
      });
  } else if (n === "?") {
    const i = t.optional++;
    return (o) => t.parser.optional(i, {
      DEF: /* @__PURE__ */ s(() => r(o), "DEF"),
      GATE: a ? () => a(o) : void 0
    });
  } else
    Zr();
}
s(Xg, "wrap");
function cd(t, e) {
  const r = yI(t, e), n = t.parser.getRule(r);
  if (!n)
    throw new Error(`Rule "${r}" not found."`);
  return n;
}
s(cd, "getRule");
function yI(t, e) {
  if (Bn(e))
    return e.name;
  if (t.ruleNames.has(e))
    return t.ruleNames.get(e);
  {
    let r = e, n = r.$container, a = e.$type;
    for (; !ot(n); )
      (qn(n) || hf(n) || vf(n)) && (a = n.elements.indexOf(r).toString() + ":" + a), r = n, n = n.$container;
    return a = n.name + ":" + a, t.ruleNames.set(e, a), a;
  }
}
s(yI, "getRuleName");
function tf(t, e) {
  const r = t.tokens[e];
  if (!r)
    throw new Error(`Token "${e}" not found."`);
  return r;
}
s(tf, "getToken");
function Jg(t) {
  const e = t.Grammar, r = t.parser.Lexer, n = new sI(t);
  return ld(e, n, r.definition), n.finalize(), n;
}
s(Jg, "createCompletionParser");
function Zg(t) {
  const e = Qg(t);
  return e.finalize(), e;
}
s(Zg, "createLangiumParser");
function Qg(t) {
  const e = t.Grammar, r = t.parser.Lexer, n = new aI(t);
  return ld(e, n, r.definition);
}
s(Qg, "prepareLangiumParser");
var os, ud = (os = class {
  constructor() {
    this.diagnostics = [];
  }
  buildTokens(e, r) {
    const n = ue(Ef(e, !1)), a = this.buildTerminalTokens(n), i = this.buildKeywordTokens(n, a, r);
    return i.push(...a), i;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  flushLexingReport(e) {
    return { diagnostics: this.popDiagnostics() };
  }
  popDiagnostics() {
    const e = [...this.diagnostics];
    return this.diagnostics = [], e;
  }
  buildTerminalTokens(e) {
    return e.filter(xt).filter((r) => !r.fragment).map((r) => this.buildTerminalToken(r)).toArray();
  }
  buildTerminalToken(e) {
    const r = Tc(e), n = this.requiresCustomPattern(r) ? this.regexPatternFunction(r) : r, a = {
      name: e.name,
      PATTERN: n
    };
    return typeof n == "function" && (a.LINE_BREAKS = !0), e.hidden && (a.GROUP = Af(r) ? st.SKIPPED : "hidden"), a;
  }
  requiresCustomPattern(e) {
    return !!(e.flags.includes("u") || e.flags.includes("s"));
  }
  regexPatternFunction(e) {
    const r = new RegExp(e, e.flags + "y");
    return (n, a) => (r.lastIndex = a, r.exec(n));
  }
  buildKeywordTokens(e, r, n) {
    return e.filter(Bn).flatMap((a) => Lr(a).filter(br)).distinct((a) => a.value).toArray().sort((a, i) => i.value.length - a.value.length).map((a) => this.buildKeywordToken(a, r, !!n?.caseInsensitive));
  }
  buildKeywordToken(e, r, n) {
    const a = this.buildKeywordPattern(e, n), i = {
      name: e.value,
      PATTERN: a,
      LONGER_ALT: this.findLongerAlt(e, r)
    };
    return typeof a == "function" && (i.LINE_BREAKS = !0), i;
  }
  buildKeywordPattern(e, r) {
    return r ? new RegExp(jo(e.value), "i") : e.value;
  }
  findLongerAlt(e, r) {
    return r.reduce((n, a) => {
      const i = a?.PATTERN;
      return i?.source && _m("^" + i.source + "$", e.value) && n.push(a), n;
    }, []);
  }
}, s(os, "DefaultTokenBuilder"), os), ls, ey = (ls = class {
  convert(e, r) {
    let n = r.grammarSource;
    if (Kn(n) && (n = Im(n)), Sr(n)) {
      const a = n.rule.ref;
      if (!a)
        throw new Error("This cst node was not parsed by a rule.");
      return this.runConverter(a, e, r);
    }
    return e;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  runConverter(e, r, n) {
    switch (e.name.toUpperCase()) {
      case "INT":
        return nr.convertInt(r);
      case "STRING":
        return nr.convertString(r);
      case "ID":
        return nr.convertID(r);
    }
    switch (Fm(e)?.toLowerCase()) {
      case "number":
        return nr.convertNumber(r);
      case "boolean":
        return nr.convertBoolean(r);
      case "bigint":
        return nr.convertBigint(r);
      case "date":
        return nr.convertDate(r);
      default:
        return r;
    }
  }
}, s(ls, "DefaultValueConverter"), ls), nr;
(function(t) {
  function e(u) {
    let f = "";
    for (let d = 1; d < u.length - 1; d++) {
      const p = u.charAt(d);
      if (p === "\\") {
        const g = u.charAt(++d);
        f += r(g);
      } else
        f += p;
    }
    return f;
  }
  s(e, "convertString"), t.convertString = e;
  function r(u) {
    switch (u) {
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "n":
        return `
`;
      case "r":
        return "\r";
      case "t":
        return "	";
      case "v":
        return "\v";
      case "0":
        return "\0";
      default:
        return u;
    }
  }
  s(r, "convertEscapeCharacter");
  function n(u) {
    return u.charAt(0) === "^" ? u.substring(1) : u;
  }
  s(n, "convertID"), t.convertID = n;
  function a(u) {
    return parseInt(u);
  }
  s(a, "convertInt"), t.convertInt = a;
  function i(u) {
    return BigInt(u);
  }
  s(i, "convertBigint"), t.convertBigint = i;
  function o(u) {
    return new Date(u);
  }
  s(o, "convertDate"), t.convertDate = o;
  function c(u) {
    return Number(u);
  }
  s(c, "convertNumber"), t.convertNumber = c;
  function l(u) {
    return u.toLowerCase() === "true";
  }
  s(l, "convertBoolean"), t.convertBoolean = l;
})(nr || (nr = {}));
var $e = {};
cf($e, Fh(ff()));
function fd() {
  return new Promise((t) => {
    typeof setImmediate > "u" ? setTimeout(t, 0) : setImmediate(t);
  });
}
s(fd, "delayNextTick");
var yu = 0, vI = 10;
function dd() {
  return yu = performance.now(), new $e.CancellationTokenSource();
}
s(dd, "startCancelableOperation");
function ty(t) {
  vI = t;
}
s(ty, "setInterruptionPeriod");
var sr = /* @__PURE__ */ Symbol("OperationCancelled");
function sa(t) {
  return t === sr;
}
s(sa, "isOperationCancelled");
async function Ye(t) {
  if (t === $e.CancellationToken.None)
    return;
  const e = performance.now();
  if (e - yu >= vI && (yu = e, await fd(), yu = performance.now()), t.isCancellationRequested)
    throw sr;
}
s(Ye, "interruptAndCheck");
var cs, Pr = (cs = class {
  constructor() {
    this.promise = new Promise((e, r) => {
      this.resolve = (n) => (e(n), this), this.reject = (n) => (r(n), this);
    });
  }
}, s(cs, "Deferred"), cs), qr, Kv = (qr = class {
  constructor(e, r, n, a) {
    this._uri = e, this._languageId = r, this._version = n, this._content = a, this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(e) {
    if (e) {
      const r = this.offsetAt(e.start), n = this.offsetAt(e.end);
      return this._content.substring(r, n);
    }
    return this._content;
  }
  update(e, r) {
    for (const n of e)
      if (qr.isIncremental(n)) {
        const a = ny(n.range), i = this.offsetAt(a.start), o = this.offsetAt(a.end);
        this._content = this._content.substring(0, i) + n.text + this._content.substring(o, this._content.length);
        const c = Math.max(a.start.line, 0), l = Math.max(a.end.line, 0);
        let u = this._lineOffsets;
        const f = vh(n.text, !1, i);
        if (l - c === f.length)
          for (let p = 0, g = f.length; p < g; p++)
            u[p + c + 1] = f[p];
        else
          f.length < 1e4 ? u.splice(c + 1, l - c, ...f) : this._lineOffsets = u = u.slice(0, c + 1).concat(f, u.slice(l + 1));
        const d = n.text.length - (o - i);
        if (d !== 0)
          for (let p = c + 1 + f.length, g = u.length; p < g; p++)
            u[p] = u[p] + d;
      } else if (qr.isFull(n))
        this._content = n.text, this._lineOffsets = void 0;
      else
        throw new Error("Unknown change event received");
    this._version = r;
  }
  getLineOffsets() {
    return this._lineOffsets === void 0 && (this._lineOffsets = vh(this._content, !0)), this._lineOffsets;
  }
  positionAt(e) {
    e = Math.max(Math.min(e, this._content.length), 0);
    const r = this.getLineOffsets();
    let n = 0, a = r.length;
    if (a === 0)
      return { line: 0, character: e };
    for (; n < a; ) {
      const o = Math.floor((n + a) / 2);
      r[o] > e ? a = o : n = o + 1;
    }
    const i = n - 1;
    return e = this.ensureBeforeEOL(e, r[i]), { line: i, character: e - r[i] };
  }
  offsetAt(e) {
    const r = this.getLineOffsets();
    if (e.line >= r.length)
      return this._content.length;
    if (e.line < 0)
      return 0;
    const n = r[e.line];
    if (e.character <= 0)
      return n;
    const a = e.line + 1 < r.length ? r[e.line + 1] : this._content.length, i = Math.min(n + e.character, a);
    return this.ensureBeforeEOL(i, n);
  }
  ensureBeforeEOL(e, r) {
    for (; e > r && ry(this._content.charCodeAt(e - 1)); )
      e--;
    return e;
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
  static isIncremental(e) {
    const r = e;
    return r != null && typeof r.text == "string" && r.range !== void 0 && (r.rangeLength === void 0 || typeof r.rangeLength == "number");
  }
  static isFull(e) {
    const r = e;
    return r != null && typeof r.text == "string" && r.range === void 0 && r.rangeLength === void 0;
  }
}, s(qr, "FullTextDocument"), qr), rf;
(function(t) {
  function e(a, i, o, c) {
    return new Kv(a, i, o, c);
  }
  s(e, "create"), t.create = e;
  function r(a, i, o) {
    if (a instanceof Kv)
      return a.update(i, o), a;
    throw new Error("TextDocument.update: document must be created by TextDocument.create");
  }
  s(r, "update"), t.update = r;
  function n(a, i) {
    const o = a.getText(), c = nf(i.map(TI), (f, d) => {
      const p = f.range.start.line - d.range.start.line;
      return p === 0 ? f.range.start.character - d.range.start.character : p;
    });
    let l = 0;
    const u = [];
    for (const f of c) {
      const d = a.offsetAt(f.range.start);
      if (d < l)
        throw new Error("Overlapping edit");
      d > l && u.push(o.substring(l, d)), f.newText.length && u.push(f.newText), l = a.offsetAt(f.range.end);
    }
    return u.push(o.substr(l)), u.join("");
  }
  s(n, "applyEdits"), t.applyEdits = n;
})(rf || (rf = {}));
function nf(t, e) {
  if (t.length <= 1)
    return t;
  const r = t.length / 2 | 0, n = t.slice(0, r), a = t.slice(r);
  nf(n, e), nf(a, e);
  let i = 0, o = 0, c = 0;
  for (; i < n.length && o < a.length; )
    e(n[i], a[o]) <= 0 ? t[c++] = n[i++] : t[c++] = a[o++];
  for (; i < n.length; )
    t[c++] = n[i++];
  for (; o < a.length; )
    t[c++] = a[o++];
  return t;
}
s(nf, "mergeSort");
function vh(t, e, r = 0) {
  const n = e ? [r] : [];
  for (let a = 0; a < t.length; a++) {
    const i = t.charCodeAt(a);
    ry(i) && (i === 13 && a + 1 < t.length && t.charCodeAt(a + 1) === 10 && a++, n.push(r + a + 1));
  }
  return n;
}
s(vh, "computeLineOffsets");
function ry(t) {
  return t === 13 || t === 10;
}
s(ry, "isEOL");
function ny(t) {
  const e = t.start, r = t.end;
  return e.line > r.line || e.line === r.line && e.character > r.character ? { start: r, end: e } : t;
}
s(ny, "getWellformedRange");
function TI(t) {
  const e = ny(t.range);
  return e !== t.range ? { newText: t.newText, range: e } : t;
}
s(TI, "getWellformedEdit");
var RI;
(() => {
  var t = { 975: (P) => {
    function b($) {
      if (typeof $ != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify($));
    }
    s(b, "e");
    function R($, A) {
      for (var S, O = "", M = 0, L = -1, j = 0, F = 0; F <= $.length; ++F) {
        if (F < $.length) S = $.charCodeAt(F);
        else {
          if (S === 47) break;
          S = 47;
        }
        if (S === 47) {
          if (!(L === F - 1 || j === 1)) if (L !== F - 1 && j === 2) {
            if (O.length < 2 || M !== 2 || O.charCodeAt(O.length - 1) !== 46 || O.charCodeAt(O.length - 2) !== 46) {
              if (O.length > 2) {
                var te = O.lastIndexOf("/");
                if (te !== O.length - 1) {
                  te === -1 ? (O = "", M = 0) : M = (O = O.slice(0, te)).length - 1 - O.lastIndexOf("/"), L = F, j = 0;
                  continue;
                }
              } else if (O.length === 2 || O.length === 1) {
                O = "", M = 0, L = F, j = 0;
                continue;
              }
            }
            A && (O.length > 0 ? O += "/.." : O = "..", M = 2);
          } else O.length > 0 ? O += "/" + $.slice(L + 1, F) : O = $.slice(L + 1, F), M = F - L - 1;
          L = F, j = 0;
        } else S === 46 && j !== -1 ? ++j : j = -1;
      }
      return O;
    }
    s(R, "r");
    var I = { resolve: /* @__PURE__ */ s(function() {
      for (var $, A = "", S = !1, O = arguments.length - 1; O >= -1 && !S; O--) {
        var M;
        O >= 0 ? M = arguments[O] : ($ === void 0 && ($ = process.cwd()), M = $), b(M), M.length !== 0 && (A = M + "/" + A, S = M.charCodeAt(0) === 47);
      }
      return A = R(A, !S), S ? A.length > 0 ? "/" + A : "/" : A.length > 0 ? A : ".";
    }, "resolve"), normalize: /* @__PURE__ */ s(function($) {
      if (b($), $.length === 0) return ".";
      var A = $.charCodeAt(0) === 47, S = $.charCodeAt($.length - 1) === 47;
      return ($ = R($, !A)).length !== 0 || A || ($ = "."), $.length > 0 && S && ($ += "/"), A ? "/" + $ : $;
    }, "normalize"), isAbsolute: /* @__PURE__ */ s(function($) {
      return b($), $.length > 0 && $.charCodeAt(0) === 47;
    }, "isAbsolute"), join: /* @__PURE__ */ s(function() {
      if (arguments.length === 0) return ".";
      for (var $, A = 0; A < arguments.length; ++A) {
        var S = arguments[A];
        b(S), S.length > 0 && ($ === void 0 ? $ = S : $ += "/" + S);
      }
      return $ === void 0 ? "." : I.normalize($);
    }, "join"), relative: /* @__PURE__ */ s(function($, A) {
      if (b($), b(A), $ === A || ($ = I.resolve($)) === (A = I.resolve(A))) return "";
      for (var S = 1; S < $.length && $.charCodeAt(S) === 47; ++S) ;
      for (var O = $.length, M = O - S, L = 1; L < A.length && A.charCodeAt(L) === 47; ++L) ;
      for (var j = A.length - L, F = M < j ? M : j, te = -1, U = 0; U <= F; ++U) {
        if (U === F) {
          if (j > F) {
            if (A.charCodeAt(L + U) === 47) return A.slice(L + U + 1);
            if (U === 0) return A.slice(L + U);
          } else M > F && ($.charCodeAt(S + U) === 47 ? te = U : U === 0 && (te = 0));
          break;
        }
        var Q = $.charCodeAt(S + U);
        if (Q !== A.charCodeAt(L + U)) break;
        Q === 47 && (te = U);
      }
      var fe = "";
      for (U = S + te + 1; U <= O; ++U) U !== O && $.charCodeAt(U) !== 47 || (fe.length === 0 ? fe += ".." : fe += "/..");
      return fe.length > 0 ? fe + A.slice(L + te) : (L += te, A.charCodeAt(L) === 47 && ++L, A.slice(L));
    }, "relative"), _makeLong: /* @__PURE__ */ s(function($) {
      return $;
    }, "_makeLong"), dirname: /* @__PURE__ */ s(function($) {
      if (b($), $.length === 0) return ".";
      for (var A = $.charCodeAt(0), S = A === 47, O = -1, M = !0, L = $.length - 1; L >= 1; --L) if ((A = $.charCodeAt(L)) === 47) {
        if (!M) {
          O = L;
          break;
        }
      } else M = !1;
      return O === -1 ? S ? "/" : "." : S && O === 1 ? "//" : $.slice(0, O);
    }, "dirname"), basename: /* @__PURE__ */ s(function($, A) {
      if (A !== void 0 && typeof A != "string") throw new TypeError('"ext" argument must be a string');
      b($);
      var S, O = 0, M = -1, L = !0;
      if (A !== void 0 && A.length > 0 && A.length <= $.length) {
        if (A.length === $.length && A === $) return "";
        var j = A.length - 1, F = -1;
        for (S = $.length - 1; S >= 0; --S) {
          var te = $.charCodeAt(S);
          if (te === 47) {
            if (!L) {
              O = S + 1;
              break;
            }
          } else F === -1 && (L = !1, F = S + 1), j >= 0 && (te === A.charCodeAt(j) ? --j == -1 && (M = S) : (j = -1, M = F));
        }
        return O === M ? M = F : M === -1 && (M = $.length), $.slice(O, M);
      }
      for (S = $.length - 1; S >= 0; --S) if ($.charCodeAt(S) === 47) {
        if (!L) {
          O = S + 1;
          break;
        }
      } else M === -1 && (L = !1, M = S + 1);
      return M === -1 ? "" : $.slice(O, M);
    }, "basename"), extname: /* @__PURE__ */ s(function($) {
      b($);
      for (var A = -1, S = 0, O = -1, M = !0, L = 0, j = $.length - 1; j >= 0; --j) {
        var F = $.charCodeAt(j);
        if (F !== 47) O === -1 && (M = !1, O = j + 1), F === 46 ? A === -1 ? A = j : L !== 1 && (L = 1) : A !== -1 && (L = -1);
        else if (!M) {
          S = j + 1;
          break;
        }
      }
      return A === -1 || O === -1 || L === 0 || L === 1 && A === O - 1 && A === S + 1 ? "" : $.slice(A, O);
    }, "extname"), format: /* @__PURE__ */ s(function($) {
      if ($ === null || typeof $ != "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof $);
      return (function(A, S) {
        var O = S.dir || S.root, M = S.base || (S.name || "") + (S.ext || "");
        return O ? O === S.root ? O + M : O + "/" + M : M;
      })(0, $);
    }, "format"), parse: /* @__PURE__ */ s(function($) {
      b($);
      var A = { root: "", dir: "", base: "", ext: "", name: "" };
      if ($.length === 0) return A;
      var S, O = $.charCodeAt(0), M = O === 47;
      M ? (A.root = "/", S = 1) : S = 0;
      for (var L = -1, j = 0, F = -1, te = !0, U = $.length - 1, Q = 0; U >= S; --U) if ((O = $.charCodeAt(U)) !== 47) F === -1 && (te = !1, F = U + 1), O === 46 ? L === -1 ? L = U : Q !== 1 && (Q = 1) : L !== -1 && (Q = -1);
      else if (!te) {
        j = U + 1;
        break;
      }
      return L === -1 || F === -1 || Q === 0 || Q === 1 && L === F - 1 && L === j + 1 ? F !== -1 && (A.base = A.name = j === 0 && M ? $.slice(1, F) : $.slice(j, F)) : (j === 0 && M ? (A.name = $.slice(1, L), A.base = $.slice(1, F)) : (A.name = $.slice(j, L), A.base = $.slice(j, F)), A.ext = $.slice(L, F)), j > 0 ? A.dir = $.slice(0, j - 1) : M && (A.dir = "/"), A;
    }, "parse"), sep: "/", delimiter: ":", win32: null, posix: null };
    I.posix = I, P.exports = I;
  } }, e = {};
  function r(P) {
    var b = e[P];
    if (b !== void 0) return b.exports;
    var R = e[P] = { exports: {} };
    return t[P](R, R.exports, r), R.exports;
  }
  s(r, "r"), r.d = (P, b) => {
    for (var R in b) r.o(b, R) && !r.o(P, R) && Object.defineProperty(P, R, { enumerable: !0, get: b[R] });
  }, r.o = (P, b) => Object.prototype.hasOwnProperty.call(P, b), r.r = (P) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(P, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(P, "__esModule", { value: !0 });
  };
  var n = {};
  let a;
  r.r(n), r.d(n, { URI: /* @__PURE__ */ s(() => p, "URI"), Utils: /* @__PURE__ */ s(() => we, "Utils") }), typeof process == "object" ? a = process.platform === "win32" : typeof navigator == "object" && (a = navigator.userAgent.indexOf("Windows") >= 0);
  const i = /^\w[\w\d+.-]*$/, o = /^\//, c = /^\/\//;
  function l(P, b) {
    if (!P.scheme && b) throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${P.authority}", path: "${P.path}", query: "${P.query}", fragment: "${P.fragment}"}`);
    if (P.scheme && !i.test(P.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
    if (P.path) {
      if (P.authority) {
        if (!o.test(P.path)) throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
      } else if (c.test(P.path)) throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
    }
  }
  s(l, "a");
  const u = "", f = "/", d = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, oe = class oe {
    static isUri(b) {
      return b instanceof oe || !!b && typeof b.authority == "string" && typeof b.fragment == "string" && typeof b.path == "string" && typeof b.query == "string" && typeof b.scheme == "string" && typeof b.fsPath == "string" && typeof b.with == "function" && typeof b.toString == "function";
    }
    scheme;
    authority;
    path;
    query;
    fragment;
    constructor(b, R, I, $, A, S = !1) {
      typeof b == "object" ? (this.scheme = b.scheme || u, this.authority = b.authority || u, this.path = b.path || u, this.query = b.query || u, this.fragment = b.fragment || u) : (this.scheme = /* @__PURE__ */ (function(O, M) {
        return O || M ? O : "file";
      })(b, S), this.authority = R || u, this.path = (function(O, M) {
        switch (O) {
          case "https":
          case "http":
          case "file":
            M ? M[0] !== f && (M = f + M) : M = f;
        }
        return M;
      })(this.scheme, I || u), this.query = $ || u, this.fragment = A || u, l(this, S));
    }
    get fsPath() {
      return w(this, !1);
    }
    with(b) {
      if (!b) return this;
      let { scheme: R, authority: I, path: $, query: A, fragment: S } = b;
      return R === void 0 ? R = this.scheme : R === null && (R = u), I === void 0 ? I = this.authority : I === null && (I = u), $ === void 0 ? $ = this.path : $ === null && ($ = u), A === void 0 ? A = this.query : A === null && (A = u), S === void 0 ? S = this.fragment : S === null && (S = u), R === this.scheme && I === this.authority && $ === this.path && A === this.query && S === this.fragment ? this : new m(R, I, $, A, S);
    }
    static parse(b, R = !1) {
      const I = d.exec(b);
      return I ? new m(I[2] || u, re(I[4] || u), re(I[5] || u), re(I[7] || u), re(I[9] || u), R) : new m(u, u, u, u, u);
    }
    static file(b) {
      let R = u;
      if (a && (b = b.replace(/\\/g, f)), b[0] === f && b[1] === f) {
        const I = b.indexOf(f, 2);
        I === -1 ? (R = b.substring(2), b = f) : (R = b.substring(2, I), b = b.substring(I) || f);
      }
      return new m("file", R, b, u, u);
    }
    static from(b) {
      const R = new m(b.scheme, b.authority, b.path, b.query, b.fragment);
      return l(R, !0), R;
    }
    toString(b = !1) {
      return C(this, b);
    }
    toJSON() {
      return this;
    }
    static revive(b) {
      if (b) {
        if (b instanceof oe) return b;
        {
          const R = new m(b);
          return R._formatted = b.external, R._fsPath = b._sep === g ? b.fsPath : null, R;
        }
      }
      return b;
    }
  };
  s(oe, "l");
  let p = oe;
  const g = a ? 1 : void 0, tt = class tt extends p {
    _formatted = null;
    _fsPath = null;
    get fsPath() {
      return this._fsPath || (this._fsPath = w(this, !1)), this._fsPath;
    }
    toString(b = !1) {
      return b ? C(this, !0) : (this._formatted || (this._formatted = C(this, !1)), this._formatted);
    }
    toJSON() {
      const b = { $mid: 1 };
      return this._fsPath && (b.fsPath = this._fsPath, b._sep = g), this._formatted && (b.external = this._formatted), this.path && (b.path = this.path), this.scheme && (b.scheme = this.scheme), this.authority && (b.authority = this.authority), this.query && (b.query = this.query), this.fragment && (b.fragment = this.fragment), b;
    }
  };
  s(tt, "d");
  let m = tt;
  const T = { 58: "%3A", 47: "%2F", 63: "%3F", 35: "%23", 91: "%5B", 93: "%5D", 64: "%40", 33: "%21", 36: "%24", 38: "%26", 39: "%27", 40: "%28", 41: "%29", 42: "%2A", 43: "%2B", 44: "%2C", 59: "%3B", 61: "%3D", 32: "%20" };
  function _(P, b, R) {
    let I, $ = -1;
    for (let A = 0; A < P.length; A++) {
      const S = P.charCodeAt(A);
      if (S >= 97 && S <= 122 || S >= 65 && S <= 90 || S >= 48 && S <= 57 || S === 45 || S === 46 || S === 95 || S === 126 || b && S === 47 || R && S === 91 || R && S === 93 || R && S === 58) $ !== -1 && (I += encodeURIComponent(P.substring($, A)), $ = -1), I !== void 0 && (I += P.charAt(A));
      else {
        I === void 0 && (I = P.substr(0, A));
        const O = T[S];
        O !== void 0 ? ($ !== -1 && (I += encodeURIComponent(P.substring($, A)), $ = -1), I += O) : $ === -1 && ($ = A);
      }
    }
    return $ !== -1 && (I += encodeURIComponent(P.substring($))), I !== void 0 ? I : P;
  }
  s(_, "m");
  function v(P) {
    let b;
    for (let R = 0; R < P.length; R++) {
      const I = P.charCodeAt(R);
      I === 35 || I === 63 ? (b === void 0 && (b = P.substr(0, R)), b += T[I]) : b !== void 0 && (b += P[R]);
    }
    return b !== void 0 ? b : P;
  }
  s(v, "y");
  function w(P, b) {
    let R;
    return R = P.authority && P.path.length > 1 && P.scheme === "file" ? `//${P.authority}${P.path}` : P.path.charCodeAt(0) === 47 && (P.path.charCodeAt(1) >= 65 && P.path.charCodeAt(1) <= 90 || P.path.charCodeAt(1) >= 97 && P.path.charCodeAt(1) <= 122) && P.path.charCodeAt(2) === 58 ? b ? P.path.substr(1) : P.path[1].toLowerCase() + P.path.substr(2) : P.path, a && (R = R.replace(/\//g, "\\")), R;
  }
  s(w, "v");
  function C(P, b) {
    const R = b ? v : _;
    let I = "", { scheme: $, authority: A, path: S, query: O, fragment: M } = P;
    if ($ && (I += $, I += ":"), (A || $ === "file") && (I += f, I += f), A) {
      let L = A.indexOf("@");
      if (L !== -1) {
        const j = A.substr(0, L);
        A = A.substr(L + 1), L = j.lastIndexOf(":"), L === -1 ? I += R(j, !1, !1) : (I += R(j.substr(0, L), !1, !1), I += ":", I += R(j.substr(L + 1), !1, !0)), I += "@";
      }
      A = A.toLowerCase(), L = A.lastIndexOf(":"), L === -1 ? I += R(A, !1, !0) : (I += R(A.substr(0, L), !1, !0), I += A.substr(L));
    }
    if (S) {
      if (S.length >= 3 && S.charCodeAt(0) === 47 && S.charCodeAt(2) === 58) {
        const L = S.charCodeAt(1);
        L >= 65 && L <= 90 && (S = `/${String.fromCharCode(L + 32)}:${S.substr(3)}`);
      } else if (S.length >= 2 && S.charCodeAt(1) === 58) {
        const L = S.charCodeAt(0);
        L >= 65 && L <= 90 && (S = `${String.fromCharCode(L + 32)}:${S.substr(2)}`);
      }
      I += R(S, !0, !1);
    }
    return O && (I += "?", I += R(O, !1, !1)), M && (I += "#", I += b ? M : _(M, !1, !1)), I;
  }
  s(C, "b");
  function k(P) {
    try {
      return decodeURIComponent(P);
    } catch {
      return P.length > 3 ? P.substr(0, 3) + k(P.substr(3)) : P;
    }
  }
  s(k, "C");
  const B = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
  function re(P) {
    return P.match(B) ? P.replace(B, ((b) => k(b))) : P;
  }
  s(re, "w");
  var X = r(975);
  const ge = X.posix || X, Ee = "/";
  var we;
  (function(P) {
    P.joinPath = function(b, ...R) {
      return b.with({ path: ge.join(b.path, ...R) });
    }, P.resolvePath = function(b, ...R) {
      let I = b.path, $ = !1;
      I[0] !== Ee && (I = Ee + I, $ = !0);
      let A = ge.resolve(I, ...R);
      return $ && A[0] === Ee && !b.authority && (A = A.substring(1)), b.with({ path: A });
    }, P.dirname = function(b) {
      if (b.path.length === 0 || b.path === Ee) return b;
      let R = ge.dirname(b.path);
      return R.length === 1 && R.charCodeAt(0) === 46 && (R = ""), b.with({ path: R });
    }, P.basename = function(b) {
      return ge.basename(b.path);
    }, P.extname = function(b) {
      return ge.extname(b.path);
    };
  })(we || (we = {})), RI = n;
})();
var { URI: Rt, Utils: ml } = RI, it;
(function(t) {
  t.basename = ml.basename, t.dirname = ml.dirname, t.extname = ml.extname, t.joinPath = ml.joinPath, t.resolvePath = ml.resolvePath;
  const e = typeof process == "object" && process?.platform === "win32";
  function r(o, c) {
    return o?.toString() === c?.toString();
  }
  s(r, "equals"), t.equals = r;
  function n(o, c) {
    const l = typeof o == "string" ? Rt.parse(o).path : o.path, u = typeof c == "string" ? Rt.parse(c).path : c.path, f = l.split("/").filter((T) => T.length > 0), d = u.split("/").filter((T) => T.length > 0);
    if (e) {
      const T = /^[A-Z]:$/;
      if (f[0] && T.test(f[0]) && (f[0] = f[0].toLowerCase()), d[0] && T.test(d[0]) && (d[0] = d[0].toLowerCase()), f[0] !== d[0])
        return u.substring(1);
    }
    let p = 0;
    for (; p < f.length && f[p] === d[p]; p++)
      ;
    const g = "../".repeat(f.length - p), m = d.slice(p).join("/");
    return g + m;
  }
  s(n, "relative"), t.relative = n;
  function a(o) {
    return Rt.parse(o.toString()).toString();
  }
  s(a, "normalize"), t.normalize = a;
  function i(o, c) {
    let l = typeof o == "string" ? o : o.path, u = typeof c == "string" ? c : c.path;
    return u.charAt(u.length - 1) === "/" && (u = u.slice(0, -1)), l.charAt(l.length - 1) === "/" && (l = l.slice(0, -1)), u === l ? !0 : u.length < l.length || u.charAt(l.length) !== "/" ? !1 : u.startsWith(l);
  }
  s(i, "contains"), t.contains = i;
})(it || (it = {}));
var us, ay = (us = class {
  constructor() {
    this.root = { name: "", children: /* @__PURE__ */ new Map() };
  }
  normalizeUri(e) {
    return it.normalize(e);
  }
  clear() {
    this.root.children.clear();
  }
  insert(e, r) {
    const n = this.getNode(this.normalizeUri(e), !0);
    n.element = r;
  }
  delete(e) {
    const r = this.getNode(this.normalizeUri(e), !1);
    r?.parent && r.parent.children.delete(r.name);
  }
  has(e) {
    return this.getNode(this.normalizeUri(e), !1)?.element !== void 0;
  }
  hasNode(e) {
    return this.getNode(this.normalizeUri(e), !1) !== void 0;
  }
  find(e) {
    return this.getNode(this.normalizeUri(e), !1)?.element;
  }
  findNode(e) {
    const r = this.normalizeUri(e), n = this.getNode(r, !1);
    if (n)
      return {
        name: n.name,
        uri: it.joinPath(Rt.parse(r), n.name).toString(),
        element: n.element
      };
  }
  findChildren(e) {
    const r = this.normalizeUri(e), n = this.getNode(r, !1);
    return n ? Array.from(n.children.values()).map((a) => ({
      name: a.name,
      uri: it.joinPath(Rt.parse(r), a.name).toString(),
      element: a.element
    })) : [];
  }
  all() {
    return this.collectValues(this.root);
  }
  findAll(e) {
    const r = this.getNode(it.normalize(e), !1);
    return r ? this.collectValues(r) : [];
  }
  getNode(e, r) {
    const n = e.split("/");
    e.charAt(e.length - 1) === "/" && n.pop();
    let a = this.root;
    for (const i of n) {
      let o = a.children.get(i);
      if (!o)
        if (r)
          o = {
            name: i,
            children: /* @__PURE__ */ new Map(),
            parent: a
          }, a.children.set(i, o);
        else
          return;
      a = o;
    }
    return a;
  }
  collectValues(e) {
    const r = [];
    e.element && r.push(e.element);
    for (const n of e.children.values())
      r.push(...this.collectValues(n));
    return r;
  }
}, s(us, "UriTrie"), us), Z;
(function(t) {
  t[t.Changed = 0] = "Changed", t[t.Parsed = 1] = "Parsed", t[t.IndexedContent = 2] = "IndexedContent", t[t.ComputedScopes = 3] = "ComputedScopes", t[t.Linked = 4] = "Linked", t[t.IndexedReferences = 5] = "IndexedReferences", t[t.Validated = 6] = "Validated";
})(Z || (Z = {}));
var fs, $I = (fs = class {
  constructor(e) {
    this.serviceRegistry = e.ServiceRegistry, this.textDocuments = e.workspace.TextDocuments, this.fileSystemProvider = e.workspace.FileSystemProvider;
  }
  async fromUri(e, r = $e.CancellationToken.None) {
    const n = await this.fileSystemProvider.readFile(e);
    return this.createAsync(e, n, r);
  }
  fromTextDocument(e, r, n) {
    return r = r ?? Rt.parse(e.uri), $e.CancellationToken.is(n) ? this.createAsync(r, e, n) : this.create(r, e, n);
  }
  fromString(e, r, n) {
    return $e.CancellationToken.is(n) ? this.createAsync(r, e, n) : this.create(r, e, n);
  }
  fromModel(e, r) {
    return this.create(r, { $model: e });
  }
  create(e, r, n) {
    if (typeof r == "string") {
      const a = this.parse(e, r, n);
      return this.createLangiumDocument(a, e, void 0, r);
    } else if ("$model" in r) {
      const a = { value: r.$model, parserErrors: [], lexerErrors: [] };
      return this.createLangiumDocument(a, e);
    } else {
      const a = this.parse(e, r.getText(), n);
      return this.createLangiumDocument(a, e, r);
    }
  }
  async createAsync(e, r, n) {
    if (typeof r == "string") {
      const a = await this.parseAsync(e, r, n);
      return this.createLangiumDocument(a, e, void 0, r);
    } else {
      const a = await this.parseAsync(e, r.getText(), n);
      return this.createLangiumDocument(a, e, r);
    }
  }
  /**
   * Create a LangiumDocument from a given parse result.
   *
   * A TextDocument is created on demand if it is not provided as argument here. Usually this
   * should not be necessary because the main purpose of the TextDocument is to convert between
   * text ranges and offsets, which is done solely in LSP request handling.
   *
   * With the introduction of {@link update} below this method is supposed to be mainly called
   * during workspace initialization and on addition/recognition of new files, while changes in
   * existing documents are processed via {@link update}.
   */
  createLangiumDocument(e, r, n, a) {
    let i;
    if (n)
      i = {
        parseResult: e,
        uri: r,
        state: Z.Parsed,
        references: [],
        textDocument: n
      };
    else {
      const o = this.createTextDocumentGetter(r, a);
      i = {
        parseResult: e,
        uri: r,
        state: Z.Parsed,
        references: [],
        get textDocument() {
          return o();
        }
      };
    }
    return e.value.$document = i, i;
  }
  async update(e, r) {
    const n = e.parseResult.value.$cstNode?.root.fullText, a = this.textDocuments?.get(e.uri.toString()), i = a ? a.getText() : await this.fileSystemProvider.readFile(e.uri);
    if (a)
      Object.defineProperty(e, "textDocument", {
        value: a
      });
    else {
      const o = this.createTextDocumentGetter(e.uri, i);
      Object.defineProperty(e, "textDocument", {
        get: o
      });
    }
    return n !== i && (e.parseResult = await this.parseAsync(e.uri, i, r), e.parseResult.value.$document = e), e.state = Z.Parsed, e;
  }
  parse(e, r, n) {
    return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r, n);
  }
  parseAsync(e, r, n) {
    return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(r, n);
  }
  createTextDocumentGetter(e, r) {
    const n = this.serviceRegistry;
    let a;
    return () => a ?? (a = rf.create(e.toString(), n.getServices(e).LanguageMetaData.languageId, 0, r ?? ""));
  }
}, s(fs, "DefaultLangiumDocumentFactory"), fs), ds, AI = (ds = class {
  constructor(e) {
    this.documentTrie = new ay(), this.services = e, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.documentBuilder = () => e.workspace.DocumentBuilder;
  }
  get all() {
    return ue(this.documentTrie.all());
  }
  addDocument(e) {
    const r = e.uri.toString();
    if (this.documentTrie.has(r))
      throw new Error(`A document with the URI '${r}' is already present.`);
    this.documentTrie.insert(r, e);
  }
  getDocument(e) {
    const r = e.toString();
    return this.documentTrie.find(r);
  }
  getDocuments(e) {
    const r = e.toString();
    return this.documentTrie.findAll(r);
  }
  async getOrCreateDocument(e, r) {
    let n = this.getDocument(e);
    return n || (n = await this.langiumDocumentFactory.fromUri(e, r), this.addDocument(n), n);
  }
  createDocument(e, r, n) {
    if (n)
      return this.langiumDocumentFactory.fromString(r, e, n).then((a) => (this.addDocument(a), a));
    {
      const a = this.langiumDocumentFactory.fromString(r, e);
      return this.addDocument(a), a;
    }
  }
  hasDocument(e) {
    return this.documentTrie.has(e.toString());
  }
  /**
   * @deprecated Since 4.2 use `DocumentBuilder.resetToState(DocumentState.Changed)` instead
   * TODO remove this for the next major release
   */
  invalidateDocument(e) {
    const r = e.toString(), n = this.documentTrie.find(r);
    return n && this.documentBuilder().resetToState(n, Z.Changed), n;
  }
  deleteDocument(e) {
    const r = e.toString(), n = this.documentTrie.find(r);
    return n && (n.state = Z.Changed, this.documentTrie.delete(r)), n;
  }
  deleteDocuments(e) {
    const r = e.toString(), n = this.documentTrie.findAll(r);
    for (const a of n)
      a.state = Z.Changed;
    return this.documentTrie.delete(r), n;
  }
}, s(ds, "DefaultLangiumDocuments"), ds), pn = /* @__PURE__ */ Symbol("RefResolving"), ps, EI = (ps = class {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.langiumDocuments = () => e.shared.workspace.LangiumDocuments, this.scopeProvider = e.references.ScopeProvider, this.astNodeLocator = e.workspace.AstNodeLocator, this.profiler = e.shared.profilers.LangiumProfiler, this.languageId = e.LanguageMetaData.languageId;
  }
  async link(e, r = $e.CancellationToken.None) {
    if (this.profiler?.isActive("linking")) {
      const n = this.profiler.createTask("linking", this.languageId);
      n.start();
      try {
        for (const a of Kt(e.parseResult.value))
          await Ye(r), Io(a).forEach((i) => {
            const o = `${a.$type}:${i.property}`;
            n.startSubTask(o);
            try {
              this.doLink(i, e);
            } finally {
              n.stopSubTask(o);
            }
          });
      } finally {
        n.stop();
      }
    } else
      for (const n of Kt(e.parseResult.value))
        await Ye(r), Io(n).forEach((a) => this.doLink(a, e));
  }
  doLink(e, r) {
    const n = e.reference;
    if ("_ref" in n && n._ref === void 0) {
      n._ref = pn;
      try {
        const a = this.getCandidate(e);
        if (gn(a))
          n._ref = a;
        else {
          n._nodeDescription = a;
          const i = this.loadAstNode(a);
          n._ref = i ?? this.createLinkingError(e, a);
        }
      } catch (a) {
        console.error(`An error occurred while resolving reference to '${n.$refText}':`, a);
        const i = a.message ?? String(a);
        n._ref = {
          info: e,
          message: `An error occurred while resolving reference to '${n.$refText}': ${i}`
        };
      }
      r.references.push(n);
    } else if ("_items" in n && n._items === void 0) {
      n._items = pn;
      try {
        const a = this.getCandidates(e), i = [];
        if (gn(a))
          n._linkingError = a;
        else
          for (const o of a) {
            const c = this.loadAstNode(o);
            c && i.push({ ref: c, $nodeDescription: o });
          }
        n._items = i;
      } catch (a) {
        n._linkingError = {
          info: e,
          message: `An error occurred while resolving reference to '${n.$refText}': ${a}`
        }, n._items = [];
      }
      r.references.push(n);
    }
  }
  unlink(e) {
    for (const r of e.references)
      "_ref" in r ? (r._ref = void 0, delete r._nodeDescription) : "_items" in r && (r._items = void 0, delete r._linkingError);
    e.references = [];
  }
  getCandidate(e) {
    return this.scopeProvider.getScope(e).getElement(e.reference.$refText) ?? this.createLinkingError(e);
  }
  getCandidates(e) {
    const n = this.scopeProvider.getScope(e).getElements(e.reference.$refText).distinct((a) => `${a.documentUri}#${a.path}`).toArray();
    return n.length > 0 ? n : this.createLinkingError(e);
  }
  buildReference(e, r, n, a) {
    const i = this, o = {
      $refNode: n,
      $refText: a,
      _ref: void 0,
      get ref() {
        if (Be(this._ref))
          return this._ref;
        if (zh(this._nodeDescription)) {
          const c = i.loadAstNode(this._nodeDescription);
          this._ref = c ?? i.createLinkingError({ reference: o, container: e, property: r }, this._nodeDescription);
        } else if (this._ref === void 0) {
          this._ref = pn;
          const c = xa(e).$document, l = i.getLinkedNode({ reference: o, container: e, property: r });
          if (l.error && c && c.state < Z.ComputedScopes)
            return this._ref = void 0;
          this._ref = l.node ?? l.error, this._nodeDescription = l.descr, c?.references.push(this);
        } else this._ref === pn && i.throwCyclicReferenceError(e, r, a);
        return Be(this._ref) ? this._ref : void 0;
      },
      get $nodeDescription() {
        return this._nodeDescription;
      },
      get error() {
        return gn(this._ref) ? this._ref : void 0;
      }
    };
    return o;
  }
  buildMultiReference(e, r, n, a) {
    const i = this, o = {
      $refNode: n,
      $refText: a,
      _items: void 0,
      get items() {
        if (Array.isArray(this._items))
          return this._items;
        if (this._items === void 0) {
          this._items = pn;
          const c = xa(e).$document, l = i.getCandidates({
            reference: o,
            container: e,
            property: r
          }), u = [];
          if (gn(l))
            this._linkingError = l;
          else
            for (const f of l) {
              const d = i.loadAstNode(f);
              d && u.push({ ref: d, $nodeDescription: f });
            }
          this._items = u, c?.references.push(this);
        } else this._items === pn && i.throwCyclicReferenceError(e, r, a);
        return Array.isArray(this._items) ? this._items : [];
      },
      get error() {
        if (this._linkingError)
          return this._linkingError;
        if (!(this.items.length > 0))
          return this._linkingError = i.createLinkingError({ reference: o, container: e, property: r });
      }
    };
    return o;
  }
  throwCyclicReferenceError(e, r, n) {
    throw new Error(`Cyclic reference resolution detected: ${this.astNodeLocator.getAstNodePath(e)}/${r} (symbol '${n}')`);
  }
  getLinkedNode(e) {
    try {
      const r = this.getCandidate(e);
      if (gn(r))
        return { error: r };
      const n = this.loadAstNode(r);
      return n ? { node: n, descr: r } : {
        descr: r,
        error: this.createLinkingError(e, r)
      };
    } catch (r) {
      console.error(`An error occurred while resolving reference to '${e.reference.$refText}':`, r);
      const n = r.message ?? String(r);
      return {
        error: {
          info: e,
          message: `An error occurred while resolving reference to '${e.reference.$refText}': ${n}`
        }
      };
    }
  }
  loadAstNode(e) {
    if (e.node)
      return e.node;
    const r = this.langiumDocuments().getDocument(e.documentUri);
    if (r)
      return this.astNodeLocator.getAstNode(r.parseResult.value, e.path);
  }
  createLinkingError(e, r) {
    const n = xa(e.container).$document;
    n && n.state < Z.ComputedScopes && console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);
    const a = this.reflection.getReferenceType(e);
    return {
      info: e,
      message: `Could not resolve reference to ${a} named '${e.reference.$refText}'.`,
      targetDescription: r
    };
  }
}, s(ps, "DefaultLinker"), ps);
function iy(t) {
  return typeof t.name == "string";
}
s(iy, "isNamed");
var hs, _I = (hs = class {
  getName(e) {
    if (iy(e))
      return e.name;
  }
  getNameNode(e) {
    return _f(e.$cstNode, "name");
  }
}, s(hs, "DefaultNameProvider"), hs), ms, CI = (ms = class {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.index = e.shared.workspace.IndexManager, this.nodeLocator = e.workspace.AstNodeLocator, this.documents = e.shared.workspace.LangiumDocuments, this.hasMultiReference = Kt(e.Grammar).some((r) => Kn(r) && r.isMulti);
  }
  findDeclarations(e) {
    if (e) {
      const r = Om(e), n = e.astNode;
      if (r && n) {
        const a = n[r.feature];
        if (at(a) || or(a))
          return $u(a);
        if (Array.isArray(a)) {
          for (const i of a)
            if ((at(i) || or(i)) && i.$refNode && i.$refNode.offset <= e.offset && i.$refNode.end >= e.end)
              return $u(i);
        }
      }
      if (n) {
        const a = this.nameProvider.getNameNode(n);
        if (a && (a === e || dm(e, a)))
          return this.getSelfNodes(n);
      }
    }
    return [];
  }
  /**
   * Returns all self-references for the specified node.
   * Since the node can be part of a multi-reference, this method returns all nodes that are part of the same multi-reference.
   */
  getSelfNodes(e) {
    if (this.hasMultiReference) {
      const r = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e)), n = this.getNodeFromReferenceDescription(r.head());
      if (n) {
        for (const a of Io(n))
          if (or(a.reference) && a.reference.items.some((i) => i.ref === e))
            return a.reference.items.map((i) => i.ref);
      }
      return [e];
    } else
      return [e];
  }
  getNodeFromReferenceDescription(e) {
    if (!e)
      return;
    const r = this.documents.getDocument(e.sourceUri);
    if (r)
      return this.nodeLocator.getAstNode(r.parseResult.value, e.sourcePath);
  }
  findDeclarationNodes(e) {
    const r = this.findDeclarations(e), n = [];
    for (const a of r) {
      const i = this.nameProvider.getNameNode(a) ?? a.$cstNode;
      i && n.push(i);
    }
    return n;
  }
  findReferences(e, r) {
    const n = [];
    r.includeDeclaration && n.push(...this.getSelfReferences(e));
    let a = this.index.findAllReferences(e, this.nodeLocator.getAstNodePath(e));
    return r.documentUri && (a = a.filter((i) => it.equals(i.sourceUri, r.documentUri))), n.push(...a), ue(n);
  }
  getSelfReferences(e) {
    const r = this.getSelfNodes(e), n = [];
    for (const a of r) {
      const i = this.nameProvider.getNameNode(a);
      if (i) {
        const o = Bt(a), c = this.nodeLocator.getAstNodePath(a);
        n.push({
          sourceUri: o.uri,
          sourcePath: c,
          targetUri: o.uri,
          targetPath: c,
          segment: Po(i),
          local: !0
        });
      }
    }
    return n;
  }
}, s(ms, "DefaultReferences"), ms), gs, Or = (gs = class {
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), e)
      for (const [r, n] of e)
        this.add(r, n);
  }
  /**
   * The total number of values in the multimap.
   */
  get size() {
    return Xl.sum(ue(this.map.values()).map((e) => e.length));
  }
  /**
   * Clear all entries in the multimap.
   */
  clear() {
    this.map.clear();
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method deletes the specific key / value pair from the multimap.
   *  * Without a value, all values associated with the given key are deleted.
   *
   * @returns `true` if a value existed and has been removed, or `false` if the specified
   *     key / value does not exist.
   */
  delete(e, r) {
    if (r === void 0)
      return this.map.delete(e);
    {
      const n = this.map.get(e);
      if (n) {
        const a = n.indexOf(r);
        if (a >= 0)
          return n.length === 1 ? this.map.delete(e) : n.splice(a, 1), !0;
      }
      return !1;
    }
  }
  /**
   * Returns an array of all values associated with the given key. If no value exists,
   * an empty array is returned.
   *
   * _Note:_ The returned array is assumed not to be modified. Use the `set` method to add a
   * value and `delete` to remove a value from the multimap.
   */
  get(e) {
    return this.map.get(e) ?? [];
  }
  /**
   * Returns a stream of all values associated with the given key. If no value exists,
   * {@link EMPTY_STREAM} is returned.
   */
  getStream(e) {
    const r = this.map.get(e);
    return r ? ue(r) : bo;
  }
  /**
   * Operates differently depending on whether a `value` is given:
   *  * With a value, this method returns `true` if the specific key / value pair is present in the multimap.
   *  * Without a value, this method returns `true` if the given key is present in the multimap.
   */
  has(e, r) {
    if (r === void 0)
      return this.map.has(e);
    {
      const n = this.map.get(e);
      return n ? n.indexOf(r) >= 0 : !1;
    }
  }
  /**
   * Add the given key / value pair to the multimap.
   */
  add(e, r) {
    return this.map.has(e) ? this.map.get(e).push(r) : this.map.set(e, [r]), this;
  }
  /**
   * Add the given set of key / value pairs to the multimap.
   */
  addAll(e, r) {
    return this.map.has(e) ? this.map.get(e).push(...r) : this.map.set(e, Array.from(r)), this;
  }
  /**
   * Invokes the given callback function for every key / value pair in the multimap.
   */
  forEach(e) {
    this.map.forEach((r, n) => r.forEach((a) => e(a, n, this)));
  }
  /**
   * Returns an iterator of key, value pairs for every entry in the map.
   */
  [Symbol.iterator]() {
    return this.entries().iterator();
  }
  /**
   * Returns a stream of key, value pairs for every entry in the map.
   */
  entries() {
    return ue(this.map.entries()).flatMap(([e, r]) => r.map((n) => [e, n]));
  }
  /**
   * Returns a stream of keys in the map.
   */
  keys() {
    return ue(this.map.keys());
  }
  /**
   * Returns a stream of values in the map.
   */
  values() {
    return ue(this.map.values()).flat();
  }
  /**
   * Returns a stream of key, value set pairs for every key in the map.
   */
  entriesGroupedByKey() {
    return ue(this.map.entries());
  }
}, s(gs, "MultiMap"), gs), ys, af = (ys = class {
  get size() {
    return this.map.size;
  }
  constructor(e) {
    if (this.map = /* @__PURE__ */ new Map(), this.inverse = /* @__PURE__ */ new Map(), e)
      for (const [r, n] of e)
        this.set(r, n);
  }
  clear() {
    this.map.clear(), this.inverse.clear();
  }
  set(e, r) {
    return this.map.set(e, r), this.inverse.set(r, e), this;
  }
  get(e) {
    return this.map.get(e);
  }
  getKey(e) {
    return this.inverse.get(e);
  }
  delete(e) {
    const r = this.map.get(e);
    return r !== void 0 ? (this.map.delete(e), this.inverse.delete(r), !0) : !1;
  }
}, s(ys, "BiMap"), ys), vs, bI = (vs = class {
  constructor(e) {
    this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider;
  }
  async collectExportedSymbols(e, r = $e.CancellationToken.None) {
    return this.collectExportedSymbolsForNode(e.parseResult.value, e, void 0, r);
  }
  /**
   * Creates {@link AstNodeDescription AstNodeDescriptions} for the given {@link AstNode parentNode} and its children.
   * The list of children to be considered is determined by the function parameter {@link children}.
   * By default only the direct children of {@link parentNode} are visited, nested nodes are not exported.
   *
   * @param parentNode AST node to be exported, i.e., of which an {@link AstNodeDescription} shall be added to the returned list.
   * @param document The document containing the AST node to be exported.
   * @param children A function called with {@link parentNode} as single argument and returning an {@link Iterable} supplying the children to be visited, which must be directly or transitively contained in {@link parentNode}.
   * @param cancelToken Indicates when to cancel the current operation.
   * @throws `OperationCancelled` if a user action occurs during execution.
   * @returns A list of {@link AstNodeDescription AstNodeDescriptions} to be published to index.
   */
  async collectExportedSymbolsForNode(e, r, n = mc, a = $e.CancellationToken.None) {
    const i = [];
    this.addExportedSymbol(e, i, r);
    for (const o of n(e))
      await Ye(a), this.addExportedSymbol(o, i, r);
    return i;
  }
  /**
   * Adds a single node to the list of exports if it has a name. Override this method to change how
   * symbols are exported, e.g. by modifying their exported name.
   */
  addExportedSymbol(e, r, n) {
    const a = this.nameProvider.getName(e);
    a && r.push(this.descriptions.createDescription(e, a, n));
  }
  // --- local symbols gathering ---
  async collectLocalSymbols(e, r = $e.CancellationToken.None) {
    const n = e.parseResult.value, a = new Or();
    for (const i of Lr(n))
      await Ye(r), this.addLocalSymbol(i, e, a);
    return a;
  }
  /**
   * Adds a single node to the local symbols of its containing document if it has a name.
   * The default implementation makes the node visible in the subtree of its container if it does have a container.
   * Override this method to change this, e.g. by increasing the visibility to a higher level in the AST.
   */
  addLocalSymbol(e, r, n) {
    const a = e.$container;
    if (a) {
      const i = this.nameProvider.getName(e);
      i && n.add(a, this.descriptions.createDescription(e, i, r));
    }
  }
}, s(vs, "DefaultScopeComputation"), vs), Ts, Th = (Ts = class {
  constructor(e, r, n) {
    this.elements = e, this.outerScope = r, this.caseInsensitive = n?.caseInsensitive ?? !1, this.concatOuterScope = n?.concatOuterScope ?? !0;
  }
  getAllElements() {
    return this.outerScope ? this.elements.concat(this.outerScope.getAllElements()) : this.elements;
  }
  getElement(e) {
    const r = this.caseInsensitive ? e.toLowerCase() : e, n = this.caseInsensitive ? this.elements.find((a) => a.name.toLowerCase() === r) : this.elements.find((a) => a.name === e);
    if (n)
      return n;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
  getElements(e) {
    const r = this.caseInsensitive ? e.toLowerCase() : e, n = this.caseInsensitive ? this.elements.filter((a) => a.name.toLowerCase() === r) : this.elements.filter((a) => a.name === e);
    return (this.concatOuterScope || n.isEmpty()) && this.outerScope ? n.concat(this.outerScope.getElements(e)) : n;
  }
}, s(Ts, "StreamScope"), Ts), Rs, Lj = (Rs = class {
  constructor(e, r, n) {
    this.elements = /* @__PURE__ */ new Map(), this.caseInsensitive = n?.caseInsensitive ?? !1, this.concatOuterScope = n?.concatOuterScope ?? !0;
    for (const a of e) {
      const i = this.caseInsensitive ? a.name.toLowerCase() : a.name;
      this.elements.set(i, a);
    }
    this.outerScope = r;
  }
  getElement(e) {
    const r = this.caseInsensitive ? e.toLowerCase() : e, n = this.elements.get(r);
    if (n)
      return n;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
  getElements(e) {
    const r = this.caseInsensitive ? e.toLowerCase() : e, n = this.elements.get(r), a = n ? [n] : [];
    return (this.concatOuterScope || a.length > 0) && this.outerScope ? ue(a).concat(this.outerScope.getElements(e)) : ue(a);
  }
  getAllElements() {
    let e = ue(this.elements.values());
    return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
  }
}, s(Rs, "MapScope"), Rs), $s, SI = ($s = class {
  constructor(e, r, n) {
    this.elements = new Or(), this.caseInsensitive = n?.caseInsensitive ?? !1, this.concatOuterScope = n?.concatOuterScope ?? !0;
    for (const a of e) {
      const i = this.caseInsensitive ? a.name.toLowerCase() : a.name;
      this.elements.add(i, a);
    }
    this.outerScope = r;
  }
  getElement(e) {
    const r = this.caseInsensitive ? e.toLowerCase() : e, n = this.elements.get(r)[0];
    if (n)
      return n;
    if (this.outerScope)
      return this.outerScope.getElement(e);
  }
  getElements(e) {
    const r = this.caseInsensitive ? e.toLowerCase() : e, n = this.elements.get(r);
    return (this.concatOuterScope || n.length === 0) && this.outerScope ? ue(n).concat(this.outerScope.getElements(e)) : ue(n);
  }
  getAllElements() {
    let e = ue(this.elements.values());
    return this.outerScope && (e = e.concat(this.outerScope.getAllElements())), e;
  }
}, s($s, "MultiMapScope"), $s), Dj = {
  getElement() {
  },
  getElements() {
    return bo;
  },
  getAllElements() {
    return bo;
  }
}, As, pd = (As = class {
  constructor() {
    this.toDispose = [], this.isDisposed = !1;
  }
  onDispose(e) {
    this.toDispose.push(e);
  }
  dispose() {
    this.throwIfDisposed(), this.clear(), this.isDisposed = !0, this.toDispose.forEach((e) => e.dispose());
  }
  throwIfDisposed() {
    if (this.isDisposed)
      throw new Error("This cache has already been disposed");
  }
}, s(As, "DisposableCache"), As), Es, sy = (Es = class extends pd {
  constructor() {
    super(...arguments), this.cache = /* @__PURE__ */ new Map();
  }
  has(e) {
    return this.throwIfDisposed(), this.cache.has(e);
  }
  set(e, r) {
    this.throwIfDisposed(), this.cache.set(e, r);
  }
  get(e, r) {
    if (this.throwIfDisposed(), this.cache.has(e))
      return this.cache.get(e);
    if (r) {
      const n = r();
      return this.cache.set(e, n), n;
    } else
      return;
  }
  delete(e) {
    return this.throwIfDisposed(), this.cache.delete(e);
  }
  clear() {
    this.throwIfDisposed(), this.cache.clear();
  }
}, s(Es, "SimpleCache"), Es), _s, hd = (_s = class extends pd {
  constructor(e) {
    super(), this.cache = /* @__PURE__ */ new Map(), this.converter = e ?? ((r) => r);
  }
  has(e, r) {
    return this.throwIfDisposed(), this.cacheForContext(e).has(r);
  }
  set(e, r, n) {
    this.throwIfDisposed(), this.cacheForContext(e).set(r, n);
  }
  get(e, r, n) {
    this.throwIfDisposed();
    const a = this.cacheForContext(e);
    if (a.has(r))
      return a.get(r);
    if (n) {
      const i = n();
      return a.set(r, i), i;
    } else
      return;
  }
  delete(e, r) {
    return this.throwIfDisposed(), this.cacheForContext(e).delete(r);
  }
  clear(e) {
    if (this.throwIfDisposed(), e) {
      const r = this.converter(e);
      this.cache.delete(r);
    } else
      this.cache.clear();
  }
  cacheForContext(e) {
    const r = this.converter(e);
    let n = this.cache.get(r);
    return n || (n = /* @__PURE__ */ new Map(), this.cache.set(r, n)), n;
  }
}, s(_s, "ContextCache"), _s), Cs, wI = (Cs = class extends hd {
  /**
   * Creates a new document cache.
   *
   * @param sharedServices Service container instance to hook into document lifecycle events.
   * @param state Optional document state on which the cache should evict.
   * If not provided, the cache will evict on `DocumentBuilder#onUpdate`.
   * *Deleted* documents are considered in both cases.
   *
   * Providing a state here will use `DocumentBuilder#onDocumentPhase` instead,
   * which triggers on all documents that have been affected by this change, assuming that the
   * state is `DocumentState.Linked` or a later state.
   */
  constructor(e, r) {
    super((n) => n.toString()), r ? (this.toDispose.push(e.workspace.DocumentBuilder.onDocumentPhase(r, (n) => {
      this.clear(n.uri.toString());
    })), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((n, a) => {
      for (const i of a)
        this.clear(i);
    }))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((n, a) => {
      const i = n.concat(a);
      for (const o of i)
        this.clear(o);
    }));
  }
}, s(Cs, "DocumentCache"), Cs), bs, oy = (bs = class extends sy {
  /**
   * Creates a new workspace cache.
   *
   * @param sharedServices Service container instance to hook into document lifecycle events.
   * @param state Optional document state on which the cache should evict.
   * If not provided, the cache will evict on `DocumentBuilder#onUpdate`.
   * *Deleted* documents are considered in both cases.
   */
  constructor(e, r) {
    super(), r ? (this.toDispose.push(e.workspace.DocumentBuilder.onBuildPhase(r, () => {
      this.clear();
    })), this.toDispose.push(e.workspace.DocumentBuilder.onUpdate((n, a) => {
      a.length > 0 && this.clear();
    }))) : this.toDispose.push(e.workspace.DocumentBuilder.onUpdate(() => {
      this.clear();
    }));
  }
}, s(bs, "WorkspaceCache"), bs), Ss, II = (Ss = class {
  constructor(e) {
    this.reflection = e.shared.AstReflection, this.nameProvider = e.references.NameProvider, this.descriptions = e.workspace.AstNodeDescriptionProvider, this.indexManager = e.shared.workspace.IndexManager, this.globalScopeCache = new oy(e.shared);
  }
  getScope(e) {
    const r = [], n = this.reflection.getReferenceType(e), a = Bt(e.container).localSymbols;
    if (a) {
      let o = e.container;
      do
        a.has(o) && r.push(a.getStream(o).filter((c) => this.reflection.isSubtype(c.type, n))), o = o.$container;
      while (o);
    }
    let i = this.getGlobalScope(n, e);
    for (let o = r.length - 1; o >= 0; o--)
      i = this.createScope(r[o], i);
    return i;
  }
  /**
   * Create a scope for the given collection of AST node descriptions.
   */
  createScope(e, r, n) {
    return new Th(ue(e), r, n);
  }
  /**
   * Create a scope for the given collection of AST nodes, which need to be transformed into respective
   * descriptions first. This is done using the `NameProvider` and `AstNodeDescriptionProvider` services.
   */
  createScopeForNodes(e, r, n) {
    const a = ue(e).map((i) => {
      const o = this.nameProvider.getName(i);
      if (o)
        return this.descriptions.createDescription(i, o);
    }).nonNullable();
    return new Th(a, r, n);
  }
  /**
   * Create a global scope filtered for the given reference type.
   */
  getGlobalScope(e, r) {
    return this.globalScopeCache.get(e, () => new SI(this.indexManager.allElements(e)));
  }
}, s(Ss, "DefaultScopeProvider"), Ss);
function ly(t) {
  return typeof t.$comment == "string";
}
s(ly, "isAstNodeWithComment");
function Rh(t) {
  return typeof t == "object" && !!t && ("$ref" in t || "$error" in t);
}
s(Rh, "isIntermediateReference");
var ws, NI = (ws = class {
  constructor(e) {
    this.ignoreProperties = /* @__PURE__ */ new Set(["$container", "$containerProperty", "$containerIndex", "$document", "$cstNode"]), this.langiumDocuments = e.shared.workspace.LangiumDocuments, this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider, this.commentProvider = e.documentation.CommentProvider;
  }
  serialize(e, r) {
    const n = r ?? {}, a = r?.replacer, i = /* @__PURE__ */ s((c, l) => this.replacer(c, l, n), "defaultReplacer"), o = a ? (c, l) => a(c, l, i) : i;
    try {
      return this.currentDocument = Bt(e), JSON.stringify(e, o, r?.space);
    } finally {
      this.currentDocument = void 0;
    }
  }
  deserialize(e, r) {
    const n = r ?? {}, a = JSON.parse(e);
    return this.linkNode(a, a, n), a;
  }
  replacer(e, r, { refText: n, sourceText: a, textRegions: i, comments: o, uriConverter: c }) {
    if (!this.ignoreProperties.has(e))
      if (at(r)) {
        const l = r.ref, u = n ? r.$refText : void 0;
        if (l) {
          const f = Bt(l);
          let d = "";
          this.currentDocument && this.currentDocument !== f && (c ? d = c(f.uri, l) : d = f.uri.toString());
          const p = this.astNodeLocator.getAstNodePath(l);
          return {
            $ref: `${d}#${p}`,
            $refText: u
          };
        } else
          return {
            $error: r.error?.message ?? "Could not resolve reference",
            $refText: u
          };
      } else if (or(r)) {
        const l = n ? r.$refText : void 0, u = [];
        for (const f of r.items) {
          const d = f.ref, p = Bt(f.ref);
          let g = "";
          this.currentDocument && this.currentDocument !== p && (c ? g = c(p.uri, d) : g = p.uri.toString());
          const m = this.astNodeLocator.getAstNodePath(d);
          u.push(`${g}#${m}`);
        }
        return {
          $refs: u,
          $refText: l
        };
      } else if (Be(r)) {
        let l;
        if (i && (l = this.addAstNodeRegionWithAssignmentsTo({ ...r }), (!e || r.$document) && l?.$textRegion && (l.$textRegion.documentURI = this.currentDocument?.uri.toString())), a && !e && (l ?? (l = { ...r }), l.$sourceText = r.$cstNode?.text), o) {
          l ?? (l = { ...r });
          const u = this.commentProvider.getComment(r);
          u && (l.$comment = u.replace(/\r/g, ""));
        }
        return l ?? r;
      } else
        return r;
  }
  addAstNodeRegionWithAssignmentsTo(e) {
    const r = /* @__PURE__ */ s((n) => ({
      offset: n.offset,
      end: n.end,
      length: n.length,
      range: n.range
    }), "createDocumentSegment");
    if (e.$cstNode) {
      const n = e.$textRegion = r(e.$cstNode), a = n.assignments = {};
      return Object.keys(e).filter((i) => !i.startsWith("$")).forEach((i) => {
        const o = km(e.$cstNode, i).map(r);
        o.length !== 0 && (a[i] = o);
      }), e;
    }
  }
  linkNode(e, r, n, a, i, o) {
    for (const [l, u] of Object.entries(e))
      if (Array.isArray(u))
        for (let f = 0; f < u.length; f++) {
          const d = u[f];
          Rh(d) ? u[f] = this.reviveReference(e, l, r, d, n) : Be(d) && this.linkNode(d, r, n, e, l, f);
        }
      else Rh(u) ? e[l] = this.reviveReference(e, l, r, u, n) : Be(u) && this.linkNode(u, r, n, e, l);
    const c = e;
    c.$container = a, c.$containerProperty = i, c.$containerIndex = o;
  }
  reviveReference(e, r, n, a, i) {
    let o = a.$refText, c = a.$error, l;
    if (a.$ref) {
      const u = this.getRefNode(n, a.$ref, i.uriConverter);
      if (Be(u))
        return o || (o = this.nameProvider.getName(u)), {
          $refText: o ?? "",
          ref: u
        };
      c = u;
    } else if (a.$refs) {
      const u = [];
      for (const f of a.$refs) {
        const d = this.getRefNode(n, f, i.uriConverter);
        Be(d) && u.push({ ref: d });
      }
      if (u.length === 0)
        l = {
          $refText: o ?? "",
          items: u
        }, c ?? (c = "Could not resolve multi-reference");
      else
        return {
          $refText: o ?? "",
          items: u
        };
    }
    if (c)
      return l ?? (l = {
        $refText: o ?? "",
        ref: void 0
      }), l.error = {
        info: {
          container: e,
          property: r,
          reference: l
        },
        message: c
      }, l;
  }
  getRefNode(e, r, n) {
    try {
      const a = r.indexOf("#");
      if (a === 0) {
        const l = this.astNodeLocator.getAstNode(e, r.substring(1));
        return l || "Could not resolve path: " + r;
      }
      if (a < 0) {
        const l = n ? n(r) : Rt.parse(r), u = this.langiumDocuments.getDocument(l);
        return u ? u.parseResult.value : "Could not find document for URI: " + r;
      }
      const i = n ? n(r.substring(0, a)) : Rt.parse(r.substring(0, a)), o = this.langiumDocuments.getDocument(i);
      if (!o)
        return "Could not find document for URI: " + r;
      if (a === r.length - 1)
        return o.parseResult.value;
      const c = this.astNodeLocator.getAstNode(o.parseResult.value, r.substring(a + 1));
      return c || "Could not resolve URI: " + r;
    } catch (a) {
      return String(a);
    }
  }
}, s(ws, "DefaultJsonSerializer"), ws), Is, kI = (Is = class {
  /**
   * @deprecated Since 3.1.0. Use the new `fileExtensionMap` (or `languageIdMap`) property instead.
   */
  get map() {
    return this.fileExtensionMap;
  }
  constructor(e) {
    this.languageIdMap = /* @__PURE__ */ new Map(), this.fileExtensionMap = /* @__PURE__ */ new Map(), this.fileNameMap = /* @__PURE__ */ new Map(), this.textDocuments = e?.workspace.TextDocuments;
  }
  register(e) {
    const r = e.LanguageMetaData;
    for (const n of r.fileExtensions)
      this.fileExtensionMap.has(n) && console.warn(`The file extension ${n} is used by multiple languages. It is now assigned to '${r.languageId}'.`), this.fileExtensionMap.set(n, e);
    if (r.fileNames)
      for (const n of r.fileNames)
        this.fileNameMap.has(n) && console.warn(`The file name ${n} is used by multiple languages. It is now assigned to '${r.languageId}'.`), this.fileNameMap.set(n, e);
    this.languageIdMap.set(r.languageId, e);
  }
  getServices(e) {
    if (this.languageIdMap.size === 0)
      throw new Error("The service registry is empty. Use `register` to register the services of a language.");
    const r = this.textDocuments?.get(e)?.languageId;
    if (r !== void 0) {
      const o = this.languageIdMap.get(r);
      if (o)
        return o;
    }
    const n = it.extname(e), a = it.basename(e), i = this.fileNameMap.get(a) ?? this.fileExtensionMap.get(n);
    if (!i)
      throw r ? new Error(`The service registry contains no services for the extension '${n}' for language '${r}'.`) : new Error(`The service registry contains no services for the extension '${n}'.`);
    return i;
  }
  hasServices(e) {
    try {
      return this.getServices(e), !0;
    } catch {
      return !1;
    }
  }
  get all() {
    return Array.from(this.languageIdMap.values());
  }
}, s(Is, "DefaultServiceRegistry"), Is);
function Nn(t) {
  return { code: t };
}
s(Nn, "diagnosticData");
var sf;
(function(t) {
  t.defaults = ["fast", "slow", "built-in"], t.all = t.defaults;
})(sf || (sf = {}));
var Ns, PI = (Ns = class {
  constructor(e) {
    this.entries = new Or(), this.knownCategories = new Set(sf.defaults), this.entriesBefore = [], this.entriesAfter = [], this.reflection = e.shared.AstReflection;
  }
  /**
   * Register a set of validation checks. Each value in the record can be either a single validation check (i.e. a function)
   * or an array of validation checks.
   *
   * @param checksRecord Set of validation checks to register.
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   * @param category Optional category for the validation checks (defaults to `'fast'`).
   */
  register(e, r = this, n = "fast") {
    if (n === "built-in")
      throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");
    this.knownCategories.add(n);
    for (const [a, i] of Object.entries(e)) {
      const o = i;
      if (Array.isArray(o))
        for (const c of o) {
          const l = {
            check: this.wrapValidationException(c, r),
            category: n
          };
          this.addEntry(a, l);
        }
      else if (typeof o == "function") {
        const c = {
          check: this.wrapValidationException(o, r),
          category: n
        };
        this.addEntry(a, c);
      } else
        Zr();
    }
  }
  wrapValidationException(e, r) {
    return async (n, a, i) => {
      await this.handleException(() => e.call(r, n, a, i), "An error occurred during validation", a, n);
    };
  }
  async handleException(e, r, n, a) {
    try {
      await e();
    } catch (i) {
      if (sa(i))
        throw i;
      console.error(`${r}:`, i), i instanceof Error && i.stack && console.error(i.stack);
      const o = i instanceof Error ? i.message : String(i);
      n("error", `${r}: ${o}`, { node: a });
    }
  }
  addEntry(e, r) {
    if (e === "AstNode") {
      this.entries.add("AstNode", r);
      return;
    }
    for (const n of this.reflection.getAllSubTypes(e))
      this.entries.add(n, r);
  }
  getChecks(e, r) {
    let n = ue(this.entries.get(e)).concat(this.entries.get("AstNode"));
    return r && (n = n.filter((a) => r.includes(a.category))), n.map((a) => a.check);
  }
  /**
   * Register logic which will be executed once before validating all the nodes of an AST/Langium document.
   * This helps to prepare or initialize some information which are required or reusable for the following checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map for mapping names to nodes could be established.
   * During the usual checks on the nodes, they are put into this map with their name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerBeforeDocument(e, r = this) {
    this.entriesBefore.push(this.wrapPreparationException(e, "An error occurred during set-up of the validation", r));
  }
  /**
   * Register logic which will be executed once after validating all the nodes of an AST/Langium document.
   * This helps to finally evaluate information which are collected during the checks on the AstNodes.
   *
   * As an example, for validating unique fully-qualified names of nodes in the AST,
   * here the map with all the collected nodes and their names is checked
   * and validation hints are created for all nodes with the same name.
   *
   * Note that this approach makes validations stateful, which is relevant e.g. when cancelling the validation.
   * Therefore it is recommended to clear stored information
   * _before_ validating an AST to validate each AST unaffected from other ASTs
   * AND _after_ validating the AST to free memory by information which are no longer used.
   *
   * @param checkBefore a set-up function which will be called once before actually validating an AST
   * @param thisObj Optional object to be used as `this` when calling the validation check functions.
   */
  registerAfterDocument(e, r = this) {
    this.entriesAfter.push(this.wrapPreparationException(e, "An error occurred during tear-down of the validation", r));
  }
  wrapPreparationException(e, r, n) {
    return async (a, i, o, c) => {
      await this.handleException(() => e.call(n, a, i, o, c), r, i, a);
    };
  }
  get checksBefore() {
    return this.entriesBefore;
  }
  get checksAfter() {
    return this.entriesAfter;
  }
  getAllValidationCategories(e) {
    return this.knownCategories;
  }
}, s(Ns, "ValidationRegistry"), Ns), OI = Object.freeze({
  validateNode: !0,
  validateChildren: !0
}), ks, LI = (ks = class {
  constructor(e) {
    this.validationRegistry = e.validation.ValidationRegistry, this.metadata = e.LanguageMetaData, this.profiler = e.shared.profilers.LangiumProfiler, this.languageId = e.LanguageMetaData.languageId;
  }
  async validateDocument(e, r = {}, n = $e.CancellationToken.None) {
    const a = e.parseResult, i = [];
    if (await Ye(n), (!r.categories || r.categories.includes("built-in")) && (this.processLexingErrors(a, i, r), r.stopAfterLexingErrors && i.some((o) => o.data?.code === Ot.LexingError) || (this.processParsingErrors(a, i, r), r.stopAfterParsingErrors && i.some((o) => o.data?.code === Ot.ParsingError)) || (this.processLinkingErrors(e, i, r), r.stopAfterLinkingErrors && i.some((o) => o.data?.code === Ot.LinkingError))))
      return i;
    try {
      i.push(...await this.validateAst(a.value, r, n));
    } catch (o) {
      if (sa(o))
        throw o;
      console.error("An error occurred during validation:", o);
    }
    return await Ye(n), i;
  }
  processLexingErrors(e, r, n) {
    const a = [...e.lexerErrors, ...e.lexerReport?.diagnostics ?? []];
    for (const i of a) {
      const o = i.severity ?? "error", c = {
        severity: Hl(o),
        range: {
          start: {
            line: i.line - 1,
            character: i.column - 1
          },
          end: {
            line: i.line - 1,
            character: i.column + i.length - 1
          }
        },
        message: i.message,
        data: uy(o),
        source: this.getSource()
      };
      r.push(c);
    }
  }
  processParsingErrors(e, r, n) {
    for (const a of e.parserErrors) {
      let i;
      if (isNaN(a.token.startOffset)) {
        if ("previousToken" in a) {
          const o = a.previousToken;
          if (isNaN(o.startOffset)) {
            const c = { line: 0, character: 0 };
            i = { start: c, end: c };
          } else {
            const c = { line: o.endLine - 1, character: o.endColumn };
            i = { start: c, end: c };
          }
        }
      } else
        i = Jl(a.token);
      if (i) {
        const o = {
          severity: Hl("error"),
          range: i,
          message: a.message,
          data: Nn(Ot.ParsingError),
          source: this.getSource()
        };
        r.push(o);
      }
    }
  }
  processLinkingErrors(e, r, n) {
    for (const a of e.references) {
      const i = a.error;
      if (i) {
        const o = {
          node: i.info.container,
          range: a.$refNode?.range,
          property: i.info.property,
          index: i.info.index,
          data: {
            code: Ot.LinkingError,
            containerType: i.info.container.$type,
            property: i.info.property,
            refText: i.info.reference.$refText
          }
        };
        r.push(this.toDiagnostic("error", i.message, o));
      }
    }
  }
  async validateAst(e, r, n = $e.CancellationToken.None) {
    const a = [], i = /* @__PURE__ */ s((o, c, l) => {
      a.push(this.toDiagnostic(o, c, l));
    }, "acceptor");
    return await this.validateAstBefore(e, r, i, n), await this.validateAstNodes(e, r, i, n), await this.validateAstAfter(e, r, i, n), a;
  }
  async validateAstBefore(e, r, n, a = $e.CancellationToken.None) {
    const i = this.validationRegistry.checksBefore;
    for (const o of i)
      await Ye(a), await o(e, n, r.categories ?? [], a);
  }
  async validateAstNodes(e, r, n, a = $e.CancellationToken.None) {
    if (this.profiler?.isActive("validating")) {
      const i = this.profiler.createTask("validating", this.languageId);
      i.start();
      try {
        const o = Kt(e).iterator();
        for (const c of o) {
          i.startSubTask(c.$type);
          const l = this.validateSingleNodeOptions(c, r);
          if (l.validateNode)
            try {
              const u = this.validationRegistry.getChecks(c.$type, r.categories);
              for (const f of u)
                await f(c, n, a);
            } finally {
              i.stopSubTask(c.$type);
            }
          l.validateChildren || o.prune();
        }
      } finally {
        i.stop();
      }
    } else {
      const i = Kt(e).iterator();
      for (const o of i) {
        await Ye(a);
        const c = this.validateSingleNodeOptions(o, r);
        if (c.validateNode) {
          const l = this.validationRegistry.getChecks(o.$type, r.categories);
          for (const u of l)
            await u(o, n, a);
        }
        c.validateChildren || i.prune();
      }
    }
  }
  validateSingleNodeOptions(e, r) {
    return OI;
  }
  async validateAstAfter(e, r, n, a = $e.CancellationToken.None) {
    const i = this.validationRegistry.checksAfter;
    for (const o of i)
      await Ye(a), await o(e, n, r.categories ?? [], a);
  }
  toDiagnostic(e, r, n) {
    return {
      message: r,
      range: cy(n),
      severity: Hl(e),
      code: n.code,
      codeDescription: n.codeDescription,
      tags: n.tags,
      relatedInformation: n.relatedInformation,
      data: n.data,
      source: this.getSource()
    };
  }
  getSource() {
    return this.metadata.languageId;
  }
}, s(ks, "DefaultDocumentValidator"), ks);
function cy(t) {
  if (t.range)
    return t.range;
  let e;
  return typeof t.property == "string" ? e = _f(t.node.$cstNode, t.property, t.index) : typeof t.keyword == "string" && (e = Pm(t.node.$cstNode, t.keyword, t.index)), e ?? (e = t.node.$cstNode), e ? e.range : {
    start: { line: 0, character: 0 },
    end: { line: 0, character: 0 }
  };
}
s(cy, "getDiagnosticRange");
function Hl(t) {
  switch (t) {
    case "error":
      return 1;
    case "warning":
      return 2;
    case "info":
      return 3;
    case "hint":
      return 4;
    default:
      throw new Error("Invalid diagnostic severity: " + t);
  }
}
s(Hl, "toDiagnosticSeverity");
function uy(t) {
  switch (t) {
    case "error":
      return Nn(Ot.LexingError);
    case "warning":
      return Nn(Ot.LexingWarning);
    case "info":
      return Nn(Ot.LexingInfo);
    case "hint":
      return Nn(Ot.LexingHint);
    default:
      throw new Error("Invalid diagnostic severity: " + t);
  }
}
s(uy, "toDiagnosticData");
var Ot;
(function(t) {
  t.LexingError = "lexing-error", t.LexingWarning = "lexing-warning", t.LexingInfo = "lexing-info", t.LexingHint = "lexing-hint", t.ParsingError = "parsing-error", t.LinkingError = "linking-error";
})(Ot || (Ot = {}));
var Ps, DI = (Ps = class {
  constructor(e) {
    this.astNodeLocator = e.workspace.AstNodeLocator, this.nameProvider = e.references.NameProvider;
  }
  createDescription(e, r, n) {
    const a = n ?? Bt(e);
    r ?? (r = this.nameProvider.getName(e));
    const i = this.astNodeLocator.getAstNodePath(e);
    if (!r)
      throw new Error(`Node at path ${i} has no name.`);
    let o;
    const c = /* @__PURE__ */ s(() => o ?? (o = Po(this.nameProvider.getNameNode(e) ?? e.$cstNode)), "nameSegmentGetter");
    return {
      node: e,
      name: r,
      get nameSegment() {
        return c();
      },
      selectionSegment: Po(e.$cstNode),
      type: e.$type,
      documentUri: a.uri,
      path: i
    };
  }
}, s(Ps, "DefaultAstNodeDescriptionProvider"), Ps), Os, MI = (Os = class {
  constructor(e) {
    this.nodeLocator = e.workspace.AstNodeLocator;
  }
  async createDescriptions(e, r = $e.CancellationToken.None) {
    const n = [], a = e.parseResult.value;
    for (const i of Kt(a))
      await Ye(r), Io(i).forEach((o) => {
        o.reference.error || n.push(...this.createInfoDescriptions(o));
      });
    return n;
  }
  createInfoDescriptions(e) {
    const r = e.reference;
    if (r.error || !r.$refNode)
      return [];
    let n = [];
    at(r) && r.$nodeDescription ? n = [r.$nodeDescription] : or(r) && (n = r.items.map((l) => l.$nodeDescription).filter((l) => l !== void 0));
    const a = Bt(e.container).uri, i = this.nodeLocator.getAstNodePath(e.container), o = [], c = Po(r.$refNode);
    for (const l of n)
      o.push({
        sourceUri: a,
        sourcePath: i,
        targetUri: l.documentUri,
        targetPath: l.path,
        segment: c,
        local: it.equals(l.documentUri, a)
      });
    return o;
  }
}, s(Os, "DefaultReferenceDescriptionProvider"), Os), Ls, xI = (Ls = class {
  constructor() {
    this.segmentSeparator = "/", this.indexSeparator = "@";
  }
  getAstNodePath(e) {
    if (e.$container) {
      const r = this.getAstNodePath(e.$container), n = this.getPathSegment(e);
      return r + this.segmentSeparator + n;
    }
    return "";
  }
  getPathSegment({ $containerProperty: e, $containerIndex: r }) {
    if (!e)
      throw new Error("Missing '$containerProperty' in AST node.");
    return r !== void 0 ? e + this.indexSeparator + r : e;
  }
  getAstNode(e, r) {
    return r.split(this.segmentSeparator).reduce((a, i) => {
      if (!a || i.length === 0)
        return a;
      const o = i.indexOf(this.indexSeparator);
      if (o > 0) {
        const c = i.substring(0, o), l = parseInt(i.substring(o + 1));
        return a[c]?.[l];
      }
      return a[i];
    }, e);
  }
}, s(Ls, "DefaultAstNodeLocator"), Ls), md = {};
cf(md, Fh(Fo()));
var Ds, FI = (Ds = class {
  constructor(e) {
    this._ready = new Pr(), this.onConfigurationSectionUpdateEmitter = new md.Emitter(), this.settings = {}, this.workspaceConfig = !1, this.serviceRegistry = e.ServiceRegistry;
  }
  get ready() {
    return this._ready.promise;
  }
  initialize(e) {
    this.workspaceConfig = e.capabilities.workspace?.configuration ?? !1;
  }
  async initialized(e) {
    if (this.workspaceConfig) {
      if (e.register) {
        const r = this.serviceRegistry.all;
        e.register({
          // Listen to configuration changes for all languages
          section: r.map((n) => this.toSectionName(n.LanguageMetaData.languageId))
        });
      }
      if (e.fetchConfiguration) {
        const r = this.serviceRegistry.all.map((a) => ({
          // Fetch the configuration changes for all languages
          section: this.toSectionName(a.LanguageMetaData.languageId)
        })), n = await e.fetchConfiguration(r);
        r.forEach((a, i) => {
          this.updateSectionConfiguration(a.section, n[i]);
        });
      }
    }
    this._ready.resolve();
  }
  /**
   *  Updates the cached configurations using the `change` notification parameters.
   *
   * @param change The parameters of a change configuration notification.
   * `settings` property of the change object could be expressed as `Record<string, Record<string, any>>`
   */
  updateConfiguration(e) {
    typeof e.settings != "object" || e.settings === null || Object.entries(e.settings).forEach(([r, n]) => {
      this.updateSectionConfiguration(r, n), this.onConfigurationSectionUpdateEmitter.fire({ section: r, configuration: n });
    });
  }
  updateSectionConfiguration(e, r) {
    this.settings[e] = r;
  }
  /**
  * Returns a configuration value stored for the given language.
  *
  * @param language The language id
  * @param configuration Configuration name
  */
  async getConfiguration(e, r) {
    await this.ready;
    const n = this.toSectionName(e);
    if (this.settings[n])
      return this.settings[n][r];
  }
  toSectionName(e) {
    return `${e}`;
  }
  get onConfigurationSectionUpdate() {
    return this.onConfigurationSectionUpdateEmitter.event;
  }
}, s(Ds, "DefaultConfigurationProvider"), Ds), jc = Fh(mk()), On;
(function(t) {
  function e(r) {
    return {
      dispose: /* @__PURE__ */ s(async () => await r(), "dispose")
    };
  }
  s(e, "create"), t.create = e;
})(On || (On = {}));
var Ms, GI = (Ms = class {
  constructor(e) {
    this.updateBuildOptions = {
      // Default: run only the built-in validation checks and those in the _fast_ category (includes those without category)
      validation: {
        categories: ["built-in", "fast"]
      }
    }, this.updateListeners = [], this.buildPhaseListeners = new Or(), this.documentPhaseListeners = new Or(), this.buildState = /* @__PURE__ */ new Map(), this.documentBuildWaiters = /* @__PURE__ */ new Map(), this.currentState = Z.Changed, this.langiumDocuments = e.workspace.LangiumDocuments, this.langiumDocumentFactory = e.workspace.LangiumDocumentFactory, this.textDocuments = e.workspace.TextDocuments, this.indexManager = e.workspace.IndexManager, this.fileSystemProvider = e.workspace.FileSystemProvider, this.workspaceManager = () => e.workspace.WorkspaceManager, this.serviceRegistry = e.ServiceRegistry;
  }
  async build(e, r = {}, n = $e.CancellationToken.None) {
    for (const a of e) {
      const i = a.uri.toString();
      if (a.state === Z.Validated) {
        if (typeof r.validation == "boolean" && r.validation)
          this.resetToState(a, Z.IndexedReferences);
        else if (typeof r.validation == "object") {
          const o = this.findMissingValidationCategories(a, r);
          o.length > 0 && (this.buildState.set(i, {
            completed: !1,
            options: {
              validation: {
                categories: o
              }
            },
            result: this.buildState.get(i)?.result
          }), a.state = Z.IndexedReferences);
        }
      } else
        this.buildState.delete(i);
    }
    this.currentState = Z.Changed, await this.emitUpdate(e.map((a) => a.uri), []), await this.buildDocuments(e, r, n);
  }
  async update(e, r, n = $e.CancellationToken.None) {
    this.currentState = Z.Changed;
    const a = [];
    for (const l of r) {
      const u = this.langiumDocuments.deleteDocuments(l);
      for (const f of u)
        a.push(f.uri), this.cleanUpDeleted(f);
    }
    const i = (await Promise.all(e.map((l) => this.findChangedUris(l)))).flat();
    for (const l of i) {
      let u = this.langiumDocuments.getDocument(l);
      u === void 0 && (u = this.langiumDocumentFactory.fromModel({ $type: "INVALID" }, l), u.state = Z.Changed, this.langiumDocuments.addDocument(u)), this.resetToState(u, Z.Changed);
    }
    const o = ue(i).concat(a).map((l) => l.toString()).toSet();
    this.langiumDocuments.all.filter((l) => !o.has(l.uri.toString()) && this.shouldRelink(l, o)).forEach((l) => this.resetToState(l, Z.ComputedScopes)), await this.emitUpdate(i, a), await Ye(n);
    const c = this.sortDocuments(this.langiumDocuments.all.filter((l) => (
      // This includes those that were reported as changed and those that we selected for relinking
      l.state < Z.Validated || !this.buildState.get(l.uri.toString())?.completed || this.resultsAreIncomplete(l, this.updateBuildOptions)
    )).toArray());
    await this.buildDocuments(c, this.updateBuildOptions, n);
  }
  resultsAreIncomplete(e, r) {
    return this.findMissingValidationCategories(e, r).length >= 1;
  }
  findMissingValidationCategories(e, r) {
    const n = this.buildState.get(e.uri.toString()), a = this.serviceRegistry.getServices(e.uri).validation.ValidationRegistry.getAllValidationCategories(e), i = n?.result?.validationChecks ? new Set(n?.result?.validationChecks) : n?.completed ? a : /* @__PURE__ */ new Set(), o = r === void 0 || r.validation === !0 ? a : typeof r.validation == "object" ? r.validation.categories ?? a : [];
    return ue(o).filter((c) => !i.has(c)).toArray();
  }
  async findChangedUris(e) {
    if (this.langiumDocuments.getDocument(e) ?? this.textDocuments?.get(e))
      return [e];
    try {
      const n = await this.fileSystemProvider.stat(e);
      if (n.isDirectory)
        return await this.workspaceManager().searchFolder(e);
      if (this.workspaceManager().shouldIncludeEntry(n))
        return [e];
    } catch {
    }
    return [];
  }
  async emitUpdate(e, r) {
    await Promise.all(this.updateListeners.map((n) => n(e, r)));
  }
  /**
   * Sort the given documents by priority. By default, documents with an open text document are prioritized.
   * This is useful to ensure that visible documents show their diagnostics before all other documents.
   *
   * This improves the responsiveness in large workspaces as users usually don't care about diagnostics
   * in files that are currently not opened in the editor.
   */
  sortDocuments(e) {
    let r = 0, n = e.length - 1;
    for (; r < n; ) {
      for (; r < e.length && this.hasTextDocument(e[r]); )
        r++;
      for (; n >= 0 && !this.hasTextDocument(e[n]); )
        n--;
      r < n && ([e[r], e[n]] = [e[n], e[r]]);
    }
    return e;
  }
  hasTextDocument(e) {
    return !!this.textDocuments?.get(e.uri);
  }
  /**
   * Check whether the given document should be relinked after changes were found in the given URIs.
   */
  shouldRelink(e, r) {
    return e.references.some((n) => n.error !== void 0) ? !0 : this.indexManager.isAffected(e, r);
  }
  onUpdate(e) {
    return this.updateListeners.push(e), On.create(() => {
      const r = this.updateListeners.indexOf(e);
      r >= 0 && this.updateListeners.splice(r, 1);
    });
  }
  resetToState(e, r) {
    switch (r) {
      case Z.Changed:
      case Z.Parsed:
        this.indexManager.removeContent(e.uri);
      // Fall through
      case Z.IndexedContent:
        e.localSymbols = void 0;
      // Fall through
      case Z.ComputedScopes:
        this.serviceRegistry.getServices(e.uri).references.Linker.unlink(e);
      case Z.Linked:
        this.indexManager.removeReferences(e.uri);
      // Fall through
      case Z.IndexedReferences:
        e.diagnostics = void 0, this.buildState.delete(e.uri.toString());
      // Fall through
      case Z.Validated:
    }
    e.state > r && (e.state = r);
  }
  cleanUpDeleted(e) {
    this.buildState.delete(e.uri.toString()), this.indexManager.remove(e.uri), e.state = Z.Changed;
  }
  /**
   * Build the given documents by stepping through all build phases. If a document's state indicates
   * that a certain build phase is already done, the phase is skipped for that document.
   *
   * @param documents The documents to build.
   * @param options the {@link BuildOptions} to use.
   * @param cancelToken A cancellation token that can be used to cancel the build.
   * @returns A promise that resolves when the build is done.
   */
  async buildDocuments(e, r, n) {
    this.prepareBuild(e, r), await this.runCancelable(e, Z.Parsed, n, (o) => this.langiumDocumentFactory.update(o, n)), await this.runCancelable(e, Z.IndexedContent, n, (o) => this.indexManager.updateContent(o, n)), await this.runCancelable(e, Z.ComputedScopes, n, async (o) => {
      const c = this.serviceRegistry.getServices(o.uri).references.ScopeComputation;
      o.localSymbols = await c.collectLocalSymbols(o, n);
    });
    const a = e.filter((o) => this.shouldLink(o));
    await this.runCancelable(a, Z.Linked, n, (o) => this.serviceRegistry.getServices(o.uri).references.Linker.link(o, n)), await this.runCancelable(a, Z.IndexedReferences, n, (o) => this.indexManager.updateReferences(o, n));
    const i = e.filter((o) => this.shouldValidate(o) ? !0 : (this.markAsCompleted(o), !1));
    await this.runCancelable(i, Z.Validated, n, async (o) => {
      await this.validate(o, n), this.markAsCompleted(o);
    });
  }
  markAsCompleted(e) {
    const r = this.buildState.get(e.uri.toString());
    r && (r.completed = !0);
  }
  /**
   * Runs prior to beginning the build process to update the {@link DocumentBuildState} for each document
   *
   * @param documents collection of documents to be built
   * @param options the {@link BuildOptions} to use
   */
  prepareBuild(e, r) {
    for (const n of e) {
      const a = n.uri.toString(), i = this.buildState.get(a);
      (!i || i.completed) && this.buildState.set(a, {
        completed: !1,
        options: r,
        result: i?.result
      });
    }
  }
  /**
   * Runs a cancelable operation on a set of documents to bring them to a specified {@link DocumentState}.
   *
   * @param documents The array of documents to process.
   * @param targetState The target {@link DocumentState} to bring the documents to.
   * @param cancelToken A token that can be used to cancel the operation.
   * @param callback A function to be called for each document.
   * @returns A promise that resolves when all documents have been processed or the operation is canceled.
   * @throws Will throw `OperationCancelled` if the operation is canceled via a `CancellationToken`.
   */
  async runCancelable(e, r, n, a) {
    for (const o of e)
      o.state < r && (await Ye(n), await a(o), o.state = r, await this.notifyDocumentPhase(o, r, n));
    const i = e.filter((o) => o.state === r);
    await this.notifyBuildPhase(i, r, n), this.currentState = r;
  }
  onBuildPhase(e, r) {
    return this.buildPhaseListeners.add(e, r), On.create(() => {
      this.buildPhaseListeners.delete(e, r);
    });
  }
  onDocumentPhase(e, r) {
    return this.documentPhaseListeners.add(e, r), On.create(() => {
      this.documentPhaseListeners.delete(e, r);
    });
  }
  waitUntil(e, r, n) {
    let a;
    return r && "path" in r ? a = r : n = r, n ?? (n = $e.CancellationToken.None), a ? this.awaitDocumentState(e, a, n) : this.awaitBuilderState(e, n);
  }
  awaitDocumentState(e, r, n) {
    const a = this.langiumDocuments.getDocument(r);
    if (a) {
      if (a.state >= e)
        return Promise.resolve(r);
      if (n.isCancellationRequested)
        return Promise.reject(sr);
      if (this.currentState >= e && e > a.state)
        return Promise.reject(new jc.ResponseError(jc.LSPErrorCodes.RequestFailed, `Document state of ${r.toString()} is ${Z[a.state]}, requiring ${Z[e]}, but workspace state is already ${Z[this.currentState]}. Returning undefined.`));
    } else return Promise.reject(new jc.ResponseError(jc.LSPErrorCodes.ServerCancelled, `No document found for URI: ${r.toString()}`));
    return new Promise((i, o) => {
      const c = this.onDocumentPhase(e, (u) => {
        it.equals(u.uri, r) && (c.dispose(), l.dispose(), i(u.uri));
      }), l = n.onCancellationRequested(() => {
        c.dispose(), l.dispose(), o(sr);
      });
    });
  }
  awaitBuilderState(e, r) {
    return this.currentState >= e ? Promise.resolve() : r.isCancellationRequested ? Promise.reject(sr) : new Promise((n, a) => {
      const i = this.onBuildPhase(e, () => {
        i.dispose(), o.dispose(), n();
      }), o = r.onCancellationRequested(() => {
        i.dispose(), o.dispose(), a(sr);
      });
    });
  }
  async notifyDocumentPhase(e, r, n) {
    const i = this.documentPhaseListeners.get(r).slice();
    for (const o of i)
      try {
        await Ye(n), await o(e, n);
      } catch (c) {
        if (!sa(c))
          throw c;
      }
  }
  async notifyBuildPhase(e, r, n) {
    if (e.length === 0)
      return;
    const i = this.buildPhaseListeners.get(r).slice();
    for (const o of i)
      await Ye(n), await o(e, n);
  }
  /**
   * Determine whether the given document should be linked during a build. The default
   * implementation checks the `eagerLinking` property of the build options. If it's set to `true`
   * or `undefined`, the document is included in the linking phase. This also affects the
   * references indexing phase, which depends on eager linking.
   */
  shouldLink(e) {
    return this.getBuildOptions(e).eagerLinking ?? !0;
  }
  /**
   * Determine whether the given document should be validated during a build. The default
   * implementation checks the `validation` property of the build options. If it's set to `true`
   * or a `ValidationOptions` object, the document is included in the validation phase.
   */
  shouldValidate(e) {
    return !!this.getBuildOptions(e).validation;
  }
  /**
   * Run validation checks on the given document and store the resulting diagnostics in the document.
   * If the document already contains diagnostics, the new ones are added to the list.
   */
  async validate(e, r) {
    const n = this.serviceRegistry.getServices(e.uri).validation.DocumentValidator, a = this.getBuildOptions(e), i = typeof a.validation == "object" ? { ...a.validation } : {};
    i.categories = this.findMissingValidationCategories(e, a);
    const o = await n.validateDocument(e, i, r);
    e.diagnostics ? e.diagnostics.push(...o) : e.diagnostics = o;
    const c = this.buildState.get(e.uri.toString());
    c && (c.result ?? (c.result = {}), c.result.validationChecks ? c.result.validationChecks = ue(c.result.validationChecks).concat(i.categories).distinct().toArray() : c.result.validationChecks = [...i.categories]);
  }
  getBuildOptions(e) {
    return this.buildState.get(e.uri.toString())?.options ?? {};
  }
}, s(Ms, "DefaultDocumentBuilder"), Ms), xs, jI = (xs = class {
  constructor(e) {
    this.symbolIndex = /* @__PURE__ */ new Map(), this.symbolByTypeIndex = new hd(), this.referenceIndex = /* @__PURE__ */ new Map(), this.documents = e.workspace.LangiumDocuments, this.serviceRegistry = e.ServiceRegistry, this.astReflection = e.AstReflection;
  }
  findAllReferences(e, r) {
    const n = Bt(e).uri, a = [];
    return this.referenceIndex.forEach((i) => {
      i.forEach((o) => {
        it.equals(o.targetUri, n) && o.targetPath === r && a.push(o);
      });
    }), ue(a);
  }
  allElements(e, r) {
    let n = ue(this.symbolIndex.keys());
    return r && (n = n.filter((a) => !r || r.has(a))), n.map((a) => this.getFileDescriptions(a, e)).flat();
  }
  getFileDescriptions(e, r) {
    return r ? this.symbolByTypeIndex.get(e, r, () => (this.symbolIndex.get(e) ?? []).filter((i) => this.astReflection.isSubtype(i.type, r))) : this.symbolIndex.get(e) ?? [];
  }
  remove(e) {
    this.removeContent(e), this.removeReferences(e);
  }
  removeContent(e) {
    const r = e.toString();
    this.symbolIndex.delete(r), this.symbolByTypeIndex.clear(r);
  }
  removeReferences(e) {
    const r = e.toString();
    this.referenceIndex.delete(r);
  }
  async updateContent(e, r = $e.CancellationToken.None) {
    const a = await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.collectExportedSymbols(e, r), i = e.uri.toString();
    this.symbolIndex.set(i, a), this.symbolByTypeIndex.clear(i);
  }
  async updateReferences(e, r = $e.CancellationToken.None) {
    const a = await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e, r);
    this.referenceIndex.set(e.uri.toString(), a);
  }
  isAffected(e, r) {
    const n = this.referenceIndex.get(e.uri.toString());
    return n ? n.some((a) => !a.local && r.has(a.targetUri.toString())) : !1;
  }
}, s(xs, "DefaultIndexManager"), xs), Fs, UI = (Fs = class {
  constructor(e) {
    this.initialBuildOptions = {}, this._ready = new Pr(), this.serviceRegistry = e.ServiceRegistry, this.langiumDocuments = e.workspace.LangiumDocuments, this.documentBuilder = e.workspace.DocumentBuilder, this.fileSystemProvider = e.workspace.FileSystemProvider, this.mutex = e.workspace.WorkspaceLock;
  }
  get ready() {
    return this._ready.promise;
  }
  get workspaceFolders() {
    return this.folders;
  }
  initialize(e) {
    this.folders = e.workspaceFolders ?? void 0;
  }
  initialized(e) {
    return this.mutex.write((r) => this.initializeWorkspace(this.folders ?? [], r));
  }
  async initializeWorkspace(e, r = $e.CancellationToken.None) {
    const n = await this.performStartup(e);
    await Ye(r), await this.documentBuilder.build(n, this.initialBuildOptions, r);
  }
  /**
   * Performs the uninterruptable startup sequence of the workspace manager.
   * This methods loads all documents in the workspace and other documents and returns them.
   */
  async performStartup(e) {
    const r = [], n = /* @__PURE__ */ s((o) => {
      r.push(o), this.langiumDocuments.hasDocument(o.uri) || this.langiumDocuments.addDocument(o);
    }, "collector");
    await this.loadAdditionalDocuments(e, n);
    const a = [];
    await Promise.all(e.map((o) => this.getRootFolder(o)).map(async (o) => this.traverseFolder(o, a)));
    const i = ue(a).distinct((o) => o.toString()).filter((o) => !this.langiumDocuments.hasDocument(o));
    return await this.loadWorkspaceDocuments(i, n), this._ready.resolve(), r;
  }
  async loadWorkspaceDocuments(e, r) {
    await Promise.all(e.map(async (n) => {
      const a = await this.langiumDocuments.getOrCreateDocument(n);
      r(a);
    }));
  }
  /**
   * Load all additional documents that shall be visible in the context of the given workspace
   * folders and add them to the collector. This can be used to include built-in libraries of
   * your language, which can be either loaded from provided files or constructed in memory.
   */
  loadAdditionalDocuments(e, r) {
    return Promise.resolve();
  }
  /**
   * Determine the root folder of the source documents in the given workspace folder.
   * The default implementation returns the URI of the workspace folder, but you can override
   * this to return a subfolder like `src` instead.
   */
  getRootFolder(e) {
    return Rt.parse(e.uri);
  }
  /**
   * Traverse the file system folder identified by the given URI and its subfolders. All
   * contained files that match the file extensions are added to the `uris` array.
   */
  async traverseFolder(e, r) {
    try {
      const n = await this.fileSystemProvider.readDirectory(e);
      await Promise.all(n.map(async (a) => {
        this.shouldIncludeEntry(a) && (a.isDirectory ? await this.traverseFolder(a.uri, r) : a.isFile && r.push(a.uri));
      }));
    } catch (n) {
      console.error("Failure to read directory content of " + e.toString(!0), n);
    }
  }
  async searchFolder(e) {
    const r = [];
    return await this.traverseFolder(e, r), r;
  }
  /**
   * Determine whether the given folder entry shall be included while indexing the workspace.
   */
  shouldIncludeEntry(e) {
    const r = it.basename(e.uri);
    return r.startsWith(".") ? !1 : e.isDirectory ? r !== "node_modules" && r !== "out" : e.isFile ? this.serviceRegistry.hasServices(e.uri) : !1;
  }
}, s(Fs, "DefaultWorkspaceManager"), Fs), Gs, zI = (Gs = class {
  buildUnexpectedCharactersMessage(e, r, n, a, i) {
    return eh.buildUnexpectedCharactersMessage(e, r, n, a, i);
  }
  buildUnableToPopLexerModeMessage(e) {
    return eh.buildUnableToPopLexerModeMessage(e);
  }
}, s(Gs, "DefaultLexerErrorMessageProvider"), Gs), fy = { mode: "full" }, js, dy = (js = class {
  constructor(e) {
    this.errorMessageProvider = e.parser.LexerErrorMessageProvider, this.tokenBuilder = e.parser.TokenBuilder;
    const r = this.tokenBuilder.buildTokens(e.Grammar, {
      caseInsensitive: e.LanguageMetaData.caseInsensitive
    });
    this.tokenTypes = this.toTokenTypeDictionary(r);
    const n = of(r) ? Object.values(r) : r, a = e.LanguageMetaData.mode === "production";
    this.chevrotainLexer = new st(n, {
      positionTracking: "full",
      skipValidations: a,
      errorMessageProvider: this.errorMessageProvider
    });
  }
  get definition() {
    return this.tokenTypes;
  }
  tokenize(e, r = fy) {
    const n = this.chevrotainLexer.tokenize(e);
    return {
      tokens: n.tokens,
      errors: n.errors,
      hidden: n.groups.hidden ?? [],
      report: this.tokenBuilder.flushLexingReport?.(e)
    };
  }
  toTokenTypeDictionary(e) {
    if (of(e))
      return e;
    const r = yd(e) ? Object.values(e.modes).flat() : e, n = {};
    return r.forEach((a) => n[a.name] = a), n;
  }
}, s(js, "DefaultLexer"), js);
function gd(t) {
  return Array.isArray(t) && (t.length === 0 || "name" in t[0]);
}
s(gd, "isTokenTypeArray");
function yd(t) {
  return t && "modes" in t && "defaultMode" in t;
}
s(yd, "isIMultiModeLexerDefinition");
function of(t) {
  return !gd(t) && !yd(t);
}
s(of, "isTokenTypeDictionary");
pc();
function py(t, e, r) {
  let n, a;
  typeof t == "string" ? (a = e, n = r) : (a = t.range.start, n = e), a || (a = ie.create(0, 0));
  const i = my(t), o = vd(n), c = BI({
    lines: i,
    position: a,
    options: o
  });
  return WI({
    index: 0,
    tokens: c,
    position: a
  });
}
s(py, "parseJSDoc");
function hy(t, e) {
  const r = vd(e), n = my(t);
  if (n.length === 0)
    return !1;
  const a = n[0], i = n[n.length - 1], o = r.start, c = r.end;
  return !!o?.exec(a) && !!c?.exec(i);
}
s(hy, "isJSDoc");
function my(t) {
  let e = "";
  return typeof t == "string" ? e = t : e = t.text, e.split(WT);
}
s(my, "getLines");
var qv = /\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy, Mj = /\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;
function BI(t) {
  const e = [];
  let r = t.position.line, n = t.position.character;
  for (let a = 0; a < t.lines.length; a++) {
    const i = a === 0, o = a === t.lines.length - 1;
    let c = t.lines[a], l = 0;
    if (i && t.options.start) {
      const f = t.options.start?.exec(c);
      f && (l = f.index + f[0].length);
    } else {
      const f = t.options.line?.exec(c);
      f && (l = f.index + f[0].length);
    }
    if (o) {
      const f = t.options.end?.exec(c);
      f && (c = c.substring(0, f.index));
    }
    if (c = c.substring(0, qI(c)), lf(c, l) >= c.length) {
      if (e.length > 0) {
        const f = ie.create(r, n);
        e.push({
          type: "break",
          content: "",
          range: ee.create(f, f)
        });
      }
    } else {
      qv.lastIndex = l;
      const f = qv.exec(c);
      if (f) {
        const d = f[0], p = f[1], g = ie.create(r, n + l), m = ie.create(r, n + l + d.length);
        e.push({
          type: "tag",
          content: p,
          range: ee.create(g, m)
        }), l += d.length, l = lf(c, l);
      }
      if (l < c.length) {
        const d = c.substring(l), p = Array.from(d.matchAll(Mj));
        e.push(...KI(p, d, r, n + l));
      }
    }
    r++, n = 0;
  }
  return e.length > 0 && e[e.length - 1].type === "break" ? e.slice(0, -1) : e;
}
s(BI, "tokenize");
function KI(t, e, r, n) {
  const a = [];
  if (t.length === 0) {
    const i = ie.create(r, n), o = ie.create(r, n + e.length);
    a.push({
      type: "text",
      content: e,
      range: ee.create(i, o)
    });
  } else {
    let i = 0;
    for (const c of t) {
      const l = c.index, u = e.substring(i, l);
      u.length > 0 && a.push({
        type: "text",
        content: e.substring(i, l),
        range: ee.create(ie.create(r, i + n), ie.create(r, l + n))
      });
      let f = u.length + 1;
      const d = c[1];
      if (a.push({
        type: "inline-tag",
        content: d,
        range: ee.create(ie.create(r, i + f + n), ie.create(r, i + f + d.length + n))
      }), f += d.length, c.length === 4) {
        f += c[2].length;
        const p = c[3];
        a.push({
          type: "text",
          content: p,
          range: ee.create(ie.create(r, i + f + n), ie.create(r, i + f + p.length + n))
        });
      } else
        a.push({
          type: "text",
          content: "",
          range: ee.create(ie.create(r, i + f + n), ie.create(r, i + f + n))
        });
      i = l + c[0].length;
    }
    const o = e.substring(i);
    o.length > 0 && a.push({
      type: "text",
      content: o,
      range: ee.create(ie.create(r, i + n), ie.create(r, i + n + o.length))
    });
  }
  return a;
}
s(KI, "buildInlineTokens");
var xj = /\S/, Fj = /\s*$/;
function lf(t, e) {
  const r = t.substring(e).match(xj);
  return r ? e + r.index : t.length;
}
s(lf, "skipWhitespace");
function qI(t) {
  const e = t.match(Fj);
  if (e && typeof e.index == "number")
    return e.index;
}
s(qI, "lastCharacter");
function WI(t) {
  const e = ie.create(t.position.line, t.position.character);
  if (t.tokens.length === 0)
    return new Wv([], ee.create(e, e));
  const r = [];
  for (; t.index < t.tokens.length; ) {
    const i = VI(t, r[r.length - 1]);
    i && r.push(i);
  }
  const n = r[0]?.range.start ?? e, a = r[r.length - 1]?.range.end ?? e;
  return new Wv(r, ee.create(n, a));
}
s(WI, "parseJSDocComment");
function VI(t, e) {
  const r = t.tokens[t.index];
  if (r.type === "tag")
    return yy(t, !1);
  if (r.type === "text" || r.type === "inline-tag")
    return gy(t);
  HI(r, e), t.index++;
}
s(VI, "parseJSDocElement");
function HI(t, e) {
  if (e) {
    const r = new ZI("", t.range);
    "inlines" in e ? e.inlines.push(r) : e.content.inlines.push(r);
  }
}
s(HI, "appendEmptyLine");
function gy(t) {
  let e = t.tokens[t.index];
  const r = e;
  let n = e;
  const a = [];
  for (; e && e.type !== "break" && e.type !== "tag"; )
    a.push(YI(t)), n = e, e = t.tokens[t.index];
  return new $h(a, ee.create(r.range.start, n.range.end));
}
s(gy, "parseJSDocText");
function YI(t) {
  return t.tokens[t.index].type === "inline-tag" ? yy(t, !0) : vy(t);
}
s(YI, "parseJSDocInline");
function yy(t, e) {
  const r = t.tokens[t.index++], n = r.content.substring(1);
  if (t.tokens[t.index]?.type === "text")
    if (e) {
      const i = vy(t);
      return new wd(n, new $h([i], i.range), e, ee.create(r.range.start, i.range.end));
    } else {
      const i = gy(t);
      return new wd(n, i, e, ee.create(r.range.start, i.range.end));
    }
  else {
    const i = r.range;
    return new wd(n, new $h([], i), e, i);
  }
}
s(yy, "parseJSDocTag");
function vy(t) {
  const e = t.tokens[t.index++];
  return new ZI(e.content, e.range);
}
s(vy, "parseJSDocLine");
function vd(t) {
  if (!t)
    return vd({
      start: "/**",
      end: "*/",
      line: "*"
    });
  const { start: e, end: r, line: n } = t;
  return {
    start: vu(e, !0),
    end: vu(r, !1),
    line: vu(n, !0)
  };
}
s(vd, "normalizeOptions");
function vu(t, e) {
  if (typeof t == "string" || typeof t == "object") {
    const r = typeof t == "string" ? jo(t) : t.source;
    return e ? new RegExp(`^\\s*${r}`) : new RegExp(`\\s*${r}\\s*$`);
  } else
    return t;
}
s(vu, "normalizeOption");
var Us, Wv = (Us = class {
  constructor(e, r) {
    this.elements = e, this.range = r;
  }
  getTag(e) {
    return this.getAllTags().find((r) => r.name === e);
  }
  getTags(e) {
    return this.getAllTags().filter((r) => r.name === e);
  }
  getAllTags() {
    return this.elements.filter((e) => "name" in e);
  }
  toString() {
    let e = "";
    for (const r of this.elements)
      if (e.length === 0)
        e = r.toString();
      else {
        const n = r.toString();
        e += Ah(e) + n;
      }
    return e.trim();
  }
  toMarkdown(e) {
    let r = "";
    for (const n of this.elements)
      if (r.length === 0)
        r = n.toMarkdown(e);
      else {
        const a = n.toMarkdown(e);
        r += Ah(r) + a;
      }
    return r.trim();
  }
}, s(Us, "JSDocCommentImpl"), Us), zs, wd = (zs = class {
  constructor(e, r, n, a) {
    this.name = e, this.content = r, this.inline = n, this.range = a;
  }
  toString() {
    let e = `@${this.name}`;
    const r = this.content.toString();
    return this.content.inlines.length === 1 ? e = `${e} ${r}` : this.content.inlines.length > 1 && (e = `${e}
${r}`), this.inline ? `{${e}}` : e;
  }
  toMarkdown(e) {
    return e?.renderTag?.(this) ?? this.toMarkdownDefault(e);
  }
  toMarkdownDefault(e) {
    const r = this.content.toMarkdown(e);
    if (this.inline) {
      const i = XI(this.name, r, e ?? {});
      if (typeof i == "string")
        return i;
    }
    let n = "";
    e?.tag === "italic" || e?.tag === void 0 ? n = "*" : e?.tag === "bold" ? n = "**" : e?.tag === "bold-italic" && (n = "***");
    let a = `${n}@${this.name}${n}`;
    return this.content.inlines.length === 1 ? a = `${a} — ${r}` : this.content.inlines.length > 1 && (a = `${a}
${r}`), this.inline ? `{${a}}` : a;
  }
}, s(zs, "JSDocTagImpl"), zs);
function XI(t, e, r) {
  if (t === "linkplain" || t === "linkcode" || t === "link") {
    const n = e.indexOf(" ");
    let a = e;
    if (n > 0) {
      const o = lf(e, n);
      a = e.substring(o), e = e.substring(0, n);
    }
    return (t === "linkcode" || t === "link" && r.link === "code") && (a = `\`${a}\``), r.renderLink?.(e, a) ?? JI(e, a);
  }
}
s(XI, "renderInlineTag");
function JI(t, e) {
  try {
    return Rt.parse(t, !0), `[${e}](${t})`;
  } catch {
    return t;
  }
}
s(JI, "renderLinkDefault");
var Bs, $h = (Bs = class {
  constructor(e, r) {
    this.inlines = e, this.range = r;
  }
  toString() {
    let e = "";
    for (let r = 0; r < this.inlines.length; r++) {
      const n = this.inlines[r], a = this.inlines[r + 1];
      e += n.toString(), a && a.range.start.line > n.range.start.line && (e += `
`);
    }
    return e;
  }
  toMarkdown(e) {
    let r = "";
    for (let n = 0; n < this.inlines.length; n++) {
      const a = this.inlines[n], i = this.inlines[n + 1];
      r += a.toMarkdown(e), i && i.range.start.line > a.range.start.line && (r += `
`);
    }
    return r;
  }
}, s(Bs, "JSDocTextImpl"), Bs), Ks, ZI = (Ks = class {
  constructor(e, r) {
    this.text = e, this.range = r;
  }
  toString() {
    return this.text;
  }
  toMarkdown() {
    return this.text;
  }
}, s(Ks, "JSDocLineImpl"), Ks);
function Ah(t) {
  return t.endsWith(`
`) ? `
` : `

`;
}
s(Ah, "fillNewlines");
var qs, QI = (qs = class {
  constructor(e) {
    this.indexManager = e.shared.workspace.IndexManager, this.commentProvider = e.documentation.CommentProvider;
  }
  getDocumentation(e) {
    const r = this.commentProvider.getComment(e);
    if (r && hy(r))
      return py(r).toMarkdown({
        renderLink: /* @__PURE__ */ s((a, i) => this.documentationLinkRenderer(e, a, i), "renderLink"),
        renderTag: /* @__PURE__ */ s((a) => this.documentationTagRenderer(e, a), "renderTag")
      });
  }
  documentationLinkRenderer(e, r, n) {
    const a = this.findNameInLocalSymbols(e, r) ?? this.findNameInGlobalScope(e, r);
    if (a && a.nameSegment) {
      const i = a.nameSegment.range.start.line + 1, o = a.nameSegment.range.start.character + 1, c = a.documentUri.with({ fragment: `L${i},${o}` });
      return `[${n}](${c.toString()})`;
    } else
      return;
  }
  documentationTagRenderer(e, r) {
  }
  findNameInLocalSymbols(e, r) {
    const a = Bt(e).localSymbols;
    if (!a)
      return;
    let i = e;
    do {
      const c = a.getStream(i).find((l) => l.name === r);
      if (c)
        return c;
      i = i.$container;
    } while (i);
  }
  findNameInGlobalScope(e, r) {
    return this.indexManager.allElements().find((a) => a.name === r);
  }
}, s(qs, "JSDocDocumentationProvider"), qs), Ws, eN = (Ws = class {
  constructor(e) {
    this.grammarConfig = () => e.parser.GrammarConfig;
  }
  getComment(e) {
    return ly(e) ? e.$comment : gm(e.$cstNode, this.grammarConfig().multilineCommentRules)?.text;
  }
}, s(Ws, "DefaultCommentProvider"), Ws), Vs, tN = (Vs = class {
  constructor(e) {
    this.syncParser = e.parser.LangiumParser;
  }
  parse(e, r) {
    return Promise.resolve(this.syncParser.parse(e));
  }
}, s(Vs, "DefaultAsyncParser"), Vs), Hs, Gj = (Hs = class {
  constructor(e) {
    this.threadCount = 8, this.terminationDelay = 200, this.workerPool = [], this.queue = [], this.hydrator = e.serializer.Hydrator;
  }
  initializeWorkers() {
    for (; this.workerPool.length < this.threadCount; ) {
      const e = this.createWorker();
      e.onReady(() => {
        if (this.queue.length > 0) {
          const r = this.queue.shift();
          r && (e.lock(), r.resolve(e));
        }
      }), this.workerPool.push(e);
    }
  }
  async parse(e, r) {
    const n = await this.acquireParserWorker(r), a = new Pr();
    let i;
    const o = r.onCancellationRequested(() => {
      i = setTimeout(() => {
        this.terminateWorker(n);
      }, this.terminationDelay);
    });
    return n.parse(e).then((c) => {
      const l = this.hydrator.hydrate(c);
      a.resolve(l);
    }).catch((c) => {
      a.reject(c);
    }).finally(() => {
      o.dispose(), clearTimeout(i);
    }), a.promise;
  }
  terminateWorker(e) {
    e.terminate();
    const r = this.workerPool.indexOf(e);
    r >= 0 && this.workerPool.splice(r, 1);
  }
  async acquireParserWorker(e) {
    this.initializeWorkers();
    for (const n of this.workerPool)
      if (n.ready)
        return n.lock(), n;
    const r = new Pr();
    return e.onCancellationRequested(() => {
      const n = this.queue.indexOf(r);
      n >= 0 && this.queue.splice(n, 1), r.reject(sr);
    }), this.queue.push(r), r.promise;
  }
}, s(Hs, "AbstractThreadedAsyncParser"), Hs), Ys, jj = (Ys = class {
  get ready() {
    return this._ready;
  }
  get onReady() {
    return this.onReadyEmitter.event;
  }
  constructor(e, r, n, a) {
    this.onReadyEmitter = new md.Emitter(), this.deferred = new Pr(), this._ready = !0, this._parsing = !1, this.sendMessage = e, this._terminate = a, r((i) => {
      const o = i;
      this.deferred.resolve(o), this.unlock();
    }), n((i) => {
      this.deferred.reject(i), this.unlock();
    });
  }
  terminate() {
    this.deferred.reject(sr), this._terminate();
  }
  lock() {
    this._ready = !1;
  }
  unlock() {
    this._parsing = !1, this._ready = !0, this.onReadyEmitter.fire();
  }
  parse(e) {
    if (this._parsing)
      throw new Error("Parser worker is busy");
    return this._parsing = !0, this.deferred = new Pr(), this.sendMessage(e), this.deferred.promise;
  }
}, s(Ys, "ParserWorker"), Ys), Xs, rN = (Xs = class {
  constructor() {
    this.previousTokenSource = new $e.CancellationTokenSource(), this.writeQueue = [], this.readQueue = [], this.done = !0;
  }
  write(e) {
    this.cancelWrite();
    const r = dd();
    return this.previousTokenSource = r, this.enqueue(this.writeQueue, e, r.token);
  }
  read(e) {
    return this.enqueue(this.readQueue, e);
  }
  enqueue(e, r, n = $e.CancellationToken.None) {
    const a = new Pr(), i = {
      action: r,
      deferred: a,
      cancellationToken: n
    };
    return e.push(i), this.performNextOperation(), a.promise;
  }
  async performNextOperation() {
    if (!this.done)
      return;
    const e = [];
    if (this.writeQueue.length > 0)
      e.push(this.writeQueue.shift());
    else if (this.readQueue.length > 0)
      e.push(...this.readQueue.splice(0, this.readQueue.length));
    else
      return;
    this.done = !1, await Promise.all(e.map(async ({ action: r, deferred: n, cancellationToken: a }) => {
      try {
        const i = await Promise.resolve().then(() => r(a));
        n.resolve(i);
      } catch (i) {
        sa(i) ? n.resolve(void 0) : n.reject(i);
      }
    })), this.done = !0, this.performNextOperation();
  }
  cancelWrite() {
    this.previousTokenSource.cancel();
  }
}, s(Xs, "DefaultWorkspaceLock"), Xs), Js, nN = (Js = class {
  constructor(e) {
    this.grammarElementIdMap = new af(), this.tokenTypeIdMap = new af(), this.grammar = e.Grammar, this.lexer = e.parser.Lexer, this.linker = e.references.Linker;
  }
  dehydrate(e) {
    return {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport ? this.dehydrateLexerReport(e.lexerReport) : void 0,
      // We need to create shallow copies of the errors
      // The original errors inherit from the `Error` class, which is not transferable across worker threads
      parserErrors: e.parserErrors.map((r) => ({ ...r, message: r.message })),
      value: this.dehydrateAstNode(e.value, this.createDehyrationContext(e.value))
    };
  }
  dehydrateLexerReport(e) {
    return e;
  }
  createDehyrationContext(e) {
    const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
    for (const a of Kt(e))
      r.set(a, {});
    if (e.$cstNode)
      for (const a of ko(e.$cstNode))
        n.set(a, {});
    return {
      astNodes: r,
      cstNodes: n
    };
  }
  dehydrateAstNode(e, r) {
    const n = r.astNodes.get(e);
    n.$type = e.$type, n.$containerIndex = e.$containerIndex, n.$containerProperty = e.$containerProperty, e.$cstNode !== void 0 && (n.$cstNode = this.dehydrateCstNode(e.$cstNode, r));
    for (const [a, i] of Object.entries(e))
      if (!a.startsWith("$"))
        if (Array.isArray(i)) {
          const o = [];
          n[a] = o;
          for (const c of i)
            Be(c) ? o.push(this.dehydrateAstNode(c, r)) : at(c) ? o.push(this.dehydrateReference(c, r)) : o.push(c);
        } else Be(i) ? n[a] = this.dehydrateAstNode(i, r) : at(i) ? n[a] = this.dehydrateReference(i, r) : i !== void 0 && (n[a] = i);
    return n;
  }
  dehydrateReference(e, r) {
    const n = {};
    return n.$refText = e.$refText, e.$refNode && (n.$refNode = r.cstNodes.get(e.$refNode)), n;
  }
  dehydrateCstNode(e, r) {
    const n = r.cstNodes.get(e);
    return df(e) ? n.fullText = e.fullText : n.grammarSource = this.getGrammarElementId(e.grammarSource), n.hidden = e.hidden, n.astNode = r.astNodes.get(e.astNode), _r(e) ? n.content = e.content.map((a) => this.dehydrateCstNode(a, r)) : Un(e) && (n.tokenType = e.tokenType.name, n.offset = e.offset, n.length = e.length, n.startLine = e.range.start.line, n.startColumn = e.range.start.character, n.endLine = e.range.end.line, n.endColumn = e.range.end.character), n;
  }
  hydrate(e) {
    const r = e.value, n = this.createHydrationContext(r);
    return "$cstNode" in r && this.hydrateCstNode(r.$cstNode, n), {
      lexerErrors: e.lexerErrors,
      lexerReport: e.lexerReport,
      parserErrors: e.parserErrors,
      value: this.hydrateAstNode(r, n)
    };
  }
  createHydrationContext(e) {
    const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
    for (const i of Kt(e))
      r.set(i, {});
    let a;
    if (e.$cstNode)
      for (const i of ko(e.$cstNode)) {
        let o;
        "fullText" in i ? (o = new Wg(i.fullText), a = o) : "content" in i ? o = new od() : "tokenType" in i && (o = this.hydrateCstLeafNode(i)), o && (n.set(i, o), o.root = a);
      }
    return {
      astNodes: r,
      cstNodes: n
    };
  }
  hydrateAstNode(e, r) {
    const n = r.astNodes.get(e);
    n.$type = e.$type, n.$containerIndex = e.$containerIndex, n.$containerProperty = e.$containerProperty, e.$cstNode && (n.$cstNode = r.cstNodes.get(e.$cstNode));
    for (const [a, i] of Object.entries(e))
      if (!a.startsWith("$"))
        if (Array.isArray(i)) {
          const o = [];
          n[a] = o;
          for (const c of i)
            Be(c) ? o.push(this.setParent(this.hydrateAstNode(c, r), n)) : at(c) ? o.push(this.hydrateReference(c, n, a, r)) : o.push(c);
        } else Be(i) ? n[a] = this.setParent(this.hydrateAstNode(i, r), n) : at(i) ? n[a] = this.hydrateReference(i, n, a, r) : i !== void 0 && (n[a] = i);
    return n;
  }
  setParent(e, r) {
    return e.$container = r, e;
  }
  hydrateReference(e, r, n, a) {
    return this.linker.buildReference(r, n, a.cstNodes.get(e.$refNode), e.$refText);
  }
  hydrateCstNode(e, r, n = 0) {
    const a = r.cstNodes.get(e);
    if (typeof e.grammarSource == "number" && (a.grammarSource = this.getGrammarElement(e.grammarSource)), a.astNode = r.astNodes.get(e.astNode), _r(a))
      for (const i of e.content) {
        const o = this.hydrateCstNode(i, r, n++);
        a.content.push(o);
      }
    return a;
  }
  hydrateCstLeafNode(e) {
    const r = this.getTokenType(e.tokenType), n = e.offset, a = e.length, i = e.startLine, o = e.startColumn, c = e.endLine, l = e.endColumn, u = e.hidden;
    return new Qu(n, a, {
      start: {
        line: i,
        character: o
      },
      end: {
        line: c,
        character: l
      }
    }, r, u);
  }
  getTokenType(e) {
    return this.lexer.definition[e];
  }
  getGrammarElementId(e) {
    if (e)
      return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.get(e);
  }
  getGrammarElement(e) {
    return this.grammarElementIdMap.size === 0 && this.createGrammarElementIdMap(), this.grammarElementIdMap.getKey(e);
  }
  createGrammarElementIdMap() {
    let e = 0;
    for (const r of Kt(this.grammar))
      pf(r) && this.grammarElementIdMap.set(r, e++);
  }
}, s(Js, "DefaultHydrator"), Js);
function bt(t) {
  return {
    documentation: {
      CommentProvider: /* @__PURE__ */ s((e) => new eN(e), "CommentProvider"),
      DocumentationProvider: /* @__PURE__ */ s((e) => new QI(e), "DocumentationProvider")
    },
    parser: {
      AsyncParser: /* @__PURE__ */ s((e) => new tN(e), "AsyncParser"),
      GrammarConfig: /* @__PURE__ */ s((e) => jm(e), "GrammarConfig"),
      LangiumParser: /* @__PURE__ */ s((e) => Zg(e), "LangiumParser"),
      CompletionParser: /* @__PURE__ */ s((e) => Jg(e), "CompletionParser"),
      ValueConverter: /* @__PURE__ */ s(() => new ey(), "ValueConverter"),
      TokenBuilder: /* @__PURE__ */ s(() => new ud(), "TokenBuilder"),
      Lexer: /* @__PURE__ */ s((e) => new dy(e), "Lexer"),
      ParserErrorMessageProvider: /* @__PURE__ */ s(() => new Hg(), "ParserErrorMessageProvider"),
      LexerErrorMessageProvider: /* @__PURE__ */ s(() => new zI(), "LexerErrorMessageProvider")
    },
    workspace: {
      AstNodeLocator: /* @__PURE__ */ s(() => new xI(), "AstNodeLocator"),
      AstNodeDescriptionProvider: /* @__PURE__ */ s((e) => new DI(e), "AstNodeDescriptionProvider"),
      ReferenceDescriptionProvider: /* @__PURE__ */ s((e) => new MI(e), "ReferenceDescriptionProvider")
    },
    references: {
      Linker: /* @__PURE__ */ s((e) => new EI(e), "Linker"),
      NameProvider: /* @__PURE__ */ s(() => new _I(), "NameProvider"),
      ScopeProvider: /* @__PURE__ */ s((e) => new II(e), "ScopeProvider"),
      ScopeComputation: /* @__PURE__ */ s((e) => new bI(e), "ScopeComputation"),
      References: /* @__PURE__ */ s((e) => new CI(e), "References")
    },
    serializer: {
      Hydrator: /* @__PURE__ */ s((e) => new nN(e), "Hydrator"),
      JsonSerializer: /* @__PURE__ */ s((e) => new NI(e), "JsonSerializer")
    },
    validation: {
      DocumentValidator: /* @__PURE__ */ s((e) => new LI(e), "DocumentValidator"),
      ValidationRegistry: /* @__PURE__ */ s((e) => new PI(e), "ValidationRegistry")
    },
    shared: /* @__PURE__ */ s(() => t.shared, "shared")
  };
}
s(bt, "createDefaultCoreModule");
function St(t) {
  return {
    ServiceRegistry: /* @__PURE__ */ s((e) => new kI(e), "ServiceRegistry"),
    workspace: {
      LangiumDocuments: /* @__PURE__ */ s((e) => new AI(e), "LangiumDocuments"),
      LangiumDocumentFactory: /* @__PURE__ */ s((e) => new $I(e), "LangiumDocumentFactory"),
      DocumentBuilder: /* @__PURE__ */ s((e) => new GI(e), "DocumentBuilder"),
      IndexManager: /* @__PURE__ */ s((e) => new jI(e), "IndexManager"),
      WorkspaceManager: /* @__PURE__ */ s((e) => new UI(e), "WorkspaceManager"),
      FileSystemProvider: /* @__PURE__ */ s((e) => t.fileSystemProvider(e), "FileSystemProvider"),
      WorkspaceLock: /* @__PURE__ */ s(() => new rN(), "WorkspaceLock"),
      ConfigurationProvider: /* @__PURE__ */ s((e) => new FI(e), "ConfigurationProvider")
    },
    profilers: {}
  };
}
s(St, "createDefaultSharedCoreModule");
var Eh;
(function(t) {
  t.merge = (e, r) => xo(xo({}, e), r);
})(Eh || (Eh = {}));
function ke(t, e, r, n, a, i, o, c, l) {
  const u = [t, e, r, n, a, i, o, c, l].reduce(xo, {});
  return Ry(u);
}
s(ke, "inject");
var aN = /* @__PURE__ */ Symbol("isProxy");
function Ty(t) {
  if (t && t[aN])
    for (const e of Object.values(t))
      Ty(e);
  return t;
}
s(Ty, "eagerLoad");
function Ry(t, e) {
  const r = new Proxy({}, {
    deleteProperty: /* @__PURE__ */ s(() => !1, "deleteProperty"),
    set: /* @__PURE__ */ s(() => {
      throw new Error("Cannot set property on injected service container");
    }, "set"),
    get: /* @__PURE__ */ s((n, a) => a === aN ? !0 : _h(n, a, t, e || r), "get"),
    getOwnPropertyDescriptor: /* @__PURE__ */ s((n, a) => (_h(n, a, t, e || r), Object.getOwnPropertyDescriptor(n, a)), "getOwnPropertyDescriptor"),
    // used by for..in
    has: /* @__PURE__ */ s((n, a) => a in t, "has"),
    // used by ..in..
    ownKeys: /* @__PURE__ */ s(() => [...Object.getOwnPropertyNames(t)], "ownKeys")
    // used by for..in
  });
  return r;
}
s(Ry, "_inject");
var Vv = /* @__PURE__ */ Symbol();
function _h(t, e, r, n) {
  if (e in t) {
    if (t[e] instanceof Error)
      throw new Error("Construction failure. Please make sure that your dependencies are constructable. Cause: " + t[e]);
    if (t[e] === Vv)
      throw new Error('Cycle detected. Please make "' + String(e) + '" lazy. Visit https://langium.org/docs/reference/configuration-services/#resolving-cyclic-dependencies');
    return t[e];
  } else if (e in r) {
    const a = r[e];
    t[e] = Vv;
    try {
      t[e] = typeof a == "function" ? a(n) : Ry(a, n);
    } catch (i) {
      throw t[e] = i instanceof Error ? i : void 0, i;
    }
    return t[e];
  } else
    return;
}
s(_h, "_resolve");
function xo(t, e) {
  if (e) {
    for (const [r, n] of Object.entries(e))
      if (n != null)
        if (typeof n == "object") {
          const a = t[r];
          typeof a == "object" && a !== null ? t[r] = xo(a, n) : t[r] = xo({}, n);
        } else
          t[r] = n;
  }
  return t;
}
s(xo, "_merge");
var Ch = {
  indentTokenName: "INDENT",
  dedentTokenName: "DEDENT",
  whitespaceTokenName: "WS",
  ignoreIndentationDelimiters: []
}, kn;
(function(t) {
  t.REGULAR = "indentation-sensitive", t.IGNORE_INDENTATION = "ignore-indentation";
})(kn || (kn = {}));
var Zs, iN = (Zs = class extends ud {
  constructor(e = Ch) {
    super(), this.indentationStack = [0], this.whitespaceRegExp = /[ \t]+/y, this.options = {
      ...Ch,
      ...e
    }, this.indentTokenType = Ga({
      name: this.options.indentTokenName,
      pattern: this.indentMatcher.bind(this),
      line_breaks: !1
    }), this.dedentTokenType = Ga({
      name: this.options.dedentTokenName,
      pattern: this.dedentMatcher.bind(this),
      line_breaks: !1
    });
  }
  buildTokens(e, r) {
    const n = super.buildTokens(e, r);
    if (!gd(n))
      throw new Error("Invalid tokens built by default builder");
    const { indentTokenName: a, dedentTokenName: i, whitespaceTokenName: o, ignoreIndentationDelimiters: c } = this.options;
    let l, u, f;
    const d = [];
    for (const p of n) {
      for (const [g, m] of c)
        p.name === g ? p.PUSH_MODE = kn.IGNORE_INDENTATION : p.name === m && (p.POP_MODE = !0);
      p.name === i ? l = p : p.name === a ? u = p : p.name === o ? f = p : d.push(p);
    }
    if (!l || !u || !f)
      throw new Error("Some indentation/whitespace tokens not found!");
    return c.length > 0 ? {
      modes: {
        [kn.REGULAR]: [l, u, ...d, f],
        [kn.IGNORE_INDENTATION]: [...d, f]
      },
      defaultMode: kn.REGULAR
    } : [l, u, f, ...d];
  }
  flushLexingReport(e) {
    return {
      ...super.flushLexingReport(e),
      remainingDedents: this.flushRemainingDedents(e)
    };
  }
  /**
   * Helper function to check if the current position is the start of a new line.
   *
   * @param text The full input string.
   * @param offset The current position at which to check
   * @returns Whether the current position is the start of a new line
   */
  isStartOfLine(e, r) {
    return r === 0 || `\r
`.includes(e[r - 1]);
  }
  /**
   * A helper function used in matching both indents and dedents.
   *
   * @param text The full input string.
   * @param offset The current position at which to attempt a match
   * @param tokens Previously scanned tokens
   * @param groups Token Groups
   * @returns The current and previous indentation levels and the matched whitespace
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  matchWhitespace(e, r, n, a) {
    this.whitespaceRegExp.lastIndex = r;
    const i = this.whitespaceRegExp.exec(e);
    return {
      currIndentLevel: i?.[0].length ?? 0,
      prevIndentLevel: this.indentationStack.at(-1),
      match: i
    };
  }
  /**
   * Helper function to create an instance of an indentation token.
   *
   * @param tokenType Indent or dedent token type
   * @param text Full input string, used to calculate the line number
   * @param image The original image of the token (tabs or spaces)
   * @param offset Current position in the input string
   * @returns The indentation token instance
   */
  createIndentationTokenInstance(e, r, n, a) {
    const i = this.getLineNumber(r, a);
    return Ic(e, n, a, a + n.length, i, i, 1, n.length);
  }
  /**
   * Helper function to get the line number at a given offset.
   *
   * @param text Full input string, used to calculate the line number
   * @param offset Current position in the input string
   * @returns The line number at the given offset
   */
  getLineNumber(e, r) {
    return e.substring(0, r).split(/\r\n|\r|\n/).length;
  }
  /**
   * A custom pattern for matching indents
   *
   * @param text The full input string.
   * @param offset The offset at which to attempt a match
   * @param tokens Previously scanned tokens
   * @param groups Token Groups
   */
  indentMatcher(e, r, n, a) {
    if (!this.isStartOfLine(e, r))
      return null;
    const { currIndentLevel: i, prevIndentLevel: o, match: c } = this.matchWhitespace(e, r, n, a);
    return i <= o ? null : (this.indentationStack.push(i), c);
  }
  /**
   * A custom pattern for matching dedents
   *
   * @param text The full input string.
   * @param offset The offset at which to attempt a match
   * @param tokens Previously scanned tokens
   * @param groups Token Groups
   */
  dedentMatcher(e, r, n, a) {
    if (!this.isStartOfLine(e, r))
      return null;
    const { currIndentLevel: i, prevIndentLevel: o, match: c } = this.matchWhitespace(e, r, n, a);
    if (i >= o)
      return null;
    const l = this.indentationStack.lastIndexOf(i);
    if (l === -1)
      return this.diagnostics.push({
        severity: "error",
        message: `Invalid dedent level ${i} at offset: ${r}. Current indentation stack: ${this.indentationStack}`,
        offset: r,
        length: c?.[0]?.length ?? 0,
        line: this.getLineNumber(e, r),
        column: 1
      }), null;
    const u = this.indentationStack.length - l - 1, f = e.substring(0, r).match(/[\r\n]+$/)?.[0].length ?? 1;
    for (let d = 0; d < u; d++) {
      const p = this.createIndentationTokenInstance(
        this.dedentTokenType,
        e,
        "",
        // Dedents are 0-width tokens
        r - (f - 1)
      );
      n.push(p), this.indentationStack.pop();
    }
    return null;
  }
  buildTerminalToken(e) {
    const r = super.buildTerminalToken(e), { indentTokenName: n, dedentTokenName: a, whitespaceTokenName: i } = this.options;
    return r.name === n ? this.indentTokenType : r.name === a ? this.dedentTokenType : r.name === i ? Ga({
      name: i,
      pattern: this.whitespaceRegExp,
      group: st.SKIPPED
    }) : r;
  }
  /**
   * Resets the indentation stack between different runs of the lexer
   *
   * @param text Full text that was tokenized
   * @returns Remaining dedent tokens to match all previous indents at the end of the file
   */
  flushRemainingDedents(e) {
    const r = [];
    for (; this.indentationStack.length > 1; )
      r.push(this.createIndentationTokenInstance(this.dedentTokenType, e, "", e.length)), this.indentationStack.pop();
    return this.indentationStack = [0], r;
  }
}, s(Zs, "IndentationAwareTokenBuilder"), Zs), Qs, Uj = (Qs = class extends dy {
  constructor(e) {
    if (super(e), e.parser.TokenBuilder instanceof iN)
      this.indentationTokenBuilder = e.parser.TokenBuilder;
    else
      throw new Error("IndentationAwareLexer requires an accompanying IndentationAwareTokenBuilder");
  }
  tokenize(e, r = fy) {
    const n = super.tokenize(e), a = n.report;
    r?.mode === "full" && n.tokens.push(...a.remainingDedents), a.remainingDedents = [];
    const { indentTokenType: i, dedentTokenType: o } = this.indentationTokenBuilder, c = i.tokenTypeIdx, l = o.tokenTypeIdx, u = [], f = n.tokens.length - 1;
    for (let d = 0; d < f; d++) {
      const p = n.tokens[d], g = n.tokens[d + 1];
      if (p.tokenTypeIdx === c && g.tokenTypeIdx === l) {
        d++;
        continue;
      }
      u.push(p);
    }
    return f >= 0 && u.push(n.tokens[f]), n.tokens = u, n;
  }
}, s(Qs, "IndentationAwareLexer"), Qs), $y = {};
Jr($y, {
  AstUtils: () => Kh,
  BiMap: () => af,
  Cancellation: () => $e,
  ContextCache: () => hd,
  CstUtils: () => Uh,
  DONE_RESULT: () => nt,
  Deferred: () => Pr,
  Disposable: () => On,
  DisposableCache: () => pd,
  DocumentCache: () => wI,
  EMPTY_STREAM: () => bo,
  ErrorWithLocation: () => Rf,
  GrammarUtils: () => Rm,
  MultiMap: () => Or,
  OperationCancelled: () => sr,
  Reduction: () => Xl,
  RegExpUtils: () => Am,
  SimpleCache: () => sy,
  StreamImpl: () => ir,
  TreeStreamImpl: () => So,
  URI: () => Rt,
  UriTrie: () => ay,
  UriUtils: () => it,
  WorkspaceCache: () => oy,
  assertCondition: () => $m,
  assertUnreachable: () => Zr,
  delayNextTick: () => fd,
  interruptAndCheck: () => Ye,
  isOperationCancelled: () => sa,
  loadGrammarFromJson: () => wt,
  setInterruptionPeriod: () => ty,
  startCancelableOperation: () => dd,
  stream: () => ue
});
cf($y, md);
var eo, sN = (eo = class {
  stat(e) {
    throw new Error("No file system is available.");
  }
  statSync(e) {
    throw new Error("No file system is available.");
  }
  async exists() {
    return !1;
  }
  existsSync() {
    return !1;
  }
  readBinary() {
    throw new Error("No file system is available.");
  }
  readBinarySync() {
    throw new Error("No file system is available.");
  }
  readFile() {
    throw new Error("No file system is available.");
  }
  readFileSync() {
    throw new Error("No file system is available.");
  }
  async readDirectory() {
    return [];
  }
  readDirectorySync() {
    return [];
  }
}, s(eo, "EmptyFileSystemProvider"), eo), Gt = {
  fileSystemProvider: /* @__PURE__ */ s(() => new sN(), "fileSystemProvider")
}, zj = {
  Grammar: /* @__PURE__ */ s(() => {
  }, "Grammar"),
  LanguageMetaData: /* @__PURE__ */ s(() => ({
    caseInsensitive: !1,
    fileExtensions: [".langium"],
    languageId: "langium"
  }), "LanguageMetaData")
}, Bj = {
  AstReflection: /* @__PURE__ */ s(() => new fm(), "AstReflection")
};
function oN() {
  const t = ke(St(Gt), Bj), e = ke(bt({ shared: t }), zj);
  return t.ServiceRegistry.register(e), e;
}
s(oN, "createMinimalGrammarServices");
function wt(t) {
  const e = oN(), r = e.serializer.JsonSerializer.deserialize(t);
  return e.shared.workspace.LangiumDocumentFactory.fromModel(r, Rt.parse(`memory:/${r.name ?? "grammar"}.langium`)), r;
}
s(wt, "loadGrammarFromJson");
cf(yT, $y);
var to, Kj = (to = class {
  constructor(e) {
    this.activeCategories = /* @__PURE__ */ new Set(), this.allCategories = /* @__PURE__ */ new Set(["validating", "parsing", "linking"]), this.activeCategories = e ?? new Set(this.allCategories), this.records = new Or();
  }
  isActive(e) {
    return this.activeCategories.has(e);
  }
  start(...e) {
    e ? e.forEach((r) => this.activeCategories.add(r)) : this.activeCategories = new Set(this.allCategories);
  }
  stop(...e) {
    e ? e.forEach((r) => this.activeCategories.delete(r)) : this.activeCategories.clear();
  }
  createTask(e, r) {
    if (!this.isActive(e))
      throw new Error(`Category "${e}" is not active.`);
    return console.log(`Creating profiling task for '${e}.${r}'.`), new lN((n) => this.records.add(e, this.dumpRecord(e, n)), r);
  }
  dumpRecord(e, r) {
    console.info(`Task ${e}.${r.identifier} executed in ${r.duration.toFixed(2)}ms and ended at ${r.date.toISOString()}`);
    const n = [];
    for (const o of r.entries.keys()) {
      const c = r.entries.get(o), l = c.reduce((u, f) => u + f);
      n.push({ name: `${r.identifier}.${o}`, count: c.length, duration: l });
    }
    const a = r.duration - n.map((o) => o.duration).reduce((o, c) => o + c, 0);
    n.push({ name: r.identifier, count: 1, duration: a }), n.sort((o, c) => c.duration - o.duration);
    function i(o) {
      return Math.round(100 * o) / 100;
    }
    return s(i, "Round"), console.table(n.map((o) => ({ Element: o.name, Count: o.count, "Self %": i(100 * o.duration / r.duration), "Time (ms)": i(o.duration) }))), r;
  }
  getRecords(...e) {
    return e.length === 0 ? this.records.values() : this.records.entries().filter((r) => e.some((n) => n === r[0])).flatMap((r) => r[1]);
  }
}, s(to, "DefaultLangiumProfiler"), to), ro, lN = (ro = class {
  constructor(e, r) {
    this.stack = [], this.entries = new Or(), this.addRecord = e, this.identifier = r;
  }
  start() {
    if (this.startTime !== void 0)
      throw new Error(`Task "${this.identifier}" is already started.`);
    this.startTime = performance.now();
  }
  stop() {
    if (this.startTime === void 0)
      throw new Error(`Task "${this.identifier}" was not started.`);
    if (this.stack.length !== 0)
      throw new Error(`Task "${this.identifier}" cannot be stopped before sub-task(s): ${this.stack.map((r) => r.id).join(", ")}.`);
    const e = {
      identifier: this.identifier,
      date: /* @__PURE__ */ new Date(),
      duration: performance.now() - this.startTime,
      entries: this.entries
    };
    this.addRecord(e), this.startTime = void 0, this.entries.clear();
  }
  startSubTask(e) {
    this.stack.push({ id: e, start: performance.now(), content: 0 });
  }
  stopSubTask(e) {
    const r = this.stack.pop();
    if (!r)
      throw new Error(`Task "${this.identifier}.${e}" was not started.`);
    if (r.id !== e)
      throw new Error(`Sub-Task "${r.id}" is not already stopped.`);
    const n = performance.now() - r.start;
    this.stack.at(-1) !== void 0 && (this.stack[this.stack.length - 1].content += n);
    const a = n - r.content;
    this.entries.add(e, a);
  }
}, s(ro, "ProfilingTask"), ro), bh;
((t) => {
  t.Terminals = {
    ARROW_DIRECTION: /L|R|T|B/,
    ARROW_GROUP: /\{group\}/,
    ARROW_INTO: /<|>/,
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
    ID: /[\w]([-\w]*\w)?/,
    NEWLINE: /\r?\n/,
    WHITESPACE: /[\t ]+/,
    YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
    ARCH_ICON: /\([\w-:]+\)/,
    ARCH_TITLE: /\[(?:"([^"\\]|\\.)*"|'([^'\\]|\\.)*'|[\w ]+)\]/
  };
})(bh || (bh = {}));
var Sh;
((t) => {
  t.Terminals = {
    EM_ID: /[_a-zA-Z][\w_]*/,
    EM_FID: /\d{1,3}/,
    EM_DATA_INLINE: /\{(.*)\}|"(.*)"|'(.*)'/,
    EM_DATA_BLOCK: /\{[\t ]*\r?\n(?:[\S\s]*?\r?\n)?\}(?:\r?\n|(?!\S))/,
    EM_ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    EM_ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    EM_TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    EM_WS: /\s+/,
    EM_YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    EM_DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    EM_SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
    EM_ML_COMMENT: /\/\*[\s\S]*?\*\//,
    EM_SL_COMMENT: /\/\/[^\n\r]*/
  };
})(Sh || (Sh = {}));
var wh;
((t) => {
  t.Terminals = {
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    INT: /0|[1-9][0-9]*(?!\.)/,
    STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
    NEWLINE: /\r?\n/,
    WHITESPACE: /[\t ]+/,
    YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/,
    REFERENCE: /\w([-\./\w]*[-\w])?/
  };
})(wh || (wh = {}));
var Ih;
((t) => {
  t.Terminals = {
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    NEWLINE: /\r?\n/,
    WHITESPACE: /[\t ]+/,
    YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
  };
})(Ih || (Ih = {}));
var Nh;
((t) => {
  t.Terminals = {
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    INT: /0|[1-9][0-9]*(?!\.)/,
    STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
    NEWLINE: /\r?\n/,
    WHITESPACE: /[\t ]+/,
    YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
  };
})(Nh || (Nh = {}));
var kh;
((t) => {
  t.Terminals = {
    NUMBER_PIE: /(?:-?[0-9]+\.[0-9]+(?!\.))|(?:-?(0|[1-9][0-9]*)(?!\.))/,
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
    NEWLINE: /\r?\n/,
    WHITESPACE: /[\t ]+/,
    YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
  };
})(kh || (kh = {}));
var Ph;
((t) => {
  t.Terminals = {
    GRATICULE: /circle|polygon/,
    BOOLEAN: /true|false/,
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    NUMBER: /(?:[0-9]+\.[0-9]+(?!\.))|(?:0|[1-9][0-9]*(?!\.))/,
    STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
    ID: /[\w]([-\w]*\w)?/,
    NEWLINE: /\r?\n/,
    WHITESPACE: /[\t ]+/,
    YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
  };
})(Ph || (Ph = {}));
var Oh;
((t) => {
  t.Terminals = {
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    TREEMAP_KEYWORD: /treemap-beta|treemap/,
    CLASS_DEF: /classDef\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\s+([^;\r\n]*))?(?:;)?/,
    STYLE_SEPARATOR: /:::/,
    SEPARATOR: /:/,
    COMMA: /,/,
    INDENTATION: /[ \t]{1,}/,
    WS: /[ \t]+/,
    ML_COMMENT: /\%\%[^\n]*/,
    NL: /\r?\n/,
    ID2: /[a-zA-Z_][a-zA-Z0-9_]*/,
    NUMBER2: /[0-9_\.\,]+/,
    STRING2: /"[^"]*"|'[^']*'/
  };
})(Oh || (Oh = {}));
var Lh;
((t) => {
  t.Terminals = {
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    INDENTATION: /[ \t]{1,}/,
    WS: /[ \t]+/,
    ML_COMMENT: /\%\%[^\n]*/,
    NL: /\r?\n/,
    STRING2: /"[^"]*"|'[^']*'/
  };
})(Lh || (Lh = {}));
var Dh;
((t) => {
  t.Terminals = {
    WARDLEY_NUMBER: /[0-9]+\.[0-9]+/,
    ARROW: /->/,
    LINK_PORT: /\+<>|\+>|\+</,
    LINK_ARROW: /-->|-\.->|>|\+'[^']*'<>|\+'[^']*'<|\+'[^']*'>/,
    LINK_LABEL: /;[^\n\r]+/,
    STRATEGY: /build|buy|outsource|market/,
    KW_WARDLEY: /wardley-beta/,
    KW_SIZE: /size/,
    KW_EVOLUTION: /evolution/,
    KW_ANCHOR: /anchor/,
    KW_COMPONENT: /component/,
    KW_LABEL: /label/,
    KW_INERTIA: /inertia/,
    KW_EVOLVE: /evolve/,
    KW_PIPELINE: /pipeline/,
    KW_NOTE: /note/,
    KW_ANNOTATIONS: /annotations/,
    KW_ANNOTATION: /annotation/,
    KW_ACCELERATOR: /accelerator/,
    KW_DEACCELERATOR: /deaccelerator/,
    NAME_WITH_SPACES: /(?!title\s|accTitle|accDescr)[A-Za-z](?:[A-Za-z0-9_()&]|-(?!>))*(?:[ \t]+[A-Za-z(](?:[A-Za-z0-9_()&]|-(?!>))*)*/,
    WS: /[ \t]+/,
    ACC_DESCR: /[\t ]*accDescr(?:[\t ]*:([^\n\r]*?(?=%%)|[^\n\r]*)|\s*{([^}]*)})/,
    ACC_TITLE: /[\t ]*accTitle[\t ]*:(?:[^\n\r]*?(?=%%)|[^\n\r]*)/,
    TITLE: /[\t ]*title(?:[\t ][^\n\r]*?(?=%%)|[\t ][^\n\r]*|)/,
    INT: /0|[1-9][0-9]*(?!\.)/,
    STRING: /"([^"\\]|\\.)*"|'([^'\\]|\\.)*'/,
    ID: /[\w]([-\w]*\w)?/,
    NEWLINE: /\r?\n/,
    WHITESPACE: /[\t ]+/,
    YAML: /---[\t ]*\r?\n(?:[\S\s]*?\r?\n)?---(?:\r?\n|(?!\S))/,
    DIRECTIVE: /[\t ]*%%{[\S\s]*?}%%(?:\r?\n|(?!\S))/,
    SINGLE_LINE_COMMENT: /[\t ]*%%[^\n\r]*/
  };
})(Dh || (Dh = {}));
({
  ...bh.Terminals,
  ...Sh.Terminals,
  ...wh.Terminals,
  ...Ih.Terminals,
  ...Nh.Terminals,
  ...kh.Terminals,
  ...Ph.Terminals,
  ...Lh.Terminals,
  ...Oh.Terminals,
  ...Dh.Terminals
});
var Uc = {
  $type: "Accelerator",
  name: "name",
  x: "x",
  y: "y"
}, zc = {
  $type: "Anchor",
  evolution: "evolution",
  name: "name",
  visibility: "visibility"
}, gl = {
  $type: "Annotation",
  number: "number",
  text: "text",
  x: "x",
  y: "y"
}, Id = {
  $type: "Annotations",
  x: "x",
  y: "y"
}, Tr = {
  $type: "Architecture",
  accDescr: "accDescr",
  accTitle: "accTitle",
  edges: "edges",
  groups: "groups",
  junctions: "junctions",
  services: "services",
  title: "title"
};
function qj(t) {
  return It.isInstance(t, Tr.$type);
}
s(qj, "isArchitecture");
var Bc = {
  $type: "Axis",
  label: "label",
  name: "name"
}, Tu = {
  $type: "Branch",
  name: "name",
  order: "order"
};
function Wj(t) {
  return It.isInstance(t, Tu.$type);
}
s(Wj, "isBranch");
var Hv = {
  $type: "Checkout",
  branch: "branch"
}, Kc = {
  $type: "CherryPicking",
  id: "id",
  parent: "parent",
  tags: "tags"
}, Nd = {
  $type: "ClassDefStatement",
  className: "className",
  styleText: "styleText"
}, _a = {
  $type: "Commit",
  id: "id",
  message: "message",
  tags: "tags",
  type: "type"
};
function Vj(t) {
  return It.isInstance(t, _a.$type);
}
s(Vj, "isCommit");
var qc = {
  $type: "Common",
  accDescr: "accDescr",
  accTitle: "accTitle",
  title: "title"
}, nn = {
  $type: "Component",
  decorator: "decorator",
  evolution: "evolution",
  inertia: "inertia",
  label: "label",
  name: "name",
  visibility: "visibility"
}, Wc = {
  $type: "Curve",
  entries: "entries",
  label: "label",
  name: "name"
}, Vc = {
  $type: "Deaccelerator",
  name: "name",
  x: "x",
  y: "y"
}, Yv = {
  $type: "Decorator",
  strategy: "strategy"
}, ha = {
  $type: "Direction",
  accDescr: "accDescr",
  accTitle: "accTitle",
  dir: "dir",
  statements: "statements",
  title: "title"
}, er = {
  $type: "Edge",
  lhsDir: "lhsDir",
  lhsGroup: "lhsGroup",
  lhsId: "lhsId",
  lhsInto: "lhsInto",
  rhsDir: "rhsDir",
  rhsGroup: "rhsGroup",
  rhsId: "rhsId",
  rhsInto: "rhsInto",
  title: "title"
}, ma = {
  $type: "EmDataEntity",
  dataBlockValue: "dataBlockValue",
  dataType: "dataType",
  name: "name"
}, an = {
  $type: "EmFrame"
}, yl = {
  $type: "EmGwt",
  givenStatements: "givenStatements",
  sourceFrame: "sourceFrame",
  thenStatements: "thenStatements",
  whenStatements: "whenStatements"
}, Xv = {
  $type: "EmGwtStatement",
  entityIdentifier: "entityIdentifier"
}, kd = {
  $type: "EmModelEntity",
  name: "name"
};
function Hj(t) {
  return t === "rmo" || t === "readmodel" || t === "ui" || t === "cmd" || t === "command" || t === "evt" || t === "event" || t === "pcr" || t === "processor";
}
s(Hj, "isEmModelEntityType");
var Hc = {
  $type: "EmNoteEntity",
  dataBlockValue: "dataBlockValue",
  dataType: "dataType",
  sourceFrame: "sourceFrame"
}, Rr = {
  $type: "EmResetFrame",
  dataInlineValue: "dataInlineValue",
  dataReference: "dataReference",
  dataType: "dataType",
  entityIdentifier: "entityIdentifier",
  modelEntityType: "modelEntityType",
  name: "name",
  sourceFrames: "sourceFrames"
};
function Yj(t) {
  return It.isInstance(t, Rr.$type);
}
s(Yj, "isEmResetFrame");
var Gr = {
  $type: "EmTimeFrame",
  dataInlineValue: "dataInlineValue",
  dataReference: "dataReference",
  dataType: "dataType",
  entityIdentifier: "entityIdentifier",
  modelEntityType: "modelEntityType",
  name: "name",
  sourceFrames: "sourceFrames"
}, Pd = {
  $type: "Entry",
  axis: "axis",
  value: "value"
}, yr = {
  $type: "EventModel",
  accDescr: "accDescr",
  accTitle: "accTitle",
  dataEntities: "dataEntities",
  frames: "frames",
  gwtEntities: "gwtEntities",
  modelEntities: "modelEntities",
  noteEntities: "noteEntities",
  title: "title"
}, Jv = {
  $type: "Evolution",
  stages: "stages"
}, Yc = {
  $type: "EvolutionStage",
  boundary: "boundary",
  name: "name",
  secondName: "secondName"
}, Od = {
  $type: "Evolve",
  component: "component",
  target: "target"
}, hn = {
  $type: "GitGraph",
  accDescr: "accDescr",
  accTitle: "accTitle",
  statements: "statements",
  title: "title"
};
function Xj(t) {
  return It.isInstance(t, hn.$type);
}
s(Xj, "isGitGraph");
var vl = {
  $type: "Group",
  icon: "icon",
  id: "id",
  in: "in",
  title: "title"
}, Ol = {
  $type: "Info",
  accDescr: "accDescr",
  accTitle: "accTitle",
  title: "title"
};
function Jj(t) {
  return It.isInstance(t, Ol.$type);
}
s(Jj, "isInfo");
var Tl = {
  $type: "Item",
  classSelector: "classSelector",
  name: "name"
}, Ld = {
  $type: "Junction",
  id: "id",
  in: "in"
}, Rl = {
  $type: "Label",
  negX: "negX",
  negY: "negY",
  offsetX: "offsetX",
  offsetY: "offsetY"
}, Xc = {
  $type: "Leaf",
  classSelector: "classSelector",
  name: "name",
  value: "value"
}, sn = {
  $type: "Link",
  arrow: "arrow",
  from: "from",
  fromPort: "fromPort",
  linkLabel: "linkLabel",
  to: "to",
  toPort: "toPort"
}, Ca = {
  $type: "Merge",
  branch: "branch",
  id: "id",
  tags: "tags",
  type: "type"
};
function Zj(t) {
  return It.isInstance(t, Ca.$type);
}
s(Zj, "isMerge");
var Jc = {
  $type: "Note",
  evolution: "evolution",
  text: "text",
  visibility: "visibility"
}, Dd = {
  $type: "Option",
  name: "name",
  value: "value"
}, ba = {
  $type: "Packet",
  accDescr: "accDescr",
  accTitle: "accTitle",
  blocks: "blocks",
  title: "title"
};
function Qj(t) {
  return It.isInstance(t, ba.$type);
}
s(Qj, "isPacket");
var Sa = {
  $type: "PacketBlock",
  bits: "bits",
  end: "end",
  label: "label",
  start: "start"
};
function eU(t) {
  return It.isInstance(t, Sa.$type);
}
s(eU, "isPacketBlock");
var mn = {
  $type: "Pie",
  accDescr: "accDescr",
  accTitle: "accTitle",
  sections: "sections",
  showData: "showData",
  title: "title"
};
function tU(t) {
  return It.isInstance(t, mn.$type);
}
s(tU, "isPie");
var Ru = {
  $type: "PieSection",
  label: "label",
  value: "value"
};
function rU(t) {
  return It.isInstance(t, Ru.$type);
}
s(rU, "isPieSection");
var Md = {
  $type: "Pipeline",
  components: "components",
  parent: "parent"
}, Zc = {
  $type: "PipelineComponent",
  evolution: "evolution",
  label: "label",
  name: "name"
}, on = {
  $type: "Radar",
  accDescr: "accDescr",
  accTitle: "accTitle",
  axes: "axes",
  curves: "curves",
  options: "options",
  title: "title"
}, xd = {
  $type: "Section",
  classSelector: "classSelector",
  name: "name"
}, ga = {
  $type: "Service",
  icon: "icon",
  iconText: "iconText",
  id: "id",
  in: "in",
  title: "title"
}, Fd = {
  $type: "Size",
  height: "height",
  width: "width"
}, ya = {
  $type: "Statement"
}, wa = {
  $type: "Treemap",
  accDescr: "accDescr",
  accTitle: "accTitle",
  title: "title",
  TreemapRows: "TreemapRows"
};
function nU(t) {
  return It.isInstance(t, wa.$type);
}
s(nU, "isTreemap");
var Gd = {
  $type: "TreemapRow",
  indent: "indent",
  item: "item"
}, jd = {
  $type: "TreeNode",
  indent: "indent",
  name: "name"
}, $l = {
  $type: "TreeView",
  accDescr: "accDescr",
  accTitle: "accTitle",
  nodes: "nodes",
  title: "title"
}, Je = {
  $type: "Wardley",
  accDescr: "accDescr",
  accelerators: "accelerators",
  accTitle: "accTitle",
  anchors: "anchors",
  annotation: "annotation",
  annotations: "annotations",
  components: "components",
  deaccelerators: "deaccelerators",
  evolution: "evolution",
  evolves: "evolves",
  links: "links",
  notes: "notes",
  pipelines: "pipelines",
  size: "size",
  title: "title"
};
function aU(t) {
  return It.isInstance(t, Je.$type);
}
s(aU, "isWardley");
var no, cN = (no = class extends Bh {
  constructor() {
    super(...arguments), this.types = {
      Accelerator: {
        name: Uc.$type,
        properties: {
          name: {
            name: Uc.name
          },
          x: {
            name: Uc.x
          },
          y: {
            name: Uc.y
          }
        },
        superTypes: []
      },
      Anchor: {
        name: zc.$type,
        properties: {
          evolution: {
            name: zc.evolution
          },
          name: {
            name: zc.name
          },
          visibility: {
            name: zc.visibility
          }
        },
        superTypes: []
      },
      Annotation: {
        name: gl.$type,
        properties: {
          number: {
            name: gl.number
          },
          text: {
            name: gl.text
          },
          x: {
            name: gl.x
          },
          y: {
            name: gl.y
          }
        },
        superTypes: []
      },
      Annotations: {
        name: Id.$type,
        properties: {
          x: {
            name: Id.x
          },
          y: {
            name: Id.y
          }
        },
        superTypes: []
      },
      Architecture: {
        name: Tr.$type,
        properties: {
          accDescr: {
            name: Tr.accDescr
          },
          accTitle: {
            name: Tr.accTitle
          },
          edges: {
            name: Tr.edges,
            defaultValue: []
          },
          groups: {
            name: Tr.groups,
            defaultValue: []
          },
          junctions: {
            name: Tr.junctions,
            defaultValue: []
          },
          services: {
            name: Tr.services,
            defaultValue: []
          },
          title: {
            name: Tr.title
          }
        },
        superTypes: []
      },
      Axis: {
        name: Bc.$type,
        properties: {
          label: {
            name: Bc.label
          },
          name: {
            name: Bc.name
          }
        },
        superTypes: []
      },
      Branch: {
        name: Tu.$type,
        properties: {
          name: {
            name: Tu.name
          },
          order: {
            name: Tu.order
          }
        },
        superTypes: [ya.$type]
      },
      Checkout: {
        name: Hv.$type,
        properties: {
          branch: {
            name: Hv.branch
          }
        },
        superTypes: [ya.$type]
      },
      CherryPicking: {
        name: Kc.$type,
        properties: {
          id: {
            name: Kc.id
          },
          parent: {
            name: Kc.parent
          },
          tags: {
            name: Kc.tags,
            defaultValue: []
          }
        },
        superTypes: [ya.$type]
      },
      ClassDefStatement: {
        name: Nd.$type,
        properties: {
          className: {
            name: Nd.className
          },
          styleText: {
            name: Nd.styleText
          }
        },
        superTypes: []
      },
      Commit: {
        name: _a.$type,
        properties: {
          id: {
            name: _a.id
          },
          message: {
            name: _a.message
          },
          tags: {
            name: _a.tags,
            defaultValue: []
          },
          type: {
            name: _a.type
          }
        },
        superTypes: [ya.$type]
      },
      Common: {
        name: qc.$type,
        properties: {
          accDescr: {
            name: qc.accDescr
          },
          accTitle: {
            name: qc.accTitle
          },
          title: {
            name: qc.title
          }
        },
        superTypes: []
      },
      Component: {
        name: nn.$type,
        properties: {
          decorator: {
            name: nn.decorator
          },
          evolution: {
            name: nn.evolution
          },
          inertia: {
            name: nn.inertia,
            defaultValue: !1
          },
          label: {
            name: nn.label
          },
          name: {
            name: nn.name
          },
          visibility: {
            name: nn.visibility
          }
        },
        superTypes: []
      },
      Curve: {
        name: Wc.$type,
        properties: {
          entries: {
            name: Wc.entries,
            defaultValue: []
          },
          label: {
            name: Wc.label
          },
          name: {
            name: Wc.name
          }
        },
        superTypes: []
      },
      Deaccelerator: {
        name: Vc.$type,
        properties: {
          name: {
            name: Vc.name
          },
          x: {
            name: Vc.x
          },
          y: {
            name: Vc.y
          }
        },
        superTypes: []
      },
      Decorator: {
        name: Yv.$type,
        properties: {
          strategy: {
            name: Yv.strategy
          }
        },
        superTypes: []
      },
      Direction: {
        name: ha.$type,
        properties: {
          accDescr: {
            name: ha.accDescr
          },
          accTitle: {
            name: ha.accTitle
          },
          dir: {
            name: ha.dir
          },
          statements: {
            name: ha.statements,
            defaultValue: []
          },
          title: {
            name: ha.title
          }
        },
        superTypes: [hn.$type]
      },
      Edge: {
        name: er.$type,
        properties: {
          lhsDir: {
            name: er.lhsDir
          },
          lhsGroup: {
            name: er.lhsGroup,
            defaultValue: !1
          },
          lhsId: {
            name: er.lhsId
          },
          lhsInto: {
            name: er.lhsInto,
            defaultValue: !1
          },
          rhsDir: {
            name: er.rhsDir
          },
          rhsGroup: {
            name: er.rhsGroup,
            defaultValue: !1
          },
          rhsId: {
            name: er.rhsId
          },
          rhsInto: {
            name: er.rhsInto,
            defaultValue: !1
          },
          title: {
            name: er.title
          }
        },
        superTypes: []
      },
      EmDataEntity: {
        name: ma.$type,
        properties: {
          dataBlockValue: {
            name: ma.dataBlockValue
          },
          dataType: {
            name: ma.dataType
          },
          name: {
            name: ma.name
          }
        },
        superTypes: []
      },
      EmFrame: {
        name: an.$type,
        properties: {},
        superTypes: []
      },
      EmGwt: {
        name: yl.$type,
        properties: {
          givenStatements: {
            name: yl.givenStatements,
            defaultValue: []
          },
          sourceFrame: {
            name: yl.sourceFrame,
            referenceType: an.$type
          },
          thenStatements: {
            name: yl.thenStatements,
            defaultValue: []
          },
          whenStatements: {
            name: yl.whenStatements,
            defaultValue: []
          }
        },
        superTypes: []
      },
      EmGwtStatement: {
        name: Xv.$type,
        properties: {
          entityIdentifier: {
            name: Xv.entityIdentifier,
            referenceType: kd.$type
          }
        },
        superTypes: []
      },
      EmModelEntity: {
        name: kd.$type,
        properties: {
          name: {
            name: kd.name
          }
        },
        superTypes: []
      },
      EmNoteEntity: {
        name: Hc.$type,
        properties: {
          dataBlockValue: {
            name: Hc.dataBlockValue
          },
          dataType: {
            name: Hc.dataType
          },
          sourceFrame: {
            name: Hc.sourceFrame,
            referenceType: an.$type
          }
        },
        superTypes: []
      },
      EmResetFrame: {
        name: Rr.$type,
        properties: {
          dataInlineValue: {
            name: Rr.dataInlineValue
          },
          dataReference: {
            name: Rr.dataReference,
            referenceType: ma.$type
          },
          dataType: {
            name: Rr.dataType
          },
          entityIdentifier: {
            name: Rr.entityIdentifier
          },
          modelEntityType: {
            name: Rr.modelEntityType
          },
          name: {
            name: Rr.name
          },
          sourceFrames: {
            name: Rr.sourceFrames,
            defaultValue: [],
            referenceType: an.$type
          }
        },
        superTypes: [an.$type]
      },
      EmTimeFrame: {
        name: Gr.$type,
        properties: {
          dataInlineValue: {
            name: Gr.dataInlineValue
          },
          dataReference: {
            name: Gr.dataReference,
            referenceType: ma.$type
          },
          dataType: {
            name: Gr.dataType
          },
          entityIdentifier: {
            name: Gr.entityIdentifier
          },
          modelEntityType: {
            name: Gr.modelEntityType
          },
          name: {
            name: Gr.name
          },
          sourceFrames: {
            name: Gr.sourceFrames,
            defaultValue: [],
            referenceType: an.$type
          }
        },
        superTypes: [an.$type]
      },
      Entry: {
        name: Pd.$type,
        properties: {
          axis: {
            name: Pd.axis,
            referenceType: Bc.$type
          },
          value: {
            name: Pd.value
          }
        },
        superTypes: []
      },
      EventModel: {
        name: yr.$type,
        properties: {
          accDescr: {
            name: yr.accDescr
          },
          accTitle: {
            name: yr.accTitle
          },
          dataEntities: {
            name: yr.dataEntities,
            defaultValue: []
          },
          frames: {
            name: yr.frames,
            defaultValue: []
          },
          gwtEntities: {
            name: yr.gwtEntities,
            defaultValue: []
          },
          modelEntities: {
            name: yr.modelEntities,
            defaultValue: []
          },
          noteEntities: {
            name: yr.noteEntities,
            defaultValue: []
          },
          title: {
            name: yr.title
          }
        },
        superTypes: []
      },
      Evolution: {
        name: Jv.$type,
        properties: {
          stages: {
            name: Jv.stages,
            defaultValue: []
          }
        },
        superTypes: []
      },
      EvolutionStage: {
        name: Yc.$type,
        properties: {
          boundary: {
            name: Yc.boundary
          },
          name: {
            name: Yc.name
          },
          secondName: {
            name: Yc.secondName
          }
        },
        superTypes: []
      },
      Evolve: {
        name: Od.$type,
        properties: {
          component: {
            name: Od.component
          },
          target: {
            name: Od.target
          }
        },
        superTypes: []
      },
      GitGraph: {
        name: hn.$type,
        properties: {
          accDescr: {
            name: hn.accDescr
          },
          accTitle: {
            name: hn.accTitle
          },
          statements: {
            name: hn.statements,
            defaultValue: []
          },
          title: {
            name: hn.title
          }
        },
        superTypes: []
      },
      Group: {
        name: vl.$type,
        properties: {
          icon: {
            name: vl.icon
          },
          id: {
            name: vl.id
          },
          in: {
            name: vl.in
          },
          title: {
            name: vl.title
          }
        },
        superTypes: []
      },
      Info: {
        name: Ol.$type,
        properties: {
          accDescr: {
            name: Ol.accDescr
          },
          accTitle: {
            name: Ol.accTitle
          },
          title: {
            name: Ol.title
          }
        },
        superTypes: []
      },
      Item: {
        name: Tl.$type,
        properties: {
          classSelector: {
            name: Tl.classSelector
          },
          name: {
            name: Tl.name
          }
        },
        superTypes: []
      },
      Junction: {
        name: Ld.$type,
        properties: {
          id: {
            name: Ld.id
          },
          in: {
            name: Ld.in
          }
        },
        superTypes: []
      },
      Label: {
        name: Rl.$type,
        properties: {
          negX: {
            name: Rl.negX,
            defaultValue: !1
          },
          negY: {
            name: Rl.negY,
            defaultValue: !1
          },
          offsetX: {
            name: Rl.offsetX
          },
          offsetY: {
            name: Rl.offsetY
          }
        },
        superTypes: []
      },
      Leaf: {
        name: Xc.$type,
        properties: {
          classSelector: {
            name: Xc.classSelector
          },
          name: {
            name: Xc.name
          },
          value: {
            name: Xc.value
          }
        },
        superTypes: [Tl.$type]
      },
      Link: {
        name: sn.$type,
        properties: {
          arrow: {
            name: sn.arrow
          },
          from: {
            name: sn.from
          },
          fromPort: {
            name: sn.fromPort
          },
          linkLabel: {
            name: sn.linkLabel
          },
          to: {
            name: sn.to
          },
          toPort: {
            name: sn.toPort
          }
        },
        superTypes: []
      },
      Merge: {
        name: Ca.$type,
        properties: {
          branch: {
            name: Ca.branch
          },
          id: {
            name: Ca.id
          },
          tags: {
            name: Ca.tags,
            defaultValue: []
          },
          type: {
            name: Ca.type
          }
        },
        superTypes: [ya.$type]
      },
      Note: {
        name: Jc.$type,
        properties: {
          evolution: {
            name: Jc.evolution
          },
          text: {
            name: Jc.text
          },
          visibility: {
            name: Jc.visibility
          }
        },
        superTypes: []
      },
      Option: {
        name: Dd.$type,
        properties: {
          name: {
            name: Dd.name
          },
          value: {
            name: Dd.value,
            defaultValue: !1
          }
        },
        superTypes: []
      },
      Packet: {
        name: ba.$type,
        properties: {
          accDescr: {
            name: ba.accDescr
          },
          accTitle: {
            name: ba.accTitle
          },
          blocks: {
            name: ba.blocks,
            defaultValue: []
          },
          title: {
            name: ba.title
          }
        },
        superTypes: []
      },
      PacketBlock: {
        name: Sa.$type,
        properties: {
          bits: {
            name: Sa.bits
          },
          end: {
            name: Sa.end
          },
          label: {
            name: Sa.label
          },
          start: {
            name: Sa.start
          }
        },
        superTypes: []
      },
      Pie: {
        name: mn.$type,
        properties: {
          accDescr: {
            name: mn.accDescr
          },
          accTitle: {
            name: mn.accTitle
          },
          sections: {
            name: mn.sections,
            defaultValue: []
          },
          showData: {
            name: mn.showData,
            defaultValue: !1
          },
          title: {
            name: mn.title
          }
        },
        superTypes: []
      },
      PieSection: {
        name: Ru.$type,
        properties: {
          label: {
            name: Ru.label
          },
          value: {
            name: Ru.value
          }
        },
        superTypes: []
      },
      Pipeline: {
        name: Md.$type,
        properties: {
          components: {
            name: Md.components,
            defaultValue: []
          },
          parent: {
            name: Md.parent
          }
        },
        superTypes: []
      },
      PipelineComponent: {
        name: Zc.$type,
        properties: {
          evolution: {
            name: Zc.evolution
          },
          label: {
            name: Zc.label
          },
          name: {
            name: Zc.name
          }
        },
        superTypes: []
      },
      Radar: {
        name: on.$type,
        properties: {
          accDescr: {
            name: on.accDescr
          },
          accTitle: {
            name: on.accTitle
          },
          axes: {
            name: on.axes,
            defaultValue: []
          },
          curves: {
            name: on.curves,
            defaultValue: []
          },
          options: {
            name: on.options,
            defaultValue: []
          },
          title: {
            name: on.title
          }
        },
        superTypes: []
      },
      Section: {
        name: xd.$type,
        properties: {
          classSelector: {
            name: xd.classSelector
          },
          name: {
            name: xd.name
          }
        },
        superTypes: [Tl.$type]
      },
      Service: {
        name: ga.$type,
        properties: {
          icon: {
            name: ga.icon
          },
          iconText: {
            name: ga.iconText
          },
          id: {
            name: ga.id
          },
          in: {
            name: ga.in
          },
          title: {
            name: ga.title
          }
        },
        superTypes: []
      },
      Size: {
        name: Fd.$type,
        properties: {
          height: {
            name: Fd.height
          },
          width: {
            name: Fd.width
          }
        },
        superTypes: []
      },
      Statement: {
        name: ya.$type,
        properties: {},
        superTypes: []
      },
      TreeNode: {
        name: jd.$type,
        properties: {
          indent: {
            name: jd.indent
          },
          name: {
            name: jd.name
          }
        },
        superTypes: []
      },
      TreeView: {
        name: $l.$type,
        properties: {
          accDescr: {
            name: $l.accDescr
          },
          accTitle: {
            name: $l.accTitle
          },
          nodes: {
            name: $l.nodes,
            defaultValue: []
          },
          title: {
            name: $l.title
          }
        },
        superTypes: []
      },
      Treemap: {
        name: wa.$type,
        properties: {
          accDescr: {
            name: wa.accDescr
          },
          accTitle: {
            name: wa.accTitle
          },
          title: {
            name: wa.title
          },
          TreemapRows: {
            name: wa.TreemapRows,
            defaultValue: []
          }
        },
        superTypes: []
      },
      TreemapRow: {
        name: Gd.$type,
        properties: {
          indent: {
            name: Gd.indent
          },
          item: {
            name: Gd.item
          }
        },
        superTypes: []
      },
      Wardley: {
        name: Je.$type,
        properties: {
          accDescr: {
            name: Je.accDescr
          },
          accelerators: {
            name: Je.accelerators,
            defaultValue: []
          },
          accTitle: {
            name: Je.accTitle
          },
          anchors: {
            name: Je.anchors,
            defaultValue: []
          },
          annotation: {
            name: Je.annotation,
            defaultValue: []
          },
          annotations: {
            name: Je.annotations,
            defaultValue: []
          },
          components: {
            name: Je.components,
            defaultValue: []
          },
          deaccelerators: {
            name: Je.deaccelerators,
            defaultValue: []
          },
          evolution: {
            name: Je.evolution
          },
          evolves: {
            name: Je.evolves,
            defaultValue: []
          },
          links: {
            name: Je.links,
            defaultValue: []
          },
          notes: {
            name: Je.notes,
            defaultValue: []
          },
          pipelines: {
            name: Je.pipelines,
            defaultValue: []
          },
          size: {
            name: Je.size
          },
          title: {
            name: Je.title
          }
        },
        superTypes: []
      }
    };
  }
}, s(no, "MermaidAstReflection"), no), It = new cN(), Zv, iU = /* @__PURE__ */ s(() => Zv ?? (Zv = wt(`{"$type":"Grammar","isDeclared":true,"name":"ArchitectureGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Architecture","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"architecture-beta"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"groups","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"services","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"junctions","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Assignment","feature":"edges","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"LeftPort","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"lhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"RightPort","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"rhsDir","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Keyword","value":":"}]},"entry":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Arrow","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Assignment","feature":"lhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"--"},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]}},{"$type":"Keyword","value":"-"}]}]},{"$type":"Assignment","feature":"rhsInto","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"Group","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"group"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Service","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"service"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"iconText","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"icon","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]}}],"cardinality":"?"},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Junction","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"junction"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"in"},{"$type":"Assignment","feature":"in","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Edge","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"lhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"lhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Assignment","feature":"rhsId","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"rhsGroup","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"ARROW_DIRECTION","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"L"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"R"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"T"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"B"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_GROUP","definition":{"$type":"RegexToken","regex":"/\\\\{group\\\\}/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW_INTO","definition":{"$type":"RegexToken","regex":"/<|>/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@18"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@19"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","name":"ARCH_ICON","definition":{"$type":"RegexToken","regex":"/\\\\([\\\\w-:]+\\\\)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARCH_TITLE","definition":{"$type":"RegexToken","regex":"/\\\\[(?:\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'|[\\\\w ]+)\\\\]/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[],"types":[]}`)), "ArchitectureGrammarGrammar"), Qv, sU = /* @__PURE__ */ s(() => Qv ?? (Qv = wt('{"$type":"Grammar","isDeclared":true,"name":"EventModeling","interfaces":[{"$type":"Interface","name":"Common","attributes":[{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"rules":[{"$type":"ParserRule","entry":true,"name":"EventModel","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"eventmodeling"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Assignment","feature":"modelEntities","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"frames","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"dataEntities","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"noteEntities","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"gwtEntities","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmModelEntityType","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"rmo"},{"$type":"Keyword","value":"readmodel"},{"$type":"Keyword","value":"ui"},{"$type":"Keyword","value":"cmd"},{"$type":"Keyword","value":"command"},{"$type":"Keyword","value":"evt"},{"$type":"Keyword","value":"event"},{"$type":"Keyword","value":"pcr"},{"$type":"Keyword","value":"processor"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmDataType","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"json"},{"$type":"Keyword","value":"jsobj"},{"$type":"Keyword","value":"figma"},{"$type":"Keyword","value":"salt"},{"$type":"Keyword","value":"uri"},{"$type":"Keyword","value":"md"},{"$type":"Keyword","value":"html"},{"$type":"Keyword","value":"text"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"EmDataInline","definition":{"$type":"Group","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"`"},{"$type":"Assignment","feature":"dataType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Keyword","value":"`"}],"cardinality":"?"},{"$type":"Assignment","feature":"dataInlineValue","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"EmDataBlock","definition":{"$type":"Group","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"`"},{"$type":"Assignment","feature":"dataType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Keyword","value":"`"}],"cardinality":"?"},{"$type":"Assignment","feature":"dataBlockValue","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"QualifiedName","dataType":"string","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"."},{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}],"cardinality":"*"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmTimeFrame","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"tf"},{"$type":"Keyword","value":"timeframe"}]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"modelEntityType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"Assignment","feature":"entityIdentifier","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"->>"},{"$type":"Assignment","feature":"sourceFrames","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@8"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}}],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"[["},{"$type":"Assignment","feature":"dataReference","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@10"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}},{"$type":"Keyword","value":"]]"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmResetFrame","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"rf"},{"$type":"Keyword","value":"resetframe"}]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"modelEntityType","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"Assignment","feature":"entityIdentifier","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"->>"},{"$type":"Assignment","feature":"sourceFrames","operator":"+=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@8"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}}],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"[["},{"$type":"Assignment","feature":"dataReference","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@10"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}},{"$type":"Keyword","value":"]]"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmFrame","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmModelEntity","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"entity"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmDataEntity","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"data"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmNoteEntity","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"note"},{"$type":"Assignment","feature":"sourceFrame","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@8"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmGwt","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"gwt"},{"$type":"Assignment","feature":"sourceFrame","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@8"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}},{"$type":"Keyword","value":"given"},{"$type":"Assignment","feature":"givenStatements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"+"},{"$type":"Group","elements":[{"$type":"Keyword","value":"when"},{"$type":"Assignment","feature":"whenStatements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"+"}],"cardinality":"?"},{"$type":"Keyword","value":"then"},{"$type":"Assignment","feature":"thenStatements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]},"cardinality":"+"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EmGwtStatement","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]},{"$type":"Assignment","feature":"entityIdentifier","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@9"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EM_EID","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EM_FI","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"EM_ID","definition":{"$type":"RegexToken","regex":"/[_a-zA-Z][\\\\w_]*/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"EM_FID","definition":{"$type":"RegexToken","regex":"/\\\\d{1,3}/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"EM_DATA_INLINE","definition":{"$type":"RegexToken","regex":"/\\\\{(.*)\\\\}|\\"(.*)\\"|\'(.*)\'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"EM_DATA_BLOCK","definition":{"$type":"RegexToken","regex":"/\\\\{[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?\\\\}(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"EM_ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"EM_ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"EM_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"EM_WS","definition":{"$type":"RegexToken","regex":"/\\\\s+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"EM_YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"EM_DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"EM_SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"EM_ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"EM_SL_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\/\\\\/[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"imports":[],"types":[]}')), "EventModelingGrammar"), eT, oU = /* @__PURE__ */ s(() => eT ?? (eT = wt(`{"$type":"Grammar","isDeclared":true,"name":"GitGraphGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"GitGraph","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"Keyword","value":":"}]},{"$type":"Keyword","value":"gitGraph:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"gitGraph"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]},{"$type":"Keyword","value":":"}]}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"Assignment","feature":"statements","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Direction","definition":{"$type":"Assignment","feature":"dir","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"LR"},{"$type":"Keyword","value":"TB"},{"$type":"Keyword","value":"BT"}]}},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Commit","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"commit"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"msg:","cardinality":"?"},{"$type":"Assignment","feature":"message","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Branch","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"branch"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"order:"},{"$type":"Assignment","feature":"order","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Merge","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"merge"},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"type:"},{"$type":"Assignment","feature":"type","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"NORMAL"},{"$type":"Keyword","value":"REVERSE"},{"$type":"Keyword","value":"HIGHLIGHT"}]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Checkout","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"checkout"},{"$type":"Keyword","value":"switch"}]},{"$type":"Assignment","feature":"branch","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"CherryPicking","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"cherry-pick"},{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Keyword","value":"id:"},{"$type":"Assignment","feature":"id","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"tag:"},{"$type":"Assignment","feature":"tags","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"parent:"},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@14"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","name":"REFERENCE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\\\w([-\\\\./\\\\w]*[-\\\\w])?/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[],"types":[]}`)), "GitGraphGrammarGrammar"), tT, lU = /* @__PURE__ */ s(() => tT ?? (tT = wt(`{"$type":"Grammar","isDeclared":true,"name":"InfoGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Info","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"info"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"},{"$type":"Group","elements":[{"$type":"Keyword","value":"showInfo"},{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"*"}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[],"cardinality":"?"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@7"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`)), "InfoGrammarGrammar"), rT, cU = /* @__PURE__ */ s(() => rT ?? (rT = wt(`{"$type":"Grammar","isDeclared":true,"name":"PacketGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Packet","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"packet"},{"$type":"Keyword","value":"packet-beta"}]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]},{"$type":"Assignment","feature":"blocks","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"PacketBlock","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"start","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"-"},{"$type":"Assignment","feature":"end","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}],"cardinality":"?"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"+"},{"$type":"Assignment","feature":"bits","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}}]}]},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@8"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@9"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`)), "PacketGrammarGrammar"), nT, uU = /* @__PURE__ */ s(() => nT ?? (nT = wt(`{"$type":"Grammar","isDeclared":true,"name":"PieGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Pie","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"*"},{"$type":"Keyword","value":"pie"},{"$type":"Assignment","feature":"showData","operator":"?=","terminal":{"$type":"Keyword","value":"showData"},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Assignment","feature":"sections","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"PieSection","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Keyword","value":":"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"FLOAT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/-?(0|[1-9][0-9]*)(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER_PIE","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@2"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@3"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@11"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@12"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`)), "PieGrammarGrammar"), aT, fU = /* @__PURE__ */ s(() => aT ?? (aT = wt(`{"$type":"Grammar","isDeclared":true,"name":"RadarGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Radar","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":"radar-beta:"},{"$type":"Group","elements":[{"$type":"Keyword","value":"radar-beta"},{"$type":"Keyword","value":":"}]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]},{"$type":"Group","elements":[{"$type":"Keyword","value":"axis"},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"axes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Keyword","value":"curve"},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"curves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"options","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]}}],"cardinality":"*"}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Label","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"Axis","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Curve","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[],"cardinality":"?"},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]},{"$type":"Keyword","value":"}"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Entries","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":","},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"},{"$type":"Assignment","feature":"entries","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}}],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"*"}]}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"DetailedEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"axis","operator":"=","terminal":{"$type":"CrossReference","type":{"$ref":"#/rules@2"},"terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},"deprecatedSyntax":false,"isMulti":false}},{"$type":"Keyword","value":":","cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"NumberEntry","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Option","definition":{"$type":"Alternatives","elements":[{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"showLegend"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"ticks"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"max"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"min"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}}]},{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Keyword","value":"graticule"}},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]}}]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"GRATICULE","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"circle"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"polygon"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@15"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@16"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[{"$type":"Interface","name":"Entry","attributes":[{"$type":"TypeAttribute","name":"axis","isOptional":true,"type":{"$type":"ReferenceType","referenceType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@2"}},"isMulti":false}},{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}],"superTypes":[]}],"types":[]}`)), "RadarGrammarGrammar"), iT, dU = /* @__PURE__ */ s(() => iT ?? (iT = wt(`{"$type":"Grammar","isDeclared":true,"name":"TreemapGrammar","rules":[{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"Treemap","returnType":{"$ref":"#/interfaces@4"},"definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]},{"$type":"Assignment","feature":"TreemapRows","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"TREEMAP_KEYWORD","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap-beta"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"treemap"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"CLASS_DEF","definition":{"$type":"RegexToken","regex":"/classDef\\\\s+([a-zA-Z_][a-zA-Z0-9_]+)(?:\\\\s+([^;\\\\r\\\\n]*))?(?:;)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STYLE_SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":::"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"SEPARATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":":"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"COMMA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":","},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false},{"$type":"ParserRule","name":"TreemapRow","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"item","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"ClassDef","dataType":"string","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Item","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Section","returnType":{"$ref":"#/interfaces@1"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Leaf","returnType":{"$ref":"#/interfaces@2"},"definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[],"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"value","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},{"$type":"Assignment","feature":"classSelector","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}}],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"ID2","definition":{"$type":"RegexToken","regex":"/[a-zA-Z_][a-zA-Z0-9_]*/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER2","definition":{"$type":"RegexToken","regex":"/[0-9_\\\\.\\\\,]+/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","name":"MyNumber","dataType":"number","definition":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"Item","attributes":[{"$type":"TypeAttribute","name":"name","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"classSelector","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]},{"$type":"Interface","name":"Section","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[]},{"$type":"Interface","name":"Leaf","superTypes":[{"$ref":"#/interfaces@0"}],"attributes":[{"$type":"TypeAttribute","name":"value","type":{"$type":"SimpleType","primitiveType":"number"},"isOptional":false}]},{"$type":"Interface","name":"ClassDefStatement","attributes":[{"$type":"TypeAttribute","name":"className","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false},{"$type":"TypeAttribute","name":"styleText","type":{"$type":"SimpleType","primitiveType":"string"},"isOptional":false}],"superTypes":[]},{"$type":"Interface","name":"Treemap","attributes":[{"$type":"TypeAttribute","name":"TreemapRows","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@15"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"imports":[],"types":[],"$comment":"/**\\n * Treemap grammar for Langium\\n * Converted from mindmap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treemap declaration.\\n */"}`)), "TreemapGrammarGrammar"), sT, pU = /* @__PURE__ */ s(() => sT ?? (sT = wt(`{"$type":"Grammar","isDeclared":true,"name":"TreeViewGrammar","rules":[{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"ParserRule","entry":true,"name":"TreeView","returnType":{"$ref":"#/interfaces@0"},"definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"treeView-beta"},{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[],"cardinality":"?"},{"$type":"Assignment","feature":"nodes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]},"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@0"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"INDENTATION","definition":{"$type":"RegexToken","regex":"/[ \\\\t]{1,}/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"ML_COMMENT","definition":{"$type":"RegexToken","regex":"/\\\\%\\\\%[^\\\\n]*/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"NL","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false},{"$type":"ParserRule","name":"TreeNode","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"indent","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"STRING2","definition":{"$type":"RegexToken","regex":"/\\"[^\\"]*\\"|'[^']*'/","parenthesized":false},"fragment":false,"hidden":false}],"interfaces":[{"$type":"Interface","name":"TreeView","attributes":[{"$type":"TypeAttribute","name":"nodes","type":{"$type":"ArrayType","elementType":{"$type":"SimpleType","typeRef":{"$ref":"#/rules@9"}}},"isOptional":false},{"$type":"TypeAttribute","name":"title","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accTitle","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}},{"$type":"TypeAttribute","name":"accDescr","isOptional":true,"type":{"$type":"SimpleType","primitiveType":"string"}}],"superTypes":[]}],"imports":[],"types":[],"$comment":"/**\\n * TreeView grammar for Langium\\n * Converted from treemap grammar\\n *\\n * The ML_COMMENT and NL hidden terminals handle whitespace, comments, and newlines\\n * before the treemap keyword, allowing for empty lines and comments before the\\n * treeView declaration.\\n */"}`)), "TreeViewGrammarGrammar"), oT, hU = /* @__PURE__ */ s(() => oT ?? (oT = wt(`{"$type":"Grammar","isDeclared":true,"name":"WardleyGrammar","imports":[],"rules":[{"$type":"ParserRule","entry":true,"name":"Wardley","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[],"cardinality":"*"},{"$type":"RuleCall","rule":{"$ref":"#/rules@25"},"arguments":[]},{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@42"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@1"},"arguments":[]}],"cardinality":"*"}]},"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"Statement","definition":{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"size","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@2"},"arguments":[]}},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@3"},"arguments":[]}},{"$type":"Assignment","feature":"anchors","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@5"},"arguments":[]}},{"$type":"Assignment","feature":"components","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@6"},"arguments":[]}},{"$type":"Assignment","feature":"links","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@9"},"arguments":[]}},{"$type":"Assignment","feature":"evolves","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@10"},"arguments":[]}},{"$type":"Assignment","feature":"pipelines","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@11"},"arguments":[]}},{"$type":"Assignment","feature":"notes","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@13"},"arguments":[]}},{"$type":"Assignment","feature":"annotations","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@14"},"arguments":[]}},{"$type":"Assignment","feature":"annotation","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@15"},"arguments":[]}},{"$type":"Assignment","feature":"accelerators","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@17"},"arguments":[]}},{"$type":"Assignment","feature":"deaccelerators","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@18"},"arguments":[]}}]},"entry":false,"parameters":[]},{"$type":"ParserRule","name":"Size","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@26"},"arguments":[]},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"width","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"height","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Evolution","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@27"},"arguments":[]},{"$type":"Assignment","feature":"stages","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]},{"$type":"Assignment","feature":"stages","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@4"},"arguments":[]}}],"cardinality":"+"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"EvolutionStage","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"@"},{"$type":"Assignment","feature":"boundary","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}}],"cardinality":"?"},{"$type":"Group","elements":[{"$type":"Keyword","value":"/"},{"$type":"Assignment","feature":"secondName","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}}],"cardinality":"?"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Anchor","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@28"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"visibility","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Component","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"visibility","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"decorator","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@8"},"arguments":[]},"cardinality":"?"},{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"inertia","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@31"},"arguments":[]}},{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"Assignment","feature":"inertia","operator":"?=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@31"},"arguments":[]}},{"$type":"Keyword","value":")"}]}],"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Label","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@30"},"arguments":[]},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"negX","operator":"?=","terminal":{"$type":"Keyword","value":"-"},"cardinality":"?"},{"$type":"Assignment","feature":"offsetX","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"negY","operator":"?=","terminal":{"$type":"Keyword","value":"-"},"cardinality":"?"},{"$type":"Assignment","feature":"offsetY","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":"]"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Decorator","definition":{"$type":"Group","elements":[{"$type":"Keyword","value":"("},{"$type":"Assignment","feature":"strategy","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@24"},"arguments":[]}},{"$type":"Keyword","value":")"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Link","definition":{"$type":"Group","elements":[{"$type":"Assignment","feature":"from","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Assignment","feature":"fromPort","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"arrow","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@22"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@20"},"arguments":[]}]},"cardinality":"?"},{"$type":"Assignment","feature":"to","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Assignment","feature":"toPort","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@21"},"arguments":[]},"cardinality":"?"},{"$type":"Assignment","feature":"linkLabel","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@23"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Evolve","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@32"},"arguments":[]},{"$type":"Assignment","feature":"component","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Assignment","feature":"target","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Pipeline","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@33"},"arguments":[]},{"$type":"Assignment","feature":"parent","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"{"},{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[],"cardinality":"+"},{"$type":"Assignment","feature":"components","operator":"+=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@12"},"arguments":[]},"cardinality":"+"},{"$type":"Keyword","value":"}"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"PipelineComponent","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@29"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"Assignment","feature":"label","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@7"},"arguments":[]},"cardinality":"?"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Note","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@34"},"arguments":[]},{"$type":"Assignment","feature":"text","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"visibility","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"evolution","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Annotations","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@35"},"arguments":[]},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Annotation","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@36"},"arguments":[]},{"$type":"Assignment","feature":"number","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@16"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"Assignment","feature":"text","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]}},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"CoordinateValue","dataType":"number","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@48"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Accelerator","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@37"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","name":"Deaccelerator","definition":{"$type":"Group","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@38"},"arguments":[]},{"$type":"Assignment","feature":"name","operator":"=","terminal":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@50"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@51"},"arguments":[]},{"$type":"RuleCall","rule":{"$ref":"#/rules@39"},"arguments":[]}]}},{"$type":"Keyword","value":"["},{"$type":"Assignment","feature":"x","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":","},{"$type":"Assignment","feature":"y","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@19"},"arguments":[]}},{"$type":"Keyword","value":"]"},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"TerminalRule","name":"WARDLEY_NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ARROW","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"->"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"LINK_PORT","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"+<>"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"+>"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"+<"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"LINK_ARROW","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"-->"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"-.->"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":">"},"parenthesized":false}],"parenthesized":false},{"$type":"RegexToken","regex":"/\\\\+'[^']*'<>/","parenthesized":false}],"parenthesized":false},{"$type":"RegexToken","regex":"/\\\\+'[^']*'</","parenthesized":false}],"parenthesized":false},{"$type":"RegexToken","regex":"/\\\\+'[^']*'>/","parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"LINK_LABEL","definition":{"$type":"RegexToken","regex":"/;[^\\\\n\\\\r]+/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRATEGY","definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"build"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"buy"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"outsource"},"parenthesized":false}],"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"market"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_WARDLEY","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"wardley-beta"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_SIZE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"size"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_EVOLUTION","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"evolution"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ANCHOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"anchor"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_COMPONENT","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"component"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_LABEL","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"label"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_INERTIA","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"inertia"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_EVOLVE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"evolve"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_PIPELINE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"pipeline"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_NOTE","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"note"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ANNOTATIONS","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"annotations"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ANNOTATION","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"annotation"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_ACCELERATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"accelerator"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"KW_DEACCELERATOR","definition":{"$type":"CharacterRange","left":{"$type":"Keyword","value":"deaccelerator"},"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NAME_WITH_SPACES","definition":{"$type":"RegexToken","regex":"/(?!title\\\\s|accTitle|accDescr)[A-Za-z](?:[A-Za-z0-9_()&]|-(?!>))*(?:[ \\\\t]+[A-Za-z(](?:[A-Za-z0-9_()&]|-(?!>))*)*/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WS","definition":{"$type":"RegexToken","regex":"/[ \\\\t]+/","parenthesized":false},"fragment":false},{"$type":"ParserRule","name":"EOL","dataType":"string","definition":{"$type":"Alternatives","elements":[{"$type":"RuleCall","rule":{"$ref":"#/rules@52"},"arguments":[],"cardinality":"+"},{"$type":"EndOfFile"}]},"entry":false,"fragment":false,"parameters":[]},{"$type":"ParserRule","fragment":true,"name":"TitleAndAccessibilities","definition":{"$type":"Group","elements":[{"$type":"Alternatives","elements":[{"$type":"Assignment","feature":"accDescr","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@44"},"arguments":[]}},{"$type":"Assignment","feature":"accTitle","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@45"},"arguments":[]}},{"$type":"Assignment","feature":"title","operator":"=","terminal":{"$type":"RuleCall","rule":{"$ref":"#/rules@46"},"arguments":[]}}]},{"$type":"RuleCall","rule":{"$ref":"#/rules@41"},"arguments":[]}],"cardinality":"+"},"entry":false,"parameters":[]},{"$type":"TerminalRule","name":"BOOLEAN","type":{"$type":"ReturnType","name":"boolean"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"CharacterRange","left":{"$type":"Keyword","value":"true"},"parenthesized":false},{"$type":"CharacterRange","left":{"$type":"Keyword","value":"false"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_DESCR","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accDescr(?:[\\\\t ]*:([^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)|\\\\s*{([^}]*)})/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ACC_TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*accTitle[\\\\t ]*:(?:[^\\\\n\\\\r]*?(?=%%)|[^\\\\n\\\\r]*)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"TITLE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*title(?:[\\\\t ][^\\\\n\\\\r]*?(?=%%)|[\\\\t ][^\\\\n\\\\r]*|)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"FLOAT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/[0-9]+\\\\.[0-9]+(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"INT","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"RegexToken","regex":"/0|[1-9][0-9]*(?!\\\\.)/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NUMBER","type":{"$type":"ReturnType","name":"number"},"definition":{"$type":"TerminalAlternatives","elements":[{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@47"},"parenthesized":false},{"$type":"TerminalRuleCall","rule":{"$ref":"#/rules@48"},"parenthesized":false}],"parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"STRING","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\"|'([^'\\\\\\\\]|\\\\\\\\.)*'/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"ID","type":{"$type":"ReturnType","name":"string"},"definition":{"$type":"RegexToken","regex":"/[\\\\w]([-\\\\w]*\\\\w)?/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","name":"NEWLINE","definition":{"$type":"RegexToken","regex":"/\\\\r?\\\\n/","parenthesized":false},"fragment":false,"hidden":false},{"$type":"TerminalRule","hidden":true,"name":"WHITESPACE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]+/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"YAML","definition":{"$type":"RegexToken","regex":"/---[\\\\t ]*\\\\r?\\\\n(?:[\\\\S\\\\s]*?\\\\r?\\\\n)?---(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"DIRECTIVE","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%{[\\\\S\\\\s]*?}%%(?:\\\\r?\\\\n|(?!\\\\S))/","parenthesized":false},"fragment":false},{"$type":"TerminalRule","hidden":true,"name":"SINGLE_LINE_COMMENT","definition":{"$type":"RegexToken","regex":"/[\\\\t ]*%%[^\\\\n\\\\r]*/","parenthesized":false},"fragment":false}],"interfaces":[],"types":[]}`)), "WardleyGrammarGrammar"), mU = {
  languageId: "architecture",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, gU = {
  languageId: "eventmodeling",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, yU = {
  languageId: "gitGraph",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, vU = {
  languageId: "info",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, TU = {
  languageId: "packet",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, RU = {
  languageId: "pie",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, $U = {
  languageId: "radar",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, AU = {
  languageId: "treemap",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, EU = {
  languageId: "treeView",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, _U = {
  languageId: "wardley",
  fileExtensions: [".mmd", ".mermaid"],
  caseInsensitive: !1,
  mode: "production"
}, hr = {
  AstReflection: /* @__PURE__ */ s(() => new cN(), "AstReflection")
}, CU = {
  Grammar: /* @__PURE__ */ s(() => iU(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ s(() => mU, "LanguageMetaData"),
  parser: {}
}, bU = {
  Grammar: /* @__PURE__ */ s(() => sU(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ s(() => gU, "LanguageMetaData"),
  parser: {}
}, SU = {
  Grammar: /* @__PURE__ */ s(() => oU(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ s(() => yU, "LanguageMetaData"),
  parser: {}
}, wU = {
  Grammar: /* @__PURE__ */ s(() => lU(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ s(() => vU, "LanguageMetaData"),
  parser: {}
}, IU = {
  Grammar: /* @__PURE__ */ s(() => cU(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ s(() => TU, "LanguageMetaData"),
  parser: {}
}, NU = {
  Grammar: /* @__PURE__ */ s(() => uU(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ s(() => RU, "LanguageMetaData"),
  parser: {}
}, kU = {
  Grammar: /* @__PURE__ */ s(() => fU(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ s(() => $U, "LanguageMetaData"),
  parser: {}
}, PU = {
  Grammar: /* @__PURE__ */ s(() => dU(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ s(() => AU, "LanguageMetaData"),
  parser: {}
}, OU = {
  Grammar: /* @__PURE__ */ s(() => pU(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ s(() => EU, "LanguageMetaData"),
  parser: {}
}, LU = {
  Grammar: /* @__PURE__ */ s(() => hU(), "Grammar"),
  LanguageMetaData: /* @__PURE__ */ s(() => _U, "LanguageMetaData"),
  parser: {}
}, DU = /accDescr(?:[\t ]*:([^\n\r]*)|\s*{([^}]*)})/, MU = /accTitle[\t ]*:([^\n\r]*)/, xU = /title([\t ][^\n\r]*|)/, FU = {
  ACC_DESCR: DU,
  ACC_TITLE: MU,
  TITLE: xU
}, ao, Ho = (ao = class extends ey {
  runConverter(e, r, n) {
    let a = this.runCommonConverter(e, r, n);
    return a === void 0 && (a = this.runCustomConverter(e, r, n)), a === void 0 ? super.runConverter(e, r, n) : a;
  }
  runCommonConverter(e, r, n) {
    const a = FU[e.name];
    if (a === void 0)
      return;
    const i = a.exec(r);
    if (i !== null) {
      if (i[1] !== void 0)
        return i[1].trim().replace(/[\t ]{2,}/gm, " ");
      if (i[2] !== void 0)
        return i[2].replace(/^\s*/gm, "").replace(/\s+$/gm, "").replace(/[\t ]{2,}/gm, " ").replace(/[\n\r]{2,}/gm, `
`);
    }
  }
}, s(ao, "AbstractMermaidValueConverter"), ao), io, Oc = (io = class extends Ho {
  runCustomConverter(e, r, n) {
  }
}, s(io, "CommonValueConverter"), io), so, mr = (so = class extends ud {
  constructor(e) {
    super(), this.keywords = new Set(e);
  }
  buildKeywordTokens(e, r, n) {
    const a = super.buildKeywordTokens(e, r, n);
    return a.forEach((i) => {
      this.keywords.has(i.name) && i.PATTERN !== void 0 && (i.PATTERN = new RegExp(i.PATTERN.toString() + "(?:(?=%%)|(?!\\S))"));
    }), a;
  }
}, s(so, "AbstractMermaidTokenBuilder"), so), oo;
oo = class extends mr {
}, s(oo, "CommonTokenBuilder");
var lo, GU = (lo = class extends mr {
  constructor() {
    super(["radar-beta"]);
  }
}, s(lo, "RadarTokenBuilder"), lo), uN = {
  parser: {
    TokenBuilder: /* @__PURE__ */ s(() => new GU(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ s(() => new Oc(), "ValueConverter")
  }
};
function fN(t = Gt) {
  const e = ke(
    St(t),
    hr
  ), r = ke(
    bt({ shared: e }),
    kU,
    uN
  );
  return e.ServiceRegistry.register(r), { shared: e, Radar: r };
}
s(fN, "createRadarServices");
var co, jU = (co = class extends mr {
  constructor() {
    super(["treemap"]);
  }
}, s(co, "TreemapTokenBuilder"), co), UU = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, uo, zU = (uo = class extends Ho {
  runCustomConverter(e, r, n) {
    if (e.name === "NUMBER2")
      return parseFloat(r.replace(/,/g, ""));
    if (e.name === "SEPARATOR")
      return r.substring(1, r.length - 1);
    if (e.name === "STRING2")
      return r.substring(1, r.length - 1);
    if (e.name === "INDENTATION")
      return r.length;
    if (e.name === "ClassDef") {
      if (typeof r != "string")
        return r;
      const a = UU.exec(r);
      if (a)
        return {
          $type: "ClassDefStatement",
          className: a[1],
          styleText: a[2] || void 0
        };
    }
  }
}, s(uo, "TreemapValueConverter"), uo);
function dN(t) {
  const e = t.validation.TreemapValidator, r = t.validation.ValidationRegistry;
  if (r) {
    const n = {
      Treemap: e.checkSingleRoot.bind(e)
      // Remove unused validation for TreemapRow
    };
    r.register(n, e);
  }
}
s(dN, "registerValidationChecks");
var fo, BU = (fo = class {
  /**
   * Validates that a treemap has only one root node.
   * A root node is defined as a node that has no indentation.
   */
  checkSingleRoot(e, r) {
    let n;
    for (const a of e.TreemapRows)
      a.item && (n === void 0 && // Check if this is a root node (no indentation)
      a.indent === void 0 ? n = 0 : a.indent === void 0 ? r("error", "Multiple root nodes are not allowed in a treemap.", {
        node: a,
        property: "item"
      }) : n !== void 0 && n >= parseInt(a.indent, 10) && r("error", "Multiple root nodes are not allowed in a treemap.", {
        node: a,
        property: "item"
      }));
  }
}, s(fo, "TreemapValidator"), fo), pN = {
  parser: {
    TokenBuilder: /* @__PURE__ */ s(() => new jU(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ s(() => new zU(), "ValueConverter")
  },
  validation: {
    TreemapValidator: /* @__PURE__ */ s(() => new BU(), "TreemapValidator")
  }
};
function hN(t = Gt) {
  const e = ke(
    St(t),
    hr
  ), r = ke(
    bt({ shared: e }),
    PU,
    pN
  );
  return e.ServiceRegistry.register(r), dN(r), { shared: e, Treemap: r };
}
s(hN, "createTreemapServices");
var po, KU = (po = class extends Ho {
  runCustomConverter(e, r, n) {
    if (e.name.toUpperCase() === "LINK_LABEL")
      return r.substring(1).trim();
  }
}, s(po, "WardleyValueConverter"), po), mN = {
  parser: {
    ValueConverter: /* @__PURE__ */ s(() => new KU(), "ValueConverter")
  }
};
function gN(t = Gt) {
  const e = ke(
    St(t),
    hr
  ), r = ke(
    bt({ shared: e }),
    LU,
    mN
  );
  return e.ServiceRegistry.register(r), { shared: e, Wardley: r };
}
s(gN, "createWardleyServices");
var ho, qU = (ho = class extends mr {
  constructor() {
    super(["gitGraph"]);
  }
}, s(ho, "GitGraphTokenBuilder"), ho), yN = {
  parser: {
    TokenBuilder: /* @__PURE__ */ s(() => new qU(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ s(() => new Oc(), "ValueConverter")
  }
};
function vN(t = Gt) {
  const e = ke(
    St(t),
    hr
  ), r = ke(
    bt({ shared: e }),
    SU,
    yN
  );
  return e.ServiceRegistry.register(r), { shared: e, GitGraph: r };
}
s(vN, "createGitGraphServices");
var mo, WU = (mo = class extends mr {
  constructor() {
    super(["info", "showInfo"]);
  }
}, s(mo, "InfoTokenBuilder"), mo), TN = {
  parser: {
    TokenBuilder: /* @__PURE__ */ s(() => new WU(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ s(() => new Oc(), "ValueConverter")
  }
};
function RN(t = Gt) {
  const e = ke(
    St(t),
    hr
  ), r = ke(
    bt({ shared: e }),
    wU,
    TN
  );
  return e.ServiceRegistry.register(r), { shared: e, Info: r };
}
s(RN, "createInfoServices");
var go, VU = (go = class extends mr {
  constructor() {
    super(["packet"]);
  }
}, s(go, "PacketTokenBuilder"), go), $N = {
  parser: {
    TokenBuilder: /* @__PURE__ */ s(() => new VU(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ s(() => new Oc(), "ValueConverter")
  }
};
function AN(t = Gt) {
  const e = ke(
    St(t),
    hr
  ), r = ke(
    bt({ shared: e }),
    IU,
    $N
  );
  return e.ServiceRegistry.register(r), { shared: e, Packet: r };
}
s(AN, "createPacketServices");
var yo, HU = (yo = class extends mr {
  constructor() {
    super(["pie", "showData"]);
  }
}, s(yo, "PieTokenBuilder"), yo), vo, YU = (vo = class extends Ho {
  runCustomConverter(e, r, n) {
    if (e.name === "PIE_SECTION_LABEL")
      return r.replace(/"/g, "").trim();
  }
}, s(vo, "PieValueConverter"), vo), EN = {
  parser: {
    TokenBuilder: /* @__PURE__ */ s(() => new HU(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ s(() => new YU(), "ValueConverter")
  }
};
function _N(t = Gt) {
  const e = ke(
    St(t),
    hr
  ), r = ke(
    bt({ shared: e }),
    NU,
    EN
  );
  return e.ServiceRegistry.register(r), { shared: e, Pie: r };
}
s(_N, "createPieServices");
var To, XU = (To = class extends Ho {
  runCustomConverter(e, r, n) {
    if (e.name === "INDENTATION")
      return r?.length || 0;
    if (e.name === "STRING2")
      return r.substring(1, r.length - 1);
  }
}, s(To, "TreeViewValueConverter"), To), Ro, JU = (Ro = class extends mr {
  constructor() {
    super(["treeView-beta"]);
  }
}, s(Ro, "TreeViewTokenBuilder"), Ro), CN = {
  parser: {
    TokenBuilder: /* @__PURE__ */ s(() => new JU(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ s(() => new XU(), "ValueConverter")
  }
};
function bN(t = Gt) {
  const e = ke(
    St(t),
    hr
  ), r = ke(
    bt({ shared: e }),
    OU,
    CN
  );
  return e.ServiceRegistry.register(r), { shared: e, TreeView: r };
}
s(bN, "createTreeViewServices");
var $o, ZU = ($o = class extends mr {
  constructor() {
    super(["architecture"]);
  }
}, s($o, "ArchitectureTokenBuilder"), $o), Ao, QU = (Ao = class extends Ho {
  runCustomConverter(e, r, n) {
    if (e.name === "ARCH_ICON")
      return r.replace(/[()]/g, "").trim();
    if (e.name === "ARCH_TEXT_ICON")
      return r.replace(/["()]/g, "");
    if (e.name === "ARCH_TITLE") {
      let a = r.replace(/^\[|]$/g, "").trim();
      return (a.startsWith('"') && a.endsWith('"') || a.startsWith("'") && a.endsWith("'")) && (a = a.slice(1, -1), a = a.replace(/\\"/g, '"').replace(/\\'/g, "'")), a.trim();
    }
  }
}, s(Ao, "ArchitectureValueConverter"), Ao), SN = {
  parser: {
    TokenBuilder: /* @__PURE__ */ s(() => new ZU(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ s(() => new QU(), "ValueConverter")
  }
};
function wN(t = Gt) {
  const e = ke(
    St(t),
    hr
  ), r = ke(
    bt({ shared: e }),
    CU,
    SN
  );
  return e.ServiceRegistry.register(r), { shared: e, Architecture: r };
}
s(wN, "createArchitectureServices");
var Eo, ez = (Eo = class extends mr {
  constructor() {
    super(["eventmodeling"]);
  }
}, s(Eo, "EventModelingTokenBuilder"), Eo), lT = /* @__PURE__ */ new Set(["cmd", "command"]), cT = /* @__PURE__ */ new Set(["evt", "event"]), Ud = /* @__PURE__ */ new Set(["rmo", "readmodel"]), uT = /* @__PURE__ */ new Set(["pcr", "processor"]), fT = /* @__PURE__ */ new Set(["ui"]);
function IN(t) {
  const e = t.validation.EventModelingValidator, r = t.validation.ValidationRegistry;
  if (r) {
    const n = {
      EmTimeFrame: e.checkSourceFrameTypes.bind(e),
      EmResetFrame: e.checkSourceFrameTypes.bind(e)
    };
    r.register(n, e);
  }
}
s(IN, "registerValidationChecks");
var _o, tz = (_o = class {
  checkSourceFrameTypes(e, r) {
    e.sourceFrames.length !== 0 && (lT.has(e.modelEntityType) ? this.validateSources(
      e,
      /* @__PURE__ */ new Set([...fT, ...uT]),
      "command",
      "ui or processor",
      r
    ) : cT.has(e.modelEntityType) ? this.validateSources(e, lT, "event", "command", r) : Ud.has(e.modelEntityType) ? this.validateSources(e, cT, "read model", "event", r) : uT.has(e.modelEntityType) ? this.validateSources(e, Ud, "processor", "read model", r) : fT.has(e.modelEntityType) && this.validateSources(e, Ud, "ui", "read model", r));
  }
  validateSources(e, r, n, a, i) {
    for (const o of e.sourceFrames) {
      const c = o.ref;
      c !== void 0 && !r.has(c.modelEntityType) && i(
        "error",
        `A ${n} can only receive input from a ${a}, not from '${c.modelEntityType}'.`,
        { node: e, property: "sourceFrames" }
      );
    }
  }
}, s(_o, "EventModelingValidator"), _o), NN = {
  parser: {
    TokenBuilder: /* @__PURE__ */ s(() => new ez(), "TokenBuilder"),
    ValueConverter: /* @__PURE__ */ s(() => new Oc(), "ValueConverter")
  },
  validation: {
    EventModelingValidator: /* @__PURE__ */ s(() => new tz(), "EventModelingValidator")
  }
};
function kN(t = Gt) {
  const e = ke(
    St(t),
    hr
  ), r = ke(
    bt({ shared: e }),
    bU,
    NN
  );
  return e.ServiceRegistry.register(r), IN(r), { shared: e, EventModel: r };
}
s(kN, "createEventModelingServices");
var Pt = {}, rz = {
  info: /* @__PURE__ */ s(async () => {
    const { createInfoServices: t } = await Promise.resolve().then(() => iz), e = t().Info.parser.LangiumParser;
    Pt.info = e;
  }, "info"),
  packet: /* @__PURE__ */ s(async () => {
    const { createPacketServices: t } = await Promise.resolve().then(() => sz), e = t().Packet.parser.LangiumParser;
    Pt.packet = e;
  }, "packet"),
  pie: /* @__PURE__ */ s(async () => {
    const { createPieServices: t } = await Promise.resolve().then(() => oz), e = t().Pie.parser.LangiumParser;
    Pt.pie = e;
  }, "pie"),
  treeView: /* @__PURE__ */ s(async () => {
    const { createTreeViewServices: t } = await Promise.resolve().then(() => lz), e = t().TreeView.parser.LangiumParser;
    Pt.treeView = e;
  }, "treeView"),
  architecture: /* @__PURE__ */ s(async () => {
    const { createArchitectureServices: t } = await Promise.resolve().then(() => cz), e = t().Architecture.parser.LangiumParser;
    Pt.architecture = e;
  }, "architecture"),
  gitGraph: /* @__PURE__ */ s(async () => {
    const { createGitGraphServices: t } = await Promise.resolve().then(() => uz), e = t().GitGraph.parser.LangiumParser;
    Pt.gitGraph = e;
  }, "gitGraph"),
  eventmodeling: /* @__PURE__ */ s(async () => {
    const { createEventModelingServices: t } = await Promise.resolve().then(() => fz), e = t().EventModel.parser.LangiumParser;
    Pt.eventmodeling = e;
  }, "eventmodeling"),
  radar: /* @__PURE__ */ s(async () => {
    const { createRadarServices: t } = await Promise.resolve().then(() => dz), e = t().Radar.parser.LangiumParser;
    Pt.radar = e;
  }, "radar"),
  treemap: /* @__PURE__ */ s(async () => {
    const { createTreemapServices: t } = await Promise.resolve().then(() => pz), e = t().Treemap.parser.LangiumParser;
    Pt.treemap = e;
  }, "treemap"),
  wardley: /* @__PURE__ */ s(async () => {
    const { createWardleyServices: t } = await Promise.resolve().then(() => hz), e = t().Wardley.parser.LangiumParser;
    Pt.wardley = e;
  }, "wardley")
};
async function nz(t, e) {
  const r = rz[t];
  if (!r)
    throw new Error(`Unknown diagram type: ${t}`);
  Pt[t] || await r();
  const a = Pt[t].parse(e);
  if (a.lexerErrors.length > 0 || a.parserErrors.length > 0)
    throw new az(a);
  return a.value;
}
s(nz, "parse");
var Co, az = (Co = class extends Error {
  constructor(e) {
    const r = e.lexerErrors.map((a) => {
      const i = a.line !== void 0 && !isNaN(a.line) ? a.line : "?", o = a.column !== void 0 && !isNaN(a.column) ? a.column : "?";
      return `Lexer error on line ${i}, column ${o}: ${a.message}`;
    }).join(`
`), n = e.parserErrors.map((a) => {
      const i = a.token.startLine !== void 0 && !isNaN(a.token.startLine) ? a.token.startLine : "?", o = a.token.startColumn !== void 0 && !isNaN(a.token.startColumn) ? a.token.startColumn : "?";
      return `Parse error on line ${i}, column ${o}: ${a.message}`;
    }).join(`
`);
    super(`Parsing failed: ${r} ${n}`), this.result = e;
  }
}, s(Co, "MermaidParseError"), Co);
const iz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InfoModule: TN,
  createInfoServices: RN
}, Symbol.toStringTag, { value: "Module" })), sz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PacketModule: $N,
  createPacketServices: AN
}, Symbol.toStringTag, { value: "Module" })), oz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PieModule: EN,
  createPieServices: _N
}, Symbol.toStringTag, { value: "Module" })), lz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TreeViewModule: CN,
  createTreeViewServices: bN
}, Symbol.toStringTag, { value: "Module" })), cz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArchitectureModule: SN,
  createArchitectureServices: wN
}, Symbol.toStringTag, { value: "Module" })), uz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GitGraphModule: yN,
  createGitGraphServices: vN
}, Symbol.toStringTag, { value: "Module" })), fz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EventModelingModule: NN,
  createEventModelingServices: kN
}, Symbol.toStringTag, { value: "Module" })), dz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RadarModule: uN,
  createRadarServices: fN
}, Symbol.toStringTag, { value: "Module" })), pz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TreemapModule: pN,
  createTreemapServices: hN
}, Symbol.toStringTag, { value: "Module" })), hz = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WardleyModule: mN,
  createWardleyServices: gN
}, Symbol.toStringTag, { value: "Module" }));
export {
  Yj as i,
  nz as p
};
//# sourceMappingURL=wardley-L42UT6IY.js.map
