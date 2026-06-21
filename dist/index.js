import { g as rx } from "./percentages-BXMCSKIN.js";
const Ms = 20, ix = {
  rect: "rectangle",
  circle: "ellipse"
}, Vs = {
  startOnLoad: !1,
  flowchart: { curve: "linear" },
  themeVariables: {
    fontSize: `${Ms}px`
  },
  maxEdges: 500,
  maxTextSize: 5e4
};
class Ii {
  constructor({ converter: t }) {
    this.convert = (r, i) => this.converter(r, {
      ...i,
      fontSize: i.fontSize || Ms
    }), this.converter = t;
  }
}
var hr;
(function(e) {
  e.ROUND = "round", e.STADIUM = "stadium", e.DOUBLECIRCLE = "doublecircle", e.CIRCLE = "circle", e.DIAMOND = "diamond", e.CYLINDER = "cylinder";
})(hr || (hr = {}));
var te;
(function(e) {
  e.COLOR = "color";
})(te || (te = {}));
var Ct;
(function(e) {
  e.FILL = "fill", e.STROKE = "stroke", e.STROKE_WIDTH = "stroke-width", e.STROKE_DASHARRAY = "stroke-dasharray";
})(Ct || (Ct = {}));
var Yi = {}, Jh;
function sx() {
  if (Jh) return Yi;
  Jh = 1, Object.defineProperty(Yi, "__esModule", { value: !0 }), Yi.removeMarkdown = void 0;
  var e = function(t, r) {
    r === void 0 && (r = {
      listUnicodeChar: ""
    }), r = r || {}, r.listUnicodeChar = r.hasOwnProperty("listUnicodeChar") ? r.listUnicodeChar : !1, r.stripListLeaders = r.hasOwnProperty("stripListLeaders") ? r.stripListLeaders : !0, r.gfm = r.hasOwnProperty("gfm") ? r.gfm : !0, r.useImgAltText = r.hasOwnProperty("useImgAltText") ? r.useImgAltText : !0, r.preserveLinks = r.hasOwnProperty("preserveLinks") ? r.preserveLinks : !1;
    var i = t || "";
    i = i.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*$/gm, "");
    try {
      r.stripListLeaders && (r.listUnicodeChar ? i = i.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, r.listUnicodeChar + " $1") : i = i.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1")), r.gfm && (i = i.replace(/\n={2,}/g, `
`).replace(/~{3}.*\n/g, "").replace(/~~/g, "").replace(/`{3}.*\n/g, "")), r.preserveLinks && (i = i.replace(/\[(.*?)\][\[\(](.*?)[\]\)]/g, "$1 ($2)")), i = i.replace(/<[^>]*>/g, "").replace(/^[=\-]{2,}\s*$/g, "").replace(/\[\^.+?\](\: .*?$)?/g, "").replace(/\s{0,2}\[.*?\]: .*?$/g, "").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, r.useImgAltText ? "$1" : "").replace(/\[(.*?)\][\[\(].*?[\]\)]/g, "$1").replace(/^\s{0,3}>\s?/g, "").replace(/(^|\n)\s{0,3}>\s?/g, `

`).replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} {0,}(\n)?\s{0,}$/gm, "$1$2$3").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/([\*_]{1,3})(\S.*?\S{0,1})\1/g, "$2").replace(/(`{3,})(.*?)\1/gm, "$2").replace(/`(.+?)`/g, "$1").replace(/\n{2,}/g, `

`);
    } catch (s) {
      return console.error(s), t;
    }
    return i;
  };
  return Yi.removeMarkdown = e, Yi;
}
var ox = sx();
const ax = {
  arrow_circle: {
    endArrowhead: "circle"
  },
  arrow_cross: {
    endArrowhead: "bar"
  },
  arrow_open: {
    endArrowhead: null,
    startArrowhead: null
  },
  double_arrow_circle: {
    endArrowhead: "circle",
    startArrowhead: "circle"
  },
  double_arrow_cross: {
    endArrowhead: "bar",
    startArrowhead: "bar"
  },
  double_arrow_point: {
    endArrowhead: "arrow",
    startArrowhead: "arrow"
  }
}, nx = (e) => ax[e], za = (e) => {
  let t = e.text;
  return e.labelType === "markdown" && (t = ox.removeMarkdown(e.text)), lx(t);
}, lx = (e) => {
  const t = /\s?(fa|fab):[a-zA-Z0-9-]+/g;
  return e.replace(t, "");
}, xs = (e) => {
  const t = {};
  return Object.keys(e).forEach((r) => {
    switch (r) {
      case Ct.FILL: {
        t.backgroundColor = e[r], t.fillStyle = "solid";
        break;
      }
      case Ct.STROKE: {
        t.strokeColor = e[r];
        break;
      }
      case Ct.STROKE_WIDTH: {
        t.strokeWidth = Number(e[r]?.split("px")[0]);
        break;
      }
      case Ct.STROKE_DASHARRAY: {
        t.strokeStyle = "dashed";
        break;
      }
    }
  }), t;
}, pn = (e) => {
  const t = {};
  return Object.keys(e).forEach((r) => {
    r === te.COLOR && (t.strokeColor = e[r]);
  }), t;
}, hx = (e, t) => [e, t], cx = 32, eu = 0.62, dx = 12, ux = 12, ru = (e, t) => Math.max(20, Math.ceil(e.length * t * eu)), fx = (e, t, r, i) => {
  const s = i || Ms;
  if (e !== hr.CYLINDER || !t || t.includes(`
`))
    return s;
  const o = Math.max(20, r - dx);
  return ru(t, s) <= o ? s : Math.max(ux, Math.floor(o / (t.length * eu)));
}, px = (e) => {
  const t = {};
  e.subGraphs.map((i) => {
    i.nodeIds.forEach((s) => {
      t[i.id] = {
        id: i.id,
        parent: null,
        isLeaf: !1
      }, t[s] = {
        id: s,
        parent: i.id,
        isLeaf: e.vertices[s] !== void 0
      };
    });
  });
  const r = {};
  return [...Object.keys(e.vertices), ...e.subGraphs.map((i) => i.id)].forEach((i) => {
    if (!t[i])
      return;
    let s = t[i];
    const o = [];
    for (s.isLeaf || o.push(`subgraph_group_${s.id}`); s.parent; )
      o.push(`subgraph_group_${s.parent}`), s = t[s.parent];
    r[i] = o;
  }), {
    getGroupIds: (i) => r[i] || [],
    getParentId: (i) => t[i] ? t[i].parent : null
  };
}, gx = new Ii({
  converter: (e, t) => {
    const r = [], i = t.fontSize, { getGroupIds: s, getParentId: o } = px(e);
    return e.subGraphs.reverse().forEach((a) => {
      const n = s(a.id), l = za(a), d = ru(l, i || 16) + cx * 2, f = Math.max(a.width, d), u = a.x - (f - a.width) / 2, p = xs(a.containerStyle), m = pn(a.labelStyle), y = {
        id: a.id,
        type: "rectangle",
        groupIds: n,
        x: u,
        y: a.y,
        width: f,
        height: a.height,
        label: {
          groupIds: n,
          text: l,
          fontSize: i,
          verticalAlign: "top",
          ...m
        },
        ...p
      };
      r.push(y);
    }), Object.values(e.vertices).forEach((a) => {
      if (!a)
        return;
      const n = s(a.id), l = za(a), c = fx(a.type, l, a.width, i), h = xs(a.containerStyle), d = pn(a.labelStyle);
      let f = {
        id: a.id,
        type: "rectangle",
        groupIds: n,
        x: a.x,
        y: a.y,
        width: a.width,
        height: a.height,
        strokeWidth: 2,
        label: {
          groupIds: n,
          text: l,
          fontSize: c,
          ...d
        },
        link: a.link || null,
        ...h
      };
      switch (a.type) {
        case hr.STADIUM: {
          f = { ...f, roundness: { type: 3 } };
          break;
        }
        case hr.ROUND: {
          f = { ...f, roundness: { type: 3 } };
          break;
        }
        case hr.DOUBLECIRCLE: {
          n.push(`doublecircle_${a.id}}`);
          const p = {
            type: "ellipse",
            groupIds: n,
            x: a.x + 5,
            y: a.y + 5,
            width: a.width - 10,
            height: a.height - 10,
            strokeWidth: 2,
            roundness: { type: 3 },
            label: {
              groupIds: n,
              text: l,
              fontSize: c,
              ...d
            }
          };
          f = { ...f, groupIds: n, type: "ellipse" }, r.push(p);
          break;
        }
        case hr.CIRCLE: {
          f.type = "ellipse";
          break;
        }
        case hr.DIAMOND: {
          f.type = "diamond";
          break;
        }
      }
      r.push(f);
    }), e.edges.forEach((a) => {
      let n = [];
      const l = o(a.start), c = o(a.end);
      l && l === c && (n = s(l));
      const { startX: h, startY: d, reflectionPoints: f } = a, u = f.map((k) => hx(k.x - f[0].x, k.y - f[0].y)), p = nx(a.type || "arrow_point"), m = r.find((k) => k.id === a.start), y = r.find((k) => k.id === a.end);
      if (!m || !y)
        return;
      const C = {
        id: `${a.start}_${a.end}`,
        type: "arrow",
        groupIds: n,
        x: h,
        y: d,
        // 4 and 2 are the Excalidraw's stroke width of thick and thin respectively
        // TODO: use constant exported from Excalidraw package
        strokeWidth: a.stroke === "thick" ? 4 : 2,
        strokeStyle: a.stroke === "dotted" ? "dashed" : void 0,
        points: u,
        ...a.text ? { label: { text: za(a), fontSize: i, groupIds: n } } : {},
        roundness: {
          type: 2
        },
        ...p,
        start: {
          id: m.id || ""
        },
        end: {
          id: y.id || ""
        }
      };
      r.push(C);
    }), {
      elements: r
    };
  }
});
let fe = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, r) => (r &= 63, r < 36 ? t += r.toString(36) : r < 62 ? t += (r - 26).toString(36).toUpperCase() : r > 62 ? t += "-" : t += "_", t), "");
const mx = new Ii({
  converter: (e) => {
    const t = fe(), { width: r, height: i } = e, s = {
      type: "image",
      x: 0,
      y: 0,
      width: r,
      height: i,
      status: "saved",
      fileId: t
    };
    return { files: {
      [t]: {
        id: t,
        mimeType: e.mimeType,
        dataURL: e.dataURL
      }
    }, elements: [s] };
  }
}), ds = (e, t) => [e, t], Cl = (e) => e.replace(/\\n/g, `
`), Mr = (e) => {
  const t = {
    type: "line",
    x: e.startX,
    y: e.startY,
    points: [
      ds(0, 0),
      ds(e.endX - e.startX, e.endY - e.startY)
    ],
    width: e.endX - e.startX,
    height: e.endY - e.startY,
    strokeStyle: e.strokeStyle || "solid",
    strokeColor: e.strokeColor || "#000",
    strokeWidth: e.strokeWidth || 1
  };
  return e.groupId && Object.assign(t, { groupIds: [e.groupId] }), e.id && Object.assign(t, { id: e.id }), t;
}, $r = (e) => {
  const t = {
    type: "text",
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    text: Cl(e.text) || "",
    fontSize: e.fontSize,
    verticalAlign: "top",
    strokeColor: e.color
  };
  return e.groupId && Object.assign(t, { groupIds: [e.groupId] }), e.id && Object.assign(t, { id: e.id }), t;
}, ai = (e) => {
  const t = {
    text: Cl(e?.label?.text || ""),
    fontSize: e?.label?.fontSize,
    textAlign: e.label?.textAlign,
    verticalAlign: e.label?.verticalAlign || "middle",
    strokeColor: e.label?.color || "#000",
    ...e.groupId ? { groupIds: [e.groupId] } : {}
  };
  let r = {};
  e.type === "rectangle" && e.subtype === "activation" && (r = {
    backgroundColor: "#e9ecef",
    fillStyle: "solid"
  });
  const i = {
    id: e.id,
    type: e.type,
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    label: t,
    strokeStyle: e?.strokeStyle,
    strokeWidth: e?.strokeWidth,
    strokeColor: e?.strokeColor,
    backgroundColor: e?.bgColor,
    fillStyle: "solid",
    ...r
  };
  return e.groupId && Object.assign(i, { groupIds: [e.groupId] }), i;
}, bl = (e) => {
  const t = {
    type: "arrow",
    x: e.startX,
    y: e.startY,
    points: e.points?.map(([r, i]) => ds(r, i)) || [
      ds(0, 0),
      ds(e.endX - e.startX, e.endY - e.startY)
    ],
    width: e.endX - e.startX,
    height: e.endY - e.startY,
    strokeStyle: e?.strokeStyle || "solid",
    endArrowhead: e?.endArrowhead || null,
    startArrowhead: e?.startArrowhead || null,
    label: {
      text: Cl(e?.label?.text || ""),
      fontSize: 16,
      textAlign: e?.label?.textAlign,
      verticalAlign: e?.label?.verticalAlign
    },
    roundness: {
      type: 2
    },
    start: e.start,
    end: e.end
  };
  return e.groupId && Object.assign(t, { groupIds: [e.groupId] }), t;
}, Zs = 10, Ha = 16, yx = 24, xx = 4, Cx = (e) => {
  if (!e)
    return !0;
  const t = e.trim().toLowerCase();
  return t === "transparent" || t === "none" || t === "rgba(0,0,0,0)" || t === "rgba(0, 0, 0, 0)";
}, bx = (e, t) => Math.max(20, Math.round(e.length * t * 0.6)), tc = (e, t, r = !0) => {
  const i = e, s = i.groupIds ?? [];
  if (s.includes(t) || (i.groupIds = [...s, t]), !r || !i.label)
    return;
  const o = i.label.groupIds ?? [];
  o.includes(t) || (i.label.groupIds = [...o, t]);
}, kx = new Ii({
  converter: (e) => {
    const t = [], r = [];
    if (Object.values(e.nodes).forEach((i) => {
      !i || !i.length || i.forEach((s) => {
        let o;
        switch (s.type) {
          case "line":
            o = Mr(s);
            break;
          case "rectangle":
          case "ellipse":
            o = ai(s);
            break;
          case "text":
            o = $r(s);
            break;
          default:
            throw `unknown type ${s.type}`;
        }
        s.type === "rectangle" && s?.subtype === "activation" ? r.push(o) : t.push(o);
      });
    }), Object.values(e.lines).forEach((i) => {
      i && t.push(Mr(i));
    }), Object.values(e.arrows).forEach((i) => {
      i && (t.push(bl(i)), i.sequenceNumber && t.push(ai(i.sequenceNumber)));
    }), t.push(...r), e.loops) {
      const { lines: i, texts: s, nodes: o } = e.loops;
      i.forEach((a) => {
        t.push(Mr(a));
      }), s.forEach((a) => {
        t.push($r(a));
      }), o.forEach((a) => {
        t.push(ai(a));
      });
    }
    return e.groups && e.groups.forEach((i) => {
      const { actorKeys: s, name: o } = i;
      let a = 1 / 0, n = 1 / 0, l = 0, c = 0;
      if (!s.length)
        return;
      const h = t.filter((C) => {
        if (C.id) {
          const k = C.id.indexOf("-"), T = C.id.substring(0, k);
          return s.includes(T);
        }
        return !1;
      });
      if (!h.length || (h.forEach((C) => {
        C.x === void 0 || C.y === void 0 || C.width === void 0 || C.height === void 0 || (a = Math.min(a, C.x), n = Math.min(n, C.y), l = Math.max(l, C.x + C.width), c = Math.max(c, C.y + C.height));
      }), !Number.isFinite(a) || !Number.isFinite(n) || !Number.isFinite(l) || !Number.isFinite(c)))
        return;
      const d = a - Zs, f = n - Zs, u = l - a + Zs * 2, p = c - n + Zs * 2, m = fe(), y = fe(), x = ai({
        type: "rectangle",
        x: d,
        y: f,
        width: u,
        height: p,
        bgColor: Cx(i.fill) ? void 0 : i.fill,
        strokeColor: "#1f1f1f",
        strokeWidth: 1,
        id: m,
        groupId: y
      });
      if (t.unshift(x), t.forEach((C) => {
        C.id !== m && (C.x === void 0 || C.y === void 0 || C.width === void 0 || C.height === void 0 || C.x >= a && C.x + C.width <= l && C.y >= n && C.y + C.height <= c && tc(C, y));
      }), o) {
        const C = $r({
          id: fe(),
          text: o,
          x: d + xx,
          y: f - yx,
          width: bx(o, Ha),
          height: Ha + 8,
          fontSize: Ha,
          color: "#1f1f1f",
          groupId: y
        });
        tc(C, y, !1), t.push(C);
      }
    }), { elements: t };
  }
}), Sx = new Ii({
  converter: (e) => {
    const t = [];
    return e.nodes.forEach((r) => {
      !r || !r.length || r.forEach((i) => {
        let s;
        switch (i.type) {
          case "line":
            s = Mr(i);
            break;
          case "rectangle":
          case "ellipse":
            s = ai(i);
            break;
          case "text":
            s = $r(i);
            break;
          default:
            throw `unknown type ${i.type}`;
        }
        t.push(s);
      });
    }), Object.values(e.lines).forEach((r) => {
      r && t.push(Mr(r));
    }), Object.values(e.arrows).forEach((r) => {
      if (!r)
        return;
      const i = bl(r);
      t.push(i);
    }), Object.values(e.text).forEach((r) => {
      const i = $r(r);
      t.push(i);
    }), Object.values(e.namespaces).forEach((r) => {
      const i = Object.keys(r.classes), s = [...i], o = [...e.lines, ...e.arrows, ...e.text];
      i.forEach((n) => {
        const l = o.filter((c) => c.metadata && c.metadata.classId === n).map((c) => c.id);
        l.length && s.push(...l);
      });
      const a = {
        type: "frame",
        id: fe(),
        name: r.id,
        children: s
      };
      t.push(a);
    }), { elements: t };
  }
}), wx = new Ii({
  converter: (e) => {
    const t = [];
    return e.nodes.forEach((r) => {
      !r || !r.length || r.forEach((i) => {
        let s;
        switch (i.type) {
          case "line":
            s = Mr(i);
            break;
          case "rectangle":
          case "ellipse":
            s = ai(i);
            break;
          case "text":
            s = $r(i);
            break;
          default:
            throw `unknown type ${i.type}`;
        }
        t.push(s);
      });
    }), e.lines.forEach((r) => {
      t.push(Mr(r));
    }), e.arrows.forEach((r) => {
      t.push(bl(r));
    }), e.text.forEach((r) => {
      t.push($r(r));
    }), { elements: t };
  }
}), _o = (e, t) => [e, t], es = 16, iu = 14, Tx = 1, gn = "#000000", su = 5, _x = su * 2, vx = su * 2, Bx = 1.25, ou = /* @__PURE__ */ new Set([
  "choice",
  "fork",
  "join",
  "stateStart",
  "stateEnd",
  "divider"
]), mn = (e) => e.shape === "stateEnd" ? [`state_end_group_${e.id}`] : void 0, au = (e) => e.shape === "rectWithTitle" && e.description.length ? [e.text, ...e.description].join(`
`) : e.text;
let Sr;
const Lx = () => {
  if (Sr !== void 0)
    return Sr;
  if (typeof document > "u")
    return Sr = null, Sr;
  try {
    Sr = document.createElement("canvas").getContext("2d");
  } catch {
    Sr = null;
  }
  return Sr;
}, vi = (e, t) => {
  const r = Lx();
  return r ? (r.font = `${t}px Excalifont, sans-serif`, r.measureText(e).width) : e.length * t * 0.6;
}, Ax = (e, t, r) => {
  if (vi(e, t) <= r)
    return [e];
  const i = [];
  let s = "";
  for (const o of e) {
    const a = `${s}${o}`;
    if (s && vi(a, t) > r) {
      i.push(s), s = o;
      continue;
    }
    s = a;
  }
  return s && i.push(s), i;
}, Ex = (e, t, r) => {
  if (!e.trim() || vi(e, t) <= r)
    return e;
  const i = e.split(/\s+/).filter(Boolean), s = [];
  let o = "";
  for (const a of i) {
    const n = Ax(a, t, r);
    for (const [l, c] of n.entries()) {
      const d = o ? `${o}${o && l === 0 ? " " : ""}${c}` : c;
      if (vi(d, t) <= r) {
        o = d;
        continue;
      }
      o && s.push(o), o = c;
    }
    n.length > 1;
  }
  return s.push(o), s.join(`
`);
}, Fx = (e, t, r) => {
  const s = e.map((n) => Ex(n, t, r)).join(`
`).split(`
`), o = Math.max(...s.map((n) => vi(n, t))), a = s.length * t * Bx;
  return {
    width: o,
    height: a
  };
}, Mx = (e, t, r, i) => {
  const s = e.split(`
`);
  for (let o = es; o >= iu; o -= Tx) {
    const { height: a } = Fx(s, o, t);
    if (a <= r)
      return o;
  }
  return i;
}, $x = (e) => {
  const t = au(e);
  if (!t || ou.has(e.shape))
    return es;
  const r = Math.max(1, e.width - _x), i = Math.max(1, e.height - vx), s = t.split(`
`);
  return s.length > 1 && Math.max(...s.map((a) => vi(a, es))) <= r ? es : Mx(t, r, i, s.length === 1 ? es : iu);
}, Ox = (e) => {
  if (ou.has(e.shape))
    return;
  const t = au(e);
  if (t)
    return {
      text: t,
      fontSize: $x(e),
      verticalAlign: e.shape === "rectWithTitle" || e.shape === "roundedWithTitle" ? "top" : "middle",
      ...pn(e.labelStyle)
    };
}, Ix = (e) => {
  const t = xs(e.containerStyle), r = Ox(e), i = e.shape === "choice" ? "diamond" : e.shape === "stateStart" || e.shape === "stateEnd" ? "ellipse" : "rectangle", s = e.shape === "rect" || e.shape === "rectWithTitle" || e.shape === "roundedWithTitle", o = e.shape === "stateStart" || e.shape === "fork" || e.shape === "join", a = t.backgroundColor || t.strokeColor || gn, n = t.strokeColor || t.backgroundColor || gn;
  return {
    id: e.id,
    type: i,
    ...mn(e) ? { groupIds: mn(e) } : {},
    x: e.x,
    y: e.y,
    width: e.width,
    height: e.height,
    ...r ? { label: r } : {},
    ...t,
    ...s ? { roundness: { type: 3 } } : {},
    ...o ? {
      backgroundColor: a,
      strokeColor: n,
      fillStyle: "solid"
    } : {}
  };
}, Dx = (e) => {
  if (!e.dividerLine)
    return null;
  const t = xs(e.containerStyle);
  return {
    id: `${e.id}__divider`,
    type: "line",
    x: e.dividerLine.startX,
    y: e.dividerLine.startY,
    width: e.dividerLine.endX - e.dividerLine.startX,
    height: e.dividerLine.endY - e.dividerLine.startY,
    points: [
      _o(0, 0),
      _o(e.dividerLine.endX - e.dividerLine.startX, e.dividerLine.endY - e.dividerLine.startY)
    ],
    strokeColor: t.strokeColor || "#000",
    strokeWidth: t.strokeWidth || 1
  };
}, Rx = (e) => {
  const t = xs(e.containerStyle), r = Math.max(2, Math.min(e.width, e.height) * 0.32), i = e.endInnerColor || t.strokeColor || t.backgroundColor || gn;
  return {
    id: `${e.id}__inner`,
    type: "ellipse",
    groupIds: mn(e),
    x: e.x + r,
    y: e.y + r,
    width: Math.max(1, e.width - r * 2),
    height: Math.max(1, e.height - r * 2),
    backgroundColor: i,
    strokeColor: i,
    fillStyle: "solid",
    strokeWidth: 1
  };
}, Px = (e) => {
  const t = e.reflectionPoints.map((r, i, s) => {
    const o = s[0];
    return i === 0 ? _o(0, 0) : _o(r.x - o.x, r.y - o.y);
  });
  return {
    id: e.id,
    type: "arrow",
    x: e.startX,
    y: e.startY,
    width: e.endX - e.startX,
    height: e.endY - e.startY,
    points: t,
    strokeColor: e.strokeColor || "#000",
    strokeWidth: e.strokeWidth || 2,
    strokeStyle: e.strokeStyle || "solid",
    endArrowhead: e.isNoteEdge ? null : "triangle",
    roundness: { type: 2 },
    start: { id: e.start },
    end: { id: e.end },
    ...e.text ? {
      label: {
        text: e.text,
        fontSize: 16
      }
    } : {}
  };
}, Nx = new Ii({
  converter: (e) => {
    const t = [];
    return e.nodes.forEach((r) => {
      if (!r.isRenderable)
        return;
      const i = Ix(r);
      t.push(i);
      const s = Dx(r);
      s && t.push(s), r.shape === "stateEnd" && t.push(Rx(r));
    }), e.edges.forEach((r) => {
      t.push(Px(r));
    }), { elements: t };
  }
}), le = (e) => {
  e = Wx(e);
  const t = e.replace(/#(\d+);/g, "&#$1;").replace(/#([a-z]+);/g, "&$1;"), r = document.createElement("textarea");
  return r.innerHTML = t, r.value;
}, Or = (e) => {
  const r = e.getAttribute("transform")?.match(/translate\(([ \d.-]+),\s*([\d.-]+)\)/);
  let i = 0, s = 0;
  return r && (i = Number(r[1]), s = Number(r[2])), { transformX: i, transformY: s };
}, qx = (e) => {
  let t = e;
  return t = t.replace(/style.*:\S*#.*;/g, (r) => r.substring(0, r.length - 1)), t = t.replace(/classDef.*:\S*#.*;/g, (r) => r.substring(0, r.length - 1)), t = t.replace(/#\w+;/g, (r) => {
    const i = r.substring(1, r.length - 1);
    return /^\+?\d+$/.test(i) ? `ﬂ°°${i}¶ß` : `ﬂ°${i}¶ß`;
  }), t;
}, Wx = function(e) {
  return e.replace(/ﬂ°°/g, "#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, zx = 0.5, kl = (e, t = zx) => {
  const r = [];
  return e.forEach((i) => {
    const s = r[r.length - 1];
    if (!s) {
      r.push(i);
      return;
    }
    Math.hypot(i[0] - s[0], i[1] - s[1]) <= t || r.push(i);
  }), r;
}, Sl = (e) => {
  const t = e.getAttribute("d");
  if (!t)
    return null;
  const r = Array.from(t.matchAll(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi), (i) => Number(i[0]));
  return r.length < 4 ? null : {
    startX: r[0],
    startY: r[1],
    endX: r[r.length - 2],
    endY: r[r.length - 1]
  };
}, nu = (e) => {
  const t = e.getAttribute("data-points");
  if (!t) {
    const r = Sl(e);
    return r ? [
      { x: r.startX, y: r.startY },
      { x: r.endX, y: r.endY }
    ] : [];
  }
  try {
    const r = atob(t), i = JSON.parse(r);
    return Array.isArray(i) ? i.filter((s) => s && typeof s.x == "number" && typeof s.y == "number" && Number.isFinite(s.x) && Number.isFinite(s.y)) : [];
  } catch {
    return [];
  }
}, lu = (e, t = { x: 0, y: 0 }, r = "LM") => {
  if (e.tagName.toLowerCase() !== "path")
    throw new Error(`Invalid input: Expected an HTMLElement of tag "path", got ${e.tagName}`);
  const i = e.getAttribute("d");
  if (!i)
    throw new Error('Path element does not contain a "d" attribute');
  const s = i.split(new RegExp(`(?=[${r}])`)), o = s[0].substring(1).split(",").map((l) => parseFloat(l)), a = s[s.length - 1].substring(1).split(",").map((l) => parseFloat(l)), n = s.map((l) => {
    const c = l[0], h = l.substring(1).split(",").map((d) => parseFloat(d));
    return c === "C" ? {
      x: h[4],
      y: h[5],
      command: c
    } : { x: h[0], y: h[1], command: c };
  }).filter((l, c, h) => {
    if (c === 0 || c === h.length - 1)
      return !0;
    if (l.x === h[c - 1].x && l.y === h[c - 1].y || c === h.length - 2 && l.command === "C")
      return !1;
    if (c === h.length - 2 && (h[c - 1].x === l.x || h[c - 1].y === l.y)) {
      const d = h[h.length - 1];
      return Math.hypot(d.x - l.x, d.y - l.y) > 20;
    }
    return l.x !== h[c - 1].x || l.y !== h[c - 1].y;
  }).map((l) => ({
    x: l.x + t.x,
    y: l.y + t.y
  }));
  return {
    startX: o[0] + t.x,
    startY: o[1] + t.y,
    endX: a[0] + t.x,
    endY: a[1] + t.y,
    reflectionPoints: n
  };
}, Hx = (e) => ({
  ...e,
  elements: e.elements.map((t) => {
    if (!("points" in t) || !Array.isArray(t.points))
      return t;
    const r = t.points;
    if (r.length < 2)
      return t;
    const i = kl(r);
    return i.length === r.length ? t : {
      ...t,
      points: i
    };
  })
}), Yx = (e, t = {}) => {
  const r = (() => {
    switch (e.type) {
      case "graphImage":
        return mx.convert(e, t);
      case "flowchart":
        return gx.convert(e, t);
      case "sequence":
        return kx.convert(e, t);
      case "class":
        return Sx.convert(e, t);
      case "erd":
        return wx.convert(e, t);
      case "state":
        return Nx.convert(e, t);
      default:
        throw new Error(`graphToExcalidraw: unknown graph type "${e.type}, only flowcharts are supported!"`);
    }
  })();
  return Hx(r);
};
var co = { exports: {} }, Ux = co.exports, ec;
function Xx() {
  return ec || (ec = 1, (function(e, t) {
    (function(r, i) {
      e.exports = i();
    })(Ux, (function() {
      var r = 1e3, i = 6e4, s = 36e5, o = "millisecond", a = "second", n = "minute", l = "hour", c = "day", h = "week", d = "month", f = "quarter", u = "year", p = "date", m = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, x = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(R) {
        var M = ["th", "st", "nd", "rd"], E = R % 100;
        return "[" + R + (M[(E - 20) % 10] || M[E] || M[0]) + "]";
      } }, k = function(R, M, E) {
        var B = String(R);
        return !B || B.length >= M ? R : "" + Array(M + 1 - B.length).join(E) + R;
      }, T = { s: k, z: function(R) {
        var M = -R.utcOffset(), E = Math.abs(M), B = Math.floor(E / 60), F = E % 60;
        return (M <= 0 ? "+" : "-") + k(B, 2, "0") + ":" + k(F, 2, "0");
      }, m: function R(M, E) {
        if (M.date() < E.date()) return -R(E, M);
        var B = 12 * (E.year() - M.year()) + (E.month() - M.month()), F = M.clone().add(B, d), z = E - F < 0, Y = M.clone().add(B + (z ? -1 : 1), d);
        return +(-(B + (E - F) / (z ? F - Y : Y - F)) || 0);
      }, a: function(R) {
        return R < 0 ? Math.ceil(R) || 0 : Math.floor(R);
      }, p: function(R) {
        return { M: d, y: u, w: h, d: c, D: p, h: l, m: n, s: a, ms: o, Q: f }[R] || String(R || "").toLowerCase().replace(/s$/, "");
      }, u: function(R) {
        return R === void 0;
      } }, w = "en", _ = {};
      _[w] = C;
      var A = "$isDayjsObject", v = function(R) {
        return R instanceof H || !(!R || !R[A]);
      }, N = function R(M, E, B) {
        var F;
        if (!M) return w;
        if (typeof M == "string") {
          var z = M.toLowerCase();
          _[z] && (F = z), E && (_[z] = E, F = z);
          var Y = M.split("-");
          if (!F && Y.length > 1) return R(Y[0]);
        } else {
          var G = M.name;
          _[G] = M, F = G;
        }
        return !B && F && (w = F), F || !B && w;
      }, O = function(R, M) {
        if (v(R)) return R.clone();
        var E = typeof M == "object" ? M : {};
        return E.date = R, E.args = arguments, new H(E);
      }, P = T;
      P.l = N, P.i = v, P.w = function(R, M) {
        return O(R, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
      };
      var H = (function() {
        function R(E) {
          this.$L = N(E.locale, null, !0), this.parse(E), this.$x = this.$x || E.x || {}, this[A] = !0;
        }
        var M = R.prototype;
        return M.parse = function(E) {
          this.$d = (function(B) {
            var F = B.date, z = B.utc;
            if (F === null) return /* @__PURE__ */ new Date(NaN);
            if (P.u(F)) return /* @__PURE__ */ new Date();
            if (F instanceof Date) return new Date(F);
            if (typeof F == "string" && !/Z$/i.test(F)) {
              var Y = F.match(y);
              if (Y) {
                var G = Y[2] - 1 || 0, ht = (Y[7] || "0").substring(0, 3);
                return z ? new Date(Date.UTC(Y[1], G, Y[3] || 1, Y[4] || 0, Y[5] || 0, Y[6] || 0, ht)) : new Date(Y[1], G, Y[3] || 1, Y[4] || 0, Y[5] || 0, Y[6] || 0, ht);
              }
            }
            return new Date(F);
          })(E), this.init();
        }, M.init = function() {
          var E = this.$d;
          this.$y = E.getFullYear(), this.$M = E.getMonth(), this.$D = E.getDate(), this.$W = E.getDay(), this.$H = E.getHours(), this.$m = E.getMinutes(), this.$s = E.getSeconds(), this.$ms = E.getMilliseconds();
        }, M.$utils = function() {
          return P;
        }, M.isValid = function() {
          return this.$d.toString() !== m;
        }, M.isSame = function(E, B) {
          var F = O(E);
          return this.startOf(B) <= F && F <= this.endOf(B);
        }, M.isAfter = function(E, B) {
          return O(E) < this.startOf(B);
        }, M.isBefore = function(E, B) {
          return this.endOf(B) < O(E);
        }, M.$g = function(E, B, F) {
          return P.u(E) ? this[B] : this.set(F, E);
        }, M.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, M.valueOf = function() {
          return this.$d.getTime();
        }, M.startOf = function(E, B) {
          var F = this, z = !!P.u(B) || B, Y = P.p(E), G = function(Bt, _t) {
            var dt = P.w(F.$u ? Date.UTC(F.$y, _t, Bt) : new Date(F.$y, _t, Bt), F);
            return z ? dt : dt.endOf(c);
          }, ht = function(Bt, _t) {
            return P.w(F.toDate()[Bt].apply(F.toDate("s"), (z ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(_t)), F);
          }, rt = this.$W, lt = this.$M, ct = this.$D, it = "set" + (this.$u ? "UTC" : "");
          switch (Y) {
            case u:
              return z ? G(1, 0) : G(31, 11);
            case d:
              return z ? G(1, lt) : G(0, lt + 1);
            case h:
              var gt = this.$locale().weekStart || 0, wt = (rt < gt ? rt + 7 : rt) - gt;
              return G(z ? ct - wt : ct + (6 - wt), lt);
            case c:
            case p:
              return ht(it + "Hours", 0);
            case l:
              return ht(it + "Minutes", 1);
            case n:
              return ht(it + "Seconds", 2);
            case a:
              return ht(it + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, M.endOf = function(E) {
          return this.startOf(E, !1);
        }, M.$set = function(E, B) {
          var F, z = P.p(E), Y = "set" + (this.$u ? "UTC" : ""), G = (F = {}, F[c] = Y + "Date", F[p] = Y + "Date", F[d] = Y + "Month", F[u] = Y + "FullYear", F[l] = Y + "Hours", F[n] = Y + "Minutes", F[a] = Y + "Seconds", F[o] = Y + "Milliseconds", F)[z], ht = z === c ? this.$D + (B - this.$W) : B;
          if (z === d || z === u) {
            var rt = this.clone().set(p, 1);
            rt.$d[G](ht), rt.init(), this.$d = rt.set(p, Math.min(this.$D, rt.daysInMonth())).$d;
          } else G && this.$d[G](ht);
          return this.init(), this;
        }, M.set = function(E, B) {
          return this.clone().$set(E, B);
        }, M.get = function(E) {
          return this[P.p(E)]();
        }, M.add = function(E, B) {
          var F, z = this;
          E = Number(E);
          var Y = P.p(B), G = function(lt) {
            var ct = O(z);
            return P.w(ct.date(ct.date() + Math.round(lt * E)), z);
          };
          if (Y === d) return this.set(d, this.$M + E);
          if (Y === u) return this.set(u, this.$y + E);
          if (Y === c) return G(1);
          if (Y === h) return G(7);
          var ht = (F = {}, F[n] = i, F[l] = s, F[a] = r, F)[Y] || 1, rt = this.$d.getTime() + E * ht;
          return P.w(rt, this);
        }, M.subtract = function(E, B) {
          return this.add(-1 * E, B);
        }, M.format = function(E) {
          var B = this, F = this.$locale();
          if (!this.isValid()) return F.invalidDate || m;
          var z = E || "YYYY-MM-DDTHH:mm:ssZ", Y = P.z(this), G = this.$H, ht = this.$m, rt = this.$M, lt = F.weekdays, ct = F.months, it = F.meridiem, gt = function(_t, dt, ye, Tt) {
            return _t && (_t[dt] || _t(B, z)) || ye[dt].slice(0, Tt);
          }, wt = function(_t) {
            return P.s(G % 12 || 12, _t, "0");
          }, Bt = it || function(_t, dt, ye) {
            var Tt = _t < 12 ? "AM" : "PM";
            return ye ? Tt.toLowerCase() : Tt;
          };
          return z.replace(x, (function(_t, dt) {
            return dt || (function(ye) {
              switch (ye) {
                case "YY":
                  return String(B.$y).slice(-2);
                case "YYYY":
                  return P.s(B.$y, 4, "0");
                case "M":
                  return rt + 1;
                case "MM":
                  return P.s(rt + 1, 2, "0");
                case "MMM":
                  return gt(F.monthsShort, rt, ct, 3);
                case "MMMM":
                  return gt(ct, rt);
                case "D":
                  return B.$D;
                case "DD":
                  return P.s(B.$D, 2, "0");
                case "d":
                  return String(B.$W);
                case "dd":
                  return gt(F.weekdaysMin, B.$W, lt, 2);
                case "ddd":
                  return gt(F.weekdaysShort, B.$W, lt, 3);
                case "dddd":
                  return lt[B.$W];
                case "H":
                  return String(G);
                case "HH":
                  return P.s(G, 2, "0");
                case "h":
                  return wt(1);
                case "hh":
                  return wt(2);
                case "a":
                  return Bt(G, ht, !0);
                case "A":
                  return Bt(G, ht, !1);
                case "m":
                  return String(ht);
                case "mm":
                  return P.s(ht, 2, "0");
                case "s":
                  return String(B.$s);
                case "ss":
                  return P.s(B.$s, 2, "0");
                case "SSS":
                  return P.s(B.$ms, 3, "0");
                case "Z":
                  return Y;
              }
              return null;
            })(_t) || Y.replace(":", "");
          }));
        }, M.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, M.diff = function(E, B, F) {
          var z, Y = this, G = P.p(B), ht = O(E), rt = (ht.utcOffset() - this.utcOffset()) * i, lt = this - ht, ct = function() {
            return P.m(Y, ht);
          };
          switch (G) {
            case u:
              z = ct() / 12;
              break;
            case d:
              z = ct();
              break;
            case f:
              z = ct() / 3;
              break;
            case h:
              z = (lt - rt) / 6048e5;
              break;
            case c:
              z = (lt - rt) / 864e5;
              break;
            case l:
              z = lt / s;
              break;
            case n:
              z = lt / i;
              break;
            case a:
              z = lt / r;
              break;
            default:
              z = lt;
          }
          return F ? z : P.a(z);
        }, M.daysInMonth = function() {
          return this.endOf(d).$D;
        }, M.$locale = function() {
          return _[this.$L];
        }, M.locale = function(E, B) {
          if (!E) return this.$L;
          var F = this.clone(), z = N(E, B, !0);
          return z && (F.$L = z), F;
        }, M.clone = function() {
          return P.w(this.$d, this);
        }, M.toDate = function() {
          return new Date(this.valueOf());
        }, M.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, M.toISOString = function() {
          return this.$d.toISOString();
        }, M.toString = function() {
          return this.$d.toUTCString();
        }, R;
      })(), W = H.prototype;
      return O.prototype = W, [["$ms", o], ["$s", a], ["$m", n], ["$H", l], ["$W", c], ["$M", d], ["$y", u], ["$D", p]].forEach((function(R) {
        W[R[1]] = function(M) {
          return this.$g(M, R[0], R[1]);
        };
      })), O.extend = function(R, M) {
        return R.$i || (R(M, H, O), R.$i = !0), O;
      }, O.locale = N, O.isDayjs = v, O.unix = function(R) {
        return O(1e3 * R);
      }, O.en = _[w], O.Ls = _, O.p = {}, O;
    }));
  })(co)), co.exports;
}
var Gx = Xx();
const jx = /* @__PURE__ */ rx(Gx);
var hu = Object.defineProperty, g = (e, t) => hu(e, "name", { value: t, configurable: !0 }), Vx = (e, t) => {
  for (var r in t)
    hu(e, r, { get: t[r], enumerable: !0 });
}, Ye = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
}, q = {
  trace: /* @__PURE__ */ g((...e) => {
  }, "trace"),
  debug: /* @__PURE__ */ g((...e) => {
  }, "debug"),
  info: /* @__PURE__ */ g((...e) => {
  }, "info"),
  warn: /* @__PURE__ */ g((...e) => {
  }, "warn"),
  error: /* @__PURE__ */ g((...e) => {
  }, "error"),
  fatal: /* @__PURE__ */ g((...e) => {
  }, "fatal")
}, wl = /* @__PURE__ */ g(function(e = "fatal") {
  let t = Ye.fatal;
  typeof e == "string" ? e.toLowerCase() in Ye && (t = Ye[e]) : typeof e == "number" && (t = e), q.trace = () => {
  }, q.debug = () => {
  }, q.info = () => {
  }, q.warn = () => {
  }, q.error = () => {
  }, q.fatal = () => {
  }, t <= Ye.fatal && (q.fatal = console.error ? console.error.bind(console, ue("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", ue("FATAL"))), t <= Ye.error && (q.error = console.error ? console.error.bind(console, ue("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", ue("ERROR"))), t <= Ye.warn && (q.warn = console.warn ? console.warn.bind(console, ue("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", ue("WARN"))), t <= Ye.info && (q.info = console.info ? console.info.bind(console, ue("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", ue("INFO"))), t <= Ye.debug && (q.debug = console.debug ? console.debug.bind(console, ue("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", ue("DEBUG"))), t <= Ye.trace && (q.trace = console.debug ? console.debug.bind(console, ue("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", ue("TRACE")));
}, "setLogLevel"), ue = /* @__PURE__ */ g((e) => `%c${jx().format("ss.SSS")} : ${e} : `, "format");
const uo = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    g: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    b: (e) => e >= 255 ? 255 : e < 0 ? 0 : e,
    h: (e) => e % 360,
    s: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    l: (e) => e >= 100 ? 100 : e < 0 ? 0 : e,
    a: (e) => e >= 1 ? 1 : e < 0 ? 0 : e
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (e) => {
    const t = e / 255;
    return e > 0.03928 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (e, t, r) => (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e),
  hsl2rgb: ({ h: e, s: t, l: r }, i) => {
    if (!t)
      return r * 2.55;
    e /= 360, t /= 100, r /= 100;
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, o = 2 * r - s;
    switch (i) {
      case "r":
        return uo.hue2rgb(o, s, e + 1 / 3) * 255;
      case "g":
        return uo.hue2rgb(o, s, e) * 255;
      case "b":
        return uo.hue2rgb(o, s, e - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: e, g: t, b: r }, i) => {
    e /= 255, t /= 255, r /= 255;
    const s = Math.max(e, t, r), o = Math.min(e, t, r), a = (s + o) / 2;
    if (i === "l")
      return a * 100;
    if (s === o)
      return 0;
    const n = s - o, l = a > 0.5 ? n / (2 - s - o) : n / (s + o);
    if (i === "s")
      return l * 100;
    switch (s) {
      case e:
        return ((t - r) / n + (t < r ? 6 : 0)) * 60;
      case t:
        return ((r - e) / n + 2) * 60;
      case r:
        return ((e - t) / n + 4) * 60;
      default:
        return -1;
    }
  }
}, Zx = {
  /* API */
  clamp: (e, t, r) => t > r ? Math.min(t, Math.max(r, e)) : Math.min(r, Math.max(t, e)),
  round: (e) => Math.round(e * 1e10) / 1e10
}, Kx = {
  /* API */
  dec2hex: (e) => {
    const t = Math.round(e).toString(16);
    return t.length > 1 ? t : `0${t}`;
  }
}, nt = {
  channel: uo,
  lang: Zx,
  unit: Kx
}, nr = {};
for (let e = 0; e <= 255; e++)
  nr[e] = nt.unit.dec2hex(e);
const Gt = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
class Qx {
  constructor() {
    this.type = Gt.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(t) {
    if (this.type && this.type !== t)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = t;
  }
  reset() {
    this.type = Gt.ALL;
  }
  is(t) {
    return this.type === t;
  }
}
class Jx {
  /* CONSTRUCTOR */
  constructor(t, r) {
    this.color = r, this.changed = !1, this.data = t, this.type = new Qx();
  }
  /* API */
  set(t, r) {
    return this.color = r, this.changed = !1, this.data = t, this.type.type = Gt.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const t = this.data, { h: r, s: i, l: s } = t;
    r === void 0 && (t.h = nt.channel.rgb2hsl(t, "h")), i === void 0 && (t.s = nt.channel.rgb2hsl(t, "s")), s === void 0 && (t.l = nt.channel.rgb2hsl(t, "l"));
  }
  _ensureRGB() {
    const t = this.data, { r, g: i, b: s } = t;
    r === void 0 && (t.r = nt.channel.hsl2rgb(t, "r")), i === void 0 && (t.g = nt.channel.hsl2rgb(t, "g")), s === void 0 && (t.b = nt.channel.hsl2rgb(t, "b"));
  }
  /* GETTERS */
  get r() {
    const t = this.data, r = t.r;
    return !this.type.is(Gt.HSL) && r !== void 0 ? r : (this._ensureHSL(), nt.channel.hsl2rgb(t, "r"));
  }
  get g() {
    const t = this.data, r = t.g;
    return !this.type.is(Gt.HSL) && r !== void 0 ? r : (this._ensureHSL(), nt.channel.hsl2rgb(t, "g"));
  }
  get b() {
    const t = this.data, r = t.b;
    return !this.type.is(Gt.HSL) && r !== void 0 ? r : (this._ensureHSL(), nt.channel.hsl2rgb(t, "b"));
  }
  get h() {
    const t = this.data, r = t.h;
    return !this.type.is(Gt.RGB) && r !== void 0 ? r : (this._ensureRGB(), nt.channel.rgb2hsl(t, "h"));
  }
  get s() {
    const t = this.data, r = t.s;
    return !this.type.is(Gt.RGB) && r !== void 0 ? r : (this._ensureRGB(), nt.channel.rgb2hsl(t, "s"));
  }
  get l() {
    const t = this.data, r = t.l;
    return !this.type.is(Gt.RGB) && r !== void 0 ? r : (this._ensureRGB(), nt.channel.rgb2hsl(t, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(t) {
    this.type.set(Gt.RGB), this.changed = !0, this.data.r = t;
  }
  set g(t) {
    this.type.set(Gt.RGB), this.changed = !0, this.data.g = t;
  }
  set b(t) {
    this.type.set(Gt.RGB), this.changed = !0, this.data.b = t;
  }
  set h(t) {
    this.type.set(Gt.HSL), this.changed = !0, this.data.h = t;
  }
  set s(t) {
    this.type.set(Gt.HSL), this.changed = !0, this.data.s = t;
  }
  set l(t) {
    this.type.set(Gt.HSL), this.changed = !0, this.data.l = t;
  }
  set a(t) {
    this.changed = !0, this.data.a = t;
  }
}
const aa = new Jx({ r: 0, g: 0, b: 0, a: 0 }, "transparent"), hi = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (e) => {
    if (e.charCodeAt(0) !== 35)
      return;
    const t = e.match(hi.re);
    if (!t)
      return;
    const r = t[1], i = parseInt(r, 16), s = r.length, o = s % 4 === 0, a = s > 4, n = a ? 1 : 17, l = a ? 8 : 4, c = o ? 0 : -1, h = a ? 255 : 15;
    return aa.set({
      r: (i >> l * (c + 3) & h) * n,
      g: (i >> l * (c + 2) & h) * n,
      b: (i >> l * (c + 1) & h) * n,
      a: o ? (i & h) * n / 255 : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: s } = e;
    return s < 1 ? `#${nr[Math.round(t)]}${nr[Math.round(r)]}${nr[Math.round(i)]}${nr[Math.round(s * 255)]}` : `#${nr[Math.round(t)]}${nr[Math.round(r)]}${nr[Math.round(i)]}`;
  }
}, Lr = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (e) => {
    const t = e.match(Lr.hueRe);
    if (t) {
      const [, r, i] = t;
      switch (i) {
        case "grad":
          return nt.channel.clamp.h(parseFloat(r) * 0.9);
        case "rad":
          return nt.channel.clamp.h(parseFloat(r) * 180 / Math.PI);
        case "turn":
          return nt.channel.clamp.h(parseFloat(r) * 360);
      }
    }
    return nt.channel.clamp.h(parseFloat(e));
  },
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 104 && t !== 72)
      return;
    const r = e.match(Lr.re);
    if (!r)
      return;
    const [, i, s, o, a, n] = r;
    return aa.set({
      h: Lr._hue2deg(i),
      s: nt.channel.clamp.s(parseFloat(s)),
      l: nt.channel.clamp.l(parseFloat(o)),
      a: a ? nt.channel.clamp.a(n ? parseFloat(a) / 100 : parseFloat(a)) : 1
    }, e);
  },
  stringify: (e) => {
    const { h: t, s: r, l: i, a: s } = e;
    return s < 1 ? `hsla(${nt.lang.round(t)}, ${nt.lang.round(r)}%, ${nt.lang.round(i)}%, ${s})` : `hsl(${nt.lang.round(t)}, ${nt.lang.round(r)}%, ${nt.lang.round(i)}%)`;
  }
}, us = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (e) => {
    e = e.toLowerCase();
    const t = us.colors[e];
    if (t)
      return hi.parse(t);
  },
  stringify: (e) => {
    const t = hi.stringify(e);
    for (const r in us.colors)
      if (us.colors[r] === t)
        return r;
  }
}, rs = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (e) => {
    const t = e.charCodeAt(0);
    if (t !== 114 && t !== 82)
      return;
    const r = e.match(rs.re);
    if (!r)
      return;
    const [, i, s, o, a, n, l, c, h] = r;
    return aa.set({
      r: nt.channel.clamp.r(s ? parseFloat(i) * 2.55 : parseFloat(i)),
      g: nt.channel.clamp.g(a ? parseFloat(o) * 2.55 : parseFloat(o)),
      b: nt.channel.clamp.b(l ? parseFloat(n) * 2.55 : parseFloat(n)),
      a: c ? nt.channel.clamp.a(h ? parseFloat(c) / 100 : parseFloat(c)) : 1
    }, e);
  },
  stringify: (e) => {
    const { r: t, g: r, b: i, a: s } = e;
    return s < 1 ? `rgba(${nt.lang.round(t)}, ${nt.lang.round(r)}, ${nt.lang.round(i)}, ${nt.lang.round(s)})` : `rgb(${nt.lang.round(t)}, ${nt.lang.round(r)}, ${nt.lang.round(i)})`;
  }
}, Pe = {
  /* VARIABLES */
  format: {
    keyword: us,
    hex: hi,
    rgb: rs,
    rgba: rs,
    hsl: Lr,
    hsla: Lr
  },
  /* API */
  parse: (e) => {
    if (typeof e != "string")
      return e;
    const t = hi.parse(e) || rs.parse(e) || Lr.parse(e) || us.parse(e);
    if (t)
      return t;
    throw new Error(`Unsupported color format: "${e}"`);
  },
  stringify: (e) => !e.changed && e.color ? e.color : e.type.is(Gt.HSL) || e.data.r === void 0 ? Lr.stringify(e) : e.a < 1 || !Number.isInteger(e.r) || !Number.isInteger(e.g) || !Number.isInteger(e.b) ? rs.stringify(e) : hi.stringify(e)
}, cu = (e, t) => {
  const r = Pe.parse(e);
  for (const i in t)
    r[i] = nt.channel.clamp[i](t[i]);
  return Pe.stringify(r);
}, fr = (e, t, r = 0, i = 1) => {
  if (typeof e != "number")
    return cu(e, { a: t });
  const s = aa.set({
    r: nt.channel.clamp.r(e),
    g: nt.channel.clamp.g(t),
    b: nt.channel.clamp.b(r),
    a: nt.channel.clamp.a(i)
  });
  return Pe.stringify(s);
}, tC = (e) => {
  const { r: t, g: r, b: i } = Pe.parse(e), s = 0.2126 * nt.channel.toLinear(t) + 0.7152 * nt.channel.toLinear(r) + 0.0722 * nt.channel.toLinear(i);
  return nt.lang.round(s);
}, eC = (e) => tC(e) >= 0.5, Be = (e) => !eC(e), du = (e, t, r) => {
  const i = Pe.parse(e), s = i[t], o = nt.channel.clamp[t](s + r);
  return s !== o && (i[t] = o), Pe.stringify(i);
}, I = (e, t) => du(e, "l", t), D = (e, t) => du(e, "l", -t), b = (e, t) => {
  const r = Pe.parse(e), i = {};
  for (const s in t)
    t[s] && (i[s] = r[s] + t[s]);
  return cu(e, i);
}, rC = (e, t, r = 50) => {
  const { r: i, g: s, b: o, a } = Pe.parse(e), { r: n, g: l, b: c, a: h } = Pe.parse(t), d = r / 100, f = d * 2 - 1, u = a - h, m = ((f * u === -1 ? f : (f + u) / (1 + f * u)) + 1) / 2, y = 1 - m, x = i * m + n * y, C = s * m + l * y, k = o * m + c * y, T = a * d + h * (1 - d);
  return fr(x, C, k, T);
}, L = (e, t = 100) => {
  const r = Pe.parse(e);
  return r.r = 255 - r.r, r.g = 255 - r.g, r.b = 255 - r.b, rC(r, e, t);
};
function rc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
  return i;
}
function iC(e) {
  if (Array.isArray(e)) return e;
}
function sC(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var i, s, o, a, n = [], l = !0, c = !1;
    try {
      if (o = (r = r.call(e)).next, t !== 0) for (; !(l = (i = o.call(r)).done) && (n.push(i.value), n.length !== t); l = !0) ;
    } catch (h) {
      c = !0, s = h;
    } finally {
      try {
        if (!l && r.return != null && (a = r.return(), Object(a) !== a)) return;
      } finally {
        if (c) throw s;
      }
    }
    return n;
  }
}
function oC() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aC(e, t) {
  return iC(e) || sC(e, t) || nC(e, t) || oC();
}
function nC(e, t) {
  if (e) {
    if (typeof e == "string") return rc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? rc(e, t) : void 0;
  }
}
const uu = Object.entries, ic = Object.setPrototypeOf, lC = Object.isFrozen, hC = Object.getPrototypeOf, cC = Object.getOwnPropertyDescriptor;
let Ut = Object.freeze, Xt = Object.seal, ri = Object.create, fu = typeof Reflect < "u" && Reflect, yn = fu.apply, xn = fu.construct;
Ut || (Ut = function(t) {
  return t;
});
Xt || (Xt = function(t) {
  return t;
});
yn || (yn = function(t, r) {
  for (var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++)
    s[o - 2] = arguments[o];
  return t.apply(r, s);
});
xn || (xn = function(t) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
    i[s - 1] = arguments[s];
  return new t(...i);
});
const Ui = It(Array.prototype.forEach), dC = It(Array.prototype.lastIndexOf), sc = It(Array.prototype.pop), Qr = It(Array.prototype.push), uC = It(Array.prototype.splice), cr = Array.isArray, is = It(String.prototype.toLowerCase), Ya = It(String.prototype.toString), oc = It(String.prototype.match), Xi = It(String.prototype.replace), ac = It(String.prototype.indexOf), fC = It(String.prototype.trim), pC = It(Number.prototype.toString), gC = It(Boolean.prototype.toString), nc = typeof BigInt > "u" ? null : It(BigInt.prototype.toString), lc = typeof Symbol > "u" ? null : It(Symbol.prototype.toString), qt = It(Object.prototype.hasOwnProperty), Gi = It(Object.prototype.toString), zt = It(RegExp.prototype.test), wr = mC(TypeError);
function It(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    return yn(e, t, i);
  };
}
function mC(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return xn(e, r);
  };
}
function yt(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : is;
  if (ic && ic(e, null), !cr(t))
    return e;
  let i = t.length;
  for (; i--; ) {
    let s = t[i];
    if (typeof s == "string") {
      const o = r(s);
      o !== s && (lC(t) || (t[i] = o), s = o);
    }
    e[s] = !0;
  }
  return e;
}
function yC(e) {
  for (let t = 0; t < e.length; t++)
    qt(e, t) || (e[t] = null);
  return e;
}
function Jt(e) {
  const t = ri(null);
  for (const i of uu(e)) {
    var r = aC(i, 2);
    const s = r[0], o = r[1];
    qt(e, s) && (cr(o) ? t[s] = yC(o) : o && typeof o == "object" && o.constructor === Object ? t[s] = Jt(o) : t[s] = o);
  }
  return t;
}
function xC(e) {
  switch (typeof e) {
    case "string":
      return e;
    case "number":
      return pC(e);
    case "boolean":
      return gC(e);
    case "bigint":
      return nc ? nc(e) : "0";
    case "symbol":
      return lc ? lc(e) : "Symbol()";
    case "undefined":
      return Gi(e);
    case "function":
    case "object": {
      if (e === null)
        return Gi(e);
      const t = e, r = Me(t, "toString");
      if (typeof r == "function") {
        const i = r(t);
        return typeof i == "string" ? i : Gi(i);
      }
      return Gi(e);
    }
    default:
      return Gi(e);
  }
}
function Me(e, t) {
  for (; e !== null; ) {
    const i = cC(e, t);
    if (i) {
      if (i.get)
        return It(i.get);
      if (typeof i.value == "function")
        return It(i.value);
    }
    e = hC(e);
  }
  function r() {
    return null;
  }
  return r;
}
function CC(e) {
  try {
    return zt(e, ""), !0;
  } catch {
    return !1;
  }
}
const hc = Ut(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ua = Ut(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Xa = Ut(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), bC = Ut(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ga = Ut(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), kC = Ut(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), cc = Ut(["#text"]), dc = Ut(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ja = Ut(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), uc = Ut(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ks = Ut(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), SC = Xt(/{{[\w\W]*|^[\w\W]*}}/g), wC = Xt(/<%[\w\W]*|^[\w\W]*%>/g), TC = Xt(/\${[\w\W]*/g), _C = Xt(/^data-[\-\w.\u00B7-\uFFFF]+$/), vC = Xt(/^aria-[\-\w]+$/), fc = Xt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), BC = Xt(/^(?:\w+script|data):/i), LC = Xt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), AC = Xt(/^html$/i), EC = Xt(/^[a-z][.\w]*(-[.\w]+)+$/i), pc = Xt(/<[/\w!]/g), FC = Xt(/<[/\w]/g), MC = Xt(/<\/no(script|embed|frames)/i), $C = Xt(/\/>/i), Fe = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, OC = function() {
  return typeof window > "u" ? null : window;
}, IC = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let i = null;
  const s = "data-tt-policy-suffix";
  r && r.hasAttribute(s) && (i = r.getAttribute(s));
  const o = "dompurify" + (i ? "#" + i : "");
  try {
    return t.createPolicy(o, {
      createHTML(a) {
        return a;
      },
      createScriptURL(a) {
        return a;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, gc = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
}, ar = function(t, r, i, s) {
  return qt(t, r) && cr(t[r]) ? yt(s.base ? Jt(s.base) : {}, t[r], s.transform) : i;
};
function pu() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : OC();
  const t = (X) => pu(X);
  if (t.version = "3.4.11", t.removed = [], !e || !e.document || e.document.nodeType !== Fe.document || !e.Element)
    return t.isSupported = !1, t;
  let r = e.document;
  const i = r, s = i.currentScript;
  e.DocumentFragment;
  const o = e.HTMLTemplateElement, a = e.Node, n = e.Element, l = e.NodeFilter, c = e.NamedNodeMap;
  c === void 0 && (e.NamedNodeMap || e.MozNamedAttrMap), e.HTMLFormElement;
  const h = e.DOMParser, d = e.trustedTypes, f = n.prototype, u = Me(f, "cloneNode"), p = Me(f, "remove"), m = Me(f, "nextSibling"), y = Me(f, "childNodes"), x = Me(f, "parentNode"), C = Me(f, "shadowRoot"), k = Me(f, "attributes"), T = a && a.prototype ? Me(a.prototype, "nodeType") : null, w = a && a.prototype ? Me(a.prototype, "nodeName") : null;
  if (typeof o == "function") {
    const X = r.createElement("template");
    X.content && X.content.ownerDocument && (r = X.content.ownerDocument);
  }
  let _, A = "", v, N = !1, O = 0;
  const P = function() {
    if (O > 0)
      throw wr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, H = function(S) {
    P(), O++;
    try {
      return _.createHTML(S);
    } finally {
      O--;
    }
  }, W = function(S) {
    P(), O++;
    try {
      return _.createScriptURL(S);
    } finally {
      O--;
    }
  }, R = function() {
    return N || (v = IC(d, s), N = !0), v;
  }, M = r, E = M.implementation, B = M.createNodeIterator, F = M.createDocumentFragment, z = M.getElementsByTagName, Y = i.importNode;
  let G = gc();
  t.isSupported = typeof uu == "function" && typeof x == "function" && E && E.createHTMLDocument !== void 0;
  const ht = SC, rt = wC, lt = TC, ct = _C, it = vC, gt = BC, wt = LC, Bt = EC;
  let _t = fc, dt = null;
  const ye = yt({}, [...hc, ...Ua, ...Xa, ...Ga, ...cc]);
  let Tt = null;
  const Xr = yt({}, [...dc, ...ja, ...uc, ...Ks]);
  let At = Object.seal(ri(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), qi = null, Fh = null;
  const ir = Object.seal(ri(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let Mh = !0, _a = !0, $h = !1, Oh = !0, sr = !1, Wi = !0, br = !1, va = !1, Ba = null, La = null, Aa = !1, Gr = !1, zs = !1, Hs = !1, Ih = !0, Dh = !1;
  const Rh = "user-content-";
  let Ea = !0, Fa = !1, jr = {}, Ae = null;
  const Ma = yt({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let Ph = null;
  const Nh = yt({}, ["audio", "video", "img", "source", "image", "track"]);
  let $a = null;
  const qh = yt({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ys = "http://www.w3.org/1998/Math/MathML", Us = "http://www.w3.org/2000/svg", Ee = "http://www.w3.org/1999/xhtml";
  let Vr = Ee, Oa = !1, Ia = null;
  const q0 = yt({}, [Ys, Us, Ee], Ya), Wh = Ut(["mi", "mo", "mn", "ms", "mtext"]);
  let Da = yt({}, Wh);
  const zh = Ut(["annotation-xml"]);
  let Ra = yt({}, zh);
  const W0 = yt({}, ["title", "style", "font", "a", "script"]);
  let zi = null;
  const z0 = ["application/xhtml+xml", "text/html"], H0 = "text/html";
  let Et = null, Zr = null;
  const Y0 = r.createElement("form"), Hh = function(S) {
    return S instanceof RegExp || S instanceof Function;
  }, Pa = function() {
    let S = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Zr && Zr === S)
      return;
    (!S || typeof S != "object") && (S = {}), S = Jt(S), zi = // eslint-disable-next-line unicorn/prefer-includes
    z0.indexOf(S.PARSER_MEDIA_TYPE) === -1 ? H0 : S.PARSER_MEDIA_TYPE, Et = zi === "application/xhtml+xml" ? Ya : is, dt = ar(S, "ALLOWED_TAGS", ye, {
      transform: Et
    }), Tt = ar(S, "ALLOWED_ATTR", Xr, {
      transform: Et
    }), Ia = ar(S, "ALLOWED_NAMESPACES", q0, {
      transform: Ya
    }), $a = ar(S, "ADD_URI_SAFE_ATTR", qh, {
      transform: Et,
      base: qh
    }), Ph = ar(S, "ADD_DATA_URI_TAGS", Nh, {
      transform: Et,
      base: Nh
    }), Ae = ar(S, "FORBID_CONTENTS", Ma, {
      transform: Et
    }), qi = ar(S, "FORBID_TAGS", Jt({}), {
      transform: Et
    }), Fh = ar(S, "FORBID_ATTR", Jt({}), {
      transform: Et
    }), jr = qt(S, "USE_PROFILES") ? S.USE_PROFILES && typeof S.USE_PROFILES == "object" ? Jt(S.USE_PROFILES) : S.USE_PROFILES : !1, Mh = S.ALLOW_ARIA_ATTR !== !1, _a = S.ALLOW_DATA_ATTR !== !1, $h = S.ALLOW_UNKNOWN_PROTOCOLS || !1, Oh = S.ALLOW_SELF_CLOSE_IN_ATTR !== !1, sr = S.SAFE_FOR_TEMPLATES || !1, Wi = S.SAFE_FOR_XML !== !1, br = S.WHOLE_DOCUMENT || !1, Gr = S.RETURN_DOM || !1, zs = S.RETURN_DOM_FRAGMENT || !1, Hs = S.RETURN_TRUSTED_TYPE || !1, Aa = S.FORCE_BODY || !1, Ih = S.SANITIZE_DOM !== !1, Dh = S.SANITIZE_NAMED_PROPS || !1, Ea = S.KEEP_CONTENT !== !1, Fa = S.IN_PLACE || !1, _t = CC(S.ALLOWED_URI_REGEXP) ? S.ALLOWED_URI_REGEXP : fc, Vr = typeof S.NAMESPACE == "string" ? S.NAMESPACE : Ee, Da = qt(S, "MATHML_TEXT_INTEGRATION_POINTS") && S.MATHML_TEXT_INTEGRATION_POINTS && typeof S.MATHML_TEXT_INTEGRATION_POINTS == "object" ? Jt(S.MATHML_TEXT_INTEGRATION_POINTS) : yt({}, Wh), Ra = qt(S, "HTML_INTEGRATION_POINTS") && S.HTML_INTEGRATION_POINTS && typeof S.HTML_INTEGRATION_POINTS == "object" ? Jt(S.HTML_INTEGRATION_POINTS) : yt({}, zh);
    const $ = qt(S, "CUSTOM_ELEMENT_HANDLING") && S.CUSTOM_ELEMENT_HANDLING && typeof S.CUSTOM_ELEMENT_HANDLING == "object" ? Jt(S.CUSTOM_ELEMENT_HANDLING) : ri(null);
    if (At = ri(null), qt($, "tagNameCheck") && Hh($.tagNameCheck) && (At.tagNameCheck = $.tagNameCheck), qt($, "attributeNameCheck") && Hh($.attributeNameCheck) && (At.attributeNameCheck = $.attributeNameCheck), qt($, "allowCustomizedBuiltInElements") && typeof $.allowCustomizedBuiltInElements == "boolean" && (At.allowCustomizedBuiltInElements = $.allowCustomizedBuiltInElements), Xt(At), sr && (_a = !1), zs && (Gr = !0), jr && (dt = yt({}, cc), Tt = ri(null), jr.html === !0 && (yt(dt, hc), yt(Tt, dc)), jr.svg === !0 && (yt(dt, Ua), yt(Tt, ja), yt(Tt, Ks)), jr.svgFilters === !0 && (yt(dt, Xa), yt(Tt, ja), yt(Tt, Ks)), jr.mathMl === !0 && (yt(dt, Ga), yt(Tt, uc), yt(Tt, Ks))), ir.tagCheck = null, ir.attributeCheck = null, qt(S, "ADD_TAGS") && (typeof S.ADD_TAGS == "function" ? ir.tagCheck = S.ADD_TAGS : cr(S.ADD_TAGS) && (dt === ye && (dt = Jt(dt)), yt(dt, S.ADD_TAGS, Et))), qt(S, "ADD_ATTR") && (typeof S.ADD_ATTR == "function" ? ir.attributeCheck = S.ADD_ATTR : cr(S.ADD_ATTR) && (Tt === Xr && (Tt = Jt(Tt)), yt(Tt, S.ADD_ATTR, Et))), qt(S, "ADD_URI_SAFE_ATTR") && cr(S.ADD_URI_SAFE_ATTR) && yt($a, S.ADD_URI_SAFE_ATTR, Et), qt(S, "FORBID_CONTENTS") && cr(S.FORBID_CONTENTS) && (Ae === Ma && (Ae = Jt(Ae)), yt(Ae, S.FORBID_CONTENTS, Et)), qt(S, "ADD_FORBID_CONTENTS") && cr(S.ADD_FORBID_CONTENTS) && (Ae === Ma && (Ae = Jt(Ae)), yt(Ae, S.ADD_FORBID_CONTENTS, Et)), Ea && (dt["#text"] = !0), br && yt(dt, ["html", "head", "body"]), dt.table && (yt(dt, ["tbody"]), delete qi.tbody), S.TRUSTED_TYPES_POLICY) {
      if (typeof S.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw wr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof S.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw wr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const U = _;
      _ = S.TRUSTED_TYPES_POLICY;
      try {
        A = H("");
      } catch (J) {
        throw _ = U, J;
      }
    } else S.TRUSTED_TYPES_POLICY === null ? (_ = void 0, A = "") : (_ === void 0 && (_ = R()), _ && typeof A == "string" && (A = H("")));
    Ut && Ut(S), Zr = S;
  }, Yh = yt({}, [...Ua, ...Xa, ...bC]), Uh = yt({}, [...Ga, ...kC]), U0 = function(S, $, U) {
    return $.namespaceURI === Ee ? S === "svg" : $.namespaceURI === Ys ? S === "svg" && (U === "annotation-xml" || Da[U]) : !!Yh[S];
  }, X0 = function(S, $, U) {
    return $.namespaceURI === Ee ? S === "math" : $.namespaceURI === Us ? S === "math" && Ra[U] : !!Uh[S];
  }, G0 = function(S, $, U) {
    return $.namespaceURI === Us && !Ra[U] || $.namespaceURI === Ys && !Da[U] ? !1 : !Uh[S] && (W0[S] || !Yh[S]);
  }, j0 = function(S) {
    let $ = x(S);
    (!$ || !$.tagName) && ($ = {
      namespaceURI: Vr,
      tagName: "template"
    });
    const U = is(S.tagName), J = is($.tagName);
    return Ia[S.namespaceURI] ? S.namespaceURI === Us ? U0(U, $, J) : S.namespaceURI === Ys ? X0(U, $, J) : S.namespaceURI === Ee ? G0(U, $, J) : !!(zi === "application/xhtml+xml" && Ia[S.namespaceURI]) : !1;
  }, or = function(S) {
    Qr(t.removed, {
      element: S
    });
    try {
      x(S).removeChild(S);
    } catch {
      if (p(S), !x(S))
        throw wr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Xh = function(S) {
    const $ = y(S);
    if ($) {
      const J = [];
      Ui($, (ft) => {
        Qr(J, ft);
      }), Ui(J, (ft) => {
        try {
          p(ft);
        } catch {
        }
      });
    }
    const U = k(S);
    if (U)
      for (let J = U.length - 1; J >= 0; --J) {
        const ft = U[J], xt = ft && ft.name;
        if (typeof xt == "string")
          try {
            S.removeAttribute(xt);
          } catch {
          }
      }
  }, kr = function(S, $) {
    try {
      Qr(t.removed, {
        attribute: $.getAttributeNode(S),
        from: $
      });
    } catch {
      Qr(t.removed, {
        attribute: null,
        from: $
      });
    }
    if ($.removeAttribute(S), S === "is")
      if (Gr || zs)
        try {
          or($);
        } catch {
        }
      else
        try {
          $.setAttribute(S, "");
        } catch {
        }
  }, V0 = function(S) {
    const $ = k(S);
    if ($)
      for (let U = $.length - 1; U >= 0; --U) {
        const J = $[U], ft = J && J.name;
        if (!(typeof ft != "string" || Tt[Et(ft)]))
          try {
            S.removeAttribute(ft);
          } catch {
          }
      }
  }, Z0 = function(S) {
    const $ = [S];
    for (; $.length > 0; ) {
      const U = $.pop();
      (T ? T(U) : U.nodeType) === Fe.element && V0(U);
      const ft = y(U);
      if (ft)
        for (let xt = ft.length - 1; xt >= 0; --xt)
          $.push(ft[xt]);
    }
  }, Gh = function(S) {
    let $ = null, U = null;
    if (Aa)
      S = "<remove></remove>" + S;
    else {
      const xt = oc(S, /^[\r\n\t ]+/);
      U = xt && xt[0];
    }
    zi === "application/xhtml+xml" && Vr === Ee && (S = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + S + "</body></html>");
    const J = _ ? H(S) : S;
    if (Vr === Ee)
      try {
        $ = new h().parseFromString(J, zi);
      } catch {
      }
    if (!$ || !$.documentElement) {
      $ = E.createDocument(Vr, "template", null);
      try {
        $.documentElement.innerHTML = Oa ? A : J;
      } catch {
      }
    }
    const ft = $.body || $.documentElement;
    return S && U && ft.insertBefore(r.createTextNode(U), ft.childNodes[0] || null), Vr === Ee ? z.call($, br ? "html" : "body")[0] : br ? $.documentElement : ft;
  }, jh = function(S) {
    return B.call(
      S.ownerDocument || S,
      S,
      // eslint-disable-next-line no-bitwise
      l.SHOW_ELEMENT | l.SHOW_COMMENT | l.SHOW_TEXT | l.SHOW_PROCESSING_INSTRUCTION | l.SHOW_CDATA_SECTION,
      null
    );
  }, Xs = function(S) {
    return S = Xi(S, ht, " "), S = Xi(S, rt, " "), S = Xi(S, lt, " "), S;
  }, Na = function(S) {
    var $;
    S.normalize();
    const U = B.call(
      S.ownerDocument || S,
      S,
      // eslint-disable-next-line no-bitwise
      l.SHOW_TEXT | l.SHOW_COMMENT | l.SHOW_CDATA_SECTION | l.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let J = U.nextNode();
    for (; J; )
      J.data = Xs(J.data), J = U.nextNode();
    const ft = ($ = S.querySelectorAll) === null || $ === void 0 ? void 0 : $.call(S, "template");
    ft && Ui(ft, (xt) => {
      Kr(xt.content) && Na(xt.content);
    });
  }, Gs = function(S) {
    const $ = w ? w(S) : null;
    return typeof $ != "string" || Et($) !== "form" ? !1 : typeof S.nodeName != "string" || typeof S.textContent != "string" || typeof S.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    S.attributes !== k(S) || typeof S.removeAttribute != "function" || typeof S.setAttribute != "function" || typeof S.namespaceURI != "string" || typeof S.insertBefore != "function" || typeof S.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    S.nodeType !== T(S) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    S.childNodes !== y(S);
  }, Kr = function(S) {
    if (!T || typeof S != "object" || S === null)
      return !1;
    try {
      return T(S) === Fe.documentFragment;
    } catch {
      return !1;
    }
  }, Hi = function(S) {
    if (!T || typeof S != "object" || S === null)
      return !1;
    try {
      return typeof T(S) == "number";
    } catch {
      return !1;
    }
  };
  function He(X, S, $) {
    X.length !== 0 && Ui(X, (U) => {
      U.call(t, S, $, Zr);
    });
  }
  const K0 = function(S, $) {
    return !!(Wi && S.hasChildNodes() && !Hi(S.firstElementChild) && zt(pc, S.textContent) && zt(pc, S.innerHTML) || Wi && S.namespaceURI === Ee && $ === "style" && Hi(S.firstElementChild) || S.nodeType === Fe.processingInstruction || Wi && S.nodeType === Fe.comment && zt(FC, S.data));
  }, Q0 = function(S, $) {
    if (!qi[$] && Kh($) && (At.tagNameCheck instanceof RegExp && zt(At.tagNameCheck, $) || At.tagNameCheck instanceof Function && At.tagNameCheck($)))
      return !1;
    if (Ea && !Ae[$]) {
      const U = x(S), J = y(S);
      if (J && U) {
        const ft = J.length;
        for (let xt = ft - 1; xt >= 0; --xt) {
          const Nt = Fa ? J[xt] : u(J[xt], !0);
          U.insertBefore(Nt, m(S));
        }
      }
    }
    return or(S), !0;
  }, Vh = function(S) {
    if (He(G.beforeSanitizeElements, S, null), Gs(S))
      return or(S), !0;
    const $ = Et(w ? w(S) : S.nodeName);
    if (He(G.uponSanitizeElement, S, {
      tagName: $,
      allowedTags: dt
    }), K0(S, $))
      return or(S), !0;
    if (qi[$] || !(ir.tagCheck instanceof Function && ir.tagCheck($)) && !dt[$])
      return Q0(S, $);
    if ((T ? T(S) : S.nodeType) === Fe.element && !j0(S) || ($ === "noscript" || $ === "noembed" || $ === "noframes") && zt(MC, S.innerHTML))
      return or(S), !0;
    if (sr && S.nodeType === Fe.text) {
      const J = Xs(S.textContent);
      S.textContent !== J && (Qr(t.removed, {
        element: S.cloneNode()
      }), S.textContent = J);
    }
    return He(G.afterSanitizeElements, S, null), !1;
  }, Zh = function(S, $, U) {
    if (Fh[$] || Ih && ($ === "id" || $ === "name") && (U in r || U in Y0))
      return !1;
    const J = Tt[$] || ir.attributeCheck instanceof Function && ir.attributeCheck($, S);
    if (!(_a && zt(ct, $))) {
      if (!(Mh && zt(it, $))) {
        if (J) {
          if (!$a[$]) {
            if (!zt(_t, Xi(U, wt, ""))) {
              if (!(($ === "src" || $ === "xlink:href" || $ === "href") && S !== "script" && ac(U, "data:") === 0 && Ph[S])) {
                if (!($h && !zt(gt, Xi(U, wt, "")))) {
                  if (U)
                    return !1;
                }
              }
            }
          }
        } else if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Kh(S) && (At.tagNameCheck instanceof RegExp && zt(At.tagNameCheck, S) || At.tagNameCheck instanceof Function && At.tagNameCheck(S)) && (At.attributeNameCheck instanceof RegExp && zt(At.attributeNameCheck, $) || At.attributeNameCheck instanceof Function && At.attributeNameCheck($, S)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          $ === "is" && At.allowCustomizedBuiltInElements && (At.tagNameCheck instanceof RegExp && zt(At.tagNameCheck, U) || At.tagNameCheck instanceof Function && At.tagNameCheck(U)))
        ) return !1;
      }
    }
    return !0;
  }, J0 = yt({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Kh = function(S) {
    return !J0[is(S)] && zt(Bt, S);
  }, tx = function(S, $, U, J) {
    if (_ && typeof d == "object" && typeof d.getAttributeType == "function" && !U)
      switch (d.getAttributeType(S, $)) {
        case "TrustedHTML":
          return H(J);
        case "TrustedScriptURL":
          return W(J);
      }
    return J;
  }, ex = function(S, $, U, J) {
    try {
      U ? S.setAttributeNS(U, $, J) : S.setAttribute($, J), Gs(S) ? or(S) : sc(t.removed);
    } catch {
      kr($, S);
    }
  }, Qh = function(S) {
    He(G.beforeSanitizeAttributes, S, null);
    const $ = S.attributes;
    if (!$ || Gs(S))
      return;
    const U = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Tt,
      forceKeepAttr: void 0
    };
    let J = $.length;
    const ft = Et(S.nodeName);
    for (; J--; ) {
      const xt = $[J], Nt = xt.name, $t = xt.namespaceURI, de = xt.value, xe = Et(Nt), Wa = de;
      let Kt = Nt === "value" ? Wa : fC(Wa);
      if (U.attrName = xe, U.attrValue = Kt, U.keepAttr = !0, U.forceKeepAttr = void 0, He(G.uponSanitizeAttribute, S, U), Kt = U.attrValue, Dh && (xe === "id" || xe === "name") && ac(Kt, Rh) !== 0 && (kr(Nt, S), Kt = Rh + Kt), Wi && zt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Kt)) {
        kr(Nt, S);
        continue;
      }
      if (xe === "attributename" && oc(Kt, "href")) {
        kr(Nt, S);
        continue;
      }
      if (!U.forceKeepAttr) {
        if (!U.keepAttr) {
          kr(Nt, S);
          continue;
        }
        if (!Oh && zt($C, Kt)) {
          kr(Nt, S);
          continue;
        }
        if (sr && (Kt = Xs(Kt)), !Zh(ft, xe, Kt)) {
          kr(Nt, S);
          continue;
        }
        Kt = tx(ft, xe, $t, Kt), Kt !== Wa && ex(S, Nt, $t, Kt);
      }
    }
    He(G.afterSanitizeAttributes, S, null);
  }, js = function(S) {
    let $ = null;
    const U = jh(S);
    for (He(G.beforeSanitizeShadowDOM, S, null); $ = U.nextNode(); )
      if (He(G.uponSanitizeShadowNode, $, null), Vh($), Qh($), Kr($.content) && js($.content), (T ? T($) : $.nodeType) === Fe.element) {
        const ft = C($);
        Kr(ft) && (qa(ft), js(ft));
      }
    He(G.afterSanitizeShadowDOM, S, null);
  }, qa = function(S) {
    const $ = [{
      node: S,
      shadow: null
    }];
    for (; $.length > 0; ) {
      const U = $.pop();
      if (U.shadow) {
        js(U.shadow);
        continue;
      }
      const J = U.node, xt = (T ? T(J) : J.nodeType) === Fe.element, Nt = y(J);
      if (Nt)
        for (let $t = Nt.length - 1; $t >= 0; --$t)
          $.push({
            node: Nt[$t],
            shadow: null
          });
      if (xt) {
        const $t = w ? w(J) : null;
        if (typeof $t == "string" && Et($t) === "template") {
          const de = J.content;
          Kr(de) && $.push({
            node: de,
            shadow: null
          });
        }
      }
      if (xt) {
        const $t = C(J);
        Kr($t) && $.push({
          node: null,
          shadow: $t
        }, {
          node: $t,
          shadow: null
        });
      }
    }
  };
  return t.sanitize = function(X) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, $ = null, U = null, J = null, ft = null;
    if (Oa = !X, Oa && (X = "<!-->"), typeof X != "string" && !Hi(X) && (X = xC(X), typeof X != "string"))
      throw wr("dirty is not a string, aborting");
    if (!t.isSupported)
      return X;
    va ? (dt = Ba, Tt = La) : Pa(S), (G.uponSanitizeElement.length > 0 || G.uponSanitizeAttribute.length > 0) && (dt = Jt(dt)), G.uponSanitizeAttribute.length > 0 && (Tt = Jt(Tt)), t.removed = [];
    const xt = Fa && typeof X != "string" && Hi(X);
    if (xt) {
      const de = w ? w(X) : X.nodeName;
      if (typeof de == "string") {
        const xe = Et(de);
        if (!dt[xe] || qi[xe])
          throw wr("root node is forbidden and cannot be sanitized in-place");
      }
      if (Gs(X))
        throw wr("root node is clobbered and cannot be sanitized in-place");
      try {
        qa(X);
      } catch (xe) {
        throw Xh(X), xe;
      }
    } else if (Hi(X))
      $ = Gh("<!---->"), U = $.ownerDocument.importNode(X, !0), U.nodeType === Fe.element && U.nodeName === "BODY" || U.nodeName === "HTML" ? $ = U : $.appendChild(U), qa(U);
    else {
      if (!Gr && !sr && !br && // eslint-disable-next-line unicorn/prefer-includes
      X.indexOf("<") === -1)
        return _ && Hs ? H(X) : X;
      if ($ = Gh(X), !$)
        return Gr ? null : Hs ? A : "";
    }
    $ && Aa && or($.firstChild);
    const Nt = jh(xt ? X : $);
    try {
      for (; J = Nt.nextNode(); )
        Vh(J), Qh(J), Kr(J.content) && js(J.content);
    } catch (de) {
      throw xt && Xh(X), de;
    }
    if (xt)
      return Ui(t.removed, (de) => {
        de.element && Z0(de.element);
      }), sr && Na(X), X;
    if (Gr) {
      if (sr && Na($), zs)
        for (ft = F.call($.ownerDocument); $.firstChild; )
          ft.appendChild($.firstChild);
      else
        ft = $;
      return (Tt.shadowroot || Tt.shadowrootmode) && (ft = Y.call(i, ft, !0)), ft;
    }
    let $t = br ? $.outerHTML : $.innerHTML;
    return br && dt["!doctype"] && $.ownerDocument && $.ownerDocument.doctype && $.ownerDocument.doctype.name && zt(AC, $.ownerDocument.doctype.name) && ($t = "<!DOCTYPE " + $.ownerDocument.doctype.name + `>
` + $t), sr && ($t = Xs($t)), _ && Hs ? H($t) : $t;
  }, t.setConfig = function() {
    let X = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pa(X), va = !0, Ba = dt, La = Tt;
  }, t.clearConfig = function() {
    Zr = null, va = !1, Ba = null, La = null, _ = v, A = "";
  }, t.isValidAttribute = function(X, S, $) {
    Zr || Pa({});
    const U = Et(X), J = Et(S);
    return Zh(U, J, $);
  }, t.addHook = function(X, S) {
    typeof S == "function" && qt(G, X) && Qr(G[X], S);
  }, t.removeHook = function(X, S) {
    if (qt(G, X)) {
      if (S !== void 0) {
        const $ = dC(G[X], S);
        return $ === -1 ? void 0 : uC(G[X], $, 1)[0];
      }
      return sc(G[X]);
    }
  }, t.removeHooks = function(X) {
    qt(G, X) && (G[X] = []);
  }, t.removeAllHooks = function() {
    G = gc();
  }, t;
}
var Bi = pu(), gu = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s, fs = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, DC = /\s*%%.*\n/gm, ui, mu = (ui = class extends Error {
  constructor(t) {
    super(t), this.name = "UnknownDiagramError";
  }
}, g(ui, "UnknownDiagramError"), ui), Rr = {}, Tl = /* @__PURE__ */ g(function(e, t) {
  e = e.replace(gu, "").replace(fs, "").replace(DC, `
`);
  for (const [r, { detector: i }] of Object.entries(Rr))
    if (i(e, t))
      return r;
  throw new mu(
    `No diagram type detected matching given configuration for text: ${e}`
  );
}, "detectType"), Cn = /* @__PURE__ */ g((...e) => {
  for (const { id: t, detector: r, loader: i } of e)
    yu(t, r, i);
}, "registerLazyLoadedDiagrams"), yu = /* @__PURE__ */ g((e, t, r) => {
  Rr[e] && q.warn(`Detector with key ${e} already exists. Overwriting.`), Rr[e] = { detector: t, loader: r }, q.debug(`Detector with key ${e} added${r ? " with loader" : ""}`);
}, "addDetector"), RC = /* @__PURE__ */ g((e) => Rr[e].loader, "getDiagramLoader"), bn = /* @__PURE__ */ g((e, t, { depth: r = 2, clobber: i = !1 } = {}) => {
  const s = { depth: r, clobber: i };
  return Array.isArray(t) && !Array.isArray(e) ? (t.forEach((o) => bn(e, o, s)), e) : Array.isArray(t) && Array.isArray(e) ? (t.forEach((o) => {
    e.includes(o) || e.push(o);
  }), e) : e === void 0 || r <= 0 ? e != null && typeof e == "object" && typeof t == "object" ? Object.assign(e, t) : t : (t !== void 0 && typeof e == "object" && typeof t == "object" && Object.keys(t).forEach((o) => {
    typeof t[o] == "object" && t[o] !== null && (e[o] === void 0 || typeof e[o] == "object") ? (e[o] === void 0 && (e[o] = Array.isArray(t[o]) ? [] : {}), e[o] = bn(e[o], t[o], { depth: r - 1, clobber: i })) : (i || typeof e[o] != "object" && typeof t[o] != "object") && (e[o] = t[o]);
  }), e);
}, "assignWithDepth"), Rt = bn, qe = "#ffffff", We = "#f2f2f2", at = /* @__PURE__ */ g((e, t) => t ? b(e, { s: -40, l: 10 }) : b(e, { s: -40, l: -10 }), "mkBorder"), fi, PC = (fi = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.useGradient = !0, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || b(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || b(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || L(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || L(this.tertiaryColor), this.lineColor = this.lineColor || L(this.background), this.arrowheadColor = this.arrowheadColor || L(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || D(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || L(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || I(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || "navy", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.darkMode ? (this.rowOdd = this.rowOdd || D(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || D(this.mainBkg, 10)) : (this.rowOdd = this.rowOdd || I(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || I(this.mainBkg, 5)), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || b(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || b(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || b(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || b(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || b(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || b(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || b(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || b(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || b(this.primaryColor, { h: 330 }), this.darkMode)
      for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
        this["cScale" + r] = D(this["cScale" + r], 75);
    else
      for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
        this["cScale" + r] = D(this["cScale" + r], 25);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this["cScaleInv" + r] = this["cScaleInv" + r] || L(this["cScale" + r]);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this.darkMode ? this["cScalePeer" + r] = this["cScalePeer" + r] || I(this["cScale" + r], 10) : this["cScalePeer" + r] = this["cScalePeer" + r] || D(this["cScale" + r], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this["cScaleLabel" + r] = this["cScaleLabel" + r] || this.scaleLabelColor;
    const t = this.darkMode ? -4 : -1;
    for (let r = 0; r < 5; r++)
      this["surface" + r] = this["surface" + r] || b(this.mainBkg, { h: 180, s: -15, l: t * (5 + r * 3) }), this["surfacePeer" + r] = this["surfacePeer" + r] || b(this.mainBkg, { h: 180, s: -15, l: t * (8 + r * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || b(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || b(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || b(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || b(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || b(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || b(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || b(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || b(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || b(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || b(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || b(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || b(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? b(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? b(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? b(this.tertiaryColor, { l: -30 }), this.venn4 = this.venn4 ?? b(this.primaryColor, { h: 60, l: -30 }), this.venn5 = this.venn5 ?? b(this.primaryColor, { h: -60, l: -30 }), this.venn6 = this.venn6 ?? b(this.secondaryColor, { h: 60, l: -30 }), this.venn7 = this.venn7 ?? b(this.primaryColor, { h: 120, l: -30 }), this.venn8 = this.venn8 ?? b(this.secondaryColor, { h: 120, l: -30 }), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    }, this.archEdgeColor = this.archEdgeColor || "#777", this.archEdgeArrowColor = this.archEdgeArrowColor || "#777", this.archEdgeWidth = this.archEdgeWidth || "3", this.archGroupBorderColor = this.archGroupBorderColor || "#000", this.archGroupBorderWidth = this.archGroupBorderWidth || "2px", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Be(this.quadrant1Fill) ? I(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || b(this.primaryColor, { h: -30 }), this.git4 = this.git4 || b(this.primaryColor, { h: -60 }), this.git5 = this.git5 || b(this.primaryColor, { h: -90 }), this.git6 = this.git6 || b(this.primaryColor, { h: 60 }), this.git7 = this.git7 || b(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = I(this.git0, 25), this.git1 = I(this.git1, 25), this.git2 = I(this.git2, 25), this.git3 = I(this.git3, 25), this.git4 = I(this.git4, 25), this.git5 = I(this.git5, 25), this.git6 = I(this.git6, 25), this.git7 = I(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || L(this.git0), this.gitInv1 = this.gitInv1 || L(this.git1), this.gitInv2 = this.gitInv2 || L(this.git2), this.gitInv3 = this.gitInv3 || L(this.git3), this.gitInv4 = this.gitInv4 || L(this.git4), this.gitInv5 = this.gitInv5 || L(this.git5), this.gitInv6 = this.gitInv6 || L(this.git6), this.gitInv7 = this.gitInv7 || L(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || qe, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || We, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(fi, "Theme"), fi), NC = /* @__PURE__ */ g((e) => {
  const t = new PC();
  return t.calculate(e), t;
}, "getThemeVariables"), pi, qC = (pi = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = I(this.primaryColor, 16), this.tertiaryColor = b(this.primaryColor, { h: -160 }), this.primaryBorderColor = L(this.background), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = L(this.primaryColor), this.secondaryTextColor = L(this.secondaryColor), this.tertiaryTextColor = L(this.tertiaryColor), this.lineColor = L(this.background), this.textColor = L(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = I(L("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#ccc", this.border2 = fr(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.clusterBkg = "#302F3D", this.sectionBkgColor = D("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = D(this.sectionBkgColor, 10), this.taskBorderColor = fr(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = fr(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = this.rowOdd || I(this.mainBkg, 5) || "#ffffff", this.rowEven = this.rowEven || D(this.mainBkg, 10), this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal";
  }
  updateColors() {
    this.secondBkg = I(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = I(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.actorBorder, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = I(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = L(this.doneTaskBkgColor), this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = b(this.primaryColor, { h: 64 }), this.fillType3 = b(this.secondaryColor, { h: 64 }), this.fillType4 = b(this.primaryColor, { h: -64 }), this.fillType5 = b(this.secondaryColor, { h: -64 }), this.fillType6 = b(this.primaryColor, { h: 128 }), this.fillType7 = b(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || b(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || b(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || b(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || b(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || b(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || b(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || b(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || b(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || b(this.primaryColor, { h: 330 });
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || L(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScalePeer" + t] = this["cScalePeer" + t] || I(this["cScale" + t], 10);
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || b(this.mainBkg, { h: 30, s: -30, l: -(-10 + t * 4) }), this["surfacePeer" + t] = this["surfacePeer" + t] || b(this.mainBkg, { h: 30, s: -30, l: -(-7 + t * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["pie" + t] = this["cScale" + t];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.mainContrastColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.mainContrastColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7";
    for (let t = 0; t < 8; t++)
      this["venn" + (t + 1)] = this["venn" + (t + 1)] ?? I(this["cScale" + t], 30);
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Be(this.quadrant1Fill) ? I(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    }, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.background
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#ff6b6b", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.mainBkg,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.mainBkg
    }, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = I(this.secondaryColor, 20), this.git1 = I(this.pie2 || this.secondaryColor, 20), this.git2 = I(this.pie3 || this.tertiaryColor, 20), this.git3 = I(this.pie4 || b(this.primaryColor, { h: -30 }), 20), this.git4 = I(this.pie5 || b(this.primaryColor, { h: -60 }), 20), this.git5 = I(this.pie6 || b(this.primaryColor, { h: -90 }), 10), this.git6 = I(this.pie7 || b(this.primaryColor, { h: 60 }), 10), this.git7 = I(this.pie8 || b(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || L(this.git0), this.gitInv1 = this.gitInv1 || L(this.git1), this.gitInv2 = this.gitInv2 || L(this.git2), this.gitInv3 = this.gitInv3 || L(this.git3), this.gitInv4 = this.gitInv4 || L(this.git4), this.gitInv5 = this.gitInv5 || L(this.git5), this.gitInv6 = this.gitInv6 || L(this.git6), this.gitInv7 = this.gitInv7 || L(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || L(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || L(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "#2d2d2d", this.emUiStroke = this.emUiStroke || "#555", this.emProcessorFill = this.emProcessorFill || I("#5a3d5c", 10), this.emProcessorStroke = this.emProcessorStroke || "#8a6d8c", this.emReadModelFill = this.emReadModelFill || I("#3d5a2d", 10), this.emReadModelStroke = this.emReadModelStroke || "#6d8c5c", this.emCommandFill = this.emCommandFill || I("#2d3d5a", 10), this.emCommandStroke = this.emCommandStroke || "#5c6d8c", this.emEventFill = this.emEventFill || I("#5a452d", 10), this.emEventStroke = this.emEventStroke || "#8c755c", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || I(this.background, 5), this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || I(this.background, 12), this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || I(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || I(this.background, 2), this.nodeBorder = this.nodeBorder || "#999";
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(pi, "Theme"), pi), WC = /* @__PURE__ */ g((e) => {
  const t = new qC();
  return t.calculate(e), t;
}, "getThemeVariables"), gi, zC = (gi = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = b(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = b(this.primaryColor, { h: -160 }), this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = L(this.primaryColor), this.secondaryTextColor = L(this.secondaryColor), this.tertiaryTextColor = L(this.tertiaryColor), this.lineColor = L(this.background), this.textColor = L(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "rgba(232,232,232, 0.8)", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.clusterBkg = "#FBFBFF", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.sectionBkgColor = fr(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "navy", this.noteFontWeight = this.noteFontWeight || "normal", this.fontWeight = this.fontWeight || "normal", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.rowOdd = "calculated", this.rowEven = "calculated", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !1, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow(1px 2px 2px rgba(185, 185, 185, 1))", this.updateColors();
  }
  updateColors() {
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || b(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || b(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || b(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || b(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || b(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || b(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || b(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || b(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || b(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || D(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || D(this.tertiaryColor, 40);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScale" + t] = D(this["cScale" + t], 10), this["cScalePeer" + t] = this["cScalePeer" + t] || D(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || b(this["cScale" + t], { h: 180 });
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || b(this.mainBkg, { h: 30, l: -(5 + t * 5) }), this["surfacePeer" + t] = this["surfacePeer" + t] || b(this.mainBkg, { h: 30, l: -(7 + t * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || L(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || L(this.labelTextColor);
      for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
        this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || I(this.primaryColor, 75) || "#ffffff", this.rowEven = this.rowEven || I(this.primaryColor, 1), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = b(this.primaryColor, { h: 64 }), this.fillType3 = b(this.secondaryColor, { h: 64 }), this.fillType4 = b(this.primaryColor, { h: -64 }), this.fillType5 = b(this.secondaryColor, { h: -64 }), this.fillType6 = b(this.primaryColor, { h: 128 }), this.fillType7 = b(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || b(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || b(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || b(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || b(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || b(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || b(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || b(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || b(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || b(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || b(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? b(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? b(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? b(this.tertiaryColor, { l: -40 }), this.venn4 = this.venn4 ?? b(this.primaryColor, { h: 60, l: -30 }), this.venn5 = this.venn5 ?? b(this.primaryColor, { h: -60, l: -30 }), this.venn6 = this.venn6 ?? b(this.secondaryColor, { h: 60, l: -30 }), this.venn7 = this.venn7 ?? b(this.primaryColor, { h: 120, l: -30 }), this.venn8 = this.venn8 ?? b(this.secondaryColor, { h: 120, l: -30 }), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Be(this.quadrant1Fill) ? I(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    }, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || b(this.primaryColor, { h: -30 }), this.git4 = this.git4 || b(this.primaryColor, { h: -60 }), this.git5 = this.git5 || b(this.primaryColor, { h: -90 }), this.git6 = this.git6 || b(this.primaryColor, { h: 60 }), this.git7 = this.git7 || b(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = I(this.git0, 25), this.git1 = I(this.git1, 25), this.git2 = I(this.git2, 25), this.git3 = I(this.git3, 25), this.git4 = I(this.git4, 25), this.git5 = I(this.git5, 25), this.git6 = I(this.git6, 25), this.git7 = I(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || D(L(this.git0), 25), this.gitInv1 = this.gitInv1 || L(this.git1), this.gitInv2 = this.gitInv2 || L(this.git2), this.gitInv3 = this.gitInv3 || L(this.git3), this.gitInv4 = this.gitInv4 || L(this.git4), this.gitInv5 = this.gitInv5 || L(this.git5), this.gitInv6 = this.gitInv6 || L(this.git6), this.gitInv7 = this.gitInv7 || L(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || L(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || L(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || qe, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || We;
  }
  calculate(t) {
    if (Object.keys(this).forEach((i) => {
      this[i] === "calculated" && (this[i] = void 0);
    }), typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(gi, "Theme"), gi), HC = /* @__PURE__ */ g((e) => {
  const t = new zC();
  return t.calculate(e), t;
}, "getThemeVariables"), mi, YC = (mi = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = I("#cde498", 10), this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = L(this.primaryColor), this.secondaryTextColor = L(this.secondaryColor), this.tertiaryTextColor = L(this.primaryColor), this.lineColor = L(this.background), this.textColor = L(this.background), this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "calculated", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.vertLineColor = "#00BFFF", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.5))";
  }
  updateColors() {
    this.actorBorder = D(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.actorLineColor = this.actorBorder, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || b(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || b(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || b(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || b(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || b(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || b(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || b(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || b(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || b(this.primaryColor, { h: 330 }), this.cScalePeer1 = this.cScalePeer1 || D(this.secondaryColor, 45), this.cScalePeer2 = this.cScalePeer2 || D(this.tertiaryColor, 40);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScale" + t] = D(this["cScale" + t], 10), this["cScalePeer" + t] = this["cScalePeer" + t] || D(this["cScale" + t], 25);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || b(this["cScale" + t], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || b(this.mainBkg, { h: 30, s: -30, l: -(5 + t * 5) }), this["surfacePeer" + t] = this["surfacePeer" + t] || b(this.mainBkg, { h: 30, s: -30, l: -(8 + t * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.rowOdd = this.rowOdd || I(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || I(this.mainBkg, 20), this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = b(this.primaryColor, { h: 64 }), this.fillType3 = b(this.secondaryColor, { h: 64 }), this.fillType4 = b(this.primaryColor, { h: -64 }), this.fillType5 = b(this.secondaryColor, { h: -64 }), this.fillType6 = b(this.primaryColor, { h: 128 }), this.fillType7 = b(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || b(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || b(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || b(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || b(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || b(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || b(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.venn1 = this.venn1 ?? b(this.primaryColor, { l: -30 }), this.venn2 = this.venn2 ?? b(this.secondaryColor, { l: -30 }), this.venn3 = this.venn3 ?? b(this.tertiaryColor, { l: -30 }), this.venn4 = this.venn4 ?? b(this.primaryColor, { h: 60, l: -30 }), this.venn5 = this.venn5 ?? b(this.primaryColor, { h: -60, l: -30 }), this.venn6 = this.venn6 ?? b(this.secondaryColor, { h: 60, l: -30 }), this.venn7 = this.venn7 ?? b(this.primaryColor, { h: 120, l: -30 }), this.venn8 = this.venn8 ?? b(this.secondaryColor, { h: 120, l: -30 }), this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Be(this.quadrant1Fill) ? I(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.mainBkg
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    }, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || b(this.primaryColor, { h: -30 }), this.git4 = this.git4 || b(this.primaryColor, { h: -60 }), this.git5 = this.git5 || b(this.primaryColor, { h: -90 }), this.git6 = this.git6 || b(this.primaryColor, { h: 60 }), this.git7 = this.git7 || b(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = I(this.git0, 25), this.git1 = I(this.git1, 25), this.git2 = I(this.git2, 25), this.git3 = I(this.git3, 25), this.git4 = I(this.git4, 25), this.git5 = I(this.git5, 25), this.git6 = I(this.git6, 25), this.git7 = I(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || L(this.git0), this.gitInv1 = this.gitInv1 || L(this.git1), this.gitInv2 = this.gitInv2 || L(this.git2), this.gitInv3 = this.gitInv3 || L(this.git3), this.gitInv4 = this.gitInv4 || L(this.git4), this.gitInv5 = this.gitInv5 || L(this.git5), this.gitInv6 = this.gitInv6 || L(this.git6), this.gitInv7 = this.gitInv7 || L(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || L(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || L(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || qe, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || We;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(mi, "Theme"), mi), UC = /* @__PURE__ */ g((e) => {
  const t = new YC();
  return t.calculate(e), t;
}, "getThemeVariables"), yi, XC = (yi = class {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = I(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = b(this.primaryColor, { h: -160 }), this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = L(this.primaryColor), this.secondaryTextColor = L(this.secondaryColor), this.tertiaryTextColor = L(this.tertiaryColor), this.lineColor = L(this.background), this.textColor = L(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.radius = 5, this.strokeWidth = 1, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = this.actorBorder, this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.vertLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal", this.rowOdd = this.rowOdd || I(this.mainBkg, 75) || "#ffffff", this.rowEven = this.rowEven || "#f4f4f4", this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.useGradient = !0, this.gradientStart = this.primaryBorderColor, this.gradientStop = this.secondaryBorderColor, this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
  }
  updateColors() {
    this.secondBkg = I(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = I(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.actorBorder, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleInv" + t] = this["cScaleInv" + t] || L(this["cScale" + t]);
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this.darkMode ? this["cScalePeer" + t] = this["cScalePeer" + t] || I(this["cScale" + t], 10) : this["cScalePeer" + t] = this["cScalePeer" + t] || D(this["cScale" + t], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["cScaleLabel" + t] = this["cScaleLabel" + t] || this.scaleLabelColor;
    for (let t = 0; t < 5; t++)
      this["surface" + t] = this["surface" + t] || b(this.mainBkg, { l: -(5 + t * 5) }), this["surfacePeer" + t] = this["surfacePeer" + t] || b(this.mainBkg, { l: -(8 + t * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = I(this.contrast, 30), this.sectionBkgColor2 = I(this.contrast, 30), this.taskBorderColor = D(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = I(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = D(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.vertLineColor = this.critBkgColor, this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = b(this.primaryColor, { h: 64 }), this.fillType3 = b(this.secondaryColor, { h: 64 }), this.fillType4 = b(this.primaryColor, { h: -64 }), this.fillType5 = b(this.secondaryColor, { h: -64 }), this.fillType6 = b(this.primaryColor, { h: 128 }), this.fillType7 = b(this.secondaryColor, { h: 128 });
    for (let t = 0; t < this.THEME_COLOR_LIMIT; t++)
      this["pie" + t] = this["cScale" + t];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7";
    for (let t = 0; t < 8; t++)
      this["venn" + (t + 1)] = this["venn" + (t + 1)] ?? this["cScale" + t];
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Be(this.quadrant1Fill) ? I(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    }, this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    }, this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545", this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = D(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || b(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || b(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || b(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || b(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || b(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || L(this.git0), this.gitInv1 = this.gitInv1 || L(this.git1), this.gitInv2 = this.gitInv2 || L(this.git2), this.gitInv3 = this.gitInv3 || L(this.git3), this.gitInv4 = this.gitInv4 || L(this.git4), this.gitInv5 = this.gitInv5 || L(this.git5), this.gitInv6 = this.gitInv6 || L(this.git6), this.gitInv7 = this.gitInv7 || L(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.emUiFill = this.emUiFill || "white", this.emUiStroke = this.emUiStroke || "#dbdada", this.emProcessorFill = this.emProcessorFill || "#edb3f6", this.emProcessorStroke = this.emProcessorStroke || "#b88cbf", this.emReadModelFill = this.emReadModelFill || "#d3f1a2", this.emReadModelStroke = this.emReadModelStroke || "#a3b732", this.emCommandFill = this.emCommandFill || "#bcd6fe", this.emCommandStroke = this.emCommandStroke || "#679ac3", this.emEventFill = this.emEventFill || "#ffb778", this.emEventStroke = this.emEventStroke || "#c19a0f", this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)", this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)", this.emArrowhead = this.emArrowhead || this.lineColor, this.emRelationStroke = this.emRelationStroke || this.lineColor, this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || qe, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || We;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(yi, "Theme"), yi), GC = /* @__PURE__ */ g((e) => {
  const t = new XC();
  return t.calculate(e), t;
}, "getThemeVariables"), xi, jC = (xi = class {
  constructor() {
    this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.radius = 3, this.strokeWidth = 2, this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.nodeBorder = "#000000", this.stateBorder = "#000000", this.useGradient = !0, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "drop-shadow( 0px 1px 2px rgba(0, 0, 0, 0.25));", this.tertiaryColor = "#ffffff", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || b(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || b(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || L(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || L(this.tertiaryColor), this.lineColor = this.lineColor || L(this.background), this.arrowheadColor = this.arrowheadColor || L(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || D(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || L(this.lineColor);
    const t = "#ECECFE", r = "#E9E9F1", i = b(t, { h: 180, l: 5 });
    if (this.sectionBkgColor = this.sectionBkgColor || i, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || r, this.sectionBkgColor2 = this.sectionBkgColor2 || t, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || t, this.activeTaskBorderColor = this.activeTaskBorderColor || t, this.activeTaskBkgColor = this.activeTaskBkgColor || I(t, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || t, this.cScale1 = this.cScale1 || r, this.cScale2 = this.cScale2 || i, this.cScale3 = this.cScale3 || b(t, { h: 30 }), this.cScale4 = this.cScale4 || b(t, { h: 60 }), this.cScale5 = this.cScale5 || b(t, { h: 90 }), this.cScale6 = this.cScale6 || b(t, { h: 120 }), this.cScale7 = this.cScale7 || b(t, { h: 150 }), this.cScale8 = this.cScale8 || b(t, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || b(t, { h: 270 }), this.cScale10 = this.cScale10 || b(t, { h: 300 }), this.cScale11 = this.cScale11 || b(t, { h: 330 }), this.darkMode)
      for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
        this["cScale" + o] = D(this["cScale" + o], 75);
    else
      for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
        this["cScale" + o] = D(this["cScale" + o], 25);
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this["cScaleInv" + o] = this["cScaleInv" + o] || L(this["cScale" + o]);
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this.darkMode ? this["cScalePeer" + o] = this["cScalePeer" + o] || I(this["cScale" + o], 10) : this["cScalePeer" + o] = this["cScalePeer" + o] || D(this["cScale" + o], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this["cScaleLabel" + o] = this["cScaleLabel" + o] || this.scaleLabelColor;
    const s = this.darkMode ? -4 : -1;
    for (let o = 0; o < 5; o++)
      this["surface" + o] = this["surface" + o] || b(this.mainBkg, { h: 180, s: -15, l: s * (5 + o * 3) }), this["surfacePeer" + o] = this["surfacePeer" + o] || b(this.mainBkg, { h: 180, s: -15, l: s * (8 + o * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || t, this.fillType1 = this.fillType1 || r, this.fillType2 = this.fillType2 || b(t, { h: 64 }), this.fillType3 = this.fillType3 || b(r, { h: 64 }), this.fillType4 = this.fillType4 || b(t, { h: -64 }), this.fillType5 = this.fillType5 || b(r, { h: -64 }), this.fillType6 = this.fillType6 || b(t, { h: 128 }), this.fillType7 = this.fillType7 || b(r, { h: 128 }), this.pie1 = this.pie1 || t, this.pie2 = this.pie2 || r, this.pie3 = this.pie3 || i, this.pie4 = this.pie4 || b(t, { l: -10 }), this.pie5 = this.pie5 || b(r, { l: -10 }), this.pie6 = this.pie6 || b(i, { l: -10 }), this.pie7 = this.pie7 || b(t, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(t, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(t, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(t, { h: 60, l: -20 }), this.pie11 = this.pie11 || b(t, { h: -60, l: -20 }), this.pie12 = this.pie12 || b(t, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || t, this.quadrant2Fill = this.quadrant2Fill || b(t, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(t, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(t, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Be(this.quadrant1Fill) ? I(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || t, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || t, this.git1 = this.git1 || r, this.git2 = this.git2 || i, this.git3 = this.git3 || b(t, { h: -30 }), this.git4 = this.git4 || b(t, { h: -60 }), this.git5 = this.git5 || b(t, { h: -90 }), this.git6 = this.git6 || b(t, { h: 60 }), this.git7 = this.git7 || b(t, { h: 120 }), this.darkMode ? (this.git0 = I(this.git0, 25), this.git1 = I(this.git1, 25), this.git2 = I(this.git2, 25), this.git3 = I(this.git3, 25), this.git4 = I(this.git4, 25), this.git5 = I(this.git5, 25), this.git6 = I(this.git6, 25), this.git7 = I(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || L(this.git0), this.gitInv1 = this.gitInv1 || L(this.git1), this.gitInv2 = this.gitInv2 || L(this.git2), this.gitInv3 = this.gitInv3 || L(this.git3), this.gitInv4 = this.gitInv4 || L(this.git4), this.gitInv5 = this.gitInv5 || L(this.git5), this.gitInv6 = this.gitInv6 || L(this.git6), this.gitInv7 = this.gitInv7 || L(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || qe, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || We;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(xi, "Theme"), xi), VC = /* @__PURE__ */ g((e) => {
  const t = new jC();
  return t.calculate(e), t;
}, "getThemeVariables"), Ci, ZC = (Ci = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = I(this.primaryColor, 16), this.tertiaryColor = b(this.primaryColor, { h: -160 }), this.primaryBorderColor = L(this.background), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = L(this.primaryColor), this.secondaryTextColor = L(this.secondaryColor), this.tertiaryTextColor = L(this.tertiaryColor), this.mainBkg = "#2a2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = I(L("#323D47"), 10), this.border1 = "#ccc", this.border2 = fr(255, 255, 255, 0.25), this.arrowheadColor = L(this.background), this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 3, this.strokeWidth = 1, this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = "arial, sans-serif", this.fontSize = "14px", this.useGradient = !0, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.2))", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.noteFontWeight = "normal", this.fontWeight = "normal";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || b(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || b(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || L(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || L(this.tertiaryColor), this.lineColor = this.lineColor || L(this.background), this.arrowheadColor = this.arrowheadColor || L(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || D(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || L(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || I(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || b(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || b(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || b(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || b(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || b(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || b(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || b(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || b(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || b(this.primaryColor, { h: 330 }), this.darkMode)
      for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
        this["cScale" + r] = D(this["cScale" + r], 75);
    else
      for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
        this["cScale" + r] = D(this["cScale" + r], 25);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this["cScaleInv" + r] = this["cScaleInv" + r] || L(this["cScale" + r]);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this.darkMode ? this["cScalePeer" + r] = this["cScalePeer" + r] || I(this["cScale" + r], 10) : this["cScalePeer" + r] = this["cScalePeer" + r] || D(this["cScale" + r], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this["cScaleLabel" + r] = this["cScaleLabel" + r] || this.scaleLabelColor;
    const t = this.darkMode ? -4 : -1;
    for (let r = 0; r < 5; r++)
      this["surface" + r] = this["surface" + r] || b(this.mainBkg, { h: 180, s: -15, l: t * (5 + r * 3) }), this["surfacePeer" + r] = this["surfacePeer" + r] || b(this.mainBkg, { h: 180, s: -15, l: t * (8 + r * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || b(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || b(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || b(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || b(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || b(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || b(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || b(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || b(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || b(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || b(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || b(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || b(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Be(this.quadrant1Fill) ? I(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || "#0b0000", this.git1 = this.git1 || "#4d1037", this.git2 = this.git2 || "#3f5258", this.git3 = this.git3 || "#4f2f1b", this.git4 = this.git4 || "#6e0a0a", this.git5 = this.git5 || "#3b0048", this.git6 = this.git6 || "#995a01", this.git7 = this.git7 || "#154706", this.gitDarkMode = !0, this.gitDarkMode ? (this.git0 = I(this.git0, 25), this.git1 = I(this.git1, 25), this.git2 = I(this.git2, 25), this.git3 = I(this.git3, 25), this.git4 = I(this.git4, 25), this.git5 = I(this.git5, 25), this.git6 = I(this.git6, 25), this.git7 = I(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || L(this.git0), this.gitInv1 = this.gitInv1 || L(this.git1), this.gitInv2 = this.gitInv2 || L(this.git2), this.gitInv3 = this.gitInv3 || L(this.git3), this.gitInv4 = this.gitInv4 || L(this.git4), this.gitInv5 = this.gitInv5 || L(this.git5), this.gitInv6 = this.gitInv6 || L(this.git6), this.gitInv7 = this.gitInv7 || L(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || qe, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || We;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(Ci, "Theme"), Ci), KC = /* @__PURE__ */ g((e) => {
  const t = new ZC();
  return t.calculate(e), t;
}, "getThemeVariables"), bi, QC = (bi = class {
  constructor() {
    this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#28253D", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.primaryBorderColor = at("#28253D", this.darkMode), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#28253D", this.stateBorder = "#28253D", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.tertiaryColor = "#ffffff", this.clusterBkg = "#F9F9FB", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.actorBorder = "#28253D", this.filterColor = "#000000";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D"), this.secondaryColor = this.secondaryColor || b(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || b(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#FEF9C3", this.noteTextColor = this.noteTextColor || "#28253D", this.secondaryTextColor = this.secondaryTextColor || L(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || L(this.tertiaryColor), this.lineColor = this.lineColor || L(this.background), this.arrowheadColor = this.arrowheadColor || L(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.noteFontWeight = 600, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || D(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || L(this.lineColor);
    const t = "#ECECFE", r = "#E9E9F1", i = b(t, { h: 180, l: 5 });
    this.sectionBkgColor = this.sectionBkgColor || i, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || r, this.sectionBkgColor2 = this.sectionBkgColor2 || t, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || t, this.activeTaskBorderColor = this.activeTaskBorderColor || t, this.activeTaskBkgColor = this.activeTaskBkgColor || I(t, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.compositeTitleBackground = "#F9F9FB", this.altBackground = "#F9F9FB", this.stateEdgeLabelBackground = "#FFFFFF", this.fontWeight = 600, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor;
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this["cScale" + o] = this.mainBkg;
    if (this.darkMode)
      for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
        this["cScale" + o] = D(this["cScale" + o], 75);
    else
      for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
        this["cScale" + o] = D(this["cScale" + o], 25);
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this["cScaleInv" + o] = this["cScaleInv" + o] || L(this["cScale" + o]);
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this.darkMode ? this["cScalePeer" + o] = this["cScalePeer" + o] || I(this["cScale" + o], 10) : this["cScalePeer" + o] = this["cScalePeer" + o] || D(this["cScale" + o], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this["cScaleLabel" + o] = this["cScaleLabel" + o] || this.scaleLabelColor;
    const s = this.darkMode ? -4 : -1;
    for (let o = 0; o < 5; o++)
      this["surface" + o] = this["surface" + o] || b(this.mainBkg, { h: 180, s: -15, l: s * (5 + o * 3) }), this["surfacePeer" + o] = this["surfacePeer" + o] || b(this.mainBkg, { h: 180, s: -15, l: s * (8 + o * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || t, this.fillType1 = this.fillType1 || r, this.fillType2 = this.fillType2 || b(t, { h: 64 }), this.fillType3 = this.fillType3 || b(r, { h: 64 }), this.fillType4 = this.fillType4 || b(t, { h: -64 }), this.fillType5 = this.fillType5 || b(r, { h: -64 }), this.fillType6 = this.fillType6 || b(t, { h: 128 }), this.fillType7 = this.fillType7 || b(r, { h: 128 }), this.pie1 = this.pie1 || t, this.pie2 = this.pie2 || r, this.pie3 = this.pie3 || i, this.pie4 = this.pie4 || b(t, { l: -10 }), this.pie5 = this.pie5 || b(r, { l: -10 }), this.pie6 = this.pie6 || b(i, { l: -10 }), this.pie7 = this.pie7 || b(t, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(t, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(t, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(t, { h: 60, l: -20 }), this.pie11 = this.pie11 || b(t, { h: -60, l: -20 }), this.pie12 = this.pie12 || b(t, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || t, this.quadrant2Fill = this.quadrant2Fill || b(t, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(t, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(t, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Be(this.quadrant1Fill) ? I(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || t, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.requirementEdgeLabelBackground = "#FFFFFF", this.git0 = this.git0 || t, this.git1 = this.git1 || r, this.git2 = this.git2 || i, this.git3 = this.git3 || b(t, { h: -30 }), this.git4 = this.git4 || b(t, { h: -60 }), this.git5 = this.git5 || b(t, { h: -90 }), this.git6 = this.git6 || b(t, { h: 60 }), this.git7 = this.git7 || b(t, { h: 120 }), this.darkMode ? (this.git0 = I(this.git0, 25), this.git1 = I(this.git1, 25), this.git2 = I(this.git2, 25), this.git3 = I(this.git3, 25), this.git4 = I(this.git4, 25), this.git5 = I(this.git5, 25), this.git6 = I(this.git6, 25), this.git7 = I(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || L(this.git0), this.gitInv1 = this.gitInv1 || L(this.git1), this.gitInv2 = this.gitInv2 || L(this.git2), this.gitInv3 = this.gitInv3 || L(this.git3), this.gitInv4 = this.gitInv4 || L(this.git4), this.gitInv5 = this.gitInv5 || L(this.git5), this.gitInv6 = this.gitInv6 || L(this.git6), this.gitInv7 = this.gitInv7 || L(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.erEdgeLabelBackground = "#FFFFFF", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || qe, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || We;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(bi, "Theme"), bi), JC = /* @__PURE__ */ g((e) => {
  const t = new QC();
  return t.calculate(e), t;
}, "getThemeVariables"), ki, tb = (ki = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = I(this.primaryColor, 16), this.tertiaryColor = b(this.primaryColor, { h: -160 }), this.primaryBorderColor = L(this.background), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = L(this.primaryColor), this.secondaryTextColor = L(this.secondaryColor), this.tertiaryTextColor = L(this.tertiaryColor), this.mainBkg = "#111113", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = I(L("#323D47"), 10), this.border1 = "#ccc", this.border2 = fr(255, 255, 255, 0.25), this.arrowheadColor = L(this.background), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.labelBackground = "#111113", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3", this.noteTextColor = this.noteTextColor ?? "#28253D", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#FFFFFF", this.stateBorder = "#FFFFFF", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.clusterBkg = "#1E1A2E", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.filterColor = "#FFFFFF";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF"), this.secondaryColor = this.secondaryColor || b(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || b(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#FFFFFF", this.secondaryTextColor = this.secondaryTextColor || L(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || L(this.tertiaryColor), this.lineColor = this.lineColor || L(this.background), this.arrowheadColor = this.arrowheadColor || L(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = "#FFFFFF", this.signalColor = "#FFFFFF", this.labelBoxBorderColor = "#BDBCCC", this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || D(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || L(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || I(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.compositeBackground = "#16141F", this.altBackground = "#16141F", this.compositeTitleBackground = "#16141F", this.stateEdgeLabelBackground = "#16141F", this.fontWeight = 600, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || b(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || b(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || b(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || b(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || b(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || b(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || b(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || b(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || b(this.primaryColor, { h: 330 }), this.darkMode)
      for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
        this["cScale" + r] = D(this["cScale" + r], 75);
    else
      for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
        this["cScale" + r] = D(this["cScale" + r], 25);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this["cScaleInv" + r] = this["cScaleInv" + r] || L(this["cScale" + r]);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this.darkMode ? this["cScalePeer" + r] = this["cScalePeer" + r] || I(this["cScale" + r], 10) : this["cScalePeer" + r] = this["cScalePeer" + r] || D(this["cScale" + r], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this["cScaleLabel" + r] = this["cScaleLabel" + r] || this.scaleLabelColor;
    const t = this.darkMode ? -4 : -1;
    for (let r = 0; r < 5; r++)
      this["surface" + r] = this["surface" + r] || b(this.mainBkg, { h: 180, s: -15, l: t * (5 + r * 3) }), this["surfacePeer" + r] = this["surfacePeer" + r] || b(this.mainBkg, { h: 180, s: -15, l: t * (8 + r * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || b(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || b(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || b(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || b(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || b(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || b(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || b(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || b(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || b(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || b(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || b(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || b(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Be(this.quadrant1Fill) ? I(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.requirementEdgeLabelBackground = "#16141F", this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || b(this.primaryColor, { h: -30 }), this.git4 = this.git4 || b(this.primaryColor, { h: -60 }), this.git5 = this.git5 || b(this.primaryColor, { h: -90 }), this.git6 = this.git6 || b(this.primaryColor, { h: 60 }), this.git7 = this.git7 || b(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = I(this.git0, 25), this.git1 = I(this.git1, 25), this.git2 = I(this.git2, 25), this.git3 = I(this.git3, 25), this.git4 = I(this.git4, 25), this.git5 = I(this.git5, 25), this.git6 = I(this.git6, 25), this.git7 = I(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || L(this.git0), this.gitInv1 = this.gitInv1 || L(this.git1), this.gitInv2 = this.gitInv2 || L(this.git2), this.gitInv3 = this.gitInv3 || L(this.git3), this.gitInv4 = this.gitInv4 || L(this.git4), this.gitInv5 = this.gitInv5 || L(this.git5), this.gitInv6 = this.gitInv6 || L(this.git6), this.gitInv7 = this.gitInv7 || L(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.erEdgeLabelBackground = "#16141F", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || qe, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || We;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(ki, "Theme"), ki), eb = /* @__PURE__ */ g((e) => {
  const t = new tb();
  return t.calculate(e), t;
}, "getThemeVariables"), Si, rb = (Si = class {
  constructor() {
    this.background = "#ffffff", this.primaryColor = "#cccccc", this.mainBkg = "#ffffff", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#28253D", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.primaryBorderColor = at(this.primaryColor, this.darkMode), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#28253D", this.stateBorder = "#28253D", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.tertiaryColor = "#ffffff", this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.actorBorder = "#28253D", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.borderColorArray = [
      "#E879F9",
      //Fuchsia-400
      "#2DD4BF",
      //Teal-400
      "#FB923C",
      //Orange-400
      "#22D3EE",
      // Cyan-400
      "#4ADE80",
      // Green-400
      "#A78BFA",
      //Violet-400
      "#F87171",
      //red-400
      "#FACC15",
      //yellow-400
      "#818CF8",
      //indigo-400
      "#A3E635 ",
      //Lime-400
      "#38BDF8",
      //Sky-400
      "#FB7185"
      //Rose-400
    ], this.bkgColorArray = [
      "#FDF4FF",
      //Fuchsia-50
      "#F0FDFA",
      //Teal-50
      "#FFF7ED",
      //Orange-50
      "#ECFEFF",
      // Cyan-50
      "#F0FDF4",
      // Green-50
      "#F5F3FF",
      //Violet-50
      "#FEF2F2",
      //red-50
      "#FEFCE8",
      //yellow-50
      "#EEF2FF",
      //indigo-50
      "#F7FEE7",
      //Lime-50
      "#F0F9FF",
      //Sky-50
      "#FFF1F2"
      //Rose-50
    ], this.filterColor = "#000000";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D"), this.secondaryColor = this.secondaryColor || b(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || b(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#28253D", this.secondaryTextColor = this.secondaryTextColor || L(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || L(this.tertiaryColor), this.lineColor = this.lineColor || L(this.background), this.arrowheadColor = this.arrowheadColor || L(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || D(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || L(this.lineColor);
    const t = "#ECECFE", r = "#E9E9F1", i = b(t, { h: 180, l: 5 });
    this.sectionBkgColor = this.sectionBkgColor || i, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || r, this.sectionBkgColor2 = this.sectionBkgColor2 || t, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || t, this.activeTaskBorderColor = this.activeTaskBorderColor || t, this.activeTaskBkgColor = this.activeTaskBkgColor || I(t, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || "#f4a8ff", this.cScale1 = this.cScale1 || "#46ecd5", this.cScale2 = this.cScale2 || "#ffb86a", this.cScale3 = this.cScale3 || "#dab2ff", this.cScale4 = this.cScale4 || "#7bf1a8", this.cScale5 = this.cScale5 || "#c4b4ff", this.cScale6 = this.cScale6 || "#ffa2a2", this.cScale7 = this.cScale7 || "#ffdf20", this.cScale8 = this.cScale8 || "#a3b3ff", this.cScale9 = this.cScale9 || "#bbf451", this.cScale10 = this.cScale10 || "#74d4ff", this.cScale11 = this.cScale11 || "#ffa1ad";
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this["cScaleInv" + o] = this["cScaleInv" + o] || L(this["cScale" + o]);
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this.darkMode ? this["cScalePeer" + o] = this["cScalePeer" + o] || I(this["cScale" + o], 10) : this["cScalePeer" + o] = this["cScalePeer" + o] || D(this["cScale" + o], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let o = 0; o < this.THEME_COLOR_LIMIT; o++)
      this["cScaleLabel" + o] = this["cScaleLabel" + o] || this.scaleLabelColor;
    const s = this.darkMode ? -4 : -1;
    for (let o = 0; o < 5; o++)
      this["surface" + o] = this["surface" + o] || b(this.mainBkg, { h: 180, s: -15, l: s * (5 + o * 3) }), this["surfacePeer" + o] = this["surfacePeer" + o] || b(this.mainBkg, { h: 180, s: -15, l: s * (8 + o * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || t, this.fillType1 = this.fillType1 || r, this.fillType2 = this.fillType2 || b(t, { h: 64 }), this.fillType3 = this.fillType3 || b(r, { h: 64 }), this.fillType4 = this.fillType4 || b(t, { h: -64 }), this.fillType5 = this.fillType5 || b(r, { h: -64 }), this.fillType6 = this.fillType6 || b(t, { h: 128 }), this.fillType7 = this.fillType7 || b(r, { h: 128 }), this.pie1 = this.pie1 || t, this.pie2 = this.pie2 || r, this.pie3 = this.pie3 || i, this.pie4 = this.pie4 || b(t, { l: -10 }), this.pie5 = this.pie5 || b(r, { l: -10 }), this.pie6 = this.pie6 || b(i, { l: -10 }), this.pie7 = this.pie7 || b(t, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(t, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(t, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(t, { h: 60, l: -20 }), this.pie11 = this.pie11 || b(t, { h: -60, l: -20 }), this.pie12 = this.pie12 || b(t, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || t, this.quadrant2Fill = this.quadrant2Fill || b(t, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(t, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(t, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Be(this.quadrant1Fill) ? I(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || t, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || t, this.git1 = this.git1 || r, this.git2 = this.git2 || i, this.git3 = this.git3 || b(t, { h: -30 }), this.git4 = this.git4 || b(t, { h: -60 }), this.git5 = this.git5 || b(t, { h: -90 }), this.git6 = this.git6 || b(t, { h: 60 }), this.git7 = this.git7 || b(t, { h: 120 }), this.darkMode ? (this.git0 = I(this.git0, 25), this.git1 = I(this.git1, 25), this.git2 = I(this.git2, 25), this.git3 = I(this.git3, 25), this.git4 = I(this.git4, 25), this.git5 = I(this.git5, 25), this.git6 = I(this.git6, 25), this.git7 = I(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || L(this.git0), this.gitInv1 = this.gitInv1 || L(this.git1), this.gitInv2 = this.gitInv2 || L(this.git2), this.gitInv3 = this.gitInv3 || L(this.git3), this.gitInv4 = this.gitInv4 || L(this.git4), this.gitInv5 = this.gitInv5 || L(this.git5), this.gitInv6 = this.gitInv6 || L(this.git6), this.gitInv7 = this.gitInv7 || L(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.fontWeight = 600, this.erEdgeLabelBackground = "#FFFFFF", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || qe, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || We;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(Si, "Theme"), Si), ib = /* @__PURE__ */ g((e) => {
  const t = new rb();
  return t.calculate(e), t;
}, "getThemeVariables"), wi, sb = (wi = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = I(this.primaryColor, 16), this.tertiaryColor = b(this.primaryColor, { h: -160 }), this.primaryBorderColor = L(this.background), this.secondaryBorderColor = at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = at(this.tertiaryColor, this.darkMode), this.primaryTextColor = L(this.primaryColor), this.secondaryTextColor = L(this.secondaryColor), this.tertiaryTextColor = L(this.tertiaryColor), this.mainBkg = "#111113", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = I(L("#323D47"), 10), this.border1 = "#ccc", this.border2 = fr(255, 255, 255, 0.25), this.arrowheadColor = L(this.background), this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.labelBackground = "#111113", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.radius = 12, this.strokeWidth = 2, this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3", this.noteTextColor = this.noteTextColor ?? "#28253D", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"Recursive Variable", arial, sans-serif', this.fontSize = "14px", this.nodeBorder = "#FFFFFF", this.stateBorder = "#FFFFFF", this.useGradient = !1, this.gradientStart = "#0042eb", this.gradientStop = "#eb0042", this.dropShadow = "url(#drop-shadow)", this.nodeShadow = !0, this.archEdgeColor = "calculated", this.archEdgeArrowColor = "calculated", this.archEdgeWidth = "3", this.archGroupBorderColor = this.primaryBorderColor, this.archGroupBorderWidth = "2px", this.clusterBkg = "#1E1A2E", this.clusterBorder = "#BDBCCC", this.noteBorderColor = "#FACC15", this.noteFontWeight = 600, this.borderColorArray = [
      "#E879F9",
      //Fuchsia-400
      "#2DD4BF",
      //Teal-400
      "#FB923C",
      //Orange-400
      "#22D3EE",
      // Cyan-400
      "#4ADE80",
      // Green-400
      "#A78BFA",
      //Violet-400
      "#F87171",
      //red-400
      "#FACC15",
      //yellow-400
      "#818CF8",
      //indigo-400
      "#A3E635 ",
      //Lime-400
      "#38BDF8",
      //Sky-400
      "#FB7185"
      //Rose-400
    ], this.bkgColorArray = [], this.filterColor = "#FFFFFF";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF"), this.secondaryColor = this.secondaryColor || b(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || b(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || at(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || at(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || at(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || at(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#FFFFFF", this.secondaryTextColor = this.secondaryTextColor || L(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || L(this.tertiaryColor), this.lineColor = this.lineColor || L(this.background), this.arrowheadColor = this.arrowheadColor || L(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.border1, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = "#FFFFFF", this.signalColor = "#FFFFFF", this.labelBoxBorderColor = "#BDBCCC", this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || this.actorBorder, this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || D(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || L(this.lineColor), this.rootLabelColor = "#FFFFFF", this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || I(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.vertLineColor = this.vertLineColor || this.primaryBorderColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.archEdgeColor = this.lineColor, this.archEdgeArrowColor = this.lineColor, this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || "#f4a8ff", this.cScale1 = this.cScale1 || "#46ecd5", this.cScale2 = this.cScale2 || "#ffb86a", this.cScale3 = this.cScale3 || "#dab2ff", this.cScale4 = this.cScale4 || "#7bf1a8", this.cScale5 = this.cScale5 || "#c4b4ff", this.cScale6 = this.cScale6 || "#ffa2a2", this.cScale7 = this.cScale7 || "#ffdf20", this.cScale8 = this.cScale8 || "#a3b3ff", this.cScale9 = this.cScale9 || "#bbf451", this.cScale10 = this.cScale10 || "#74d4ff", this.cScale11 = this.cScale11 || "#ffa1ad";
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this["cScaleInv" + r] = this["cScaleInv" + r] || L(this["cScale" + r]);
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this.darkMode ? this["cScalePeer" + r] = this["cScalePeer" + r] || I(this["cScale" + r], 10) : this["cScalePeer" + r] = this["cScalePeer" + r] || D(this["cScale" + r], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let r = 0; r < this.THEME_COLOR_LIMIT; r++)
      this["cScaleLabel" + r] = D(this["cScale" + r], 75);
    const t = this.darkMode ? -4 : -1;
    for (let r = 0; r < 5; r++)
      this["surface" + r] = this["surface" + r] || b(this.mainBkg, { h: 180, s: -15, l: t * (5 + r * 3) }), this["surfacePeer" + r] = this["surfacePeer" + r] || b(this.mainBkg, { h: 180, s: -15, l: t * (8 + r * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || b(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || b(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || b(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || b(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || b(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || b(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || b(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || b(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || b(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || b(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || b(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || b(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || b(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || b(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || b(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor, this.vennSetTextColor = this.vennSetTextColor ?? this.textColor, this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || b(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || b(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || b(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || b(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || b(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || b(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || Be(this.quadrant1Fill) ? I(this.quadrant1Fill) : D(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    }, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? D(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || b(this.primaryColor, { h: -30 }), this.git4 = this.git4 || b(this.primaryColor, { h: -60 }), this.git5 = this.git5 || b(this.primaryColor, { h: -90 }), this.git6 = this.git6 || b(this.primaryColor, { h: 60 }), this.git7 = this.git7 || b(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = I(this.git0, 25), this.git1 = I(this.git1, 25), this.git2 = I(this.git2, 25), this.git3 = I(this.git3, 25), this.git4 = I(this.git4, 25), this.git5 = I(this.git5, 25), this.git6 = I(this.git6, 25), this.git7 = I(this.git7, 25)) : (this.git0 = D(this.git0, 25), this.git1 = D(this.git1, 25), this.git2 = D(this.git2, 25), this.git3 = D(this.git3, 25), this.git4 = D(this.git4, 25), this.git5 = D(this.git5, 25), this.git6 = D(this.git6, 25), this.git7 = D(this.git7, 25)), this.gitInv0 = this.gitInv0 || L(this.git0), this.gitInv1 = this.gitInv1 || L(this.git1), this.gitInv2 = this.gitInv2 || L(this.git2), this.gitInv3 = this.gitInv3 || L(this.git3), this.gitInv4 = this.gitInv4 || L(this.git4), this.gitInv5 = this.gitInv5 || L(this.git5), this.gitInv6 = this.gitInv6 || L(this.git6), this.gitInv7 = this.gitInv7 || L(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.commitLineColor = this.commitLineColor ?? "#BDBCCC", this.fontWeight = 600, this.erEdgeLabelBackground = "#16141F", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || qe, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || We;
  }
  calculate(t) {
    if (typeof t != "object") {
      this.updateColors();
      return;
    }
    const r = Object.keys(t);
    r.forEach((i) => {
      this[i] = t[i];
    }), this.updateColors(), r.forEach((i) => {
      this[i] = t[i];
    });
  }
}, g(wi, "Theme"), wi), ob = /* @__PURE__ */ g((e) => {
  const t = new sb();
  return t.calculate(e), t;
}, "getThemeVariables"), je = {
  base: {
    getThemeVariables: NC
  },
  dark: {
    getThemeVariables: WC
  },
  default: {
    getThemeVariables: HC
  },
  forest: {
    getThemeVariables: UC
  },
  neutral: {
    getThemeVariables: GC
  },
  neo: {
    getThemeVariables: VC
  },
  "neo-dark": {
    getThemeVariables: KC
  },
  redux: {
    getThemeVariables: JC
  },
  "redux-dark": {
    getThemeVariables: eb
  },
  "redux-color": {
    getThemeVariables: ib
  },
  "redux-dark-color": {
    getThemeVariables: ob
  }
}, Qt = {
  flowchart: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    subGraphTitleMargin: {
      top: 0,
      bottom: 0
    },
    diagramPadding: 8,
    htmlLabels: null,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200,
    inheritDir: !1
  },
  sequence: {
    useMaxWidth: !0,
    hideUnusedParticipants: !1,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: !0,
    forceMenus: !1,
    bottomMarginAdj: 1,
    rightAngles: !1,
    showSequenceNumbers: !1,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: !1,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: !1,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    maxLabelWidth: 360,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    titleColor: "",
    titleFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    titleFontSize: "4ex"
  },
  class: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    arrowMarkerAbsolute: !1,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: !1,
    hideEmptyMembersBox: !1,
    hierarchicalNamespaces: !0
  },
  state: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    nodeSpacing: 140,
    rankSpacing: 80,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: !0,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: !0,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  xyChart: {
    useMaxWidth: !0,
    width: 700,
    height: 500,
    titleFontSize: 20,
    titlePadding: 10,
    showDataLabel: !1,
    showDataLabelOutsideBar: !1,
    showTitle: !0,
    xAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    yAxis: {
      $ref: "#/$defs/XYChartAxisConfig",
      showLabel: !0,
      labelFontSize: 14,
      labelPadding: 5,
      showTitle: !0,
      titleFontSize: 16,
      titlePadding: 5,
      showTick: !0,
      tickLength: 5,
      tickWidth: 2,
      showAxisLine: !0,
      axisLineWidth: 2
    },
    chartOrientation: "vertical",
    plotReservedSpacePercent: 50
  },
  requirement: {
    useMaxWidth: !0,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: !0,
    padding: 10,
    maxNodeWidth: 200,
    layoutAlgorithm: "cose-bilkent"
  },
  ishikawa: {
    useMaxWidth: !0,
    diagramPadding: 20
  },
  kanban: {
    useMaxWidth: !0,
    padding: 8,
    sectionWidth: 200,
    ticketBaseUrl: ""
  },
  timeline: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: !1,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: !1
  },
  gitGraph: {
    useMaxWidth: !0,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: !0,
    showBranches: !0,
    rotateCommitLabel: !0,
    parallelCommits: !1,
    arrowMarkerAbsolute: !1
  },
  c4: {
    useMaxWidth: !0,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: !0,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: !0,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: !0,
    prefix: "",
    suffix: "",
    nodeWidth: 10,
    nodePadding: 12,
    labelStyle: "legacy"
  },
  block: {
    useMaxWidth: !0,
    padding: 8
  },
  packet: {
    useMaxWidth: !0,
    rowHeight: 32,
    bitWidth: 32,
    bitsPerRow: 32,
    showBits: !0,
    paddingX: 5,
    paddingY: 5
  },
  treeView: {
    useMaxWidth: !0,
    rowIndent: 10,
    paddingX: 5,
    paddingY: 5,
    lineThickness: 1
  },
  architecture: {
    useMaxWidth: !0,
    padding: 40,
    iconSize: 80,
    fontSize: 16,
    randomize: !1,
    nodeSeparation: 75,
    idealEdgeLengthMultiplier: 1.5,
    edgeElasticity: 0.45,
    numIter: 2500
  },
  eventmodeling: {
    useMaxWidth: !0,
    padding: 30,
    rowHeight: 32
  },
  radar: {
    useMaxWidth: !0,
    width: 600,
    height: 600,
    marginTop: 50,
    marginRight: 50,
    marginBottom: 50,
    marginLeft: 50,
    axisScaleFactor: 1,
    axisLabelFactor: 1.05,
    curveTension: 0.17
  },
  venn: {
    useMaxWidth: !0,
    width: 800,
    height: 450,
    padding: 8,
    useDebugLayout: !1
  },
  theme: "default",
  look: "classic",
  handDrawnSeed: 0,
  layout: "dagre",
  maxTextSize: 5e4,
  maxEdges: 500,
  darkMode: !1,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: !0,
  arrowMarkerAbsolute: !1,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "suppressErrorRendering",
    "maxEdges"
  ],
  legacyMathML: !1,
  forceLegacyMathML: !1,
  deterministicIds: !1,
  fontSize: 16,
  markdownAutoWrap: !0,
  suppressErrorRendering: !1
}, xu = {
  ...Qt,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  elk: {
    // mergeEdges is needed here to be considered
    mergeEdges: !1,
    nodePlacementStrategy: "BRANDES_KOEPF",
    forceNodeModelOrder: !1,
    considerModelOrder: "NODES_AND_EDGES"
  },
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: je.default.getThemeVariables(),
  sequence: {
    ...Qt.sequence,
    messageFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont"),
    noteFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    }, "noteFont"),
    actorFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }, "actorFont")
  },
  class: {
    hideEmptyMembersBox: !1,
    hierarchicalNamespaces: !0
  },
  gantt: {
    ...Qt.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...Qt.c4,
    useWidth: void 0,
    personFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    }, "personFont"),
    flowchart: {
      ...Qt.flowchart,
      inheritDir: !1
      // default to legacy behavior
    },
    external_personFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    }, "external_personFont"),
    systemFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    }, "systemFont"),
    external_systemFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    }, "external_systemFont"),
    system_dbFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    }, "system_dbFont"),
    external_system_dbFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    }, "external_system_dbFont"),
    system_queueFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    }, "system_queueFont"),
    external_system_queueFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    }, "external_system_queueFont"),
    containerFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    }, "containerFont"),
    external_containerFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    }, "external_containerFont"),
    container_dbFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    }, "container_dbFont"),
    external_container_dbFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    }, "external_container_dbFont"),
    container_queueFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    }, "container_queueFont"),
    external_container_queueFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    }, "external_container_queueFont"),
    componentFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    }, "componentFont"),
    external_componentFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    }, "external_componentFont"),
    component_dbFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    }, "component_dbFont"),
    external_component_dbFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    }, "external_component_dbFont"),
    component_queueFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    }, "component_queueFont"),
    external_component_queueFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    }, "external_component_queueFont"),
    boundaryFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    }, "boundaryFont"),
    messageFont: /* @__PURE__ */ g(function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }, "messageFont")
  },
  pie: {
    ...Qt.pie,
    useWidth: 984
  },
  xyChart: {
    ...Qt.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...Qt.requirement,
    useWidth: void 0
  },
  packet: {
    ...Qt.packet
  },
  eventmodeling: {
    ...Qt.eventmodeling
  },
  treeView: {
    ...Qt.treeView,
    useWidth: void 0
  },
  radar: {
    ...Qt.radar
  },
  ishikawa: {
    ...Qt.ishikawa
  },
  sankey: {
    ...Qt.sankey,
    // Set so that `configKeys` includes this key for sanitizeDirective
    nodeColors: void 0
  },
  treemap: {
    useMaxWidth: !0,
    padding: 10,
    diagramPadding: 8,
    showValues: !0,
    nodeWidth: 100,
    nodeHeight: 40,
    borderWidth: 1,
    valueFontSize: 12,
    labelFontSize: 14,
    valueFormat: ","
  },
  venn: {
    ...Qt.venn
  }
}, Cu = /* @__PURE__ */ g((e, t = "") => Object.keys(e).reduce((r, i) => Array.isArray(e[i]) ? r : typeof e[i] == "object" && e[i] !== null ? [...r, t + i, ...Cu(e[i], "")] : [...r, t + i], []), "keyify"), ab = new Set(Cu(xu, "")), bu = xu, vo = /* @__PURE__ */ g((e) => {
  if (q.debug("sanitizeDirective called with", e), !(typeof e != "object" || e == null)) {
    if (Array.isArray(e)) {
      e.forEach((t) => vo(t));
      return;
    }
    for (const t of Object.keys(e)) {
      if (q.debug("Checking key", t), t.startsWith("__") || t.includes("proto") || t.includes("constr") || !ab.has(t) || e[t] == null) {
        q.debug("sanitize deleting key: ", t), delete e[t];
        continue;
      }
      if (typeof e[t] == "object") {
        if (t === "nodeColors") {
          const i = /^#[\da-f]{3,8}$|^rgb\([\d\s%,.]+\)$|^hsl\([\d\s%,.]+\)$|^[a-z]+$/i;
          for (const s of Object.keys(e[t]))
            (typeof e[t][s] != "string" || !i.test(e[t][s])) && (q.debug("sanitize deleting invalid color:", s, e[t][s]), delete e[t][s]);
        } else
          q.debug("sanitizing object", t), vo(e[t]);
        continue;
      }
      const r = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const i of r)
        t.includes(i) && (q.debug("sanitizing css option", t), e[t] = ku(e[t]));
    }
    if (e.themeVariables)
      for (const t of Object.keys(e.themeVariables)) {
        const r = e.themeVariables[t];
        r?.match && !r.match(/^[\d "#%(),.;A-Za-z]+$/) && (e.themeVariables[t] = "");
      }
    q.debug("After sanitization", e);
  }
}, "sanitizeDirective"), ku = /* @__PURE__ */ g((e) => {
  let t = 0, r = 0;
  for (const i of e) {
    if (t < r)
      return "{ /* ERROR: Unbalanced CSS */ }";
    i === "{" ? t++ : i === "}" && r++;
  }
  return t !== r ? "{ /* ERROR: Unbalanced CSS */ }" : e;
}, "sanitizeCss"), Li = Object.freeze(bu), tr = /* @__PURE__ */ g((e) => !(e === !1 || ["false", "null", "0"].includes(String(e).trim().toLowerCase())), "evaluate"), oe = Rt({}, Li), Bo, Pr = [], ps = Rt({}, Li), na = /* @__PURE__ */ g((e, t) => {
  let r = Rt({}, e), i = {};
  for (const s of t)
    Tu(s), i = Rt(i, s);
  if (r = Rt(r, i), i.theme && i.theme in je) {
    const s = Rt({}, Bo), o = Rt(
      s.themeVariables || {},
      i.themeVariables
    );
    r.theme && r.theme in je && (r.themeVariables = je[r.theme].getThemeVariables(o));
  }
  return ps = r, vu(ps), ps;
}, "updateCurrentConfig"), nb = /* @__PURE__ */ g((e) => (oe = Rt({}, Li), oe = Rt(oe, e), e.theme && je[e.theme] && (oe.themeVariables = je[e.theme].getThemeVariables(e.themeVariables)), na(oe, Pr), oe), "setSiteConfig"), lb = /* @__PURE__ */ g((e) => {
  Bo = Rt({}, e);
}, "saveConfigFromInitialize"), hb = /* @__PURE__ */ g((e) => (oe = Rt(oe, e), na(oe, Pr), oe), "updateSiteConfig"), Su = /* @__PURE__ */ g(() => Rt({}, oe), "getSiteConfig"), wu = /* @__PURE__ */ g((e) => (vu(e), Rt(ps, e), Lt()), "setConfig"), Lt = /* @__PURE__ */ g(() => Rt({}, ps), "getConfig"), Tu = /* @__PURE__ */ g((e) => {
  e && (["secure", ...oe.secure ?? []].forEach((t) => {
    Object.hasOwn(e, t) && (q.debug(`Denied attempt to modify a secure key ${t}`, e[t]), delete e[t]);
  }), Object.keys(e).forEach((t) => {
    t.startsWith("__") && delete e[t];
  }), Object.keys(e).forEach((t) => {
    typeof e[t] == "string" && (e[t].includes("<") || e[t].includes(">") || e[t].includes("url(data:")) && delete e[t], typeof e[t] == "object" && Tu(e[t]);
  }));
}, "sanitize"), cb = /* @__PURE__ */ g((e) => {
  vo(e), e.fontFamily && !e.themeVariables?.fontFamily && (e.themeVariables = {
    ...e.themeVariables,
    fontFamily: e.fontFamily
  }), Pr.push(e), na(oe, Pr);
}, "addDirective"), Lo = /* @__PURE__ */ g((e = oe) => {
  Pr = [], na(e, Pr);
}, "reset"), db = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead.",
  FLOWCHART_HTML_LABELS_DEPRECATED: "flowchart.htmlLabels is deprecated. Please use global htmlLabels instead."
}, mc = {}, _u = /* @__PURE__ */ g((e) => {
  mc[e] || (q.warn(db[e]), mc[e] = !0);
}, "issueWarning"), vu = /* @__PURE__ */ g((e) => {
  e && (e.lazyLoadedDiagrams || e.loadExternalDiagramsAtStartup) && _u("LAZY_LOAD_DEPRECATED");
}, "checkConfig"), IF = /* @__PURE__ */ g(() => {
  let e = {};
  Bo && (e = Rt(e, Bo));
  for (const t of Pr)
    e = Rt(e, t);
  return e;
}, "getUserDefinedConfig"), ie = /* @__PURE__ */ g((e) => (e.flowchart?.htmlLabels != null && _u("FLOWCHART_HTML_LABELS_DEPRECATED"), tr(e.htmlLabels ?? e.flowchart?.htmlLabels ?? !0)), "getEffectiveHtmlLabels"), $s = /<br\s*\/?>/gi, ub = /* @__PURE__ */ g((e) => e ? Au(e).replace(/\\n/g, "#br#").split("#br#") : [""], "getRows"), fb = /* @__PURE__ */ (() => {
  let e = !1;
  return () => {
    e || (Bu(), e = !0);
  };
})();
function Bu() {
  const e = "data-temp-href-target";
  Bi.addHook("beforeSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute("target") && t.setAttribute(e, t.getAttribute("target") ?? "");
  }), Bi.addHook("afterSanitizeAttributes", (t) => {
    t.tagName === "A" && t.hasAttribute(e) && (t.setAttribute("target", t.getAttribute(e) ?? ""), t.removeAttribute(e), t.getAttribute("target") === "_blank" && t.setAttribute("rel", "noopener"));
  });
}
g(Bu, "setupDompurifyHooks");
var Lu = /* @__PURE__ */ g((e) => (fb(), Bi.sanitize(e)), "removeScript"), yc = /* @__PURE__ */ g((e, t) => {
  if (ie(t)) {
    const r = t.securityLevel;
    r === "antiscript" || r === "strict" || r === "sandbox" ? e = Lu(e) : r !== "loose" && (e = Au(e), e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;"), e = e.replace(/=/g, "&equals;"), e = yb(e));
  }
  return e;
}, "sanitizeMore"), ve = /* @__PURE__ */ g((e, t) => e && (t.dompurifyConfig ? e = Bi.sanitize(yc(e, t), t.dompurifyConfig).toString() : e = Bi.sanitize(yc(e, t), {
  FORBID_TAGS: ["style"]
}).toString(), e), "sanitizeText"), pb = /* @__PURE__ */ g((e, t) => typeof e == "string" ? ve(e, t) : e.flat().map((r) => ve(r, t)), "sanitizeTextOrArray"), gb = /* @__PURE__ */ g((e) => $s.test(e), "hasBreaks"), mb = /* @__PURE__ */ g((e) => e.split($s), "splitBreaks"), yb = /* @__PURE__ */ g((e) => e.replace(/#br#/g, "<br/>"), "placeholderToBreak"), Au = /* @__PURE__ */ g((e) => e.replace($s, "#br#"), "breakToPlaceholder"), xb = /* @__PURE__ */ g((e) => {
  let t = "";
  return e && (t = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, t = CSS.escape(t)), t;
}, "getUrl"), Cb = /* @__PURE__ */ g(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.max(...t);
}, "getMax"), bb = /* @__PURE__ */ g(function(...e) {
  const t = e.filter((r) => !isNaN(r));
  return Math.min(...t);
}, "getMin"), xc = /* @__PURE__ */ g(function(e) {
  const t = e.split(/(,)/), r = [];
  for (let i = 0; i < t.length; i++) {
    let s = t[i];
    if (s === "," && i > 0 && i + 1 < t.length) {
      const o = t[i - 1], a = t[i + 1];
      kb(o, a) && (s = o + "," + a, i++, r.pop());
    }
    r.push(Sb(s));
  }
  return r.join("");
}, "parseGenericTypes"), kn = /* @__PURE__ */ g((e, t) => Math.max(0, e.split(t).length - 1), "countOccurrence"), kb = /* @__PURE__ */ g((e, t) => {
  const r = kn(e, "~"), i = kn(t, "~");
  return r === 1 && i === 1;
}, "shouldCombineSets"), Sb = /* @__PURE__ */ g((e) => {
  const t = kn(e, "~");
  let r = !1;
  if (t <= 1)
    return e;
  t % 2 !== 0 && e.startsWith("~") && (e = e.substring(1), r = !0);
  const i = [...e];
  let s = i.indexOf("~"), o = i.lastIndexOf("~");
  for (; s !== -1 && o !== -1 && s !== o; )
    i[s] = "<", i[o] = ">", s = i.indexOf("~"), o = i.lastIndexOf("~");
  return r && i.unshift("~"), i.join("");
}, "processSet"), Cc = /* @__PURE__ */ g(() => window.MathMLElement !== void 0, "isMathMLSupported"), Sn = /\$\$(.*)\$\$/g, Cs = /* @__PURE__ */ g((e) => (e.match(Sn)?.length ?? 0) > 0, "hasKatex"), DF = /* @__PURE__ */ g(async (e, t) => {
  const r = document.createElement("div");
  r.innerHTML = await Eu(e, t), r.id = "katex-temp", r.style.visibility = "hidden", r.style.position = "absolute", r.style.top = "0", document.querySelector("body")?.insertAdjacentElement("beforeend", r);
  const s = { width: r.clientWidth, height: r.clientHeight };
  return r.remove(), s;
}, "calculateMathMLDimensions"), wb = /* @__PURE__ */ g(async (e, t) => {
  if (!Cs(e))
    return e;
  if (!(Cc() || t.legacyMathML || t.forceLegacyMathML))
    return e.replace(Sn, "MathML is unsupported in this environment.");
  {
    const { default: r } = await import("./katex.js"), i = t.forceLegacyMathML || !Cc() && t.legacyMathML ? "htmlAndMathml" : "mathml";
    return e.split($s).map(
      (s) => Cs(s) ? `<div style="display: flex; align-items: center; justify-content: center; white-space: nowrap;">${s}</div>` : `<div>${s}</div>`
    ).join("").replace(
      Sn,
      (s, o) => r.renderToString(o, {
        throwOnError: !0,
        displayMode: !0,
        output: i
      }).replace(/\n/g, " ").replace(/<annotation.*<\/annotation>/g, "")
    );
  }
}, "renderKatexUnsanitized"), Eu = /* @__PURE__ */ g(async (e, t) => ve(await wb(e, t), t), "renderKatexSanitized"), Os = {
  getRows: ub,
  sanitizeText: ve,
  sanitizeTextOrArray: pb,
  hasBreaks: gb,
  splitBreaks: mb,
  lineBreakRegex: $s,
  removeScript: Lu,
  getUrl: xb,
  evaluate: tr,
  getMax: Cb,
  getMin: bb
}, Tb = /* @__PURE__ */ g(function(e, t) {
  for (let r of t)
    e.attr(r[0], r[1]);
}, "d3Attrs"), _b = /* @__PURE__ */ g(function(e, t, r) {
  let i = /* @__PURE__ */ new Map();
  return r ? (i.set("width", "100%"), i.set("style", `max-width: ${t}px;`)) : (i.set("height", e), i.set("width", t)), i;
}, "calculateSvgSizeAttrs"), Fu = /* @__PURE__ */ g(function(e, t, r, i) {
  const s = _b(t, r, i);
  Tb(e, s);
}, "configureSvgSize"), vb = /* @__PURE__ */ g(function(e, t, r, i) {
  const s = t.node().getBBox(), o = s.width, a = s.height;
  q.info(`SVG bounds: ${o}x${a}`, s);
  let n = 0, l = 0;
  q.info(`Graph bounds: ${n}x${l}`, e), n = o + r * 2, l = a + r * 2, q.info(`Calculated bounds: ${n}x${l}`), Fu(t, l, n, i);
  const c = `${s.x - r} ${s.y - r} ${s.width + 2 * r} ${s.height + 2 * r}`;
  t.attr("viewBox", c);
}, "setupGraphViewbox"), fo = {};
function wn(e) {
  return [...e.cssRules].map((t) => t.cssText).join(`
`);
}
g(wn, "cssStyleSheetToString");
var Bb = /* @__PURE__ */ g((e, t, r, i) => {
  let s = "";
  return e in fo && fo[e] ? s = fo[e]({ ...r, svgId: i }) : q.warn(`No theme found for ${e}`), ` & {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
    fill: ${r.textColor}
  }
  @keyframes edge-animation-frame {
    from {
      stroke-dashoffset: 0;
    }
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
  & .edge-animation-slow {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 50s linear infinite;
    stroke-linecap: round;
  }
  & .edge-animation-fast {
    stroke-dasharray: 9,5 !important;
    stroke-dashoffset: 900;
    animation: dash 20s linear infinite;
    stroke-linecap: round;
  }
  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${r.errorBkgColor};
  }
  & .error-text {
    fill: ${r.errorTextColor};
    stroke: ${r.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: ${r.strokeWidth ?? 1}px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }
  & .edge-thickness-invisible {
    stroke-width: 0;
    fill: none;
  }
  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${r.lineColor};
    stroke: ${r.lineColor};
  }
  & .marker.cross {
    stroke: ${r.lineColor};
  }

  & svg {
    font-family: ${r.fontFamily};
    font-size: ${r.fontSize};
  }
   & p {
    margin: 0
   }

  ${s}
  .node .neo-node {
    stroke: ${r.nodeBorder};
  }

  [data-look="neo"].node rect, [data-look="neo"].cluster rect, [data-look="neo"].node polygon {
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }


  [data-look="neo"].node path {
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    stroke-width: ${r.strokeWidth ?? 1}px;
  }

  [data-look="neo"].node .outer-path {
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

  [data-look="neo"].node .neo-line path {
    stroke: ${r.nodeBorder};
    filter: none;
  }

  [data-look="neo"].node circle{
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

  [data-look="neo"].node circle .state-start{
    fill: #000000;
  }

  [data-look="neo"].icon-shape .icon {
    fill: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

    [data-look="neo"].icon-shape .icon-neo path {
    stroke: ${r.useGradient ? "url(" + i + "-gradient)" : r.nodeBorder};
    filter: ${r.dropShadow ? r.dropShadow.replace("url(#drop-shadow)", `url(${i}-drop-shadow)`) : "none"};
  }

  ${t}
`;
}, "getStyles"), Lb = /* @__PURE__ */ g((e, t) => {
  t !== void 0 && (fo[e] = t);
}, "addStylesForDiagram"), Ab = Bb, Mu = {};
Vx(Mu, {
  clear: () => Eb,
  getAccDescription: () => Ob,
  getAccTitle: () => Mb,
  getDiagramTitle: () => Db,
  setAccDescription: () => $b,
  setAccTitle: () => Fb,
  setDiagramTitle: () => Ib
});
var _l = "", vl = "", Bl = "", Ll = /* @__PURE__ */ g((e) => ve(e, Lt()), "sanitizeText"), Eb = /* @__PURE__ */ g(() => {
  _l = "", Bl = "", vl = "";
}, "clear"), Fb = /* @__PURE__ */ g((e) => {
  _l = Ll(e).replace(/^\s+/g, "");
}, "setAccTitle"), Mb = /* @__PURE__ */ g(() => _l, "getAccTitle"), $b = /* @__PURE__ */ g((e) => {
  Bl = Ll(e).replace(/\n\s+/g, `
`);
}, "setAccDescription"), Ob = /* @__PURE__ */ g(() => Bl, "getAccDescription"), Ib = /* @__PURE__ */ g((e) => {
  vl = Ll(e);
}, "setDiagramTitle"), Db = /* @__PURE__ */ g(() => vl, "getDiagramTitle"), bc = q, Rb = wl, bt = Lt, RF = wu, PF = Li, Al = /* @__PURE__ */ g((e) => ve(e, bt()), "sanitizeText"), Pb = vb, Nb = /* @__PURE__ */ g(() => Mu, "getCommonDb"), Ao = {}, Eo = /* @__PURE__ */ g((e, t, r) => {
  Ao[e] && bc.warn(`Diagram with id ${e} already registered. Overwriting.`), Ao[e] = t, r && yu(e, r), Lb(e, t.styles), t.injectUtils?.(
    bc,
    Rb,
    bt,
    Al,
    Pb,
    Nb(),
    () => {
    }
  );
}, "registerDiagram"), Tn = /* @__PURE__ */ g((e) => {
  if (e in Ao)
    return Ao[e];
  throw new qb(e);
}, "getDiagram"), Ti, qb = (Ti = class extends Error {
  constructor(t) {
    super(`Diagram ${t} not found.`);
  }
}, g(Ti, "DiagramNotFoundError"), Ti), Wb = { value: () => {
} };
function $u() {
  for (var e = 0, t = arguments.length, r = {}, i; e < t; ++e) {
    if (!(i = arguments[e] + "") || i in r || /[\s.]/.test(i)) throw new Error("illegal type: " + i);
    r[i] = [];
  }
  return new po(r);
}
function po(e) {
  this._ = e;
}
function zb(e, t) {
  return e.trim().split(/^|\s+/).map(function(r) {
    var i = "", s = r.indexOf(".");
    if (s >= 0 && (i = r.slice(s + 1), r = r.slice(0, s)), r && !t.hasOwnProperty(r)) throw new Error("unknown type: " + r);
    return { type: r, name: i };
  });
}
po.prototype = $u.prototype = {
  constructor: po,
  on: function(e, t) {
    var r = this._, i = zb(e + "", r), s, o = -1, a = i.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((s = (e = i[o]).type) && (s = Hb(r[s], e.name))) return s;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++o < a; )
      if (s = (e = i[o]).type) r[s] = kc(r[s], e.name, t);
      else if (t == null) for (s in r) r[s] = kc(r[s], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var r in t) e[r] = t[r].slice();
    return new po(e);
  },
  call: function(e, t) {
    if ((s = arguments.length - 2) > 0) for (var r = new Array(s), i = 0, s, o; i < s; ++i) r[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (o = this._[e], i = 0, s = o.length; i < s; ++i) o[i].value.apply(t, r);
  },
  apply: function(e, t, r) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var i = this._[e], s = 0, o = i.length; s < o; ++s) i[s].value.apply(t, r);
  }
};
function Hb(e, t) {
  for (var r = 0, i = e.length, s; r < i; ++r)
    if ((s = e[r]).name === t)
      return s.value;
}
function kc(e, t, r) {
  for (var i = 0, s = e.length; i < s; ++i)
    if (e[i].name === t) {
      e[i] = Wb, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return r != null && e.push({ name: t, value: r }), e;
}
var _n = "http://www.w3.org/1999/xhtml";
const Sc = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: _n,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function la(e) {
  var t = e += "", r = t.indexOf(":");
  return r >= 0 && (t = e.slice(0, r)) !== "xmlns" && (e = e.slice(r + 1)), Sc.hasOwnProperty(t) ? { space: Sc[t], local: e } : e;
}
function Yb(e) {
  return function() {
    var t = this.ownerDocument, r = this.namespaceURI;
    return r === _n && t.documentElement.namespaceURI === _n ? t.createElement(e) : t.createElementNS(r, e);
  };
}
function Ub(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function Ou(e) {
  var t = la(e);
  return (t.local ? Ub : Yb)(t);
}
function Xb() {
}
function El(e) {
  return e == null ? Xb : function() {
    return this.querySelector(e);
  };
}
function Gb(e) {
  typeof e != "function" && (e = El(e));
  for (var t = this._groups, r = t.length, i = new Array(r), s = 0; s < r; ++s)
    for (var o = t[s], a = o.length, n = i[s] = new Array(a), l, c, h = 0; h < a; ++h)
      (l = o[h]) && (c = e.call(l, l.__data__, h, o)) && ("__data__" in l && (c.__data__ = l.__data__), n[h] = c);
  return new ce(i, this._parents);
}
function jb(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Vb() {
  return [];
}
function Iu(e) {
  return e == null ? Vb : function() {
    return this.querySelectorAll(e);
  };
}
function Zb(e) {
  return function() {
    return jb(e.apply(this, arguments));
  };
}
function Kb(e) {
  typeof e == "function" ? e = Zb(e) : e = Iu(e);
  for (var t = this._groups, r = t.length, i = [], s = [], o = 0; o < r; ++o)
    for (var a = t[o], n = a.length, l, c = 0; c < n; ++c)
      (l = a[c]) && (i.push(e.call(l, l.__data__, c, a)), s.push(l));
  return new ce(i, s);
}
function Du(e) {
  return function() {
    return this.matches(e);
  };
}
function Ru(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Qb = Array.prototype.find;
function Jb(e) {
  return function() {
    return Qb.call(this.children, e);
  };
}
function tk() {
  return this.firstElementChild;
}
function ek(e) {
  return this.select(e == null ? tk : Jb(typeof e == "function" ? e : Ru(e)));
}
var rk = Array.prototype.filter;
function ik() {
  return Array.from(this.children);
}
function sk(e) {
  return function() {
    return rk.call(this.children, e);
  };
}
function ok(e) {
  return this.selectAll(e == null ? ik : sk(typeof e == "function" ? e : Ru(e)));
}
function ak(e) {
  typeof e != "function" && (e = Du(e));
  for (var t = this._groups, r = t.length, i = new Array(r), s = 0; s < r; ++s)
    for (var o = t[s], a = o.length, n = i[s] = [], l, c = 0; c < a; ++c)
      (l = o[c]) && e.call(l, l.__data__, c, o) && n.push(l);
  return new ce(i, this._parents);
}
function Pu(e) {
  return new Array(e.length);
}
function nk() {
  return new ce(this._enter || this._groups.map(Pu), this._parents);
}
function Fo(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Fo.prototype = {
  constructor: Fo,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function lk(e) {
  return function() {
    return e;
  };
}
function hk(e, t, r, i, s, o) {
  for (var a = 0, n, l = t.length, c = o.length; a < c; ++a)
    (n = t[a]) ? (n.__data__ = o[a], i[a] = n) : r[a] = new Fo(e, o[a]);
  for (; a < l; ++a)
    (n = t[a]) && (s[a] = n);
}
function ck(e, t, r, i, s, o, a) {
  var n, l, c = /* @__PURE__ */ new Map(), h = t.length, d = o.length, f = new Array(h), u;
  for (n = 0; n < h; ++n)
    (l = t[n]) && (f[n] = u = a.call(l, l.__data__, n, t) + "", c.has(u) ? s[n] = l : c.set(u, l));
  for (n = 0; n < d; ++n)
    u = a.call(e, o[n], n, o) + "", (l = c.get(u)) ? (i[n] = l, l.__data__ = o[n], c.delete(u)) : r[n] = new Fo(e, o[n]);
  for (n = 0; n < h; ++n)
    (l = t[n]) && c.get(f[n]) === l && (s[n] = l);
}
function dk(e) {
  return e.__data__;
}
function uk(e, t) {
  if (!arguments.length) return Array.from(this, dk);
  var r = t ? ck : hk, i = this._parents, s = this._groups;
  typeof e != "function" && (e = lk(e));
  for (var o = s.length, a = new Array(o), n = new Array(o), l = new Array(o), c = 0; c < o; ++c) {
    var h = i[c], d = s[c], f = d.length, u = fk(e.call(h, h && h.__data__, c, i)), p = u.length, m = n[c] = new Array(p), y = a[c] = new Array(p), x = l[c] = new Array(f);
    r(h, d, m, y, x, u, t);
    for (var C = 0, k = 0, T, w; C < p; ++C)
      if (T = m[C]) {
        for (C >= k && (k = C + 1); !(w = y[k]) && ++k < p; ) ;
        T._next = w || null;
      }
  }
  return a = new ce(a, i), a._enter = n, a._exit = l, a;
}
function fk(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function pk() {
  return new ce(this._exit || this._groups.map(Pu), this._parents);
}
function gk(e, t, r) {
  var i = this.enter(), s = this, o = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (s = t(s), s && (s = s.selection())), r == null ? o.remove() : r(o), i && s ? i.merge(s).order() : s;
}
function mk(e) {
  for (var t = e.selection ? e.selection() : e, r = this._groups, i = t._groups, s = r.length, o = i.length, a = Math.min(s, o), n = new Array(s), l = 0; l < a; ++l)
    for (var c = r[l], h = i[l], d = c.length, f = n[l] = new Array(d), u, p = 0; p < d; ++p)
      (u = c[p] || h[p]) && (f[p] = u);
  for (; l < s; ++l)
    n[l] = r[l];
  return new ce(n, this._parents);
}
function yk() {
  for (var e = this._groups, t = -1, r = e.length; ++t < r; )
    for (var i = e[t], s = i.length - 1, o = i[s], a; --s >= 0; )
      (a = i[s]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function xk(e) {
  e || (e = Ck);
  function t(d, f) {
    return d && f ? e(d.__data__, f.__data__) : !d - !f;
  }
  for (var r = this._groups, i = r.length, s = new Array(i), o = 0; o < i; ++o) {
    for (var a = r[o], n = a.length, l = s[o] = new Array(n), c, h = 0; h < n; ++h)
      (c = a[h]) && (l[h] = c);
    l.sort(t);
  }
  return new ce(s, this._parents).order();
}
function Ck(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function bk() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function kk() {
  return Array.from(this);
}
function Sk() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], s = 0, o = i.length; s < o; ++s) {
      var a = i[s];
      if (a) return a;
    }
  return null;
}
function wk() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function Tk() {
  return !this.node();
}
function _k(e) {
  for (var t = this._groups, r = 0, i = t.length; r < i; ++r)
    for (var s = t[r], o = 0, a = s.length, n; o < a; ++o)
      (n = s[o]) && e.call(n, n.__data__, o, s);
  return this;
}
function vk(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Bk(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Lk(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Ak(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Ek(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttribute(e) : this.setAttribute(e, r);
  };
}
function Fk(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, r);
  };
}
function Mk(e, t) {
  var r = la(e);
  if (arguments.length < 2) {
    var i = this.node();
    return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r);
  }
  return this.each((t == null ? r.local ? Bk : vk : typeof t == "function" ? r.local ? Fk : Ek : r.local ? Ak : Lk)(r, t));
}
function Nu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function $k(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ok(e, t, r) {
  return function() {
    this.style.setProperty(e, t, r);
  };
}
function Ik(e, t, r) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, r);
  };
}
function Dk(e, t, r) {
  return arguments.length > 1 ? this.each((t == null ? $k : typeof t == "function" ? Ik : Ok)(e, t, r ?? "")) : Ai(this.node(), e);
}
function Ai(e, t) {
  return e.style.getPropertyValue(t) || Nu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Rk(e) {
  return function() {
    delete this[e];
  };
}
function Pk(e, t) {
  return function() {
    this[e] = t;
  };
}
function Nk(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    r == null ? delete this[e] : this[e] = r;
  };
}
function qk(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Rk : typeof t == "function" ? Nk : Pk)(e, t)) : this.node()[e];
}
function qu(e) {
  return e.trim().split(/^|\s+/);
}
function Fl(e) {
  return e.classList || new Wu(e);
}
function Wu(e) {
  this._node = e, this._names = qu(e.getAttribute("class") || "");
}
Wu.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function zu(e, t) {
  for (var r = Fl(e), i = -1, s = t.length; ++i < s; ) r.add(t[i]);
}
function Hu(e, t) {
  for (var r = Fl(e), i = -1, s = t.length; ++i < s; ) r.remove(t[i]);
}
function Wk(e) {
  return function() {
    zu(this, e);
  };
}
function zk(e) {
  return function() {
    Hu(this, e);
  };
}
function Hk(e, t) {
  return function() {
    (t.apply(this, arguments) ? zu : Hu)(this, e);
  };
}
function Yk(e, t) {
  var r = qu(e + "");
  if (arguments.length < 2) {
    for (var i = Fl(this.node()), s = -1, o = r.length; ++s < o; ) if (!i.contains(r[s])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Hk : t ? Wk : zk)(r, t));
}
function Uk() {
  this.textContent = "";
}
function Xk(e) {
  return function() {
    this.textContent = e;
  };
}
function Gk(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function jk(e) {
  return arguments.length ? this.each(e == null ? Uk : (typeof e == "function" ? Gk : Xk)(e)) : this.node().textContent;
}
function Vk() {
  this.innerHTML = "";
}
function Zk(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Kk(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Qk(e) {
  return arguments.length ? this.each(e == null ? Vk : (typeof e == "function" ? Kk : Zk)(e)) : this.node().innerHTML;
}
function Jk() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function t1() {
  return this.each(Jk);
}
function e1() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function r1() {
  return this.each(e1);
}
function i1(e) {
  var t = typeof e == "function" ? e : Ou(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function s1() {
  return null;
}
function o1(e, t) {
  var r = typeof e == "function" ? e : Ou(e), i = t == null ? s1 : typeof t == "function" ? t : El(t);
  return this.select(function() {
    return this.insertBefore(r.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function a1() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function n1() {
  return this.each(a1);
}
function l1() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function h1() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function c1(e) {
  return this.select(e ? h1 : l1);
}
function d1(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function u1(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function f1(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var r = "", i = t.indexOf(".");
    return i >= 0 && (r = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: r };
  });
}
function p1(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var r = 0, i = -1, s = t.length, o; r < s; ++r)
        o = t[r], (!e.type || o.type === e.type) && o.name === e.name ? this.removeEventListener(o.type, o.listener, o.options) : t[++i] = o;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function g1(e, t, r) {
  return function() {
    var i = this.__on, s, o = u1(t);
    if (i) {
      for (var a = 0, n = i.length; a < n; ++a)
        if ((s = i[a]).type === e.type && s.name === e.name) {
          this.removeEventListener(s.type, s.listener, s.options), this.addEventListener(s.type, s.listener = o, s.options = r), s.value = t;
          return;
        }
    }
    this.addEventListener(e.type, o, r), s = { type: e.type, name: e.name, value: t, listener: o, options: r }, i ? i.push(s) : this.__on = [s];
  };
}
function m1(e, t, r) {
  var i = f1(e + ""), s, o = i.length, a;
  if (arguments.length < 2) {
    var n = this.node().__on;
    if (n) {
      for (var l = 0, c = n.length, h; l < c; ++l)
        for (s = 0, h = n[l]; s < o; ++s)
          if ((a = i[s]).type === h.type && a.name === h.name)
            return h.value;
    }
    return;
  }
  for (n = t ? g1 : p1, s = 0; s < o; ++s) this.each(n(i[s], t, r));
  return this;
}
function Yu(e, t, r) {
  var i = Nu(e), s = i.CustomEvent;
  typeof s == "function" ? s = new s(t, r) : (s = i.document.createEvent("Event"), r ? (s.initEvent(t, r.bubbles, r.cancelable), s.detail = r.detail) : s.initEvent(t, !1, !1)), e.dispatchEvent(s);
}
function y1(e, t) {
  return function() {
    return Yu(this, e, t);
  };
}
function x1(e, t) {
  return function() {
    return Yu(this, e, t.apply(this, arguments));
  };
}
function C1(e, t) {
  return this.each((typeof t == "function" ? x1 : y1)(e, t));
}
function* b1() {
  for (var e = this._groups, t = 0, r = e.length; t < r; ++t)
    for (var i = e[t], s = 0, o = i.length, a; s < o; ++s)
      (a = i[s]) && (yield a);
}
var Uu = [null];
function ce(e, t) {
  this._groups = e, this._parents = t;
}
function Is() {
  return new ce([[document.documentElement]], Uu);
}
function k1() {
  return this;
}
ce.prototype = Is.prototype = {
  constructor: ce,
  select: Gb,
  selectAll: Kb,
  selectChild: ek,
  selectChildren: ok,
  filter: ak,
  data: uk,
  enter: nk,
  exit: pk,
  join: gk,
  merge: mk,
  selection: k1,
  order: yk,
  sort: xk,
  call: bk,
  nodes: kk,
  node: Sk,
  size: wk,
  empty: Tk,
  each: _k,
  attr: Mk,
  style: Dk,
  property: qk,
  classed: Yk,
  text: jk,
  html: Qk,
  raise: t1,
  lower: r1,
  append: i1,
  insert: o1,
  remove: n1,
  clone: c1,
  datum: d1,
  on: m1,
  dispatch: C1,
  [Symbol.iterator]: b1
};
function ut(e) {
  return typeof e == "string" ? new ce([[document.querySelector(e)]], [document.documentElement]) : new ce([[e]], Uu);
}
function Ml(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Xu(e, t) {
  var r = Object.create(e.prototype);
  for (var i in t) r[i] = t[i];
  return r;
}
function Ds() {
}
var bs = 0.7, Mo = 1 / bs, ci = "\\s*([+-]?\\d+)\\s*", ks = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Re = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", S1 = /^#([0-9a-f]{3,8})$/, w1 = new RegExp(`^rgb\\(${ci},${ci},${ci}\\)$`), T1 = new RegExp(`^rgb\\(${Re},${Re},${Re}\\)$`), _1 = new RegExp(`^rgba\\(${ci},${ci},${ci},${ks}\\)$`), v1 = new RegExp(`^rgba\\(${Re},${Re},${Re},${ks}\\)$`), B1 = new RegExp(`^hsl\\(${ks},${Re},${Re}\\)$`), L1 = new RegExp(`^hsla\\(${ks},${Re},${Re},${ks}\\)$`), wc = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Ml(Ds, Ss, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Tc,
  // Deprecated! Use color.formatHex.
  formatHex: Tc,
  formatHex8: A1,
  formatHsl: E1,
  formatRgb: _c,
  toString: _c
});
function Tc() {
  return this.rgb().formatHex();
}
function A1() {
  return this.rgb().formatHex8();
}
function E1() {
  return Gu(this).formatHsl();
}
function _c() {
  return this.rgb().formatRgb();
}
function Ss(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = S1.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? vc(t) : r === 3 ? new ne(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? Qs(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? Qs(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = w1.exec(e)) ? new ne(t[1], t[2], t[3], 1) : (t = T1.exec(e)) ? new ne(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = _1.exec(e)) ? Qs(t[1], t[2], t[3], t[4]) : (t = v1.exec(e)) ? Qs(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = B1.exec(e)) ? Ac(t[1], t[2] / 100, t[3] / 100, 1) : (t = L1.exec(e)) ? Ac(t[1], t[2] / 100, t[3] / 100, t[4]) : wc.hasOwnProperty(e) ? vc(wc[e]) : e === "transparent" ? new ne(NaN, NaN, NaN, 0) : null;
}
function vc(e) {
  return new ne(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Qs(e, t, r, i) {
  return i <= 0 && (e = t = r = NaN), new ne(e, t, r, i);
}
function F1(e) {
  return e instanceof Ds || (e = Ss(e)), e ? (e = e.rgb(), new ne(e.r, e.g, e.b, e.opacity)) : new ne();
}
function vn(e, t, r, i) {
  return arguments.length === 1 ? F1(e) : new ne(e, t, r, i ?? 1);
}
function ne(e, t, r, i) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +i;
}
Ml(ne, vn, Xu(Ds, {
  brighter(e) {
    return e = e == null ? Mo : Math.pow(Mo, e), new ne(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? bs : Math.pow(bs, e), new ne(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ne(Ir(this.r), Ir(this.g), Ir(this.b), $o(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Bc,
  // Deprecated! Use color.formatHex.
  formatHex: Bc,
  formatHex8: M1,
  formatRgb: Lc,
  toString: Lc
}));
function Bc() {
  return `#${Ar(this.r)}${Ar(this.g)}${Ar(this.b)}`;
}
function M1() {
  return `#${Ar(this.r)}${Ar(this.g)}${Ar(this.b)}${Ar((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Lc() {
  const e = $o(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ir(this.r)}, ${Ir(this.g)}, ${Ir(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function $o(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ir(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ar(e) {
  return e = Ir(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ac(e, t, r, i) {
  return i <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Se(e, t, r, i);
}
function Gu(e) {
  if (e instanceof Se) return new Se(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ds || (e = Ss(e)), !e) return new Se();
  if (e instanceof Se) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, i = e.b / 255, s = Math.min(t, r, i), o = Math.max(t, r, i), a = NaN, n = o - s, l = (o + s) / 2;
  return n ? (t === o ? a = (r - i) / n + (r < i) * 6 : r === o ? a = (i - t) / n + 2 : a = (t - r) / n + 4, n /= l < 0.5 ? o + s : 2 - o - s, a *= 60) : n = l > 0 && l < 1 ? 0 : a, new Se(a, n, l, e.opacity);
}
function $1(e, t, r, i) {
  return arguments.length === 1 ? Gu(e) : new Se(e, t, r, i ?? 1);
}
function Se(e, t, r, i) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +i;
}
Ml(Se, $1, Xu(Ds, {
  brighter(e) {
    return e = e == null ? Mo : Math.pow(Mo, e), new Se(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? bs : Math.pow(bs, e), new Se(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, i = r + (r < 0.5 ? r : 1 - r) * t, s = 2 * r - i;
    return new ne(
      Va(e >= 240 ? e - 240 : e + 120, s, i),
      Va(e, s, i),
      Va(e < 120 ? e + 240 : e - 120, s, i),
      this.opacity
    );
  },
  clamp() {
    return new Se(Ec(this.h), Js(this.s), Js(this.l), $o(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = $o(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ec(this.h)}, ${Js(this.s) * 100}%, ${Js(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ec(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Js(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Va(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const $l = (e) => () => e;
function ju(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function O1(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(i) {
    return Math.pow(e + i * t, r);
  };
}
function NF(e, t) {
  var r = t - e;
  return r ? ju(e, r > 180 || r < -180 ? r - 360 * Math.round(r / 360) : r) : $l(isNaN(e) ? t : e);
}
function I1(e) {
  return (e = +e) == 1 ? Vu : function(t, r) {
    return r - t ? O1(t, r, e) : $l(isNaN(t) ? r : t);
  };
}
function Vu(e, t) {
  var r = t - e;
  return r ? ju(e, r) : $l(isNaN(e) ? t : e);
}
const Fc = (function e(t) {
  var r = I1(t);
  function i(s, o) {
    var a = r((s = vn(s)).r, (o = vn(o)).r), n = r(s.g, o.g), l = r(s.b, o.b), c = Vu(s.opacity, o.opacity);
    return function(h) {
      return s.r = a(h), s.g = n(h), s.b = l(h), s.opacity = c(h), s + "";
    };
  }
  return i.gamma = e, i;
})(1);
function lr(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
var Bn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Za = new RegExp(Bn.source, "g");
function D1(e) {
  return function() {
    return e;
  };
}
function R1(e) {
  return function(t) {
    return e(t) + "";
  };
}
function P1(e, t) {
  var r = Bn.lastIndex = Za.lastIndex = 0, i, s, o, a = -1, n = [], l = [];
  for (e = e + "", t = t + ""; (i = Bn.exec(e)) && (s = Za.exec(t)); )
    (o = s.index) > r && (o = t.slice(r, o), n[a] ? n[a] += o : n[++a] = o), (i = i[0]) === (s = s[0]) ? n[a] ? n[a] += s : n[++a] = s : (n[++a] = null, l.push({ i: a, x: lr(i, s) })), r = Za.lastIndex;
  return r < t.length && (o = t.slice(r), n[a] ? n[a] += o : n[++a] = o), n.length < 2 ? l[0] ? R1(l[0].x) : D1(t) : (t = l.length, function(c) {
    for (var h = 0, d; h < t; ++h) n[(d = l[h]).i] = d.x(c);
    return n.join("");
  });
}
var Mc = 180 / Math.PI, Ln = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Zu(e, t, r, i, s, o) {
  var a, n, l;
  return (a = Math.sqrt(e * e + t * t)) && (e /= a, t /= a), (l = e * r + t * i) && (r -= e * l, i -= t * l), (n = Math.sqrt(r * r + i * i)) && (r /= n, i /= n, l /= n), e * i < t * r && (e = -e, t = -t, l = -l, a = -a), {
    translateX: s,
    translateY: o,
    rotate: Math.atan2(t, e) * Mc,
    skewX: Math.atan(l) * Mc,
    scaleX: a,
    scaleY: n
  };
}
var to;
function N1(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Ln : Zu(t.a, t.b, t.c, t.d, t.e, t.f);
}
function q1(e) {
  return e == null || (to || (to = document.createElementNS("http://www.w3.org/2000/svg", "g")), to.setAttribute("transform", e), !(e = to.transform.baseVal.consolidate())) ? Ln : (e = e.matrix, Zu(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Ku(e, t, r, i) {
  function s(c) {
    return c.length ? c.pop() + " " : "";
  }
  function o(c, h, d, f, u, p) {
    if (c !== d || h !== f) {
      var m = u.push("translate(", null, t, null, r);
      p.push({ i: m - 4, x: lr(c, d) }, { i: m - 2, x: lr(h, f) });
    } else (d || f) && u.push("translate(" + d + t + f + r);
  }
  function a(c, h, d, f) {
    c !== h ? (c - h > 180 ? h += 360 : h - c > 180 && (c += 360), f.push({ i: d.push(s(d) + "rotate(", null, i) - 2, x: lr(c, h) })) : h && d.push(s(d) + "rotate(" + h + i);
  }
  function n(c, h, d, f) {
    c !== h ? f.push({ i: d.push(s(d) + "skewX(", null, i) - 2, x: lr(c, h) }) : h && d.push(s(d) + "skewX(" + h + i);
  }
  function l(c, h, d, f, u, p) {
    if (c !== d || h !== f) {
      var m = u.push(s(u) + "scale(", null, ",", null, ")");
      p.push({ i: m - 4, x: lr(c, d) }, { i: m - 2, x: lr(h, f) });
    } else (d !== 1 || f !== 1) && u.push(s(u) + "scale(" + d + "," + f + ")");
  }
  return function(c, h) {
    var d = [], f = [];
    return c = e(c), h = e(h), o(c.translateX, c.translateY, h.translateX, h.translateY, d, f), a(c.rotate, h.rotate, d, f), n(c.skewX, h.skewX, d, f), l(c.scaleX, c.scaleY, h.scaleX, h.scaleY, d, f), c = h = null, function(u) {
      for (var p = -1, m = f.length, y; ++p < m; ) d[(y = f[p]).i] = y.x(u);
      return d.join("");
    };
  };
}
var W1 = Ku(N1, "px, ", "px)", "deg)"), z1 = Ku(q1, ", ", ")", ")"), Ei = 0, ss = 0, ji = 0, Qu = 1e3, Oo, os, Io = 0, Nr = 0, ha = 0, ws = typeof performance == "object" && performance.now ? performance : Date, Ju = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ol() {
  return Nr || (Ju(H1), Nr = ws.now() + ha);
}
function H1() {
  Nr = 0;
}
function Do() {
  this._call = this._time = this._next = null;
}
Do.prototype = tf.prototype = {
  constructor: Do,
  restart: function(e, t, r) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    r = (r == null ? Ol() : +r) + (t == null ? 0 : +t), !this._next && os !== this && (os ? os._next = this : Oo = this, os = this), this._call = e, this._time = r, An();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, An());
  }
};
function tf(e, t, r) {
  var i = new Do();
  return i.restart(e, t, r), i;
}
function Y1() {
  Ol(), ++Ei;
  for (var e = Oo, t; e; )
    (t = Nr - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Ei;
}
function $c() {
  Nr = (Io = ws.now()) + ha, Ei = ss = 0;
  try {
    Y1();
  } finally {
    Ei = 0, X1(), Nr = 0;
  }
}
function U1() {
  var e = ws.now(), t = e - Io;
  t > Qu && (ha -= t, Io = e);
}
function X1() {
  for (var e, t = Oo, r, i = 1 / 0; t; )
    t._call ? (i > t._time && (i = t._time), e = t, t = t._next) : (r = t._next, t._next = null, t = e ? e._next = r : Oo = r);
  os = e, An(i);
}
function An(e) {
  if (!Ei) {
    ss && (ss = clearTimeout(ss));
    var t = e - Nr;
    t > 24 ? (e < 1 / 0 && (ss = setTimeout($c, e - ws.now() - ha)), ji && (ji = clearInterval(ji))) : (ji || (Io = ws.now(), ji = setInterval(U1, Qu)), Ei = 1, Ju($c));
  }
}
function Oc(e, t, r) {
  var i = new Do();
  return t = t == null ? 0 : +t, i.restart((s) => {
    i.stop(), e(s + t);
  }, t, r), i;
}
var G1 = $u("start", "end", "cancel", "interrupt"), j1 = [], ef = 0, Ic = 1, En = 2, go = 3, Dc = 4, Fn = 5, mo = 6;
function ca(e, t, r, i, s, o) {
  var a = e.__transition;
  if (!a) e.__transition = {};
  else if (r in a) return;
  V1(e, r, {
    name: t,
    index: i,
    // For context during callback.
    group: s,
    // For context during callback.
    on: G1,
    tween: j1,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ef
  });
}
function Il(e, t) {
  var r = Le(e, t);
  if (r.state > ef) throw new Error("too late; already scheduled");
  return r;
}
function ze(e, t) {
  var r = Le(e, t);
  if (r.state > go) throw new Error("too late; already running");
  return r;
}
function Le(e, t) {
  var r = e.__transition;
  if (!r || !(r = r[t])) throw new Error("transition not found");
  return r;
}
function V1(e, t, r) {
  var i = e.__transition, s;
  i[t] = r, r.timer = tf(o, 0, r.time);
  function o(c) {
    r.state = Ic, r.timer.restart(a, r.delay, r.time), r.delay <= c && a(c - r.delay);
  }
  function a(c) {
    var h, d, f, u;
    if (r.state !== Ic) return l();
    for (h in i)
      if (u = i[h], u.name === r.name) {
        if (u.state === go) return Oc(a);
        u.state === Dc ? (u.state = mo, u.timer.stop(), u.on.call("interrupt", e, e.__data__, u.index, u.group), delete i[h]) : +h < t && (u.state = mo, u.timer.stop(), u.on.call("cancel", e, e.__data__, u.index, u.group), delete i[h]);
      }
    if (Oc(function() {
      r.state === go && (r.state = Dc, r.timer.restart(n, r.delay, r.time), n(c));
    }), r.state = En, r.on.call("start", e, e.__data__, r.index, r.group), r.state === En) {
      for (r.state = go, s = new Array(f = r.tween.length), h = 0, d = -1; h < f; ++h)
        (u = r.tween[h].value.call(e, e.__data__, r.index, r.group)) && (s[++d] = u);
      s.length = d + 1;
    }
  }
  function n(c) {
    for (var h = c < r.duration ? r.ease.call(null, c / r.duration) : (r.timer.restart(l), r.state = Fn, 1), d = -1, f = s.length; ++d < f; )
      s[d].call(e, h);
    r.state === Fn && (r.on.call("end", e, e.__data__, r.index, r.group), l());
  }
  function l() {
    r.state = mo, r.timer.stop(), delete i[t];
    for (var c in i) return;
    delete e.__transition;
  }
}
function Z1(e, t) {
  var r = e.__transition, i, s, o = !0, a;
  if (r) {
    t = t == null ? null : t + "";
    for (a in r) {
      if ((i = r[a]).name !== t) {
        o = !1;
        continue;
      }
      s = i.state > En && i.state < Fn, i.state = mo, i.timer.stop(), i.on.call(s ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete r[a];
    }
    o && delete e.__transition;
  }
}
function K1(e) {
  return this.each(function() {
    Z1(this, e);
  });
}
function Q1(e, t) {
  var r, i;
  return function() {
    var s = ze(this, e), o = s.tween;
    if (o !== r) {
      i = r = o;
      for (var a = 0, n = i.length; a < n; ++a)
        if (i[a].name === t) {
          i = i.slice(), i.splice(a, 1);
          break;
        }
    }
    s.tween = i;
  };
}
function J1(e, t, r) {
  var i, s;
  if (typeof r != "function") throw new Error();
  return function() {
    var o = ze(this, e), a = o.tween;
    if (a !== i) {
      s = (i = a).slice();
      for (var n = { name: t, value: r }, l = 0, c = s.length; l < c; ++l)
        if (s[l].name === t) {
          s[l] = n;
          break;
        }
      l === c && s.push(n);
    }
    o.tween = s;
  };
}
function t2(e, t) {
  var r = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = Le(this.node(), r).tween, s = 0, o = i.length, a; s < o; ++s)
      if ((a = i[s]).name === e)
        return a.value;
    return null;
  }
  return this.each((t == null ? Q1 : J1)(r, e, t));
}
function Dl(e, t, r) {
  var i = e._id;
  return e.each(function() {
    var s = ze(this, i);
    (s.value || (s.value = {}))[t] = r.apply(this, arguments);
  }), function(s) {
    return Le(s, i).value[t];
  };
}
function rf(e, t) {
  var r;
  return (typeof t == "number" ? lr : t instanceof Ss ? Fc : (r = Ss(t)) ? (t = r, Fc) : P1)(e, t);
}
function e2(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function r2(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function i2(e, t, r) {
  var i, s = r + "", o;
  return function() {
    var a = this.getAttribute(e);
    return a === s ? null : a === i ? o : o = t(i = a, r);
  };
}
function s2(e, t, r) {
  var i, s = r + "", o;
  return function() {
    var a = this.getAttributeNS(e.space, e.local);
    return a === s ? null : a === i ? o : o = t(i = a, r);
  };
}
function o2(e, t, r) {
  var i, s, o;
  return function() {
    var a, n = r(this), l;
    return n == null ? void this.removeAttribute(e) : (a = this.getAttribute(e), l = n + "", a === l ? null : a === i && l === s ? o : (s = l, o = t(i = a, n)));
  };
}
function a2(e, t, r) {
  var i, s, o;
  return function() {
    var a, n = r(this), l;
    return n == null ? void this.removeAttributeNS(e.space, e.local) : (a = this.getAttributeNS(e.space, e.local), l = n + "", a === l ? null : a === i && l === s ? o : (s = l, o = t(i = a, n)));
  };
}
function n2(e, t) {
  var r = la(e), i = r === "transform" ? z1 : rf;
  return this.attrTween(e, typeof t == "function" ? (r.local ? a2 : o2)(r, i, Dl(this, "attr." + e, t)) : t == null ? (r.local ? r2 : e2)(r) : (r.local ? s2 : i2)(r, i, t));
}
function l2(e, t) {
  return function(r) {
    this.setAttribute(e, t.call(this, r));
  };
}
function h2(e, t) {
  return function(r) {
    this.setAttributeNS(e.space, e.local, t.call(this, r));
  };
}
function c2(e, t) {
  var r, i;
  function s() {
    var o = t.apply(this, arguments);
    return o !== i && (r = (i = o) && h2(e, o)), r;
  }
  return s._value = t, s;
}
function d2(e, t) {
  var r, i;
  function s() {
    var o = t.apply(this, arguments);
    return o !== i && (r = (i = o) && l2(e, o)), r;
  }
  return s._value = t, s;
}
function u2(e, t) {
  var r = "attr." + e;
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (t == null) return this.tween(r, null);
  if (typeof t != "function") throw new Error();
  var i = la(e);
  return this.tween(r, (i.local ? c2 : d2)(i, t));
}
function f2(e, t) {
  return function() {
    Il(this, e).delay = +t.apply(this, arguments);
  };
}
function p2(e, t) {
  return t = +t, function() {
    Il(this, e).delay = t;
  };
}
function g2(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? f2 : p2)(t, e)) : Le(this.node(), t).delay;
}
function m2(e, t) {
  return function() {
    ze(this, e).duration = +t.apply(this, arguments);
  };
}
function y2(e, t) {
  return t = +t, function() {
    ze(this, e).duration = t;
  };
}
function x2(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? m2 : y2)(t, e)) : Le(this.node(), t).duration;
}
function C2(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    ze(this, e).ease = t;
  };
}
function b2(e) {
  var t = this._id;
  return arguments.length ? this.each(C2(t, e)) : Le(this.node(), t).ease;
}
function k2(e, t) {
  return function() {
    var r = t.apply(this, arguments);
    if (typeof r != "function") throw new Error();
    ze(this, e).ease = r;
  };
}
function S2(e) {
  if (typeof e != "function") throw new Error();
  return this.each(k2(this._id, e));
}
function w2(e) {
  typeof e != "function" && (e = Du(e));
  for (var t = this._groups, r = t.length, i = new Array(r), s = 0; s < r; ++s)
    for (var o = t[s], a = o.length, n = i[s] = [], l, c = 0; c < a; ++c)
      (l = o[c]) && e.call(l, l.__data__, c, o) && n.push(l);
  return new Ze(i, this._parents, this._name, this._id);
}
function T2(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, r = e._groups, i = t.length, s = r.length, o = Math.min(i, s), a = new Array(i), n = 0; n < o; ++n)
    for (var l = t[n], c = r[n], h = l.length, d = a[n] = new Array(h), f, u = 0; u < h; ++u)
      (f = l[u] || c[u]) && (d[u] = f);
  for (; n < i; ++n)
    a[n] = t[n];
  return new Ze(a, this._parents, this._name, this._id);
}
function _2(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var r = t.indexOf(".");
    return r >= 0 && (t = t.slice(0, r)), !t || t === "start";
  });
}
function v2(e, t, r) {
  var i, s, o = _2(t) ? Il : ze;
  return function() {
    var a = o(this, e), n = a.on;
    n !== i && (s = (i = n).copy()).on(t, r), a.on = s;
  };
}
function B2(e, t) {
  var r = this._id;
  return arguments.length < 2 ? Le(this.node(), r).on.on(e) : this.each(v2(r, e, t));
}
function L2(e) {
  return function() {
    var t = this.parentNode;
    for (var r in this.__transition) if (+r !== e) return;
    t && t.removeChild(this);
  };
}
function A2() {
  return this.on("end.remove", L2(this._id));
}
function E2(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = El(e));
  for (var i = this._groups, s = i.length, o = new Array(s), a = 0; a < s; ++a)
    for (var n = i[a], l = n.length, c = o[a] = new Array(l), h, d, f = 0; f < l; ++f)
      (h = n[f]) && (d = e.call(h, h.__data__, f, n)) && ("__data__" in h && (d.__data__ = h.__data__), c[f] = d, ca(c[f], t, r, f, c, Le(h, r)));
  return new Ze(o, this._parents, t, r);
}
function F2(e) {
  var t = this._name, r = this._id;
  typeof e != "function" && (e = Iu(e));
  for (var i = this._groups, s = i.length, o = [], a = [], n = 0; n < s; ++n)
    for (var l = i[n], c = l.length, h, d = 0; d < c; ++d)
      if (h = l[d]) {
        for (var f = e.call(h, h.__data__, d, l), u, p = Le(h, r), m = 0, y = f.length; m < y; ++m)
          (u = f[m]) && ca(u, t, r, m, f, p);
        o.push(f), a.push(h);
      }
  return new Ze(o, a, t, r);
}
var M2 = Is.prototype.constructor;
function $2() {
  return new M2(this._groups, this._parents);
}
function O2(e, t) {
  var r, i, s;
  return function() {
    var o = Ai(this, e), a = (this.style.removeProperty(e), Ai(this, e));
    return o === a ? null : o === r && a === i ? s : s = t(r = o, i = a);
  };
}
function sf(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function I2(e, t, r) {
  var i, s = r + "", o;
  return function() {
    var a = Ai(this, e);
    return a === s ? null : a === i ? o : o = t(i = a, r);
  };
}
function D2(e, t, r) {
  var i, s, o;
  return function() {
    var a = Ai(this, e), n = r(this), l = n + "";
    return n == null && (l = n = (this.style.removeProperty(e), Ai(this, e))), a === l ? null : a === i && l === s ? o : (s = l, o = t(i = a, n));
  };
}
function R2(e, t) {
  var r, i, s, o = "style." + t, a = "end." + o, n;
  return function() {
    var l = ze(this, e), c = l.on, h = l.value[o] == null ? n || (n = sf(t)) : void 0;
    (c !== r || s !== h) && (i = (r = c).copy()).on(a, s = h), l.on = i;
  };
}
function P2(e, t, r) {
  var i = (e += "") == "transform" ? W1 : rf;
  return t == null ? this.styleTween(e, O2(e, i)).on("end.style." + e, sf(e)) : typeof t == "function" ? this.styleTween(e, D2(e, i, Dl(this, "style." + e, t))).each(R2(this._id, e)) : this.styleTween(e, I2(e, i, t), r).on("end.style." + e, null);
}
function N2(e, t, r) {
  return function(i) {
    this.style.setProperty(e, t.call(this, i), r);
  };
}
function q2(e, t, r) {
  var i, s;
  function o() {
    var a = t.apply(this, arguments);
    return a !== s && (i = (s = a) && N2(e, a, r)), i;
  }
  return o._value = t, o;
}
function W2(e, t, r) {
  var i = "style." + (e += "");
  if (arguments.length < 2) return (i = this.tween(i)) && i._value;
  if (t == null) return this.tween(i, null);
  if (typeof t != "function") throw new Error();
  return this.tween(i, q2(e, t, r ?? ""));
}
function z2(e) {
  return function() {
    this.textContent = e;
  };
}
function H2(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function Y2(e) {
  return this.tween("text", typeof e == "function" ? H2(Dl(this, "text", e)) : z2(e == null ? "" : e + ""));
}
function U2(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function X2(e) {
  var t, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (t = (r = s) && U2(s)), t;
  }
  return i._value = e, i;
}
function G2(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, X2(e));
}
function j2() {
  for (var e = this._name, t = this._id, r = of(), i = this._groups, s = i.length, o = 0; o < s; ++o)
    for (var a = i[o], n = a.length, l, c = 0; c < n; ++c)
      if (l = a[c]) {
        var h = Le(l, t);
        ca(l, e, r, c, a, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new Ze(i, this._parents, e, r);
}
function V2() {
  var e, t, r = this, i = r._id, s = r.size();
  return new Promise(function(o, a) {
    var n = { value: a }, l = { value: function() {
      --s === 0 && o();
    } };
    r.each(function() {
      var c = ze(this, i), h = c.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(n), t._.interrupt.push(n), t._.end.push(l)), c.on = t;
    }), s === 0 && o();
  });
}
var Z2 = 0;
function Ze(e, t, r, i) {
  this._groups = e, this._parents = t, this._name = r, this._id = i;
}
function of() {
  return ++Z2;
}
var Ue = Is.prototype;
Ze.prototype = {
  constructor: Ze,
  select: E2,
  selectAll: F2,
  selectChild: Ue.selectChild,
  selectChildren: Ue.selectChildren,
  filter: w2,
  merge: T2,
  selection: $2,
  transition: j2,
  call: Ue.call,
  nodes: Ue.nodes,
  node: Ue.node,
  size: Ue.size,
  empty: Ue.empty,
  each: Ue.each,
  on: B2,
  attr: n2,
  attrTween: u2,
  style: P2,
  styleTween: W2,
  text: Y2,
  textTween: G2,
  remove: A2,
  tween: t2,
  delay: g2,
  duration: x2,
  ease: b2,
  easeVarying: S2,
  end: V2,
  [Symbol.iterator]: Ue[Symbol.iterator]
};
function K2(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Q2 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: K2
};
function J2(e, t) {
  for (var r; !(r = e.__transition) || !(r = r[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return r;
}
function tS(e) {
  var t, r;
  e instanceof Ze ? (t = e._id, e = e._name) : (t = of(), (r = Q2).time = Ol(), e = e == null ? null : e + "");
  for (var i = this._groups, s = i.length, o = 0; o < s; ++o)
    for (var a = i[o], n = a.length, l, c = 0; c < n; ++c)
      (l = a[c]) && ca(l, e, t, c, a, r || J2(l, t));
  return new Ze(i, this._parents, e, t);
}
Is.prototype.interrupt = K1;
Is.prototype.transition = tS;
const Mn = Math.PI, $n = 2 * Mn, vr = 1e-6, eS = $n - vr;
function af(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function rS(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return af;
  const r = 10 ** t;
  return function(i) {
    this._ += i[0];
    for (let s = 1, o = i.length; s < o; ++s)
      this._ += Math.round(arguments[s] * r) / r + i[s];
  };
}
class iS {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? af : rS(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, i, s) {
    this._append`Q${+t},${+r},${this._x1 = +i},${this._y1 = +s}`;
  }
  bezierCurveTo(t, r, i, s, o, a) {
    this._append`C${+t},${+r},${+i},${+s},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(t, r, i, s, o) {
    if (t = +t, r = +r, i = +i, s = +s, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, n = this._y1, l = i - t, c = s - r, h = a - t, d = n - r, f = h * h + d * d;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (f > vr) if (!(Math.abs(d * l - c * h) > vr) || !o)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let u = i - a, p = s - n, m = l * l + c * c, y = u * u + p * p, x = Math.sqrt(m), C = Math.sqrt(f), k = o * Math.tan((Mn - Math.acos((m + f - y) / (2 * x * C))) / 2), T = k / C, w = k / x;
      Math.abs(T - 1) > vr && this._append`L${t + T * h},${r + T * d}`, this._append`A${o},${o},0,0,${+(d * u > h * p)},${this._x1 = t + w * l},${this._y1 = r + w * c}`;
    }
  }
  arc(t, r, i, s, o, a) {
    if (t = +t, r = +r, i = +i, a = !!a, i < 0) throw new Error(`negative radius: ${i}`);
    let n = i * Math.cos(s), l = i * Math.sin(s), c = t + n, h = r + l, d = 1 ^ a, f = a ? s - o : o - s;
    this._x1 === null ? this._append`M${c},${h}` : (Math.abs(this._x1 - c) > vr || Math.abs(this._y1 - h) > vr) && this._append`L${c},${h}`, i && (f < 0 && (f = f % $n + $n), f > eS ? this._append`A${i},${i},0,1,${d},${t - n},${r - l}A${i},${i},0,1,${d},${this._x1 = c},${this._y1 = h}` : f > vr && this._append`A${i},${i},0,${+(f >= Mn)},${d},${this._x1 = t + i * Math.cos(o)},${this._y1 = r + i * Math.sin(o)}`);
  }
  rect(t, r, i, s) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${i = +i}v${+s}h${-i}Z`;
  }
  toString() {
    return this._;
  }
}
function Jr(e) {
  return function() {
    return e;
  };
}
const qF = Math.abs, WF = Math.atan2, zF = Math.cos, HF = Math.max, YF = Math.min, UF = Math.sin, XF = Math.sqrt, Rc = 1e-12, Rl = Math.PI, Pc = Rl / 2, GF = 2 * Rl;
function jF(e) {
  return e > 1 ? 0 : e < -1 ? Rl : Math.acos(e);
}
function VF(e) {
  return e >= 1 ? Pc : e <= -1 ? -Pc : Math.asin(e);
}
function sS(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const i = Math.floor(r);
      if (!(i >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = i;
    }
    return e;
  }, () => new iS(t);
}
function oS(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function nf(e) {
  this._context = e;
}
nf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function gs(e) {
  return new nf(e);
}
function aS(e) {
  return e[0];
}
function nS(e) {
  return e[1];
}
function lS(e, t) {
  var r = Jr(!0), i = null, s = gs, o = null, a = sS(n);
  e = typeof e == "function" ? e : e === void 0 ? aS : Jr(e), t = typeof t == "function" ? t : t === void 0 ? nS : Jr(t);
  function n(l) {
    var c, h = (l = oS(l)).length, d, f = !1, u;
    for (i == null && (o = s(u = a())), c = 0; c <= h; ++c)
      !(c < h && r(d = l[c], c, l)) === f && ((f = !f) ? o.lineStart() : o.lineEnd()), f && o.point(+e(d, c, l), +t(d, c, l));
    if (u) return o = null, u + "" || null;
  }
  return n.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : Jr(+l), n) : e;
  }, n.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : Jr(+l), n) : t;
  }, n.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : Jr(!!l), n) : r;
  }, n.curve = function(l) {
    return arguments.length ? (s = l, i != null && (o = s(i)), n) : s;
  }, n.context = function(l) {
    return arguments.length ? (l == null ? i = o = null : o = s(i = l), n) : i;
  }, n;
}
class lf {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      // falls through
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function hf(e) {
  return new lf(e, !0);
}
function cf(e) {
  return new lf(e, !1);
}
function gr() {
}
function Ro(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function da(e) {
  this._context = e;
}
da.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Ro(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        Ro(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function On(e) {
  return new da(e);
}
function df(e) {
  this._context = e;
}
df.prototype = {
  areaStart: gr,
  areaEnd: gr,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Ro(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function hS(e) {
  return new df(e);
}
function uf(e) {
  this._context = e;
}
uf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, i = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, i) : this._context.moveTo(r, i);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Ro(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function cS(e) {
  return new uf(e);
}
function ff(e, t) {
  this._basis = new da(e), this._beta = t;
}
ff.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length - 1;
    if (r > 0)
      for (var i = e[0], s = t[0], o = e[r] - i, a = t[r] - s, n = -1, l; ++n <= r; )
        l = n / r, this._basis.point(
          this._beta * e[n] + (1 - this._beta) * (i + l * o),
          this._beta * t[n] + (1 - this._beta) * (s + l * a)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
const dS = (function e(t) {
  function r(i) {
    return t === 1 ? new da(i) : new ff(i, t);
  }
  return r.beta = function(i) {
    return e(+i);
  }, r;
})(0.85);
function Po(e, t, r) {
  e._context.bezierCurveTo(
    e._x1 + e._k * (e._x2 - e._x0),
    e._y1 + e._k * (e._y2 - e._y0),
    e._x2 + e._k * (e._x1 - t),
    e._y2 + e._k * (e._y1 - r),
    e._x2,
    e._y2
  );
}
function Pl(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Pl.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        Po(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2, this._x1 = e, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        Po(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const pf = (function e(t) {
  function r(i) {
    return new Pl(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function Nl(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
Nl.prototype = {
  areaStart: gr,
  areaEnd: gr,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        Po(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const uS = (function e(t) {
  function r(i) {
    return new Nl(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function ql(e, t) {
  this._context = e, this._k = (1 - t) / 6;
}
ql.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Po(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const fS = (function e(t) {
  function r(i) {
    return new ql(i, t);
  }
  return r.tension = function(i) {
    return e(+i);
  }, r;
})(0);
function Wl(e, t, r) {
  var i = e._x1, s = e._y1, o = e._x2, a = e._y2;
  if (e._l01_a > Rc) {
    var n = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a, l = 3 * e._l01_a * (e._l01_a + e._l12_a);
    i = (i * n - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / l, s = (s * n - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / l;
  }
  if (e._l23_a > Rc) {
    var c = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a, h = 3 * e._l23_a * (e._l23_a + e._l12_a);
    o = (o * c + e._x1 * e._l23_2a - t * e._l12_2a) / h, a = (a * c + e._y1 * e._l23_2a - r * e._l12_2a) / h;
  }
  e._context.bezierCurveTo(i, s, o, a, e._x2, e._y2);
}
function gf(e, t) {
  this._context = e, this._alpha = t;
}
gf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        Wl(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const mf = (function e(t) {
  function r(i) {
    return t ? new gf(i, t) : new Pl(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function yf(e, t) {
  this._context = e, this._alpha = t;
}
yf.prototype = {
  areaStart: gr,
  areaEnd: gr,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = e, this._y3 = t;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = e, this._y4 = t);
        break;
      case 2:
        this._point = 3, this._x5 = e, this._y5 = t;
        break;
      default:
        Wl(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const pS = (function e(t) {
  function r(i) {
    return t ? new yf(i, t) : new Nl(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function xf(e, t) {
  this._context = e, this._alpha = t;
}
xf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    if (e = +e, t = +t, this._point) {
      var r = this._x2 - e, i = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(r * r + i * i, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        Wl(this, e, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = e, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const gS = (function e(t) {
  function r(i) {
    return t ? new xf(i, t) : new ql(i, 0);
  }
  return r.alpha = function(i) {
    return e(+i);
  }, r;
})(0.5);
function Cf(e) {
  this._context = e;
}
Cf.prototype = {
  areaStart: gr,
  areaEnd: gr,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function mS(e) {
  return new Cf(e);
}
function Nc(e) {
  return e < 0 ? -1 : 1;
}
function qc(e, t, r) {
  var i = e._x1 - e._x0, s = t - e._x1, o = (e._y1 - e._y0) / (i || s < 0 && -0), a = (r - e._y1) / (s || i < 0 && -0), n = (o * s + a * i) / (i + s);
  return (Nc(o) + Nc(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(n)) || 0;
}
function Wc(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Ka(e, t, r) {
  var i = e._x0, s = e._y0, o = e._x1, a = e._y1, n = (o - i) / 3;
  e._context.bezierCurveTo(i + n, s + n * t, o - n, a - n * r, o, a);
}
function No(e) {
  this._context = e;
}
No.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Ka(this, this._t0, Wc(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Ka(this, Wc(this, r = qc(this, e, t)), r);
          break;
        default:
          Ka(this, this._t0, r = qc(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function bf(e) {
  this._context = new kf(e);
}
(bf.prototype = Object.create(No.prototype)).point = function(e, t) {
  No.prototype.point.call(this, t, e);
};
function kf(e) {
  this._context = e;
}
kf.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, i, s, o) {
    this._context.bezierCurveTo(t, e, i, r, o, s);
  }
};
function Sf(e) {
  return new No(e);
}
function wf(e) {
  return new bf(e);
}
function Tf(e) {
  this._context = e;
}
Tf.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var i = zc(e), s = zc(t), o = 0, a = 1; a < r; ++o, ++a)
          this._context.bezierCurveTo(i[0][o], s[0][o], i[1][o], s[1][o], e[a], t[a]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function zc(e) {
  var t, r = e.length - 1, i, s = new Array(r), o = new Array(r), a = new Array(r);
  for (s[0] = 0, o[0] = 2, a[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) s[t] = 1, o[t] = 4, a[t] = 4 * e[t] + 2 * e[t + 1];
  for (s[r - 1] = 2, o[r - 1] = 7, a[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) i = s[t] / o[t - 1], o[t] -= i, a[t] -= i * a[t - 1];
  for (s[r - 1] = a[r - 1] / o[r - 1], t = r - 2; t >= 0; --t) s[t] = (a[t] - s[t + 1]) / o[t];
  for (o[r - 1] = (e[r] + s[r - 1]) / 2, t = 0; t < r - 1; ++t) o[t] = 2 * e[t + 1] - s[t + 1];
  return [s, o];
}
function _f(e) {
  return new Tf(e);
}
function ua(e, t) {
  this._context = e, this._t = t;
}
ua.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function vf(e) {
  return new ua(e, 0.5);
}
function Bf(e) {
  return new ua(e, 0);
}
function Lf(e) {
  return new ua(e, 1);
}
function as(e, t, r) {
  this.k = e, this.x = t, this.y = r;
}
as.prototype = {
  constructor: as,
  scale: function(e) {
    return e === 1 ? this : new as(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new as(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
as.prototype;
var yS = /* @__PURE__ */ g((e) => {
  const { securityLevel: t } = bt();
  let r = ut("body");
  if (t === "sandbox") {
    const o = ut(`#i${e}`).node()?.contentDocument ?? document;
    r = ut(o.body);
  }
  return r.select(`#${e}`);
}, "selectSvgElement");
function zl(e) {
  return typeof e > "u" || e === null;
}
g(zl, "isNothing");
function Af(e) {
  return typeof e == "object" && e !== null;
}
g(Af, "isObject");
function Ef(e) {
  return Array.isArray(e) ? e : zl(e) ? [] : [e];
}
g(Ef, "toArray");
function Ff(e, t) {
  var r, i, s, o;
  if (t)
    for (o = Object.keys(t), r = 0, i = o.length; r < i; r += 1)
      s = o[r], e[s] = t[s];
  return e;
}
g(Ff, "extend");
function Mf(e, t) {
  var r = "", i;
  for (i = 0; i < t; i += 1)
    r += e;
  return r;
}
g(Mf, "repeat");
function $f(e) {
  return e === 0 && Number.NEGATIVE_INFINITY === 1 / e;
}
g($f, "isNegativeZero");
var xS = zl, CS = Af, bS = Ef, kS = Mf, SS = $f, wS = Ff, Pt = {
  isNothing: xS,
  isObject: CS,
  toArray: bS,
  repeat: kS,
  isNegativeZero: SS,
  extend: wS
};
function Hl(e, t) {
  var r = "", i = e.reason || "(unknown reason)";
  return e.mark ? (e.mark.name && (r += 'in "' + e.mark.name + '" '), r += "(" + (e.mark.line + 1) + ":" + (e.mark.column + 1) + ")", !t && e.mark.snippet && (r += `

` + e.mark.snippet), i + " " + r) : i;
}
g(Hl, "formatError");
function Fi(e, t) {
  Error.call(this), this.name = "YAMLException", this.reason = e, this.mark = t, this.message = Hl(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
g(Fi, "YAMLException$1");
Fi.prototype = Object.create(Error.prototype);
Fi.prototype.constructor = Fi;
Fi.prototype.toString = /* @__PURE__ */ g(function(t) {
  return this.name + ": " + Hl(this, t);
}, "toString");
var ae = Fi;
function yo(e, t, r, i, s) {
  var o = "", a = "", n = Math.floor(s / 2) - 1;
  return i - t > n && (o = " ... ", t = i - n + o.length), r - i > n && (a = " ...", r = i + n - a.length), {
    str: o + e.slice(t, r).replace(/\t/g, "→") + a,
    pos: i - t + o.length
    // relative position
  };
}
g(yo, "getLine");
function xo(e, t) {
  return Pt.repeat(" ", t - e.length) + e;
}
g(xo, "padStart");
function Of(e, t) {
  if (t = Object.create(t || null), !e.buffer) return null;
  t.maxLength || (t.maxLength = 79), typeof t.indent != "number" && (t.indent = 1), typeof t.linesBefore != "number" && (t.linesBefore = 3), typeof t.linesAfter != "number" && (t.linesAfter = 2);
  for (var r = /\r?\n|\r|\0/g, i = [0], s = [], o, a = -1; o = r.exec(e.buffer); )
    s.push(o.index), i.push(o.index + o[0].length), e.position <= o.index && a < 0 && (a = i.length - 2);
  a < 0 && (a = i.length - 1);
  var n = "", l, c, h = Math.min(e.line + t.linesAfter, s.length).toString().length, d = t.maxLength - (t.indent + h + 3);
  for (l = 1; l <= t.linesBefore && !(a - l < 0); l++)
    c = yo(
      e.buffer,
      i[a - l],
      s[a - l],
      e.position - (i[a] - i[a - l]),
      d
    ), n = Pt.repeat(" ", t.indent) + xo((e.line - l + 1).toString(), h) + " | " + c.str + `
` + n;
  for (c = yo(e.buffer, i[a], s[a], e.position, d), n += Pt.repeat(" ", t.indent) + xo((e.line + 1).toString(), h) + " | " + c.str + `
`, n += Pt.repeat("-", t.indent + h + 3 + c.pos) + `^
`, l = 1; l <= t.linesAfter && !(a + l >= s.length); l++)
    c = yo(
      e.buffer,
      i[a + l],
      s[a + l],
      e.position - (i[a] - i[a + l]),
      d
    ), n += Pt.repeat(" ", t.indent) + xo((e.line + l + 1).toString(), h) + " | " + c.str + `
`;
  return n.replace(/\n$/, "");
}
g(Of, "makeSnippet");
var TS = Of, _S = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
], vS = [
  "scalar",
  "sequence",
  "mapping"
];
function If(e) {
  var t = {};
  return e !== null && Object.keys(e).forEach(function(r) {
    e[r].forEach(function(i) {
      t[String(i)] = r;
    });
  }), t;
}
g(If, "compileStyleAliases");
function Df(e, t) {
  if (t = t || {}, Object.keys(t).forEach(function(r) {
    if (_S.indexOf(r) === -1)
      throw new ae('Unknown option "' + r + '" is met in definition of "' + e + '" YAML type.');
  }), this.options = t, this.tag = e, this.kind = t.kind || null, this.resolve = t.resolve || function() {
    return !0;
  }, this.construct = t.construct || function(r) {
    return r;
  }, this.instanceOf = t.instanceOf || null, this.predicate = t.predicate || null, this.represent = t.represent || null, this.representName = t.representName || null, this.defaultStyle = t.defaultStyle || null, this.multi = t.multi || !1, this.styleAliases = If(t.styleAliases || null), vS.indexOf(this.kind) === -1)
    throw new ae('Unknown kind "' + this.kind + '" is specified for "' + e + '" YAML type.');
}
g(Df, "Type$1");
var Vt = Df;
function In(e, t) {
  var r = [];
  return e[t].forEach(function(i) {
    var s = r.length;
    r.forEach(function(o, a) {
      o.tag === i.tag && o.kind === i.kind && o.multi === i.multi && (s = a);
    }), r[s] = i;
  }), r;
}
g(In, "compileList");
function Rf() {
  var e = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, t, r;
  function i(s) {
    s.multi ? (e.multi[s.kind].push(s), e.multi.fallback.push(s)) : e[s.kind][s.tag] = e.fallback[s.tag] = s;
  }
  for (g(i, "collectType"), t = 0, r = arguments.length; t < r; t += 1)
    arguments[t].forEach(i);
  return e;
}
g(Rf, "compileMap");
function qo(e) {
  return this.extend(e);
}
g(qo, "Schema$1");
qo.prototype.extend = /* @__PURE__ */ g(function(t) {
  var r = [], i = [];
  if (t instanceof Vt)
    i.push(t);
  else if (Array.isArray(t))
    i = i.concat(t);
  else if (t && (Array.isArray(t.implicit) || Array.isArray(t.explicit)))
    t.implicit && (r = r.concat(t.implicit)), t.explicit && (i = i.concat(t.explicit));
  else
    throw new ae("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  r.forEach(function(o) {
    if (!(o instanceof Vt))
      throw new ae("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (o.loadKind && o.loadKind !== "scalar")
      throw new ae("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (o.multi)
      throw new ae("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), i.forEach(function(o) {
    if (!(o instanceof Vt))
      throw new ae("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var s = Object.create(qo.prototype);
  return s.implicit = (this.implicit || []).concat(r), s.explicit = (this.explicit || []).concat(i), s.compiledImplicit = In(s, "implicit"), s.compiledExplicit = In(s, "explicit"), s.compiledTypeMap = Rf(s.compiledImplicit, s.compiledExplicit), s;
}, "extend");
var BS = qo, LS = new Vt("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: /* @__PURE__ */ g(function(e) {
    return e !== null ? e : "";
  }, "construct")
}), AS = new Vt("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: /* @__PURE__ */ g(function(e) {
    return e !== null ? e : [];
  }, "construct")
}), ES = new Vt("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: /* @__PURE__ */ g(function(e) {
    return e !== null ? e : {};
  }, "construct")
}), FS = new BS({
  explicit: [
    LS,
    AS,
    ES
  ]
});
function Pf(e) {
  if (e === null) return !0;
  var t = e.length;
  return t === 1 && e === "~" || t === 4 && (e === "null" || e === "Null" || e === "NULL");
}
g(Pf, "resolveYamlNull");
function Nf() {
  return null;
}
g(Nf, "constructYamlNull");
function qf(e) {
  return e === null;
}
g(qf, "isNull");
var MS = new Vt("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: Pf,
  construct: Nf,
  predicate: qf,
  represent: {
    canonical: /* @__PURE__ */ g(function() {
      return "~";
    }, "canonical"),
    lowercase: /* @__PURE__ */ g(function() {
      return "null";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ g(function() {
      return "NULL";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ g(function() {
      return "Null";
    }, "camelcase"),
    empty: /* @__PURE__ */ g(function() {
      return "";
    }, "empty")
  },
  defaultStyle: "lowercase"
});
function Wf(e) {
  if (e === null) return !1;
  var t = e.length;
  return t === 4 && (e === "true" || e === "True" || e === "TRUE") || t === 5 && (e === "false" || e === "False" || e === "FALSE");
}
g(Wf, "resolveYamlBoolean");
function zf(e) {
  return e === "true" || e === "True" || e === "TRUE";
}
g(zf, "constructYamlBoolean");
function Hf(e) {
  return Object.prototype.toString.call(e) === "[object Boolean]";
}
g(Hf, "isBoolean");
var $S = new Vt("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: Wf,
  construct: zf,
  predicate: Hf,
  represent: {
    lowercase: /* @__PURE__ */ g(function(e) {
      return e ? "true" : "false";
    }, "lowercase"),
    uppercase: /* @__PURE__ */ g(function(e) {
      return e ? "TRUE" : "FALSE";
    }, "uppercase"),
    camelcase: /* @__PURE__ */ g(function(e) {
      return e ? "True" : "False";
    }, "camelcase")
  },
  defaultStyle: "lowercase"
});
function Yf(e) {
  return 48 <= e && e <= 57 || 65 <= e && e <= 70 || 97 <= e && e <= 102;
}
g(Yf, "isHexCode");
function Uf(e) {
  return 48 <= e && e <= 55;
}
g(Uf, "isOctCode");
function Xf(e) {
  return 48 <= e && e <= 57;
}
g(Xf, "isDecCode");
function Gf(e) {
  if (e === null) return !1;
  var t = e.length, r = 0, i = !1, s;
  if (!t) return !1;
  if (s = e[r], (s === "-" || s === "+") && (s = e[++r]), s === "0") {
    if (r + 1 === t) return !0;
    if (s = e[++r], s === "b") {
      for (r++; r < t; r++)
        if (s = e[r], s !== "_") {
          if (s !== "0" && s !== "1") return !1;
          i = !0;
        }
      return i && s !== "_";
    }
    if (s === "x") {
      for (r++; r < t; r++)
        if (s = e[r], s !== "_") {
          if (!Yf(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && s !== "_";
    }
    if (s === "o") {
      for (r++; r < t; r++)
        if (s = e[r], s !== "_") {
          if (!Uf(e.charCodeAt(r))) return !1;
          i = !0;
        }
      return i && s !== "_";
    }
  }
  if (s === "_") return !1;
  for (; r < t; r++)
    if (s = e[r], s !== "_") {
      if (!Xf(e.charCodeAt(r)))
        return !1;
      i = !0;
    }
  return !(!i || s === "_");
}
g(Gf, "resolveYamlInteger");
function jf(e) {
  var t = e, r = 1, i;
  if (t.indexOf("_") !== -1 && (t = t.replace(/_/g, "")), i = t[0], (i === "-" || i === "+") && (i === "-" && (r = -1), t = t.slice(1), i = t[0]), t === "0") return 0;
  if (i === "0") {
    if (t[1] === "b") return r * parseInt(t.slice(2), 2);
    if (t[1] === "x") return r * parseInt(t.slice(2), 16);
    if (t[1] === "o") return r * parseInt(t.slice(2), 8);
  }
  return r * parseInt(t, 10);
}
g(jf, "constructYamlInteger");
function Vf(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && e % 1 === 0 && !Pt.isNegativeZero(e);
}
g(Vf, "isInteger");
var OS = new Vt("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: Gf,
  construct: jf,
  predicate: Vf,
  represent: {
    binary: /* @__PURE__ */ g(function(e) {
      return e >= 0 ? "0b" + e.toString(2) : "-0b" + e.toString(2).slice(1);
    }, "binary"),
    octal: /* @__PURE__ */ g(function(e) {
      return e >= 0 ? "0o" + e.toString(8) : "-0o" + e.toString(8).slice(1);
    }, "octal"),
    decimal: /* @__PURE__ */ g(function(e) {
      return e.toString(10);
    }, "decimal"),
    /* eslint-disable max-len */
    hexadecimal: /* @__PURE__ */ g(function(e) {
      return e >= 0 ? "0x" + e.toString(16).toUpperCase() : "-0x" + e.toString(16).toUpperCase().slice(1);
    }, "hexadecimal")
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
}), IS = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function Zf(e) {
  return !(e === null || !IS.test(e) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  e[e.length - 1] === "_");
}
g(Zf, "resolveYamlFloat");
function Kf(e) {
  var t, r;
  return t = e.replace(/_/g, "").toLowerCase(), r = t[0] === "-" ? -1 : 1, "+-".indexOf(t[0]) >= 0 && (t = t.slice(1)), t === ".inf" ? r === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : t === ".nan" ? NaN : r * parseFloat(t, 10);
}
g(Kf, "constructYamlFloat");
var DS = /^[-+]?[0-9]+e/;
function Qf(e, t) {
  var r;
  if (isNaN(e))
    switch (t) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === e)
    switch (t) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (Pt.isNegativeZero(e))
    return "-0.0";
  return r = e.toString(10), DS.test(r) ? r.replace("e", ".e") : r;
}
g(Qf, "representYamlFloat");
function Jf(e) {
  return Object.prototype.toString.call(e) === "[object Number]" && (e % 1 !== 0 || Pt.isNegativeZero(e));
}
g(Jf, "isFloat");
var RS = new Vt("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: Zf,
  construct: Kf,
  predicate: Jf,
  represent: Qf,
  defaultStyle: "lowercase"
}), tp = FS.extend({
  implicit: [
    MS,
    $S,
    OS,
    RS
  ]
}), PS = tp, ep = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
), rp = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function ip(e) {
  return e === null ? !1 : ep.exec(e) !== null || rp.exec(e) !== null;
}
g(ip, "resolveYamlTimestamp");
function sp(e) {
  var t, r, i, s, o, a, n, l = 0, c = null, h, d, f;
  if (t = ep.exec(e), t === null && (t = rp.exec(e)), t === null) throw new Error("Date resolve error");
  if (r = +t[1], i = +t[2] - 1, s = +t[3], !t[4])
    return new Date(Date.UTC(r, i, s));
  if (o = +t[4], a = +t[5], n = +t[6], t[7]) {
    for (l = t[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return t[9] && (h = +t[10], d = +(t[11] || 0), c = (h * 60 + d) * 6e4, t[9] === "-" && (c = -c)), f = new Date(Date.UTC(r, i, s, o, a, n, l)), c && f.setTime(f.getTime() - c), f;
}
g(sp, "constructYamlTimestamp");
function op(e) {
  return e.toISOString();
}
g(op, "representYamlTimestamp");
var NS = new Vt("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: ip,
  construct: sp,
  instanceOf: Date,
  represent: op
});
function ap(e) {
  return e === "<<" || e === null;
}
g(ap, "resolveYamlMerge");
var qS = new Vt("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: ap
}), Yl = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function np(e) {
  if (e === null) return !1;
  var t, r, i = 0, s = e.length, o = Yl;
  for (r = 0; r < s; r++)
    if (t = o.indexOf(e.charAt(r)), !(t > 64)) {
      if (t < 0) return !1;
      i += 6;
    }
  return i % 8 === 0;
}
g(np, "resolveYamlBinary");
function lp(e) {
  var t, r, i = e.replace(/[\r\n=]/g, ""), s = i.length, o = Yl, a = 0, n = [];
  for (t = 0; t < s; t++)
    t % 4 === 0 && t && (n.push(a >> 16 & 255), n.push(a >> 8 & 255), n.push(a & 255)), a = a << 6 | o.indexOf(i.charAt(t));
  return r = s % 4 * 6, r === 0 ? (n.push(a >> 16 & 255), n.push(a >> 8 & 255), n.push(a & 255)) : r === 18 ? (n.push(a >> 10 & 255), n.push(a >> 2 & 255)) : r === 12 && n.push(a >> 4 & 255), new Uint8Array(n);
}
g(lp, "constructYamlBinary");
function hp(e) {
  var t = "", r = 0, i, s, o = e.length, a = Yl;
  for (i = 0; i < o; i++)
    i % 3 === 0 && i && (t += a[r >> 18 & 63], t += a[r >> 12 & 63], t += a[r >> 6 & 63], t += a[r & 63]), r = (r << 8) + e[i];
  return s = o % 3, s === 0 ? (t += a[r >> 18 & 63], t += a[r >> 12 & 63], t += a[r >> 6 & 63], t += a[r & 63]) : s === 2 ? (t += a[r >> 10 & 63], t += a[r >> 4 & 63], t += a[r << 2 & 63], t += a[64]) : s === 1 && (t += a[r >> 2 & 63], t += a[r << 4 & 63], t += a[64], t += a[64]), t;
}
g(hp, "representYamlBinary");
function cp(e) {
  return Object.prototype.toString.call(e) === "[object Uint8Array]";
}
g(cp, "isBinary");
var WS = new Vt("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: np,
  construct: lp,
  predicate: cp,
  represent: hp
}), zS = Object.prototype.hasOwnProperty, HS = Object.prototype.toString;
function dp(e) {
  if (e === null) return !0;
  var t = [], r, i, s, o, a, n = e;
  for (r = 0, i = n.length; r < i; r += 1) {
    if (s = n[r], a = !1, HS.call(s) !== "[object Object]") return !1;
    for (o in s)
      if (zS.call(s, o))
        if (!a) a = !0;
        else return !1;
    if (!a) return !1;
    if (t.indexOf(o) === -1) t.push(o);
    else return !1;
  }
  return !0;
}
g(dp, "resolveYamlOmap");
function up(e) {
  return e !== null ? e : [];
}
g(up, "constructYamlOmap");
var YS = new Vt("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: dp,
  construct: up
}), US = Object.prototype.toString;
function fp(e) {
  if (e === null) return !0;
  var t, r, i, s, o, a = e;
  for (o = new Array(a.length), t = 0, r = a.length; t < r; t += 1) {
    if (i = a[t], US.call(i) !== "[object Object]" || (s = Object.keys(i), s.length !== 1)) return !1;
    o[t] = [s[0], i[s[0]]];
  }
  return !0;
}
g(fp, "resolveYamlPairs");
function pp(e) {
  if (e === null) return [];
  var t, r, i, s, o, a = e;
  for (o = new Array(a.length), t = 0, r = a.length; t < r; t += 1)
    i = a[t], s = Object.keys(i), o[t] = [s[0], i[s[0]]];
  return o;
}
g(pp, "constructYamlPairs");
var XS = new Vt("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: fp,
  construct: pp
}), GS = Object.prototype.hasOwnProperty;
function gp(e) {
  if (e === null) return !0;
  var t, r = e;
  for (t in r)
    if (GS.call(r, t) && r[t] !== null)
      return !1;
  return !0;
}
g(gp, "resolveYamlSet");
function mp(e) {
  return e !== null ? e : {};
}
g(mp, "constructYamlSet");
var jS = new Vt("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: gp,
  construct: mp
}), yp = PS.extend({
  implicit: [
    NS,
    qS
  ],
  explicit: [
    WS,
    YS,
    XS,
    jS
  ]
}), mr = Object.prototype.hasOwnProperty, Wo = 1, xp = 2, Cp = 3, zo = 4, Qa = 1, VS = 2, Hc = 3, ZS = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, KS = /[\x85\u2028\u2029]/, QS = /[,\[\]\{\}]/, bp = /^(?:!|!!|![a-z\-]+!)$/i, kp = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Dn(e) {
  return Object.prototype.toString.call(e);
}
g(Dn, "_class");
function Te(e) {
  return e === 10 || e === 13;
}
g(Te, "is_EOL");
function pr(e) {
  return e === 9 || e === 32;
}
g(pr, "is_WHITE_SPACE");
function ee(e) {
  return e === 9 || e === 32 || e === 10 || e === 13;
}
g(ee, "is_WS_OR_EOL");
function Er(e) {
  return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
}
g(Er, "is_FLOW_INDICATOR");
function Sp(e) {
  var t;
  return 48 <= e && e <= 57 ? e - 48 : (t = e | 32, 97 <= t && t <= 102 ? t - 97 + 10 : -1);
}
g(Sp, "fromHexCode");
function wp(e) {
  return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
}
g(wp, "escapedHexLen");
function Tp(e) {
  return 48 <= e && e <= 57 ? e - 48 : -1;
}
g(Tp, "fromDecimalCode");
function Rn(e) {
  return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "" : e === 95 ? " " : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
}
g(Rn, "simpleEscapeSequence");
function _p(e) {
  return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode(
    (e - 65536 >> 10) + 55296,
    (e - 65536 & 1023) + 56320
  );
}
g(_p, "charFromCodepoint");
function Ul(e, t, r) {
  t === "__proto__" ? Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: r
  }) : e[t] = r;
}
g(Ul, "setProperty");
var vp = new Array(256), Bp = new Array(256);
for (Tr = 0; Tr < 256; Tr++)
  vp[Tr] = Rn(Tr) ? 1 : 0, Bp[Tr] = Rn(Tr);
var Tr;
function Lp(e, t) {
  this.input = e, this.filename = t.filename || null, this.schema = t.schema || yp, this.onWarning = t.onWarning || null, this.legacy = t.legacy || !1, this.json = t.json || !1, this.listener = t.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
g(Lp, "State$1");
function Xl(e, t) {
  var r = {
    name: e.filename,
    buffer: e.input.slice(0, -1),
    // omit trailing \0
    position: e.position,
    line: e.line,
    column: e.position - e.lineStart
  };
  return r.snippet = TS(r), new ae(t, r);
}
g(Xl, "generateError");
function tt(e, t) {
  throw Xl(e, t);
}
g(tt, "throwError");
function Ts(e, t) {
  e.onWarning && e.onWarning.call(null, Xl(e, t));
}
g(Ts, "throwWarning");
var Yc = {
  YAML: /* @__PURE__ */ g(function(t, r, i) {
    var s, o, a;
    t.version !== null && tt(t, "duplication of %YAML directive"), i.length !== 1 && tt(t, "YAML directive accepts exactly one argument"), s = /^([0-9]+)\.([0-9]+)$/.exec(i[0]), s === null && tt(t, "ill-formed argument of the YAML directive"), o = parseInt(s[1], 10), a = parseInt(s[2], 10), o !== 1 && tt(t, "unacceptable YAML version of the document"), t.version = i[0], t.checkLineBreaks = a < 2, a !== 1 && a !== 2 && Ts(t, "unsupported YAML version of the document");
  }, "handleYamlDirective"),
  TAG: /* @__PURE__ */ g(function(t, r, i) {
    var s, o;
    i.length !== 2 && tt(t, "TAG directive accepts exactly two arguments"), s = i[0], o = i[1], bp.test(s) || tt(t, "ill-formed tag handle (first argument) of the TAG directive"), mr.call(t.tagMap, s) && tt(t, 'there is a previously declared suffix for "' + s + '" tag handle'), kp.test(o) || tt(t, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      o = decodeURIComponent(o);
    } catch {
      tt(t, "tag prefix is malformed: " + o);
    }
    t.tagMap[s] = o;
  }, "handleTagDirective")
};
function Ve(e, t, r, i) {
  var s, o, a, n;
  if (t < r) {
    if (n = e.input.slice(t, r), i)
      for (s = 0, o = n.length; s < o; s += 1)
        a = n.charCodeAt(s), a === 9 || 32 <= a && a <= 1114111 || tt(e, "expected valid JSON character");
    else ZS.test(n) && tt(e, "the stream contains non-printable characters");
    e.result += n;
  }
}
g(Ve, "captureSegment");
function Pn(e, t, r, i) {
  var s, o, a, n;
  for (Pt.isObject(r) || tt(e, "cannot merge mappings; the provided source object is unacceptable"), s = Object.keys(r), a = 0, n = s.length; a < n; a += 1)
    o = s[a], mr.call(t, o) || (Ul(t, o, r[o]), i[o] = !0);
}
g(Pn, "mergeMappings");
function Fr(e, t, r, i, s, o, a, n, l) {
  var c, h;
  if (Array.isArray(s))
    for (s = Array.prototype.slice.call(s), c = 0, h = s.length; c < h; c += 1)
      Array.isArray(s[c]) && tt(e, "nested arrays are not supported inside keys"), typeof s == "object" && Dn(s[c]) === "[object Object]" && (s[c] = "[object Object]");
  if (typeof s == "object" && Dn(s) === "[object Object]" && (s = "[object Object]"), s = String(s), t === null && (t = {}), i === "tag:yaml.org,2002:merge")
    if (Array.isArray(o))
      for (c = 0, h = o.length; c < h; c += 1)
        Pn(e, t, o[c], r);
    else
      Pn(e, t, o, r);
  else
    !e.json && !mr.call(r, s) && mr.call(t, s) && (e.line = a || e.line, e.lineStart = n || e.lineStart, e.position = l || e.position, tt(e, "duplicated mapping key")), Ul(t, s, o), delete r[s];
  return t;
}
g(Fr, "storeMappingPair");
function fa(e) {
  var t;
  t = e.input.charCodeAt(e.position), t === 10 ? e.position++ : t === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : tt(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
}
g(fa, "readLineBreak");
function Mt(e, t, r) {
  for (var i = 0, s = e.input.charCodeAt(e.position); s !== 0; ) {
    for (; pr(s); )
      s === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), s = e.input.charCodeAt(++e.position);
    if (t && s === 35)
      do
        s = e.input.charCodeAt(++e.position);
      while (s !== 10 && s !== 13 && s !== 0);
    if (Te(s))
      for (fa(e), s = e.input.charCodeAt(e.position), i++, e.lineIndent = 0; s === 32; )
        e.lineIndent++, s = e.input.charCodeAt(++e.position);
    else
      break;
  }
  return r !== -1 && i !== 0 && e.lineIndent < r && Ts(e, "deficient indentation"), i;
}
g(Mt, "skipSeparationSpace");
function Rs(e) {
  var t = e.position, r;
  return r = e.input.charCodeAt(t), !!((r === 45 || r === 46) && r === e.input.charCodeAt(t + 1) && r === e.input.charCodeAt(t + 2) && (t += 3, r = e.input.charCodeAt(t), r === 0 || ee(r)));
}
g(Rs, "testDocumentSeparator");
function pa(e, t) {
  t === 1 ? e.result += " " : t > 1 && (e.result += Pt.repeat(`
`, t - 1));
}
g(pa, "writeFoldedLines");
function Ap(e, t, r) {
  var i, s, o, a, n, l, c, h, d = e.kind, f = e.result, u;
  if (u = e.input.charCodeAt(e.position), ee(u) || Er(u) || u === 35 || u === 38 || u === 42 || u === 33 || u === 124 || u === 62 || u === 39 || u === 34 || u === 37 || u === 64 || u === 96 || (u === 63 || u === 45) && (s = e.input.charCodeAt(e.position + 1), ee(s) || r && Er(s)))
    return !1;
  for (e.kind = "scalar", e.result = "", o = a = e.position, n = !1; u !== 0; ) {
    if (u === 58) {
      if (s = e.input.charCodeAt(e.position + 1), ee(s) || r && Er(s))
        break;
    } else if (u === 35) {
      if (i = e.input.charCodeAt(e.position - 1), ee(i))
        break;
    } else {
      if (e.position === e.lineStart && Rs(e) || r && Er(u))
        break;
      if (Te(u))
        if (l = e.line, c = e.lineStart, h = e.lineIndent, Mt(e, !1, -1), e.lineIndent >= t) {
          n = !0, u = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = a, e.line = l, e.lineStart = c, e.lineIndent = h;
          break;
        }
    }
    n && (Ve(e, o, a, !1), pa(e, e.line - l), o = a = e.position, n = !1), pr(u) || (a = e.position + 1), u = e.input.charCodeAt(++e.position);
  }
  return Ve(e, o, a, !1), e.result ? !0 : (e.kind = d, e.result = f, !1);
}
g(Ap, "readPlainScalar");
function Ep(e, t) {
  var r, i, s;
  if (r = e.input.charCodeAt(e.position), r !== 39)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, i = s = e.position; (r = e.input.charCodeAt(e.position)) !== 0; )
    if (r === 39)
      if (Ve(e, i, e.position, !0), r = e.input.charCodeAt(++e.position), r === 39)
        i = e.position, e.position++, s = e.position;
      else
        return !0;
    else Te(r) ? (Ve(e, i, s, !0), pa(e, Mt(e, !1, t)), i = s = e.position) : e.position === e.lineStart && Rs(e) ? tt(e, "unexpected end of the document within a single quoted scalar") : (e.position++, s = e.position);
  tt(e, "unexpected end of the stream within a single quoted scalar");
}
g(Ep, "readSingleQuotedScalar");
function Fp(e, t) {
  var r, i, s, o, a, n;
  if (n = e.input.charCodeAt(e.position), n !== 34)
    return !1;
  for (e.kind = "scalar", e.result = "", e.position++, r = i = e.position; (n = e.input.charCodeAt(e.position)) !== 0; ) {
    if (n === 34)
      return Ve(e, r, e.position, !0), e.position++, !0;
    if (n === 92) {
      if (Ve(e, r, e.position, !0), n = e.input.charCodeAt(++e.position), Te(n))
        Mt(e, !1, t);
      else if (n < 256 && vp[n])
        e.result += Bp[n], e.position++;
      else if ((a = wp(n)) > 0) {
        for (s = a, o = 0; s > 0; s--)
          n = e.input.charCodeAt(++e.position), (a = Sp(n)) >= 0 ? o = (o << 4) + a : tt(e, "expected hexadecimal character");
        e.result += _p(o), e.position++;
      } else
        tt(e, "unknown escape sequence");
      r = i = e.position;
    } else Te(n) ? (Ve(e, r, i, !0), pa(e, Mt(e, !1, t)), r = i = e.position) : e.position === e.lineStart && Rs(e) ? tt(e, "unexpected end of the document within a double quoted scalar") : (e.position++, i = e.position);
  }
  tt(e, "unexpected end of the stream within a double quoted scalar");
}
g(Fp, "readDoubleQuotedScalar");
function Mp(e, t) {
  var r = !0, i, s, o, a = e.tag, n, l = e.anchor, c, h, d, f, u, p = /* @__PURE__ */ Object.create(null), m, y, x, C;
  if (C = e.input.charCodeAt(e.position), C === 91)
    h = 93, u = !1, n = [];
  else if (C === 123)
    h = 125, u = !0, n = {};
  else
    return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = n), C = e.input.charCodeAt(++e.position); C !== 0; ) {
    if (Mt(e, !0, t), C = e.input.charCodeAt(e.position), C === h)
      return e.position++, e.tag = a, e.anchor = l, e.kind = u ? "mapping" : "sequence", e.result = n, !0;
    r ? C === 44 && tt(e, "expected the node content, but found ','") : tt(e, "missed comma between flow collection entries"), y = m = x = null, d = f = !1, C === 63 && (c = e.input.charCodeAt(e.position + 1), ee(c) && (d = f = !0, e.position++, Mt(e, !0, t))), i = e.line, s = e.lineStart, o = e.position, qr(e, t, Wo, !1, !0), y = e.tag, m = e.result, Mt(e, !0, t), C = e.input.charCodeAt(e.position), (f || e.line === i) && C === 58 && (d = !0, C = e.input.charCodeAt(++e.position), Mt(e, !0, t), qr(e, t, Wo, !1, !0), x = e.result), u ? Fr(e, n, p, y, m, x, i, s, o) : d ? n.push(Fr(e, null, p, y, m, x, i, s, o)) : n.push(m), Mt(e, !0, t), C = e.input.charCodeAt(e.position), C === 44 ? (r = !0, C = e.input.charCodeAt(++e.position)) : r = !1;
  }
  tt(e, "unexpected end of the stream within a flow collection");
}
g(Mp, "readFlowCollection");
function $p(e, t) {
  var r, i, s = Qa, o = !1, a = !1, n = t, l = 0, c = !1, h, d;
  if (d = e.input.charCodeAt(e.position), d === 124)
    i = !1;
  else if (d === 62)
    i = !0;
  else
    return !1;
  for (e.kind = "scalar", e.result = ""; d !== 0; )
    if (d = e.input.charCodeAt(++e.position), d === 43 || d === 45)
      Qa === s ? s = d === 43 ? Hc : VS : tt(e, "repeat of a chomping mode identifier");
    else if ((h = Tp(d)) >= 0)
      h === 0 ? tt(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : a ? tt(e, "repeat of an indentation width identifier") : (n = t + h - 1, a = !0);
    else
      break;
  if (pr(d)) {
    do
      d = e.input.charCodeAt(++e.position);
    while (pr(d));
    if (d === 35)
      do
        d = e.input.charCodeAt(++e.position);
      while (!Te(d) && d !== 0);
  }
  for (; d !== 0; ) {
    for (fa(e), e.lineIndent = 0, d = e.input.charCodeAt(e.position); (!a || e.lineIndent < n) && d === 32; )
      e.lineIndent++, d = e.input.charCodeAt(++e.position);
    if (!a && e.lineIndent > n && (n = e.lineIndent), Te(d)) {
      l++;
      continue;
    }
    if (e.lineIndent < n) {
      s === Hc ? e.result += Pt.repeat(`
`, o ? 1 + l : l) : s === Qa && o && (e.result += `
`);
      break;
    }
    for (i ? pr(d) ? (c = !0, e.result += Pt.repeat(`
`, o ? 1 + l : l)) : c ? (c = !1, e.result += Pt.repeat(`
`, l + 1)) : l === 0 ? o && (e.result += " ") : e.result += Pt.repeat(`
`, l) : e.result += Pt.repeat(`
`, o ? 1 + l : l), o = !0, a = !0, l = 0, r = e.position; !Te(d) && d !== 0; )
      d = e.input.charCodeAt(++e.position);
    Ve(e, r, e.position, !1);
  }
  return !0;
}
g($p, "readBlockScalar");
function Nn(e, t) {
  var r, i = e.tag, s = e.anchor, o = [], a, n = !1, l;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = o), l = e.input.charCodeAt(e.position); l !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, tt(e, "tab characters must not be used in indentation")), !(l !== 45 || (a = e.input.charCodeAt(e.position + 1), !ee(a)))); ) {
    if (n = !0, e.position++, Mt(e, !0, -1) && e.lineIndent <= t) {
      o.push(null), l = e.input.charCodeAt(e.position);
      continue;
    }
    if (r = e.line, qr(e, t, Cp, !1, !0), o.push(e.result), Mt(e, !0, -1), l = e.input.charCodeAt(e.position), (e.line === r || e.lineIndent > t) && l !== 0)
      tt(e, "bad indentation of a sequence entry");
    else if (e.lineIndent < t)
      break;
  }
  return n ? (e.tag = i, e.anchor = s, e.kind = "sequence", e.result = o, !0) : !1;
}
g(Nn, "readBlockSequence");
function Op(e, t, r) {
  var i, s, o, a, n, l, c = e.tag, h = e.anchor, d = {}, f = /* @__PURE__ */ Object.create(null), u = null, p = null, m = null, y = !1, x = !1, C;
  if (e.firstTabInLine !== -1) return !1;
  for (e.anchor !== null && (e.anchorMap[e.anchor] = d), C = e.input.charCodeAt(e.position); C !== 0; ) {
    if (!y && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, tt(e, "tab characters must not be used in indentation")), i = e.input.charCodeAt(e.position + 1), o = e.line, (C === 63 || C === 58) && ee(i))
      C === 63 ? (y && (Fr(e, d, f, u, p, null, a, n, l), u = p = m = null), x = !0, y = !0, s = !0) : y ? (y = !1, s = !0) : tt(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, C = i;
    else {
      if (a = e.line, n = e.lineStart, l = e.position, !qr(e, r, xp, !1, !0))
        break;
      if (e.line === o) {
        for (C = e.input.charCodeAt(e.position); pr(C); )
          C = e.input.charCodeAt(++e.position);
        if (C === 58)
          C = e.input.charCodeAt(++e.position), ee(C) || tt(e, "a whitespace character is expected after the key-value separator within a block mapping"), y && (Fr(e, d, f, u, p, null, a, n, l), u = p = m = null), x = !0, y = !1, s = !1, u = e.tag, p = e.result;
        else if (x)
          tt(e, "can not read an implicit mapping pair; a colon is missed");
        else
          return e.tag = c, e.anchor = h, !0;
      } else if (x)
        tt(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return e.tag = c, e.anchor = h, !0;
    }
    if ((e.line === o || e.lineIndent > t) && (y && (a = e.line, n = e.lineStart, l = e.position), qr(e, t, zo, !0, s) && (y ? p = e.result : m = e.result), y || (Fr(e, d, f, u, p, m, a, n, l), u = p = m = null), Mt(e, !0, -1), C = e.input.charCodeAt(e.position)), (e.line === o || e.lineIndent > t) && C !== 0)
      tt(e, "bad indentation of a mapping entry");
    else if (e.lineIndent < t)
      break;
  }
  return y && Fr(e, d, f, u, p, null, a, n, l), x && (e.tag = c, e.anchor = h, e.kind = "mapping", e.result = d), x;
}
g(Op, "readBlockMapping");
function Ip(e) {
  var t, r = !1, i = !1, s, o, a;
  if (a = e.input.charCodeAt(e.position), a !== 33) return !1;
  if (e.tag !== null && tt(e, "duplication of a tag property"), a = e.input.charCodeAt(++e.position), a === 60 ? (r = !0, a = e.input.charCodeAt(++e.position)) : a === 33 ? (i = !0, s = "!!", a = e.input.charCodeAt(++e.position)) : s = "!", t = e.position, r) {
    do
      a = e.input.charCodeAt(++e.position);
    while (a !== 0 && a !== 62);
    e.position < e.length ? (o = e.input.slice(t, e.position), a = e.input.charCodeAt(++e.position)) : tt(e, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; a !== 0 && !ee(a); )
      a === 33 && (i ? tt(e, "tag suffix cannot contain exclamation marks") : (s = e.input.slice(t - 1, e.position + 1), bp.test(s) || tt(e, "named tag handle cannot contain such characters"), i = !0, t = e.position + 1)), a = e.input.charCodeAt(++e.position);
    o = e.input.slice(t, e.position), QS.test(o) && tt(e, "tag suffix cannot contain flow indicator characters");
  }
  o && !kp.test(o) && tt(e, "tag name cannot contain such characters: " + o);
  try {
    o = decodeURIComponent(o);
  } catch {
    tt(e, "tag name is malformed: " + o);
  }
  return r ? e.tag = o : mr.call(e.tagMap, s) ? e.tag = e.tagMap[s] + o : s === "!" ? e.tag = "!" + o : s === "!!" ? e.tag = "tag:yaml.org,2002:" + o : tt(e, 'undeclared tag handle "' + s + '"'), !0;
}
g(Ip, "readTagProperty");
function Dp(e) {
  var t, r;
  if (r = e.input.charCodeAt(e.position), r !== 38) return !1;
  for (e.anchor !== null && tt(e, "duplication of an anchor property"), r = e.input.charCodeAt(++e.position), t = e.position; r !== 0 && !ee(r) && !Er(r); )
    r = e.input.charCodeAt(++e.position);
  return e.position === t && tt(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(t, e.position), !0;
}
g(Dp, "readAnchorProperty");
function Rp(e) {
  var t, r, i;
  if (i = e.input.charCodeAt(e.position), i !== 42) return !1;
  for (i = e.input.charCodeAt(++e.position), t = e.position; i !== 0 && !ee(i) && !Er(i); )
    i = e.input.charCodeAt(++e.position);
  return e.position === t && tt(e, "name of an alias node must contain at least one character"), r = e.input.slice(t, e.position), mr.call(e.anchorMap, r) || tt(e, 'unidentified alias "' + r + '"'), e.result = e.anchorMap[r], Mt(e, !0, -1), !0;
}
g(Rp, "readAlias");
function qr(e, t, r, i, s) {
  var o, a, n, l = 1, c = !1, h = !1, d, f, u, p, m, y;
  if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, o = a = n = zo === r || Cp === r, i && Mt(e, !0, -1) && (c = !0, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)), l === 1)
    for (; Ip(e) || Dp(e); )
      Mt(e, !0, -1) ? (c = !0, n = o, e.lineIndent > t ? l = 1 : e.lineIndent === t ? l = 0 : e.lineIndent < t && (l = -1)) : n = !1;
  if (n && (n = c || s), (l === 1 || zo === r) && (Wo === r || xp === r ? m = t : m = t + 1, y = e.position - e.lineStart, l === 1 ? n && (Nn(e, y) || Op(e, y, m)) || Mp(e, m) ? h = !0 : (a && $p(e, m) || Ep(e, m) || Fp(e, m) ? h = !0 : Rp(e) ? (h = !0, (e.tag !== null || e.anchor !== null) && tt(e, "alias node should not have any properties")) : Ap(e, m, Wo === r) && (h = !0, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : l === 0 && (h = n && Nn(e, y))), e.tag === null)
    e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
  else if (e.tag === "?") {
    for (e.result !== null && e.kind !== "scalar" && tt(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), d = 0, f = e.implicitTypes.length; d < f; d += 1)
      if (p = e.implicitTypes[d], p.resolve(e.result)) {
        e.result = p.construct(e.result), e.tag = p.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
  } else if (e.tag !== "!") {
    if (mr.call(e.typeMap[e.kind || "fallback"], e.tag))
      p = e.typeMap[e.kind || "fallback"][e.tag];
    else
      for (p = null, u = e.typeMap.multi[e.kind || "fallback"], d = 0, f = u.length; d < f; d += 1)
        if (e.tag.slice(0, u[d].tag.length) === u[d].tag) {
          p = u[d];
          break;
        }
    p || tt(e, "unknown tag !<" + e.tag + ">"), e.result !== null && p.kind !== e.kind && tt(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + p.kind + '", not "' + e.kind + '"'), p.resolve(e.result, e.tag) ? (e.result = p.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : tt(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
  }
  return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || h;
}
g(qr, "composeNode");
function Pp(e) {
  var t = e.position, r, i, s, o = !1, a;
  for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (a = e.input.charCodeAt(e.position)) !== 0 && (Mt(e, !0, -1), a = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || a !== 37)); ) {
    for (o = !0, a = e.input.charCodeAt(++e.position), r = e.position; a !== 0 && !ee(a); )
      a = e.input.charCodeAt(++e.position);
    for (i = e.input.slice(r, e.position), s = [], i.length < 1 && tt(e, "directive name must not be less than one character in length"); a !== 0; ) {
      for (; pr(a); )
        a = e.input.charCodeAt(++e.position);
      if (a === 35) {
        do
          a = e.input.charCodeAt(++e.position);
        while (a !== 0 && !Te(a));
        break;
      }
      if (Te(a)) break;
      for (r = e.position; a !== 0 && !ee(a); )
        a = e.input.charCodeAt(++e.position);
      s.push(e.input.slice(r, e.position));
    }
    a !== 0 && fa(e), mr.call(Yc, i) ? Yc[i](e, i, s) : Ts(e, 'unknown document directive "' + i + '"');
  }
  if (Mt(e, !0, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, Mt(e, !0, -1)) : o && tt(e, "directives end mark is expected"), qr(e, e.lineIndent - 1, zo, !1, !0), Mt(e, !0, -1), e.checkLineBreaks && KS.test(e.input.slice(t, e.position)) && Ts(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Rs(e)) {
    e.input.charCodeAt(e.position) === 46 && (e.position += 3, Mt(e, !0, -1));
    return;
  }
  if (e.position < e.length - 1)
    tt(e, "end of the stream or a document separator is expected");
  else
    return;
}
g(Pp, "readDocument");
function Gl(e, t) {
  e = String(e), t = t || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
  var r = new Lp(e, t), i = e.indexOf("\0");
  for (i !== -1 && (r.position = i, tt(r, "null byte is not allowed in input")), r.input += "\0"; r.input.charCodeAt(r.position) === 32; )
    r.lineIndent += 1, r.position += 1;
  for (; r.position < r.length - 1; )
    Pp(r);
  return r.documents;
}
g(Gl, "loadDocuments");
function JS(e, t, r) {
  t !== null && typeof t == "object" && typeof r > "u" && (r = t, t = null);
  var i = Gl(e, r);
  if (typeof t != "function")
    return i;
  for (var s = 0, o = i.length; s < o; s += 1)
    t(i[s]);
}
g(JS, "loadAll$1");
function Np(e, t) {
  var r = Gl(e, t);
  if (r.length !== 0) {
    if (r.length === 1)
      return r[0];
    throw new ae("expected a single document in the stream, but found more");
  }
}
g(Np, "load$1");
var tw = Np, ew = {
  load: tw
}, qp = Object.prototype.toString, Wp = Object.prototype.hasOwnProperty, jl = 65279, rw = 9, _s = 10, iw = 13, sw = 32, ow = 33, aw = 34, qn = 35, nw = 37, lw = 38, hw = 39, cw = 42, zp = 44, dw = 45, Ho = 58, uw = 61, fw = 62, pw = 63, gw = 64, Hp = 91, Yp = 93, mw = 96, Up = 123, yw = 124, Xp = 125, Zt = {};
Zt[0] = "\\0";
Zt[7] = "\\a";
Zt[8] = "\\b";
Zt[9] = "\\t";
Zt[10] = "\\n";
Zt[11] = "\\v";
Zt[12] = "\\f";
Zt[13] = "\\r";
Zt[27] = "\\e";
Zt[34] = '\\"';
Zt[92] = "\\\\";
Zt[133] = "\\N";
Zt[160] = "\\_";
Zt[8232] = "\\L";
Zt[8233] = "\\P";
var xw = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
], Cw = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function Gp(e, t) {
  var r, i, s, o, a, n, l;
  if (t === null) return {};
  for (r = {}, i = Object.keys(t), s = 0, o = i.length; s < o; s += 1)
    a = i[s], n = String(t[a]), a.slice(0, 2) === "!!" && (a = "tag:yaml.org,2002:" + a.slice(2)), l = e.compiledTypeMap.fallback[a], l && Wp.call(l.styleAliases, n) && (n = l.styleAliases[n]), r[a] = n;
  return r;
}
g(Gp, "compileStyleMap");
function jp(e) {
  var t, r, i;
  if (t = e.toString(16).toUpperCase(), e <= 255)
    r = "x", i = 2;
  else if (e <= 65535)
    r = "u", i = 4;
  else if (e <= 4294967295)
    r = "U", i = 8;
  else
    throw new ae("code point within a string may not be greater than 0xFFFFFFFF");
  return "\\" + r + Pt.repeat("0", i - t.length) + t;
}
g(jp, "encodeHex");
var bw = 1, vs = 2;
function Vp(e) {
  this.schema = e.schema || yp, this.indent = Math.max(1, e.indent || 2), this.noArrayIndent = e.noArrayIndent || !1, this.skipInvalid = e.skipInvalid || !1, this.flowLevel = Pt.isNothing(e.flowLevel) ? -1 : e.flowLevel, this.styleMap = Gp(this.schema, e.styles || null), this.sortKeys = e.sortKeys || !1, this.lineWidth = e.lineWidth || 80, this.noRefs = e.noRefs || !1, this.noCompatMode = e.noCompatMode || !1, this.condenseFlow = e.condenseFlow || !1, this.quotingType = e.quotingType === '"' ? vs : bw, this.forceQuotes = e.forceQuotes || !1, this.replacer = typeof e.replacer == "function" ? e.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
g(Vp, "State");
function Wn(e, t) {
  for (var r = Pt.repeat(" ", t), i = 0, s = -1, o = "", a, n = e.length; i < n; )
    s = e.indexOf(`
`, i), s === -1 ? (a = e.slice(i), i = n) : (a = e.slice(i, s + 1), i = s + 1), a.length && a !== `
` && (o += r), o += a;
  return o;
}
g(Wn, "indentString");
function Yo(e, t) {
  return `
` + Pt.repeat(" ", e.indent * t);
}
g(Yo, "generateNextLine");
function Zp(e, t) {
  var r, i, s;
  for (r = 0, i = e.implicitTypes.length; r < i; r += 1)
    if (s = e.implicitTypes[r], s.resolve(t))
      return !0;
  return !1;
}
g(Zp, "testImplicitResolving");
function Bs(e) {
  return e === sw || e === rw;
}
g(Bs, "isWhitespace");
function Mi(e) {
  return 32 <= e && e <= 126 || 161 <= e && e <= 55295 && e !== 8232 && e !== 8233 || 57344 <= e && e <= 65533 && e !== jl || 65536 <= e && e <= 1114111;
}
g(Mi, "isPrintable");
function zn(e) {
  return Mi(e) && e !== jl && e !== iw && e !== _s;
}
g(zn, "isNsCharOrWhitespace");
function Hn(e, t, r) {
  var i = zn(e), s = i && !Bs(e);
  return (
    // ns-plain-safe
    (r ? (
      // c = flow-in
      i
    ) : i && e !== zp && e !== Hp && e !== Yp && e !== Up && e !== Xp) && e !== qn && !(t === Ho && !s) || zn(t) && !Bs(t) && e === qn || t === Ho && s
  );
}
g(Hn, "isPlainSafe");
function Kp(e) {
  return Mi(e) && e !== jl && !Bs(e) && e !== dw && e !== pw && e !== Ho && e !== zp && e !== Hp && e !== Yp && e !== Up && e !== Xp && e !== qn && e !== lw && e !== cw && e !== ow && e !== yw && e !== uw && e !== fw && e !== hw && e !== aw && e !== nw && e !== gw && e !== mw;
}
g(Kp, "isPlainSafeFirst");
function Qp(e) {
  return !Bs(e) && e !== Ho;
}
g(Qp, "isPlainSafeLast");
function ni(e, t) {
  var r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && t + 1 < e.length && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
g(ni, "codePointAt");
function Vl(e) {
  var t = /^\n* /;
  return t.test(e);
}
g(Vl, "needIndentIndicator");
var Jp = 1, Yn = 2, tg = 3, eg = 4, ii = 5;
function rg(e, t, r, i, s, o, a, n) {
  var l, c = 0, h = null, d = !1, f = !1, u = i !== -1, p = -1, m = Kp(ni(e, 0)) && Qp(ni(e, e.length - 1));
  if (t || a)
    for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
      if (c = ni(e, l), !Mi(c))
        return ii;
      m = m && Hn(c, h, n), h = c;
    }
  else {
    for (l = 0; l < e.length; c >= 65536 ? l += 2 : l++) {
      if (c = ni(e, l), c === _s)
        d = !0, u && (f = f || // Foldable line = too long, and not more-indented.
        l - p - 1 > i && e[p + 1] !== " ", p = l);
      else if (!Mi(c))
        return ii;
      m = m && Hn(c, h, n), h = c;
    }
    f = f || u && l - p - 1 > i && e[p + 1] !== " ";
  }
  return !d && !f ? m && !a && !s(e) ? Jp : o === vs ? ii : Yn : r > 9 && Vl(e) ? ii : a ? o === vs ? ii : Yn : f ? eg : tg;
}
g(rg, "chooseScalarStyle");
function ig(e, t, r, i, s) {
  e.dump = (function() {
    if (t.length === 0)
      return e.quotingType === vs ? '""' : "''";
    if (!e.noCompatMode && (xw.indexOf(t) !== -1 || Cw.test(t)))
      return e.quotingType === vs ? '"' + t + '"' : "'" + t + "'";
    var o = e.indent * Math.max(1, r), a = e.lineWidth === -1 ? -1 : Math.max(Math.min(e.lineWidth, 40), e.lineWidth - o), n = i || e.flowLevel > -1 && r >= e.flowLevel;
    function l(c) {
      return Zp(e, c);
    }
    switch (g(l, "testAmbiguity"), rg(
      t,
      n,
      e.indent,
      a,
      l,
      e.quotingType,
      e.forceQuotes && !i,
      s
    )) {
      case Jp:
        return t;
      case Yn:
        return "'" + t.replace(/'/g, "''") + "'";
      case tg:
        return "|" + Un(t, e.indent) + Xn(Wn(t, o));
      case eg:
        return ">" + Un(t, e.indent) + Xn(Wn(sg(t, a), o));
      case ii:
        return '"' + og(t) + '"';
      default:
        throw new ae("impossible error: invalid scalar style");
    }
  })();
}
g(ig, "writeScalar");
function Un(e, t) {
  var r = Vl(e) ? String(t) : "", i = e[e.length - 1] === `
`, s = i && (e[e.length - 2] === `
` || e === `
`), o = s ? "+" : i ? "" : "-";
  return r + o + `
`;
}
g(Un, "blockHeader");
function Xn(e) {
  return e[e.length - 1] === `
` ? e.slice(0, -1) : e;
}
g(Xn, "dropEndingNewline");
function sg(e, t) {
  for (var r = /(\n+)([^\n]*)/g, i = (function() {
    var c = e.indexOf(`
`);
    return c = c !== -1 ? c : e.length, r.lastIndex = c, Gn(e.slice(0, c), t);
  })(), s = e[0] === `
` || e[0] === " ", o, a; a = r.exec(e); ) {
    var n = a[1], l = a[2];
    o = l[0] === " ", i += n + (!s && !o && l !== "" ? `
` : "") + Gn(l, t), s = o;
  }
  return i;
}
g(sg, "foldString");
function Gn(e, t) {
  if (e === "" || e[0] === " ") return e;
  for (var r = / [^ ]/g, i, s = 0, o, a = 0, n = 0, l = ""; i = r.exec(e); )
    n = i.index, n - s > t && (o = a > s ? a : n, l += `
` + e.slice(s, o), s = o + 1), a = n;
  return l += `
`, e.length - s > t && a > s ? l += e.slice(s, a) + `
` + e.slice(a + 1) : l += e.slice(s), l.slice(1);
}
g(Gn, "foldLine");
function og(e) {
  for (var t = "", r = 0, i, s = 0; s < e.length; r >= 65536 ? s += 2 : s++)
    r = ni(e, s), i = Zt[r], !i && Mi(r) ? (t += e[s], r >= 65536 && (t += e[s + 1])) : t += i || jp(r);
  return t;
}
g(og, "escapeString");
function ag(e, t, r) {
  var i = "", s = e.tag, o, a, n;
  for (o = 0, a = r.length; o < a; o += 1)
    n = r[o], e.replacer && (n = e.replacer.call(r, String(o), n)), (Ne(e, t, n, !1, !1) || typeof n > "u" && Ne(e, t, null, !1, !1)) && (i !== "" && (i += "," + (e.condenseFlow ? "" : " ")), i += e.dump);
  e.tag = s, e.dump = "[" + i + "]";
}
g(ag, "writeFlowSequence");
function jn(e, t, r, i) {
  var s = "", o = e.tag, a, n, l;
  for (a = 0, n = r.length; a < n; a += 1)
    l = r[a], e.replacer && (l = e.replacer.call(r, String(a), l)), (Ne(e, t + 1, l, !0, !0, !1, !0) || typeof l > "u" && Ne(e, t + 1, null, !0, !0, !1, !0)) && ((!i || s !== "") && (s += Yo(e, t)), e.dump && _s === e.dump.charCodeAt(0) ? s += "-" : s += "- ", s += e.dump);
  e.tag = o, e.dump = s || "[]";
}
g(jn, "writeBlockSequence");
function ng(e, t, r) {
  var i = "", s = e.tag, o = Object.keys(r), a, n, l, c, h;
  for (a = 0, n = o.length; a < n; a += 1)
    h = "", i !== "" && (h += ", "), e.condenseFlow && (h += '"'), l = o[a], c = r[l], e.replacer && (c = e.replacer.call(r, l, c)), Ne(e, t, l, !1, !1) && (e.dump.length > 1024 && (h += "? "), h += e.dump + (e.condenseFlow ? '"' : "") + ":" + (e.condenseFlow ? "" : " "), Ne(e, t, c, !1, !1) && (h += e.dump, i += h));
  e.tag = s, e.dump = "{" + i + "}";
}
g(ng, "writeFlowMapping");
function lg(e, t, r, i) {
  var s = "", o = e.tag, a = Object.keys(r), n, l, c, h, d, f;
  if (e.sortKeys === !0)
    a.sort();
  else if (typeof e.sortKeys == "function")
    a.sort(e.sortKeys);
  else if (e.sortKeys)
    throw new ae("sortKeys must be a boolean or a function");
  for (n = 0, l = a.length; n < l; n += 1)
    f = "", (!i || s !== "") && (f += Yo(e, t)), c = a[n], h = r[c], e.replacer && (h = e.replacer.call(r, c, h)), Ne(e, t + 1, c, !0, !0, !0) && (d = e.tag !== null && e.tag !== "?" || e.dump && e.dump.length > 1024, d && (e.dump && _s === e.dump.charCodeAt(0) ? f += "?" : f += "? "), f += e.dump, d && (f += Yo(e, t)), Ne(e, t + 1, h, !0, d) && (e.dump && _s === e.dump.charCodeAt(0) ? f += ":" : f += ": ", f += e.dump, s += f));
  e.tag = o, e.dump = s || "{}";
}
g(lg, "writeBlockMapping");
function Vn(e, t, r) {
  var i, s, o, a, n, l;
  for (s = r ? e.explicitTypes : e.implicitTypes, o = 0, a = s.length; o < a; o += 1)
    if (n = s[o], (n.instanceOf || n.predicate) && (!n.instanceOf || typeof t == "object" && t instanceof n.instanceOf) && (!n.predicate || n.predicate(t))) {
      if (r ? n.multi && n.representName ? e.tag = n.representName(t) : e.tag = n.tag : e.tag = "?", n.represent) {
        if (l = e.styleMap[n.tag] || n.defaultStyle, qp.call(n.represent) === "[object Function]")
          i = n.represent(t, l);
        else if (Wp.call(n.represent, l))
          i = n.represent[l](t, l);
        else
          throw new ae("!<" + n.tag + '> tag resolver accepts not "' + l + '" style');
        e.dump = i;
      }
      return !0;
    }
  return !1;
}
g(Vn, "detectType");
function Ne(e, t, r, i, s, o, a) {
  e.tag = null, e.dump = r, Vn(e, r, !1) || Vn(e, r, !0);
  var n = qp.call(e.dump), l = i, c;
  i && (i = e.flowLevel < 0 || e.flowLevel > t);
  var h = n === "[object Object]" || n === "[object Array]", d, f;
  if (h && (d = e.duplicates.indexOf(r), f = d !== -1), (e.tag !== null && e.tag !== "?" || f || e.indent !== 2 && t > 0) && (s = !1), f && e.usedDuplicates[d])
    e.dump = "*ref_" + d;
  else {
    if (h && f && !e.usedDuplicates[d] && (e.usedDuplicates[d] = !0), n === "[object Object]")
      i && Object.keys(e.dump).length !== 0 ? (lg(e, t, e.dump, s), f && (e.dump = "&ref_" + d + e.dump)) : (ng(e, t, e.dump), f && (e.dump = "&ref_" + d + " " + e.dump));
    else if (n === "[object Array]")
      i && e.dump.length !== 0 ? (e.noArrayIndent && !a && t > 0 ? jn(e, t - 1, e.dump, s) : jn(e, t, e.dump, s), f && (e.dump = "&ref_" + d + e.dump)) : (ag(e, t, e.dump), f && (e.dump = "&ref_" + d + " " + e.dump));
    else if (n === "[object String]")
      e.tag !== "?" && ig(e, e.dump, t, o, l);
    else {
      if (n === "[object Undefined]")
        return !1;
      if (e.skipInvalid) return !1;
      throw new ae("unacceptable kind of an object to dump " + n);
    }
    e.tag !== null && e.tag !== "?" && (c = encodeURI(
      e.tag[0] === "!" ? e.tag.slice(1) : e.tag
    ).replace(/!/g, "%21"), e.tag[0] === "!" ? c = "!" + c : c.slice(0, 18) === "tag:yaml.org,2002:" ? c = "!!" + c.slice(18) : c = "!<" + c + ">", e.dump = c + " " + e.dump);
  }
  return !0;
}
g(Ne, "writeNode");
function hg(e, t) {
  var r = [], i = [], s, o;
  for (Uo(e, r, i), s = 0, o = i.length; s < o; s += 1)
    t.duplicates.push(r[i[s]]);
  t.usedDuplicates = new Array(o);
}
g(hg, "getDuplicateReferences");
function Uo(e, t, r) {
  var i, s, o;
  if (e !== null && typeof e == "object")
    if (s = t.indexOf(e), s !== -1)
      r.indexOf(s) === -1 && r.push(s);
    else if (t.push(e), Array.isArray(e))
      for (s = 0, o = e.length; s < o; s += 1)
        Uo(e[s], t, r);
    else
      for (i = Object.keys(e), s = 0, o = i.length; s < o; s += 1)
        Uo(e[i[s]], t, r);
}
g(Uo, "inspectNode");
function kw(e, t) {
  t = t || {};
  var r = new Vp(t);
  r.noRefs || hg(e, r);
  var i = e;
  return r.replacer && (i = r.replacer.call({ "": i }, "", i)), Ne(r, 0, i, !0, !0) ? r.dump + `
` : "";
}
g(kw, "dump$1");
function Sw(e, t) {
  return function() {
    throw new Error("Function yaml." + e + " is removed in js-yaml 4. Use yaml." + t + " instead, which is now safe by default.");
  };
}
g(Sw, "renamed");
var ww = tp, Tw = ew.load;
var Vi = /* @__PURE__ */ g((e, t) => {
  if (t)
    return "translate(" + -e.width / 2 + ", " + -e.height / 2 + ")";
  const r = e.x ?? 0, i = e.y ?? 0;
  return "translate(" + -(r + e.width / 2) + ", " + -(i + e.height / 2) + ")";
}, "computeLabelTransform"), jt = {
  aggregation: 17.25,
  extension: 17.25,
  composition: 17.25,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4,
  arrow_barb: 0,
  arrow_barb_neo: 5.5
  //arrow_cross: 24,
}, Uc = {
  arrow_point: 4,
  arrow_cross: 12.5,
  arrow_circle: 12.5
};
function ns(e, t) {
  if (e === void 0 || t === void 0)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  e = vt(e), t = vt(t);
  const [r, i] = [e.x, e.y], [s, o] = [t.x, t.y], a = s - r, n = o - i;
  return { angle: Math.atan(n / a), deltaX: a, deltaY: n };
}
g(ns, "calculateDeltaAndAngle");
var vt = /* @__PURE__ */ g((e) => Array.isArray(e) ? { x: e[0], y: e[1] } : e, "pointTransformer"), _w = /* @__PURE__ */ g((e) => ({
  x: /* @__PURE__ */ g(function(t, r, i) {
    let s = 0;
    const o = vt(i[0]).x < vt(i[i.length - 1]).x ? "left" : "right";
    if (r === 0 && Object.hasOwn(jt, e.arrowTypeStart)) {
      const { angle: u, deltaX: p } = ns(i[0], i[1]);
      s = jt[e.arrowTypeStart] * Math.cos(u) * (p >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(jt, e.arrowTypeEnd)) {
      const { angle: u, deltaX: p } = ns(
        i[i.length - 1],
        i[i.length - 2]
      );
      s = jt[e.arrowTypeEnd] * Math.cos(u) * (p >= 0 ? 1 : -1);
    }
    const a = Math.abs(
      vt(t).x - vt(i[i.length - 1]).x
    ), n = Math.abs(
      vt(t).y - vt(i[i.length - 1]).y
    ), l = Math.abs(vt(t).x - vt(i[0]).x), c = Math.abs(vt(t).y - vt(i[0]).y), h = jt[e.arrowTypeStart], d = jt[e.arrowTypeEnd], f = 1;
    if (a < d && a > 0 && n < d) {
      let u = d + f - a;
      u *= o === "right" ? -1 : 1, s -= u;
    }
    if (l < h && l > 0 && c < h) {
      let u = h + f - l;
      u *= o === "right" ? -1 : 1, s += u;
    }
    return vt(t).x + s;
  }, "x"),
  y: /* @__PURE__ */ g(function(t, r, i) {
    let s = 0;
    const o = vt(i[0]).y < vt(i[i.length - 1]).y ? "down" : "up";
    if (r === 0 && Object.hasOwn(jt, e.arrowTypeStart)) {
      const { angle: u, deltaY: p } = ns(i[0], i[1]);
      s = jt[e.arrowTypeStart] * Math.abs(Math.sin(u)) * (p >= 0 ? 1 : -1);
    } else if (r === i.length - 1 && Object.hasOwn(jt, e.arrowTypeEnd)) {
      const { angle: u, deltaY: p } = ns(
        i[i.length - 1],
        i[i.length - 2]
      );
      s = jt[e.arrowTypeEnd] * Math.abs(Math.sin(u)) * (p >= 0 ? 1 : -1);
    }
    const a = Math.abs(
      vt(t).y - vt(i[i.length - 1]).y
    ), n = Math.abs(
      vt(t).x - vt(i[i.length - 1]).x
    ), l = Math.abs(vt(t).y - vt(i[0]).y), c = Math.abs(vt(t).x - vt(i[0]).x), h = jt[e.arrowTypeStart], d = jt[e.arrowTypeEnd], f = 1;
    if (a < d && a > 0 && n < d) {
      let u = d + f - a;
      u *= o === "up" ? -1 : 1, s -= u;
    }
    if (l < h && l > 0 && c < h) {
      let u = h + f - l;
      u *= o === "up" ? -1 : 1, s += u;
    }
    return vt(t).y + s;
  }, "y")
}), "getLineFunctionsWithOffset"), eo = {}, Dt = {}, Xc;
function vw() {
  return Xc || (Xc = 1, Object.defineProperty(Dt, "__esModule", { value: !0 }), Dt.BLANK_URL = Dt.relativeFirstCharacters = Dt.whitespaceEscapeCharsRegex = Dt.urlSchemeRegex = Dt.ctrlCharactersRegex = Dt.htmlCtrlEntityRegex = Dt.htmlEntitiesRegex = Dt.invalidProtocolRegex = void 0, Dt.invalidProtocolRegex = /^([^\w]*)(javascript|data|vbscript)/im, Dt.htmlEntitiesRegex = /&#(\w+)(^\w|;)?/g, Dt.htmlCtrlEntityRegex = /&(newline|tab);/gi, Dt.ctrlCharactersRegex = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim, Dt.urlSchemeRegex = /^.+(:|&colon;)/gim, Dt.whitespaceEscapeCharsRegex = /(\\|%5[cC])((%(6[eE]|72|74))|[nrt])/g, Dt.relativeFirstCharacters = [".", "/"], Dt.BLANK_URL = "about:blank"), Dt;
}
var Gc;
function Bw() {
  if (Gc) return eo;
  Gc = 1, Object.defineProperty(eo, "__esModule", { value: !0 }), eo.sanitizeUrl = o;
  var e = vw();
  function t(a) {
    return e.relativeFirstCharacters.indexOf(a[0]) > -1;
  }
  function r(a) {
    var n = a.replace(e.ctrlCharactersRegex, "");
    return n.replace(e.htmlEntitiesRegex, function(l, c) {
      return String.fromCharCode(c);
    });
  }
  function i(a) {
    return URL.canParse(a);
  }
  function s(a) {
    try {
      return decodeURIComponent(a);
    } catch {
      return a;
    }
  }
  function o(a) {
    if (!a)
      return e.BLANK_URL;
    var n, l = s(a.trim());
    do
      l = r(l).replace(e.htmlCtrlEntityRegex, "").replace(e.ctrlCharactersRegex, "").replace(e.whitespaceEscapeCharsRegex, "").trim(), l = s(l), n = l.match(e.ctrlCharactersRegex) || l.match(e.htmlEntitiesRegex) || l.match(e.htmlCtrlEntityRegex) || l.match(e.whitespaceEscapeCharsRegex);
    while (n && n.length > 0);
    var c = l;
    if (!c)
      return e.BLANK_URL;
    if (t(c))
      return c;
    var h = c.trimStart(), d = h.match(e.urlSchemeRegex);
    if (!d)
      return c;
    var f = d[0].toLowerCase().trim();
    if (e.invalidProtocolRegex.test(f))
      return e.BLANK_URL;
    var u = h.replace(/\\/g, "/");
    if (f === "mailto:" || f.includes("://"))
      return u;
    if (f === "http:" || f === "https:") {
      if (!i(u))
        return e.BLANK_URL;
      var p = new URL(u);
      return p.protocol = p.protocol.toLowerCase(), p.hostname = p.hostname.toLowerCase(), p.toString();
    }
    return u;
  }
  return eo;
}
var Lw = Bw();
function Ja(e) {
  if (typeof e != "object" || e == null) return !1;
  if (Object.getPrototypeOf(e) === null) return !0;
  if (Object.prototype.toString.call(e) !== "[object Object]") {
    const r = e[Symbol.toStringTag];
    return r == null || !Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)?.writable ? !1 : e.toString() === `[object ${r}]`;
  }
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function Aw() {
}
function cg(e) {
  return Object.getOwnPropertySymbols(e).filter((t) => Object.prototype.propertyIsEnumerable.call(e, t));
}
function Zl(e) {
  return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
const Ew = "[object RegExp]", dg = "[object String]", ug = "[object Number]", fg = "[object Boolean]", pg = "[object Arguments]", Fw = "[object Symbol]", Mw = "[object Date]", $w = "[object Map]", Ow = "[object Set]", Iw = "[object Array]", Dw = "[object ArrayBuffer]", Rw = "[object Object]", Pw = "[object DataView]", Nw = "[object Uint8Array]", qw = "[object Uint8ClampedArray]", Ww = "[object Uint16Array]", zw = "[object Uint32Array]", Hw = "[object Int8Array]", Yw = "[object Int16Array]", Uw = "[object Int32Array]", Xw = "[object Float32Array]", Gw = "[object Float64Array]", jc = typeof globalThis == "object" && globalThis || typeof window == "object" && window || typeof self == "object" && self || typeof global == "object" && global || /* @__PURE__ */ (function() {
  return this;
})();
function Kl(e) {
  return typeof jc.Buffer < "u" && jc.Buffer.isBuffer(e);
}
function jw(e) {
  return Number.isSafeInteger(e) && e >= 0;
}
function gg(e) {
  return e != null && typeof e != "function" && jw(e.length);
}
function Vw(e) {
  return e === "__proto__";
}
function Ql(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function Jl(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Zw(e, t) {
  return li(e, void 0, e, /* @__PURE__ */ new Map(), t);
}
function li(e, t, r, i = /* @__PURE__ */ new Map(), s = void 0) {
  const o = s?.(e, t, r, i);
  if (o !== void 0) return o;
  if (Ql(e)) return e;
  if (i.has(e)) return i.get(e);
  if (Array.isArray(e)) {
    const a = new Array(e.length);
    i.set(e, a);
    for (let n = 0; n < e.length; n++) a[n] = li(e[n], n, r, i, s);
    return Object.hasOwn(e, "index") && (a.index = e.index), Object.hasOwn(e, "input") && (a.input = e.input), a;
  }
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof RegExp) {
    const a = new RegExp(e.source, e.flags);
    return a.lastIndex = e.lastIndex, a;
  }
  if (e instanceof Map) {
    const a = /* @__PURE__ */ new Map();
    i.set(e, a);
    for (const [n, l] of e) a.set(n, li(l, n, r, i, s));
    return a;
  }
  if (e instanceof Set) {
    const a = /* @__PURE__ */ new Set();
    i.set(e, a);
    for (const n of e) a.add(li(n, void 0, r, i, s));
    return a;
  }
  if (Kl(e)) return e.subarray();
  if (Jl(e)) {
    const a = new (Object.getPrototypeOf(e)).constructor(e.length);
    i.set(e, a);
    for (let n = 0; n < e.length; n++) a[n] = li(e[n], n, r, i, s);
    return a;
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
  if (e instanceof DataView) {
    const a = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return i.set(e, a), Ce(a, e, r, i, s), a;
  }
  if (typeof File < "u" && e instanceof File) {
    const a = new File([e], e.name, { type: e.type });
    return i.set(e, a), Ce(a, e, r, i, s), a;
  }
  if (typeof Blob < "u" && e instanceof Blob) {
    const a = new Blob([e], { type: e.type });
    return i.set(e, a), Ce(a, e, r, i, s), a;
  }
  if (e instanceof Error) {
    const a = structuredClone(e);
    return i.set(e, a), a.message = e.message, a.name = e.name, a.stack = e.stack, a.cause = e.cause, a.constructor = e.constructor, Ce(a, e, r, i, s), a;
  }
  if (e instanceof Boolean) {
    const a = new Boolean(e.valueOf());
    return i.set(e, a), Ce(a, e, r, i, s), a;
  }
  if (e instanceof Number) {
    const a = new Number(e.valueOf());
    return i.set(e, a), Ce(a, e, r, i, s), a;
  }
  if (e instanceof String) {
    const a = new String(e.valueOf());
    return i.set(e, a), Ce(a, e, r, i, s), a;
  }
  if (typeof e == "object" && Kw(e)) {
    const a = Object.create(Object.getPrototypeOf(e));
    return i.set(e, a), Ce(a, e, r, i, s), a;
  }
  return e;
}
function Ce(e, t, r = e, i, s) {
  const o = [...Object.keys(t), ...cg(t)];
  for (let a = 0; a < o.length; a++) {
    const n = o[a], l = Object.getOwnPropertyDescriptor(e, n);
    (l == null || l.writable) && (e[n] = li(t[n], n, r, i, s));
  }
}
function Kw(e) {
  switch (Zl(e)) {
    case pg:
    case Iw:
    case Dw:
    case Pw:
    case fg:
    case Mw:
    case Xw:
    case Gw:
    case Hw:
    case Yw:
    case Uw:
    case $w:
    case ug:
    case Rw:
    case Ew:
    case Ow:
    case dg:
    case Fw:
    case Nw:
    case qw:
    case Ww:
    case zw:
      return !0;
    default:
      return !1;
  }
}
function Qw(e, t) {
  return Zw(e, (r, i, s, o) => {
    if (typeof e == "object") {
      if (Zl(e) === "[object Object]" && typeof e.constructor != "function") {
        const a = {};
        return o.set(e, a), Ce(a, e, s, o), a;
      }
      switch (Object.prototype.toString.call(e)) {
        case ug:
        case dg:
        case fg: {
          const a = new e.constructor(e?.valueOf());
          return Ce(a, e), a;
        }
        case pg: {
          const a = {};
          return Ce(a, e), a.length = e.length, a[Symbol.iterator] = e[Symbol.iterator], a;
        }
        default:
          return;
      }
    }
  });
}
function Vc(e) {
  return Qw(e);
}
function Zn(e) {
  return e !== null && typeof e == "object" && Zl(e) === "[object Arguments]";
}
function Kn(e) {
  return typeof e == "object" && e !== null;
}
function Jw(e) {
  return Kn(e) && gg(e);
}
function Ps(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError("Expected a function");
  const r = function(...i) {
    const s = t ? t.apply(this, i) : i[0], o = r.cache;
    if (o.has(s)) return o.get(s);
    const a = e.apply(this, i);
    return r.cache = o.set(s, a) || o, a;
  };
  return r.cache = new (Ps.Cache || Map)(), r;
}
Ps.Cache = Map;
function Co(e) {
  return Jl(e);
}
function tT(e) {
  const t = e?.constructor;
  return e === (typeof t == "function" ? t.prototype : Object.prototype);
}
function eT(e) {
  if (Ql(e)) return e;
  if (Array.isArray(e) || Jl(e) || e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
  const t = Object.getPrototypeOf(e);
  if (t == null) return Object.assign(Object.create(t), e);
  const r = t.constructor;
  if (e instanceof Date || e instanceof Map || e instanceof Set) return new r(e);
  if (e instanceof RegExp) {
    const i = new r(e);
    return i.lastIndex = e.lastIndex, i;
  }
  if (e instanceof DataView) return new r(e.buffer.slice(0));
  if (e instanceof Error) {
    let i;
    return e instanceof AggregateError ? i = new r(e.errors, e.message, { cause: e.cause }) : i = new r(e.message, { cause: e.cause }), i.stack = e.stack, Object.assign(i, e), i;
  }
  return typeof File < "u" && e instanceof File ? new r([e], e.name, {
    type: e.type,
    lastModified: e.lastModified
  }) : typeof e == "object" ? Object.assign(Object.create(t), e) : e;
}
function rT(e, ...t) {
  const r = t.slice(0, -1), i = t[t.length - 1];
  let s = e;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    s = bo(s, a, i, /* @__PURE__ */ new Map());
  }
  return s;
}
function bo(e, t, r, i) {
  if (Ql(e) && (e = Object(e)), t == null || typeof t != "object") return e;
  if (i.has(t)) return eT(i.get(t));
  if (i.set(t, e), Array.isArray(t)) {
    t = t.slice();
    for (let o = 0; o < t.length; o++) t[o] = t[o] ?? void 0;
  }
  const s = [...Object.keys(t), ...cg(t)];
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    if (Vw(a)) continue;
    let n = t[a], l = e[a];
    if (Zn(n) && (n = { ...n }), Zn(l) && (l = { ...l }), Kl(n) && (n = Vc(n)), Array.isArray(n)) if (Array.isArray(l)) {
      const h = [], d = Reflect.ownKeys(l);
      for (let f = 0; f < d.length; f++) {
        const u = d[f];
        h[u] = l[u];
      }
      l = h;
    } else if (Jw(l)) {
      const h = [];
      for (let d = 0; d < l.length; d++) h[d] = l[d];
      l = h;
    } else l = [];
    const c = r(l, n, a, e, t, i);
    c !== void 0 ? e[a] = c : Array.isArray(n) || Kn(l) && Kn(n) && (Ja(l) || Ja(n) || Co(l) || Co(n)) ? e[a] = bo(l, n, r, i) : l == null && Ja(n) ? e[a] = bo({}, n, r, i) : l == null && Co(n) ? e[a] = Vc(n) : (l === void 0 || n !== void 0) && (e[a] = n);
  }
  return e;
}
function iT(e, ...t) {
  return rT(e, ...t, Aw);
}
function Zc(e) {
  if (e == null) return !0;
  if (gg(e))
    return typeof e.splice != "function" && typeof e != "string" && !Kl(e) && !Co(e) && !Zn(e) ? !1 : e.length === 0;
  if (typeof e == "object" || typeof e == "function") {
    if (e instanceof Map || e instanceof Set) return e.size === 0;
    const t = Object.keys(e);
    return tT(e) ? t.filter((r) => r !== "constructor").length === 0 : t.length === 0;
  }
  return !0;
}
var sT = "​", oT = {
  curveBasis: On,
  curveBasisClosed: hS,
  curveBasisOpen: cS,
  curveBumpX: hf,
  curveBumpY: cf,
  curveBundle: dS,
  curveCardinalClosed: uS,
  curveCardinalOpen: fS,
  curveCardinal: pf,
  curveCatmullRomClosed: pS,
  curveCatmullRomOpen: gS,
  curveCatmullRom: mf,
  curveLinear: gs,
  curveLinearClosed: mS,
  curveMonotoneX: Sf,
  curveMonotoneY: wf,
  curveNatural: _f,
  curveStep: vf,
  curveStepAfter: Lf,
  curveStepBefore: Bf
}, aT = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi, nT = /* @__PURE__ */ g(function(e, t) {
  const r = mg(e, /(?:init\b)|(?:initialize\b)/);
  let i = {};
  if (Array.isArray(r)) {
    const a = r.map((n) => n.args);
    vo(a), i = Rt(i, [...a]);
  } else
    i = r.args;
  if (!i)
    return;
  let s = Tl(e, t);
  const o = "config";
  return i[o] !== void 0 && (s === "flowchart-v2" && (s = "flowchart"), i[s] = i[o], delete i[o]), i;
}, "detectInit"), mg = /* @__PURE__ */ g(function(e, t = null) {
  try {
    const r = new RegExp(
      `[%]{2}(?![{]${aT.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    e = e.trim().replace(r, "").replace(/'/gm, '"'), q.debug(
      `Detecting diagram directive${t !== null ? " type:" + t : ""} based on the text:${e}`
    );
    let i;
    const s = [];
    for (; (i = fs.exec(e)) !== null; )
      if (i.index === fs.lastIndex && fs.lastIndex++, i && !t || t && i[1]?.match(t) || t && i[2]?.match(t)) {
        const o = i[1] ? i[1] : i[2], a = i[3] ? i[3].trim() : i[4] ? JSON.parse(i[4].trim()) : null;
        s.push({ type: o, args: a });
      }
    return s.length === 0 ? { type: e, args: null } : s.length === 1 ? s[0] : s;
  } catch (r) {
    return q.error(
      `ERROR: ${r.message} - Unable to parse directive type: '${t}' based on the text: '${e}'`
    ), { type: void 0, args: null };
  }
}, "detectDirective"), lT = /* @__PURE__ */ g(function(e) {
  return e.replace(fs, "");
}, "removeDirectives"), hT = /* @__PURE__ */ g(function(e, t) {
  for (const [r, i] of t.entries())
    if (i.match(e))
      return r;
  return -1;
}, "isSubstringInArray");
function th(e, t) {
  if (!e)
    return t;
  const r = `curve${e.charAt(0).toUpperCase() + e.slice(1)}`;
  return oT[r] ?? t;
}
g(th, "interpolateToCurve");
function yg(e, t) {
  const r = e.trim();
  if (r)
    return t.securityLevel !== "loose" ? Lw.sanitizeUrl(r) : r;
}
g(yg, "formatUrl");
var cT = /* @__PURE__ */ g((e, ...t) => {
  const r = e.split("."), i = r.length - 1, s = r[i];
  let o = window;
  for (let a = 0; a < i; a++)
    if (o = o[r[a]], !o) {
      q.error(`Function name: ${e} not found in window`);
      return;
    }
  o[s](...t);
}, "runFunc");
function eh(e, t) {
  return !e || !t ? 0 : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
g(eh, "distance");
function xg(e) {
  let t, r = 0;
  e.forEach((s) => {
    r += eh(s, t), t = s;
  });
  const i = r / 2;
  return rh(e, i);
}
g(xg, "traverseEdge");
function Cg(e) {
  return e.length === 1 ? e[0] : xg(e);
}
g(Cg, "calcLabelPosition");
var Kc = /* @__PURE__ */ g((e, t = 2) => {
  const r = Math.pow(10, t);
  return Math.round(e * r) / r;
}, "roundNumber"), rh = /* @__PURE__ */ g((e, t) => {
  let r, i = t;
  for (const s of e) {
    if (r) {
      const o = eh(s, r);
      if (o === 0)
        return r;
      if (o < i)
        i -= o;
      else {
        const a = i / o;
        if (a <= 0)
          return r;
        if (a >= 1)
          return { x: s.x, y: s.y };
        if (a > 0 && a < 1)
          return {
            x: Kc((1 - a) * r.x + a * s.x, 5),
            y: Kc((1 - a) * r.y + a * s.y, 5)
          };
      }
    }
    r = s;
  }
  throw new Error("Could not find a suitable point for the given distance");
}, "calculatePoint"), dT = /* @__PURE__ */ g((e, t, r) => {
  q.info(`our points ${JSON.stringify(t)}`), t[0] !== r && (t = t.reverse());
  const s = rh(t, 25), o = e ? 10 : 5, a = Math.atan2(t[0].y - s.y, t[0].x - s.x), n = { x: 0, y: 0 };
  return n.x = Math.sin(a) * o + (t[0].x + s.x) / 2, n.y = -Math.cos(a) * o + (t[0].y + s.y) / 2, n;
}, "calcCardinalityPosition");
function bg(e, t, r) {
  const i = structuredClone(r);
  q.info("our points", i), t !== "start_left" && t !== "start_right" && i.reverse();
  const s = 25 + e, o = rh(i, s), a = 10 + e * 0.5, n = Math.atan2(i[0].y - o.y, i[0].x - o.x), l = { x: 0, y: 0 };
  return t === "start_left" ? (l.x = Math.sin(n + Math.PI) * a + (i[0].x + o.x) / 2, l.y = -Math.cos(n + Math.PI) * a + (i[0].y + o.y) / 2) : t === "end_right" ? (l.x = Math.sin(n - Math.PI) * a + (i[0].x + o.x) / 2 - 5, l.y = -Math.cos(n - Math.PI) * a + (i[0].y + o.y) / 2 - 5) : t === "end_left" ? (l.x = Math.sin(n) * a + (i[0].x + o.x) / 2 - 5, l.y = -Math.cos(n) * a + (i[0].y + o.y) / 2 - 5) : (l.x = Math.sin(n) * a + (i[0].x + o.x) / 2, l.y = -Math.cos(n) * a + (i[0].y + o.y) / 2), l;
}
g(bg, "calcTerminalLabelPosition");
function kg(e) {
  let t = "", r = "";
  for (const i of e)
    i !== void 0 && (i.startsWith("color:") || i.startsWith("text-align:") ? r = r + i + ";" : t = t + i + ";");
  return { style: t, labelStyle: r };
}
g(kg, "getStylesFromArray");
var Qc = 0, uT = /* @__PURE__ */ g(() => (Qc++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + Qc), "generateId");
function Sg(e) {
  let t = "";
  const r = "0123456789abcdef", i = r.length;
  for (let s = 0; s < e; s++)
    t += r.charAt(Math.floor(Math.random() * i));
  return t;
}
g(Sg, "makeRandomHex");
var fT = /* @__PURE__ */ g((e) => Sg(e.length), "random"), pT = /* @__PURE__ */ g(function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
}, "getTextObj"), gT = /* @__PURE__ */ g(function(e, t) {
  const r = t.text.replace(Os.lineBreakRegex, " "), [, i] = ga(t.fontSize), s = e.append("text");
  s.attr("x", t.x), s.attr("y", t.y), s.style("text-anchor", t.anchor), s.style("font-family", t.fontFamily), s.style("font-size", i), s.style("font-weight", t.fontWeight), s.attr("fill", t.fill), t.class !== void 0 && s.attr("class", t.class);
  const o = s.append("tspan");
  return o.attr("x", t.x + t.textMargin * 2), o.attr("fill", t.fill), o.text(r), s;
}, "drawSimpleText"), mT = Ps(
  (e, t, r) => {
    if (!e || (r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      r
    ), Os.lineBreakRegex.test(e)))
      return e;
    const i = e.split(" ").filter(Boolean), s = [];
    let o = "";
    return i.forEach((a, n) => {
      const l = Ke(`${a} `, r), c = Ke(o, r);
      if (l > t) {
        const { hyphenatedStrings: f, remainingWord: u } = yT(a, t, "-", r);
        s.push(o, ...f), o = u;
      } else c + l >= t ? (s.push(o), o = a) : o = [o, a].filter(Boolean).join(" ");
      n + 1 === i.length && s.push(o);
    }), s.filter((a) => a !== "").join(r.joinWith);
  },
  (e, t, r) => `${e}${t}${r.fontSize}${r.fontWeight}${r.fontFamily}${r.joinWith}`
), yT = Ps(
  (e, t, r = "-", i) => {
    i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      i
    );
    const s = [...e], o = [];
    let a = "";
    return s.forEach((n, l) => {
      const c = `${a}${n}`;
      if (Ke(c, i) >= t) {
        const d = l + 1, f = s.length === d, u = `${c}${r}`;
        o.push(f ? c : u), a = "";
      } else
        a = c;
    }), { hyphenatedStrings: o, remainingWord: a };
  },
  (e, t, r = "-", i) => `${e}${t}${r}${i.fontSize}${i.fontWeight}${i.fontFamily}`
);
function wg(e, t) {
  return ih(e, t).height;
}
g(wg, "calculateTextHeight");
function Ke(e, t) {
  return ih(e, t).width;
}
g(Ke, "calculateTextWidth");
var ih = Ps(
  (e, t) => {
    const { fontSize: r = 12, fontFamily: i = "Arial", fontWeight: s = 400 } = t;
    if (!e)
      return { width: 0, height: 0 };
    const [, o] = ga(r), a = ["sans-serif", i], n = e.split(Os.lineBreakRegex), l = [], c = ut("body");
    if (!c.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const h = c.append("svg");
    for (const f of a) {
      let u = 0;
      const p = { width: 0, height: 0, lineHeight: 0 };
      for (const m of n) {
        const y = pT();
        y.text = m || sT;
        const x = gT(h, y).style("font-size", o).style("font-weight", s).style("font-family", f), C = (x._groups || x)[0][0].getBBox();
        if (C.width === 0 && C.height === 0)
          throw new Error("svg element not in render tree");
        p.width = Math.round(Math.max(p.width, C.width)), u = Math.round(C.height), p.height += u, p.lineHeight = Math.round(Math.max(p.lineHeight, u));
      }
      l.push(p);
    }
    h.remove();
    const d = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[d];
  },
  (e, t) => `${e}${t.fontSize}${t.fontWeight}${t.fontFamily}`
), _i, xT = (_i = class {
  constructor(t = !1, r) {
    this.count = 0, this.count = r ? r.length : 0, this.next = t ? () => this.count++ : () => Date.now();
  }
}, g(_i, "InitIDGenerator"), _i), ro, CT = /* @__PURE__ */ g(function(e) {
  return ro = ro || document.createElement("div"), e = escape(e).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), ro.innerHTML = e, unescape(ro.textContent);
}, "entityDecode");
function sh(e) {
  return "str" in e;
}
g(sh, "isDetailedError");
var bT = /* @__PURE__ */ g((e, t, r, i) => {
  if (!i)
    return;
  const s = e.node()?.getBBox();
  s && e.append("text").text(i).attr("text-anchor", "middle").attr("x", s.x + s.width / 2).attr("y", -r).attr("class", t);
}, "insertTitle"), ga = /* @__PURE__ */ g((e) => {
  if (typeof e == "number")
    return [e, e + "px"];
  const t = parseInt(e ?? "", 10);
  return Number.isNaN(t) ? [void 0, void 0] : e === String(t) ? [t, e + "px"] : [t, e];
}, "parseFontSize");
function oh(e, t) {
  return iT({}, e, t);
}
g(oh, "cleanAndMerge");
var we = {
  assignWithDepth: Rt,
  wrapLabel: mT,
  calculateTextHeight: wg,
  calculateTextWidth: Ke,
  calculateTextDimensions: ih,
  cleanAndMerge: oh,
  detectInit: nT,
  detectDirective: mg,
  isSubstringInArray: hT,
  interpolateToCurve: th,
  calcLabelPosition: Cg,
  calcCardinalityPosition: dT,
  calcTerminalLabelPosition: bg,
  formatUrl: yg,
  getStylesFromArray: kg,
  generateId: uT,
  random: fT,
  runFunc: cT,
  entityDecode: CT,
  insertTitle: bT,
  isLabelCoordinateInPath: Tg,
  parseFontSize: ga,
  InitIDGenerator: xT
}, kT = /* @__PURE__ */ g(function(e) {
  let t = e;
  return t = t.replace(/style.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/classDef.*:\S*#.*;/g, function(r) {
    return r.substring(0, r.length - 1);
  }), t = t.replace(/#\w+;/g, function(r) {
    const i = r.substring(1, r.length - 1);
    return /^\+?\d+$/.test(i) ? "ﬂ°°" + i + "¶ß" : "ﬂ°" + i + "¶ß";
  }), t;
}, "encodeEntities"), Wr = /* @__PURE__ */ g(function(e) {
  return e.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
}, "decodeEntities"), ZF = /* @__PURE__ */ g((e, t, {
  counter: r = 0,
  prefix: i,
  suffix: s
}, o) => o || `${i ? `${i}_` : ""}${e}_${t}_${r}${s ? `_${s}` : ""}`, "getEdgeId");
function Wt(e) {
  return e ?? null;
}
g(Wt, "handleUndefinedAttr");
function Tg(e, t) {
  const r = Math.round(e.x), i = Math.round(e.y), s = t.replace(
    /(\d+\.\d+)/g,
    (o) => Math.round(parseFloat(o)).toString()
  );
  return s.includes(r.toString()) || s.includes(i.toString());
}
g(Tg, "isLabelCoordinateInPath");
var ah = /* @__PURE__ */ g(({
  flowchart: e
}) => {
  const t = e?.subGraphTitleMargin?.top ?? 0, r = e?.subGraphTitleMargin?.bottom ?? 0, i = t + r;
  return {
    subGraphTitleTopMargin: t,
    subGraphTitleBottomMargin: r,
    subGraphTitleTotalMargin: i
  };
}, "getSubGraphTitleMargins");
async function _g(e, t) {
  const r = e.getElementsByTagName("img");
  if (!r || r.length === 0)
    return;
  const i = t.replace(/<img[^>]*>/g, "").trim() === "";
  await Promise.all(
    [...r].map(
      (s) => new Promise((o) => {
        function a() {
          if (s.style.display = "flex", s.style.flexDirection = "column", i) {
            const n = bt().fontSize ? bt().fontSize : window.getComputedStyle(document.body).fontSize, l = 5, [c = bu.fontSize] = ga(n), h = c * l + "px";
            s.style.minWidth = h, s.style.maxWidth = h;
          } else
            s.style.width = "100%";
          o(s);
        }
        g(a, "setupImage"), setTimeout(() => {
          s.complete && a();
        }), s.addEventListener("error", a), s.addEventListener("load", a);
      })
    )
  );
}
g(_g, "configureLabelImages");
var ST = /* @__PURE__ */ g((e) => {
  const { handDrawnSeed: t } = bt();
  return {
    fill: e,
    hachureAngle: 120,
    // angle of hachure,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: e,
    seed: t
  };
}, "solidStateFill"), Di = /* @__PURE__ */ g((e) => {
  const t = wT([
    ...e.cssCompiledStyles || [],
    ...e.cssStyles || [],
    ...e.labelStyle || []
  ]);
  return { stylesMap: t, stylesArray: [...t] };
}, "compileStyles"), wT = /* @__PURE__ */ g((e) => {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r) => {
    const [i, s] = r.split(":");
    t.set(i.trim(), s?.trim());
  }), t;
}, "styles2Map"), vg = /* @__PURE__ */ g((e) => e === "color" || e === "font-size" || e === "font-family" || e === "font-weight" || e === "font-style" || e === "text-decoration" || e === "text-align" || e === "text-transform" || e === "line-height" || e === "letter-spacing" || e === "word-spacing" || e === "text-shadow" || e === "text-overflow" || e === "white-space" || e === "word-wrap" || e === "word-break" || e === "overflow-wrap" || e === "hyphens", "isLabelStyle"), K = /* @__PURE__ */ g((e) => {
  const { stylesArray: t } = Di(e), r = [], i = [], s = [], o = [];
  return t.forEach((a) => {
    const n = a[0];
    vg(n) ? r.push(a.join(":") + " !important") : (i.push(a.join(":") + " !important"), n.includes("stroke") && s.push(a.join(":") + " !important"), n === "fill" && o.push(a.join(":") + " !important"));
  }), {
    labelStyles: r.join(";"),
    nodeStyles: i.join(";"),
    stylesArray: t,
    borderStyles: s,
    backgroundStyles: o
  };
}, "styles2String"), Z = /* @__PURE__ */ g((e, t) => {
  const { themeVariables: r, handDrawnSeed: i } = bt(), { nodeBorder: s, mainBkg: o } = r, { stylesMap: a } = Di(e);
  return Object.assign(
    {
      roughness: 0.7,
      fill: a.get("fill") || o,
      fillStyle: "hachure",
      // solid fill
      fillWeight: 4,
      hachureGap: 5.2,
      stroke: a.get("stroke") || s,
      seed: i,
      strokeWidth: a.get("stroke-width")?.replace("px", "") || 1.3,
      fillLineDash: [0, 0],
      strokeLineDash: TT(a.get("stroke-dasharray"))
    },
    t
  );
}, "userNodeOverrides"), TT = /* @__PURE__ */ g((e) => {
  if (!e)
    return [0, 0];
  const t = e.trim().split(/\s+/).map(Number);
  if (t.length === 1) {
    const s = isNaN(t[0]) ? 0 : t[0];
    return [s, s];
  }
  const r = isNaN(t[0]) ? 0 : t[0], i = isNaN(t[1]) ? 0 : t[1];
  return [r, i];
}, "getStrokeDashArray");
const _T = Object.freeze({
  left: 0,
  top: 0,
  width: 16,
  height: 16
}), Xo = Object.freeze({
  rotate: 0,
  vFlip: !1,
  hFlip: !1
}), Bg = Object.freeze({
  ..._T,
  ...Xo
}), vT = Object.freeze({
  ...Bg,
  body: "",
  hidden: !1
}), BT = Object.freeze({
  width: null,
  height: null
}), LT = Object.freeze({
  ...BT,
  ...Xo
}), AT = (e, t, r, i = "") => {
  const s = e.split(":");
  if (e.slice(0, 1) === "@") {
    if (s.length < 2 || s.length > 3) return null;
    i = s.shift().slice(1);
  }
  if (s.length > 3 || !s.length) return null;
  if (s.length > 1) {
    const n = s.pop(), l = s.pop(), c = {
      provider: s.length > 0 ? s[0] : i,
      prefix: l,
      name: n
    };
    return tn(c) ? c : null;
  }
  const o = s[0], a = o.split("-");
  if (a.length > 1) {
    const n = {
      provider: i,
      prefix: a.shift(),
      name: a.join("-")
    };
    return tn(n) ? n : null;
  }
  if (r && i === "") {
    const n = {
      provider: i,
      prefix: "",
      name: o
    };
    return tn(n, r) ? n : null;
  }
  return null;
}, tn = (e, t) => e ? !!((t && e.prefix === "" || e.prefix) && e.name) : !1;
function ET(e, t) {
  const r = {};
  !e.hFlip != !t.hFlip && (r.hFlip = !0), !e.vFlip != !t.vFlip && (r.vFlip = !0);
  const i = ((e.rotate || 0) + (t.rotate || 0)) % 4;
  return i && (r.rotate = i), r;
}
function Jc(e, t) {
  const r = ET(e, t);
  for (const i in vT) i in Xo ? i in e && !(i in r) && (r[i] = Xo[i]) : i in t ? r[i] = t[i] : i in e && (r[i] = e[i]);
  return r;
}
function FT(e, t) {
  const r = e.icons, i = e.aliases || /* @__PURE__ */ Object.create(null), s = /* @__PURE__ */ Object.create(null);
  function o(a) {
    if (r[a]) return s[a] = [];
    if (!(a in s)) {
      s[a] = null;
      const n = i[a] && i[a].parent, l = n && o(n);
      l && (s[a] = [n].concat(l));
    }
    return s[a];
  }
  return (t || Object.keys(r).concat(Object.keys(i))).forEach(o), s;
}
function td(e, t, r) {
  const i = e.icons, s = e.aliases || /* @__PURE__ */ Object.create(null);
  let o = {};
  function a(n) {
    o = Jc(i[n] || s[n], o);
  }
  return a(t), r.forEach(a), Jc(e, o);
}
function MT(e, t) {
  if (e.icons[t]) return td(e, t, []);
  const r = FT(e, [t])[t];
  return r ? td(e, t, r) : null;
}
const $T = /(-?[0-9.]*[0-9]+[0-9.]*)/g, OT = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function ed(e, t, r) {
  if (t === 1) return e;
  if (r = r || 100, typeof e == "number") return Math.ceil(e * t * r) / r;
  if (typeof e != "string") return e;
  const i = e.split($T);
  if (i === null || !i.length) return e;
  const s = [];
  let o = i.shift(), a = OT.test(o);
  for (; ; ) {
    if (a) {
      const n = parseFloat(o);
      isNaN(n) ? s.push(o) : s.push(Math.ceil(n * t * r) / r);
    } else s.push(o);
    if (o = i.shift(), o === void 0) return s.join("");
    a = !a;
  }
}
function IT(e, t = "defs") {
  let r = "";
  const i = e.indexOf("<" + t);
  for (; i >= 0; ) {
    const s = e.indexOf(">", i), o = e.indexOf("</" + t);
    if (s === -1 || o === -1) break;
    const a = e.indexOf(">", o);
    if (a === -1) break;
    r += e.slice(s + 1, o).trim(), e = e.slice(0, i).trim() + e.slice(a + 1);
  }
  return {
    defs: r,
    content: e
  };
}
function DT(e, t) {
  return e ? "<defs>" + e + "</defs>" + t : t;
}
function RT(e, t, r) {
  const i = IT(e);
  return DT(i.defs, t + i.content + r);
}
const PT = (e) => e === "unset" || e === "undefined" || e === "none";
function NT(e, t) {
  const r = {
    ...Bg,
    ...e
  }, i = {
    ...LT,
    ...t
  }, s = {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height
  };
  let o = r.body;
  [r, i].forEach((m) => {
    const y = [], x = m.hFlip, C = m.vFlip;
    let k = m.rotate;
    x ? C ? k += 2 : (y.push("translate(" + (s.width + s.left).toString() + " " + (0 - s.top).toString() + ")"), y.push("scale(-1 1)"), s.top = s.left = 0) : C && (y.push("translate(" + (0 - s.left).toString() + " " + (s.height + s.top).toString() + ")"), y.push("scale(1 -1)"), s.top = s.left = 0);
    let T;
    switch (k < 0 && (k -= Math.floor(k / 4) * 4), k = k % 4, k) {
      case 1:
        T = s.height / 2 + s.top, y.unshift("rotate(90 " + T.toString() + " " + T.toString() + ")");
        break;
      case 2:
        y.unshift("rotate(180 " + (s.width / 2 + s.left).toString() + " " + (s.height / 2 + s.top).toString() + ")");
        break;
      case 3:
        T = s.width / 2 + s.left, y.unshift("rotate(-90 " + T.toString() + " " + T.toString() + ")");
        break;
    }
    k % 2 === 1 && (s.left !== s.top && (T = s.left, s.left = s.top, s.top = T), s.width !== s.height && (T = s.width, s.width = s.height, s.height = T)), y.length && (o = RT(o, '<g transform="' + y.join(" ") + '">', "</g>"));
  });
  const a = i.width, n = i.height, l = s.width, c = s.height;
  let h, d;
  a === null ? (d = n === null ? "1em" : n === "auto" ? c : n, h = ed(d, l / c)) : (h = a === "auto" ? l : a, d = n === null ? ed(h, c / l) : n === "auto" ? c : n);
  const f = {}, u = (m, y) => {
    PT(y) || (f[m] = y.toString());
  };
  u("width", h), u("height", d);
  const p = [
    s.left,
    s.top,
    l,
    c
  ];
  return f.viewBox = p.join(" "), {
    attributes: f,
    viewBox: p,
    body: o
  };
}
const qT = /\sid="(\S+)"/g, rd = /* @__PURE__ */ new Map();
function WT(e) {
  e = e.replace(/[0-9]+$/, "") || "a";
  const t = rd.get(e) || 0;
  return rd.set(e, t + 1), t ? `${e}${t}` : e;
}
function zT(e) {
  const t = [];
  let r;
  for (; r = qT.exec(e); ) t.push(r[1]);
  if (!t.length) return e;
  const i = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  return t.forEach((s) => {
    const o = WT(s), a = s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    e = e.replace(new RegExp('([#;"])(' + a + ')([")]|\\.[a-z])', "g"), "$1" + o + i + "$3");
  }), e = e.replace(new RegExp(i, "g"), ""), e;
}
function HT(e, t) {
  let r = e.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const i in t) r += " " + i + '="' + t[i] + '"';
  return '<svg xmlns="http://www.w3.org/2000/svg"' + r + ">" + e + "</svg>";
}
function nh() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Ur = nh();
function Lg(e) {
  Ur = e;
}
var ms = { exec: () => null };
function kt(e, t = "") {
  let r = typeof e == "string" ? e : e.source, i = { replace: (s, o) => {
    let a = typeof o == "string" ? o : o.source;
    return a = a.replace(re.caret, "$1"), r = r.replace(s, a), i;
  }, getRegex: () => new RegExp(r, t) };
  return i;
}
var YT = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return !1;
  }
})(), re = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (e) => new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}#`), htmlBeginRegex: (e) => new RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i") }, UT = /^(?:[ \t]*(?:\n|$))+/, XT = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, GT = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, Ns = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, jT = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, lh = /(?:[*+-]|\d{1,9}[.)])/, Ag = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Eg = kt(Ag).replace(/bull/g, lh).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), VT = kt(Ag).replace(/bull/g, lh).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), hh = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, ZT = /^[^\n]+/, ch = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, KT = kt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", ch).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), QT = kt(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, lh).getRegex(), ma = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", dh = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, JT = kt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", dh).replace("tag", ma).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Fg = kt(hh).replace("hr", Ns).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ma).getRegex(), t_ = kt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Fg).getRegex(), uh = { blockquote: t_, code: XT, def: KT, fences: GT, heading: jT, hr: Ns, html: JT, lheading: Eg, list: QT, newline: UT, paragraph: Fg, table: ms, text: ZT }, id = kt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", Ns).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ma).getRegex(), e_ = { ...uh, lheading: VT, table: id, paragraph: kt(hh).replace("hr", Ns).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", id).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ma).getRegex() }, r_ = { ...uh, html: kt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", dh).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: ms, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: kt(hh).replace("hr", Ns).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Eg).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, i_ = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, s_ = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Mg = /^( {2,}|\\)\n(?!\s*$)/, o_ = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, ya = /[\p{P}\p{S}]/u, fh = /[\s\p{P}\p{S}]/u, $g = /[^\s\p{P}\p{S}]/u, a_ = kt(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, fh).getRegex(), Og = /(?!~)[\p{P}\p{S}]/u, n_ = /(?!~)[\s\p{P}\p{S}]/u, l_ = /(?:[^\s\p{P}\p{S}]|~)/u, h_ = kt(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", YT ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Ig = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, c_ = kt(Ig, "u").replace(/punct/g, ya).getRegex(), d_ = kt(Ig, "u").replace(/punct/g, Og).getRegex(), Dg = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", u_ = kt(Dg, "gu").replace(/notPunctSpace/g, $g).replace(/punctSpace/g, fh).replace(/punct/g, ya).getRegex(), f_ = kt(Dg, "gu").replace(/notPunctSpace/g, l_).replace(/punctSpace/g, n_).replace(/punct/g, Og).getRegex(), p_ = kt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, $g).replace(/punctSpace/g, fh).replace(/punct/g, ya).getRegex(), g_ = kt(/\\(punct)/, "gu").replace(/punct/g, ya).getRegex(), m_ = kt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), y_ = kt(dh).replace("(?:-->|$)", "-->").getRegex(), x_ = kt("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", y_).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Go = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/, C_ = kt(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", Go).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Rg = kt(/^!?\[(label)\]\[(ref)\]/).replace("label", Go).replace("ref", ch).getRegex(), Pg = kt(/^!?\[(ref)\](?:\[\])?/).replace("ref", ch).getRegex(), b_ = kt("reflink|nolink(?!\\()", "g").replace("reflink", Rg).replace("nolink", Pg).getRegex(), sd = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, ph = { _backpedal: ms, anyPunctuation: g_, autolink: m_, blockSkip: h_, br: Mg, code: s_, del: ms, emStrongLDelim: c_, emStrongRDelimAst: u_, emStrongRDelimUnd: p_, escape: i_, link: C_, nolink: Pg, punctuation: a_, reflink: Rg, reflinkSearch: b_, tag: x_, text: o_, url: ms }, k_ = { ...ph, link: kt(/^!?\[(label)\]\((.*?)\)/).replace("label", Go).getRegex(), reflink: kt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Go).getRegex() }, Qn = { ...ph, emStrongRDelimAst: f_, emStrongLDelim: d_, url: kt(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", sd).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: kt(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", sd).getRegex() }, S_ = { ...Qn, br: kt(Mg).replace("{2,}", "*").getRegex(), text: kt(Qn.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, io = { normal: uh, gfm: e_, pedantic: r_ }, Zi = { normal: ph, gfm: Qn, breaks: S_, pedantic: k_ }, w_ = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, od = (e) => w_[e];
function $e(e, t) {
  if (t) {
    if (re.escapeTest.test(e)) return e.replace(re.escapeReplace, od);
  } else if (re.escapeTestNoEncode.test(e)) return e.replace(re.escapeReplaceNoEncode, od);
  return e;
}
function ad(e) {
  try {
    e = encodeURI(e).replace(re.percentDecode, "%");
  } catch {
    return null;
  }
  return e;
}
function nd(e, t) {
  let r = e.replace(re.findPipe, (o, a, n) => {
    let l = !1, c = a;
    for (; --c >= 0 && n[c] === "\\"; ) l = !l;
    return l ? "|" : " |";
  }), i = r.split(re.splitPipe), s = 0;
  if (i[0].trim() || i.shift(), i.length > 0 && !i.at(-1)?.trim() && i.pop(), t) if (i.length > t) i.splice(t);
  else for (; i.length < t; ) i.push("");
  for (; s < i.length; s++) i[s] = i[s].trim().replace(re.slashPipe, "|");
  return i;
}
function Ki(e, t, r) {
  let i = e.length;
  if (i === 0) return "";
  let s = 0;
  for (; s < i && e.charAt(i - s - 1) === t; )
    s++;
  return e.slice(0, i - s);
}
function T_(e, t) {
  if (e.indexOf(t[1]) === -1) return -1;
  let r = 0;
  for (let i = 0; i < e.length; i++) if (e[i] === "\\") i++;
  else if (e[i] === t[0]) r++;
  else if (e[i] === t[1] && (r--, r < 0)) return i;
  return r > 0 ? -2 : -1;
}
function ld(e, t, r, i, s) {
  let o = t.href, a = t.title || null, n = e[1].replace(s.other.outputLinkReplace, "$1");
  i.state.inLink = !0;
  let l = { type: e[0].charAt(0) === "!" ? "image" : "link", raw: r, href: o, title: a, text: n, tokens: i.inlineTokens(n) };
  return i.state.inLink = !1, l;
}
function __(e, t, r) {
  let i = e.match(r.other.indentCodeCompensation);
  if (i === null) return t;
  let s = i[1];
  return t.split(`
`).map((o) => {
    let a = o.match(r.other.beginningSpace);
    if (a === null) return o;
    let [n] = a;
    return n.length >= s.length ? o.slice(s.length) : o;
  }).join(`
`);
}
var jo = class {
  options;
  rules;
  lexer;
  constructor(t) {
    this.options = t || Ur;
  }
  space(t) {
    let r = this.rules.block.newline.exec(t);
    if (r && r[0].length > 0) return { type: "space", raw: r[0] };
  }
  code(t) {
    let r = this.rules.block.code.exec(t);
    if (r) {
      let i = r[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: r[0], codeBlockStyle: "indented", text: this.options.pedantic ? i : Ki(i, `
`) };
    }
  }
  fences(t) {
    let r = this.rules.block.fences.exec(t);
    if (r) {
      let i = r[0], s = __(i, r[3] || "", this.rules);
      return { type: "code", raw: i, lang: r[2] ? r[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : r[2], text: s };
    }
  }
  heading(t) {
    let r = this.rules.block.heading.exec(t);
    if (r) {
      let i = r[2].trim();
      if (this.rules.other.endingHash.test(i)) {
        let s = Ki(i, "#");
        (this.options.pedantic || !s || this.rules.other.endingSpaceChar.test(s)) && (i = s.trim());
      }
      return { type: "heading", raw: r[0], depth: r[1].length, text: i, tokens: this.lexer.inline(i) };
    }
  }
  hr(t) {
    let r = this.rules.block.hr.exec(t);
    if (r) return { type: "hr", raw: Ki(r[0], `
`) };
  }
  blockquote(t) {
    let r = this.rules.block.blockquote.exec(t);
    if (r) {
      let i = Ki(r[0], `
`).split(`
`), s = "", o = "", a = [];
      for (; i.length > 0; ) {
        let n = !1, l = [], c;
        for (c = 0; c < i.length; c++) if (this.rules.other.blockquoteStart.test(i[c])) l.push(i[c]), n = !0;
        else if (!n) l.push(i[c]);
        else break;
        i = i.slice(c);
        let h = l.join(`
`), d = h.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        s = s ? `${s}
${h}` : h, o = o ? `${o}
${d}` : d;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(d, a, !0), this.lexer.state.top = f, i.length === 0) break;
        let u = a.at(-1);
        if (u?.type === "code") break;
        if (u?.type === "blockquote") {
          let p = u, m = p.raw + `
` + i.join(`
`), y = this.blockquote(m);
          a[a.length - 1] = y, s = s.substring(0, s.length - p.raw.length) + y.raw, o = o.substring(0, o.length - p.text.length) + y.text;
          break;
        } else if (u?.type === "list") {
          let p = u, m = p.raw + `
` + i.join(`
`), y = this.list(m);
          a[a.length - 1] = y, s = s.substring(0, s.length - u.raw.length) + y.raw, o = o.substring(0, o.length - p.raw.length) + y.raw, i = m.substring(a.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: s, tokens: a, text: o };
    }
  }
  list(t) {
    let r = this.rules.block.list.exec(t);
    if (r) {
      let i = r[1].trim(), s = i.length > 1, o = { type: "list", raw: "", ordered: s, start: s ? +i.slice(0, -1) : "", loose: !1, items: [] };
      i = s ? `\\d{1,9}\\${i.slice(-1)}` : `\\${i}`, this.options.pedantic && (i = s ? i : "[*+-]");
      let a = this.rules.other.listItemRegex(i), n = !1;
      for (; t; ) {
        let c = !1, h = "", d = "";
        if (!(r = a.exec(t)) || this.rules.block.hr.test(t)) break;
        h = r[0], t = t.substring(h.length);
        let f = r[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (C) => " ".repeat(3 * C.length)), u = t.split(`
`, 1)[0], p = !f.trim(), m = 0;
        if (this.options.pedantic ? (m = 2, d = f.trimStart()) : p ? m = r[1].length + 1 : (m = r[2].search(this.rules.other.nonSpaceChar), m = m > 4 ? 1 : m, d = f.slice(m), m += r[1].length), p && this.rules.other.blankLine.test(u) && (h += u + `
`, t = t.substring(u.length + 1), c = !0), !c) {
          let C = this.rules.other.nextBulletRegex(m), k = this.rules.other.hrRegex(m), T = this.rules.other.fencesBeginRegex(m), w = this.rules.other.headingBeginRegex(m), _ = this.rules.other.htmlBeginRegex(m);
          for (; t; ) {
            let A = t.split(`
`, 1)[0], v;
            if (u = A, this.options.pedantic ? (u = u.replace(this.rules.other.listReplaceNesting, "  "), v = u) : v = u.replace(this.rules.other.tabCharGlobal, "    "), T.test(u) || w.test(u) || _.test(u) || C.test(u) || k.test(u)) break;
            if (v.search(this.rules.other.nonSpaceChar) >= m || !u.trim()) d += `
` + v.slice(m);
            else {
              if (p || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || T.test(f) || w.test(f) || k.test(f)) break;
              d += `
` + u;
            }
            !p && !u.trim() && (p = !0), h += A + `
`, t = t.substring(A.length + 1), f = v.slice(m);
          }
        }
        o.loose || (n ? o.loose = !0 : this.rules.other.doubleBlankLine.test(h) && (n = !0));
        let y = null, x;
        this.options.gfm && (y = this.rules.other.listIsTask.exec(d), y && (x = y[0] !== "[ ] ", d = d.replace(this.rules.other.listReplaceTask, ""))), o.items.push({ type: "list_item", raw: h, task: !!y, checked: x, loose: !1, text: d, tokens: [] }), o.raw += h;
      }
      let l = o.items.at(-1);
      if (l) l.raw = l.raw.trimEnd(), l.text = l.text.trimEnd();
      else return;
      o.raw = o.raw.trimEnd();
      for (let c = 0; c < o.items.length; c++) if (this.lexer.state.top = !1, o.items[c].tokens = this.lexer.blockTokens(o.items[c].text, []), !o.loose) {
        let h = o.items[c].tokens.filter((f) => f.type === "space"), d = h.length > 0 && h.some((f) => this.rules.other.anyLine.test(f.raw));
        o.loose = d;
      }
      if (o.loose) for (let c = 0; c < o.items.length; c++) o.items[c].loose = !0;
      return o;
    }
  }
  html(t) {
    let r = this.rules.block.html.exec(t);
    if (r) return { type: "html", block: !0, raw: r[0], pre: r[1] === "pre" || r[1] === "script" || r[1] === "style", text: r[0] };
  }
  def(t) {
    let r = this.rules.block.def.exec(t);
    if (r) {
      let i = r[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), s = r[2] ? r[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", o = r[3] ? r[3].substring(1, r[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : r[3];
      return { type: "def", tag: i, raw: r[0], href: s, title: o };
    }
  }
  table(t) {
    let r = this.rules.block.table.exec(t);
    if (!r || !this.rules.other.tableDelimiter.test(r[2])) return;
    let i = nd(r[1]), s = r[2].replace(this.rules.other.tableAlignChars, "").split("|"), o = r[3]?.trim() ? r[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: r[0], header: [], align: [], rows: [] };
    if (i.length === s.length) {
      for (let n of s) this.rules.other.tableAlignRight.test(n) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(n) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(n) ? a.align.push("left") : a.align.push(null);
      for (let n = 0; n < i.length; n++) a.header.push({ text: i[n], tokens: this.lexer.inline(i[n]), header: !0, align: a.align[n] });
      for (let n of o) a.rows.push(nd(n, a.header.length).map((l, c) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: a.align[c] })));
      return a;
    }
  }
  lheading(t) {
    let r = this.rules.block.lheading.exec(t);
    if (r) return { type: "heading", raw: r[0], depth: r[2].charAt(0) === "=" ? 1 : 2, text: r[1], tokens: this.lexer.inline(r[1]) };
  }
  paragraph(t) {
    let r = this.rules.block.paragraph.exec(t);
    if (r) {
      let i = r[1].charAt(r[1].length - 1) === `
` ? r[1].slice(0, -1) : r[1];
      return { type: "paragraph", raw: r[0], text: i, tokens: this.lexer.inline(i) };
    }
  }
  text(t) {
    let r = this.rules.block.text.exec(t);
    if (r) return { type: "text", raw: r[0], text: r[0], tokens: this.lexer.inline(r[0]) };
  }
  escape(t) {
    let r = this.rules.inline.escape.exec(t);
    if (r) return { type: "escape", raw: r[0], text: r[1] };
  }
  tag(t) {
    let r = this.rules.inline.tag.exec(t);
    if (r) return !this.lexer.state.inLink && this.rules.other.startATag.test(r[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(r[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(r[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(r[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: r[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: r[0] };
  }
  link(t) {
    let r = this.rules.inline.link.exec(t);
    if (r) {
      let i = r[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(i)) {
        if (!this.rules.other.endAngleBracket.test(i)) return;
        let a = Ki(i.slice(0, -1), "\\");
        if ((i.length - a.length) % 2 === 0) return;
      } else {
        let a = T_(r[2], "()");
        if (a === -2) return;
        if (a > -1) {
          let n = (r[0].indexOf("!") === 0 ? 5 : 4) + r[1].length + a;
          r[2] = r[2].substring(0, a), r[0] = r[0].substring(0, n).trim(), r[3] = "";
        }
      }
      let s = r[2], o = "";
      if (this.options.pedantic) {
        let a = this.rules.other.pedanticHrefTitle.exec(s);
        a && (s = a[1], o = a[3]);
      } else o = r[3] ? r[3].slice(1, -1) : "";
      return s = s.trim(), this.rules.other.startAngleBracket.test(s) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(i) ? s = s.slice(1) : s = s.slice(1, -1)), ld(r, { href: s && s.replace(this.rules.inline.anyPunctuation, "$1"), title: o && o.replace(this.rules.inline.anyPunctuation, "$1") }, r[0], this.lexer, this.rules);
    }
  }
  reflink(t, r) {
    let i;
    if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
      let s = (i[2] || i[1]).replace(this.rules.other.multipleSpaceGlobal, " "), o = r[s.toLowerCase()];
      if (!o) {
        let a = i[0].charAt(0);
        return { type: "text", raw: a, text: a };
      }
      return ld(i, o, i[0], this.lexer, this.rules);
    }
  }
  emStrong(t, r, i = "") {
    let s = this.rules.inline.emStrongLDelim.exec(t);
    if (!(!s || s[3] && i.match(this.rules.other.unicodeAlphaNumeric)) && (!(s[1] || s[2]) || !i || this.rules.inline.punctuation.exec(i))) {
      let o = [...s[0]].length - 1, a, n, l = o, c = 0, h = s[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (h.lastIndex = 0, r = r.slice(-1 * t.length + o); (s = h.exec(r)) != null; ) {
        if (a = s[1] || s[2] || s[3] || s[4] || s[5] || s[6], !a) continue;
        if (n = [...a].length, s[3] || s[4]) {
          l += n;
          continue;
        } else if ((s[5] || s[6]) && o % 3 && !((o + n) % 3)) {
          c += n;
          continue;
        }
        if (l -= n, l > 0) continue;
        n = Math.min(n, n + l + c);
        let d = [...s[0]][0].length, f = t.slice(0, o + s.index + d + n);
        if (Math.min(o, n) % 2) {
          let p = f.slice(1, -1);
          return { type: "em", raw: f, text: p, tokens: this.lexer.inlineTokens(p) };
        }
        let u = f.slice(2, -2);
        return { type: "strong", raw: f, text: u, tokens: this.lexer.inlineTokens(u) };
      }
    }
  }
  codespan(t) {
    let r = this.rules.inline.code.exec(t);
    if (r) {
      let i = r[2].replace(this.rules.other.newLineCharGlobal, " "), s = this.rules.other.nonSpaceChar.test(i), o = this.rules.other.startingSpaceChar.test(i) && this.rules.other.endingSpaceChar.test(i);
      return s && o && (i = i.substring(1, i.length - 1)), { type: "codespan", raw: r[0], text: i };
    }
  }
  br(t) {
    let r = this.rules.inline.br.exec(t);
    if (r) return { type: "br", raw: r[0] };
  }
  del(t) {
    let r = this.rules.inline.del.exec(t);
    if (r) return { type: "del", raw: r[0], text: r[2], tokens: this.lexer.inlineTokens(r[2]) };
  }
  autolink(t) {
    let r = this.rules.inline.autolink.exec(t);
    if (r) {
      let i, s;
      return r[2] === "@" ? (i = r[1], s = "mailto:" + i) : (i = r[1], s = i), { type: "link", raw: r[0], text: i, href: s, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  url(t) {
    let r;
    if (r = this.rules.inline.url.exec(t)) {
      let i, s;
      if (r[2] === "@") i = r[0], s = "mailto:" + i;
      else {
        let o;
        do
          o = r[0], r[0] = this.rules.inline._backpedal.exec(r[0])?.[0] ?? "";
        while (o !== r[0]);
        i = r[0], r[1] === "www." ? s = "http://" + r[0] : s = r[0];
      }
      return { type: "link", raw: r[0], text: i, href: s, tokens: [{ type: "text", raw: i, text: i }] };
    }
  }
  inlineText(t) {
    let r = this.rules.inline.text.exec(t);
    if (r) {
      let i = this.lexer.state.inRawBlock;
      return { type: "text", raw: r[0], text: r[0], escaped: i };
    }
  }
}, be = class Jn {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(t) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = t || Ur, this.options.tokenizer = this.options.tokenizer || new jo(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let r = { other: re, block: io.normal, inline: Zi.normal };
    this.options.pedantic ? (r.block = io.pedantic, r.inline = Zi.pedantic) : this.options.gfm && (r.block = io.gfm, this.options.breaks ? r.inline = Zi.breaks : r.inline = Zi.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: io, inline: Zi };
  }
  static lex(t, r) {
    return new Jn(r).lex(t);
  }
  static lexInline(t, r) {
    return new Jn(r).inlineTokens(t);
  }
  lex(t) {
    t = t.replace(re.carriageReturn, `
`), this.blockTokens(t, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let i = this.inlineQueue[r];
      this.inlineTokens(i.src, i.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(t, r = [], i = !1) {
    for (this.options.pedantic && (t = t.replace(re.tabCharGlobal, "    ").replace(re.spaceLine, "")); t; ) {
      let s;
      if (this.options.extensions?.block?.some((a) => (s = a.call({ lexer: this }, t, r)) ? (t = t.substring(s.raw.length), r.push(s), !0) : !1)) continue;
      if (s = this.tokenizer.space(t)) {
        t = t.substring(s.raw.length);
        let a = r.at(-1);
        s.raw.length === 1 && a !== void 0 ? a.raw += `
` : r.push(s);
        continue;
      }
      if (s = this.tokenizer.code(t)) {
        t = t.substring(s.raw.length);
        let a = r.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.text, this.inlineQueue.at(-1).src = a.text) : r.push(s);
        continue;
      }
      if (s = this.tokenizer.fences(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.heading(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.hr(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.blockquote(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.list(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.html(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.def(t)) {
        t = t.substring(s.raw.length);
        let a = r.at(-1);
        a?.type === "paragraph" || a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.raw, this.inlineQueue.at(-1).src = a.text) : this.tokens.links[s.tag] || (this.tokens.links[s.tag] = { href: s.href, title: s.title }, r.push(s));
        continue;
      }
      if (s = this.tokenizer.table(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      if (s = this.tokenizer.lheading(t)) {
        t = t.substring(s.raw.length), r.push(s);
        continue;
      }
      let o = t;
      if (this.options.extensions?.startBlock) {
        let a = 1 / 0, n = t.slice(1), l;
        this.options.extensions.startBlock.forEach((c) => {
          l = c.call({ lexer: this }, n), typeof l == "number" && l >= 0 && (a = Math.min(a, l));
        }), a < 1 / 0 && a >= 0 && (o = t.substring(0, a + 1));
      }
      if (this.state.top && (s = this.tokenizer.paragraph(o))) {
        let a = r.at(-1);
        i && a?.type === "paragraph" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : r.push(s), i = o.length !== t.length, t = t.substring(s.raw.length);
        continue;
      }
      if (s = this.tokenizer.text(t)) {
        t = t.substring(s.raw.length);
        let a = r.at(-1);
        a?.type === "text" ? (a.raw += (a.raw.endsWith(`
`) ? "" : `
`) + s.raw, a.text += `
` + s.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : r.push(s);
        continue;
      }
      if (t) {
        let a = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(a);
          break;
        } else throw new Error(a);
      }
    }
    return this.state.top = !0, r;
  }
  inline(t, r = []) {
    return this.inlineQueue.push({ src: t, tokens: r }), r;
  }
  inlineTokens(t, r = []) {
    let i = t, s = null;
    if (this.tokens.links) {
      let l = Object.keys(this.tokens.links);
      if (l.length > 0) for (; (s = this.tokenizer.rules.inline.reflinkSearch.exec(i)) != null; ) l.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (i = i.slice(0, s.index) + "[" + "a".repeat(s[0].length - 2) + "]" + i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (s = this.tokenizer.rules.inline.anyPunctuation.exec(i)) != null; ) i = i.slice(0, s.index) + "++" + i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let o;
    for (; (s = this.tokenizer.rules.inline.blockSkip.exec(i)) != null; ) o = s[2] ? s[2].length : 0, i = i.slice(0, s.index + o) + "[" + "a".repeat(s[0].length - o - 2) + "]" + i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    i = this.options.hooks?.emStrongMask?.call({ lexer: this }, i) ?? i;
    let a = !1, n = "";
    for (; t; ) {
      a || (n = ""), a = !1;
      let l;
      if (this.options.extensions?.inline?.some((h) => (l = h.call({ lexer: this }, t, r)) ? (t = t.substring(l.raw.length), r.push(l), !0) : !1)) continue;
      if (l = this.tokenizer.escape(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.tag(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.link(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.reflink(t, this.tokens.links)) {
        t = t.substring(l.raw.length);
        let h = r.at(-1);
        l.type === "text" && h?.type === "text" ? (h.raw += l.raw, h.text += l.text) : r.push(l);
        continue;
      }
      if (l = this.tokenizer.emStrong(t, i, n)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.codespan(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.br(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.del(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (l = this.tokenizer.autolink(t)) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      if (!this.state.inLink && (l = this.tokenizer.url(t))) {
        t = t.substring(l.raw.length), r.push(l);
        continue;
      }
      let c = t;
      if (this.options.extensions?.startInline) {
        let h = 1 / 0, d = t.slice(1), f;
        this.options.extensions.startInline.forEach((u) => {
          f = u.call({ lexer: this }, d), typeof f == "number" && f >= 0 && (h = Math.min(h, f));
        }), h < 1 / 0 && h >= 0 && (c = t.substring(0, h + 1));
      }
      if (l = this.tokenizer.inlineText(c)) {
        t = t.substring(l.raw.length), l.raw.slice(-1) !== "_" && (n = l.raw.slice(-1)), a = !0;
        let h = r.at(-1);
        h?.type === "text" ? (h.raw += l.raw, h.text += l.text) : r.push(l);
        continue;
      }
      if (t) {
        let h = "Infinite loop on byte: " + t.charCodeAt(0);
        if (this.options.silent) {
          console.error(h);
          break;
        } else throw new Error(h);
      }
    }
    return r;
  }
}, Vo = class {
  options;
  parser;
  constructor(t) {
    this.options = t || Ur;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: r, escaped: i }) {
    let s = (r || "").match(re.notSpaceStart)?.[0], o = t.replace(re.endingNewline, "") + `
`;
    return s ? '<pre><code class="language-' + $e(s) + '">' + (i ? o : $e(o, !0)) + `</code></pre>
` : "<pre><code>" + (i ? o : $e(o, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  def(t) {
    return "";
  }
  heading({ tokens: t, depth: r }) {
    return `<h${r}>${this.parser.parseInline(t)}</h${r}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    let r = t.ordered, i = t.start, s = "";
    for (let n = 0; n < t.items.length; n++) {
      let l = t.items[n];
      s += this.listitem(l);
    }
    let o = r ? "ol" : "ul", a = r && i !== 1 ? ' start="' + i + '"' : "";
    return "<" + o + a + `>
` + s + "</" + o + `>
`;
  }
  listitem(t) {
    let r = "";
    if (t.task) {
      let i = this.checkbox({ checked: !!t.checked });
      t.loose ? t.tokens[0]?.type === "paragraph" ? (t.tokens[0].text = i + " " + t.tokens[0].text, t.tokens[0].tokens && t.tokens[0].tokens.length > 0 && t.tokens[0].tokens[0].type === "text" && (t.tokens[0].tokens[0].text = i + " " + $e(t.tokens[0].tokens[0].text), t.tokens[0].tokens[0].escaped = !0)) : t.tokens.unshift({ type: "text", raw: i + " ", text: i + " ", escaped: !0 }) : r += i + " ";
    }
    return r += this.parser.parse(t.tokens, !!t.loose), `<li>${r}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let r = "", i = "";
    for (let o = 0; o < t.header.length; o++) i += this.tablecell(t.header[o]);
    r += this.tablerow({ text: i });
    let s = "";
    for (let o = 0; o < t.rows.length; o++) {
      let a = t.rows[o];
      i = "";
      for (let n = 0; n < a.length; n++) i += this.tablecell(a[n]);
      s += this.tablerow({ text: i });
    }
    return s && (s = `<tbody>${s}</tbody>`), `<table>
<thead>
` + r + `</thead>
` + s + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    let r = this.parser.parseInline(t.tokens), i = t.header ? "th" : "td";
    return (t.align ? `<${i} align="${t.align}">` : `<${i}>`) + r + `</${i}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${$e(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: r, tokens: i }) {
    let s = this.parser.parseInline(i), o = ad(t);
    if (o === null) return s;
    t = o;
    let a = '<a href="' + t + '"';
    return r && (a += ' title="' + $e(r) + '"'), a += ">" + s + "</a>", a;
  }
  image({ href: t, title: r, text: i, tokens: s }) {
    s && (i = this.parser.parseInline(s, this.parser.textRenderer));
    let o = ad(t);
    if (o === null) return $e(i);
    t = o;
    let a = `<img src="${t}" alt="${i}"`;
    return r && (a += ` title="${$e(r)}"`), a += ">", a;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : $e(t.text);
  }
}, gh = class {
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
}, ke = class tl {
  options;
  renderer;
  textRenderer;
  constructor(t) {
    this.options = t || Ur, this.options.renderer = this.options.renderer || new Vo(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new gh();
  }
  static parse(t, r) {
    return new tl(r).parse(t);
  }
  static parseInline(t, r) {
    return new tl(r).parseInline(t);
  }
  parse(t, r = !0) {
    let i = "";
    for (let s = 0; s < t.length; s++) {
      let o = t[s];
      if (this.options.extensions?.renderers?.[o.type]) {
        let n = o, l = this.options.extensions.renderers[n.type].call({ parser: this }, n);
        if (l !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(n.type)) {
          i += l || "";
          continue;
        }
      }
      let a = o;
      switch (a.type) {
        case "space": {
          i += this.renderer.space(a);
          continue;
        }
        case "hr": {
          i += this.renderer.hr(a);
          continue;
        }
        case "heading": {
          i += this.renderer.heading(a);
          continue;
        }
        case "code": {
          i += this.renderer.code(a);
          continue;
        }
        case "table": {
          i += this.renderer.table(a);
          continue;
        }
        case "blockquote": {
          i += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          i += this.renderer.list(a);
          continue;
        }
        case "html": {
          i += this.renderer.html(a);
          continue;
        }
        case "def": {
          i += this.renderer.def(a);
          continue;
        }
        case "paragraph": {
          i += this.renderer.paragraph(a);
          continue;
        }
        case "text": {
          let n = a, l = this.renderer.text(n);
          for (; s + 1 < t.length && t[s + 1].type === "text"; ) n = t[++s], l += `
` + this.renderer.text(n);
          r ? i += this.renderer.paragraph({ type: "paragraph", raw: l, text: l, tokens: [{ type: "text", raw: l, text: l, escaped: !0 }] }) : i += l;
          continue;
        }
        default: {
          let n = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(n), "";
          throw new Error(n);
        }
      }
    }
    return i;
  }
  parseInline(t, r = this.renderer) {
    let i = "";
    for (let s = 0; s < t.length; s++) {
      let o = t[s];
      if (this.options.extensions?.renderers?.[o.type]) {
        let n = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (n !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          i += n || "";
          continue;
        }
      }
      let a = o;
      switch (a.type) {
        case "escape": {
          i += r.text(a);
          break;
        }
        case "html": {
          i += r.html(a);
          break;
        }
        case "link": {
          i += r.link(a);
          break;
        }
        case "image": {
          i += r.image(a);
          break;
        }
        case "strong": {
          i += r.strong(a);
          break;
        }
        case "em": {
          i += r.em(a);
          break;
        }
        case "codespan": {
          i += r.codespan(a);
          break;
        }
        case "br": {
          i += r.br(a);
          break;
        }
        case "del": {
          i += r.del(a);
          break;
        }
        case "text": {
          i += r.text(a);
          break;
        }
        default: {
          let n = 'Token with "' + a.type + '" type was not found.';
          if (this.options.silent) return console.error(n), "";
          throw new Error(n);
        }
      }
    }
    return i;
  }
}, ls = class {
  options;
  block;
  constructor(t) {
    this.options = t || Ur;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
  emStrongMask(t) {
    return t;
  }
  provideLexer() {
    return this.block ? be.lex : be.lexInline;
  }
  provideParser() {
    return this.block ? ke.parse : ke.parseInline;
  }
}, v_ = class {
  defaults = nh();
  options = this.setOptions;
  parse = this.parseMarkdown(!0);
  parseInline = this.parseMarkdown(!1);
  Parser = ke;
  Renderer = Vo;
  TextRenderer = gh;
  Lexer = be;
  Tokenizer = jo;
  Hooks = ls;
  constructor(...t) {
    this.use(...t);
  }
  walkTokens(t, r) {
    let i = [];
    for (let s of t) switch (i = i.concat(r.call(this, s)), s.type) {
      case "table": {
        let o = s;
        for (let a of o.header) i = i.concat(this.walkTokens(a.tokens, r));
        for (let a of o.rows) for (let n of a) i = i.concat(this.walkTokens(n.tokens, r));
        break;
      }
      case "list": {
        let o = s;
        i = i.concat(this.walkTokens(o.items, r));
        break;
      }
      default: {
        let o = s;
        this.defaults.extensions?.childTokens?.[o.type] ? this.defaults.extensions.childTokens[o.type].forEach((a) => {
          let n = o[a].flat(1 / 0);
          i = i.concat(this.walkTokens(n, r));
        }) : o.tokens && (i = i.concat(this.walkTokens(o.tokens, r)));
      }
    }
    return i;
  }
  use(...t) {
    let r = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((i) => {
      let s = { ...i };
      if (s.async = this.defaults.async || s.async || !1, i.extensions && (i.extensions.forEach((o) => {
        if (!o.name) throw new Error("extension name required");
        if ("renderer" in o) {
          let a = r.renderers[o.name];
          a ? r.renderers[o.name] = function(...n) {
            let l = o.renderer.apply(this, n);
            return l === !1 && (l = a.apply(this, n)), l;
          } : r.renderers[o.name] = o.renderer;
        }
        if ("tokenizer" in o) {
          if (!o.level || o.level !== "block" && o.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let a = r[o.level];
          a ? a.unshift(o.tokenizer) : r[o.level] = [o.tokenizer], o.start && (o.level === "block" ? r.startBlock ? r.startBlock.push(o.start) : r.startBlock = [o.start] : o.level === "inline" && (r.startInline ? r.startInline.push(o.start) : r.startInline = [o.start]));
        }
        "childTokens" in o && o.childTokens && (r.childTokens[o.name] = o.childTokens);
      }), s.extensions = r), i.renderer) {
        let o = this.defaults.renderer || new Vo(this.defaults);
        for (let a in i.renderer) {
          if (!(a in o)) throw new Error(`renderer '${a}' does not exist`);
          if (["options", "parser"].includes(a)) continue;
          let n = a, l = i.renderer[n], c = o[n];
          o[n] = (...h) => {
            let d = l.apply(o, h);
            return d === !1 && (d = c.apply(o, h)), d || "";
          };
        }
        s.renderer = o;
      }
      if (i.tokenizer) {
        let o = this.defaults.tokenizer || new jo(this.defaults);
        for (let a in i.tokenizer) {
          if (!(a in o)) throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a)) continue;
          let n = a, l = i.tokenizer[n], c = o[n];
          o[n] = (...h) => {
            let d = l.apply(o, h);
            return d === !1 && (d = c.apply(o, h)), d;
          };
        }
        s.tokenizer = o;
      }
      if (i.hooks) {
        let o = this.defaults.hooks || new ls();
        for (let a in i.hooks) {
          if (!(a in o)) throw new Error(`hook '${a}' does not exist`);
          if (["options", "block"].includes(a)) continue;
          let n = a, l = i.hooks[n], c = o[n];
          ls.passThroughHooks.has(a) ? o[n] = (h) => {
            if (this.defaults.async && ls.passThroughHooksRespectAsync.has(a)) return (async () => {
              let f = await l.call(o, h);
              return c.call(o, f);
            })();
            let d = l.call(o, h);
            return c.call(o, d);
          } : o[n] = (...h) => {
            if (this.defaults.async) return (async () => {
              let f = await l.apply(o, h);
              return f === !1 && (f = await c.apply(o, h)), f;
            })();
            let d = l.apply(o, h);
            return d === !1 && (d = c.apply(o, h)), d;
          };
        }
        s.hooks = o;
      }
      if (i.walkTokens) {
        let o = this.defaults.walkTokens, a = i.walkTokens;
        s.walkTokens = function(n) {
          let l = [];
          return l.push(a.call(this, n)), o && (l = l.concat(o.call(this, n))), l;
        };
      }
      this.defaults = { ...this.defaults, ...s };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, r) {
    return be.lex(t, r ?? this.defaults);
  }
  parser(t, r) {
    return ke.parse(t, r ?? this.defaults);
  }
  parseMarkdown(t) {
    return (r, i) => {
      let s = { ...i }, o = { ...this.defaults, ...s }, a = this.onError(!!o.silent, !!o.async);
      if (this.defaults.async === !0 && s.async === !1) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof r > "u" || r === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof r != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
      if (o.hooks && (o.hooks.options = o, o.hooks.block = t), o.async) return (async () => {
        let n = o.hooks ? await o.hooks.preprocess(r) : r, l = await (o.hooks ? await o.hooks.provideLexer() : t ? be.lex : be.lexInline)(n, o), c = o.hooks ? await o.hooks.processAllTokens(l) : l;
        o.walkTokens && await Promise.all(this.walkTokens(c, o.walkTokens));
        let h = await (o.hooks ? await o.hooks.provideParser() : t ? ke.parse : ke.parseInline)(c, o);
        return o.hooks ? await o.hooks.postprocess(h) : h;
      })().catch(a);
      try {
        o.hooks && (r = o.hooks.preprocess(r));
        let n = (o.hooks ? o.hooks.provideLexer() : t ? be.lex : be.lexInline)(r, o);
        o.hooks && (n = o.hooks.processAllTokens(n)), o.walkTokens && this.walkTokens(n, o.walkTokens);
        let l = (o.hooks ? o.hooks.provideParser() : t ? ke.parse : ke.parseInline)(n, o);
        return o.hooks && (l = o.hooks.postprocess(l)), l;
      } catch (n) {
        return a(n);
      }
    };
  }
  onError(t, r) {
    return (i) => {
      if (i.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let s = "<p>An error occurred:</p><pre>" + $e(i.message + "", !0) + "</pre>";
        return r ? Promise.resolve(s) : s;
      }
      if (r) return Promise.reject(i);
      throw i;
    };
  }
}, zr = new v_();
function St(e, t) {
  return zr.parse(e, t);
}
St.options = St.setOptions = function(e) {
  return zr.setOptions(e), St.defaults = zr.defaults, Lg(St.defaults), St;
};
St.getDefaults = nh;
St.defaults = Ur;
St.use = function(...e) {
  return zr.use(...e), St.defaults = zr.defaults, Lg(St.defaults), St;
};
St.walkTokens = function(e, t) {
  return zr.walkTokens(e, t);
};
St.parseInline = zr.parseInline;
St.Parser = ke;
St.parser = ke.parse;
St.Renderer = Vo;
St.TextRenderer = gh;
St.Lexer = be;
St.lexer = be.lex;
St.Tokenizer = jo;
St.Hooks = ls;
St.parse = St;
St.options;
St.setOptions;
St.use;
St.walkTokens;
St.parseInline;
ke.parse;
be.lex;
function Ng(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var i = Array.from(typeof e == "string" ? [e] : e);
  i[i.length - 1] = i[i.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var s = i.reduce(function(n, l) {
    var c = l.match(/\n([\t ]+|(?!\s).)/g);
    return c ? n.concat(c.map(function(h) {
      var d, f;
      return (f = (d = h.match(/[\t ]/g)) === null || d === void 0 ? void 0 : d.length) !== null && f !== void 0 ? f : 0;
    })) : n;
  }, []);
  if (s.length) {
    var o = new RegExp(`
[	 ]{`.concat(Math.min.apply(Math, s), "}"), "g");
    i = i.map(function(n) {
      return n.replace(o, `
`);
    });
  }
  i[0] = i[0].replace(/^\r?\n/, "");
  var a = i[0];
  return t.forEach(function(n, l) {
    var c = a.match(/(?:^|\n)( *)$/), h = c ? c[1] : "", d = n;
    typeof n == "string" && n.includes(`
`) && (d = String(n).split(`
`).map(function(f, u) {
      return u === 0 ? f : "".concat(h).concat(f);
    }).join(`
`)), a += d + i[l + 1];
  }), a;
}
var B_ = {
  body: '<g><rect width="80" height="80" style="fill: #087ebf; stroke-width: 0px;"/><text transform="translate(21.16 64.67)" style="fill: #fff; font-family: ArialMT, Arial; font-size: 67.75px;"><tspan x="0" y="0">?</tspan></text></g>',
  height: 80,
  width: 80
}, el = /* @__PURE__ */ new Map(), qg = /* @__PURE__ */ new Map(), L_ = /* @__PURE__ */ g((e) => {
  for (const t of e) {
    if (!t.name)
      throw new Error(
        'Invalid icon loader. Must have a "name" property with non-empty string value.'
      );
    if (q.debug("Registering icon pack:", t.name), "loader" in t)
      qg.set(t.name, t.loader);
    else if ("icons" in t)
      el.set(t.name, t.icons);
    else
      throw q.error("Invalid icon loader:", t), new Error('Invalid icon loader. Must have either "icons" or "loader" property.');
  }
}, "registerIconPacks"), Wg = /* @__PURE__ */ g(async (e, t) => {
  const r = AT(e, !0, t !== void 0);
  if (!r)
    throw new Error(`Invalid icon name: ${e}`);
  const i = r.prefix || t;
  if (!i)
    throw new Error(`Icon name must contain a prefix: ${e}`);
  let s = el.get(i);
  if (!s) {
    const a = qg.get(i);
    if (!a)
      throw new Error(`Icon set not found: ${r.prefix}`);
    try {
      s = { ...await a(), prefix: i }, el.set(i, s);
    } catch (n) {
      throw q.error(n), new Error(`Failed to load icon set: ${r.prefix}`);
    }
  }
  const o = MT(s, r.name);
  if (!o)
    throw new Error(`Icon not found: ${e}`);
  return o;
}, "getRegisteredIconData"), A_ = /* @__PURE__ */ g(async (e) => {
  try {
    return await Wg(e), !0;
  } catch {
    return !1;
  }
}, "isIconAvailable"), qs = /* @__PURE__ */ g(async (e, t, r) => {
  let i;
  try {
    i = await Wg(e, t?.fallbackPrefix);
  } catch (a) {
    q.error(a), i = B_;
  }
  const s = NT(i, t), o = HT(zT(s.body), {
    ...s.attributes,
    ...r
  });
  return ve(o, Lt());
}, "getIconSVG");
function zg(e, { markdownAutoWrap: t }) {
  const i = e.replace(/<br\/>/g, `
`).replace(/\n{2,}/g, `
`);
  return Ng(i);
}
g(zg, "preprocessMarkdown");
function Hg(e) {
  return e.split(/\\n|\n|<br\s*\/?>/gi).map(
    (t) => t.trim().match(/<[^>]+>|[^\s<>]+/g)?.map((r) => ({ content: r, type: "normal" })) ?? []
  );
}
g(Hg, "nonMarkdownToLines");
function Yg(e, t = {}) {
  const r = zg(e, t), i = St.lexer(r), s = [[]];
  let o = 0;
  function a(n, l = "normal") {
    n.type === "text" ? n.text.split(`
`).forEach((h, d) => {
      d !== 0 && (o++, s.push([])), h.split(" ").forEach((f) => {
        f = f.replace(/&#39;/g, "'"), f && s[o].push({ content: f, type: l });
      });
    }) : n.type === "strong" || n.type === "em" ? n.tokens.forEach((c) => {
      a(c, n.type);
    }) : n.type === "html" && s[o].push({ content: n.text, type: "normal" });
  }
  return g(a, "processNode"), i.forEach((n) => {
    n.type === "paragraph" ? n.tokens?.forEach((l) => {
      a(l);
    }) : n.type === "html" ? s[o].push({ content: n.text, type: "normal" }) : s[o].push({ content: n.raw, type: "normal" });
  }), s;
}
g(Yg, "markdownToLines");
function Ug(e) {
  return e ? `<p>${/**
  * Replace new lines with <br /> tags.
  *
  * Unlike in markdown text, `\n` sequences are treated as line breaks here.
  */
  e.replace(/\\n|\n/g, "<br />")}</p>` : "";
}
g(Ug, "nonMarkdownToHTML");
function Xg(e, { markdownAutoWrap: t } = {}) {
  const r = St.lexer(e);
  function i(s) {
    return s.type === "text" ? t === !1 ? s.text.replace(/\n */g, "<br/>").replace(/ /g, "&nbsp;") : s.text.replace(/\n */g, "<br/>") : s.type === "strong" ? `<strong>${s.tokens?.map(i).join("")}</strong>` : s.type === "em" ? `<em>${s.tokens?.map(i).join("")}</em>` : s.type === "paragraph" ? `<p>${s.tokens?.map(i).join("")}</p>` : s.type === "space" ? "" : s.type === "html" ? `${s.text}` : s.type === "escape" ? s.text : (q.warn(`Unsupported markdown: ${s.type}`), s.raw);
  }
  return g(i, "output"), r.map(i).join("");
}
g(Xg, "markdownToHTML");
function Gg(e) {
  return Intl.Segmenter ? [...new Intl.Segmenter().segment(e)].map((t) => t.segment) : [...e];
}
g(Gg, "splitTextToChars");
function jg(e, t) {
  const r = Gg(t.content);
  return mh(e, [], r, t.type);
}
g(jg, "splitWordToFitWidth");
function mh(e, t, r, i) {
  if (r.length === 0)
    return [
      { content: t.join(""), type: i },
      { content: "", type: i }
    ];
  const [s, ...o] = r, a = [...t, s];
  return e([{ content: a.join(""), type: i }]) ? mh(e, a, o, i) : (t.length === 0 && s && (t.push(s), r.shift()), [
    { content: t.join(""), type: i },
    { content: r.join(""), type: i }
  ]);
}
g(mh, "splitWordToFitWidthRecursion");
function Vg(e, t) {
  if (e.some(({ content: r }) => r.includes(`
`)))
    throw new Error("splitLineToFitWidth does not support newlines in the line");
  return Zo(e, t);
}
g(Vg, "splitLineToFitWidth");
function Zo(e, t, r = [], i = []) {
  if (e.length === 0)
    return i.length > 0 && r.push(i), r.length > 0 ? r : [];
  let s = "";
  e[0].content === " " && (s = " ", e.shift());
  const o = e.shift() ?? { content: " ", type: "normal" }, a = [...i];
  if (s !== "" && a.push({ content: s, type: "normal" }), a.push(o), t(a))
    return Zo(e, t, r, a);
  if (i.length > 0)
    r.push(i), e.unshift(o);
  else if (o.content) {
    const [n, l] = jg(t, o);
    r.push([n]), l.content && e.unshift(l);
  }
  return Zo(e, t, r);
}
g(Zo, "splitLineToFitWidthRecursion");
function rl(e, t) {
  t && e.attr("style", t);
}
g(rl, "applyStyle");
var hd = 16384;
async function Zg(e, t, r, i, s = !1, o = Lt()) {
  const a = e.append("foreignObject");
  a.attr("width", `${Math.min(10 * r, hd)}px`), a.attr("height", `${Math.min(10 * r, hd)}px`);
  const n = a.append("xhtml:div"), l = Cs(t.label) ? await Eu(t.label.replace(Os.lineBreakRegex, `
`), o) : ve(t.label, o), c = t.isNode ? "nodeLabel" : "edgeLabel", h = n.append("span");
  h.html(l), rl(h, t.labelStyle), h.attr("class", `${c} ${i}`), rl(n, t.labelStyle), n.style("display", "table-cell"), n.style("white-space", "nowrap"), n.style("line-height", "1.5"), r !== Number.POSITIVE_INFINITY && (n.style("max-width", r + "px"), n.style("text-align", "center")), n.attr("xmlns", "http://www.w3.org/1999/xhtml"), s && n.attr("class", "labelBkg");
  let d = n.node().getBoundingClientRect();
  return d.width === r && (n.style("display", "table"), n.style("white-space", "break-spaces"), n.style("width", r + "px"), d = n.node().getBoundingClientRect()), a.node();
}
g(Zg, "addHtmlSpan");
function xa(e, t, r, i = !1) {
  const s = e.append("tspan").attr("class", "text-outer-tspan").attr("x", 0).attr("y", t * r - 0.1 + "em").attr("dy", r + "em");
  return i && s.attr("text-anchor", "middle"), s;
}
g(xa, "createTspan");
function Kg(e, t, r) {
  const i = e.append("text"), s = xa(i, 1, t);
  Ca(s, r);
  const o = s.node().getComputedTextLength();
  return i.remove(), o;
}
g(Kg, "computeWidthOfText");
function E_(e, t, r) {
  const i = e.append("text"), s = xa(i, 1, t);
  Ca(s, [{ content: r, type: "normal" }]);
  const o = s.node()?.getBoundingClientRect();
  return o && i.remove(), o;
}
g(E_, "computeDimensionOfText");
function Qg(e, t, r, i = !1, s = !1) {
  const a = t.append("g"), n = a.insert("rect").attr("class", "background").attr("style", "stroke: none"), l = a.append("text").attr("y", "-10.1");
  s && l.attr("text-anchor", "middle");
  let c = 0;
  for (const h of r) {
    const d = /* @__PURE__ */ g((u) => Kg(a, 1.1, u) <= e, "checkWidth"), f = d(h) ? [h] : Vg(h, d);
    for (const u of f) {
      const p = xa(l, c, 1.1, s);
      Ca(p, u), c++;
    }
  }
  if (i) {
    const h = l.node().getBBox(), d = 2;
    return n.attr("x", h.x - d).attr("y", h.y - d).attr("width", h.width + 2 * d).attr("height", h.height + 2 * d), a.node();
  } else
    return l.node();
}
g(Qg, "createFormattedText");
function il(e) {
  const t = /&(amp|lt|gt);/g;
  return e.replace(t, (r, i) => {
    switch (i) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      default:
        return r;
    }
  });
}
g(il, "decodeHTMLEntities");
function Ca(e, t) {
  e.text(""), t.forEach((r, i) => {
    const s = e.append("tspan").attr("font-style", r.type === "em" ? "italic" : "normal").attr("class", "text-inner-tspan").attr("font-weight", r.type === "strong" ? "bold" : "normal");
    i === 0 ? s.text(il(r.content)) : s.text(" " + il(r.content));
  });
}
g(Ca, "updateTextContentAndStyles");
async function Jg(e, t = {}) {
  const r = [];
  e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, (s, o, a) => (r.push(
    (async () => {
      const n = `${o}:${a}`;
      return await A_(n) ? await qs(n, void 0, { class: "label-icon" }) : `<i class='${ve(s, t).replace(":", " ")}'></i>`;
    })()
  ), s));
  const i = await Promise.all(r);
  return e.replace(/(fa[bklrs]?):fa-([\w-]+)/g, () => i.shift() ?? "");
}
g(Jg, "replaceIconSubstring");
var er = /* @__PURE__ */ g(async (e, t = "", {
  style: r = "",
  isTitle: i = !1,
  classes: s = "",
  useHtmlLabels: o = !0,
  markdown: a = !0,
  isNode: n = !0,
  /**
   * The width to wrap the text within. Set to `Number.POSITIVE_INFINITY` for no wrapping.
   */
  width: l = 200,
  addSvgBackground: c = !1
} = {}, h) => {
  if (q.debug(
    "XYZ createText",
    t,
    r,
    i,
    s,
    o,
    n,
    "addSvgBackground: ",
    c
  ), o) {
    const d = a ? Xg(t, h) : Ug(t), f = await Jg(Wr(d), h), u = t.replace(/\\\\/g, "\\"), p = {
      isNode: n,
      label: Cs(t) ? u : f,
      labelStyle: r.replace("fill:", "color:")
    };
    return await Zg(e, p, l, s, c, h);
  } else {
    const d = Wr(t.replace(/<br\s*\/?>/g, "<br/>")), f = a ? Yg(d.replace("<br>", "<br/>"), h) : Hg(d), u = Qg(
      l,
      e,
      f,
      t ? c : !1,
      !n
    );
    if (n) {
      /stroke:/.exec(r) && (r = r.replace("stroke:", "lineColor:"));
      const p = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      ut(u).attr("style", p);
    } else {
      const p = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/background:/g, "fill:");
      ut(u).select("rect").attr("style", p.replace(/background:/g, "fill:"));
      const m = r.replace(/stroke:[^;]+;?/g, "").replace(/stroke-width:[^;]+;?/g, "").replace(/fill:[^;]+;?/g, "").replace(/color:/g, "fill:");
      ut(u).select("text").attr("style", m);
    }
    return i ? ut(u).selectAll("tspan.text-outer-tspan").classed("title-row", !0) : ut(u).selectAll("tspan.text-outer-tspan").classed("row", !0), u;
  }
}, "createText");
function en(e, t, r) {
  if (e && e.length) {
    const [i, s] = t, o = Math.PI / 180 * r, a = Math.cos(o), n = Math.sin(o);
    for (const l of e) {
      const [c, h] = l;
      l[0] = (c - i) * a - (h - s) * n + i, l[1] = (c - i) * n + (h - s) * a + s;
    }
  }
}
function F_(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function M_(e, t, r, i = 1) {
  const s = r, o = Math.max(t, 0.1), a = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, n = [0, 0];
  if (s) for (const c of a) en(c, n, s);
  const l = (function(c, h, d) {
    const f = [];
    for (const C of c) {
      const k = [...C];
      F_(k[0], k[k.length - 1]) || k.push([k[0][0], k[0][1]]), k.length > 2 && f.push(k);
    }
    const u = [];
    h = Math.max(h, 0.1);
    const p = [];
    for (const C of f) for (let k = 0; k < C.length - 1; k++) {
      const T = C[k], w = C[k + 1];
      if (T[1] !== w[1]) {
        const _ = Math.min(T[1], w[1]);
        p.push({ ymin: _, ymax: Math.max(T[1], w[1]), x: _ === T[1] ? T[0] : w[0], islope: (w[0] - T[0]) / (w[1] - T[1]) });
      }
    }
    if (p.sort(((C, k) => C.ymin < k.ymin ? -1 : C.ymin > k.ymin ? 1 : C.x < k.x ? -1 : C.x > k.x ? 1 : C.ymax === k.ymax ? 0 : (C.ymax - k.ymax) / Math.abs(C.ymax - k.ymax))), !p.length) return u;
    let m = [], y = p[0].ymin, x = 0;
    for (; m.length || p.length; ) {
      if (p.length) {
        let C = -1;
        for (let k = 0; k < p.length && !(p[k].ymin > y); k++) C = k;
        p.splice(0, C + 1).forEach(((k) => {
          m.push({ s: y, edge: k });
        }));
      }
      if (m = m.filter(((C) => !(C.edge.ymax <= y))), m.sort(((C, k) => C.edge.x === k.edge.x ? 0 : (C.edge.x - k.edge.x) / Math.abs(C.edge.x - k.edge.x))), (d !== 1 || x % h == 0) && m.length > 1) for (let C = 0; C < m.length; C += 2) {
        const k = C + 1;
        if (k >= m.length) break;
        const T = m[C].edge, w = m[k].edge;
        u.push([[Math.round(T.x), y], [Math.round(w.x), y]]);
      }
      y += d, m.forEach(((C) => {
        C.edge.x = C.edge.x + d * C.edge.islope;
      })), x++;
    }
    return u;
  })(a, o, i);
  if (s) {
    for (const c of a) en(c, n, -s);
    (function(c, h, d) {
      const f = [];
      c.forEach(((u) => f.push(...u))), en(f, h, d);
    })(l, n, -s);
  }
  return l;
}
function Ws(e, t) {
  var r;
  const i = t.hachureAngle + 90;
  let s = t.hachureGap;
  s < 0 && (s = 4 * t.strokeWidth), s = Math.round(Math.max(s, 0.1));
  let o = 1;
  return t.roughness >= 1 && (((r = t.randomizer) === null || r === void 0 ? void 0 : r.next()) || Math.random()) > 0.7 && (o = s), M_(e, s, i, o || 1);
}
class yh {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    return this._fillPolygons(t, r);
  }
  _fillPolygons(t, r) {
    const i = Ws(t, r);
    return { type: "fillSketch", ops: this.renderLines(i, r) };
  }
  renderLines(t, r) {
    const i = [];
    for (const s of t) i.push(...this.helper.doubleLineOps(s[0][0], s[0][1], s[1][0], s[1][1], r));
    return i;
  }
}
function ba(e) {
  const t = e[0], r = e[1];
  return Math.sqrt(Math.pow(t[0] - r[0], 2) + Math.pow(t[1] - r[1], 2));
}
class $_ extends yh {
  fillPolygons(t, r) {
    let i = r.hachureGap;
    i < 0 && (i = 4 * r.strokeWidth), i = Math.max(i, 0.1);
    const s = Ws(t, Object.assign({}, r, { hachureGap: i })), o = Math.PI / 180 * r.hachureAngle, a = [], n = 0.5 * i * Math.cos(o), l = 0.5 * i * Math.sin(o);
    for (const [c, h] of s) ba([c, h]) && a.push([[c[0] - n, c[1] + l], [...h]], [[c[0] + n, c[1] - l], [...h]]);
    return { type: "fillSketch", ops: this.renderLines(a, r) };
  }
}
class O_ extends yh {
  fillPolygons(t, r) {
    const i = this._fillPolygons(t, r), s = Object.assign({}, r, { hachureAngle: r.hachureAngle + 90 }), o = this._fillPolygons(t, s);
    return i.ops = i.ops.concat(o.ops), i;
  }
}
class I_ {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = Ws(t, r = Object.assign({}, r, { hachureAngle: 0 }));
    return this.dotsOnLines(i, r);
  }
  dotsOnLines(t, r) {
    const i = [];
    let s = r.hachureGap;
    s < 0 && (s = 4 * r.strokeWidth), s = Math.max(s, 0.1);
    let o = r.fillWeight;
    o < 0 && (o = r.strokeWidth / 2);
    const a = s / 4;
    for (const n of t) {
      const l = ba(n), c = l / s, h = Math.ceil(c) - 1, d = l - h * s, f = (n[0][0] + n[1][0]) / 2 - s / 4, u = Math.min(n[0][1], n[1][1]);
      for (let p = 0; p < h; p++) {
        const m = u + d + p * s, y = f - a + 2 * Math.random() * a, x = m - a + 2 * Math.random() * a, C = this.helper.ellipse(y, x, o, o, r);
        i.push(...C.ops);
      }
    }
    return { type: "fillSketch", ops: i };
  }
}
class D_ {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = Ws(t, r);
    return { type: "fillSketch", ops: this.dashedLine(i, r) };
  }
  dashedLine(t, r) {
    const i = r.dashOffset < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashOffset, s = r.dashGap < 0 ? r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap : r.dashGap, o = [];
    return t.forEach(((a) => {
      const n = ba(a), l = Math.floor(n / (i + s)), c = (n + s - l * (i + s)) / 2;
      let h = a[0], d = a[1];
      h[0] > d[0] && (h = a[1], d = a[0]);
      const f = Math.atan((d[1] - h[1]) / (d[0] - h[0]));
      for (let u = 0; u < l; u++) {
        const p = u * (i + s), m = p + i, y = [h[0] + p * Math.cos(f) + c * Math.cos(f), h[1] + p * Math.sin(f) + c * Math.sin(f)], x = [h[0] + m * Math.cos(f) + c * Math.cos(f), h[1] + m * Math.sin(f) + c * Math.sin(f)];
        o.push(...this.helper.doubleLineOps(y[0], y[1], x[0], x[1], r));
      }
    })), o;
  }
}
class R_ {
  constructor(t) {
    this.helper = t;
  }
  fillPolygons(t, r) {
    const i = r.hachureGap < 0 ? 4 * r.strokeWidth : r.hachureGap, s = r.zigzagOffset < 0 ? i : r.zigzagOffset, o = Ws(t, r = Object.assign({}, r, { hachureGap: i + s }));
    return { type: "fillSketch", ops: this.zigzagLines(o, s, r) };
  }
  zigzagLines(t, r, i) {
    const s = [];
    return t.forEach(((o) => {
      const a = ba(o), n = Math.round(a / (2 * r));
      let l = o[0], c = o[1];
      l[0] > c[0] && (l = o[1], c = o[0]);
      const h = Math.atan((c[1] - l[1]) / (c[0] - l[0]));
      for (let d = 0; d < n; d++) {
        const f = 2 * d * r, u = 2 * (d + 1) * r, p = Math.sqrt(2 * Math.pow(r, 2)), m = [l[0] + f * Math.cos(h), l[1] + f * Math.sin(h)], y = [l[0] + u * Math.cos(h), l[1] + u * Math.sin(h)], x = [m[0] + p * Math.cos(h + Math.PI / 4), m[1] + p * Math.sin(h + Math.PI / 4)];
        s.push(...this.helper.doubleLineOps(m[0], m[1], x[0], x[1], i), ...this.helper.doubleLineOps(x[0], x[1], y[0], y[1], i));
      }
    })), s;
  }
}
const se = {};
class P_ {
  constructor(t) {
    this.seed = t;
  }
  next() {
    return this.seed ? (2 ** 31 - 1 & (this.seed = Math.imul(48271, this.seed))) / 2 ** 31 : Math.random();
  }
}
const N_ = 0, rn = 1, cd = 2, so = { A: 7, a: 7, C: 6, c: 6, H: 1, h: 1, L: 2, l: 2, M: 2, m: 2, Q: 4, q: 4, S: 4, s: 4, T: 2, t: 2, V: 1, v: 1, Z: 0, z: 0 };
function sn(e, t) {
  return e.type === t;
}
function xh(e) {
  const t = [], r = (function(a) {
    const n = new Array();
    for (; a !== ""; ) if (a.match(/^([ \t\r\n,]+)/)) a = a.substr(RegExp.$1.length);
    else if (a.match(/^([aAcChHlLmMqQsStTvVzZ])/)) n[n.length] = { type: N_, text: RegExp.$1 }, a = a.substr(RegExp.$1.length);
    else {
      if (!a.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) return [];
      n[n.length] = { type: rn, text: `${parseFloat(RegExp.$1)}` }, a = a.substr(RegExp.$1.length);
    }
    return n[n.length] = { type: cd, text: "" }, n;
  })(e);
  let i = "BOD", s = 0, o = r[s];
  for (; !sn(o, cd); ) {
    let a = 0;
    const n = [];
    if (i === "BOD") {
      if (o.text !== "M" && o.text !== "m") return xh("M0,0" + e);
      s++, a = so[o.text], i = o.text;
    } else sn(o, rn) ? a = so[i] : (s++, a = so[o.text], i = o.text);
    if (!(s + a < r.length)) throw new Error("Path data ended short");
    for (let l = s; l < s + a; l++) {
      const c = r[l];
      if (!sn(c, rn)) throw new Error("Param not a number: " + i + "," + c.text);
      n[n.length] = +c.text;
    }
    if (typeof so[i] != "number") throw new Error("Bad segment: " + i);
    {
      const l = { key: i, data: n };
      t.push(l), s += a, o = r[s], i === "M" && (i = "L"), i === "m" && (i = "l");
    }
  }
  return t;
}
function tm(e) {
  let t = 0, r = 0, i = 0, s = 0;
  const o = [];
  for (const { key: a, data: n } of e) switch (a) {
    case "M":
      o.push({ key: "M", data: [...n] }), [t, r] = n, [i, s] = n;
      break;
    case "m":
      t += n[0], r += n[1], o.push({ key: "M", data: [t, r] }), i = t, s = r;
      break;
    case "L":
      o.push({ key: "L", data: [...n] }), [t, r] = n;
      break;
    case "l":
      t += n[0], r += n[1], o.push({ key: "L", data: [t, r] });
      break;
    case "C":
      o.push({ key: "C", data: [...n] }), t = n[4], r = n[5];
      break;
    case "c": {
      const l = n.map(((c, h) => h % 2 ? c + r : c + t));
      o.push({ key: "C", data: l }), t = l[4], r = l[5];
      break;
    }
    case "Q":
      o.push({ key: "Q", data: [...n] }), t = n[2], r = n[3];
      break;
    case "q": {
      const l = n.map(((c, h) => h % 2 ? c + r : c + t));
      o.push({ key: "Q", data: l }), t = l[2], r = l[3];
      break;
    }
    case "A":
      o.push({ key: "A", data: [...n] }), t = n[5], r = n[6];
      break;
    case "a":
      t += n[5], r += n[6], o.push({ key: "A", data: [n[0], n[1], n[2], n[3], n[4], t, r] });
      break;
    case "H":
      o.push({ key: "H", data: [...n] }), t = n[0];
      break;
    case "h":
      t += n[0], o.push({ key: "H", data: [t] });
      break;
    case "V":
      o.push({ key: "V", data: [...n] }), r = n[0];
      break;
    case "v":
      r += n[0], o.push({ key: "V", data: [r] });
      break;
    case "S":
      o.push({ key: "S", data: [...n] }), t = n[2], r = n[3];
      break;
    case "s": {
      const l = n.map(((c, h) => h % 2 ? c + r : c + t));
      o.push({ key: "S", data: l }), t = l[2], r = l[3];
      break;
    }
    case "T":
      o.push({ key: "T", data: [...n] }), t = n[0], r = n[1];
      break;
    case "t":
      t += n[0], r += n[1], o.push({ key: "T", data: [t, r] });
      break;
    case "Z":
    case "z":
      o.push({ key: "Z", data: [] }), t = i, r = s;
  }
  return o;
}
function em(e) {
  const t = [];
  let r = "", i = 0, s = 0, o = 0, a = 0, n = 0, l = 0;
  for (const { key: c, data: h } of e) {
    switch (c) {
      case "M":
        t.push({ key: "M", data: [...h] }), [i, s] = h, [o, a] = h;
        break;
      case "C":
        t.push({ key: "C", data: [...h] }), i = h[4], s = h[5], n = h[2], l = h[3];
        break;
      case "L":
        t.push({ key: "L", data: [...h] }), [i, s] = h;
        break;
      case "H":
        i = h[0], t.push({ key: "L", data: [i, s] });
        break;
      case "V":
        s = h[0], t.push({ key: "L", data: [i, s] });
        break;
      case "S": {
        let d = 0, f = 0;
        r === "C" || r === "S" ? (d = i + (i - n), f = s + (s - l)) : (d = i, f = s), t.push({ key: "C", data: [d, f, ...h] }), n = h[0], l = h[1], i = h[2], s = h[3];
        break;
      }
      case "T": {
        const [d, f] = h;
        let u = 0, p = 0;
        r === "Q" || r === "T" ? (u = i + (i - n), p = s + (s - l)) : (u = i, p = s);
        const m = i + 2 * (u - i) / 3, y = s + 2 * (p - s) / 3, x = d + 2 * (u - d) / 3, C = f + 2 * (p - f) / 3;
        t.push({ key: "C", data: [m, y, x, C, d, f] }), n = u, l = p, i = d, s = f;
        break;
      }
      case "Q": {
        const [d, f, u, p] = h, m = i + 2 * (d - i) / 3, y = s + 2 * (f - s) / 3, x = u + 2 * (d - u) / 3, C = p + 2 * (f - p) / 3;
        t.push({ key: "C", data: [m, y, x, C, u, p] }), n = d, l = f, i = u, s = p;
        break;
      }
      case "A": {
        const d = Math.abs(h[0]), f = Math.abs(h[1]), u = h[2], p = h[3], m = h[4], y = h[5], x = h[6];
        d === 0 || f === 0 ? (t.push({ key: "C", data: [i, s, y, x, y, x] }), i = y, s = x) : (i !== y || s !== x) && (rm(i, s, y, x, d, f, u, p, m).forEach((function(C) {
          t.push({ key: "C", data: C });
        })), i = y, s = x);
        break;
      }
      case "Z":
        t.push({ key: "Z", data: [] }), i = o, s = a;
    }
    r = c;
  }
  return t;
}
function Qi(e, t, r) {
  return [e * Math.cos(r) - t * Math.sin(r), e * Math.sin(r) + t * Math.cos(r)];
}
function rm(e, t, r, i, s, o, a, n, l, c) {
  const h = (d = a, Math.PI * d / 180);
  var d;
  let f = [], u = 0, p = 0, m = 0, y = 0;
  if (c) [u, p, m, y] = c;
  else {
    [e, t] = Qi(e, t, -h), [r, i] = Qi(r, i, -h);
    const W = (e - r) / 2, R = (t - i) / 2;
    let M = W * W / (s * s) + R * R / (o * o);
    M > 1 && (M = Math.sqrt(M), s *= M, o *= M);
    const E = s * s, B = o * o, F = E * B - E * R * R - B * W * W, z = E * R * R + B * W * W, Y = (n === l ? -1 : 1) * Math.sqrt(Math.abs(F / z));
    m = Y * s * R / o + (e + r) / 2, y = Y * -o * W / s + (t + i) / 2, u = Math.asin(parseFloat(((t - y) / o).toFixed(9))), p = Math.asin(parseFloat(((i - y) / o).toFixed(9))), e < m && (u = Math.PI - u), r < m && (p = Math.PI - p), u < 0 && (u = 2 * Math.PI + u), p < 0 && (p = 2 * Math.PI + p), l && u > p && (u -= 2 * Math.PI), !l && p > u && (p -= 2 * Math.PI);
  }
  let x = p - u;
  if (Math.abs(x) > 120 * Math.PI / 180) {
    const W = p, R = r, M = i;
    p = l && p > u ? u + 120 * Math.PI / 180 * 1 : u + 120 * Math.PI / 180 * -1, f = rm(r = m + s * Math.cos(p), i = y + o * Math.sin(p), R, M, s, o, a, 0, l, [p, W, m, y]);
  }
  x = p - u;
  const C = Math.cos(u), k = Math.sin(u), T = Math.cos(p), w = Math.sin(p), _ = Math.tan(x / 4), A = 4 / 3 * s * _, v = 4 / 3 * o * _, N = [e, t], O = [e + A * k, t - v * C], P = [r + A * w, i - v * T], H = [r, i];
  if (O[0] = 2 * N[0] - O[0], O[1] = 2 * N[1] - O[1], c) return [O, P, H].concat(f);
  {
    f = [O, P, H].concat(f);
    const W = [];
    for (let R = 0; R < f.length; R += 3) {
      const M = Qi(f[R][0], f[R][1], h), E = Qi(f[R + 1][0], f[R + 1][1], h), B = Qi(f[R + 2][0], f[R + 2][1], h);
      W.push([M[0], M[1], E[0], E[1], B[0], B[1]]);
    }
    return W;
  }
}
const q_ = { randOffset: function(e, t) {
  return ot(e, t);
}, randOffsetWithRange: function(e, t, r) {
  return Ko(e, t, r);
}, ellipse: function(e, t, r, i, s) {
  const o = sm(r, i, s);
  return sl(e, t, s, o).opset;
}, doubleLineOps: function(e, t, r, i, s) {
  return yr(e, t, r, i, s, !0);
} };
function im(e, t, r, i, s) {
  return { type: "path", ops: yr(e, t, r, i, s) };
}
function ko(e, t, r) {
  const i = (e || []).length;
  if (i > 2) {
    const s = [];
    for (let o = 0; o < i - 1; o++) s.push(...yr(e[o][0], e[o][1], e[o + 1][0], e[o + 1][1], r));
    return t && s.push(...yr(e[i - 1][0], e[i - 1][1], e[0][0], e[0][1], r)), { type: "path", ops: s };
  }
  return i === 2 ? im(e[0][0], e[0][1], e[1][0], e[1][1], r) : { type: "path", ops: [] };
}
function W_(e, t, r, i, s) {
  return (function(o, a) {
    return ko(o, !0, a);
  })([[e, t], [e + r, t], [e + r, t + i], [e, t + i]], s);
}
function dd(e, t) {
  if (e.length) {
    const r = typeof e[0][0] == "number" ? [e] : e, i = oo(r[0], 1 * (1 + 0.2 * t.roughness), t), s = t.disableMultiStroke ? [] : oo(r[0], 1.5 * (1 + 0.22 * t.roughness), pd(t));
    for (let o = 1; o < r.length; o++) {
      const a = r[o];
      if (a.length) {
        const n = oo(a, 1 * (1 + 0.2 * t.roughness), t), l = t.disableMultiStroke ? [] : oo(a, 1.5 * (1 + 0.22 * t.roughness), pd(t));
        for (const c of n) c.op !== "move" && i.push(c);
        for (const c of l) c.op !== "move" && s.push(c);
      }
    }
    return { type: "path", ops: i.concat(s) };
  }
  return { type: "path", ops: [] };
}
function sm(e, t, r) {
  const i = Math.sqrt(2 * Math.PI * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), s = Math.ceil(Math.max(r.curveStepCount, r.curveStepCount / Math.sqrt(200) * i)), o = 2 * Math.PI / s;
  let a = Math.abs(e / 2), n = Math.abs(t / 2);
  const l = 1 - r.curveFitting;
  return a += ot(a * l, r), n += ot(n * l, r), { increment: o, rx: a, ry: n };
}
function sl(e, t, r, i) {
  const [s, o] = gd(i.increment, e, t, i.rx, i.ry, 1, i.increment * Ko(0.1, Ko(0.4, 1, r), r), r);
  let a = Qo(s, null, r);
  if (!r.disableMultiStroke && r.roughness !== 0) {
    const [n] = gd(i.increment, e, t, i.rx, i.ry, 1.5, 0, r), l = Qo(n, null, r);
    a = a.concat(l);
  }
  return { estimatedPoints: o, opset: { type: "path", ops: a } };
}
function ud(e, t, r, i, s, o, a, n, l) {
  const c = e, h = t;
  let d = Math.abs(r / 2), f = Math.abs(i / 2);
  d += ot(0.01 * d, l), f += ot(0.01 * f, l);
  let u = s, p = o;
  for (; u < 0; ) u += 2 * Math.PI, p += 2 * Math.PI;
  p - u > 2 * Math.PI && (u = 0, p = 2 * Math.PI);
  const m = 2 * Math.PI / l.curveStepCount, y = Math.min(m / 2, (p - u) / 2), x = md(y, c, h, d, f, u, p, 1, l);
  if (!l.disableMultiStroke) {
    const C = md(y, c, h, d, f, u, p, 1.5, l);
    x.push(...C);
  }
  return a && (n ? x.push(...yr(c, h, c + d * Math.cos(u), h + f * Math.sin(u), l), ...yr(c, h, c + d * Math.cos(p), h + f * Math.sin(p), l)) : x.push({ op: "lineTo", data: [c, h] }, { op: "lineTo", data: [c + d * Math.cos(u), h + f * Math.sin(u)] })), { type: "path", ops: x };
}
function fd(e, t) {
  const r = em(tm(xh(e))), i = [];
  let s = [0, 0], o = [0, 0];
  for (const { key: a, data: n } of r) switch (a) {
    case "M":
      o = [n[0], n[1]], s = [n[0], n[1]];
      break;
    case "L":
      i.push(...yr(o[0], o[1], n[0], n[1], t)), o = [n[0], n[1]];
      break;
    case "C": {
      const [l, c, h, d, f, u] = n;
      i.push(...z_(l, c, h, d, f, u, o, t)), o = [f, u];
      break;
    }
    case "Z":
      i.push(...yr(o[0], o[1], s[0], s[1], t)), o = [s[0], s[1]];
  }
  return { type: "path", ops: i };
}
function on(e, t) {
  const r = [];
  for (const i of e) if (i.length) {
    const s = t.maxRandomnessOffset || 0, o = i.length;
    if (o > 2) {
      r.push({ op: "move", data: [i[0][0] + ot(s, t), i[0][1] + ot(s, t)] });
      for (let a = 1; a < o; a++) r.push({ op: "lineTo", data: [i[a][0] + ot(s, t), i[a][1] + ot(s, t)] });
    }
  }
  return { type: "fillPath", ops: r };
}
function ti(e, t) {
  return (function(r, i) {
    let s = r.fillStyle || "hachure";
    if (!se[s]) switch (s) {
      case "zigzag":
        se[s] || (se[s] = new $_(i));
        break;
      case "cross-hatch":
        se[s] || (se[s] = new O_(i));
        break;
      case "dots":
        se[s] || (se[s] = new I_(i));
        break;
      case "dashed":
        se[s] || (se[s] = new D_(i));
        break;
      case "zigzag-line":
        se[s] || (se[s] = new R_(i));
        break;
      default:
        s = "hachure", se[s] || (se[s] = new yh(i));
    }
    return se[s];
  })(t, q_).fillPolygons(e, t);
}
function pd(e) {
  const t = Object.assign({}, e);
  return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function om(e) {
  return e.randomizer || (e.randomizer = new P_(e.seed || 0)), e.randomizer.next();
}
function Ko(e, t, r, i = 1) {
  return r.roughness * i * (om(r) * (t - e) + e);
}
function ot(e, t, r = 1) {
  return Ko(-e, e, t, r);
}
function yr(e, t, r, i, s, o = !1) {
  const a = o ? s.disableMultiStrokeFill : s.disableMultiStroke, n = ol(e, t, r, i, s, !0, !1);
  if (a) return n;
  const l = ol(e, t, r, i, s, !0, !0);
  return n.concat(l);
}
function ol(e, t, r, i, s, o, a) {
  const n = Math.pow(e - r, 2) + Math.pow(t - i, 2), l = Math.sqrt(n);
  let c = 1;
  c = l < 200 ? 1 : l > 500 ? 0.4 : -16668e-7 * l + 1.233334;
  let h = s.maxRandomnessOffset || 0;
  h * h * 100 > n && (h = l / 10);
  const d = h / 2, f = 0.2 + 0.2 * om(s);
  let u = s.bowing * s.maxRandomnessOffset * (i - t) / 200, p = s.bowing * s.maxRandomnessOffset * (e - r) / 200;
  u = ot(u, s, c), p = ot(p, s, c);
  const m = [], y = () => ot(d, s, c), x = () => ot(h, s, c), C = s.preserveVertices;
  return a ? m.push({ op: "move", data: [e + (C ? 0 : y()), t + (C ? 0 : y())] }) : m.push({ op: "move", data: [e + (C ? 0 : ot(h, s, c)), t + (C ? 0 : ot(h, s, c))] }), a ? m.push({ op: "bcurveTo", data: [u + e + (r - e) * f + y(), p + t + (i - t) * f + y(), u + e + 2 * (r - e) * f + y(), p + t + 2 * (i - t) * f + y(), r + (C ? 0 : y()), i + (C ? 0 : y())] }) : m.push({ op: "bcurveTo", data: [u + e + (r - e) * f + x(), p + t + (i - t) * f + x(), u + e + 2 * (r - e) * f + x(), p + t + 2 * (i - t) * f + x(), r + (C ? 0 : x()), i + (C ? 0 : x())] }), m;
}
function oo(e, t, r) {
  if (!e.length) return [];
  const i = [];
  i.push([e[0][0] + ot(t, r), e[0][1] + ot(t, r)]), i.push([e[0][0] + ot(t, r), e[0][1] + ot(t, r)]);
  for (let s = 1; s < e.length; s++) i.push([e[s][0] + ot(t, r), e[s][1] + ot(t, r)]), s === e.length - 1 && i.push([e[s][0] + ot(t, r), e[s][1] + ot(t, r)]);
  return Qo(i, null, r);
}
function Qo(e, t, r) {
  const i = e.length, s = [];
  if (i > 3) {
    const o = [], a = 1 - r.curveTightness;
    s.push({ op: "move", data: [e[1][0], e[1][1]] });
    for (let n = 1; n + 2 < i; n++) {
      const l = e[n];
      o[0] = [l[0], l[1]], o[1] = [l[0] + (a * e[n + 1][0] - a * e[n - 1][0]) / 6, l[1] + (a * e[n + 1][1] - a * e[n - 1][1]) / 6], o[2] = [e[n + 1][0] + (a * e[n][0] - a * e[n + 2][0]) / 6, e[n + 1][1] + (a * e[n][1] - a * e[n + 2][1]) / 6], o[3] = [e[n + 1][0], e[n + 1][1]], s.push({ op: "bcurveTo", data: [o[1][0], o[1][1], o[2][0], o[2][1], o[3][0], o[3][1]] });
    }
  } else i === 3 ? (s.push({ op: "move", data: [e[1][0], e[1][1]] }), s.push({ op: "bcurveTo", data: [e[1][0], e[1][1], e[2][0], e[2][1], e[2][0], e[2][1]] })) : i === 2 && s.push(...ol(e[0][0], e[0][1], e[1][0], e[1][1], r, !0, !0));
  return s;
}
function gd(e, t, r, i, s, o, a, n) {
  const l = [], c = [];
  if (n.roughness === 0) {
    e /= 4, c.push([t + i * Math.cos(-e), r + s * Math.sin(-e)]);
    for (let h = 0; h <= 2 * Math.PI; h += e) {
      const d = [t + i * Math.cos(h), r + s * Math.sin(h)];
      l.push(d), c.push(d);
    }
    c.push([t + i * Math.cos(0), r + s * Math.sin(0)]), c.push([t + i * Math.cos(e), r + s * Math.sin(e)]);
  } else {
    const h = ot(0.5, n) - Math.PI / 2;
    c.push([ot(o, n) + t + 0.9 * i * Math.cos(h - e), ot(o, n) + r + 0.9 * s * Math.sin(h - e)]);
    const d = 2 * Math.PI + h - 0.01;
    for (let f = h; f < d; f += e) {
      const u = [ot(o, n) + t + i * Math.cos(f), ot(o, n) + r + s * Math.sin(f)];
      l.push(u), c.push(u);
    }
    c.push([ot(o, n) + t + i * Math.cos(h + 2 * Math.PI + 0.5 * a), ot(o, n) + r + s * Math.sin(h + 2 * Math.PI + 0.5 * a)]), c.push([ot(o, n) + t + 0.98 * i * Math.cos(h + a), ot(o, n) + r + 0.98 * s * Math.sin(h + a)]), c.push([ot(o, n) + t + 0.9 * i * Math.cos(h + 0.5 * a), ot(o, n) + r + 0.9 * s * Math.sin(h + 0.5 * a)]);
  }
  return [c, l];
}
function md(e, t, r, i, s, o, a, n, l) {
  const c = o + ot(0.1, l), h = [];
  h.push([ot(n, l) + t + 0.9 * i * Math.cos(c - e), ot(n, l) + r + 0.9 * s * Math.sin(c - e)]);
  for (let d = c; d <= a; d += e) h.push([ot(n, l) + t + i * Math.cos(d), ot(n, l) + r + s * Math.sin(d)]);
  return h.push([t + i * Math.cos(a), r + s * Math.sin(a)]), h.push([t + i * Math.cos(a), r + s * Math.sin(a)]), Qo(h, null, l);
}
function z_(e, t, r, i, s, o, a, n) {
  const l = [], c = [n.maxRandomnessOffset || 1, (n.maxRandomnessOffset || 1) + 0.3];
  let h = [0, 0];
  const d = n.disableMultiStroke ? 1 : 2, f = n.preserveVertices;
  for (let u = 0; u < d; u++) u === 0 ? l.push({ op: "move", data: [a[0], a[1]] }) : l.push({ op: "move", data: [a[0] + (f ? 0 : ot(c[0], n)), a[1] + (f ? 0 : ot(c[0], n))] }), h = f ? [s, o] : [s + ot(c[u], n), o + ot(c[u], n)], l.push({ op: "bcurveTo", data: [e + ot(c[u], n), t + ot(c[u], n), r + ot(c[u], n), i + ot(c[u], n), h[0], h[1]] });
  return l;
}
function Ji(e) {
  return [...e];
}
function yd(e, t = 0) {
  const r = e.length;
  if (r < 3) throw new Error("A curve must have at least three points.");
  const i = [];
  if (r === 3) i.push(Ji(e[0]), Ji(e[1]), Ji(e[2]), Ji(e[2]));
  else {
    const s = [];
    s.push(e[0], e[0]);
    for (let n = 1; n < e.length; n++) s.push(e[n]), n === e.length - 1 && s.push(e[n]);
    const o = [], a = 1 - t;
    i.push(Ji(s[0]));
    for (let n = 1; n + 2 < s.length; n++) {
      const l = s[n];
      o[0] = [l[0], l[1]], o[1] = [l[0] + (a * s[n + 1][0] - a * s[n - 1][0]) / 6, l[1] + (a * s[n + 1][1] - a * s[n - 1][1]) / 6], o[2] = [s[n + 1][0] + (a * s[n][0] - a * s[n + 2][0]) / 6, s[n + 1][1] + (a * s[n][1] - a * s[n + 2][1]) / 6], o[3] = [s[n + 1][0], s[n + 1][1]], i.push(o[1], o[2], o[3]);
    }
  }
  return i;
}
function So(e, t) {
  return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
}
function H_(e, t, r) {
  const i = So(t, r);
  if (i === 0) return So(e, t);
  let s = ((e[0] - t[0]) * (r[0] - t[0]) + (e[1] - t[1]) * (r[1] - t[1])) / i;
  return s = Math.max(0, Math.min(1, s)), So(e, Br(t, r, s));
}
function Br(e, t, r) {
  return [e[0] + (t[0] - e[0]) * r, e[1] + (t[1] - e[1]) * r];
}
function al(e, t, r, i) {
  const s = i || [];
  if ((function(n, l) {
    const c = n[l + 0], h = n[l + 1], d = n[l + 2], f = n[l + 3];
    let u = 3 * h[0] - 2 * c[0] - f[0];
    u *= u;
    let p = 3 * h[1] - 2 * c[1] - f[1];
    p *= p;
    let m = 3 * d[0] - 2 * f[0] - c[0];
    m *= m;
    let y = 3 * d[1] - 2 * f[1] - c[1];
    return y *= y, u < m && (u = m), p < y && (p = y), u + p;
  })(e, t) < r) {
    const n = e[t + 0];
    s.length ? (o = s[s.length - 1], a = n, Math.sqrt(So(o, a)) > 1 && s.push(n)) : s.push(n), s.push(e[t + 3]);
  } else {
    const l = e[t + 0], c = e[t + 1], h = e[t + 2], d = e[t + 3], f = Br(l, c, 0.5), u = Br(c, h, 0.5), p = Br(h, d, 0.5), m = Br(f, u, 0.5), y = Br(u, p, 0.5), x = Br(m, y, 0.5);
    al([l, f, m, x], 0, r, s), al([x, y, p, d], 0, r, s);
  }
  var o, a;
  return s;
}
function Y_(e, t) {
  return Jo(e, 0, e.length, t);
}
function Jo(e, t, r, i, s) {
  const o = s || [], a = e[t], n = e[r - 1];
  let l = 0, c = 1;
  for (let h = t + 1; h < r - 1; ++h) {
    const d = H_(e[h], a, n);
    d > l && (l = d, c = h);
  }
  return Math.sqrt(l) > i ? (Jo(e, t, c + 1, i, o), Jo(e, c, r, i, o)) : (o.length || o.push(a), o.push(n)), o;
}
function an(e, t = 0.15, r) {
  const i = [], s = (e.length - 1) / 3;
  for (let o = 0; o < s; o++)
    al(e, 3 * o, t, i);
  return r && r > 0 ? Jo(i, 0, i.length, r) : i;
}
const he = "none";
class ta {
  constructor(t) {
    this.defaultOptions = { maxRandomnessOffset: 2, roughness: 1, bowing: 1, stroke: "#000", strokeWidth: 1, curveTightness: 0, curveFitting: 0.95, curveStepCount: 9, fillStyle: "hachure", fillWeight: -1, hachureAngle: -41, hachureGap: -1, dashOffset: -1, dashGap: -1, zigzagOffset: -1, seed: 0, disableMultiStroke: !1, disableMultiStrokeFill: !1, preserveVertices: !1, fillShapeRoughnessGain: 0.8 }, this.config = t || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
  }
  static newSeed() {
    return Math.floor(Math.random() * 2 ** 31);
  }
  _o(t) {
    return t ? Object.assign({}, this.defaultOptions, t) : this.defaultOptions;
  }
  _d(t, r, i) {
    return { shape: t, sets: r || [], options: i || this.defaultOptions };
  }
  line(t, r, i, s, o) {
    const a = this._o(o);
    return this._d("line", [im(t, r, i, s, a)], a);
  }
  rectangle(t, r, i, s, o) {
    const a = this._o(o), n = [], l = W_(t, r, i, s, a);
    if (a.fill) {
      const c = [[t, r], [t + i, r], [t + i, r + s], [t, r + s]];
      a.fillStyle === "solid" ? n.push(on([c], a)) : n.push(ti([c], a));
    }
    return a.stroke !== he && n.push(l), this._d("rectangle", n, a);
  }
  ellipse(t, r, i, s, o) {
    const a = this._o(o), n = [], l = sm(i, s, a), c = sl(t, r, a, l);
    if (a.fill) if (a.fillStyle === "solid") {
      const h = sl(t, r, a, l).opset;
      h.type = "fillPath", n.push(h);
    } else n.push(ti([c.estimatedPoints], a));
    return a.stroke !== he && n.push(c.opset), this._d("ellipse", n, a);
  }
  circle(t, r, i, s) {
    const o = this.ellipse(t, r, i, i, s);
    return o.shape = "circle", o;
  }
  linearPath(t, r) {
    const i = this._o(r);
    return this._d("linearPath", [ko(t, !1, i)], i);
  }
  arc(t, r, i, s, o, a, n = !1, l) {
    const c = this._o(l), h = [], d = ud(t, r, i, s, o, a, n, !0, c);
    if (n && c.fill) if (c.fillStyle === "solid") {
      const f = Object.assign({}, c);
      f.disableMultiStroke = !0;
      const u = ud(t, r, i, s, o, a, !0, !1, f);
      u.type = "fillPath", h.push(u);
    } else h.push((function(f, u, p, m, y, x, C) {
      const k = f, T = u;
      let w = Math.abs(p / 2), _ = Math.abs(m / 2);
      w += ot(0.01 * w, C), _ += ot(0.01 * _, C);
      let A = y, v = x;
      for (; A < 0; ) A += 2 * Math.PI, v += 2 * Math.PI;
      v - A > 2 * Math.PI && (A = 0, v = 2 * Math.PI);
      const N = (v - A) / C.curveStepCount, O = [];
      for (let P = A; P <= v; P += N) O.push([k + w * Math.cos(P), T + _ * Math.sin(P)]);
      return O.push([k + w * Math.cos(v), T + _ * Math.sin(v)]), O.push([k, T]), ti([O], C);
    })(t, r, i, s, o, a, c));
    return c.stroke !== he && h.push(d), this._d("arc", h, c);
  }
  curve(t, r) {
    const i = this._o(r), s = [], o = dd(t, i);
    if (i.fill && i.fill !== he) if (i.fillStyle === "solid") {
      const a = dd(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      s.push({ type: "fillPath", ops: this._mergedShape(a.ops) });
    } else {
      const a = [], n = t;
      if (n.length) {
        const l = typeof n[0][0] == "number" ? [n] : n;
        for (const c of l) c.length < 3 ? a.push(...c) : c.length === 3 ? a.push(...an(yd([c[0], c[0], c[1], c[2]]), 10, (1 + i.roughness) / 2)) : a.push(...an(yd(c), 10, (1 + i.roughness) / 2));
      }
      a.length && s.push(ti([a], i));
    }
    return i.stroke !== he && s.push(o), this._d("curve", s, i);
  }
  polygon(t, r) {
    const i = this._o(r), s = [], o = ko(t, !0, i);
    return i.fill && (i.fillStyle === "solid" ? s.push(on([t], i)) : s.push(ti([t], i))), i.stroke !== he && s.push(o), this._d("polygon", s, i);
  }
  path(t, r) {
    const i = this._o(r), s = [];
    if (!t) return this._d("path", s, i);
    t = (t || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
    const o = i.fill && i.fill !== "transparent" && i.fill !== he, a = i.stroke !== he, n = !!(i.simplification && i.simplification < 1), l = (function(h, d, f) {
      const u = em(tm(xh(h))), p = [];
      let m = [], y = [0, 0], x = [];
      const C = () => {
        x.length >= 4 && m.push(...an(x, d)), x = [];
      }, k = () => {
        C(), m.length && (p.push(m), m = []);
      };
      for (const { key: w, data: _ } of u) switch (w) {
        case "M":
          k(), y = [_[0], _[1]], m.push(y);
          break;
        case "L":
          C(), m.push([_[0], _[1]]);
          break;
        case "C":
          if (!x.length) {
            const A = m.length ? m[m.length - 1] : y;
            x.push([A[0], A[1]]);
          }
          x.push([_[0], _[1]]), x.push([_[2], _[3]]), x.push([_[4], _[5]]);
          break;
        case "Z":
          C(), m.push([y[0], y[1]]);
      }
      if (k(), !f) return p;
      const T = [];
      for (const w of p) {
        const _ = Y_(w, f);
        _.length && T.push(_);
      }
      return T;
    })(t, 1, n ? 4 - 4 * (i.simplification || 1) : (1 + i.roughness) / 2), c = fd(t, i);
    if (o) if (i.fillStyle === "solid") if (l.length === 1) {
      const h = fd(t, Object.assign(Object.assign({}, i), { disableMultiStroke: !0, roughness: i.roughness ? i.roughness + i.fillShapeRoughnessGain : 0 }));
      s.push({ type: "fillPath", ops: this._mergedShape(h.ops) });
    } else s.push(on(l, i));
    else s.push(ti(l, i));
    return a && (n ? l.forEach(((h) => {
      s.push(ko(h, !1, i));
    })) : s.push(c)), this._d("path", s, i);
  }
  opsToPath(t, r) {
    let i = "";
    for (const s of t.ops) {
      const o = typeof r == "number" && r >= 0 ? s.data.map(((a) => +a.toFixed(r))) : s.data;
      switch (s.op) {
        case "move":
          i += `M${o[0]} ${o[1]} `;
          break;
        case "bcurveTo":
          i += `C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;
          break;
        case "lineTo":
          i += `L${o[0]} ${o[1]} `;
      }
    }
    return i.trim();
  }
  toPaths(t) {
    const r = t.sets || [], i = t.options || this.defaultOptions, s = [];
    for (const o of r) {
      let a = null;
      switch (o.type) {
        case "path":
          a = { d: this.opsToPath(o), stroke: i.stroke, strokeWidth: i.strokeWidth, fill: he };
          break;
        case "fillPath":
          a = { d: this.opsToPath(o), stroke: he, strokeWidth: 0, fill: i.fill || he };
          break;
        case "fillSketch":
          a = this.fillSketch(o, i);
      }
      a && s.push(a);
    }
    return s;
  }
  fillSketch(t, r) {
    let i = r.fillWeight;
    return i < 0 && (i = r.strokeWidth / 2), { d: this.opsToPath(t), stroke: r.fill || he, strokeWidth: i, fill: he };
  }
  _mergedShape(t) {
    return t.filter(((r, i) => i === 0 || r.op !== "move"));
  }
}
class U_ {
  constructor(t, r) {
    this.canvas = t, this.ctx = this.canvas.getContext("2d"), this.gen = new ta(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), s = this.ctx, o = t.options.fixedDecimalPlaceDigits;
    for (const a of r) switch (a.type) {
      case "path":
        s.save(), s.strokeStyle = i.stroke === "none" ? "transparent" : i.stroke, s.lineWidth = i.strokeWidth, i.strokeLineDash && s.setLineDash(i.strokeLineDash), i.strokeLineDashOffset && (s.lineDashOffset = i.strokeLineDashOffset), this._drawToContext(s, a, o), s.restore();
        break;
      case "fillPath": {
        s.save(), s.fillStyle = i.fill || "";
        const n = t.shape === "curve" || t.shape === "polygon" || t.shape === "path" ? "evenodd" : "nonzero";
        this._drawToContext(s, a, o, n), s.restore();
        break;
      }
      case "fillSketch":
        this.fillSketch(s, a, i);
    }
  }
  fillSketch(t, r, i) {
    let s = i.fillWeight;
    s < 0 && (s = i.strokeWidth / 2), t.save(), i.fillLineDash && t.setLineDash(i.fillLineDash), i.fillLineDashOffset && (t.lineDashOffset = i.fillLineDashOffset), t.strokeStyle = i.fill || "", t.lineWidth = s, this._drawToContext(t, r, i.fixedDecimalPlaceDigits), t.restore();
  }
  _drawToContext(t, r, i, s = "nonzero") {
    t.beginPath();
    for (const o of r.ops) {
      const a = typeof i == "number" && i >= 0 ? o.data.map(((n) => +n.toFixed(i))) : o.data;
      switch (o.op) {
        case "move":
          t.moveTo(a[0], a[1]);
          break;
        case "bcurveTo":
          t.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
          break;
        case "lineTo":
          t.lineTo(a[0], a[1]);
      }
    }
    r.type === "fillPath" ? t.fill(s) : t.stroke();
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  line(t, r, i, s, o) {
    const a = this.gen.line(t, r, i, s, o);
    return this.draw(a), a;
  }
  rectangle(t, r, i, s, o) {
    const a = this.gen.rectangle(t, r, i, s, o);
    return this.draw(a), a;
  }
  ellipse(t, r, i, s, o) {
    const a = this.gen.ellipse(t, r, i, s, o);
    return this.draw(a), a;
  }
  circle(t, r, i, s) {
    const o = this.gen.circle(t, r, i, s);
    return this.draw(o), o;
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i), i;
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i), i;
  }
  arc(t, r, i, s, o, a, n = !1, l) {
    const c = this.gen.arc(t, r, i, s, o, a, n, l);
    return this.draw(c), c;
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i), i;
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i), i;
  }
}
const ao = "http://www.w3.org/2000/svg";
class X_ {
  constructor(t, r) {
    this.svg = t, this.gen = new ta(r);
  }
  draw(t) {
    const r = t.sets || [], i = t.options || this.getDefaultOptions(), s = this.svg.ownerDocument || window.document, o = s.createElementNS(ao, "g"), a = t.options.fixedDecimalPlaceDigits;
    for (const n of r) {
      let l = null;
      switch (n.type) {
        case "path":
          l = s.createElementNS(ao, "path"), l.setAttribute("d", this.opsToPath(n, a)), l.setAttribute("stroke", i.stroke), l.setAttribute("stroke-width", i.strokeWidth + ""), l.setAttribute("fill", "none"), i.strokeLineDash && l.setAttribute("stroke-dasharray", i.strokeLineDash.join(" ").trim()), i.strokeLineDashOffset && l.setAttribute("stroke-dashoffset", `${i.strokeLineDashOffset}`);
          break;
        case "fillPath":
          l = s.createElementNS(ao, "path"), l.setAttribute("d", this.opsToPath(n, a)), l.setAttribute("stroke", "none"), l.setAttribute("stroke-width", "0"), l.setAttribute("fill", i.fill || ""), t.shape !== "curve" && t.shape !== "polygon" || l.setAttribute("fill-rule", "evenodd");
          break;
        case "fillSketch":
          l = this.fillSketch(s, n, i);
      }
      l && o.appendChild(l);
    }
    return o;
  }
  fillSketch(t, r, i) {
    let s = i.fillWeight;
    s < 0 && (s = i.strokeWidth / 2);
    const o = t.createElementNS(ao, "path");
    return o.setAttribute("d", this.opsToPath(r, i.fixedDecimalPlaceDigits)), o.setAttribute("stroke", i.fill || ""), o.setAttribute("stroke-width", s + ""), o.setAttribute("fill", "none"), i.fillLineDash && o.setAttribute("stroke-dasharray", i.fillLineDash.join(" ").trim()), i.fillLineDashOffset && o.setAttribute("stroke-dashoffset", `${i.fillLineDashOffset}`), o;
  }
  get generator() {
    return this.gen;
  }
  getDefaultOptions() {
    return this.gen.defaultOptions;
  }
  opsToPath(t, r) {
    return this.gen.opsToPath(t, r);
  }
  line(t, r, i, s, o) {
    const a = this.gen.line(t, r, i, s, o);
    return this.draw(a);
  }
  rectangle(t, r, i, s, o) {
    const a = this.gen.rectangle(t, r, i, s, o);
    return this.draw(a);
  }
  ellipse(t, r, i, s, o) {
    const a = this.gen.ellipse(t, r, i, s, o);
    return this.draw(a);
  }
  circle(t, r, i, s) {
    const o = this.gen.circle(t, r, i, s);
    return this.draw(o);
  }
  linearPath(t, r) {
    const i = this.gen.linearPath(t, r);
    return this.draw(i);
  }
  polygon(t, r) {
    const i = this.gen.polygon(t, r);
    return this.draw(i);
  }
  arc(t, r, i, s, o, a, n = !1, l) {
    const c = this.gen.arc(t, r, i, s, o, a, n, l);
    return this.draw(c);
  }
  curve(t, r) {
    const i = this.gen.curve(t, r);
    return this.draw(i);
  }
  path(t, r) {
    const i = this.gen.path(t, r);
    return this.draw(i);
  }
}
var V = { canvas: (e, t) => new U_(e, t), svg: (e, t) => new X_(e, t), generator: (e) => new ta(e), newSeed: () => ta.newSeed() }, st = /* @__PURE__ */ g(async (e, t, r) => {
  let i;
  const s = t.useHtmlLabels || tr(bt()?.htmlLabels);
  r ? i = r : i = "node default";
  const o = e.insert("g").attr("class", i).attr("id", t.domId || t.id), a = o.insert("g").attr("class", "label").attr("style", Wt(t.labelStyle));
  let n;
  t.label === void 0 ? n = "" : n = typeof t.label == "string" ? t.label : t.label[0];
  const l = !!t.icon || !!t.img, c = t.labelType === "markdown", h = await er(
    a,
    ve(Wr(n), bt()),
    {
      useHtmlLabels: s,
      width: t.width || bt().flowchart?.wrappingWidth,
      classes: c ? "markdown-node-label" : "",
      style: t.labelStyle,
      addSvgBackground: l,
      markdown: c
    },
    bt()
  );
  let d = h.getBBox();
  const f = (t?.padding ?? 0) / 2;
  if (s) {
    const u = h.children[0], p = ut(h);
    await _g(u, n), d = u.getBoundingClientRect(), p.attr("width", d.width), p.attr("height", d.height);
  }
  return s ? a.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")") : a.attr("transform", "translate(0, " + -d.height / 2 + ")"), t.centerLabel && a.attr("transform", "translate(" + -d.width / 2 + ", " + -d.height / 2 + ")"), a.insert("rect", ":first-child"), { shapeSvg: o, bbox: d, halfPadding: f, label: a };
}, "labelHelper"), nn = /* @__PURE__ */ g(async (e, t, r) => {
  const i = r.useHtmlLabels ?? ie(bt()), s = e.insert("g").attr("class", "label").attr("style", r.labelStyle || ""), o = await er(s, ve(Wr(t), bt()), {
    useHtmlLabels: i,
    width: r.width || bt()?.flowchart?.wrappingWidth,
    style: r.labelStyle,
    addSvgBackground: !!r.icon || !!r.img
  });
  let a = o.getBBox();
  const n = r.padding / 2;
  if (ie(bt())) {
    const l = o.children[0], c = ut(o);
    a = l.getBoundingClientRect(), c.attr("width", a.width), c.attr("height", a.height);
  }
  return i ? s.attr("transform", "translate(" + -a.width / 2 + ", " + -a.height / 2 + ")") : s.attr("transform", "translate(0, " + -a.height / 2 + ")"), r.centerLabel && s.attr("transform", "translate(" + -a.width / 2 + ", " + -a.height / 2 + ")"), s.insert("rect", ":first-child"), { shapeSvg: e, bbox: a, halfPadding: n, label: s };
}, "insertLabel"), Q = /* @__PURE__ */ g((e, t) => {
  const r = t.node().getBBox();
  e.width = r.width, e.height = r.height;
}, "updateNodeBounds"), et = /* @__PURE__ */ g((e, t) => (e.look === "handDrawn" ? "rough-node" : "node") + " " + e.cssClasses + " " + (t || ""), "getNodeClasses");
function mt(e) {
  const t = e.map((r, i) => `${i === 0 ? "M" : "L"}${r.x},${r.y}`);
  return t.push("Z"), t.join(" ");
}
g(mt, "createPathFromPoints");
function xr(e, t, r, i, s, o) {
  const a = [], l = r - e, c = i - t, h = l / o, d = 2 * Math.PI / h, f = t + c / 2;
  for (let u = 0; u <= 50; u++) {
    const p = u / 50, m = e + p * l, y = f + s * Math.sin(d * (m - e));
    a.push({ x: m, y });
  }
  return a;
}
g(xr, "generateFullSineWavePoints");
function Ls(e, t, r, i, s, o) {
  const a = [], n = s * Math.PI / 180, h = (o * Math.PI / 180 - n) / (i - 1);
  for (let d = 0; d < i; d++) {
    const f = n + d * h, u = e + r * Math.cos(f), p = t + r * Math.sin(f);
    a.push({ x: -u, y: -p });
  }
  return a;
}
g(Ls, "generateCirclePoints");
function nl(e) {
  const t = Array.from(e.childNodes).filter(
    (l) => l.tagName === "path"
  ), r = document.createElementNS("http://www.w3.org/2000/svg", "path"), i = t.map((l) => l.getAttribute("d")).filter((l) => l !== null).join(" ");
  r.setAttribute("d", i);
  const s = t.find((l) => l.getAttribute("fill") !== "none"), o = t.find((l) => l.getAttribute("stroke") !== "none"), a = /* @__PURE__ */ g((l, c) => l?.getAttribute(c) ?? void 0, "getAttr");
  if (s) {
    const l = {
      fill: a(s, "fill"),
      "fill-opacity": a(s, "fill-opacity") ?? "1"
    };
    Object.entries(l).forEach(([c, h]) => {
      h && r.setAttribute(c, h);
    });
  }
  if (o) {
    const l = {
      stroke: a(o, "stroke"),
      "stroke-width": a(o, "stroke-width") ?? "1",
      "stroke-opacity": a(o, "stroke-opacity") ?? "1"
    };
    Object.entries(l).forEach(([c, h]) => {
      h && r.setAttribute(c, h);
    });
  }
  const n = document.createElementNS("http://www.w3.org/2000/svg", "g");
  return n.appendChild(r), n;
}
g(nl, "mergePaths");
var G_ = /* @__PURE__ */ g((e, t) => {
  var r = e.x, i = e.y, s = t.x - r, o = t.y - i, a = e.width / 2, n = e.height / 2, l, c;
  return Math.abs(o) * a > Math.abs(s) * n ? (o < 0 && (n = -n), l = o === 0 ? 0 : n * s / o, c = n) : (s < 0 && (a = -a), l = a, c = s === 0 ? 0 : a * o / s), { x: r + l, y: i + c };
}, "intersectRect"), Ri = G_, j_ = /* @__PURE__ */ g(async (e, t, r, i = !1, s = !1) => {
  let o = t || "";
  typeof o == "object" && (o = o[0]);
  const a = bt(), n = ie(a);
  return await er(
    e,
    o,
    {
      style: r,
      isTitle: i,
      useHtmlLabels: n,
      markdown: !1,
      isNode: s,
      width: Number.POSITIVE_INFINITY
    },
    a
  );
}, "createLabel"), dr = j_, Cr = /* @__PURE__ */ g((e, t, r, i, s) => [
  "M",
  e + s,
  t,
  // Move to the first point
  "H",
  e + r - s,
  // Draw horizontal line to the beginning of the right corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e + r,
  t + s,
  // Draw arc to the right top corner
  "V",
  t + i - s,
  // Draw vertical line down to the beginning of the right bottom corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e + r - s,
  t + i,
  // Draw arc to the right bottom corner
  "H",
  e + s,
  // Draw horizontal line to the beginning of the left bottom corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e,
  t + i - s,
  // Draw arc to the left bottom corner
  "V",
  t + s,
  // Draw vertical line up to the beginning of the left top corner
  "A",
  s,
  s,
  0,
  0,
  1,
  e + s,
  t,
  // Draw arc to the left top corner
  "Z"
  // Close the path
].join(" "), "createRoundedRectPathD"), am = /* @__PURE__ */ g(async (e, t) => {
  q.info("Creating subgraph rect for ", t.id, t);
  const r = bt(), { themeVariables: i, handDrawnSeed: s } = r, { clusterBkg: o, clusterBorder: a } = i, { labelStyles: n, nodeStyles: l, borderStyles: c, backgroundStyles: h } = K(t), d = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.domId).attr("data-look", t.look), f = ie(r), u = d.insert("g").attr("class", "cluster-label ");
  let p;
  t.labelType === "markdown" ? p = await er(u, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0,
    width: t.width
  }) : p = await dr(u, t.label, t.labelStyle || "", !1, !0);
  let m = p.getBBox();
  if (ie(r)) {
    const A = p.children[0], v = ut(p);
    m = A.getBoundingClientRect(), v.attr("width", m.width), v.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const x = t.height, C = t.x - y / 2, k = t.y - x / 2;
  q.trace("Data ", t, JSON.stringify(t));
  let T;
  if (t.look === "handDrawn") {
    const A = V.svg(d), v = Z(t, {
      roughness: 0.7,
      fill: o,
      // fill: 'red',
      stroke: a,
      fillWeight: 3,
      seed: s
    }), N = A.path(Cr(C, k, y, x, 0), v);
    T = d.insert(() => (q.debug("Rough node insert CXC", N), N), ":first-child"), T.select("path:nth-child(2)").attr("style", c.join(";")), T.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    T = d.insert("rect", ":first-child"), T.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", C).attr("y", k).attr("width", y).attr("height", x);
  const { subGraphTitleTopMargin: w } = ah(r);
  if (u.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + w})`
  ), n) {
    const A = u.select("span");
    A && A.attr("style", n);
  }
  const _ = T.node().getBBox();
  return t.offsetX = 0, t.width = _.width, t.height = _.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(A) {
    return Ri(t, A);
  }, { cluster: d, labelBBox: m };
}, "rect"), V_ = /* @__PURE__ */ g((e, t) => {
  const r = e.insert("g").attr("class", "note-cluster").attr("id", t.domId), i = r.insert("rect", ":first-child"), s = 0 * t.padding, o = s / 2;
  i.attr("rx", t.rx).attr("ry", t.ry).attr("x", t.x - t.width / 2 - o).attr("y", t.y - t.height / 2 - o).attr("width", t.width + s).attr("height", t.height + s).attr("fill", "none");
  const a = i.node().getBBox();
  return t.width = a.width, t.height = a.height, t.intersect = function(n) {
    return Ri(t, n);
  }, { cluster: r, labelBBox: { width: 0, height: 0 } };
}, "noteGroup"), Z_ = /* @__PURE__ */ g(async (e, t) => {
  const r = bt(), { themeVariables: i, handDrawnSeed: s } = r, { altBackground: o, compositeBackground: a, compositeTitleBackground: n, nodeBorder: l } = i, c = e.insert("g").attr("class", t.cssClasses).attr("id", t.domId).attr("data-id", t.id).attr("data-look", t.look), h = c.insert("g", ":first-child"), d = c.insert("g").attr("class", "cluster-label");
  let f = c.append("rect");
  const u = await dr(d, t.label, t.labelStyle, void 0, !0);
  let p = u.getBBox();
  if (ie(r)) {
    const N = u.children[0], O = ut(u);
    p = N.getBoundingClientRect(), O.attr("width", p.width), O.attr("height", p.height);
  }
  const m = 0 * t.padding, y = m / 2, x = (t.width <= p.width + t.padding ? p.width + t.padding : t.width) + m;
  t.width <= p.width + t.padding ? t.diff = (x - t.width) / 2 - t.padding : t.diff = -t.padding;
  const C = t.height + m, k = t.height + m - p.height - 6, T = t.x - x / 2, w = t.y - C / 2;
  t.width = x;
  const _ = t.y - t.height / 2 - y + p.height + 2;
  let A;
  if (t.look === "handDrawn") {
    const N = t.cssClasses.includes("statediagram-cluster-alt"), O = V.svg(c), P = t.rx || t.ry ? O.path(Cr(T, w, x, C, 10), {
      roughness: 0.7,
      fill: n,
      fillStyle: "solid",
      stroke: l,
      seed: s
    }) : O.rectangle(T, w, x, C, { seed: s });
    A = c.insert(() => P, ":first-child");
    const H = O.rectangle(T, _, x, k, {
      fill: N ? o : a,
      fillStyle: N ? "hachure" : "solid",
      stroke: l,
      seed: s
    });
    A = c.insert(() => P, ":first-child"), f = c.insert(() => H);
  } else
    A = h.insert("rect", ":first-child"), A.attr("class", "outer").attr("x", T).attr("y", w).attr("width", x).attr("height", C).attr("data-look", t.look), f.attr("class", "inner").attr("x", T).attr("y", _).attr("width", x).attr("height", k);
  d.attr(
    "transform",
    `translate(${t.x - p.width / 2}, ${w + 1 - (ie(r) ? 0 : 3)})`
  );
  const v = A.node().getBBox();
  return t.height = v.height, t.offsetX = 0, t.offsetY = p.height - t.padding / 2, t.labelBBox = p, t.intersect = function(N) {
    return Ri(t, N);
  }, { cluster: c, labelBBox: p };
}, "roundedWithTitle"), K_ = /* @__PURE__ */ g(async (e, t) => {
  q.info("Creating subgraph rect for ", t.id, t);
  const r = bt(), { themeVariables: i, handDrawnSeed: s } = r, { clusterBkg: o, clusterBorder: a } = i, { labelStyles: n, nodeStyles: l, borderStyles: c, backgroundStyles: h } = K(t), d = e.insert("g").attr("class", "cluster " + t.cssClasses).attr("id", t.domId).attr("data-look", t.look), f = ie(r), u = d.insert("g").attr("class", "cluster-label "), p = await er(u, t.label, {
    style: t.labelStyle,
    useHtmlLabels: f,
    isNode: !0,
    width: t.width
  });
  let m = p.getBBox();
  if (ie(r)) {
    const A = p.children[0], v = ut(p);
    m = A.getBoundingClientRect(), v.attr("width", m.width), v.attr("height", m.height);
  }
  const y = t.width <= m.width + t.padding ? m.width + t.padding : t.width;
  t.width <= m.width + t.padding ? t.diff = (y - t.width) / 2 - t.padding : t.diff = -t.padding;
  const x = t.height, C = t.x - y / 2, k = t.y - x / 2;
  q.trace("Data ", t, JSON.stringify(t));
  let T;
  if (t.look === "handDrawn") {
    const A = V.svg(d), v = Z(t, {
      roughness: 0.7,
      fill: o,
      // fill: 'red',
      stroke: a,
      fillWeight: 4,
      seed: s
    }), N = A.path(Cr(C, k, y, x, t.rx), v);
    T = d.insert(() => (q.debug("Rough node insert CXC", N), N), ":first-child"), T.select("path:nth-child(2)").attr("style", c.join(";")), T.select("path").attr("style", h.join(";").replace("fill", "stroke"));
  } else
    T = d.insert("rect", ":first-child"), T.attr("style", l).attr("rx", t.rx).attr("ry", t.ry).attr("x", C).attr("y", k).attr("width", y).attr("height", x);
  const { subGraphTitleTopMargin: w } = ah(r);
  if (u.attr(
    "transform",
    // This puts the label on top of the box instead of inside it
    `translate(${t.x - m.width / 2}, ${t.y - t.height / 2 + w})`
  ), n) {
    const A = u.select("span");
    A && A.attr("style", n);
  }
  const _ = T.node().getBBox();
  return t.offsetX = 0, t.width = _.width, t.height = _.height, t.offsetY = m.height - t.padding / 2, t.intersect = function(A) {
    return Ri(t, A);
  }, { cluster: d, labelBBox: m };
}, "kanbanSection"), Q_ = /* @__PURE__ */ g((e, t) => {
  const r = bt(), { themeVariables: i, handDrawnSeed: s } = r, { nodeBorder: o } = i, a = e.insert("g").attr("class", t.cssClasses).attr("id", t.domId).attr("data-look", t.look), n = a.insert("g", ":first-child"), l = 0 * t.padding, c = t.width + l;
  t.diff = -t.padding;
  const h = t.height + l, d = t.x - c / 2, f = t.y - h / 2;
  t.width = c;
  let u;
  if (t.look === "handDrawn") {
    const y = V.svg(a).rectangle(d, f, c, h, {
      fill: "lightgrey",
      roughness: 0.5,
      strokeLineDash: [5],
      stroke: o,
      seed: s
    });
    u = a.insert(() => y, ":first-child");
  } else {
    u = n.insert("rect", ":first-child");
    let m = "outer";
    t.look, m = "divider", u.attr("class", m).attr("x", d).attr("y", f).attr("width", c).attr("height", h).attr("data-look", t.look);
  }
  const p = u.node().getBBox();
  return t.height = p.height, t.offsetX = 0, t.offsetY = 0, t.intersect = function(m) {
    return Ri(t, m);
  }, { cluster: a, labelBBox: {} };
}, "divider"), J_ = am, tv = {
  rect: am,
  squareRect: J_,
  roundedWithTitle: Z_,
  noteGroup: V_,
  divider: Q_,
  kanbanSection: K_
}, nm = /* @__PURE__ */ new Map(), ev = /* @__PURE__ */ g(async (e, t) => {
  const r = t.shape || "rect", i = await tv[r](e, t);
  return nm.set(t.id, i), i;
}, "insertCluster"), rM = /* @__PURE__ */ g(() => {
  nm = /* @__PURE__ */ new Map();
}, "clear");
function lm(e, t) {
  return e.intersect(t);
}
g(lm, "intersectNode");
var rv = lm;
function hm(e, t, r, i) {
  var s = e.x, o = e.y, a = s - i.x, n = o - i.y, l = Math.sqrt(t * t * n * n + r * r * a * a), c = Math.abs(t * r * a / l);
  i.x < s && (c = -c);
  var h = Math.abs(t * r * n / l);
  return i.y < o && (h = -h), { x: s + c, y: o + h };
}
g(hm, "intersectEllipse");
var cm = hm;
function dm(e, t, r) {
  return cm(e, t, t, r);
}
g(dm, "intersectCircle");
var iv = dm;
function um(e, t, r, i) {
  {
    const s = t.y - e.y, o = e.x - t.x, a = t.x * e.y - e.x * t.y, n = s * r.x + o * r.y + a, l = s * i.x + o * i.y + a, c = 1e-6;
    if (n !== 0 && l !== 0 && ll(n, l))
      return;
    const h = i.y - r.y, d = r.x - i.x, f = i.x * r.y - r.x * i.y, u = h * e.x + d * e.y + f, p = h * t.x + d * t.y + f;
    if (Math.abs(u) < c && Math.abs(p) < c && ll(u, p))
      return;
    const m = s * d - h * o;
    if (m === 0)
      return;
    const y = Math.abs(m / 2);
    let x = o * f - d * a;
    const C = x < 0 ? (x - y) / m : (x + y) / m;
    x = h * a - s * f;
    const k = x < 0 ? (x - y) / m : (x + y) / m;
    return { x: C, y: k };
  }
}
g(um, "intersectLine");
function ll(e, t) {
  return e * t > 0;
}
g(ll, "sameSign");
var sv = um;
function fm(e, t, r) {
  let i = e.x, s = e.y, o = [], a = Number.POSITIVE_INFINITY, n = Number.POSITIVE_INFINITY;
  typeof t.forEach == "function" ? t.forEach(function(h) {
    a = Math.min(a, h.x), n = Math.min(n, h.y);
  }) : (a = Math.min(a, t.x), n = Math.min(n, t.y));
  let l = i - e.width / 2 - a, c = s - e.height / 2 - n;
  for (let h = 0; h < t.length; h++) {
    let d = t[h], f = t[h < t.length - 1 ? h + 1 : 0], u = sv(
      e,
      r,
      { x: l + d.x, y: c + d.y },
      { x: l + f.x, y: c + f.y }
    );
    u && o.push(u);
  }
  return o.length ? (o.length > 1 && o.sort(function(h, d) {
    let f = h.x - r.x, u = h.y - r.y, p = Math.sqrt(f * f + u * u), m = d.x - r.x, y = d.y - r.y, x = Math.sqrt(m * m + y * y);
    return p < x ? -1 : p === x ? 0 : 1;
  }), o[0]) : e;
}
g(fm, "intersectPolygon");
var ov = fm, j = {
  node: rv,
  circle: iv,
  ellipse: cm,
  polygon: ov,
  rect: Ri
};
function pm(e, t) {
  const { labelStyles: r } = K(t);
  t.labelStyle = r;
  const i = et(t);
  let s = i;
  i || (s = "anchor");
  const o = e.insert("g").attr("class", s).attr("id", t.domId || t.id), a = 1, { cssStyles: n } = t, l = V.svg(o), c = Z(t, { fill: "black", stroke: "none", fillStyle: "solid" });
  t.look !== "handDrawn" && (c.roughness = 0);
  const h = l.circle(0, 0, a * 2, c), d = o.insert(() => h, ":first-child");
  return d.attr("class", "anchor").attr("style", Wt(n)), Q(t, d), t.intersect = function(f) {
    return q.info("Circle intersect", t, a, f), j.circle(t, a, f);
  }, o;
}
g(pm, "anchor");
function hl(e, t, r, i, s, o, a) {
  const l = (e + r) / 2, c = (t + i) / 2, h = Math.atan2(i - t, r - e), d = (r - e) / 2, f = (i - t) / 2, u = d / s, p = f / o, m = Math.sqrt(u ** 2 + p ** 2);
  if (m > 1)
    throw new Error("The given radii are too small to create an arc between the points.");
  const y = Math.sqrt(1 - m ** 2), x = l + y * o * Math.sin(h) * (a ? -1 : 1), C = c - y * s * Math.cos(h) * (a ? -1 : 1), k = Math.atan2((t - C) / o, (e - x) / s);
  let w = Math.atan2((i - C) / o, (r - x) / s) - k;
  a && w < 0 && (w += 2 * Math.PI), !a && w > 0 && (w -= 2 * Math.PI);
  const _ = [];
  for (let A = 0; A < 20; A++) {
    const v = A / 19, N = k + v * w, O = x + s * Math.cos(N), P = C + o * Math.sin(N);
    _.push({ x: O, y: P });
  }
  return _;
}
g(hl, "generateArcPoints");
function gm(e, t, r) {
  const [i, s] = [t, r].sort((o, a) => a - o);
  return s * (1 - Math.sqrt(1 - (e / i / 2) ** 2));
}
g(gm, "calculateArcSagitta");
async function mm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = /* @__PURE__ */ g((N) => N + a, "calcTotalHeight"), l = /* @__PURE__ */ g((N) => {
    const O = N / 2;
    return [O / (2.5 + N / 50), O];
  }, "calcEllipseRadius"), { shapeSvg: c, bbox: h } = await st(e, t, et(t)), d = n(t?.height ? t?.height : h.height), [f, u] = l(d), p = gm(d, f, u), y = (t?.width ? t?.width : h.width) + o * 2 + p - p, x = d, { cssStyles: C } = t, k = [
    { x: y / 2, y: -x / 2 },
    { x: -y / 2, y: -x / 2 },
    ...hl(-y / 2, -x / 2, -y / 2, x / 2, f, u, !1),
    { x: y / 2, y: x / 2 },
    ...hl(y / 2, x / 2, y / 2, -x / 2, f, u, !0)
  ], T = V.svg(c), w = Z(t, {});
  t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
  const _ = mt(k), A = T.path(_, w), v = c.insert(() => A, ":first-child");
  return v.attr("class", "basic label-container outer-path"), C && t.look !== "handDrawn" && v.selectAll("path").attr("style", C), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(${f / 2}, 0)`), Q(t, v), t.intersect = function(N) {
    return j.polygon(t, k, N);
  }, c;
}
g(mm, "bowTieRect");
function rr(e, t, r, i) {
  return e.insert("polygon", ":first-child").attr(
    "points",
    i.map(function(s) {
      return s.x + "," + s.y;
    }).join(" ")
  ).attr("class", "label-container").attr("transform", "translate(" + -t / 2 + "," + r / 2 + ")");
}
g(rr, "insertPolygonShape");
var no = 12;
async function ym(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 28 : s, a = t.look === "neo" ? 24 : s, { shapeSvg: n, bbox: l } = await st(e, t, et(t)), c = (t?.width ?? l.width) + (t.look === "neo" ? o * 2 : o + no), h = (t?.height ?? l.height) + (t.look === "neo" ? a * 2 : a), d = 0, f = c, u = -h, p = 0, m = [
    { x: d + no, y: u },
    { x: f, y: u },
    { x: f, y: p },
    { x: d, y: p },
    { x: d, y: u + no },
    { x: d + no, y: u }
  ];
  let y;
  const { cssStyles: x } = t;
  if (t.look === "handDrawn") {
    const C = V.svg(n), k = Z(t, {}), T = mt(m), w = C.path(T, k);
    y = n.insert(() => w, ":first-child").attr("transform", `translate(${-c / 2}, ${h / 2})`), x && y.attr("style", x);
  } else
    y = rr(n, c, h, m);
  return i && y.attr("style", i), Q(t, y), t.intersect = function(C) {
    return j.polygon(t, m, C);
  }, n;
}
g(ym, "card");
function xm(e, t) {
  const { nodeStyles: r } = K(t);
  t.label = "";
  const i = e.insert("g").attr("class", et(t)).attr("id", t.domId ?? t.id), { cssStyles: s } = t, o = Math.max(28, t.width ?? 0), a = [
    { x: 0, y: o / 2 },
    { x: o / 2, y: 0 },
    { x: 0, y: -o / 2 },
    { x: -o / 2, y: 0 }
  ], n = V.svg(i), l = Z(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = mt(a), h = n.path(c, l), d = i.insert(() => h, ":first-child");
  return s && t.look !== "handDrawn" && d.selectAll("path").attr("style", s), r && t.look !== "handDrawn" && d.selectAll("path").attr("style", r), t.width = 28, t.height = 28, t.intersect = function(f) {
    return j.polygon(t, a, f);
  }, i;
}
g(xm, "choice");
async function Ch(e, t, r) {
  const { labelStyles: i, nodeStyles: s } = K(t);
  t.labelStyle = i;
  const { shapeSvg: o, bbox: a, halfPadding: n } = await st(e, t, et(t)), l = 16, c = r?.padding ?? n, h = t.look === "neo" ? a.width / 2 + l * 2 : a.width / 2 + c;
  let d;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const u = V.svg(o), p = Z(t, {}), m = u.circle(0, 0, h * 2, p);
    d = o.insert(() => m, ":first-child"), d.attr("class", "basic label-container").attr("style", Wt(f));
  } else
    d = o.insert("circle", ":first-child").attr("class", "basic label-container").attr("style", s).attr("r", h).attr("cx", 0).attr("cy", 0);
  return Q(t, d), t.calcIntersect = function(u, p) {
    const m = u.width / 2;
    return j.circle(u, m, p);
  }, t.intersect = function(u) {
    return q.info("Circle intersect", t, h, u), j.circle(t, h, u);
  }, o;
}
g(Ch, "circle");
function Cm(e) {
  const t = Math.cos(Math.PI / 4), r = Math.sin(Math.PI / 4), i = e * 2, s = { x: i / 2 * t, y: i / 2 * r }, o = { x: -(i / 2) * t, y: i / 2 * r }, a = { x: -(i / 2) * t, y: -(i / 2) * r }, n = { x: i / 2 * t, y: -(i / 2) * r };
  return `M ${o.x},${o.y} L ${n.x},${n.y}
                   M ${s.x},${s.y} L ${a.x},${a.y}`;
}
g(Cm, "createLine");
function bm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r, t.label = "";
  const s = e.insert("g").attr("class", et(t)).attr("id", t.domId ?? t.id), o = Math.max(30, t?.width ?? 0), { cssStyles: a } = t, n = V.svg(s), l = Z(t, {});
  t.look !== "handDrawn" && (l.roughness = 0, l.fillStyle = "solid");
  const c = n.circle(0, 0, o * 2, l), h = Cm(o), d = n.path(h, l), f = s.insert(() => c, ":first-child");
  return f.insert(() => d), f.attr("class", "outer-path"), a && t.look !== "handDrawn" && f.selectAll("path").attr("style", a), i && t.look !== "handDrawn" && f.selectAll("path").attr("style", i), Q(t, f), t.intersect = function(u) {
    return q.info("crossedCircle intersect", t, { radius: o, point: u }), j.circle(t, o, u);
  }, s;
}
g(bm, "crossedCircle");
function Xe(e, t, r, i = 100, s = 0, o = 180) {
  const a = [], n = s * Math.PI / 180, h = (o * Math.PI / 180 - n) / (i - 1);
  for (let d = 0; d < i; d++) {
    const f = n + d * h, u = e + r * Math.cos(f), p = t + r * Math.sin(f);
    a.push({ x: -u, y: -p });
  }
  return a;
}
g(Xe, "generateCirclePoints");
async function km(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await st(e, t, et(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, c = o.width + n, h = o.height + l, d = Math.max(5, h * 0.1), { cssStyles: f } = t, u = [
    ...Xe(c / 2, -h / 2, d, 30, -90, 0),
    { x: -c / 2 - d, y: d },
    ...Xe(c / 2 + d * 2, -d, d, 20, -180, -270),
    ...Xe(c / 2 + d * 2, d, d, 20, -90, -180),
    { x: -c / 2 - d, y: -h / 2 },
    ...Xe(c / 2, h / 2, d, 20, 0, 90)
  ], p = [
    { x: c / 2, y: -h / 2 - d },
    { x: -c / 2, y: -h / 2 - d },
    ...Xe(c / 2, -h / 2, d, 20, -90, 0),
    { x: -c / 2 - d, y: -d },
    ...Xe(c / 2 + c * 0.1, -d, d, 20, -180, -270),
    ...Xe(c / 2 + c * 0.1, d, d, 20, -90, -180),
    { x: -c / 2 - d, y: h / 2 },
    ...Xe(c / 2, h / 2, d, 20, 0, 90),
    { x: -c / 2, y: h / 2 + d },
    { x: c / 2, y: h / 2 + d }
  ], m = V.svg(s), y = Z(t, { fill: "none" });
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = mt(u).replace("Z", ""), k = m.path(C, y), T = mt(p), w = m.path(T, { ...y }), _ = s.insert("g", ":first-child");
  return _.insert(() => w, ":first-child").attr("stroke-opacity", 0), _.insert(() => k, ":first-child"), _.attr("class", "text"), f && t.look !== "handDrawn" && _.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && _.selectAll("path").attr("style", i), _.attr("transform", `translate(${d}, 0)`), a.attr(
    "transform",
    `translate(${-c / 2 + d - (o.x - (o.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`
  ), Q(t, _), t.intersect = function(A) {
    return j.polygon(t, p, A);
  }, s;
}
g(km, "curlyBraceLeft");
function Ge(e, t, r, i = 100, s = 0, o = 180) {
  const a = [], n = s * Math.PI / 180, h = (o * Math.PI / 180 - n) / (i - 1);
  for (let d = 0; d < i; d++) {
    const f = n + d * h, u = e + r * Math.cos(f), p = t + r * Math.sin(f);
    a.push({ x: u, y: p });
  }
  return a;
}
g(Ge, "generateCirclePoints");
async function Sm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await st(e, t, et(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, c = o.width + (t.look === "neo" ? n * 2 : n), h = o.height + (t.look === "neo" ? l * 2 : l), d = Math.max(5, h * 0.1), { cssStyles: f } = t, u = [
    ...Ge(c / 2, -h / 2, d, 20, -90, 0),
    { x: c / 2 + d, y: -d },
    ...Ge(c / 2 + d * 2, -d, d, 20, -180, -270),
    ...Ge(c / 2 + d * 2, d, d, 20, -90, -180),
    { x: c / 2 + d, y: h / 2 },
    ...Ge(c / 2, h / 2, d, 20, 0, 90)
  ], p = [
    { x: -c / 2, y: -h / 2 - d },
    { x: c / 2, y: -h / 2 - d },
    ...Ge(c / 2, -h / 2, d, 20, -90, 0),
    { x: c / 2 + d, y: -d },
    ...Ge(c / 2 + d * 2, -d, d, 20, -180, -270),
    ...Ge(c / 2 + d * 2, d, d, 20, -90, -180),
    { x: c / 2 + d, y: h / 2 },
    ...Ge(c / 2, h / 2, d, 20, 0, 90),
    { x: c / 2, y: h / 2 + d },
    { x: -c / 2, y: h / 2 + d }
  ], m = V.svg(s), y = Z(t, { fill: "none" });
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const C = mt(u).replace("Z", ""), k = m.path(C, y), T = mt(p), w = m.path(T, { ...y }), _ = s.insert("g", ":first-child");
  return _.insert(() => w, ":first-child").attr("stroke-opacity", 0), _.insert(() => k, ":first-child"), _.attr("class", "text"), f && t.look !== "handDrawn" && _.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && _.selectAll("path").attr("style", i), _.attr("transform", `translate(${-d}, 0)`), a.attr(
    "transform",
    `translate(${-c / 2 + (t.padding ?? 0) / 2 - (o.x - (o.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`
  ), Q(t, _), t.intersect = function(A) {
    return j.polygon(t, p, A);
  }, s;
}
g(Sm, "curlyBraceRight");
function Ht(e, t, r, i = 100, s = 0, o = 180) {
  const a = [], n = s * Math.PI / 180, h = (o * Math.PI / 180 - n) / (i - 1);
  for (let d = 0; d < i; d++) {
    const f = n + d * h, u = e + r * Math.cos(f), p = t + r * Math.sin(f);
    a.push({ x: -u, y: -p });
  }
  return a;
}
g(Ht, "generateCirclePoints");
async function wm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await st(e, t, et(t)), n = t.look === "neo" ? 18 : t.padding ?? 0, l = t.look === "neo" ? 12 : t.padding ?? 0, c = o.width + (t.look === "neo" ? n * 2 : n), h = o.height + (t.look === "neo" ? l * 2 : l), d = Math.max(5, h * 0.1), { cssStyles: f } = t, u = [
    ...Ht(c / 2, -h / 2, d, 30, -90, 0),
    { x: -c / 2 - d, y: d },
    ...Ht(c / 2 + d * 2, -d, d, 20, -180, -270),
    ...Ht(c / 2 + d * 2, d, d, 20, -90, -180),
    { x: -c / 2 - d, y: -h / 2 },
    ...Ht(c / 2, h / 2, d, 20, 0, 90)
  ], p = [
    ...Ht(-c / 2 + d + d / 2, -h / 2, d, 20, -90, -180),
    { x: c / 2 - d / 2, y: d },
    ...Ht(-c / 2 - d / 2, -d, d, 20, 0, 90),
    ...Ht(-c / 2 - d / 2, d, d, 20, -90, 0),
    { x: c / 2 - d / 2, y: -d },
    ...Ht(-c / 2 + d + d / 2, h / 2, d, 30, -180, -270)
  ], m = [
    { x: c / 2, y: -h / 2 - d },
    { x: -c / 2, y: -h / 2 - d },
    ...Ht(c / 2, -h / 2, d, 20, -90, 0),
    { x: -c / 2 - d, y: -d },
    ...Ht(c / 2 + d * 2, -d, d, 20, -180, -270),
    ...Ht(c / 2 + d * 2, d, d, 20, -90, -180),
    { x: -c / 2 - d, y: h / 2 },
    ...Ht(c / 2, h / 2, d, 20, 0, 90),
    { x: -c / 2, y: h / 2 + d },
    { x: c / 2 - d - d / 2, y: h / 2 + d },
    ...Ht(-c / 2 + d + d / 2, -h / 2, d, 20, -90, -180),
    { x: c / 2 - d / 2, y: d },
    ...Ht(-c / 2 - d / 2, -d, d, 20, 0, 90),
    ...Ht(-c / 2 - d / 2, d, d, 20, -90, 0),
    { x: c / 2 - d / 2, y: -d },
    ...Ht(-c / 2 + d + d / 2, h / 2, d, 30, -180, -270)
  ], y = V.svg(s), x = Z(t, { fill: "none" });
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const k = mt(u).replace("Z", ""), T = y.path(k, x), _ = mt(p).replace("Z", ""), A = y.path(_, x), v = mt(m), N = y.path(v, { ...x }), O = s.insert("g", ":first-child");
  return O.insert(() => N, ":first-child").attr("stroke-opacity", 0), O.insert(() => T, ":first-child"), O.insert(() => A, ":first-child"), O.attr("class", "text"), f && t.look !== "handDrawn" && O.selectAll("path").attr("style", f), i && t.look !== "handDrawn" && O.selectAll("path").attr("style", i), O.attr("transform", `translate(${d - d / 4}, 0)`), a.attr(
    "transform",
    `translate(${-c / 2 + (t.padding ?? 0) / 2 - (o.x - (o.left ?? 0))},${-h / 2 + (t.padding ?? 0) / 2 - (o.y - (o.top ?? 0))})`
  ), Q(t, O), t.intersect = function(P) {
    return j.polygon(t, m, P);
  }, s;
}
g(wm, "curlyBraces");
async function Tm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = 20, l = 5, { shapeSvg: c, bbox: h } = await st(e, t, et(t)), d = Math.max(n, (h.width + o * 2) * 1.25, t?.width ?? 0), f = Math.max(l, h.height + a * 2, t?.height ?? 0), u = f / 2, { cssStyles: p } = t, m = V.svg(c), y = Z(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const x = d, C = f, k = x - u, T = C / 4, w = [
    { x: k, y: 0 },
    { x: T, y: 0 },
    { x: 0, y: C / 2 },
    { x: T, y: C },
    { x: k, y: C },
    ...Ls(-k, -C / 2, u, 50, 270, 90)
  ], _ = mt(w), A = m.path(_, y), v = c.insert(() => A, ":first-child");
  return v.attr("class", "basic label-container outer-path"), p && t.look !== "handDrawn" && v.selectChildren("path").attr("style", p), i && t.look !== "handDrawn" && v.selectChildren("path").attr("style", i), v.attr("transform", `translate(${-d / 2}, ${-f / 2})`), Q(t, v), t.intersect = function(N) {
    return j.polygon(t, w, N);
  }, c;
}
g(Tm, "curvedTrapezoid");
var av = /* @__PURE__ */ g((e, t, r, i, s, o) => [
  `M${e},${t + o}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createCylinderPathD"), nv = /* @__PURE__ */ g((e, t, r, i, s, o) => [
  `M${e},${t + o}`,
  `M${e + r},${t + o}`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`
].join(" "), "createOuterCylinderPathD"), lv = /* @__PURE__ */ g((e, t, r, i, s, o) => [`M${e - r / 2},${-i / 2}`, `a${s},${o} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD"), xd = 8, Cd = 8;
async function _m(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 24 : s, a = t.look === "neo" ? 24 : s;
  if (t.width || t.height) {
    const y = t.width ?? 0;
    t.width = (t.width ?? 0) - a, t.width < Cd && (t.width = Cd);
    const C = y / 2 / (2.5 + y / 50);
    t.height = (t.height ?? 0) - o - C * 3, t.height < xd && (t.height = xd);
  }
  const { shapeSvg: n, bbox: l, label: c } = await st(e, t, et(t)), h = (t.width ? t.width : l.width) + a, d = h / 2, f = d / (2.5 + h / 50), u = (t.height ? t.height : l.height) + o + f;
  let p;
  const { cssStyles: m } = t;
  if (t.look === "handDrawn") {
    const y = V.svg(n), x = nv(0, 0, h, u, d, f), C = lv(0, f, h, u, d, f), k = Z(t, {}), T = y.path(x, k), w = y.path(C, Z(t, { fill: "none" }));
    p = n.insert(() => w, ":first-child"), p = n.insert(() => T, ":first-child"), p.attr("class", "basic label-container"), m && p.attr("style", m);
  } else {
    const y = av(0, 0, h, u, d, f);
    p = n.insert("path", ":first-child").attr("d", y).attr("class", "basic label-container outer-path").attr("style", Wt(m)).attr("style", i);
  }
  return p.attr("label-offset-y", f), p.attr("transform", `translate(${-h / 2}, ${-(u / 2 + f)})`), Q(t, p), c.attr(
    "transform",
    `translate(${-(l.width / 2) - (l.x - (l.left ?? 0))}, ${-(l.height / 2) + (t.padding ?? 0) / 1.5 - (l.y - (l.top ?? 0))})`
  ), t.intersect = function(y) {
    const x = j.rect(t, y), C = x.x - (t.x ?? 0);
    if (d != 0 && (Math.abs(C) < (t.width ?? 0) / 2 || Math.abs(C) == (t.width ?? 0) / 2 && Math.abs(x.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - f)) {
      let k = f * f * (1 - C * C / (d * d));
      k > 0 && (k = Math.sqrt(k)), k = f - k, y.y - (t.y ?? 0) > 0 && (k = -k), x.y += k;
    }
    return x;
  }, n;
}
g(_m, "cylinder");
async function Pi(e, t, r) {
  const { labelStyles: i, nodeStyles: s } = K(t);
  t.labelStyle = i;
  const { shapeSvg: o, bbox: a } = await st(e, t, et(t)), n = Math.max(a.width + r.labelPaddingX * 2, t?.width || 0), l = Math.max(a.height + r.labelPaddingY * 2, t?.height || 0), c = -n / 2, h = -l / 2;
  let d, { rx: f, ry: u } = t;
  const { cssStyles: p } = t;
  if (r?.rx && r.ry && (f = r.rx, u = r.ry), t.look === "handDrawn") {
    const m = V.svg(o), y = Z(t, {}), x = f || u ? m.path(Cr(c, h, n, l, f || 0), y) : m.rectangle(c, h, n, l, y);
    d = o.insert(() => x, ":first-child"), d.attr("class", "basic label-container").attr("style", Wt(p));
  } else
    d = o.insert("rect", ":first-child"), d.attr("class", "basic label-container").attr("style", s).attr("rx", Wt(f)).attr("ry", Wt(u)).attr("x", c).attr("y", h).attr("width", n).attr("height", l);
  return Q(t, d), t.calcIntersect = function(m, y) {
    return j.rect(m, y);
  }, t.intersect = function(m) {
    return j.rect(t, m);
  }, o;
}
g(Pi, "drawRect");
async function vm(e, t) {
  const { cssClasses: r, labelPaddingX: i, labelPaddingY: s, padding: o, width: a, height: n } = t, l = {
    rx: 0,
    ry: 0,
    labelPaddingX: i ?? (o ?? 0) * 2,
    labelPaddingY: s ?? o ?? 0
  }, c = await Pi(e, t, l);
  if (t.look === "handDrawn") {
    const u = V.svg(c), p = Z(t, {}), m = c.select(".basic.label-container > path:nth-child(2)"), y = m.node();
    if (!y)
      return c;
    let x = null;
    if (y instanceof SVGGraphicsElement)
      x = y.getBBox();
    else
      return c;
    return c.insert(
      () => u.line(x.x, x.y, x.x + x.width, x.y, p),
      ".basic.label-container g.label"
    ), c.insert(
      () => u.line(
        x.x,
        x.y + x.height,
        x.x + x.width,
        x.y + x.height,
        p
      ),
      ".basic.label-container g.label"
    ), m.remove(), c;
  }
  const h = c.select(".basic.label-container"), d = (Number(h.attr("width")) || a) ?? 0, f = (Number(h.attr("height")) || n) ?? 0;
  return d > 0 && f > 0 && h.attr("stroke-dasharray", `${d} ${f}`), c;
}
g(vm, "datastore");
async function Bm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 16 : t.padding ?? 0, { shapeSvg: a, bbox: n, label: l } = await st(e, t, et(t)), c = n.width + s, h = n.height + o, d = h * 0.2, f = -c / 2, u = -h / 2 - d / 2, { cssStyles: p } = t, m = V.svg(a), y = Z(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const x = [
    { x: f, y: u + d },
    { x: -f, y: u + d },
    { x: -f, y: -u },
    { x: f, y: -u },
    { x: f, y: u },
    { x: -f, y: u },
    { x: -f, y: u + d }
  ], C = m.polygon(
    x.map((T) => [T.x, T.y]),
    y
  ), k = a.insert(() => C, ":first-child");
  return k.attr("class", "basic label-container outer-path"), p && t.look !== "handDrawn" && k.selectAll("path").attr("style", p), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${f + (t.padding ?? 0) / 2 - (n.x - (n.left ?? 0))}, ${u + d + (t.padding ?? 0) / 2 - (n.y - (n.top ?? 0))})`
  ), Q(t, k), t.intersect = function(T) {
    return j.rect(t, T);
  }, a;
}
g(Bm, "dividedRectangle");
async function Lm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t), s = t.look === "neo" ? 12 : 5;
  t.labelStyle = r;
  const o = t.padding ?? 0, a = t.look === "neo" ? 16 : o, { shapeSvg: n, bbox: l } = await st(e, t, et(t)), c = (t?.width ? t?.width / 2 : l.width / 2) + (a ?? 0), h = c - s;
  let d;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const u = V.svg(n), p = Z(t, { roughness: 0.2, strokeWidth: 2.5 }), m = Z(t, { roughness: 0.2, strokeWidth: 1.5 }), y = u.circle(0, 0, c * 2, p), x = u.circle(0, 0, h * 2, m);
    d = n.insert("g", ":first-child"), d.attr("class", Wt(t.cssClasses)).attr("style", Wt(f)), d.node()?.appendChild(y), d.node()?.appendChild(x);
  } else {
    d = n.insert("g", ":first-child");
    const u = d.insert("circle", ":first-child"), p = d.insert("circle");
    d.attr("class", "basic label-container").attr("style", i), u.attr("class", "outer-circle").attr("style", i).attr("r", c).attr("cx", 0).attr("cy", 0), p.attr("class", "inner-circle").attr("style", i).attr("r", h).attr("cx", 0).attr("cy", 0);
  }
  return Q(t, d), t.intersect = function(u) {
    return q.info("DoubleCircle intersect", t, c, u), j.circle(t, c, u);
  }, n;
}
g(Lm, "doublecircle");
function Am(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: s } = K(t);
  t.label = "", t.labelStyle = i;
  const o = e.insert("g").attr("class", et(t)).attr("id", t.domId ?? t.id), a = 7, { cssStyles: n } = t, l = V.svg(o), { nodeBorder: c } = r, h = Z(t, { fillStyle: "solid" });
  t.look !== "handDrawn" && (h.roughness = 0);
  const d = l.circle(0, 0, a * 2, h), f = o.insert(() => d, ":first-child");
  return f.selectAll("path").attr("style", `fill: ${c} !important;`), n && n.length > 0 && t.look !== "handDrawn" && f.selectAll("path").attr("style", n), s && t.look !== "handDrawn" && f.selectAll("path").attr("style", s), Q(t, f), t.intersect = function(u) {
    return q.info("filledCircle intersect", t, { radius: a, point: u }), j.circle(t, a, u);
  }, o;
}
g(Am, "filledCircle");
var bd = 10, kd = 10;
async function Em(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? s * 2 : s;
  (t.width || t.height) && (t.height = t?.height ?? 0, t.height < bd && (t.height = bd), t.width = (t?.width ?? 0) - o - o / 2, t.width < kd && (t.width = kd));
  const { shapeSvg: a, bbox: n, label: l } = await st(e, t, et(t)), c = (t?.width ? t?.width : n.width) + (o ?? 0), h = t?.height ? t?.height : c + n.height, d = h, f = [
    { x: 0, y: -h },
    { x: d, y: -h },
    { x: d / 2, y: 0 }
  ], { cssStyles: u } = t, p = V.svg(a), m = Z(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = mt(f), x = p.path(y, m), C = a.insert(() => x, ":first-child").attr("transform", `translate(${-h / 2}, ${h / 2})`).attr("class", "outer-path");
  return u && t.look !== "handDrawn" && C.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && C.selectChildren("path").attr("style", i), t.width = c, t.height = h, Q(t, C), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${-h / 2 + (t.padding ?? 0) / 2 + (n.y - (n.top ?? 0))})`
  ), t.intersect = function(k) {
    return q.info("Triangle intersect", t, f, k), j.polygon(t, f, k);
  }, a;
}
g(Em, "flippedTriangle");
function Fm(e, t, { dir: r, config: { state: i, themeVariables: s } }) {
  const { nodeStyles: o } = K(t);
  t.label = "";
  const a = e.insert("g").attr("class", et(t)).attr("id", t.domId ?? t.id), { cssStyles: n } = t;
  let l = Math.max(70, t?.width ?? 0), c = Math.max(10, t?.height ?? 0);
  r === "LR" && (l = Math.max(10, t?.width ?? 0), c = Math.max(70, t?.height ?? 0));
  const h = -1 * l / 2, d = -1 * c / 2, f = V.svg(a), u = Z(t, {
    stroke: s.lineColor,
    fill: s.lineColor
  });
  t.look !== "handDrawn" && (u.roughness = 0, u.fillStyle = "solid");
  const p = f.rectangle(h, d, l, c, u), m = a.insert(() => p, ":first-child");
  n && t.look !== "handDrawn" && m.selectAll("path").attr("style", n), o && t.look !== "handDrawn" && m.selectAll("path").attr("style", o), Q(t, m);
  const y = i?.padding ?? 0;
  return t.width && t.height && (t.width += y / 2 || 0, t.height += y / 2 || 0), t.intersect = function(x) {
    return j.rect(t, x);
  }, a;
}
g(Fm, "forkJoin");
async function Mm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = 15, o = 10, a = t.look === "neo" ? 16 : t.padding ?? 0, n = t.look === "neo" ? 12 : t.padding ?? 0;
  (t.width || t.height) && (t.height = (t?.height ?? 0) - n * 2, t.height < o && (t.height = o), t.width = (t?.width ?? 0) - a * 2, t.width < s && (t.width = s));
  const { shapeSvg: l, bbox: c } = await st(e, t, et(t)), h = (t?.width ? t?.width : Math.max(s, c.width)) + a * 2, d = (t?.height ? t?.height : Math.max(o, c.height)) + n * 2, f = d / 2, { cssStyles: u } = t, p = V.svg(l), m = Z(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -h / 2, y: -d / 2 },
    { x: h / 2 - f, y: -d / 2 },
    ...Ls(-h / 2 + f, 0, f, 50, 90, 270),
    { x: h / 2 - f, y: d / 2 },
    { x: -h / 2, y: d / 2 }
  ], x = mt(y), C = p.path(x, m), k = l.insert(() => C, ":first-child");
  return k.attr("class", "basic label-container outer-path"), u && t.look !== "handDrawn" && k.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), Q(t, k), t.intersect = function(T) {
    return q.info("Pill intersect", t, { radius: f, point: T }), j.polygon(t, y, T);
  }, l;
}
g(Mm, "halfRoundedRectangle");
var hv = /* @__PURE__ */ g((e, t, r, i, s) => [
  `M${e + s},${t}`,
  `L${e + r - s},${t}`,
  `L${e + r},${t - i / 2}`,
  `L${e + r - s},${t - i}`,
  `L${e + s},${t - i}`,
  `L${e},${t - i / 2}`,
  "Z"
].join(" "), "createHexagonPathD");
async function $m(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t), s = t.look === "neo" ? 3.5 : 4;
  t.labelStyle = r;
  const o = t.padding ?? 0, a = 70, n = 32, l = t.look === "neo" ? a : o, c = t.look === "neo" ? n : o;
  if (t.width || t.height) {
    const k = (t.height ?? 0) / s;
    t.width = (t?.width ?? 0) - 2 * k - c, t.height = (t.height ?? 0) - l;
  }
  const { shapeSvg: h, bbox: d } = await st(e, t, et(t)), f = (t?.height ? t?.height : d.height) + l, u = f / s, p = (t?.width ? t?.width : d.width) + 2 * u + c, m = [
    { x: u, y: 0 },
    { x: p - u, y: 0 },
    { x: p, y: -f / 2 },
    { x: p - u, y: -f },
    { x: u, y: -f },
    { x: 0, y: -f / 2 }
  ];
  let y;
  const { cssStyles: x } = t;
  if (t.look === "handDrawn") {
    const C = V.svg(h), k = Z(t, {}), T = hv(0, 0, p, f, u), w = C.path(T, k);
    y = h.insert(() => w, ":first-child").attr("transform", `translate(${-p / 2}, ${f / 2})`), x && y.attr("style", x);
  } else
    y = rr(h, p, f, m);
  return i && y.attr("style", i), t.width = p, t.height = f, Q(t, y), t.intersect = function(C) {
    return j.polygon(t, m, C);
  }, h;
}
g($m, "hexagon");
async function Om(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.label = "", t.labelStyle = r;
  const { shapeSvg: s } = await st(e, t, et(t)), o = Math.max(30, t?.width ?? 0), a = Math.max(30, t?.height ?? 0), { cssStyles: n } = t, l = V.svg(s), c = Z(t, {});
  t.look !== "handDrawn" && (c.roughness = 0, c.fillStyle = "solid");
  const h = [
    { x: 0, y: 0 },
    { x: o, y: 0 },
    { x: 0, y: a },
    { x: o, y: a }
  ], d = mt(h), f = l.path(d, c), u = s.insert(() => f, ":first-child");
  return u.attr("class", "basic label-container outer-path"), n && t.look !== "handDrawn" && u.selectChildren("path").attr("style", n), i && t.look !== "handDrawn" && u.selectChildren("path").attr("style", i), u.attr("transform", `translate(${-o / 2}, ${-a / 2})`), Q(t, u), t.intersect = function(p) {
    return q.info("Pill intersect", t, { points: h }), j.polygon(t, h, p);
  }, s;
}
g(Om, "hourglass");
async function Im(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = K(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, label: d } = await st(e, t, "icon-shape default"), f = t.pos === "t", u = n, p = n, { nodeBorder: m } = r, { stylesMap: y } = Di(t), x = -p / 2, C = -u / 2, k = t.label ? 8 : 0, T = V.svg(c), w = Z(t, { stroke: "none", fill: "none" });
  t.look !== "handDrawn" && (w.roughness = 0, w.fillStyle = "solid");
  const _ = T.rectangle(x, C, p, u, w), A = Math.max(p, h.width), v = u + h.height + k, N = T.rectangle(-A / 2, -v / 2, A, v, {
    ...w,
    fill: "transparent",
    stroke: "none"
  }), O = c.insert(() => _, ":first-child"), P = c.insert(() => N);
  if (t.icon) {
    const H = c.append("g");
    H.html(
      `<g>${await qs(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const W = H.node().getBBox(), R = W.width, M = W.height, E = W.x, B = W.y;
    H.attr(
      "transform",
      `translate(${-R / 2 - E},${f ? h.height / 2 + k / 2 - M / 2 - B : -h.height / 2 - k / 2 - M / 2 - B})`
    ), H.attr("style", `color: ${y.get("stroke") ?? m};`);
  }
  return d.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${f ? -v / 2 : v / 2 - h.height})`
  ), O.attr(
    "transform",
    `translate(0,${f ? h.height / 2 + k / 2 : -h.height / 2 - k / 2})`
  ), Q(t, P), t.intersect = function(H) {
    if (q.info("iconSquare intersect", t, H), !t.label)
      return j.rect(t, H);
    const W = t.x ?? 0, R = t.y ?? 0, M = t.height ?? 0;
    let E = [];
    return f ? E = [
      { x: W - h.width / 2, y: R - M / 2 },
      { x: W + h.width / 2, y: R - M / 2 },
      { x: W + h.width / 2, y: R - M / 2 + h.height + k },
      { x: W + p / 2, y: R - M / 2 + h.height + k },
      { x: W + p / 2, y: R + M / 2 },
      { x: W - p / 2, y: R + M / 2 },
      { x: W - p / 2, y: R - M / 2 + h.height + k },
      { x: W - h.width / 2, y: R - M / 2 + h.height + k }
    ] : E = [
      { x: W - p / 2, y: R - M / 2 },
      { x: W + p / 2, y: R - M / 2 },
      { x: W + p / 2, y: R - M / 2 + u },
      { x: W + h.width / 2, y: R - M / 2 + u },
      { x: W + h.width / 2 / 2, y: R + M / 2 },
      { x: W - h.width / 2, y: R + M / 2 },
      { x: W - h.width / 2, y: R - M / 2 + u },
      { x: W - p / 2, y: R - M / 2 + u }
    ], j.polygon(t, E, H);
  }, c;
}
g(Im, "icon");
async function Dm(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = K(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, label: d } = await st(e, t, "icon-shape default"), f = 20, u = t.label ? 8 : 0, p = t.pos === "t", { nodeBorder: m, mainBkg: y } = r, { stylesMap: x } = Di(t), C = V.svg(c), k = Z(t, {});
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const T = x.get("fill");
  k.stroke = T ?? y;
  const w = c.append("g");
  t.icon && w.html(
    `<g>${await qs(t.icon, {
      height: n,
      width: n,
      fallbackPrefix: ""
    })}</g>`
  );
  const _ = w.node().getBBox(), A = _.width, v = _.height, N = _.x, O = _.y, P = Math.max(A, v) * Math.SQRT2 + f * 2, H = C.circle(0, 0, P, k), W = Math.max(P, h.width), R = P + h.height + u, M = C.rectangle(-W / 2, -R / 2, W, R, {
    ...k,
    fill: "transparent",
    stroke: "none"
  }), E = c.insert(() => H, ":first-child"), B = c.insert(() => M);
  return w.attr(
    "transform",
    `translate(${-A / 2 - N},${p ? h.height / 2 + u / 2 - v / 2 - O : -h.height / 2 - u / 2 - v / 2 - O})`
  ), w.attr("style", `color: ${x.get("stroke") ?? m};`), d.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${p ? -R / 2 : R / 2 - h.height})`
  ), E.attr(
    "transform",
    `translate(0,${p ? h.height / 2 + u / 2 : -h.height / 2 - u / 2})`
  ), Q(t, B), t.intersect = function(F) {
    return q.info("iconSquare intersect", t, F), j.rect(t, F);
  }, c;
}
g(Dm, "iconCircle");
async function Rm(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = K(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: d, label: f } = await st(
    e,
    t,
    "icon-shape default"
  ), u = t.pos === "t", p = n + d * 2, m = n + d * 2, { nodeBorder: y, mainBkg: x } = r, { stylesMap: C } = Di(t), k = -m / 2, T = -p / 2, w = t.label ? 8 : 0, _ = V.svg(c), A = Z(t, {});
  t.look !== "handDrawn" && (A.roughness = 0, A.fillStyle = "solid");
  const v = C.get("fill");
  A.stroke = v ?? x;
  const N = _.path(Cr(k, T, m, p, 5), A), O = Math.max(m, h.width), P = p + h.height + w, H = _.rectangle(-O / 2, -P / 2, O, P, {
    ...A,
    fill: "transparent",
    stroke: "none"
  }), W = c.insert(() => N, ":first-child").attr("class", "icon-shape2"), R = c.insert(() => H);
  if (t.icon) {
    const M = c.append("g");
    M.html(
      `<g>${await qs(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const E = M.node().getBBox(), B = E.width, F = E.height, z = E.x, Y = E.y;
    M.attr(
      "transform",
      `translate(${-B / 2 - z},${u ? h.height / 2 + w / 2 - F / 2 - Y : -h.height / 2 - w / 2 - F / 2 - Y})`
    ), M.attr("style", `color: ${C.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${u ? -P / 2 : P / 2 - h.height})`
  ), W.attr(
    "transform",
    `translate(0,${u ? h.height / 2 + w / 2 : -h.height / 2 - w / 2})`
  ), Q(t, R), t.intersect = function(M) {
    if (q.info("iconSquare intersect", t, M), !t.label)
      return j.rect(t, M);
    const E = t.x ?? 0, B = t.y ?? 0, F = t.height ?? 0;
    let z = [];
    return u ? z = [
      { x: E - h.width / 2, y: B - F / 2 },
      { x: E + h.width / 2, y: B - F / 2 },
      { x: E + h.width / 2, y: B - F / 2 + h.height + w },
      { x: E + m / 2, y: B - F / 2 + h.height + w },
      { x: E + m / 2, y: B + F / 2 },
      { x: E - m / 2, y: B + F / 2 },
      { x: E - m / 2, y: B - F / 2 + h.height + w },
      { x: E - h.width / 2, y: B - F / 2 + h.height + w }
    ] : z = [
      { x: E - m / 2, y: B - F / 2 },
      { x: E + m / 2, y: B - F / 2 },
      { x: E + m / 2, y: B - F / 2 + p },
      { x: E + h.width / 2, y: B - F / 2 + p },
      { x: E + h.width / 2 / 2, y: B + F / 2 },
      { x: E - h.width / 2, y: B + F / 2 },
      { x: E - h.width / 2, y: B - F / 2 + p },
      { x: E - m / 2, y: B - F / 2 + p }
    ], j.polygon(t, z, M);
  }, c;
}
g(Rm, "iconRounded");
async function Pm(e, t, { config: { themeVariables: r, flowchart: i } }) {
  const { labelStyles: s } = K(t);
  t.labelStyle = s;
  const o = t.assetHeight ?? 48, a = t.assetWidth ?? 48, n = Math.max(o, a), l = i?.wrappingWidth;
  t.width = Math.max(n, l ?? 0);
  const { shapeSvg: c, bbox: h, halfPadding: d, label: f } = await st(
    e,
    t,
    "icon-shape default"
  ), u = t.pos === "t", p = n + d * 2, m = n + d * 2, { nodeBorder: y, mainBkg: x } = r, { stylesMap: C } = Di(t), k = -m / 2, T = -p / 2, w = t.label ? 8 : 0, _ = V.svg(c), A = Z(t, {});
  t.look !== "handDrawn" && (A.roughness = 0, A.fillStyle = "solid");
  const v = C.get("fill");
  A.stroke = v ?? x;
  const N = _.path(Cr(k, T, m, p, 0.1), A), O = Math.max(m, h.width), P = p + h.height + w, H = _.rectangle(-O / 2, -P / 2, O, P, {
    ...A,
    fill: "transparent",
    stroke: "none"
  }), W = c.insert(() => N, ":first-child"), R = c.insert(() => H);
  if (t.icon) {
    const M = c.append("g");
    M.html(
      `<g>${await qs(t.icon, {
        height: n,
        width: n,
        fallbackPrefix: ""
      })}</g>`
    );
    const E = M.node().getBBox(), B = E.width, F = E.height, z = E.x, Y = E.y;
    M.attr(
      "transform",
      `translate(${-B / 2 - z},${u ? h.height / 2 + w / 2 - F / 2 - Y : -h.height / 2 - w / 2 - F / 2 - Y})`
    ), M.attr("style", `color: ${C.get("stroke") ?? y};`);
  }
  return f.attr(
    "transform",
    `translate(${-h.width / 2 - (h.x - (h.left ?? 0))},${u ? -P / 2 : P / 2 - h.height})`
  ), W.attr(
    "transform",
    `translate(0,${u ? h.height / 2 + w / 2 : -h.height / 2 - w / 2})`
  ), Q(t, R), t.intersect = function(M) {
    if (q.info("iconSquare intersect", t, M), !t.label)
      return j.rect(t, M);
    const E = t.x ?? 0, B = t.y ?? 0, F = t.height ?? 0;
    let z = [];
    return u ? z = [
      { x: E - h.width / 2, y: B - F / 2 },
      { x: E + h.width / 2, y: B - F / 2 },
      { x: E + h.width / 2, y: B - F / 2 + h.height + w },
      { x: E + m / 2, y: B - F / 2 + h.height + w },
      { x: E + m / 2, y: B + F / 2 },
      { x: E - m / 2, y: B + F / 2 },
      { x: E - m / 2, y: B - F / 2 + h.height + w },
      { x: E - h.width / 2, y: B - F / 2 + h.height + w }
    ] : z = [
      { x: E - m / 2, y: B - F / 2 },
      { x: E + m / 2, y: B - F / 2 },
      { x: E + m / 2, y: B - F / 2 + p },
      { x: E + h.width / 2, y: B - F / 2 + p },
      { x: E + h.width / 2 / 2, y: B + F / 2 },
      { x: E - h.width / 2, y: B + F / 2 },
      { x: E - h.width / 2, y: B - F / 2 + p },
      { x: E - m / 2, y: B - F / 2 + p }
    ], j.polygon(t, z, M);
  }, c;
}
g(Pm, "iconSquare");
async function Nm(e, t, { config: { flowchart: r } }) {
  const i = new Image();
  i.src = t?.img ?? "", await i.decode();
  const s = Number(i.naturalWidth.toString().replace("px", "")), o = Number(i.naturalHeight.toString().replace("px", ""));
  t.imageAspectRatio = s / o;
  const { labelStyles: a } = K(t);
  t.labelStyle = a;
  const n = r?.wrappingWidth;
  t.defaultWidth = r?.wrappingWidth;
  const l = Math.max(
    t.label ? n ?? 0 : 0,
    t?.assetWidth ?? s
  ), c = t.constraint === "on" && t?.assetHeight ? t.assetHeight * t.imageAspectRatio : l, h = t.constraint === "on" ? c / t.imageAspectRatio : t?.assetHeight ?? o;
  t.width = Math.max(c, n ?? 0);
  const { shapeSvg: d, bbox: f, label: u } = await st(e, t, "image-shape default"), p = t.pos === "t", m = -c / 2, y = -h / 2, x = t.label ? 8 : 0, C = V.svg(d), k = Z(t, {});
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const T = C.rectangle(m, y, c, h, k), w = Math.max(c, f.width), _ = h + f.height + x, A = C.rectangle(-w / 2, -_ / 2, w, _, {
    ...k,
    fill: "none",
    stroke: "none"
  }), v = d.insert(() => T, ":first-child"), N = d.insert(() => A);
  if (t.img) {
    const O = d.append("image");
    O.attr("href", t.img), O.attr("width", c), O.attr("height", h), O.attr("preserveAspectRatio", "none"), O.attr(
      "transform",
      `translate(${-c / 2},${p ? _ / 2 - h : -_ / 2})`
    );
  }
  return u.attr(
    "transform",
    `translate(${-f.width / 2 - (f.x - (f.left ?? 0))},${p ? -h / 2 - f.height / 2 - x / 2 : h / 2 - f.height / 2 + x / 2})`
  ), v.attr(
    "transform",
    `translate(0,${p ? f.height / 2 + x / 2 : -f.height / 2 - x / 2})`
  ), Q(t, N), t.intersect = function(O) {
    if (q.info("iconSquare intersect", t, O), !t.label)
      return j.rect(t, O);
    const P = t.x ?? 0, H = t.y ?? 0, W = t.height ?? 0;
    let R = [];
    return p ? R = [
      { x: P - f.width / 2, y: H - W / 2 },
      { x: P + f.width / 2, y: H - W / 2 },
      { x: P + f.width / 2, y: H - W / 2 + f.height + x },
      { x: P + c / 2, y: H - W / 2 + f.height + x },
      { x: P + c / 2, y: H + W / 2 },
      { x: P - c / 2, y: H + W / 2 },
      { x: P - c / 2, y: H - W / 2 + f.height + x },
      { x: P - f.width / 2, y: H - W / 2 + f.height + x }
    ] : R = [
      { x: P - c / 2, y: H - W / 2 },
      { x: P + c / 2, y: H - W / 2 },
      { x: P + c / 2, y: H - W / 2 + h },
      { x: P + f.width / 2, y: H - W / 2 + h },
      { x: P + f.width / 2 / 2, y: H + W / 2 },
      { x: P - f.width / 2, y: H + W / 2 },
      { x: P - f.width / 2, y: H - W / 2 + h },
      { x: P - c / 2, y: H - W / 2 + h }
    ], j.polygon(t, R, O);
  }, d;
}
g(Nm, "imageSquare");
async function qm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = s, a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await st(e, t, et(t)), c = Math.max(l.width + (a ?? 0) * 2, t?.width ?? 0), h = Math.max(l.height + (o ?? 0) * 2, t?.height ?? 0), d = [
    { x: 0, y: 0 },
    { x: c, y: 0 },
    { x: c + 3 * h / 6, y: -h },
    { x: -3 * h / 6, y: -h }
  ];
  let f;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const p = V.svg(n), m = Z(t, {}), y = mt(d), x = p.path(y, m);
    f = n.insert(() => x, ":first-child").attr("transform", `translate(${-c / 2}, ${h / 2})`), u && f.attr("style", u);
  } else
    f = rr(n, c, h, d);
  return i && f.attr("style", i), t.width = c, t.height = h, Q(t, f), t.intersect = function(p) {
    return j.polygon(t, d, p);
  }, n;
}
g(qm, "inv_trapezoid");
async function Wm(e, t) {
  const { shapeSvg: r, bbox: i, label: s } = await st(e, t, "label"), o = r.insert("rect", ":first-child");
  return o.attr("width", 0.1).attr("height", 0.1), r.attr("class", "label edgeLabel"), s.attr(
    "transform",
    `translate(${-(i.width / 2) - (i.x - (i.left ?? 0))}, ${-(i.height / 2) - (i.y - (i.top ?? 0))})`
  ), Q(t, o), t.intersect = function(l) {
    return j.rect(t, l);
  }, r;
}
g(Wm, "labelRect");
async function zm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = s, a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await st(e, t, et(t)), c = (t?.height ?? l.height) + o, h = (t?.width ?? l.width) + a, d = [
    { x: 0, y: 0 },
    { x: h + 3 * c / 6, y: 0 },
    { x: h, y: -c },
    { x: -(3 * c) / 6, y: -c }
  ];
  let f;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const p = V.svg(n), m = Z(t, {}), y = mt(d), x = p.path(y, m);
    f = n.insert(() => x, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), u && f.attr("style", u);
  } else
    f = rr(n, h, c, d);
  return i && f.attr("style", i), t.width = h, t.height = c, Q(t, f), t.intersect = function(p) {
    return j.polygon(t, d, p);
  }, n;
}
g(zm, "lean_left");
async function Hm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = s, a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await st(e, t, et(t)), c = (t?.height ?? l.height) + o, h = (t?.width ?? l.width) + a, d = [
    { x: -3 * c / 6, y: 0 },
    { x: h, y: 0 },
    { x: h + 3 * c / 6, y: -c },
    { x: 0, y: -c }
  ];
  let f;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const p = V.svg(n), m = Z(t, {}), y = mt(d), x = p.path(y, m);
    f = n.insert(() => x, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), u && f.attr("style", u);
  } else
    f = rr(n, h, c, d);
  return i && f.attr("style", i), t.width = h, t.height = c, Q(t, f), t.intersect = function(p) {
    return j.polygon(t, d, p);
  }, n;
}
g(Hm, "lean_right");
function Ym(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.label = "", t.labelStyle = r;
  const s = e.insert("g").attr("class", et(t)).attr("id", t.domId ?? t.id), { cssStyles: o } = t, a = Math.max(35, t?.width ?? 0), n = Math.max(35, t?.height ?? 0), l = 7, c = [
    { x: a, y: 0 },
    { x: 0, y: n + l / 2 },
    { x: a - 2 * l, y: n + l / 2 },
    { x: 0, y: 2 * n },
    { x: a, y: n - l / 2 },
    { x: 2 * l, y: n - l / 2 }
  ], h = V.svg(s), d = Z(t, {});
  t.look !== "handDrawn" && (d.roughness = 0, d.fillStyle = "solid");
  const f = mt(c), u = h.path(f, d), p = s.insert(() => u, ":first-child");
  return p.attr("class", "outer-path"), o && t.look !== "handDrawn" && p.selectAll("path").attr("style", o), i && t.look !== "handDrawn" && p.selectAll("path").attr("style", i), p.attr("transform", `translate(-${a / 2},${-n})`), Q(t, p), t.intersect = function(m) {
    return q.info("lightningBolt intersect", t, m), j.polygon(t, c, m);
  }, s;
}
g(Ym, "lightningBolt");
var cv = /* @__PURE__ */ g((e, t, r, i, s, o, a) => [
  `M${e},${t + o}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + o + a}`,
  `a${s},${o} 0,0,0 ${r},0`
].join(" "), "createCylinderPathD"), dv = /* @__PURE__ */ g((e, t, r, i, s, o, a) => [
  `M${e},${t + o}`,
  `M${e + r},${t + o}`,
  `a${s},${o} 0,0,0 ${-r},0`,
  `l0,${i}`,
  `a${s},${o} 0,0,0 ${r},0`,
  `l0,${-i}`,
  `M${e},${t + o + a}`,
  `a${s},${o} 0,0,0 ${r},0`
].join(" "), "createOuterCylinderPathD"), uv = /* @__PURE__ */ g((e, t, r, i, s, o) => [`M${e - r / 2},${-i / 2}`, `a${s},${o} 0,0,0 ${r},0`].join(" "), "createInnerCylinderPathD"), Sd = 10, wd = 10;
async function Um(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 24 : s;
  if (t.width || t.height) {
    const x = t.width ?? 0;
    t.width = (t.width ?? 0) - o, t.width < wd && (t.width = wd);
    const k = x / 2 / (2.5 + x / 50);
    t.height = (t.height ?? 0) - a - k * 3, t.height < Sd && (t.height = Sd);
  }
  const { shapeSvg: n, bbox: l, label: c } = await st(e, t, et(t)), h = (t?.width ? t?.width : l.width) + o * 2, d = h / 2, f = d / (2.5 + h / 50), u = (t?.height ? t?.height : l.height) + f + a * 2, p = u * 0.1;
  let m;
  const { cssStyles: y } = t;
  if (t.look === "handDrawn") {
    const x = V.svg(n), C = dv(0, 0, h, u, d, f, p), k = uv(0, f, h, u, d, f), T = Z(t, {}), w = x.path(C, T), _ = x.path(k, T);
    n.insert(() => _, ":first-child").attr("class", "line"), m = n.insert(() => w, ":first-child"), m.attr("class", "basic label-container"), y && m.attr("style", y);
  } else {
    const x = cv(0, 0, h, u, d, f, p);
    m = n.insert("path", ":first-child").attr("d", x).attr("class", "basic label-container outer-path").attr("style", Wt(y)).attr("style", i);
  }
  return m.attr("label-offset-y", f), m.attr("transform", `translate(${-h / 2}, ${-(u / 2 + f)})`), Q(t, m), c.attr(
    "transform",
    `translate(${-(l.width / 2) - (l.x - (l.left ?? 0))}, ${-(l.height / 2) + f - (l.y - (l.top ?? 0))})`
  ), t.intersect = function(x) {
    const C = j.rect(t, x), k = C.x - (t.x ?? 0);
    if (d != 0 && (Math.abs(k) < (t.width ?? 0) / 2 || Math.abs(k) == (t.width ?? 0) / 2 && Math.abs(C.y - (t.y ?? 0)) > (t.height ?? 0) / 2 - f)) {
      let T = f * f * (1 - k * k / (d * d));
      T > 0 && (T = Math.sqrt(T)), T = f - T, x.y - (t.y ?? 0) > 0 && (T = -T), C.y += T;
    }
    return C;
  }, n;
}
g(Um, "linedCylinder");
async function Xm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  if (t.width || t.height) {
    const T = t.width;
    t.width = (T ?? 0) * 10 / 11 - o * 2, t.width < 10 && (t.width = 10), t.height = (t?.height ?? 0) - a * 2, t.height < 10 && (t.height = 10);
  }
  const { shapeSvg: n, bbox: l, label: c } = await st(e, t, et(t)), h = (t?.width ? t?.width : l.width) + (o ?? 0) * 2, d = (t?.height ? t?.height : l.height) + (a ?? 0) * 2, f = t.look === "neo" ? d / 4 : d / 8, u = d + f, { cssStyles: p } = t, m = V.svg(n), y = Z(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const x = [
    { x: -h / 2 - h / 2 * 0.1, y: -u / 2 },
    { x: -h / 2 - h / 2 * 0.1, y: u / 2 },
    ...xr(
      -h / 2 - h / 2 * 0.1,
      u / 2,
      h / 2 + h / 2 * 0.1,
      u / 2,
      f,
      0.8
    ),
    { x: h / 2 + h / 2 * 0.1, y: -u / 2 },
    { x: -h / 2 - h / 2 * 0.1, y: -u / 2 },
    { x: -h / 2, y: -u / 2 },
    { x: -h / 2, y: u / 2 * 1.1 },
    { x: -h / 2, y: -u / 2 }
  ], C = m.polygon(
    x.map((T) => [T.x, T.y]),
    y
  ), k = n.insert(() => C, ":first-child");
  return k.attr("class", "basic label-container outer-path"), p && t.look !== "handDrawn" && k.selectAll("path").attr("style", p), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), k.attr("transform", `translate(0,${-f / 2})`), c.attr(
    "transform",
    `translate(${-h / 2 + (t.padding ?? 0) + h / 2 * 0.1 / 2 - (l.x - (l.left ?? 0))},${-d / 2 + (t.padding ?? 0) - f / 2 - (l.y - (l.top ?? 0))})`
  ), Q(t, k), t.intersect = function(T) {
    return j.polygon(t, x, T);
  }, n;
}
g(Xm, "linedWaveEdgedRect");
async function Gm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = t.look === "neo" ? 10 : 5;
  (t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - o * 2 - 2 * n, 10), t.height = Math.max((t?.height ?? 0) - a * 2 - 2 * n, 10));
  const { shapeSvg: l, bbox: c, label: h } = await st(e, t, et(t)), d = (t?.width ? t?.width : c.width) + o * 2 + 2 * n, f = (t?.height ? t?.height : c.height) + a * 2 + 2 * n, u = d - 2 * n, p = f - 2 * n, m = -u / 2, y = -p / 2, { cssStyles: x } = t, C = V.svg(l), k = Z(t, {}), T = [
    { x: m - n, y: y + n },
    { x: m - n, y: y + p + n },
    { x: m + u - n, y: y + p + n },
    { x: m + u - n, y: y + p },
    { x: m + u, y: y + p },
    { x: m + u, y: y + p - n },
    { x: m + u + n, y: y + p - n },
    { x: m + u + n, y: y - n },
    { x: m + n, y: y - n },
    { x: m + n, y },
    { x: m, y },
    { x: m, y: y + n }
  ], w = [
    { x: m, y: y + n },
    { x: m + u - n, y: y + n },
    { x: m + u - n, y: y + p },
    { x: m + u, y: y + p },
    { x: m + u, y },
    { x: m, y }
  ];
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const _ = mt(T);
  let A = C.path(_, k);
  const v = mt(w);
  let N = C.path(v, k);
  t.look !== "handDrawn" && (A = nl(A), N = nl(N));
  const O = l.insert("g", ":first-child");
  return O.insert(() => A), O.insert(() => N), O.attr("class", "basic label-container outer-path"), x && t.look !== "handDrawn" && O.selectAll("path").attr("style", x), i && t.look !== "handDrawn" && O.selectAll("path").attr("style", i), h.attr(
    "transform",
    `translate(${-(c.width / 2) - n - (c.x - (c.left ?? 0))}, ${-(c.height / 2) + n - (c.y - (c.top ?? 0))})`
  ), Q(t, O), t.intersect = function(P) {
    return j.polygon(t, T, P);
  }, l;
}
g(Gm, "multiRect");
async function jm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await st(e, t, et(t)), n = t.padding ?? 0, l = t.look === "neo" ? 16 : n, c = t.look === "neo" ? 12 : n;
  let h = !0;
  (t.width || t.height) && (h = !1, t.width = (t?.width ?? 0) - l * 2, t.height = (t?.height ?? 0) - c * 3);
  const d = Math.max(o.width, t?.width ?? 0) + l * 2, f = Math.max(o.height, t?.height ?? 0) + c * 3, u = t.look === "neo" ? f / 4 : f / 8, p = f + (h ? u / 2 : -u / 2), m = -d / 2, y = -p / 2, x = 10, { cssStyles: C } = t, k = xr(
    m - x,
    y + p + x,
    m + d - x,
    y + p + x,
    u,
    0.8
  ), T = k?.[k.length - 1], w = [
    { x: m - x, y: y + x },
    { x: m - x, y: y + p + x },
    ...k,
    { x: m + d - x, y: T.y - x },
    { x: m + d, y: T.y - x },
    { x: m + d, y: T.y - 2 * x },
    { x: m + d + x, y: T.y - 2 * x },
    { x: m + d + x, y: y - x },
    { x: m + x, y: y - x },
    { x: m + x, y },
    { x: m, y },
    { x: m, y: y + x }
  ], _ = [
    { x: m, y: y + x },
    { x: m + d - x, y: y + x },
    { x: m + d - x, y: T.y - x },
    { x: m + d, y: T.y - x },
    { x: m + d, y },
    { x: m, y }
  ], A = V.svg(s), v = Z(t, {});
  t.look !== "handDrawn" && (v.roughness = 0, v.fillStyle = "solid");
  const N = mt(w), O = A.path(N, v), P = mt(_), H = A.path(P, v), W = s.insert(() => O, ":first-child");
  return W.insert(() => H), W.attr("class", "basic label-container outer-path"), C && t.look !== "handDrawn" && W.selectAll("path").attr("style", C), i && t.look !== "handDrawn" && W.selectAll("path").attr("style", i), W.attr("transform", `translate(0,${-u / 2})`), a.attr(
    "transform",
    `translate(${-(o.width / 2) - x - (o.x - (o.left ?? 0))}, ${-(o.height / 2) + x - u / 2 - (o.y - (o.top ?? 0))})`
  ), Q(t, W), t.intersect = function(R) {
    return j.polygon(t, w, R);
  }, s;
}
g(jm, "multiWaveEdgedRectangle");
async function Vm(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: s } = K(t);
  t.labelStyle = i, t.useHtmlLabels || ie(Lt()) || (t.centerLabel = !0);
  const { shapeSvg: a, bbox: n, label: l } = await st(e, t, et(t)), c = Math.max(n.width + (t.padding ?? 0) * 2, t?.width ?? 0), h = Math.max(n.height + (t.padding ?? 0) * 2, t?.height ?? 0), d = -c / 2, f = -h / 2, { cssStyles: u } = t, p = V.svg(a), m = Z(t, {
    fill: r.noteBkgColor,
    stroke: r.noteBorderColor
  });
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = p.rectangle(d, f, c, h, m), x = a.insert(() => y, ":first-child");
  return x.attr("class", "basic label-container outer-path"), l.attr("class", "label noteLabel"), u && t.look !== "handDrawn" && x.selectAll("path").attr("style", u), s && t.look !== "handDrawn" && x.selectAll("path").attr("style", s), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), Q(t, x), t.intersect = function(C) {
    return j.rect(t, C);
  }, a;
}
g(Vm, "note");
var fv = /* @__PURE__ */ g((e, t, r) => [
  `M${e + r / 2},${t}`,
  `L${e + r},${t - r / 2}`,
  `L${e + r / 2},${t - r}`,
  `L${e},${t - r / 2}`,
  "Z"
].join(" "), "createDecisionBoxPathD");
async function Zm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o } = await st(e, t, et(t)), a = o.width + (t.padding ?? 0), n = o.height + (t.padding ?? 0), l = a + n, c = 0.5, h = [
    { x: l / 2, y: 0 },
    { x: l, y: -l / 2 },
    { x: l / 2, y: -l },
    { x: 0, y: -l / 2 }
  ];
  let d;
  const { cssStyles: f } = t;
  if (t.look === "handDrawn") {
    const u = V.svg(s), p = Z(t, {}), m = fv(0, 0, l), y = u.path(m, p);
    d = s.insert(() => y, ":first-child").attr("transform", `translate(${-l / 2 + c}, ${l / 2})`), f && d.attr("style", f);
  } else
    d = rr(s, l, l, h), d.attr("transform", `translate(${-l / 2 + c}, ${l / 2})`);
  return i && d.attr("style", i), Q(t, d), t.calcIntersect = function(u, p) {
    const m = u.width, y = [
      { x: m / 2, y: 0 },
      { x: m, y: -m / 2 },
      { x: m / 2, y: -m },
      { x: 0, y: -m / 2 }
    ], x = j.polygon(u, y, p);
    return { x: x.x - 0.5, y: x.y - 0.5 };
  }, t.intersect = function(u) {
    return this.calcIntersect(t, u);
  }, s;
}
g(Zm, "question");
async function Km(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 21 : s ?? 0, a = t.look === "neo" ? 12 : s ?? 0, { shapeSvg: n, bbox: l, label: c } = await st(e, t, et(t)), h = (t?.width ?? l.width) + (t.look === "neo" ? o * 2 : o), d = (t?.height ?? l.height) + (t.look === "neo" ? a * 2 : a), f = -h / 2, u = -d / 2, p = u / 2, m = [
    { x: f + p, y: u },
    { x: f, y: 0 },
    { x: f + p, y: -u },
    { x: -f, y: -u },
    { x: -f, y: u }
  ], { cssStyles: y } = t, x = V.svg(n), C = Z(t, {});
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const k = mt(m), T = x.path(k, C), w = n.insert(() => T, ":first-child");
  return w.attr("class", "basic label-container outer-path"), y && t.look !== "handDrawn" && w.selectAll("path").attr("style", y), i && t.look !== "handDrawn" && w.selectAll("path").attr("style", i), w.attr("transform", `translate(${-p / 2},0)`), c.attr(
    "transform",
    `translate(${-p / 2 - l.width / 2 - (l.x - (l.left ?? 0))}, ${-(l.height / 2) - (l.y - (l.top ?? 0))})`
  ), Q(t, w), t.intersect = function(_) {
    return j.polygon(t, m, _);
  }, n;
}
g(Km, "rect_left_inv_arrow");
async function Qm(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  let s;
  t.cssClasses ? s = "node " + t.cssClasses : s = "node default";
  const o = e.insert("g").attr("class", s).attr("id", t.domId || t.id), a = o.insert("g"), n = o.insert("g").attr("class", "label").attr("style", i), l = t.description, c = t.label, h = await dr(n, c, t.labelStyle, !0, !0);
  let d = { width: 0, height: 0 };
  if (ie(bt())) {
    const v = h.children[0], N = ut(h);
    d = v.getBoundingClientRect(), N.attr("width", d.width), N.attr("height", d.height);
  }
  q.info("Text 2", l);
  const f = l || [], u = h.getBBox(), p = await dr(
    n,
    Array.isArray(f) ? f.join("<br/>") : f,
    t.labelStyle,
    !0,
    !0
  ), m = p.children[0], y = ut(p);
  d = m.getBoundingClientRect(), y.attr("width", d.width), y.attr("height", d.height);
  const x = (t.padding || 0) / 2;
  ut(p).attr(
    "transform",
    "translate( " + (d.width > u.width ? 0 : (u.width - d.width) / 2) + ", " + (u.height + x + 5) + ")"
  ), ut(h).attr(
    "transform",
    "translate( " + (d.width < u.width ? 0 : -(u.width - d.width) / 2) + ", 0)"
  ), d = n.node().getBBox(), n.attr(
    "transform",
    "translate(" + -d.width / 2 + ", " + (-d.height / 2 - x + 3) + ")"
  );
  const C = d.width + (t.padding || 0), k = d.height + (t.padding || 0), T = -d.width / 2 - x, w = -d.height / 2 - x;
  let _, A;
  if (t.look === "handDrawn") {
    const v = V.svg(o), N = Z(t, {}), O = v.path(
      Cr(T, w, C, k, t.rx || 0),
      N
    ), P = v.line(
      -d.width / 2 - x,
      -d.height / 2 - x + u.height + x,
      d.width / 2 + x,
      -d.height / 2 - x + u.height + x,
      N
    );
    A = o.insert(() => (q.debug("Rough node insert CXC", O), P), ":first-child"), _ = o.insert(() => (q.debug("Rough node insert CXC", O), O), ":first-child");
  } else
    _ = a.insert("rect", ":first-child"), A = a.insert("line"), _.attr("class", "outer title-state").attr("style", i).attr("x", -d.width / 2 - x).attr("y", -d.height / 2 - x).attr("width", d.width + (t.padding || 0)).attr("height", d.height + (t.padding || 0)), A.attr("class", "divider").attr("x1", -d.width / 2 - x).attr("x2", d.width / 2 + x).attr("y1", -d.height / 2 - x + u.height + x).attr("y2", -d.height / 2 - x + u.height + x);
  return Q(t, _), t.intersect = function(v) {
    return j.rect(t, v);
  }, o;
}
g(Qm, "rectWithTitle");
async function Jm(e, t, { config: { themeVariables: r } }) {
  const i = r?.radius ?? 5, s = {
    rx: i,
    ry: i,
    labelPaddingX: (t?.padding ?? 0) * 1,
    labelPaddingY: (t?.padding ?? 0) * 1
  };
  return Pi(e, t, s);
}
g(Jm, "roundedRect");
var _r = 8;
async function ty(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 12 : t.padding ?? 0, { shapeSvg: a, bbox: n, label: l } = await st(e, t, et(t)), c = (t?.width ?? n.width) + s * 2 + (t.look === "neo" ? _r : _r * 2), h = (t?.height ?? n.height) + o * 2, d = c - _r, f = h, u = _r - c / 2, p = -h / 2, { cssStyles: m } = t, y = V.svg(a), x = Z(t, {});
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const C = [
    { x: u, y: p },
    { x: u + d, y: p },
    { x: u + d, y: p + f },
    { x: u - _r, y: p + f },
    { x: u - _r, y: p },
    { x: u, y: p },
    { x: u, y: p + f }
  ], k = y.polygon(
    C.map((w) => [w.x, w.y]),
    x
  ), T = a.insert(() => k, ":first-child");
  return T.attr("class", "basic label-container outer-path").attr("style", Wt(m)), i && t.look !== "handDrawn" && T.selectAll("path").attr("style", i), m && t.look !== "handDrawn" && T.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${_r / 2 - n.width / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), Q(t, T), t.intersect = function(w) {
    return j.rect(t, w);
  }, a;
}
g(ty, "shadedProcess");
async function ey(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  (t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - o * 2, 10), t.height = Math.max((t?.height ?? 0) / 1.5 - a * 2, 10));
  const { shapeSvg: n, bbox: l, label: c } = await st(e, t, et(t)), h = (t?.width ? t?.width : l.width) + o * 2, d = ((t?.height ? t?.height : l.height) + a * 2) * 1.5, f = h, u = d / 1.5, p = -f / 2, m = -u / 2, { cssStyles: y } = t, x = V.svg(n), C = Z(t, {});
  t.look !== "handDrawn" && (C.roughness = 0, C.fillStyle = "solid");
  const k = [
    { x: p, y: m },
    { x: p, y: m + u },
    { x: p + f, y: m + u },
    { x: p + f, y: m - u / 2 }
  ], T = mt(k), w = x.path(T, C), _ = n.insert(() => w, ":first-child");
  return _.attr("class", "basic label-container  outer-path"), y && t.look !== "handDrawn" && _.selectChildren("path").attr("style", y), i && t.look !== "handDrawn" && _.selectChildren("path").attr("style", i), _.attr("transform", `translate(0, ${u / 4})`), c.attr(
    "transform",
    `translate(${-f / 2 + (t.padding ?? 0) - (l.x - (l.left ?? 0))}, ${-u / 4 + (t.padding ?? 0) - (l.y - (l.top ?? 0))})`
  ), Q(t, _), t.intersect = function(A) {
    return j.polygon(t, k, A);
  }, n;
}
g(ey, "slopedRect");
async function ry(e, t) {
  const r = t.padding ?? 0, i = t.look === "neo" ? 16 : r * 2, s = t.look === "neo" ? 12 : r, o = {
    rx: 0,
    ry: 0,
    labelPaddingX: t.labelPaddingX ?? i,
    labelPaddingY: s
  };
  return Pi(e, t, o);
}
g(ry, "squareRect");
async function iy(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 20 : s, a = t.look === "neo" ? 12 : s, { shapeSvg: n, bbox: l } = await st(e, t, et(t)), c = l.height + (t.look === "neo" ? a * 2 : a), h = l.width + c / 4 + (t.look === "neo" ? o * 2 : o), d = c / 2, { cssStyles: f } = t, u = V.svg(n), p = Z(t, {});
  t.look !== "handDrawn" && (p.roughness = 0, p.fillStyle = "solid");
  const m = [
    { x: -h / 2 + d, y: -c / 2 },
    { x: h / 2 - d, y: -c / 2 },
    ...Ls(-h / 2 + d, 0, d, 50, 90, 270),
    { x: h / 2 - d, y: c / 2 },
    ...Ls(h / 2 - d, 0, d, 50, 270, 450)
  ], y = mt(m), x = u.path(y, p), C = n.insert(() => x, ":first-child");
  return C.attr("class", "basic label-container outer-path"), f && t.look !== "handDrawn" && C.selectChildren("path").attr("style", f), i && t.look !== "handDrawn" && C.selectChildren("path").attr("style", i), Q(t, C), t.intersect = function(k) {
    return j.polygon(t, m, k);
  }, n;
}
g(iy, "stadium");
async function sy(e, t) {
  const r = {
    rx: t.look === "neo" ? 3 : 5,
    ry: t.look === "neo" ? 3 : 5
  };
  return Pi(e, t, r);
}
g(sy, "state");
function oy(e, t, { config: { themeVariables: r } }) {
  const { labelStyles: i, nodeStyles: s } = K(t);
  t.labelStyle = i;
  const { cssStyles: o } = t, { lineColor: a, stateBorder: n, nodeBorder: l, nodeShadow: c } = r;
  (t.width || t.height) && ((t.width ?? 0) < 14 && (t.width = 14), (t.height ?? 0) < 14 && (t.height = 14)), t.width || (t.width = 14), t.height || (t.height = 14);
  const h = e.insert("g").attr("class", "node default").attr("id", t.domId ?? t.id), d = V.svg(h), f = Z(t, {});
  t.look !== "handDrawn" && (f.roughness = 0, f.fillStyle = "solid");
  const u = d.circle(0, 0, t.width, {
    ...f,
    stroke: a,
    strokeWidth: 2
  }), p = n ?? l, m = (t.width ?? 0) * 5 / 14, y = d.circle(0, 0, m, {
    ...f,
    fill: p,
    stroke: p,
    strokeWidth: 2,
    fillStyle: "solid"
  }), x = h.insert(() => u, ":first-child");
  if (x.insert(() => y), t.look !== "handDrawn" && x.attr("class", "outer-path"), o && x.selectAll("path").attr("style", o), s && x.selectAll("path").attr("style", s), t.width < 25 && c && t.look !== "handDrawn") {
    const C = e.node()?.ownerSVGElement?.id ?? "", k = C ? `${C}-drop-shadow-small` : "drop-shadow-small";
    x.attr("style", `filter:url(#${k})`);
  }
  return Q(t, x), t.intersect = function(C) {
    return j.circle(t, (t.width ?? 0) / 2, C);
  }, h;
}
g(oy, "stateEnd");
function ay(e, t, { config: { themeVariables: r } }) {
  const { lineColor: i, nodeShadow: s } = r;
  (t.width || t.height) && ((t.width ?? 0) < 14 && (t.width = 14), (t.height ?? 0) < 14 && (t.height = 14)), t.width || (t.width = 14), t.height || (t.height = 14);
  const o = e.insert("g").attr("class", "node default").attr("id", t.domId || t.id);
  let a;
  if (t.look === "handDrawn") {
    const l = V.svg(o).circle(0, 0, t.width, ST(i));
    a = o.insert(() => l), a.attr("class", "state-start").attr("r", (t.width ?? 7) / 2).attr("width", t.width ?? 14).attr("height", t.height ?? 14);
  } else
    a = o.insert("circle", ":first-child"), a.attr("class", "state-start").attr("r", (t.width ?? 7) / 2).attr("width", t.width ?? 14).attr("height", t.height ?? 14);
  if (t.width < 25 && s && t.look !== "handDrawn") {
    const n = e.node()?.ownerSVGElement?.id ?? "", l = n ? `${n}-drop-shadow-small` : "drop-shadow-small";
    a.attr("style", `filter:url(#${l})`);
  }
  return Q(t, a), t.intersect = function(n) {
    return j.circle(t, (t.width ?? 7) / 2, n);
  }, o;
}
g(ay, "stateStart");
var ei = 8;
async function ny(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t?.padding ?? 8, o = t.look === "neo" ? 28 : s, a = t.look === "neo" ? 12 : s, { shapeSvg: n, bbox: l } = await st(e, t, et(t)), c = (t?.width ?? l.width) + 2 * ei + o, h = (t?.height ?? l.height) + a, d = c - 2 * ei, f = h, u = -c / 2, p = -h / 2, m = [
    { x: 0, y: 0 },
    { x: d, y: 0 },
    { x: d, y: -f },
    { x: 0, y: -f },
    { x: 0, y: 0 },
    { x: -8, y: 0 },
    { x: d + 8, y: 0 },
    { x: d + 8, y: -f },
    { x: -8, y: -f },
    { x: -8, y: 0 }
  ];
  if (t.look === "handDrawn") {
    const y = V.svg(n), x = Z(t, {}), C = y.rectangle(u, p, d + 16, f, x), k = y.line(u + ei, p, u + ei, p + f, x), T = y.line(u + ei + d, p, u + ei + d, p + f, x);
    n.insert(() => k, ":first-child"), n.insert(() => T, ":first-child");
    const w = n.insert(() => C, ":first-child"), { cssStyles: _ } = t;
    w.attr("class", "basic label-container").attr("style", Wt(_)), Q(t, w);
  } else {
    const y = rr(n, d, f, m);
    i && y.attr("style", i), Q(t, y);
  }
  return t.intersect = function(y) {
    return j.polygon(t, m, y);
  }, n;
}
g(ny, "subroutine");
var ln = 0.2;
async function ly(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  (t.width || t.height) && (t.height = Math.max((t?.height ?? 0) - a * 2, 10), t.width = Math.max(
    (t?.width ?? 0) - o * 2 - ln * (t.height + a * 2),
    10
  ));
  const { shapeSvg: n, bbox: l } = await st(e, t, et(t)), c = (t?.height ? t?.height : l.height) + a * 2, h = ln * c, d = ln * c, u = (t?.width ? t?.width : l.width) + o * 2 + h - h, p = c, m = -u / 2, y = -p / 2, { cssStyles: x } = t, C = V.svg(n), k = Z(t, {}), T = [
    { x: m - h / 2, y },
    { x: m + u + h / 2, y },
    { x: m + u + h / 2, y: y + p },
    { x: m - h / 2, y: y + p }
  ], w = [
    { x: m + u - h / 2, y: y + p },
    { x: m + u + h / 2, y: y + p },
    { x: m + u + h / 2, y: y + p - d }
  ];
  t.look !== "handDrawn" && (k.roughness = 0, k.fillStyle = "solid");
  const _ = mt(T), A = C.path(_, k), v = mt(w), N = C.path(v, { ...k, fillStyle: "solid" }), O = n.insert(() => N, ":first-child");
  return O.insert(() => A, ":first-child"), O.attr("class", "basic label-container outer-path"), x && t.look !== "handDrawn" && O.selectAll("path").attr("style", x), i && t.look !== "handDrawn" && O.selectAll("path").attr("style", i), Q(t, O), t.intersect = function(P) {
    return j.polygon(t, T, P);
  }, n;
}
g(ly, "taggedRect");
async function hy(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, label: a } = await st(e, t, et(t)), n = Math.max(o.width + (t.padding ?? 0) * 2, t?.width ?? 0), l = Math.max(o.height + (t.padding ?? 0) * 2, t?.height ?? 0), c = l / 8, h = 0.2 * n, d = 0.2 * l, f = l + c, { cssStyles: u } = t, p = V.svg(s), m = Z(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -n / 2 - n / 2 * 0.1, y: f / 2 },
    ...xr(
      -n / 2 - n / 2 * 0.1,
      f / 2,
      n / 2 + n / 2 * 0.1,
      f / 2,
      c,
      0.8
    ),
    { x: n / 2 + n / 2 * 0.1, y: -f / 2 },
    { x: -n / 2 - n / 2 * 0.1, y: -f / 2 }
  ], x = -n / 2 + n / 2 * 0.1, C = -f / 2 - d * 0.4, k = [
    { x: x + n - h, y: (C + l) * 1.3 },
    { x: x + n, y: C + l - d },
    { x: x + n, y: (C + l) * 0.9 },
    ...xr(
      x + n,
      (C + l) * 1.25,
      x + n - h,
      (C + l) * 1.3,
      -l * 0.02,
      0.5
    )
  ], T = mt(y), w = p.path(T, m), _ = mt(k), A = p.path(_, {
    ...m,
    fillStyle: "solid"
  }), v = s.insert(() => A, ":first-child");
  return v.insert(() => w, ":first-child"), v.attr("class", "basic label-container outer-path"), u && t.look !== "handDrawn" && v.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(0,${-c / 2})`), a.attr(
    "transform",
    `translate(${-n / 2 + (t.padding ?? 0) - (o.x - (o.left ?? 0))},${-l / 2 + (t.padding ?? 0) - c / 2 - (o.y - (o.top ?? 0))})`
  ), Q(t, v), t.intersect = function(N) {
    return j.polygon(t, y, N);
  }, s;
}
g(hy, "taggedWaveEdgedRectangle");
async function cy(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o } = await st(e, t, et(t)), a = Math.max(o.width + (t.padding ?? 0), t?.width || 0), n = Math.max(o.height + (t.padding ?? 0), t?.height || 0), l = -a / 2, c = -n / 2, h = s.insert("rect", ":first-child");
  return h.attr("class", "text").attr("style", i).attr("rx", 0).attr("ry", 0).attr("x", l).attr("y", c).attr("width", a).attr("height", n), Q(t, h), t.intersect = function(d) {
    return j.rect(t, d);
  }, s;
}
g(cy, "text");
var pv = /* @__PURE__ */ g((e, t, r, i, s, o) => `M${e},${t}
    a${s},${o} 0,0,1 0,${-i}
    l${r},0
    a${s},${o} 0,0,1 0,${i}
    M${r},${-i}
    a${s},${o} 0,0,0 0,${i}
    l${-r},0`, "createCylinderPathD"), gv = /* @__PURE__ */ g((e, t, r, i, s, o) => [
  `M${e},${t}`,
  `M${e + r},${t}`,
  `a${s},${o} 0,0,0 0,${-i}`,
  `l${-r},0`,
  `a${s},${o} 0,0,0 0,${i}`,
  `l${r},0`
].join(" "), "createOuterCylinderPathD"), mv = /* @__PURE__ */ g((e, t, r, i, s, o) => [`M${e + r / 2},${-i / 2}`, `a${s},${o} 0,0,0 0,${i}`].join(" "), "createInnerCylinderPathD"), Td = 5, _d = 10;
async function dy(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 12 : s / 2;
  if (t.width || t.height) {
    const m = t.height ?? 0;
    t.height = (t.height ?? 0) - o, t.height < Td && (t.height = Td);
    const x = m / 2 / (2.5 + m / 50);
    t.width = (t.width ?? 0) - o - x * 3, t.width < _d && (t.width = _d);
  }
  const { shapeSvg: a, bbox: n, label: l } = await st(e, t, et(t)), c = (t.height ? t.height : n.height) + o, h = c / 2, d = h / (2.5 + c / 50), f = (t.width ? t.width : n.width) + d + o, { cssStyles: u } = t;
  let p;
  if (t.look === "handDrawn") {
    const m = V.svg(a), y = gv(0, 0, f, c, d, h), x = mv(0, 0, f, c, d, h), C = m.path(y, Z(t, {})), k = m.path(x, Z(t, { fill: "none" }));
    p = a.insert(() => k, ":first-child"), p = a.insert(() => C, ":first-child"), p.attr("class", "basic label-container"), u && p.attr("style", u);
  } else {
    const m = pv(0, 0, f, c, d, h);
    p = a.insert("path", ":first-child").attr("d", m).attr("class", "basic label-container").attr("style", Wt(u)).attr("style", i), p.attr("class", "basic label-container outer-path"), u && p.selectAll("path").attr("style", u), i && p.selectAll("path").attr("style", i);
  }
  return p.attr("label-offset-x", d), p.attr("transform", `translate(${-f / 2}, ${c / 2} )`), l.attr(
    "transform",
    `translate(${-(n.width / 2) - d - (n.x - (n.left ?? 0))}, ${-(n.height / 2) - (n.y - (n.top ?? 0))})`
  ), Q(t, p), t.intersect = function(m) {
    const y = j.rect(t, m), x = y.y - (t.y ?? 0);
    if (h != 0 && (Math.abs(x) < (t.height ?? 0) / 2 || Math.abs(x) == (t.height ?? 0) / 2 && Math.abs(y.x - (t.x ?? 0)) > (t.width ?? 0) / 2 - d)) {
      let C = d * d * (1 - x * x / (h * h));
      C != 0 && (C = Math.sqrt(Math.abs(C))), C = d - C, m.x - (t.x ?? 0) > 0 && (C = -C), y.x += C;
    }
    return y;
  }, a;
}
g(dy, "tiltedCylinder");
async function uy(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = (t.look === "neo", s), a = t.look === "neo" ? s * 2 : s, { shapeSvg: n, bbox: l } = await st(e, t, et(t)), c = (t?.height ?? l.height) + o, h = (t?.width ?? l.width) + a, d = [
    { x: -3 * c / 6, y: 0 },
    { x: h + 3 * c / 6, y: 0 },
    { x: h, y: -c },
    { x: 0, y: -c }
  ];
  let f;
  const { cssStyles: u } = t;
  if (t.look === "handDrawn") {
    const p = V.svg(n), m = Z(t, {}), y = mt(d), x = p.path(y, m);
    f = n.insert(() => x, ":first-child").attr("transform", `translate(${-h / 2}, ${c / 2})`), u && f.attr("style", u);
  } else
    f = rr(n, h, c, d);
  return i && f.attr("style", i), t.width = h, t.height = c, Q(t, f), t.intersect = function(p) {
    return j.polygon(t, d, p);
  }, n;
}
g(uy, "trapezoid");
async function fy(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s, n = 15, l = 5;
  (t.width || t.height) && (t.height = (t.height ?? 0) - a * 2, t.height < l && (t.height = l), t.width = (t.width ?? 0) - o * 2, t.width < n && (t.width = n));
  const { shapeSvg: c, bbox: h } = await st(e, t, et(t)), d = (t?.width ? t?.width : h.width) + o * 2, f = (t?.height ? t?.height : h.height) + a * 2, { cssStyles: u } = t, p = V.svg(c), m = Z(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -d / 2 * 0.8, y: -f / 2 },
    { x: d / 2 * 0.8, y: -f / 2 },
    { x: d / 2, y: -f / 2 * 0.6 },
    { x: d / 2, y: f / 2 },
    { x: -d / 2, y: f / 2 },
    { x: -d / 2, y: -f / 2 * 0.6 }
  ], x = mt(y), C = p.path(x, m), k = c.insert(() => C, ":first-child");
  return k.attr("class", "basic label-container outer-path"), u && t.look !== "handDrawn" && k.selectChildren("path").attr("style", u), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), Q(t, k), t.intersect = function(T) {
    return j.polygon(t, y, T);
  }, c;
}
g(fy, "trapezoidalPentagon");
var vd = 10, Bd = 10;
async function py(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? s * 2 : s;
  (t.width || t.height) && (t.width = ((t?.width ?? 0) - o) / 2, t.width < Bd && (t.width = Bd), t.height = t?.height ?? 0, t.height < vd && (t.height = vd));
  const { shapeSvg: a, bbox: n, label: l } = await st(e, t, et(t)), c = tr(bt().flowchart?.htmlLabels), h = (t?.width ? t?.width : n.width) + o, d = t?.height ? t?.height : h + n.height, f = d, u = [
    { x: 0, y: 0 },
    { x: f, y: 0 },
    { x: f / 2, y: -d }
  ], { cssStyles: p } = t, m = V.svg(a), y = Z(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const x = mt(u), C = m.path(x, y), k = a.insert(() => C, ":first-child").attr("transform", `translate(${-d / 2}, ${d / 2})`).attr("class", "outer-path");
  return p && t.look !== "handDrawn" && k.selectChildren("path").attr("style", p), i && t.look !== "handDrawn" && k.selectChildren("path").attr("style", i), t.width = h, t.height = d, Q(t, k), l.attr(
    "transform",
    `translate(${-n.width / 2 - (n.x - (n.left ?? 0))}, ${d / 2 - (n.height + (t.padding ?? 0) / (c ? 2 : 1) - (n.y - (n.top ?? 0)))})`
  ), t.intersect = function(T) {
    return q.info("Triangle intersect", t, u, T), j.polygon(t, u, T);
  }, a;
}
g(py, "triangle");
async function gy(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 12 : s;
  let n = !0;
  (t.width || t.height) && (n = !1, t.width = (t?.width ?? 0) - o * 2, t.width < 10 && (t.width = 10), t.height = (t?.height ?? 0) - a * 2, t.height < 10 && (t.height = 10));
  const { shapeSvg: l, bbox: c, label: h } = await st(e, t, et(t)), d = (t?.width ? t?.width : c.width) + (o ?? 0) * 2, f = (t?.height ? t?.height : c.height) + (a ?? 0) * 2, u = t.look === "neo" ? f / 4 : f / 8, p = f + (n ? u : -u), { cssStyles: m } = t, x = 14 - d, C = x > 0 ? x / 2 : 0, k = V.svg(l), T = Z(t, {});
  t.look !== "handDrawn" && (T.roughness = 0, T.fillStyle = "solid");
  const w = [
    { x: -d / 2 - C, y: p / 2 },
    ...xr(
      -d / 2 - C,
      p / 2,
      d / 2 + C,
      p / 2,
      u,
      0.8
    ),
    { x: d / 2 + C, y: -p / 2 },
    { x: -d / 2 - C, y: -p / 2 }
  ], _ = mt(w), A = k.path(_, T), v = l.insert(() => A, ":first-child");
  return v.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && v.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && v.selectAll("path").attr("style", i), v.attr("transform", `translate(0,${-u / 2})`), h.attr(
    "transform",
    `translate(${-d / 2 + (t.padding ?? 0) - (c.x - (c.left ?? 0))},${-f / 2 + (t.padding ?? 0) - u - (c.y - (c.top ?? 0))})`
  ), Q(t, v), t.intersect = function(N) {
    return j.polygon(t, w, N);
  }, l;
}
g(gy, "waveEdgedRectangle");
async function my(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.padding ?? 0, o = t.look === "neo" ? 16 : s, a = t.look === "neo" ? 20 : s;
  if (t.width || t.height) {
    t.width = t?.width ?? 0, t.width < 20 && (t.width = 20), t.height = t?.height ?? 0, t.height < 10 && (t.height = 10);
    const T = Math.min(t.height * 0.2, t.height / 4);
    t.height = Math.ceil(t.height - a - T * (20 / 9)), t.width = t.width - o * 2;
  }
  const { shapeSvg: n, bbox: l } = await st(e, t, et(t)), c = (t?.width ? t?.width : l.width) + o * 2, h = (t?.height ? t?.height : l.height) + a, d = h / 8, f = h + d * 2, { cssStyles: u } = t, p = V.svg(n), m = Z(t, {});
  t.look !== "handDrawn" && (m.roughness = 0, m.fillStyle = "solid");
  const y = [
    { x: -c / 2, y: f / 2 },
    ...xr(-c / 2, f / 2, c / 2, f / 2, d, 1),
    { x: c / 2, y: -f / 2 },
    ...xr(c / 2, -f / 2, -c / 2, -f / 2, d, -1)
  ], x = mt(y), C = p.path(x, m), k = n.insert(() => C, ":first-child");
  return k.attr("class", "basic label-container"), u && t.look !== "handDrawn" && k.selectAll("path").attr("style", u), i && t.look !== "handDrawn" && k.selectAll("path").attr("style", i), Q(t, k), t.intersect = function(T) {
    return j.polygon(t, y, T);
  }, n;
}
g(my, "waveRectangle");
var Ft = 10;
async function yy(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t.look === "neo" ? 16 : t.padding ?? 0, o = t.look === "neo" ? 12 : t.padding ?? 0;
  (t.width || t.height) && (t.width = Math.max((t?.width ?? 0) - s * 2 - Ft, 10), t.height = Math.max((t?.height ?? 0) - o * 2 - Ft, 10));
  const { shapeSvg: a, bbox: n, label: l } = await st(e, t, et(t)), c = (t?.width ? t?.width : n.width) + s * 2 + Ft, h = (t?.height ? t?.height : n.height) + o * 2 + Ft, d = c - Ft, f = h - Ft, u = -d / 2, p = -f / 2, { cssStyles: m } = t, y = V.svg(a), x = Z(t, {}), C = [
    { x: u - Ft, y: p - Ft },
    { x: u - Ft, y: p + f },
    { x: u + d, y: p + f },
    { x: u + d, y: p - Ft }
  ], k = `M${u - Ft},${p - Ft} L${u + d},${p - Ft} L${u + d},${p + f} L${u - Ft},${p + f} L${u - Ft},${p - Ft}
                M${u - Ft},${p} L${u + d},${p}
                M${u},${p - Ft} L${u},${p + f}`;
  t.look !== "handDrawn" && (x.roughness = 0, x.fillStyle = "solid");
  const T = y.path(k, x), w = a.insert(() => T, ":first-child");
  return w.attr("transform", `translate(${Ft / 2}, ${Ft / 2})`), w.attr("class", "basic label-container outer-path"), m && t.look !== "handDrawn" && w.selectAll("path").attr("style", m), i && t.look !== "handDrawn" && w.selectAll("path").attr("style", i), l.attr(
    "transform",
    `translate(${-(n.width / 2) + Ft / 2 - (n.x - (n.left ?? 0))}, ${-(n.height / 2) + Ft / 2 - (n.y - (n.top ?? 0))})`
  ), Q(t, w), t.intersect = function(_) {
    return j.polygon(t, C, _);
  }, a;
}
g(yy, "windowPane");
var Ld = /* @__PURE__ */ new Set(["redux-color", "redux-dark-color"]), yv = /* @__PURE__ */ new Set(["redux", "redux-dark", "redux-color", "redux-dark-color"]);
async function bh(e, t) {
  const r = t;
  r.alias && (t.label = r.alias);
  const { theme: i, themeVariables: s } = Lt(), { rowEven: o, rowOdd: a, nodeBorder: n, borderColorArray: l } = s;
  if (t.look === "handDrawn") {
    const { themeVariables: it } = Lt(), { background: gt } = it, wt = {
      ...t,
      id: t.id + "-background",
      domId: (t.domId || t.id) + "-background",
      look: "default",
      cssStyles: ["stroke: none", `fill: ${gt}`]
    };
    await bh(e, wt);
  }
  const c = Lt();
  t.useHtmlLabels = c.htmlLabels;
  let h = c.er?.diagramPadding ?? 10, d = c.er?.entityPadding ?? 6;
  const { cssStyles: f } = t, { labelStyles: u, nodeStyles: p } = K(t);
  if (r.attributes.length === 0 && t.label) {
    const it = {
      rx: 0,
      ry: 0,
      labelPaddingX: h,
      labelPaddingY: h * 1.5
    };
    Ke(t.label, c) + it.labelPaddingX * 2 < c.er.minEntityWidth && (t.width = c.er.minEntityWidth);
    const gt = await Pi(e, t, it);
    if (i != null && Ld.has(i)) {
      const wt = r.colorIndex ?? 0;
      gt.attr("data-color-id", `color-${wt % l.length}`);
    }
    if (!tr(c.htmlLabels)) {
      const wt = gt.select("text"), Bt = wt.node()?.getBBox();
      wt.attr("transform", `translate(${-Bt.width / 2}, 0)`);
    }
    return gt;
  }
  c.htmlLabels || (h *= 1.25, d *= 1.25);
  let m = et(t);
  m || (m = "node default");
  const y = e.insert("g").attr("class", m).attr("id", t.domId || t.id), x = await si(y, t.label ?? "", c, 0, 0, ["name"], u);
  x.height += d;
  let C = 0;
  const k = [], T = [];
  let w = 0, _ = 0, A = 0, v = 0, N = !0, O = !0;
  for (const it of r.attributes) {
    const gt = await si(
      y,
      it.type,
      c,
      0,
      C,
      ["attribute-type"],
      u
    );
    w = Math.max(w, gt.width + h);
    const wt = await si(
      y,
      it.name,
      c,
      0,
      C,
      ["attribute-name"],
      u
    );
    _ = Math.max(_, wt.width + h);
    const Bt = await si(
      y,
      it.keys.join(),
      c,
      0,
      C,
      ["attribute-keys"],
      u
    );
    A = Math.max(A, Bt.width + h);
    const _t = await si(
      y,
      it.comment,
      c,
      0,
      C,
      ["attribute-comment"],
      u
    );
    v = Math.max(v, _t.width + h);
    const dt = Math.max(gt.height, wt.height, Bt.height, _t.height) + d;
    T.push({ yOffset: C, rowHeight: dt }), C += dt;
  }
  let P = 4;
  A <= h && (N = !1, A = 0, P--), v <= h && (O = !1, v = 0, P--);
  const H = y.node().getBBox();
  if (x.width + h * 2 - (w + _ + A + v) > 0) {
    const it = x.width + h * 2 - (w + _ + A + v);
    w += it / P, _ += it / P, A > 0 && (A += it / P), v > 0 && (v += it / P);
  }
  const W = w + _ + A + v, R = V.svg(y), M = Z(t, {});
  t.look !== "handDrawn" && (M.roughness = 0, M.fillStyle = "solid");
  let E = 0;
  T.length > 0 && (E = T.reduce((it, gt) => it + (gt?.rowHeight ?? 0), 0));
  const B = Math.max(H.width + h * 2, t?.width || 0, W), F = Math.max((E ?? 0) + x.height, t?.height || 0), z = -B / 2, Y = -F / 2;
  if (y.selectAll("g:not(:first-child)").each((it, gt, wt) => {
    const Bt = ut(wt[gt]), _t = Bt.attr("transform");
    let dt = 0, ye = 0;
    if (_t) {
      const Xr = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(_t);
      Xr && (dt = parseFloat(Xr[1]), ye = parseFloat(Xr[2]), Bt.attr("class").includes("attribute-name") ? dt += w : Bt.attr("class").includes("attribute-keys") ? dt += w + _ : Bt.attr("class").includes("attribute-comment") && (dt += w + _ + A));
    }
    Bt.attr(
      "transform",
      `translate(${z + h / 2 + dt}, ${ye + Y + x.height + d / 2})`
    );
  }), y.select(".name").attr("transform", "translate(" + -x.width / 2 + ", " + (Y + d / 2) + ")"), i != null && Ld.has(i)) {
    const it = r.colorIndex ?? 0;
    y.attr("data-color-id", `color-${it % l.length}`);
  }
  const G = R.rectangle(z, Y, B, F, M), ht = y.insert(() => G, ":first-child").attr("class", "outer-path").attr("style", f.join(""));
  k.push(0);
  for (const [it, gt] of T.entries()) {
    const Bt = (it + 1) % 2 === 0 && gt.yOffset !== 0, _t = R.rectangle(z, x.height + Y + gt?.yOffset, B, gt?.rowHeight, {
      ...M,
      fill: Bt ? o : a,
      stroke: n
    });
    y.insert(() => _t, "g.label").attr("style", f.join("")).attr("class", `row-rect-${Bt ? "even" : "odd"}`);
  }
  const rt = 1e-4;
  let lt = oi(z, x.height + Y, B + z, x.height + Y, rt), ct = R.polygon(
    lt.map((it) => [it.x, it.y]),
    M
  );
  if (y.insert(() => ct).attr("class", "divider"), lt = oi(w + z, x.height + Y, w + z, F + Y, rt), ct = R.polygon(
    lt.map((it) => [it.x, it.y]),
    M
  ), y.insert(() => ct).attr("class", "divider"), N) {
    const it = w + _ + z;
    lt = oi(it, x.height + Y, it, F + Y, rt), ct = R.polygon(
      lt.map((gt) => [gt.x, gt.y]),
      M
    ), y.insert(() => ct).attr("class", "divider");
  }
  if (O) {
    const it = w + _ + A + z;
    lt = oi(it, x.height + Y, it, F + Y, rt), ct = R.polygon(
      lt.map((gt) => [gt.x, gt.y]),
      M
    ), y.insert(() => ct).attr("class", "divider");
  }
  for (const it of k) {
    const gt = x.height + Y + it;
    lt = oi(z, gt, B + z, gt, rt), ct = R.polygon(
      lt.map((wt) => [wt.x, wt.y]),
      M
    ), y.insert(() => ct).attr("class", "divider");
  }
  if (Q(t, ht), p && t.look !== "handDrawn")
    if (i != null && yv.has(i))
      y.selectAll("path").attr("style", p);
    else {
      const gt = p.split(";")?.filter((wt) => wt.includes("stroke"))?.map((wt) => `${wt}`).join("; ");
      y.selectAll("path").attr("style", gt ?? ""), y.selectAll(".row-rect-even path").attr("style", p);
    }
  return t.intersect = function(it) {
    return j.rect(t, it);
  }, y;
}
g(bh, "erBox");
async function si(e, t, r, i = 0, s = 0, o = [], a = "") {
  const n = e.insert("g").attr("class", `label ${o.join(" ")}`).attr("transform", `translate(${i}, ${s})`).attr("style", a);
  t !== xc(t) && (t = xc(t), t = t.replaceAll("<", "&lt;").replaceAll(">", "&gt;"));
  const l = n.node().appendChild(
    await er(
      n,
      t,
      {
        width: Ke(t, r) + 100,
        style: a,
        useHtmlLabels: r.htmlLabels
      },
      r
    )
  );
  if (t.includes("&lt;") || t.includes("&gt;")) {
    let h = l.children[0];
    for (h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">"); h.childNodes[0]; )
      h = h.childNodes[0], h.textContent = h.textContent.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  }
  let c = l.getBBox();
  if (tr(r.htmlLabels)) {
    const h = l.children[0];
    h.style.textAlign = "start";
    const d = ut(l);
    c = h.getBoundingClientRect(), d.attr("width", c.width), d.attr("height", c.height);
  }
  return c;
}
g(si, "addText");
function oi(e, t, r, i, s) {
  return e === r ? [
    { x: e - s / 2, y: t },
    { x: e + s / 2, y: t },
    { x: r + s / 2, y: i },
    { x: r - s / 2, y: i }
  ] : [
    { x: e, y: t - s / 2 },
    { x: e, y: t + s / 2 },
    { x: r, y: i + s / 2 },
    { x: r, y: i - s / 2 }
  ];
}
g(oi, "lineToPolygon");
async function xy(e, t, r, i, s = r.class.padding ?? 12) {
  const o = i ? 0 : 3, a = e.insert("g").attr("class", et(t)).attr("id", t.domId || t.id);
  let n = null, l = null, c = null, h = null, d = 0, f = 0, u = 0;
  if (n = a.insert("g").attr("class", "annotation-group text"), t.annotations.length > 0) {
    const C = t.annotations[0];
    await hs(n, { text: `«${C}»` }, 0), d = n.node().getBBox().height;
  }
  l = a.insert("g").attr("class", "label-group text"), await hs(l, t, 0, ["font-weight: bolder"]);
  const p = l.node().getBBox();
  f = p.height, c = a.insert("g").attr("class", "members-group text");
  let m = 0;
  for (const C of t.members) {
    const k = await hs(c, C, m, [C.parseClassifier()]);
    m += k + o;
  }
  u = c.node().getBBox().height, u <= 0 && (u = s / 2), h = a.insert("g").attr("class", "methods-group text");
  let y = 0;
  for (const C of t.methods) {
    const k = await hs(h, C, y, [C.parseClassifier()]);
    y += k + o;
  }
  let x = a.node().getBBox();
  if (n !== null) {
    const C = n.node().getBBox();
    n.attr("transform", `translate(${-C.width / 2})`);
  }
  return l.attr("transform", `translate(${-p.width / 2}, ${d})`), x = a.node().getBBox(), c.attr(
    "transform",
    `translate(0, ${d + f + s * 2})`
  ), x = a.node().getBBox(), h.attr(
    "transform",
    `translate(0, ${d + f + (u ? u + s * 4 : s * 2)})`
  ), x = a.node().getBBox(), { shapeSvg: a, bbox: x };
}
g(xy, "textHelper");
async function hs(e, t, r, i = []) {
  const s = e.insert("g").attr("class", "label").attr("style", i.join("; ")), o = Lt();
  let a = "useHtmlLabels" in t ? t.useHtmlLabels : tr(o.htmlLabels) ?? !0, n = "";
  "text" in t ? n = t.text : n = t.label, !a && n.startsWith("\\") && (n = n.substring(1)), Cs(n) && (a = !0);
  const l = await er(
    s,
    Al(Wr(n)),
    {
      width: Ke(n, o) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: a
    },
    o
  );
  let c, h = 1;
  if (a) {
    const d = l.children[0], f = ut(l);
    h = d.innerHTML.split("<br>").length, d.innerHTML.includes("</math>") && (h += d.innerHTML.split("<mrow>").length - 1);
    const u = d.getElementsByTagName("img");
    if (u) {
      const p = n.replace(/<img[^>]*>/g, "").trim() === "";
      await Promise.all(
        [...u].map(
          (m) => new Promise((y) => {
            function x() {
              if (m.style.display = "flex", m.style.flexDirection = "column", p) {
                const C = o.fontSize?.toString() ?? window.getComputedStyle(document.body).fontSize, T = parseInt(C, 10) * 5 + "px";
                m.style.minWidth = T, m.style.maxWidth = T;
              } else
                m.style.width = "100%";
              y(m);
            }
            g(x, "setupImage"), setTimeout(() => {
              m.complete && x();
            }), m.addEventListener("error", x), m.addEventListener("load", x);
          })
        )
      );
    }
    c = d.getBoundingClientRect(), f.attr("width", c.width), f.attr("height", c.height);
  } else {
    i.includes("font-weight: bolder") && ut(l).selectAll("tspan").attr("font-weight", ""), h = l.children.length;
    const d = l.children[0];
    (l.textContent === "" || l.textContent.includes("&gt")) && (d.textContent = n[0] + n.substring(1).replaceAll("&gt;", ">").replaceAll("&lt;", "<").trim(), n[1] === " " && (d.textContent = d.textContent[0] + " " + d.textContent.substring(1))), d.textContent === "undefined" && (d.textContent = ""), c = l.getBBox();
  }
  return s.attr("transform", "translate(0," + (-c.height / (2 * h) + r) + ")"), c.height;
}
g(hs, "addText");
async function Cy(e, t) {
  const r = bt(), { themeVariables: i } = r, { useGradient: s } = i, o = r.class.padding ?? 12, a = o, n = t.useHtmlLabels ?? tr(r.htmlLabels) ?? !0, l = t;
  l.annotations = l.annotations ?? [], l.members = l.members ?? [], l.methods = l.methods ?? [];
  const { shapeSvg: c, bbox: h } = await xy(e, t, r, n, a), { labelStyles: d, nodeStyles: f } = K(t);
  t.labelStyle = d, t.cssStyles = l.styles || "";
  const u = l.styles?.join(";") || f || "";
  t.cssStyles || (t.cssStyles = u.replaceAll("!important", "").split(";"));
  const p = l.members.length === 0 && l.methods.length === 0 && !r.class?.hideEmptyMembersBox, m = V.svg(c), y = Z(t, {});
  t.look !== "handDrawn" && (y.roughness = 0, y.fillStyle = "solid");
  const x = Math.max(t.width ?? 0, h.width);
  let C = Math.max(t.height ?? 0, h.height);
  const k = (t.height ?? 0) > h.height;
  l.members.length === 0 && l.methods.length === 0 ? C += a : l.members.length > 0 && l.methods.length === 0 && (C += a * 2);
  const T = -x / 2, w = -C / 2;
  let _ = p ? o * 2 : l.members.length === 0 && l.methods.length === 0 ? -o : 0;
  k && (_ = o * 2);
  const A = m.rectangle(
    T - o,
    w - o - (p ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0),
    x + 2 * o,
    C + 2 * o + _,
    y
  ), v = c.insert(() => A, ":first-child");
  v.attr("class", "basic label-container outer-path");
  const N = v.node().getBBox(), O = c.select(".annotation-group").node().getBBox().height - (p ? o / 2 : 0) || 0, P = c.select(".label-group").node().getBBox().height - (p ? o / 2 : 0) || 0, H = c.select(".members-group").node().getBBox().height - (p ? o / 2 : 0) || 0, W = (O + P + w + o - (w - o - (p ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0))) / 2;
  if (c.selectAll(".text").each((R, M, E) => {
    const B = ut(E[M]), F = B.attr("transform");
    let z = 0;
    if (F) {
      const rt = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(F);
      rt && (z = parseFloat(rt[2]));
    }
    let Y = z + w + o - (p ? o : l.members.length === 0 && l.methods.length === 0 ? -o / 2 : 0);
    if (B.attr("class").includes("methods-group")) {
      const ht = Math.max(H, a / 2);
      k ? Y = Math.max(
        W,
        O + P + ht + w + a * 2 + o
      ) + a * 2 : Y = O + P + ht + w + a * 4 + o;
    }
    l.members.length === 0 && l.methods.length === 0 && r.class?.hideEmptyMembersBox && (l.annotations.length > 0 ? Y = z - a : Y = z), n || (Y -= 4);
    let G = T;
    (B.attr("class").includes("label-group") || B.attr("class").includes("annotation-group")) && (G = -B.node()?.getBBox().width / 2 || 0, c.selectAll("text").each(function(ht, rt, lt) {
      window.getComputedStyle(lt[rt]).textAnchor === "middle" && (G = 0);
    })), B.attr("transform", `translate(${G}, ${Y})`);
  }), l.members.length > 0 || l.methods.length > 0 || p) {
    const R = O + P + w + o, M = m.line(
      N.x,
      R,
      N.x + N.width,
      R + 1e-3,
      y
    );
    c.insert(() => M).attr("class", `divider${t.look === "neo" && !s ? " neo-line" : ""}`).attr("style", u);
  }
  if (p || l.members.length > 0 || l.methods.length > 0) {
    const R = O + P + H + w + a * 2 + o, M = m.line(
      N.x,
      k ? Math.max(W, R) : R,
      N.x + N.width,
      (k ? Math.max(W, R) : R) + 1e-3,
      y
    );
    c.insert(() => M).attr("class", `divider${t.look === "neo" && !s ? " neo-line" : ""}`).attr("style", u);
  }
  if (l.look !== "handDrawn" && c.selectAll("path").attr("style", u), v.select(":nth-child(2)").attr("style", u), c.selectAll(".divider").select("path").attr("style", u), t.labelStyle ? c.selectAll("span").attr("style", t.labelStyle) : c.selectAll("span").attr("style", u), !n) {
    const R = RegExp(/color\s*:\s*([^;]*)/), M = R.exec(u);
    if (M) {
      const E = M[0].replace("color", "fill");
      c.selectAll("tspan").attr("style", E);
    } else if (d) {
      const E = R.exec(d);
      if (E) {
        const B = E[0].replace("color", "fill");
        c.selectAll("tspan").attr("style", B);
      }
    }
  }
  return Q(t, v), t.intersect = function(R) {
    return j.rect(t, R);
  }, c;
}
g(Cy, "classBox");
async function by(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const s = t, o = t, a = 20, n = 20, l = "verifyMethod" in t, c = et(t), { themeVariables: h } = bt(), { borderColorArray: d, requirementEdgeLabelBackground: f } = h, u = e.insert("g").attr("class", c).attr("id", t.domId ?? t.id);
  let p;
  l ? p = await Oe(
    u,
    `&lt;&lt;${s.type}&gt;&gt;`,
    0,
    t.labelStyle
  ) : p = await Oe(u, "&lt;&lt;Element&gt;&gt;", 0, t.labelStyle);
  let m = p;
  const y = await Oe(
    u,
    s.name,
    m,
    t.labelStyle + "; font-weight: bold;"
  );
  if (m += y + n, l) {
    const N = await Oe(
      u,
      `${s.requirementId ? `ID: ${s.requirementId}` : ""}`,
      m,
      t.labelStyle
    );
    m += N;
    const O = await Oe(
      u,
      `${s.text ? `Text: ${s.text}` : ""}`,
      m,
      t.labelStyle
    );
    m += O;
    const P = await Oe(
      u,
      `${s.risk ? `Risk: ${s.risk}` : ""}`,
      m,
      t.labelStyle
    );
    m += P, await Oe(
      u,
      `${s.verifyMethod ? `Verification: ${s.verifyMethod}` : ""}`,
      m,
      t.labelStyle
    );
  } else {
    const N = await Oe(
      u,
      `${o.type ? `Type: ${o.type}` : ""}`,
      m,
      t.labelStyle
    );
    m += N, await Oe(
      u,
      `${o.docRef ? `Doc Ref: ${o.docRef}` : ""}`,
      m,
      t.labelStyle
    );
  }
  const x = (u.node()?.getBBox().width ?? 200) + a, C = (u.node()?.getBBox().height ?? 200) + a, k = -x / 2, T = -C / 2, w = V.svg(u), _ = Z(t, {});
  t.look !== "handDrawn" && (_.roughness = 0, _.fillStyle = "solid");
  const A = w.rectangle(k, T, x, C, _), v = u.insert(() => A, ":first-child");
  if (v.attr("class", "basic label-container outer-path").attr("style", i), d?.length) {
    const N = t.colorIndex ?? 0;
    u.attr("data-color-id", `color-${N % d.length}`);
  }
  if (u.selectAll(".label").each((N, O, P) => {
    const H = ut(P[O]), W = H.attr("transform");
    let R = 0, M = 0;
    if (W) {
      const z = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(W);
      z && (R = parseFloat(z[1]), M = parseFloat(z[2]));
    }
    const E = M - C / 2;
    let B = k + a / 2;
    (O === 0 || O === 1) && (B = R), H.attr("transform", `translate(${B}, ${E + a})`);
  }), m > p + y + n) {
    const N = T + p + y + n;
    let O;
    if (t.look === "neo") {
      const W = [
        [k, N],
        [k + x, N],
        [k + x, N + 1e-3],
        [k, N + 1e-3]
      ];
      O = w.polygon(W, _);
    } else
      O = w.line(k, N, k + x, N, _);
    u.insert(() => O).attr("class", "divider");
  }
  return Q(t, v), t.intersect = function(N) {
    return j.rect(t, N);
  }, i && t.look !== "handDrawn" && (f || d?.length) && u.selectAll("path").attr("style", i), u;
}
g(by, "requirementBox");
async function Oe(e, t, r, i = "") {
  if (t === "")
    return 0;
  const s = e.insert("g").attr("class", "label").attr("style", i), o = bt(), a = o.htmlLabels ?? !0, n = await er(
    s,
    Al(Wr(t)),
    {
      width: Ke(t, o) + 50,
      // Add room for error when splitting text into multiple lines
      classes: "markdown-node-label",
      useHtmlLabels: a,
      style: i
    },
    o
  );
  let l;
  if (a) {
    const c = n.children[0], h = ut(n);
    l = c.getBoundingClientRect(), h.attr("width", l.width), h.attr("height", l.height);
  } else {
    const c = n.children[0];
    for (const h of c.children)
      i && h.setAttribute("style", i);
    l = n.getBBox(), l.height += 6;
  }
  return s.attr("transform", `translate(${-l.width / 2},${-l.height / 2 + r})`), l.height;
}
g(Oe, "addText");
var xv = /* @__PURE__ */ g((e) => {
  switch (e) {
    case "Very High":
      return "red";
    case "High":
      return "orange";
    case "Medium":
      return null;
    // no stroke
    case "Low":
      return "blue";
    case "Very Low":
      return "lightblue";
  }
}, "colorFromPriority");
async function ky(e, t, { config: r }) {
  const { labelStyles: i, nodeStyles: s } = K(t);
  t.labelStyle = i || "";
  const o = 10, a = t.width;
  t.width = (t.width ?? 200) - 10;
  const {
    shapeSvg: n,
    bbox: l,
    label: c
  } = await st(e, t, et(t)), h = t.padding || 10;
  let d = "", f;
  "ticket" in t && t.ticket && r?.kanban?.ticketBaseUrl && (d = r?.kanban?.ticketBaseUrl.replace("#TICKET#", t.ticket), f = n.insert("svg:a", ":first-child").attr("class", "kanban-ticket-link").attr("xlink:href", d).attr("target", "_blank"));
  const u = {
    useHtmlLabels: t.useHtmlLabels,
    labelStyle: t.labelStyle || "",
    width: t.width,
    img: t.img,
    padding: t.padding || 8,
    centerLabel: !1
  };
  let p, m;
  f ? { label: p, bbox: m } = await nn(
    f,
    "ticket" in t && t.ticket || "",
    u
  ) : { label: p, bbox: m } = await nn(
    n,
    "ticket" in t && t.ticket || "",
    u
  );
  const { label: y, bbox: x } = await nn(
    n,
    "assigned" in t && t.assigned || "",
    u
  );
  t.width = a;
  const C = 10, k = t?.width || 0, T = Math.max(m.height, x.height) / 2, w = Math.max(l.height + C * 2, t?.height || 0) + T, _ = -k / 2, A = -w / 2;
  c.attr(
    "transform",
    "translate(" + (h - k / 2) + ", " + (-T - l.height / 2) + ")"
  ), p.attr(
    "transform",
    "translate(" + (h - k / 2) + ", " + (-T + l.height / 2) + ")"
  ), y.attr(
    "transform",
    "translate(" + (h + k / 2 - x.width - 2 * o) + ", " + (-T + l.height / 2) + ")"
  );
  let v;
  const { rx: N, ry: O } = t, { cssStyles: P } = t;
  if (t.look === "handDrawn") {
    const H = V.svg(n), W = Z(t, {}), R = N || O ? H.path(Cr(_, A, k, w, N || 0), W) : H.rectangle(_, A, k, w, W);
    v = n.insert(() => R, ":first-child"), v.attr("class", "basic label-container").attr("style", P || null);
  } else {
    v = n.insert("rect", ":first-child"), v.attr("class", "basic label-container __APA__").attr("style", s).attr("rx", N ?? 5).attr("ry", O ?? 5).attr("x", _).attr("y", A).attr("width", k).attr("height", w);
    const H = "priority" in t && t.priority;
    if (H) {
      const W = n.append("line"), R = _ + 2, M = A + Math.floor((N ?? 0) / 2), E = A + w - Math.floor((N ?? 0) / 2);
      W.attr("x1", R).attr("y1", M).attr("x2", R).attr("y2", E).attr("stroke-width", "4").attr("stroke", xv(H));
    }
  }
  return Q(t, v), t.height = w, t.intersect = function(H) {
    return j.rect(t, H);
  }, n;
}
g(ky, "kanbanItem");
async function Sy(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, halfPadding: a, label: n } = await st(
    e,
    t,
    et(t)
  ), l = o.width + 10 * a, c = o.height + 8 * a, h = 0.15 * l, { cssStyles: d } = t, f = o.width + 20, u = o.height + 20, p = Math.max(l, f), m = Math.max(c, u);
  n.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`);
  let y;
  const x = `M0 0 
    a${h},${h} 1 0,0 ${p * 0.25},${-1 * m * 0.1}
    a${h},${h} 1 0,0 ${p * 0.25},0
    a${h},${h} 1 0,0 ${p * 0.25},0
    a${h},${h} 1 0,0 ${p * 0.25},${m * 0.1}

    a${h},${h} 1 0,0 ${p * 0.15},${m * 0.33}
    a${h * 0.8},${h * 0.8} 1 0,0 0,${m * 0.34}
    a${h},${h} 1 0,0 ${-1 * p * 0.15},${m * 0.33}

    a${h},${h} 1 0,0 ${-1 * p * 0.25},${m * 0.15}
    a${h},${h} 1 0,0 ${-1 * p * 0.25},0
    a${h},${h} 1 0,0 ${-1 * p * 0.25},0
    a${h},${h} 1 0,0 ${-1 * p * 0.25},${-1 * m * 0.15}

    a${h},${h} 1 0,0 ${-1 * p * 0.1},${-1 * m * 0.33}
    a${h * 0.8},${h * 0.8} 1 0,0 0,${-1 * m * 0.34}
    a${h},${h} 1 0,0 ${p * 0.1},${-1 * m * 0.33}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const C = V.svg(s), k = Z(t, {}), T = C.path(x, k);
    y = s.insert(() => T, ":first-child"), y.attr("class", "basic label-container").attr("style", Wt(d));
  } else
    y = s.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", x);
  return y.attr("transform", `translate(${-p / 2}, ${-m / 2})`), Q(t, y), t.calcIntersect = function(C, k) {
    return j.rect(C, k);
  }, t.intersect = function(C) {
    return q.info("Bang intersect", t, C), j.rect(t, C);
  }, s;
}
g(Sy, "bang");
async function wy(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, halfPadding: a, label: n } = await st(
    e,
    t,
    et(t)
  ), l = o.width + 2 * a, c = o.height + 2 * a, h = 0.15 * l, d = 0.25 * l, f = 0.35 * l, u = 0.2 * l, { cssStyles: p } = t;
  let m;
  const y = `M0 0 
    a${h},${h} 0 0,1 ${l * 0.25},${-1 * l * 0.1}
    a${f},${f} 1 0,1 ${l * 0.4},${-1 * l * 0.1}
    a${d},${d} 1 0,1 ${l * 0.35},${l * 0.2}

    a${h},${h} 1 0,1 ${l * 0.15},${c * 0.35}
    a${u},${u} 1 0,1 ${-1 * l * 0.15},${c * 0.65}

    a${d},${h} 1 0,1 ${-1 * l * 0.25},${l * 0.15}
    a${f},${f} 1 0,1 ${-1 * l * 0.5},0
    a${h},${h} 1 0,1 ${-1 * l * 0.25},${-1 * l * 0.15}

    a${h},${h} 1 0,1 ${-1 * l * 0.1},${-1 * c * 0.35}
    a${u},${u} 1 0,1 ${l * 0.1},${-1 * c * 0.65}
  H0 V0 Z`;
  if (t.look === "handDrawn") {
    const x = V.svg(s), C = Z(t, {}), k = x.path(y, C);
    m = s.insert(() => k, ":first-child"), m.attr("class", "basic label-container").attr("style", Wt(p));
  } else
    m = s.insert("path", ":first-child").attr("class", "basic label-container").attr("style", i).attr("d", y);
  return n.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`), m.attr("transform", `translate(${-l / 2}, ${-c / 2})`), Q(t, m), t.calcIntersect = function(x, C) {
    return j.rect(x, C);
  }, t.intersect = function(x) {
    return q.info("Cloud intersect", t, x), j.rect(t, x);
  }, s;
}
g(wy, "cloud");
async function Ty(e, t) {
  const { labelStyles: r, nodeStyles: i } = K(t);
  t.labelStyle = r;
  const { shapeSvg: s, bbox: o, halfPadding: a, label: n } = await st(
    e,
    t,
    et(t)
  ), l = o.width + 8 * a, c = o.height + 2 * a, h = 5, d = t.look === "neo" ? `
    M${-l / 2} ${c / 2 - h}
    v${-c + 2 * h}
    q0,-${h} ${h},-${h}
    h${l - 2 * h}
    q${h},0 ${h},${h}
    v${c - h}
    H${-l / 2}
    Z
  ` : `
    M${-l / 2} ${c / 2 - h}
    v${-c + 2 * h}
    q0,-${h} ${h},-${h}
    h${l - 2 * h}
    q${h},0 ${h},${h}
    v${c - 2 * h}
    q0,${h} ${-h},${h}
    h${-(l - 2 * h)}
    q${-h},0 ${-h},${-h}
    Z
  `;
  if (!t.domId)
    throw new Error(
      `defaultMindmapNode: node "${t.id}" is missing a domId — was render.ts domId prefixing skipped?`
    );
  const f = s.append("path").attr("id", t.domId).attr("class", "node-bkg node-" + t.type).attr("style", i).attr("d", d);
  return s.append("line").attr("class", "node-line-").attr("x1", -l / 2).attr("y1", c / 2).attr("x2", l / 2).attr("y2", c / 2), n.attr("transform", `translate(${-o.width / 2}, ${-o.height / 2})`), s.append(() => n.node()), Q(t, f), t.calcIntersect = function(u, p) {
    return j.rect(u, p);
  }, t.intersect = function(u) {
    return j.rect(t, u);
  }, s;
}
g(Ty, "defaultMindmapNode");
async function _y(e, t) {
  const r = {
    padding: t.padding ?? 0
  };
  return Ch(e, t, r);
}
g(_y, "mindmapCircle");
var Cv = [
  {
    semanticName: "Process",
    name: "Rectangle",
    shortName: "rect",
    description: "Standard process shape",
    aliases: ["proc", "process", "rectangle"],
    internalAliases: ["squareRect"],
    handler: ry
  },
  {
    semanticName: "Event",
    name: "Rounded Rectangle",
    shortName: "rounded",
    description: "Represents an event",
    aliases: ["event"],
    internalAliases: ["roundedRect"],
    handler: Jm
  },
  {
    semanticName: "Terminal Point",
    name: "Stadium",
    shortName: "stadium",
    description: "Terminal point",
    aliases: ["terminal", "pill"],
    handler: iy
  },
  {
    semanticName: "Subprocess",
    name: "Framed Rectangle",
    shortName: "fr-rect",
    description: "Subprocess",
    aliases: ["subprocess", "subproc", "framed-rectangle", "subroutine"],
    handler: ny
  },
  {
    semanticName: "Database",
    name: "Cylinder",
    shortName: "cyl",
    description: "Database storage",
    aliases: ["db", "database", "cylinder"],
    handler: _m
  },
  {
    semanticName: "Data Store",
    name: "Data Store",
    shortName: "datastore",
    description: "Data flow diagram data store",
    aliases: ["data-store"],
    handler: vm
  },
  {
    semanticName: "Start",
    name: "Circle",
    shortName: "circle",
    description: "Starting point",
    aliases: ["circ"],
    handler: Ch
  },
  {
    semanticName: "Bang",
    name: "Bang",
    shortName: "bang",
    description: "Bang",
    aliases: ["bang"],
    handler: Sy
  },
  {
    semanticName: "Cloud",
    name: "Cloud",
    shortName: "cloud",
    description: "cloud",
    aliases: ["cloud"],
    handler: wy
  },
  {
    semanticName: "Decision",
    name: "Diamond",
    shortName: "diam",
    description: "Decision-making step",
    aliases: ["decision", "diamond", "question"],
    handler: Zm
  },
  {
    semanticName: "Prepare Conditional",
    name: "Hexagon",
    shortName: "hex",
    description: "Preparation or condition step",
    aliases: ["hexagon", "prepare"],
    handler: $m
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Right",
    shortName: "lean-r",
    description: "Represents input or output",
    aliases: ["lean-right", "in-out"],
    internalAliases: ["lean_right"],
    handler: Hm
  },
  {
    semanticName: "Data Input/Output",
    name: "Lean Left",
    shortName: "lean-l",
    description: "Represents output or input",
    aliases: ["lean-left", "out-in"],
    internalAliases: ["lean_left"],
    handler: zm
  },
  {
    semanticName: "Priority Action",
    name: "Trapezoid Base Bottom",
    shortName: "trap-b",
    description: "Priority action",
    aliases: ["priority", "trapezoid-bottom", "trapezoid"],
    handler: uy
  },
  {
    semanticName: "Manual Operation",
    name: "Trapezoid Base Top",
    shortName: "trap-t",
    description: "Represents a manual task",
    aliases: ["manual", "trapezoid-top", "inv-trapezoid"],
    internalAliases: ["inv_trapezoid"],
    handler: qm
  },
  {
    semanticName: "Stop",
    name: "Double Circle",
    shortName: "dbl-circ",
    description: "Represents a stop point",
    aliases: ["double-circle"],
    internalAliases: ["doublecircle"],
    handler: Lm
  },
  {
    semanticName: "Text Block",
    name: "Text Block",
    shortName: "text",
    description: "Text block",
    handler: cy
  },
  {
    semanticName: "Card",
    name: "Notched Rectangle",
    shortName: "notch-rect",
    description: "Represents a card",
    aliases: ["card", "notched-rectangle"],
    handler: ym
  },
  {
    semanticName: "Lined/Shaded Process",
    name: "Lined Rectangle",
    shortName: "lin-rect",
    description: "Lined process shape",
    aliases: ["lined-rectangle", "lined-process", "lin-proc", "shaded-process"],
    handler: ty
  },
  {
    semanticName: "Start",
    name: "Small Circle",
    shortName: "sm-circ",
    description: "Small starting point",
    aliases: ["start", "small-circle"],
    internalAliases: ["stateStart"],
    handler: ay
  },
  {
    semanticName: "Stop",
    name: "Framed Circle",
    shortName: "fr-circ",
    description: "Stop point",
    aliases: ["stop", "framed-circle"],
    internalAliases: ["stateEnd"],
    handler: oy
  },
  {
    semanticName: "Fork/Join",
    name: "Filled Rectangle",
    shortName: "fork",
    description: "Fork or join in process flow",
    aliases: ["join"],
    internalAliases: ["forkJoin"],
    handler: Fm
  },
  {
    semanticName: "Collate",
    name: "Hourglass",
    shortName: "hourglass",
    description: "Represents a collate operation",
    aliases: ["hourglass", "collate"],
    handler: Om
  },
  {
    semanticName: "Comment",
    name: "Curly Brace",
    shortName: "brace",
    description: "Adds a comment",
    aliases: ["comment", "brace-l"],
    handler: km
  },
  {
    semanticName: "Comment Right",
    name: "Curly Brace",
    shortName: "brace-r",
    description: "Adds a comment",
    handler: Sm
  },
  {
    semanticName: "Comment with braces on both sides",
    name: "Curly Braces",
    shortName: "braces",
    description: "Adds a comment",
    handler: wm
  },
  {
    semanticName: "Com Link",
    name: "Lightning Bolt",
    shortName: "bolt",
    description: "Communication link",
    aliases: ["com-link", "lightning-bolt"],
    handler: Ym
  },
  {
    semanticName: "Document",
    name: "Document",
    shortName: "doc",
    description: "Represents a document",
    aliases: ["doc", "document"],
    handler: gy
  },
  {
    semanticName: "Delay",
    name: "Half-Rounded Rectangle",
    shortName: "delay",
    description: "Represents a delay",
    aliases: ["half-rounded-rectangle"],
    handler: Mm
  },
  {
    semanticName: "Direct Access Storage",
    name: "Horizontal Cylinder",
    shortName: "h-cyl",
    description: "Direct access storage",
    aliases: ["das", "horizontal-cylinder"],
    handler: dy
  },
  {
    semanticName: "Disk Storage",
    name: "Lined Cylinder",
    shortName: "lin-cyl",
    description: "Disk storage",
    aliases: ["disk", "lined-cylinder"],
    handler: Um
  },
  {
    semanticName: "Display",
    name: "Curved Trapezoid",
    shortName: "curv-trap",
    description: "Represents a display",
    aliases: ["curved-trapezoid", "display"],
    handler: Tm
  },
  {
    semanticName: "Divided Process",
    name: "Divided Rectangle",
    shortName: "div-rect",
    description: "Divided process shape",
    aliases: ["div-proc", "divided-rectangle", "divided-process"],
    handler: Bm
  },
  {
    semanticName: "Extract",
    name: "Triangle",
    shortName: "tri",
    description: "Extraction process",
    aliases: ["extract", "triangle"],
    handler: py
  },
  {
    semanticName: "Internal Storage",
    name: "Window Pane",
    shortName: "win-pane",
    description: "Internal storage",
    aliases: ["internal-storage", "window-pane"],
    handler: yy
  },
  {
    semanticName: "Junction",
    name: "Filled Circle",
    shortName: "f-circ",
    description: "Junction point",
    aliases: ["junction", "filled-circle"],
    handler: Am
  },
  {
    semanticName: "Loop Limit",
    name: "Trapezoidal Pentagon",
    shortName: "notch-pent",
    description: "Loop limit step",
    aliases: ["loop-limit", "notched-pentagon"],
    handler: fy
  },
  {
    semanticName: "Manual File",
    name: "Flipped Triangle",
    shortName: "flip-tri",
    description: "Manual file operation",
    aliases: ["manual-file", "flipped-triangle"],
    handler: Em
  },
  {
    semanticName: "Manual Input",
    name: "Sloped Rectangle",
    shortName: "sl-rect",
    description: "Manual input step",
    aliases: ["manual-input", "sloped-rectangle"],
    handler: ey
  },
  {
    semanticName: "Multi-Document",
    name: "Stacked Document",
    shortName: "docs",
    description: "Multiple documents",
    aliases: ["documents", "st-doc", "stacked-document"],
    handler: jm
  },
  {
    semanticName: "Multi-Process",
    name: "Stacked Rectangle",
    shortName: "st-rect",
    description: "Multiple processes",
    aliases: ["procs", "processes", "stacked-rectangle"],
    handler: Gm
  },
  {
    semanticName: "Stored Data",
    name: "Bow Tie Rectangle",
    shortName: "bow-rect",
    description: "Stored data",
    aliases: ["stored-data", "bow-tie-rectangle"],
    handler: mm
  },
  {
    semanticName: "Summary",
    name: "Crossed Circle",
    shortName: "cross-circ",
    description: "Summary",
    aliases: ["summary", "crossed-circle"],
    handler: bm
  },
  {
    semanticName: "Tagged Document",
    name: "Tagged Document",
    shortName: "tag-doc",
    description: "Tagged document",
    aliases: ["tag-doc", "tagged-document"],
    handler: hy
  },
  {
    semanticName: "Tagged Process",
    name: "Tagged Rectangle",
    shortName: "tag-rect",
    description: "Tagged process",
    aliases: ["tagged-rectangle", "tag-proc", "tagged-process"],
    handler: ly
  },
  {
    semanticName: "Paper Tape",
    name: "Flag",
    shortName: "flag",
    description: "Paper tape",
    aliases: ["paper-tape"],
    handler: my
  },
  {
    semanticName: "Odd",
    name: "Odd",
    shortName: "odd",
    description: "Odd shape",
    internalAliases: ["rect_left_inv_arrow"],
    handler: Km
  },
  {
    semanticName: "Lined Document",
    name: "Lined Document",
    shortName: "lin-doc",
    description: "Lined document",
    aliases: ["lined-document"],
    handler: Xm
  }
], bv = /* @__PURE__ */ g(() => {
  const t = [
    ...Object.entries({
      // States
      state: sy,
      choice: xm,
      note: Vm,
      // Rectangles
      rectWithTitle: Qm,
      labelRect: Wm,
      // Icons
      iconSquare: Pm,
      iconCircle: Dm,
      icon: Im,
      iconRounded: Rm,
      imageSquare: Nm,
      anchor: pm,
      // Kanban diagram
      kanbanItem: ky,
      //Mindmap diagram
      mindmapCircle: _y,
      defaultMindmapNode: Ty,
      // class diagram
      classBox: Cy,
      // er diagram
      erBox: bh,
      // Requirement diagram
      requirementBox: by
    }),
    ...Cv.flatMap((r) => [
      r.shortName,
      ..."aliases" in r ? r.aliases : [],
      ..."internalAliases" in r ? r.internalAliases : []
    ].map((s) => [s, r.handler]))
  ];
  return Object.fromEntries(t);
}, "generateShapeMap"), vy = bv();
function kv(e) {
  return e in vy;
}
g(kv, "isValidShape");
var ka = /* @__PURE__ */ new Map();
async function By(e, t, r) {
  let i, s;
  t.shape === "rect" && (t.rx && t.ry ? t.shape = "roundedRect" : t.shape = "squareRect");
  const o = t.shape ? vy[t.shape] : void 0;
  if (!o)
    throw new Error(`No such shape: ${t.shape}. Please check your syntax.`);
  if (t.link) {
    let a;
    r.config.securityLevel === "sandbox" ? a = "_top" : t.linkTarget && (a = t.linkTarget || "_blank"), i = e.insert("svg:a").attr("xlink:href", t.link).attr("target", a ?? null), s = await o(i, t, r);
  } else
    s = await o(e, t, r), i = s;
  return i.attr("data-look", Wt(t.look)), t.tooltip && s.attr("title", t.tooltip), ka.set(t.id, i), t.haveCallback && i.attr("class", i.attr("class") + " clickable"), i;
}
g(By, "insertNode");
var iM = /* @__PURE__ */ g((e, t) => {
  ka.set(t.id, e);
}, "setNodeElem"), sM = /* @__PURE__ */ g(() => {
  ka.clear();
}, "clear"), oM = /* @__PURE__ */ g((e) => {
  const t = ka.get(e.id);
  q.trace(
    "Transforming node",
    e.diff,
    e,
    "translate(" + (e.x - e.width / 2 - 5) + ", " + e.width / 2 + ")"
  );
  const r = 8, i = e.diff || 0;
  return e.clusterNode ? t.attr(
    "transform",
    "translate(" + (e.x + i - e.width / 2) + ", " + (e.y - e.height / 2 - r) + ")"
  ) : t.attr("transform", "translate(" + e.x + ", " + e.y + ")"), i;
}, "positionNode"), Sv = /* @__PURE__ */ g((e, t, r, i, s, o = !1, a) => {
  t.arrowTypeStart && Ad(
    e,
    "start",
    t.arrowTypeStart,
    r,
    i,
    s,
    o,
    a
  ), t.arrowTypeEnd && Ad(e, "end", t.arrowTypeEnd, r, i, s, o, a);
}, "addEdgeMarkers"), wv = {
  arrow_cross: { type: "cross", fill: !1 },
  arrow_point: { type: "point", fill: !0 },
  arrow_barb: { type: "barb", fill: !0 },
  arrow_barb_neo: { type: "barb", fill: !0 },
  arrow_circle: { type: "circle", fill: !1 },
  aggregation: { type: "aggregation", fill: !1 },
  extension: { type: "extension", fill: !1 },
  composition: { type: "composition", fill: !0 },
  dependency: { type: "dependency", fill: !0 },
  lollipop: { type: "lollipop", fill: !1 },
  only_one: { type: "onlyOne", fill: !1 },
  zero_or_one: { type: "zeroOrOne", fill: !1 },
  one_or_more: { type: "oneOrMore", fill: !1 },
  zero_or_more: { type: "zeroOrMore", fill: !1 },
  requirement_arrow: { type: "requirement_arrow", fill: !1 },
  requirement_contains: { type: "requirement_contains", fill: !1 }
}, Tv = [
  "cross",
  "point",
  "circle",
  "lollipop",
  "aggregation",
  "extension",
  "composition",
  "dependency",
  "barb"
], Ad = /* @__PURE__ */ g((e, t, r, i, s, o, a = !1, n) => {
  const l = wv[r], c = l && Tv.includes(l.type);
  if (!l) {
    q.warn(`Unknown arrow type: ${r}`);
    return;
  }
  const h = l.type, u = `${s}_${o}-${h}${t === "start" ? "Start" : "End"}${a && c ? "-margin" : ""}`;
  if (n && n.trim() !== "") {
    const p = n.replace(/[^\dA-Za-z]/g, "_"), m = `${u}_${p}`;
    if (!document.getElementById(m)) {
      const y = document.getElementById(u);
      if (y) {
        const x = y.cloneNode(!0);
        x.id = m, x.querySelectorAll("path, circle, line").forEach((k) => {
          k.setAttribute("stroke", n), l.fill && k.setAttribute("fill", n);
        }), y.parentNode?.appendChild(x);
      }
    }
    e.attr(`marker-${t}`, `url(${i}#${m})`);
  } else
    e.attr(`marker-${t}`, `url(${i}#${u})`);
}, "addEdgeMarker"), _v = /* @__PURE__ */ g((e) => typeof e == "string" ? e : bt()?.flowchart?.curve, "resolveEdgeCurveType"), ea = /* @__PURE__ */ new Map(), Yt = /* @__PURE__ */ new Map(), aM = /* @__PURE__ */ g(() => {
  ea.clear(), Yt.clear();
}, "clear"), ts = /* @__PURE__ */ g((e) => e ? typeof e == "string" ? e : e.reduce((t, r) => t + ";" + r, "") : "", "getLabelStyles"), vv = /* @__PURE__ */ g(async (e, t) => {
  const r = bt();
  let i = ie(r);
  const { labelStyles: s } = K(t);
  t.labelStyle = s;
  const o = e.insert("g").attr("class", "edgeLabel"), a = o.insert("g").attr("class", "label").attr("data-id", t.id), n = t.labelType === "markdown", c = await er(
    e,
    t.label,
    {
      style: ts(t.labelStyle),
      useHtmlLabels: i,
      addSvgBackground: !0,
      isNode: !1,
      markdown: n,
      // Plain text edge labels should auto-wrap, markdown edge labels respect markdownAutoWrap config
      width: n ? void 0 : void 0
    },
    r
  );
  a.node().appendChild(c), q.info("abc82", t, t.labelType);
  let h = c.getBBox(), d = h;
  if (i) {
    const u = c.children[0], p = ut(c);
    h = u.getBoundingClientRect(), d = h, p.attr("width", h.width), p.attr("height", h.height);
  } else {
    const u = ut(c).select("text").node();
    u && typeof u.getBBox == "function" && (d = u.getBBox());
  }
  a.attr("transform", Vi(d, i)), ea.set(t.id, o), t.width = h.width, t.height = h.height;
  let f;
  if (t.startLabelLeft) {
    const u = e.insert("g").attr("class", "edgeTerminals"), p = u.insert("g").attr("class", "inner"), m = await dr(
      p,
      t.startLabelLeft,
      ts(t.labelStyle) || "",
      !1,
      !1
    );
    f = m;
    let y = m.getBBox();
    if (i) {
      const x = m.children[0], C = ut(m);
      y = x.getBoundingClientRect(), C.attr("width", y.width), C.attr("height", y.height);
    }
    p.attr("transform", Vi(y, i)), Yt.get(t.id) || Yt.set(t.id, {}), Yt.get(t.id).startLeft = u, cs(f, t.startLabelLeft);
  }
  if (t.startLabelRight) {
    const u = e.insert("g").attr("class", "edgeTerminals"), p = u.insert("g").attr("class", "inner"), m = await dr(
      p,
      t.startLabelRight,
      ts(t.labelStyle) || "",
      !1,
      !1
    );
    f = m;
    let y = m.getBBox();
    if (i) {
      const x = m.children[0], C = ut(m);
      y = x.getBoundingClientRect(), C.attr("width", y.width), C.attr("height", y.height);
    }
    p.attr("transform", Vi(y, i)), Yt.get(t.id) || Yt.set(t.id, {}), Yt.get(t.id).startRight = u, cs(f, t.startLabelRight);
  }
  if (t.endLabelLeft) {
    const u = e.insert("g").attr("class", "edgeTerminals"), p = u.insert("g").attr("class", "inner"), m = await dr(
      u,
      t.endLabelLeft,
      ts(t.labelStyle) || "",
      !1,
      !1
    );
    f = m;
    let y = m.getBBox();
    if (i) {
      const x = m.children[0], C = ut(m);
      y = x.getBoundingClientRect(), C.attr("width", y.width), C.attr("height", y.height);
    }
    p.attr("transform", Vi(y, i)), Yt.get(t.id) || Yt.set(t.id, {}), Yt.get(t.id).endLeft = u, cs(f, t.endLabelLeft);
  }
  if (t.endLabelRight) {
    const u = e.insert("g").attr("class", "edgeTerminals"), p = u.insert("g").attr("class", "inner"), m = await dr(
      u,
      t.endLabelRight,
      ts(t.labelStyle) || "",
      !1,
      !1
    );
    f = m;
    let y = m.getBBox();
    if (i) {
      const x = m.children[0], C = ut(m);
      y = x.getBoundingClientRect(), C.attr("width", y.width), C.attr("height", y.height);
    }
    p.attr("transform", Vi(y, i)), Yt.get(t.id) || Yt.set(t.id, {}), Yt.get(t.id).endRight = u, cs(f, t.endLabelRight);
  }
  return c;
}, "insertEdgeLabel");
function cs(e, t) {
  ie(bt()) && e && (e.style.width = t.length * 9 + "px", e.style.height = "12px");
}
g(cs, "setTerminalWidth");
var Bv = /* @__PURE__ */ g((e, t) => {
  q.debug("Moving label abc88 ", e.id, e.label, ea.get(e.id), t);
  let r = t.updatedPath ? t.updatedPath : t.originalPath;
  const i = bt(), { subGraphTitleTotalMargin: s } = ah(i);
  if (e.label) {
    const o = ea.get(e.id);
    let a = e.x, n = e.y;
    if (r) {
      const l = we.calcLabelPosition(r);
      q.debug(
        "Moving label " + e.label + " from (",
        a,
        ",",
        n,
        ") to (",
        l.x,
        ",",
        l.y,
        ") abc88"
      ), t.updatedPath && (a = l.x, n = l.y);
    }
    o.attr("transform", `translate(${a}, ${n + s / 2})`);
  }
  if (e.startLabelLeft) {
    const o = Yt.get(e.id).startLeft;
    let a = e.x, n = e.y;
    if (r) {
      const l = we.calcTerminalLabelPosition(e.arrowTypeStart ? 10 : 0, "start_left", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.startLabelRight) {
    const o = Yt.get(e.id).startRight;
    let a = e.x, n = e.y;
    if (r) {
      const l = we.calcTerminalLabelPosition(
        e.arrowTypeStart ? 10 : 0,
        "start_right",
        r
      );
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.endLabelLeft) {
    const o = Yt.get(e.id).endLeft;
    let a = e.x, n = e.y;
    if (r) {
      const l = we.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_left", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
  if (e.endLabelRight) {
    const o = Yt.get(e.id).endRight;
    let a = e.x, n = e.y;
    if (r) {
      const l = we.calcTerminalLabelPosition(e.arrowTypeEnd ? 10 : 0, "end_right", r);
      a = l.x, n = l.y;
    }
    o.attr("transform", `translate(${a}, ${n})`);
  }
}, "positionEdgeLabel"), Lv = /* @__PURE__ */ g((e, t) => {
  const r = e.x, i = e.y, s = Math.abs(t.x - r), o = Math.abs(t.y - i), a = e.width / 2, n = e.height / 2;
  return s >= a || o >= n;
}, "outsideNode"), Av = /* @__PURE__ */ g((e, t, r) => {
  q.debug(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(r)}
  node        : x:${e.x} y:${e.y} w:${e.width} h:${e.height}`);
  const i = e.x, s = e.y, o = Math.abs(i - r.x), a = e.width / 2;
  let n = r.x < t.x ? a - o : a + o;
  const l = e.height / 2, c = Math.abs(t.y - r.y), h = Math.abs(t.x - r.x);
  if (Math.abs(s - t.y) * a > Math.abs(i - t.x) * l) {
    let d = r.y < t.y ? t.y - l - s : s - l - t.y;
    n = h * d / c;
    const f = {
      x: r.x < t.x ? r.x + n : r.x - h + n,
      y: r.y < t.y ? r.y + c - d : r.y - c + d
    };
    return n === 0 && (f.x = t.x, f.y = t.y), h === 0 && (f.x = t.x), c === 0 && (f.y = t.y), q.debug(`abc89 top/bottom calc, Q ${c}, q ${d}, R ${h}, r ${n}`, f), f;
  } else {
    r.x < t.x ? n = t.x - a - i : n = i - a - t.x;
    let d = c * n / h, f = r.x < t.x ? r.x + h - n : r.x - h + n, u = r.y < t.y ? r.y + d : r.y - d;
    return q.debug(`sides calc abc89, Q ${c}, q ${d}, R ${h}, r ${n}`, { _x: f, _y: u }), n === 0 && (f = t.x, u = t.y), h === 0 && (f = t.x), c === 0 && (u = t.y), { x: f, y: u };
  }
}, "intersection"), Ed = /* @__PURE__ */ g((e, t) => {
  q.warn("abc88 cutPathAtIntersect", e, t);
  let r = [], i = e[0], s = !1;
  return e.forEach((o) => {
    if (q.info("abc88 checking point", o, t), !Lv(t, o) && !s) {
      const a = Av(t, i, o);
      q.debug("abc88 inside", o, i, a), q.debug("abc88 intersection", a, t);
      let n = !1;
      r.forEach((l) => {
        n = n || l.x === a.x && l.y === a.y;
      }), r.some((l) => l.x === a.x && l.y === a.y) ? q.warn("abc88 no intersect", a, r) : r.push(a), s = !0;
    } else
      q.warn("abc88 outside", o, i), i = o, s || r.push(o);
  }), q.debug("returning points", r), r;
}, "cutPathAtIntersect");
function Ly(e) {
  const t = [], r = [];
  for (let i = 1; i < e.length - 1; i++) {
    const s = e[i - 1], o = e[i], a = e[i + 1];
    (s.x === o.x && o.y === a.y && Math.abs(o.x - a.x) > 5 && Math.abs(o.y - s.y) > 5 || s.y === o.y && o.x === a.x && Math.abs(o.x - s.x) > 5 && Math.abs(o.y - a.y) > 5) && (t.push(o), r.push(i));
  }
  return { cornerPoints: t, cornerPointPositions: r };
}
g(Ly, "extractCornerPoints");
var Fd = /* @__PURE__ */ g(function(e, t, r) {
  const i = t.x - e.x, s = t.y - e.y, o = Math.sqrt(i * i + s * s), a = r / o;
  return { x: t.x - a * i, y: t.y - a * s };
}, "findAdjacentPoint"), Ev = /* @__PURE__ */ g(function(e) {
  const { cornerPointPositions: t } = Ly(e), r = [];
  for (let i = 0; i < e.length; i++)
    if (t.includes(i)) {
      const s = e[i - 1], o = e[i + 1], a = e[i], n = Fd(s, a, 5), l = Fd(o, a, 5), c = l.x - n.x, h = l.y - n.y;
      r.push(n);
      const d = Math.sqrt(2) * 2;
      let f = { x: a.x, y: a.y };
      if (Math.abs(o.x - s.x) > 10 && Math.abs(o.y - s.y) >= 10) {
        q.debug(
          "Corner point fixing",
          Math.abs(o.x - s.x),
          Math.abs(o.y - s.y)
        );
        const u = 5;
        a.x === n.x ? f = {
          x: c < 0 ? n.x - u + d : n.x + u - d,
          y: h < 0 ? n.y - d : n.y + d
        } : f = {
          x: c < 0 ? n.x - d : n.x + d,
          y: h < 0 ? n.y - u + d : n.y + u - d
        };
      } else
        q.debug(
          "Corner point skipping fixing",
          Math.abs(o.x - s.x),
          Math.abs(o.y - s.y)
        );
      r.push(f, l);
    } else
      r.push(e[i]);
  return r;
}, "fixCorners"), Fv = /* @__PURE__ */ g((e, t, r) => {
  const i = e - t - r, s = 2, o = 2, a = s + o, n = Math.floor(i / a), l = Array(n).fill(`${s} ${o}`).join(" ");
  return `0 ${t} ${l} ${r}`;
}, "generateDashArray"), Mv = /* @__PURE__ */ g(function(e, t, r, i, s, o, a, n = !1) {
  if (!a)
    throw new Error(
      `insertEdge: missing diagramId for edge "${t.id}" — edge IDs require a diagram prefix for uniqueness`
    );
  const { handDrawnSeed: l } = bt();
  let c = t.points, h = !1;
  const d = s;
  var f = o;
  const u = [];
  for (const B in t.cssCompiledStyles)
    vg(B) || u.push(t.cssCompiledStyles[B]);
  q.debug("UIO intersect check", t.points, f.x, d.x), f.intersect && d.intersect && !n && (c = c.slice(1, t.points.length - 1), c.unshift(d.intersect(c[0])), q.debug(
    "Last point UIO",
    t.start,
    "-->",
    t.end,
    c[c.length - 1],
    f,
    f.intersect(c[c.length - 1])
  ), c.push(f.intersect(c[c.length - 1])));
  const p = btoa(JSON.stringify(c));
  t.toCluster && (q.info("to cluster abc88", r.get(t.toCluster)), c = Ed(t.points, r.get(t.toCluster).node), h = !0), t.fromCluster && (q.debug(
    "from cluster abc88",
    r.get(t.fromCluster),
    JSON.stringify(c, null, 2)
  ), c = Ed(c.reverse(), r.get(t.fromCluster).node).reverse(), h = !0);
  let m = c.filter((B) => !Number.isNaN(B.y));
  const y = _v(t.curve);
  y !== "rounded" && (m = Ev(m));
  let x = gs;
  switch (y) {
    case "linear":
      x = gs;
      break;
    case "basis":
      x = On;
      break;
    case "cardinal":
      x = pf;
      break;
    case "bumpX":
      x = hf;
      break;
    case "bumpY":
      x = cf;
      break;
    case "catmullRom":
      x = mf;
      break;
    case "monotoneX":
      x = Sf;
      break;
    case "monotoneY":
      x = wf;
      break;
    case "natural":
      x = _f;
      break;
    case "step":
      x = vf;
      break;
    case "stepAfter":
      x = Lf;
      break;
    case "stepBefore":
      x = Bf;
      break;
    case "rounded":
      x = gs;
      break;
    default:
      x = On;
  }
  const { x: C, y: k } = _w(t), T = lS().x(C).y(k).curve(x);
  let w;
  switch (t.thickness) {
    case "normal":
      w = "edge-thickness-normal";
      break;
    case "thick":
      w = "edge-thickness-thick";
      break;
    case "invisible":
      w = "edge-thickness-invisible";
      break;
    default:
      w = "edge-thickness-normal";
  }
  switch (t.pattern) {
    case "solid":
      w += " edge-pattern-solid";
      break;
    case "dotted":
      w += " edge-pattern-dotted";
      break;
    case "dashed":
      w += " edge-pattern-dashed";
      break;
    default:
      w += " edge-pattern-solid";
  }
  let _, A = y === "rounded" ? Ay(Ey(m, t), 5) : T(m);
  const v = Array.isArray(t.style) ? t.style : [t.style];
  let N = v.find((B) => B?.startsWith("stroke:")), O = "";
  t.animate && (O = "edge-animation-fast"), t.animation && (O = "edge-animation-" + t.animation);
  let P = !1;
  if (t.look === "handDrawn") {
    const B = V.svg(e);
    Object.assign([], m);
    const F = B.path(A, {
      roughness: 0.3,
      seed: l
    });
    w += " transition", _ = ut(F).select("path").attr("id", `${a}-${t.id}`).attr(
      "class",
      " " + w + (t.classes ? " " + t.classes : "") + (O ? " " + O : "")
    ).attr("style", v ? v.reduce((Y, G) => Y + ";" + G, "") : "");
    let z = _.attr("d");
    _.attr("d", z), e.node().appendChild(_.node());
  } else {
    const B = u.join(";"), F = v ? v.reduce((lt, ct) => lt + ct + ";", "") : "", z = (B ? B + ";" + F + ";" : F) + ";" + (v ? v.reduce((lt, ct) => lt + ";" + ct, "") : "");
    _ = e.append("path").attr("d", A).attr("id", `${a}-${t.id}`).attr(
      "class",
      " " + w + (t.classes ? " " + t.classes : "") + (O ? " " + O : "")
    ).attr("style", z), N = z.match(/stroke:([^;]+)/)?.[1], P = t.animate === !0 || !!t.animation || B.includes("animation");
    const Y = _.node(), G = typeof Y.getTotalLength == "function" ? Y.getTotalLength() : 0, ht = Uc[t.arrowTypeStart] || 0, rt = Uc[t.arrowTypeEnd] || 0;
    if (t.look === "neo" && !P) {
      const ct = `stroke-dasharray: ${t.pattern === "dotted" || t.pattern === "dashed" ? Fv(G, ht, rt) : `0 ${ht} ${G - ht - rt} ${rt}`}; stroke-dashoffset: 0;`;
      _.attr("style", ct + _.attr("style"));
    }
  }
  _.attr("data-edge", !0), _.attr("data-et", "edge"), _.attr("data-id", t.id), _.attr("data-points", p), _.attr("data-look", Wt(t.look)), t.showPoints && m.forEach((B) => {
    e.append("circle").style("stroke", "red").style("fill", "red").attr("r", 1).attr("cx", B.x).attr("cy", B.y);
  });
  let H = "";
  (bt().flowchart.arrowMarkerAbsolute || bt().state.arrowMarkerAbsolute) && (H = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, H = H.replace(/\(/g, "\\(").replace(/\)/g, "\\)")), q.info("arrowTypeStart", t.arrowTypeStart), q.info("arrowTypeEnd", t.arrowTypeEnd);
  const W = !P && t?.look === "neo";
  Sv(_, t, H, a, i, W, N);
  const R = Math.floor(c.length / 2), M = c[R];
  we.isLabelCoordinateInPath(M, _.attr("d")) || (h = !0);
  let E = {};
  return h && (E.updatedPath = c), E.originalPath = t.points, E;
}, "insertEdge");
function Ay(e, t) {
  if (e.length < 2)
    return "";
  let r = "";
  const i = e.length, s = 1e-5;
  for (let o = 0; o < i; o++) {
    const a = e[o], n = e[o - 1], l = e[o + 1];
    if (o === 0)
      r += `M${a.x},${a.y}`;
    else if (o === i - 1)
      r += `L${a.x},${a.y}`;
    else {
      const c = a.x - n.x, h = a.y - n.y, d = l.x - a.x, f = l.y - a.y, u = Math.hypot(c, h), p = Math.hypot(d, f);
      if (u < s || p < s) {
        r += `L${a.x},${a.y}`;
        continue;
      }
      const m = c / u, y = h / u, x = d / p, C = f / p, k = m * x + y * C, T = Math.max(-1, Math.min(1, k)), w = Math.acos(T);
      if (w < s || Math.abs(Math.PI - w) < s) {
        r += `L${a.x},${a.y}`;
        continue;
      }
      const _ = Math.min(t / Math.sin(w / 2), u / 2, p / 2), A = a.x - m * _, v = a.y - y * _, N = a.x + x * _, O = a.y + C * _;
      r += `L${A},${v}`, r += `Q${a.x},${a.y} ${N},${O}`;
    }
  }
  return r;
}
g(Ay, "generateRoundedPath");
function cl(e, t) {
  if (!e || !t)
    return { angle: 0, deltaX: 0, deltaY: 0 };
  const r = t.x - e.x, i = t.y - e.y;
  return { angle: Math.atan2(i, r), deltaX: r, deltaY: i };
}
g(cl, "calculateDeltaAndAngle");
function Ey(e, t) {
  const r = e.map((s) => ({ ...s }));
  if (e.length >= 2 && jt[t.arrowTypeStart]) {
    const s = jt[t.arrowTypeStart], o = e[0], a = e[1], { angle: n } = cl(o, a), l = s * Math.cos(n), c = s * Math.sin(n);
    r[0].x = o.x + l, r[0].y = o.y + c;
  }
  const i = e.length;
  if (i >= 2 && jt[t.arrowTypeEnd]) {
    const s = jt[t.arrowTypeEnd], o = e[i - 1], a = e[i - 2], { angle: n } = cl(a, o), l = s * Math.cos(n), c = s * Math.sin(n);
    r[i - 1].x = o.x - l, r[i - 1].y = o.y - c;
  }
  return r;
}
g(Ey, "applyMarkerOffsetsToPoints");
var $v = /* @__PURE__ */ g((e, t, r, i) => {
  t.forEach((s) => {
    rB[s](e, r, i);
  });
}, "insertMarkers"), Ov = /* @__PURE__ */ g((e, t, r) => {
  q.trace("Making markers for ", r), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionStart").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M 1,7 L18,13 V 1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd").attr("class", "marker extension " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 1,1 V 13 L18,7 Z"), e.append("marker").attr("id", r + "_" + t + "-extensionStart-margin").attr("class", "marker extension " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 0 20 14").append("polygon").attr("points", "10,7 18,13 18,1").style("stroke-width", 2).style("stroke-dasharray", "0"), e.append("defs").append("marker").attr("id", r + "_" + t + "-extensionEnd-margin").attr("class", "marker extension " + t).attr("refX", 9).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("viewBox", "0 0 20 14").append("polygon").attr("points", "10,1 10,13 18,7").style("stroke-width", 2).style("stroke-dasharray", "0");
}, "extension"), Iv = /* @__PURE__ */ g((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart").attr("class", "marker composition " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd").attr("class", "marker composition " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionStart-margin").attr("class", "marker composition " + t).attr("refX", 15).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("viewBox", "0 0 15 15").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-compositionEnd-margin").attr("class", "marker composition " + t).attr("refX", 3.5).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "composition"), Dv = /* @__PURE__ */ g((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart").attr("class", "marker aggregation " + t).attr("refX", 18).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationStart-margin").attr("class", "marker aggregation " + t).attr("refX", 15).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 2).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-aggregationEnd-margin").attr("class", "marker aggregation " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 2).attr("d", "M 18,7 L9,13 L1,7 L9,1 Z");
}, "aggregation"), Rv = /* @__PURE__ */ g((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart").attr("class", "marker dependency " + t).attr("refX", 6).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("path").attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd").attr("class", "marker dependency " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").append("path").attr("d", "M 18,7 L9,13 L14,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyStart-margin").attr("class", "marker dependency " + t).attr("refX", 4).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 5,7 L9,13 L1,7 L9,1 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-dependencyEnd-margin").attr("class", "marker dependency " + t).attr("refX", 16).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 28).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").style("stroke-width", 0).attr("d", "M 18,7 L9,13 L14,7 L9,1 Z");
}, "dependency"), Pv = /* @__PURE__ */ g((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopStart-margin").attr("class", "marker lollipop " + t).attr("refX", 13).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6).attr("stroke-width", 2), e.append("defs").append("marker").attr("id", r + "_" + t + "-lollipopEnd-margin").attr("class", "marker lollipop " + t).attr("refX", 1).attr("refY", 7).attr("markerWidth", 190).attr("markerHeight", 240).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("circle").attr("fill", "transparent").attr("cx", 7).attr("cy", 7).attr("r", 6).attr("stroke-width", 2);
}, "lollipop"), Nv = /* @__PURE__ */ g((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-pointEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 0 L 10 5 L 0 10 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 4.5).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 8).attr("markerHeight", 8).attr("orient", "auto").append("path").attr("d", "M 0 5 L 10 10 L 10 0 z").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointEnd-margin").attr("class", "marker " + t).attr("viewBox", "0 0 11.5 14").attr("refX", 11.5).attr("refY", 7).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 10.5).attr("markerHeight", 14).attr("orient", "auto").append("path").attr("d", "M 0 0 L 11.5 7 L 0 14 z").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-pointStart-margin").attr("class", "marker " + t).attr("viewBox", "0 0 11.5 14").attr("refX", 1).attr("refY", 7).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11.5).attr("markerHeight", 14).attr("orient", "auto").append("polygon").attr("points", "0,7 11.5,14 11.5,0").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0");
}, "point"), qv = /* @__PURE__ */ g((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-circleEnd").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", 11).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -1).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 1).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleEnd-margin").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refY", 5).attr("refX", 12.25).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 14).attr("markerHeight", 14).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-circleStart-margin").attr("class", "marker " + t).attr("viewBox", "0 0 10 10").attr("refX", -2).attr("refY", 5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 14).attr("markerHeight", 14).attr("orient", "auto").append("circle").attr("cx", "5").attr("cy", "5").attr("r", "5").attr("class", "arrowMarkerPath").style("stroke-width", 0).style("stroke-dasharray", "1,0");
}, "circle"), Wv = /* @__PURE__ */ g((e, t, r) => {
  e.append("marker").attr("id", r + "_" + t + "-crossEnd").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", 12).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossStart").attr("class", "marker cross " + t).attr("viewBox", "0 0 11 11").attr("refX", -1).attr("refY", 5.2).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 11).attr("markerHeight", 11).attr("orient", "auto").append("path").attr("d", "M 1,1 l 9,9 M 10,1 l -9,9").attr("class", "arrowMarkerPath").style("stroke-width", 2).style("stroke-dasharray", "1,0"), e.append("marker").attr("id", r + "_" + t + "-crossEnd-margin").attr("class", "marker cross " + t).attr("viewBox", "0 0 15 15").attr("refX", 17.7).attr("refY", 7.5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 1,1 L 14,14 M 1,14 L 14,1").attr("class", "arrowMarkerPath").style("stroke-width", 2.5), e.append("marker").attr("id", r + "_" + t + "-crossStart-margin").attr("class", "marker cross " + t).attr("viewBox", "0 0 15 15").attr("refX", -3.5).attr("refY", 7.5).attr("markerUnits", "userSpaceOnUse").attr("markerWidth", 12).attr("markerHeight", 12).attr("orient", "auto").append("path").attr("d", "M 1,1 L 14,14 M 1,14 L 14,1").attr("class", "arrowMarkerPath").style("stroke-width", 2.5).style("stroke-dasharray", "1,0");
}, "cross"), zv = /* @__PURE__ */ g((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L9,13 L14,7 L9,1 Z");
}, "barb"), Hv = /* @__PURE__ */ g((e, t, r) => {
  const i = Lt(), { themeVariables: s } = i, { transitionColor: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd").attr("refX", 19).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "strokeWidth").attr("orient", "auto").append("path").attr("d", "M 19,7 L11,14 L13,7 L11,0 Z"), e.append("defs").append("marker").attr("id", r + "_" + t + "-barbEnd-margin").attr("refX", 17).attr("refY", 7).attr("markerWidth", 20).attr("markerHeight", 14).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M 19,7 L11,14 L13,7 L11,0 Z").attr("fill", `${o}`);
}, "barbNeo"), Yv = /* @__PURE__ */ g((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18"), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18");
}, "only_one"), Uv = /* @__PURE__ */ g((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 21).attr("cy", 9).attr("r", 6), i.append("path").attr("d", "M9,0 L9,18");
  const s = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto");
  s.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 9).attr("r", 6), s.append("path").attr("d", "M21,0 L21,18");
}, "zero_or_one"), Xv = /* @__PURE__ */ g((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18");
}, "one_or_more"), Gv = /* @__PURE__ */ g((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  i.append("circle").attr("fill", "white").attr("cx", 48).attr("cy", 18).attr("r", 6), i.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18");
  const s = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto");
  s.append("circle").attr("fill", "white").attr("cx", 9).attr("cy", 18).attr("r", 6), s.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18");
}, "zero_or_more"), jv = /* @__PURE__ */ g((e, t, r) => {
  const i = Lt(), { themeVariables: s } = i, { strokeWidth: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneStart").attr("class", "marker onlyOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M9,0 L9,18 M15,0 L15,18").attr("stroke-width", `${o}`), e.append("defs").append("marker").attr("id", r + "_" + t + "-onlyOneEnd").attr("class", "marker onlyOne " + t).attr("refX", 18).attr("refY", 9).attr("markerWidth", 18).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M3,0 L3,18 M9,0 L9,18").attr("stroke-width", `${o}`);
}, "only_one_neo"), Vv = /* @__PURE__ */ g((e, t, r) => {
  const i = Lt(), { themeVariables: s } = i, { strokeWidth: o, mainBkg: a } = s, n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneStart").attr("class", "marker zeroOrOne " + t).attr("refX", 0).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
  n.append("circle").attr("fill", a ?? "white").attr("cx", 21).attr("cy", 9).attr("stroke-width", `${o}`).attr("r", 6), n.append("path").attr("d", "M9,0 L9,18").attr("stroke-width", `${o}`);
  const l = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrOneEnd").attr("class", "marker zeroOrOne " + t).attr("refX", 30).attr("refY", 9).attr("markerWidth", 30).attr("markerHeight", 18).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto");
  l.append("circle").attr("fill", a ?? "white").attr("cx", 9).attr("cy", 9).attr("stroke-width", `${o}`).attr("r", 6), l.append("path").attr("d", "M21,0 L21,18").attr("stroke-width", `${o}`);
}, "zero_or_one_neo"), Zv = /* @__PURE__ */ g((e, t, r) => {
  const i = Lt(), { themeVariables: s } = i, { strokeWidth: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreStart").attr("class", "marker oneOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("path").attr("d", "M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27").attr("stroke-width", `${o}`), e.append("defs").append("marker").attr("id", r + "_" + t + "-oneOrMoreEnd").attr("class", "marker oneOrMore " + t).attr("refX", 27).attr("refY", 18).attr("markerWidth", 45).attr("markerHeight", 36).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto").append("path").attr("d", "M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18").attr("stroke-width", `${o}`);
}, "one_or_more_neo"), Kv = /* @__PURE__ */ g((e, t, r) => {
  const i = Lt(), { themeVariables: s } = i, { strokeWidth: o, mainBkg: a } = s, n = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreStart").attr("class", "marker zeroOrMore " + t).attr("refX", 18).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto");
  n.append("circle").attr("fill", a ?? "white").attr("cx", 45.5).attr("cy", 18).attr("r", 6).attr("stroke-width", `${o}`), n.append("path").attr("d", "M0,18 Q18,0 36,18 Q18,36 0,18").attr("stroke-width", `${o}`);
  const l = e.append("defs").append("marker").attr("id", r + "_" + t + "-zeroOrMoreEnd").attr("class", "marker zeroOrMore " + t).attr("refX", 39).attr("refY", 18).attr("markerWidth", 57).attr("markerHeight", 36).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse");
  l.append("circle").attr("fill", a ?? "white").attr("cx", 11).attr("cy", 18).attr("r", 6).attr("stroke-width", `${o}`), l.append("path").attr("d", "M21,18 Q39,0 57,18 Q39,36 21,18").attr("stroke-width", `${o}`);
}, "zero_or_more_neo"), Qv = /* @__PURE__ */ g((e, t, r) => {
  e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  );
}, "requirement_arrow"), Jv = /* @__PURE__ */ g((e, t, r) => {
  const i = Lt(), { themeVariables: s } = i, { strokeWidth: o } = s;
  e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_arrowEnd").attr("refX", 20).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").attr("stroke-width", `${o}`).attr("viewBox", "0 0 25 20").append("path").attr(
    "d",
    `M0,0
      L20,10
      M20,10
      L0,20`
  ).attr("stroke-linejoin", "miter");
}, "requirement_arrow_neo"), tB = /* @__PURE__ */ g((e, t, r) => {
  const i = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").append("g");
  i.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), i.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), i.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10);
}, "requirement_contains"), eB = /* @__PURE__ */ g((e, t, r) => {
  const i = Lt(), { themeVariables: s } = i, { strokeWidth: o } = s, a = e.append("defs").append("marker").attr("id", r + "_" + t + "-requirement_containsStart").attr("refX", 0).attr("refY", 10).attr("markerWidth", 20).attr("markerHeight", 20).attr("orient", "auto").attr("markerUnits", "userSpaceOnUse").append("g");
  a.append("circle").attr("cx", 10).attr("cy", 10).attr("r", 9).attr("fill", "none"), a.append("line").attr("x1", 1).attr("x2", 19).attr("y1", 10).attr("y2", 10), a.append("line").attr("y1", 1).attr("y2", 19).attr("x1", 10).attr("x2", 10), a.selectAll("*").attr("stroke-width", `${o}`);
}, "requirement_contains_neo"), rB = {
  extension: Ov,
  composition: Iv,
  aggregation: Dv,
  dependency: Rv,
  lollipop: Pv,
  point: Nv,
  circle: qv,
  cross: Wv,
  barb: zv,
  barbNeo: Hv,
  only_one: Yv,
  zero_or_one: Uv,
  one_or_more: Xv,
  zero_or_more: Gv,
  only_one_neo: jv,
  zero_or_one_neo: Vv,
  one_or_more_neo: Zv,
  zero_or_more_neo: Kv,
  requirement_arrow: Qv,
  requirement_contains: tB,
  requirement_arrow_neo: Jv,
  requirement_contains_neo: eB
}, iB = $v, sB = {
  common: Os,
  getConfig: Lt,
  insertCluster: ev,
  insertEdge: Mv,
  insertEdgeLabel: vv,
  insertMarkers: iB,
  insertNode: By,
  interpolateToCurve: th,
  labelHelper: st,
  log: q,
  positionEdgeLabel: Bv
}, As = {}, Fy = /* @__PURE__ */ g((e) => {
  for (const t of e)
    As[t.name] = t;
}, "registerLayoutLoaders"), oB = /* @__PURE__ */ g(() => {
  Fy([
    {
      name: "dagre",
      loader: /* @__PURE__ */ g(async () => await import("./dagre-BM42HDAG.js"), "loader")
    },
    {
      name: "cose-bilkent",
      loader: /* @__PURE__ */ g(async () => await import("./cose-bilkent-S5V4N54A.js"), "loader")
    }
  ]);
}, "registerDefaultLayoutLoaders");
oB();
var nM = /* @__PURE__ */ g(async (e, t) => {
  if (!(e.layoutAlgorithm in As))
    throw new Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
  if (e.diagramId)
    for (const h of e.nodes) {
      const d = h.domId || h.id;
      h.domId = `${e.diagramId}-${d}`;
    }
  const r = As[e.layoutAlgorithm], i = await r.loader(), { theme: s, themeVariables: o } = e.config, { useGradient: a, gradientStart: n, gradientStop: l } = o, c = t.attr("id");
  if (t.append("defs").append("filter").attr("id", `${c}-drop-shadow`).attr("height", "130%").attr("width", "130%").append("feDropShadow").attr("dx", "4").attr("dy", "4").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${s?.includes("dark") ? "#FFFFFF" : "#000000"}`), t.append("defs").append("filter").attr("id", `${c}-drop-shadow-small`).attr("height", "150%").attr("width", "150%").append("feDropShadow").attr("dx", "2").attr("dy", "2").attr("stdDeviation", 0).attr("flood-opacity", "0.06").attr("flood-color", `${s?.includes("dark") ? "#FFFFFF" : "#000000"}`), a) {
    const h = t.append("linearGradient").attr("id", t.attr("id") + "-gradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0%").attr("y1", "0%").attr("x2", "100%").attr("y2", "0%");
    h.append("svg:stop").attr("offset", "0%").attr("stop-color", n).attr("stop-opacity", 1), h.append("svg:stop").attr("offset", "100%").attr("stop-color", l).attr("stop-opacity", 1);
  }
  return i.render(e, t, sB, {
    algorithm: r.algorithm
  });
}, "render"), lM = /* @__PURE__ */ g((e = "", { fallback: t = "dagre" } = {}) => {
  if (e in As)
    return e;
  if (t in As)
    return q.warn(`Layout algorithm ${e} is not registered. Using ${t} as fallback.`), t;
  throw new Error(`Both layout algorithms ${e} and ${t} are not registered.`);
}, "getRegisteredLayoutAlgorithm"), kh = "comm", My = "rule", $y = "decl", aB = "@media", nB = "@import", lB = "@supports", hB = "@namespace", dl = "@keyframes", Oy = "@layer", cB = "@scope", dB = Math.abs, ys = String.fromCharCode;
function Iy(e) {
  return e.trim();
}
function ul(e, t, r) {
  return e.replace(t, r);
}
function di(e, t) {
  return e.charCodeAt(t) | 0;
}
function $i(e, t, r) {
  return e.slice(t, r);
}
function De(e) {
  return e.length;
}
function Dy(e) {
  return e.length;
}
function lo(e, t) {
  return t.push(e), e;
}
var Sa = 1, Oi = 1, Ry = 0, pe = 0, Ot = 0, Ni = "";
function Sh(e, t, r, i, s, o, a, n) {
  return { value: e, root: t, parent: r, type: i, props: s, children: o, line: Sa, column: Oi, length: a, return: "", siblings: n };
}
function uB() {
  return Ot;
}
function fB() {
  return Ot = pe > 0 ? di(Ni, --pe) : 0, Oi--, Ot === 10 && (Oi = 1, Sa--), Ot;
}
function _e() {
  return Ot = pe < Ry ? di(Ni, pe++) : 0, Oi++, Ot === 10 && (Oi = 1, Sa++), Ot;
}
function ur() {
  return di(Ni, pe);
}
function wo() {
  return pe;
}
function wa(e, t) {
  return $i(Ni, e, t);
}
function Es(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function pB(e) {
  return Sa = Oi = 1, Ry = De(Ni = e), pe = 0, [];
}
function gB(e) {
  return Ni = "", e;
}
function hn(e) {
  return Iy(wa(pe - 1, fl(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function mB(e) {
  for (; (Ot = ur()) && Ot < 33; )
    _e();
  return Es(e) > 2 || Es(Ot) > 3 ? "" : " ";
}
function yB(e, t) {
  for (; --t && _e() && !(Ot < 48 || Ot > 102 || Ot > 57 && Ot < 65 || Ot > 70 && Ot < 97); )
    ;
  return wa(e, wo() + (t < 6 && ur() == 32 && _e() == 32));
}
function fl(e) {
  for (; _e(); )
    switch (Ot) {
      // ] ) " '
      case e:
        return pe;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && fl(Ot);
        break;
      // (
      case 40:
        e === 41 && fl(e);
        break;
      // \
      case 92:
        _e();
        break;
    }
  return pe;
}
function xB(e, t) {
  for (; _e() && e + Ot !== 57; )
    if (e + Ot === 84 && ur() === 47)
      break;
  return "/*" + wa(t, pe - 1) + "*" + ys(e === 47 ? e : _e());
}
function CB(e) {
  for (; !Es(ur()); )
    _e();
  return wa(e, pe);
}
function bB(e) {
  return gB(To("", null, null, null, [""], e = pB(e), 0, [0], e));
}
function To(e, t, r, i, s, o, a, n, l) {
  for (var c = 0, h = 0, d = a, f = 0, u = 0, p = 0, m = 1, y = 1, x = 1, C = 0, k = 0, T = "", w = s, _ = o, A = i, v = T; y; )
    switch (p = k, k = _e()) {
      // (
      case 40:
        p != 108 && di(v, d - 1) == 58 ? (C++, v += "(") : v += hn(k);
        break;
      // )
      case 41:
        C--, v += ")";
        break;
      // " ' [
      case 34:
      case 39:
      case 91:
        v += hn(k);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        if (C > 0) {
          v += ys(k);
          break;
        }
        v += mB(p);
        break;
      // \
      case 92:
        v += yB(wo() - 1, 7);
        continue;
      // /
      case 47:
        switch (ur()) {
          case 42:
          case 47:
            lo(kB(xB(_e(), wo()), t, r, l), l), (Es(p || 1) == 5 || Es(ur() || 1) == 5) && De(v) && $i(v, -1, void 0) !== " " && (v += " ");
            break;
          default:
            v += "/";
        }
        break;
      // {
      case 123 * m:
        n[c++] = De(v) * x;
      // } ; \0
      case 125 * m:
      case 59:
      case 0:
        if (C > 0 && k) {
          v += ys(k);
          break;
        }
        switch (k) {
          // \0 }
          case 0:
          case 125:
            y = 0;
          // ;
          case 59 + h:
            x == -1 && (v = ul(v, /\f/g, "")), u > 0 && (De(v) - d || m === 0) && lo(u > 32 ? $d(v + ";", i, r, d - 1, l) : $d(ul(v, " ", "") + ";", i, r, d - 2, l), l);
            break;
          // @ ;
          case 59:
            v += ";";
          // { rule/at-rule
          default:
            if (lo(A = Md(v, t, r, c, h, s, n, T, w = [], _ = [], d, o), o), k === 123)
              if (h === 0)
                To(v, t, A, A, w, o, d, n, _);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (di(v, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (di(v, 2) === 97) break;
                  default:
                    h = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                h ? To(e, A, A, i && lo(Md(e, A, A, 0, 0, s, n, T, s, w = [], d, _), _), s, _, d, n, i ? w : _) : To(v, A, A, A, [""], _, 0, n, _);
              }
        }
        c = h = u = 0, m = x = 1, T = v = "", d = a;
        break;
      // :
      case 58:
        d = 1 + De(v), u = p;
      default:
        if (m < 1) {
          if (k == 123)
            --m;
          else if (k == 125 && m++ == 0 && fB() == 125)
            continue;
        }
        switch (v += ys(k), k * m) {
          // &
          case 38:
            x = h > 0 ? 1 : (v += "\f", -1);
            break;
          // ,
          case 44:
            if (C > 0) break;
            n[c++] = (De(v) - 1) * x, x = 1;
            break;
          // @
          case 64:
            ur() === 45 && (v += hn(_e())), f = ur(), h = d = De(T = v += CB(wo())), k++;
            break;
          // -
          case 45:
            p === 45 && De(v) == 2 && (m = 0);
        }
    }
  return o;
}
function Md(e, t, r, i, s, o, a, n, l, c, h, d) {
  for (var f = s - 1, u = s === 0 ? o : [""], p = Dy(u), m = 0, y = 0, x = 0; m < i; ++m)
    for (var C = 0, k = $i(e, f + 1, f = dB(y = a[m])), T = e; C < p; ++C)
      (T = Iy(y > 0 ? u[C] + " " + k : ul(k, /&\f/g, u[C]))) && (l[x++] = T);
  return Sh(e, t, r, s === 0 ? My : n, l, c, h, d);
}
function kB(e, t, r, i) {
  return Sh(e, t, r, kh, ys(uB()), $i(e, 2, -2), 0, i);
}
function $d(e, t, r, i, s) {
  return Sh(e, t, r, $y, $i(e, 0, i), $i(e, i + 1, -1), i, s);
}
function pl(e, t) {
  for (var r = "", i = 0; i < e.length; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function SB(e, t, r, i) {
  switch (e.type) {
    case Oy:
      if (e.children.length) break;
    case nB:
    case hB:
    case $y:
      return e.return = e.return || e.value;
    case kh:
      return "";
    case dl:
      return e.return = e.value + "{" + pl(e.children, i) + "}";
    case My:
      if (!De(e.value = e.props.join(","))) return "";
  }
  return De(r = pl(e.children, i)) ? e.return = e.value + "{" + r + "}" : "";
}
function wB(e) {
  var t = Dy(e);
  return function(r, i, s, o) {
    for (var a = "", n = 0; n < t; n++)
      a += e[n](r, i, s, o) || "";
    return a;
  };
}
var Py = "c4", TB = /* @__PURE__ */ g((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"), _B = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./c4Diagram-AAUBKEIU.js");
  return { id: Py, diagram: e };
}, "loader"), vB = {
  id: Py,
  detector: TB,
  loader: _B
}, BB = vB, Ny = "flowchart", LB = /* @__PURE__ */ g((e, t) => t?.flowchart?.defaultRenderer === "dagre-wrapper" || t?.flowchart?.defaultRenderer === "elk" ? !1 : /^\s*graph/.test(e), "detector"), AB = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./flowDiagram-I6XJVG4X.js");
  return { id: Ny, diagram: e };
}, "loader"), EB = {
  id: Ny,
  detector: LB,
  loader: AB
}, FB = EB, qy = "flowchart-v2", MB = /* @__PURE__ */ g((e, t) => t?.flowchart?.defaultRenderer === "dagre-d3" ? !1 : (t?.flowchart?.defaultRenderer === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && t?.flowchart?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e)), "detector"), $B = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./flowDiagram-I6XJVG4X.js");
  return { id: qy, diagram: e };
}, "loader"), OB = {
  id: qy,
  detector: MB,
  loader: $B
}, IB = OB, Wy = "er", DB = /* @__PURE__ */ g((e) => /^\s*erDiagram/.test(e), "detector"), RB = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./erDiagram-TEJ5UH35.js");
  return { id: Wy, diagram: e };
}, "loader"), PB = {
  id: Wy,
  detector: DB,
  loader: RB
}, NB = PB, zy = "gitGraph", qB = /* @__PURE__ */ g((e) => /^\s*gitGraph/.test(e), "detector"), WB = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./gitGraphDiagram-PVQCEYII.js");
  return { id: zy, diagram: e };
}, "loader"), zB = {
  id: zy,
  detector: qB,
  loader: WB
}, HB = zB, Hy = "gantt", YB = /* @__PURE__ */ g((e) => /^\s*gantt/.test(e), "detector"), UB = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./ganttDiagram-6RSMTGT7.js");
  return { id: Hy, diagram: e };
}, "loader"), XB = {
  id: Hy,
  detector: YB,
  loader: UB
}, GB = XB, Yy = "info", jB = /* @__PURE__ */ g((e) => /^\s*info/.test(e), "detector"), VB = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./infoDiagram-5YYISTIA.js");
  return { id: Yy, diagram: e };
}, "loader"), ZB = {
  id: Yy,
  detector: jB,
  loader: VB
}, Uy = "pie", KB = /* @__PURE__ */ g((e) => /^\s*pie/.test(e), "detector"), QB = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./pieDiagram-4H26LBE5.js");
  return { id: Uy, diagram: e };
}, "loader"), JB = {
  id: Uy,
  detector: KB,
  loader: QB
}, Xy = "quadrantChart", tL = /* @__PURE__ */ g((e) => /^\s*quadrantChart/.test(e), "detector"), eL = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./quadrantDiagram-W4KKPZXB.js");
  return { id: Xy, diagram: e };
}, "loader"), rL = {
  id: Xy,
  detector: tL,
  loader: eL
}, iL = rL, Gy = "xychart", sL = /* @__PURE__ */ g((e) => /^\s*xychart(-beta)?/.test(e), "detector"), oL = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./xychartDiagram-2RQKCTM6.js");
  return { id: Gy, diagram: e };
}, "loader"), aL = {
  id: Gy,
  detector: sL,
  loader: oL
}, nL = aL, jy = "requirement", lL = /* @__PURE__ */ g((e) => /^\s*requirement(Diagram)?/.test(e), "detector"), hL = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./requirementDiagram-4Y6WPE33.js");
  return { id: jy, diagram: e };
}, "loader"), cL = {
  id: jy,
  detector: lL,
  loader: hL
}, dL = cL, Vy = "sequence", uL = /* @__PURE__ */ g((e) => /^\s*sequenceDiagram/.test(e), "detector"), fL = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./sequenceDiagram-3UESZ5HK.js");
  return { id: Vy, diagram: e };
}, "loader"), pL = {
  id: Vy,
  detector: uL,
  loader: fL
}, gL = pL, Zy = "class", mL = /* @__PURE__ */ g((e, t) => t?.class?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(e), "detector"), yL = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./classDiagram-4FO5ZUOK.js");
  return { id: Zy, diagram: e };
}, "loader"), xL = {
  id: Zy,
  detector: mL,
  loader: yL
}, CL = xL, Ky = "classDiagram", bL = /* @__PURE__ */ g((e, t) => /^\s*classDiagram/.test(e) && t?.class?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e), "detector"), kL = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./classDiagram-v2-Q7XG4LA2.js");
  return { id: Ky, diagram: e };
}, "loader"), SL = {
  id: Ky,
  detector: bL,
  loader: kL
}, wL = SL, Qy = "state", TL = /* @__PURE__ */ g((e, t) => t?.state?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(e), "detector"), _L = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./stateDiagram-AJRCARHV.js");
  return { id: Qy, diagram: e };
}, "loader"), vL = {
  id: Qy,
  detector: TL,
  loader: _L
}, BL = vL, Jy = "stateDiagram", LL = /* @__PURE__ */ g((e, t) => !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && t?.state?.defaultRenderer === "dagre-wrapper"), "detector"), AL = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./stateDiagram-v2-BHNVJYJU.js");
  return { id: Jy, diagram: e };
}, "loader"), EL = {
  id: Jy,
  detector: LL,
  loader: AL
}, FL = EL, t0 = "journey", ML = /* @__PURE__ */ g((e) => /^\s*journey/.test(e), "detector"), $L = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./journeyDiagram-JHISSGLW.js");
  return { id: t0, diagram: e };
}, "loader"), OL = {
  id: t0,
  detector: ML,
  loader: $L
}, IL = OL, DL = /* @__PURE__ */ g((e, t, r) => {
  q.debug(`rendering svg for syntax error
`);
  const i = yS(t), s = i.append("g");
  i.attr("viewBox", "0 0 2412 512"), Fu(i, 100, 512, !0), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), s.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), s.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), s.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
}, "draw"), e0 = { draw: DL }, RL = e0, PL = {
  db: {},
  renderer: e0,
  parser: {
    parse: /* @__PURE__ */ g(() => {
    }, "parse")
  }
}, NL = PL, r0 = "flowchart-elk", qL = /* @__PURE__ */ g((e, t = {}) => (
  // If diagram explicitly states flowchart-elk
  /^\s*flowchart-elk/.test(e) || // If a flowchart/graph diagram has their default renderer set to elk
  /^\s*(flowchart|graph)/.test(e) && t?.flowchart?.defaultRenderer === "elk" ? (t.layout = "elk", !0) : !1
), "detector"), WL = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./flowDiagram-I6XJVG4X.js");
  return { id: r0, diagram: e };
}, "loader"), zL = {
  id: r0,
  detector: qL,
  loader: WL
}, HL = zL, i0 = "timeline", YL = /* @__PURE__ */ g((e) => /^\s*timeline/.test(e), "detector"), UL = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./timeline-definition-PNZ67QCA.js");
  return { id: i0, diagram: e };
}, "loader"), XL = {
  id: i0,
  detector: YL,
  loader: UL
}, GL = XL, s0 = "mindmap", jL = /* @__PURE__ */ g((e) => /^\s*mindmap/.test(e), "detector"), VL = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./mindmap-definition-RKZ34NQL.js");
  return { id: s0, diagram: e };
}, "loader"), ZL = {
  id: s0,
  detector: jL,
  loader: VL
}, KL = ZL, o0 = "kanban", QL = /* @__PURE__ */ g((e) => /^\s*kanban/.test(e), "detector"), JL = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./kanban-definition-UN3LZRKU.js");
  return { id: o0, diagram: e };
}, "loader"), tA = {
  id: o0,
  detector: QL,
  loader: JL
}, eA = tA, a0 = "sankey", rA = /* @__PURE__ */ g((e) => /^\s*sankey(-beta)?/.test(e), "detector"), iA = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./sankeyDiagram-5OEKKPKP.js");
  return { id: a0, diagram: e };
}, "loader"), sA = {
  id: a0,
  detector: rA,
  loader: iA
}, oA = sA, n0 = "packet", aA = /* @__PURE__ */ g((e) => /^\s*packet(-beta)?/.test(e), "detector"), nA = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./diagram-LMA3HP47.js");
  return { id: n0, diagram: e };
}, "loader"), lA = {
  id: n0,
  detector: aA,
  loader: nA
}, l0 = "radar", hA = /* @__PURE__ */ g((e) => /^\s*radar-beta/.test(e), "detector"), cA = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./diagram-2AECGRRQ.js");
  return { id: l0, diagram: e };
}, "loader"), dA = {
  id: l0,
  detector: hA,
  loader: cA
}, h0 = "block", uA = /* @__PURE__ */ g((e) => /^\s*block(-beta)?/.test(e), "detector"), fA = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./blockDiagram-GPEHLZMM.js");
  return { id: h0, diagram: e };
}, "loader"), pA = {
  id: h0,
  detector: uA,
  loader: fA
}, gA = pA, c0 = "treeView", mA = /* @__PURE__ */ g((e) => /^\s*treeView-beta/.test(e), "detector"), yA = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./diagram-5GNKFQAL.js");
  return { id: c0, diagram: e };
}, "loader"), xA = {
  id: c0,
  detector: mA,
  loader: yA
}, CA = xA, d0 = "architecture", bA = /* @__PURE__ */ g((e) => /^\s*architecture/.test(e), "detector"), kA = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./architectureDiagram-3BPJPVTR.js");
  return { id: d0, diagram: e };
}, "loader"), SA = {
  id: d0,
  detector: bA,
  loader: kA
}, wA = SA, u0 = "eventmodeling", TA = /* @__PURE__ */ g((e) => /^\s*eventmodeling/.test(e), "detector"), _A = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./diagram-KO2AKTUF.js");
  return { id: u0, diagram: e };
}, "loader"), vA = {
  id: u0,
  detector: TA,
  loader: _A
}, BA = vA, f0 = "ishikawa", LA = /* @__PURE__ */ g((e) => /^\s*ishikawa(-beta)?\b/i.test(e), "detector"), AA = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./ishikawaDiagram-YF4QCWOH.js");
  return { id: f0, diagram: e };
}, "loader"), EA = {
  id: f0,
  detector: LA,
  loader: AA
}, p0 = "venn", FA = /* @__PURE__ */ g((e) => /^\s*venn-beta/.test(e), "detector"), MA = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./vennDiagram-CIIHVFJN.js");
  return { id: p0, diagram: e };
}, "loader"), $A = {
  id: p0,
  detector: FA,
  loader: MA
}, OA = $A, g0 = "treemap", IA = /* @__PURE__ */ g((e) => /^\s*treemap/.test(e), "detector"), DA = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./diagram-OG6HWLK6.js");
  return { id: g0, diagram: e };
}, "loader"), RA = {
  id: g0,
  detector: IA,
  loader: DA
}, m0 = "wardley-beta", PA = /* @__PURE__ */ g((e) => /^\s*wardley-beta/i.test(e), "detector"), NA = /* @__PURE__ */ g(async () => {
  const { diagram: e } = await import("./wardleyDiagram-YWT4CUSO.js");
  return { id: m0, diagram: e };
}, "loader"), qA = {
  id: m0,
  detector: PA,
  loader: NA
}, WA = qA, Od = !1, Ta = /* @__PURE__ */ g(() => {
  Od || (Od = !0, Eo("error", NL, (e) => e.toLowerCase().trim() === "error"), Eo(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: /* @__PURE__ */ g(() => {
        }, "clear")
      },
      styles: {},
      // should never be used
      renderer: {
        draw: /* @__PURE__ */ g(() => {
        }, "draw")
      },
      parser: {
        parse: /* @__PURE__ */ g(() => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }, "parse")
      },
      init: /* @__PURE__ */ g(() => null, "init")
      // no op
    },
    (e) => e.toLowerCase().trimStart().startsWith("---")
  ), Cn(HL, KL, wA), Cn(
    BB,
    eA,
    wL,
    CL,
    NB,
    GB,
    ZB,
    JB,
    dL,
    gL,
    IB,
    FB,
    GL,
    HB,
    FL,
    BL,
    IL,
    iL,
    oA,
    lA,
    nL,
    gA,
    BA,
    CA,
    dA,
    EA,
    RA,
    OA,
    WA
  ));
}, "addDiagrams"), zA = /* @__PURE__ */ g(async () => {
  q.debug("Loading registered diagrams");
  const t = (await Promise.allSettled(
    Object.entries(Rr).map(async ([r, { detector: i, loader: s }]) => {
      if (s)
        try {
          Tn(r);
        } catch {
          try {
            const { diagram: o, id: a } = await s();
            Eo(a, o, i);
          } catch (o) {
            throw q.error(`Failed to load external diagram with key ${r}. Removing from detectors.`), delete Rr[r], o;
          }
        }
    })
  )).filter((r) => r.status === "rejected");
  if (t.length > 0) {
    q.error(`Failed to load ${t.length} external diagrams`);
    for (const r of t)
      q.error(r);
    throw new Error(`Failed to load ${t.length} external diagrams`);
  }
}, "loadRegisteredDiagrams"), HA = "graphics-document document";
function y0(e, t) {
  e.attr("role", HA), t !== "" && e.attr("aria-roledescription", t);
}
g(y0, "setA11yDiagramInfo");
function x0(e, t, r, i) {
  if (e.insert !== void 0) {
    if (r) {
      const s = `chart-desc-${i}`;
      e.attr("aria-describedby", s), e.insert("desc", ":first-child").attr("id", s).text(r);
    }
    if (t) {
      const s = `chart-title-${i}`;
      e.attr("aria-labelledby", s), e.insert("title", ":first-child").attr("id", s).text(t);
    }
  }
}
g(x0, "addSVGa11yTitleDescription");
var Dr, gl = (Dr = class {
  constructor(t, r, i, s, o) {
    this.type = t, this.text = r, this.db = i, this.parser = s, this.renderer = o;
  }
  static async fromText(t, r = {}) {
    const i = Lt(), s = Tl(t, i);
    t = kT(t) + `
`;
    try {
      Tn(s);
    } catch {
      const c = RC(s);
      if (!c)
        throw new mu(`Diagram ${s} not found.`);
      const { id: h, diagram: d } = await c();
      Eo(h, d);
    }
    const { db: o, parser: a, renderer: n, init: l } = Tn(s);
    return a.parser && (a.parser.yy = o), o.clear?.(), l?.(i), r.title && o.setDiagramTitle?.(r.title), await a.parse(t), new Dr(s, t, o, a, n);
  }
  async render(t, r) {
    await this.renderer.draw(this.text, t, r, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
}, g(Dr, "Diagram"), Dr), Id = [], YA = /* @__PURE__ */ g(() => {
  Id.forEach((e) => {
    e();
  }), Id = [];
}, "attachFunctions"), UA = /* @__PURE__ */ g((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function C0(e) {
  const t = e.match(gu);
  if (!t)
    return {
      text: e,
      metadata: {}
    };
  let r = Tw(t[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: ww
  }) ?? {};
  r = typeof r == "object" && !Array.isArray(r) ? r : {};
  const i = {};
  return r.displayMode && (i.displayMode = r.displayMode.toString()), r.title && (i.title = r.title.toString()), r.config && (i.config = r.config), {
    text: e.slice(t[0].length),
    metadata: i
  };
}
g(C0, "extractFrontMatter");
var XA = /* @__PURE__ */ g((e) => e.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (t, r, i) => "<" + r + i.replace(/="([^"]*)"/g, "='$1'") + ">"
), "cleanupText"), GA = /* @__PURE__ */ g((e) => {
  const { text: t, metadata: r } = C0(e), { displayMode: i, title: s, config: o = {} } = r;
  return i && (o.gantt || (o.gantt = {}), o.gantt.displayMode = i), { title: s, config: o, text: t };
}, "processFrontmatter"), jA = /* @__PURE__ */ g((e) => {
  const t = we.detectInit(e) ?? {}, r = we.detectDirective(e, "wrap");
  return Array.isArray(r) ? t.wrap = r.some(({ type: i }) => i === "wrap") : r?.type === "wrap" && (t.wrap = !0), {
    text: lT(e),
    directive: t
  };
}, "processDirectives");
function wh(e) {
  const t = XA(e), r = GA(t), i = jA(r.text), s = oh(r.config, i.directive);
  return e = UA(i.text), {
    code: e,
    title: r.title,
    config: s
  };
}
g(wh, "preprocessDiagram");
function b0(e) {
  const t = new TextEncoder().encode(e), r = Array.from(t, (i) => String.fromCodePoint(i)).join("");
  return btoa(r);
}
g(b0, "toBase64");
var VA = 5e4, ZA = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", KA = "sandbox", QA = "loose", JA = "http://www.w3.org/2000/svg", tE = "http://www.w3.org/1999/xlink", eE = "http://www.w3.org/1999/xhtml", rE = "100%", iE = "100%", sE = "border:0;margin:0;", oE = "margin:0", aE = "allow-top-navigation-by-user-activation allow-popups", nE = 'The "iframe" tag is not supported by your browser.', lE = ["foreignobject"], hE = ["dominant-baseline"];
function Th(e) {
  const t = wh(e);
  return Lo(), cb(t.config ?? {}), t;
}
g(Th, "processAndSetConfigs");
async function k0(e, t) {
  Ta();
  try {
    const { code: r, config: i } = Th(e);
    return { diagramType: (await w0(r)).type, config: i };
  } catch (r) {
    if (t?.suppressErrors)
      return !1;
    throw r;
  }
}
g(k0, "parse");
var Dd = /* @__PURE__ */ g((e, t, r = []) => {
  const i = ku(`{ ${r.join(" !important; ")} !important; }`);
  return `.${e} ${t} ${i}`;
}, "cssImportantStyles"), cE = /* @__PURE__ */ g((e, t = /* @__PURE__ */ new Map()) => {
  const r = new CSSStyleSheet();
  if (e.fontFamily !== void 0 && r.insertRule(
    `:root { --mermaid-font-family: ${e.fontFamily}}`,
    r.cssRules.length
  ), e.altFontFamily !== void 0 && r.insertRule(
    `:root { --mermaid-alt-font-family: ${e.altFontFamily}}`,
    r.cssRules.length
  ), t instanceof Map) {
    const n = ie(e) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    t.forEach((l) => {
      Zc(l.styles) || n.forEach((c) => {
        r.insertRule(
          Dd(l.id, c, l.styles),
          r.cssRules.length
        );
      }), Zc(l.textStyles) || r.insertRule(
        Dd(
          l.id,
          "tspan",
          (l?.textStyles || []).map((c) => c.replace("color", "fill"))
        ),
        r.cssRules.length
      );
    });
  }
  let i = "";
  if (e.themeCSS !== void 0)
    if (typeof r.replaceSync == "function") {
      const s = new CSSStyleSheet();
      s.replaceSync(e.themeCSS), i = wn(s) + `
`;
    } else
      i += `${e.themeCSS}
`;
  return i + wn(r);
}, "createCssStyles"), dE = /* @__PURE__ */ g((e, t) => pl(
  bB(`${e}{${t}}`),
  wB([
    /* @__PURE__ */ g(function(i, s, o, a) {
      if (i.type === "rule" && Array.isArray(i.props)) {
        if (i.parent && i.parent.type === dl)
          return;
        i.props = i.props.map((n) => n.startsWith(e) ? n : `${e} ${n}`);
      } else i.type.startsWith("@") && ([
        ...[
          aB,
          lB,
          Oy,
          cB,
          "@container",
          "@starting-style"
        ],
        dl
        // needed for Mermaid's animation feature
      ].includes(i.type) || (q.warn(`Removing unsupported at-rule ${i.type} from CSS`), i.type = kh));
    }, "addNamespace"),
    SB
  ])
), "compileCSS"), uE = /* @__PURE__ */ g((e, t, r, i) => {
  const s = cE(e, r), o = Ab(
    t,
    s,
    { ...e.themeVariables, theme: e.theme, look: e.look },
    i
  );
  return dE(i, o);
}, "createUserStyles"), fE = /* @__PURE__ */ g((e = "", t, r) => {
  let i = e;
  return !r && !t && (i = i.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), i = Wr(i), i = i.replace(/<br>/g, "<br/>"), i;
}, "cleanUpSvgCode"), pE = /* @__PURE__ */ g((e = "", t) => {
  const r = t?.viewBox?.baseVal?.height ? t.viewBox.baseVal.height + "px" : iE, i = b0(`<body style="${oE}">${e}</body>`);
  return `<iframe style="width:${rE};height:${r};${sE}" src="data:text/html;charset=UTF-8;base64,${i}" sandbox="${aE}">
  ${nE}
</iframe>`;
}, "putIntoIFrame"), Rd = /* @__PURE__ */ g((e, t, r, i, s) => {
  const o = e.append("div");
  o.attr("id", r), i && o.attr("style", i);
  const a = o.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", JA);
  return s && a.attr("xmlns:xlink", s), a.append("g"), e;
}, "appendDivSvgG");
function ml(e, t) {
  return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
g(ml, "sandboxedIframe");
var gE = /* @__PURE__ */ g((e, t, r, i) => {
  e.getElementById(t)?.remove(), e.getElementById(r)?.remove(), e.getElementById(i)?.remove();
}, "removeExistingElements"), mE = /* @__PURE__ */ g(async function(e, t, r) {
  Ta();
  const i = Th(t);
  t = i.code;
  const s = Lt();
  q.debug(s), t.length > (s?.maxTextSize ?? VA) && (t = ZA);
  const o = `#${e}`, a = "i" + e, n = "#" + a, l = "d" + e, c = "#" + l, h = /* @__PURE__ */ g(() => {
    const W = ut(f ? n : c).node();
    W && "remove" in W && W.remove();
  }, "removeTempElements");
  let d = ut(document.body);
  const f = s.securityLevel === KA, u = s.securityLevel === QA, p = s.fontFamily;
  if (r !== void 0) {
    if (r && (r.innerHTML = ""), f) {
      const H = ml(ut(r), a);
      d = ut(H.nodes()[0].contentDocument.body), d.node().style.margin = "0";
    } else
      d = ut(r);
    Rd(d, e, l, `font-family: ${p}`, tE);
  } else {
    if (gE(document, e, l, a), f) {
      const H = ml(ut(document.body), a);
      d = ut(H.nodes()[0].contentDocument.body), d.node().style.margin = "0";
    } else
      d = ut("body");
    Rd(d, e, l);
  }
  let m, y;
  try {
    m = await gl.fromText(t, { title: i.title });
  } catch (H) {
    if (s.suppressErrorRendering)
      throw h(), H;
    m = await gl.fromText("error"), y = H;
  }
  const x = d.select(c).node(), C = m.type, k = x.firstChild, T = k.firstChild, w = m.renderer.getClasses?.(t, m), _ = uE(s, C, w, o), A = document.createElement("style");
  A.innerHTML = _, k.insertBefore(A, T);
  try {
    await m.renderer.draw(t, e, "11.15.0", m);
  } catch (H) {
    throw s.suppressErrorRendering ? h() : RL.draw(t, e, "11.15.0"), H;
  }
  const v = d.select(`${c} svg`), N = m.db.getAccTitle?.(), O = m.db.getAccDescription?.();
  T0(C, v, N, O), d.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", eE);
  let P = d.select(c).node().innerHTML;
  if (q.debug("config.arrowMarkerAbsolute", s.arrowMarkerAbsolute), P = fE(P, f, tr(s.arrowMarkerAbsolute)), f) {
    const H = d.select(c + " svg").node();
    P = pE(P, H);
  } else u || (P = Bi.sanitize(P, {
    ADD_TAGS: lE,
    ADD_ATTR: hE,
    HTML_INTEGRATION_POINTS: { foreignobject: !0 }
  }));
  if (YA(), y)
    throw y;
  return h(), {
    diagramType: C,
    svg: P,
    bindFunctions: m.db.bindFunctions
  };
}, "render");
function S0(e = {}) {
  const t = Rt({}, e);
  t?.fontFamily && !t.themeVariables?.fontFamily && (t.themeVariables || (t.themeVariables = {}), t.themeVariables.fontFamily = t.fontFamily), lb(t), t?.theme && t.theme in je ? t.themeVariables = je[t.theme].getThemeVariables(
    t.themeVariables
  ) : t && (t.themeVariables = je.default.getThemeVariables(t.themeVariables));
  const r = typeof t == "object" ? nb(t) : Su();
  wl(r.logLevel), Ta();
}
g(S0, "initialize");
var w0 = /* @__PURE__ */ g((e, t = {}) => {
  const { code: r } = wh(e);
  return gl.fromText(r, t);
}, "getDiagramFromText");
function T0(e, t, r, i) {
  y0(t, e), x0(t, r, i, t.attr("id"));
}
g(T0, "addA11yInfo");
var Hr = Object.freeze({
  render: mE,
  parse: k0,
  getDiagramFromText: w0,
  initialize: S0,
  getConfig: Lt,
  setConfig: wu,
  getSiteConfig: Su,
  updateSiteConfig: hb,
  reset: /* @__PURE__ */ g(() => {
    Lo();
  }, "reset"),
  globalReset: /* @__PURE__ */ g(() => {
    Lo(Li);
  }, "globalReset"),
  defaultConfig: Li
});
wl(Lt().logLevel);
Lo(Lt());
var yE = /* @__PURE__ */ g((e, t, r) => {
  q.warn(e), sh(e) ? (r && r(e.str, e.hash), t.push({ ...e, message: e.str, error: e })) : (r && r(e), e instanceof Error && t.push({
    str: e.message,
    message: e.message,
    hash: e.name,
    error: e
  }));
}, "handleError"), _0 = /* @__PURE__ */ g(async function(e = {
  querySelector: ".mermaid"
}) {
  try {
    await xE(e);
  } catch (t) {
    if (sh(t) && q.error(t.str), Qe.parseError && Qe.parseError(t), !e.suppressErrors)
      throw q.error("Use the suppressErrors option to suppress these errors"), t;
  }
}, "run"), xE = /* @__PURE__ */ g(async function({ postRenderCallback: e, querySelector: t, nodes: r } = {
  querySelector: ".mermaid"
}) {
  const i = Hr.getConfig();
  q.debug(`${e ? "" : "No "}Callback function found`);
  let s;
  if (r)
    s = r;
  else if (t)
    s = document.querySelectorAll(t);
  else
    throw new Error("Nodes and querySelector are both undefined");
  q.debug(`Found ${s.length} diagrams`), i?.startOnLoad !== void 0 && (q.debug("Start On Load: " + i?.startOnLoad), Hr.updateSiteConfig({ startOnLoad: i?.startOnLoad }));
  const o = new we.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed);
  let a;
  const n = [];
  for (const l of Array.from(s)) {
    if (q.info("Rendering diagram: " + l.id), l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const c = `mermaid-${o.next()}`;
    a = l.innerHTML, a = Ng(we.entityDecode(a)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const h = we.detectInit(a);
    h && q.debug("Detected early reinit: ", h);
    try {
      const { svg: d, bindFunctions: f } = await A0(c, a, l);
      l.innerHTML = d, e && await e(c), f && f(l);
    } catch (d) {
      yE(d, n, Qe.parseError);
    }
  }
  if (n.length > 0)
    throw n[0];
}, "runThrowsErrors"), v0 = /* @__PURE__ */ g(function(e) {
  Hr.initialize(e);
}, "initialize"), CE = /* @__PURE__ */ g(async function(e, t, r) {
  q.warn("mermaid.init is deprecated. Please use run instead."), e && v0(e);
  const i = { postRenderCallback: r, querySelector: ".mermaid" };
  typeof t == "string" ? i.querySelector = t : t && (t instanceof HTMLElement ? i.nodes = [t] : i.nodes = t), await _0(i);
}, "init"), bE = /* @__PURE__ */ g(async (e, {
  lazyLoad: t = !0
} = {}) => {
  Ta(), Cn(...e), t === !1 && await zA();
}, "registerExternalDiagrams"), B0 = /* @__PURE__ */ g(function() {
  if (Qe.startOnLoad) {
    const { startOnLoad: e } = Hr.getConfig();
    e && Qe.run().catch((t) => q.error("Mermaid failed to initialize", t));
  }
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", B0, !1);
var kE = /* @__PURE__ */ g(function(e) {
  Qe.parseError = e;
}, "setParseErrorHandler"), ra = [], cn = !1, L0 = /* @__PURE__ */ g(async () => {
  if (!cn) {
    for (cn = !0; ra.length > 0; ) {
      const e = ra.shift();
      if (e)
        try {
          await e();
        } catch (t) {
          q.error("Error executing queue", t);
        }
    }
    cn = !1;
  }
}, "executeQueue"), SE = /* @__PURE__ */ g(async (e, t) => new Promise((r, i) => {
  const s = /* @__PURE__ */ g(() => new Promise((o, a) => {
    Hr.parse(e, t).then(
      (n) => {
        o(n), r(n);
      },
      (n) => {
        q.error("Error parsing", n), Qe.parseError?.(n), a(n), i(n);
      }
    );
  }), "performCall");
  ra.push(s), L0().catch(i);
}), "parse"), A0 = /* @__PURE__ */ g((e, t, r) => new Promise((i, s) => {
  const o = /* @__PURE__ */ g(() => new Promise((a, n) => {
    Hr.render(e, t, r).then(
      (l) => {
        a(l), i(l);
      },
      (l) => {
        q.error("Error parsing", l), Qe.parseError?.(l), n(l), s(l);
      }
    );
  }), "performCall");
  ra.push(o), L0().catch(s);
}), "render"), wE = /* @__PURE__ */ g(() => Object.keys(Rr).map((e) => ({
  id: e
})), "getRegisteredDiagramsMetadata"), Qe = {
  startOnLoad: !0,
  mermaidAPI: Hr,
  parse: SE,
  render: A0,
  init: CE,
  run: _0,
  registerExternalDiagrams: bE,
  registerLayoutLoaders: Fy,
  initialize: v0,
  parseError: void 0,
  contentLoaded: B0,
  setParseErrorHandler: kE,
  detectType: Tl,
  registerIconPacks: L_,
  getRegisteredDiagramsMetadata: wE
}, dn = Qe;
const pt = (e) => e.replace(/\s*!important\s*$/i, "").trim(), TE = (e, t) => {
  let r = t;
  for (; r < e.length && /\s/.test(e[r]); )
    r += 1;
  const i = r;
  for (; r < e.length && /[a-z-]/i.test(e[r]); )
    r += 1;
  if (r === i)
    return !1;
  for (; r < e.length && /\s/.test(e[r]); )
    r += 1;
  return e[r] === ":";
}, ge = (e) => {
  const t = [];
  let r = 0;
  for (; r < e.length; ) {
    for (; r < e.length && /[\s;,]/.test(e[r]); )
      r += 1;
    if (r >= e.length)
      break;
    const i = r;
    for (; r < e.length && e[r] !== ":" && !(e[r] === ";" || e[r] === ","); )
      r += 1;
    if (r >= e.length || e[r] !== ":")
      break;
    const s = e.substring(i, r).trim().toLowerCase();
    r += 1;
    const o = r;
    let a = 0, n = null;
    for (; r < e.length; ) {
      const c = e[r];
      if (n) {
        c === n && e[r - 1] !== "\\" && (n = null), r += 1;
        continue;
      }
      if (c === '"' || c === "'") {
        n = c, r += 1;
        continue;
      }
      if (c === "(") {
        a += 1, r += 1;
        continue;
      }
      if (c === ")") {
        a = Math.max(0, a - 1), r += 1;
        continue;
      }
      if (a === 0 && (c === ";" || c === "," || /\s/.test(c) && TE(e, r)))
        break;
      r += 1;
    }
    const l = pt(e.substring(o, r));
    s && l && t.push({ property: s, value: l }), r < e.length && (e[r] === ";" || e[r] === ",") && (r += 1);
  }
  return t;
}, me = (e) => {
  const t = pt(e);
  if (!t)
    return !1;
  if (typeof CSS < "u" && typeof CSS.supports == "function")
    return CSS.supports("color", t);
  if (typeof document < "u") {
    const r = document.createElement("div");
    return r.style.color = "", r.style.color = t, r.style.color !== "";
  }
  return !1;
}, Pd = (e, t) => {
  const r = e.getAttribute("style");
  return r && ge(r).find((i) => i.property === t)?.value || "";
}, un = (...e) => {
  for (const t of e) {
    const r = pt(t || "");
    if (me(r))
      return r;
  }
}, _h = (e, t) => {
  const r = e.querySelector("text, foreignObject, div, span, p") || e, i = un(r.getAttribute?.("fill"), Pd(r, "fill"), r.style?.fill);
  if (i)
    return i;
  const s = un(r.getAttribute?.("color"), Pd(r, "color"), r.style?.color);
  if (s)
    return s;
  const o = un(t);
  if (o)
    return o;
}, vh = (e, t, r) => {
  switch (t) {
    case Ct.FILL:
    case Ct.STROKE:
      me(r) && (e[t] = r);
      break;
    case Ct.STROKE_WIDTH:
    case Ct.STROKE_DASHARRAY:
      e[t] = r;
      break;
  }
}, ia = (e, t, r) => {
  t === te.COLOR && me(r) && (e[te.COLOR] = r);
}, sa = (e, t, r) => {
  e && ge(e).forEach(({ property: i, value: s }) => {
    vh(t, i, s), ia(r, i, s);
  });
}, E0 = (e, t) => {
  e && ge(e).forEach(({ property: r, value: i }) => {
    if (r === "fill" && me(i)) {
      t[te.COLOR] = i;
      return;
    }
    ia(t, r, i);
  });
}, F0 = (e, t) => {
  if (!e)
    return;
  [
    [Ct.FILL, e.getAttribute("fill")],
    [Ct.STROKE, e.getAttribute("stroke")],
    [
      Ct.STROKE_WIDTH,
      e.getAttribute("stroke-width")
    ],
    [
      Ct.STROKE_DASHARRAY,
      e.getAttribute("stroke-dasharray")
    ]
  ].forEach(([i, s]) => {
    const o = pt(s || "");
    o && vh(t, i, o);
  });
}, M0 = (e, t) => {
  if (!e)
    return;
  const r = e.getAttribute("fill") || e.getAttribute("color"), i = pt(r || "");
  me(i) && (t[te.COLOR] = i);
}, yl = (e, t, r, i) => {
  if (!(t instanceof Map))
    return;
  const s = t.get(e);
  s && (s.styles?.forEach((o) => {
    ge(o).forEach(({ property: a, value: n }) => {
      vh(r, a, n), ia(i, a, n);
    });
  }), s.textStyles?.forEach((o) => {
    ge(o).forEach(({ property: a, value: n }) => {
      ia(i, a, n);
    });
  }));
}, _E = (e, t, r) => {
  const i = e.nodes.map((f) => f.startsWith("flowchart-") ? f.split("-")[1] : f), s = t.querySelector(`[id='${e.id}']`);
  if (!s)
    throw new Error("SubGraph element not found");
  const o = Bh(s, t), a = s.getBBox(), n = {
    width: a.width,
    height: a.height
  }, l = {}, c = {}, h = s.querySelector(":scope > rect, :scope > path, :scope > polygon, :scope > ellipse") || s.querySelector(".cluster > rect, .cluster > path, .cluster > polygon, .cluster > ellipse") || s.querySelector("rect, path, polygon, ellipse");
  sa(s.getAttribute("style"), l, c), sa(h?.getAttribute("style"), l, c), F0(h, l);
  const d = s.querySelector(".cluster-label text, .cluster-label tspan") || s.querySelector("text");
  return E0(d?.getAttribute("style"), c), M0(d, c), yl(e.id, r, l, c), e.classes?.forEach((f) => {
    yl(f, r, l, c);
  }), {
    id: e.id,
    nodeIds: i,
    text: le(e.title),
    labelType: "text",
    ...o,
    ...n,
    containerStyle: l,
    labelStyle: c
  };
}, Nd = (e, t, r) => {
  const i = t.querySelector(`[id*="${e.domId}"]`);
  if (!i)
    return;
  let s;
  i.parentElement?.tagName.toLowerCase() === "a" && (s = i.parentElement.getAttribute("xlink:href"));
  const o = Bh(s ? i.parentElement : i, t), a = i.getBBox(), n = {
    width: a.width,
    height: a.height
  }, l = {}, c = {};
  e.classes && r instanceof Map && (Array.isArray(e.classes) ? e.classes : [e.classes]).forEach((f) => {
    yl(f, r, l, c);
  }), e.styles?.forEach((f) => {
    sa(f, l, c);
  });
  const h = i.querySelector(".label-container");
  return sa(h?.getAttribute("style"), l, c), F0(h, l), Array.from(i.querySelectorAll(".label, .nodeLabel, .label text, .label tspan, .label span, .label div")).forEach((f) => {
    E0(f.getAttribute("style"), c), M0(f, c);
  }), {
    id: e.id,
    labelType: e.labelType,
    text: le(e.text || ""),
    type: e.type,
    link: s || void 0,
    ...o,
    ...n,
    containerStyle: l,
    labelStyle: c
  };
}, vE = (e, t, r) => {
  const i = r.querySelector(`[id*="${e.id}"]`);
  if (!i)
    throw new Error("Edge element not found");
  const s = Bh(i, r), o = lu(i, s);
  return e.length = void 0, {
    ...e,
    ...o,
    text: le(e.text)
  };
}, Bh = (e, t) => {
  if (!e)
    throw new Error("Element not found");
  let r = e.parentElement?.parentElement;
  const i = e.childNodes[0];
  let s = { x: 0, y: 0 };
  if (i) {
    const { transformX: l, transformY: c } = Or(i), h = i.getBBox();
    s = {
      x: Number(i.getAttribute("x")) || l + h.x || 0,
      y: Number(i.getAttribute("y")) || c + h.y || 0
    };
  }
  const { transformX: o, transformY: a } = Or(e), n = {
    x: o + s.x,
    y: a + s.y
  };
  for (; r && r.id !== t.id; ) {
    if (r.classList.value === "root" && r.hasAttribute("transform")) {
      const { transformX: l, transformY: c } = Or(r);
      n.x += l, n.y += c;
    }
    r = r.parentElement;
  }
  return n;
}, BE = (e, t) => {
  const r = e.getVertices(), i = e.getEdges(), s = e.getSubGraphs(), o = e.getClasses(), a = {}, n = o instanceof Map ? o : {};
  r instanceof Map ? r.forEach((d, f) => {
    a[f] = Nd(d, t, n);
  }) : typeof r == "object" && r !== null && Object.entries(r).forEach(([d, f]) => {
    a[d] = Nd(f, t, n);
  });
  const l = /* @__PURE__ */ new Map(), c = (Array.isArray(i) ? i : []).map((d) => {
    if (!t.querySelector(`[id*="${d.id}"]`))
      return null;
    const f = `${d.start}-${d.end}`, u = l.get(f) || 0;
    return l.set(f, u + 1), vE(d, u, t);
  }).filter((d) => d !== null && d.reflectionPoints.length > 1);
  return {
    type: "flowchart",
    subGraphs: (Array.isArray(s) ? s : []).map((d) => _E(d, t, n)),
    vertices: a,
    edges: c
  };
}, LE = (e, t) => {
  const r = {};
  t?.label && (r.label = { text: le(t.label), fontSize: 16 });
  const i = e.tagName;
  if (i === "line")
    r.startX = Number(e.getAttribute("x1")), r.startY = Number(e.getAttribute("y1")), r.endX = Number(e.getAttribute("x2")), r.endY = Number(e.getAttribute("y2"));
  else if (i === "path") {
    const a = e.getAttribute("d");
    if (!a)
      throw new Error('Path element does not contain a "d" attribute');
    const n = a.split(/(?=[LC])/), l = n[0].substring(1).split(",").map((d) => parseFloat(d)), c = [];
    n.forEach((d) => {
      const f = d.substring(1).trim().split(" ").map((u) => {
        const [p, m] = u.split(",");
        return [
          parseFloat(p) - l[0],
          parseFloat(m) - l[1]
        ];
      });
      c.push(...f);
    });
    const h = c[c.length - 1];
    r.startX = l[0], r.startY = l[1], r.endX = h[0], r.endY = h[1], r.points = c;
  }
  t?.label && (r.startY = r.startY - 10, r.endY = r.endY - 10);
  const s = e.getAttribute("stroke"), o = (s && s !== "none" ? s : "") || getComputedStyle(e).stroke || "";
  return r.strokeColor = o ? pt(o) : null, r.strokeWidth = Number(e.getAttribute("stroke-width")), r.type = "arrow", r.strokeStyle = t?.strokeStyle || "solid", r.startArrowhead = t?.startArrowhead || null, r.endArrowhead = t?.endArrowhead || null, r;
}, Lh = (e, t, r, i, s) => {
  const o = {};
  return o.type = "arrow", o.startX = e, o.startY = t, o.endX = r, o.endY = i, Object.assign(o, { ...s }), o;
}, oa = (e, t, r, i) => ({
  type: "text",
  x: e,
  y: t,
  text: r,
  width: i?.width || 20,
  height: i?.height || 20,
  fontSize: i?.fontSize || Ms,
  id: i?.id,
  color: i?.color,
  groupId: i?.groupId,
  metadata: i?.metadata
}), $0 = (e, t, r) => {
  const i = {}, s = Number(e.getAttribute("x")), o = Number(e.getAttribute("y"));
  i.type = "text", i.text = le(t), r?.id && (i.id = r.id), r?.groupId && (i.groupId = r.groupId);
  const a = e.getBBox();
  i.width = a.width, i.height = a.height, i.x = s - a.width / 2, i.y = o;
  const n = parseInt(getComputedStyle(e).fontSize);
  return i.fontSize = n, i.color = _h(e), i;
}, Je = (e, t, r = {}) => {
  const i = {};
  i.type = t;
  const { label: s, subtype: o, id: a, groupId: n } = r;
  i.id = a, n && (i.groupId = n), s && (i.label = {
    text: le(s.text),
    fontSize: 16,
    textAlign: s?.textAlign,
    verticalAlign: s?.verticalAlign
  });
  const l = e.getBBox();
  switch (i.x = l.x, i.y = l.y, i.width = l.width, i.height = l.height, i.subtype = o, o) {
    case "highlight":
      const c = e.getAttribute("fill");
      c && (i.bgColor = pt(c));
      break;
    case "note":
      i.strokeStyle = "dashed";
      break;
  }
  return i;
}, Fs = (e, t, r, i, s, o) => {
  const a = {};
  a.startX = t, a.startY = r, a.endX = i, o?.groupId && (a.groupId = o.groupId), o?.id && (a.id = o.id), a.endY = s;
  const n = e.getAttribute("stroke");
  return a.strokeColor = n ? pt(n) : null, a.strokeWidth = Number(e.getAttribute("stroke-width")), a.type = "line", a;
}, qd = {
  0: "SOLID",
  1: "DOTTED",
  3: "SOLID_CROSS",
  4: "DOTTED_CROSS",
  5: "SOLID_OPEN",
  6: "DOTTED_OPEN",
  24: "SOLID_POINT",
  25: "DOTTED_POINT"
}, Ie = {
  SOLID: 0,
  DOTTED: 1,
  NOTE: 2,
  SOLID_CROSS: 3,
  DOTTED_CROSS: 4,
  SOLID_OPEN: 5,
  DOTTED_OPEN: 6,
  SOLID_POINT: 24,
  DOTTED_POINT: 25,
  CRITICAL_START: 27
}, AE = (e) => {
  let t;
  switch (e) {
    case Ie.SOLID:
    case Ie.SOLID_CROSS:
    case Ie.SOLID_OPEN:
    case Ie.SOLID_POINT:
      t = "solid";
      break;
    case Ie.DOTTED:
    case Ie.DOTTED_CROSS:
    case Ie.DOTTED_OPEN:
    case Ie.DOTTED_POINT:
      t = "dotted";
      break;
    default:
      t = "solid";
      break;
  }
  return t;
}, EE = (e, t) => {
  if (!!e.nextElementSibling?.classList.contains("sequenceNumber")) {
    const i = e.nextElementSibling?.textContent;
    if (!i)
      throw new Error("sequence number not present");
    const s = 30, o = s / 2, n = {
      type: "rectangle",
      x: t.startX - 10,
      y: t.startY - o,
      label: { text: i, fontSize: 14 },
      bgColor: "#e9ecef",
      height: s,
      subtype: "sequence"
    };
    Object.assign(t, { sequenceNumber: n });
  }
}, Wd = (e, t, r) => {
  if (!e)
    throw "root node not found";
  const i = fe(), s = Array.from(e.children), o = [];
  return s.forEach((a, n) => {
    const l = `${r?.id}-${n}`;
    let c;
    switch (a.tagName) {
      case "line":
        const h = Number(a.getAttribute("x1")), d = Number(a.getAttribute("y1")), f = Number(a.getAttribute("x2")), u = Number(a.getAttribute("y2"));
        c = Fs(a, h, d, f, u, { groupId: i, id: l });
        break;
      case "text":
        c = $0(a, t, {
          groupId: i,
          id: l
        });
        break;
      case "circle":
        c = Je(a, "ellipse", {
          label: a.textContent ? { text: a.textContent } : void 0,
          groupId: i,
          id: l
        });
      default:
        c = Je(a, ix[a.tagName], {
          label: a.textContent ? { text: a.textContent } : void 0,
          groupId: i,
          id: l
        });
    }
    o.push(c);
  }), o;
}, zd = (e, t) => {
  const r = t.getAttribute("fill"), i = t.getAttribute("stroke"), s = t.getAttribute("stroke-width"), o = t.getAttribute("stroke-dasharray");
  r && r !== "none" && (e.bgColor = pt(r)), i && i !== "none" && (e.strokeColor = pt(i)), s && (e.strokeWidth = Number(s)), o && o.trim() && (e.strokeStyle = "dashed");
}, FE = (e, t) => {
  const r = Array.from(t.querySelectorAll(".actor-top")), i = Array.from(t.querySelectorAll(".actor-bottom")), s = [], o = [], a = {}, n = e instanceof Map ? Array.from(e.values()) : Object.values(e), l = Array.from(t.querySelectorAll(".actor-line")), c = (h, d) => {
    const f = h.name, u = l.find((m) => m.getAttribute("name") === f);
    if (u)
      return u;
    const p = h.type === "participant" ? d.parentElement?.previousElementSibling : d.previousElementSibling;
    return p ? p.tagName === "line" ? p : p.querySelector("line") : null;
  };
  return n.forEach((h) => {
    const d = r.find((p) => p.getAttribute("name") === h.name), f = i.find((p) => p.getAttribute("name") === h.name);
    if (!d || !f)
      throw "root not found";
    const u = h.description;
    if (h.type === "participant") {
      const p = Je(d, "rectangle", { id: `${h.name}-top`, label: { text: u }, subtype: "actor" });
      if (zd(p, d), !p)
        throw "Top Node element not found!";
      s.push([p]);
      const m = Je(f, "rectangle", { id: `${h.name}-bottom`, label: { text: u }, subtype: "actor" });
      a[h.name] = {
        topId: `${h.name}-top`,
        bottomId: `${h.name}-bottom`,
        bindType: "rectangle"
      }, zd(m, f), s.push([m]);
      const y = c(h, d);
      if (y?.tagName !== "line")
        throw "Line not found";
      const x = Number(y.getAttribute("x1"));
      if (!p.height)
        throw "Top node element height is null";
      const C = p.y + p.height, k = m.y, T = Number(y.getAttribute("x2")), w = Fs(y, x, C, T, k);
      o.push(w);
    } else if (h.type === "actor") {
      const p = Wd(d, u, {
        id: `${h.name}-top`
      });
      s.push(p);
      const m = Wd(f, u, {
        id: `${h.name}-bottom`
      });
      s.push(m);
      const y = c(h, d);
      if (y?.tagName !== "line")
        throw "Line not found";
      const x = Number(y.getAttribute("x1")), C = Number(y.getAttribute("y1")), k = Number(y.getAttribute("x2")), T = m.find((A) => A.type === "ellipse");
      if (T) {
        const A = T.y, v = Fs(y, x, C, k, A);
        o.push(v);
      }
      const w = p.find((A) => A.type === "ellipse"), _ = m.find((A) => A.type === "ellipse");
      w?.id && _?.id && (a[h.name] = {
        topId: w.id,
        bottomId: _.id,
        bindType: "ellipse"
      });
    }
  }), { nodes: s, lines: o, actorMap: a };
}, ME = (e, t, r) => {
  const i = [], s = Array.from(t.querySelectorAll('[class*="messageLine"]')), o = Object.keys(qd), a = e.filter((n) => o.includes(n.type.toString()));
  return s.forEach((n, l) => {
    const c = a[l], h = qd[c.type], d = LE(n, {
      label: c?.message,
      strokeStyle: AE(c.type),
      endArrowhead: h === "SOLID_OPEN" || h === "DOTTED_OPEN" ? null : "arrow"
    }), f = r[c.from], u = r[c.to];
    f?.topId && u?.topId && (d.start = { type: f.bindType || "rectangle", id: f.topId }, d.end = { type: u.bindType || "rectangle", id: u.topId }), EE(n, d), i.push(d);
  }), i;
}, $E = (e, t) => {
  const r = Array.from(t.querySelectorAll(".note")).map((o) => o.parentElement), i = e.filter((o) => o.type === Ie.NOTE), s = [];
  return r.forEach((o, a) => {
    if (!o)
      return;
    const n = o.firstChild, l = i[a].message, c = Je(n, "rectangle", {
      label: { text: l },
      subtype: "note"
    }), h = n.getAttribute("fill"), d = n.getAttribute("stroke"), f = n.getAttribute("stroke-width"), u = n.getAttribute("stroke-dasharray");
    h && h !== "none" && (c.bgColor = pt(h)), d && d !== "none" && (c.strokeColor = pt(d)), f && (c.strokeWidth = Number(f)), u && u.trim() && (c.strokeStyle = "dashed"), s.push(c);
  }), s;
}, OE = (e) => {
  const t = Array.from(e.querySelectorAll("[class*=activation]")), r = [];
  return t.forEach((i) => {
    const s = Je(i, "rectangle", {
      label: { text: "" },
      subtype: "activation"
    });
    (() => {
      const a = i.getAttribute("fill"), n = i.getAttribute("stroke"), l = i.getAttribute("stroke-width"), c = i.getAttribute("stroke-dasharray");
      a && a !== "none" && (s.bgColor = pt(a)), n && n !== "none" && (s.strokeColor = pt(n)), l && (s.strokeWidth = Number(l)), c && c.trim() && (s.strokeStyle = "dashed");
    })(), r.push(s);
  }), r;
}, IE = (e, t) => {
  const r = Array.from(t.querySelectorAll(".loopLine")), i = [], s = [], o = [];
  r.forEach((h) => {
    const d = Number(h.getAttribute("x1")), f = Number(h.getAttribute("y1")), u = Number(h.getAttribute("x2")), p = Number(h.getAttribute("y2")), m = Fs(h, d, f, u, p);
    m.strokeStyle = "dotted", m.strokeColor = "#adb5bd", m.strokeWidth = 2, i.push(m);
  });
  const a = Array.from(t.querySelectorAll(".loopText")), n = e.filter((h) => h.type === Ie.CRITICAL_START).map((h) => h.message);
  a.forEach((h) => {
    const d = h.textContent || "", f = $0(h, d), u = d.match(/\[(.*?)\]/)?.[1] || "";
    n.includes(u) && (f.x += 16), s.push(f);
  });
  const l = Array.from(t?.querySelectorAll(".labelBox")), c = Array.from(t?.querySelectorAll(".labelText"));
  return l.forEach((h, d) => {
    const f = c[d]?.textContent || "", u = Je(h, "rectangle", {
      label: { text: f }
    });
    u.strokeColor = "#adb5bd", u.bgColor = "#e9ecef", u.width = void 0, o.push(u);
  }), { lines: i, texts: s, nodes: o };
}, DE = (e) => {
  const t = Array.from(e.querySelectorAll(".rect")).filter((i) => i.parentElement?.tagName !== "g"), r = [];
  return t.forEach((i) => {
    const s = Je(i, "rectangle", {
      label: { text: "" },
      subtype: "highlight"
    });
    r.push(s);
  }), r;
}, RE = (e, t) => {
  const r = e.db, i = [], o = r.getBoxes().map((y) => ({
    ...y,
    fill: pt(y.fill || "")
  })), a = DE(t), n = r.getActors(), { nodes: l, lines: c, actorMap: h } = FE(n, t), d = r.getMessages(), f = ME(d, t, h), u = $E(d, t), p = OE(t), m = IE(d, t);
  return i.push(a), i.push(...l), i.push(u), i.push(p), { type: "sequence", lines: c, arrows: f, nodes: i, loops: m, groups: o };
}, PE = (e) => {
  const t = {};
  return e && e.forEach((r) => {
    ge(r).forEach(({ property: i, value: s }) => {
      i && s && (t[i] = pt(s));
    });
  }), t;
}, ho = {
  AGGREGATION: 0,
  EXTENSION: 1,
  COMPOSITION: 2,
  DEPENDENCY: 3
}, Hd = {
  LINE: 0,
  DOTTED_LINE: 1
}, Yd = 16, NE = (e) => {
  let t;
  switch (e) {
    case Hd.LINE:
      t = "solid";
      break;
    case Hd.DOTTED_LINE:
      t = "dotted";
      break;
    default:
      t = "solid";
  }
  return t;
}, Ud = (e) => {
  let t;
  switch (e) {
    case ho.AGGREGATION:
      t = "diamond_outline";
      break;
    case ho.COMPOSITION:
      t = "diamond";
      break;
    case ho.EXTENSION:
      t = "triangle_outline";
      break;
    case "none":
      t = null;
      break;
    case ho.DEPENDENCY:
    default:
      t = "arrow";
      break;
  }
  return t;
}, fn = (e, t) => {
  let r = 0, i = 0, s = e;
  for (; s && s !== t; ) {
    const { transformX: o, transformY: a } = Or(s);
    r += o, i += a, s = s.parentElement;
  }
  return { tx: r, ty: i };
}, Xd = /* @__PURE__ */ new Set([
  "triangle_outline",
  "diamond",
  "diamond_outline"
]), O0 = (e, t = 0.5) => {
  if (e.length <= 2)
    return [...e];
  const r = [e[0]];
  for (let i = 1; i < e.length - 1; i++) {
    const s = r[r.length - 1], o = e[i], a = e[i + 1], n = a.x - s.x, l = a.y - s.y, c = Math.hypot(n, l);
    if (!c)
      continue;
    const d = Math.abs(n * (o.y - s.y) - l * (o.x - s.x)) / c, f = ((o.x - s.x) * n + (o.y - s.y) * l) / (c * c);
    d <= t && f >= -t && f <= 1 + t || r.push(o);
  }
  return r.push(e[e.length - 1]), r;
}, I0 = (e) => {
  const t = kl(nu(e).map((i) => [i.x, i.y])).map(([i, s]) => ({ x: i, y: s })), r = Sl(e);
  return r && t.length >= 2 && (t[0] = {
    x: r.startX,
    y: r.startY
  }, t[t.length - 1] = {
    x: r.endX,
    y: r.endY
  }), O0(t);
}, Gd = (e, t, r) => {
  const i = e.x - t.x, s = e.y - t.y, o = Math.hypot(i, s);
  return o ? {
    x: e.x + i / o * r,
    y: e.y + s / o * r
  } : e;
}, qE = (e, t) => {
  const r = kl(t.map((o) => [o.x, o.y])).map(([o, a]) => ({ x: o, y: a }));
  if (r.length < 2)
    throw new Error("Arrow route must contain at least two points");
  const i = r[0], s = r[r.length - 1];
  e.startX = i.x, e.startY = i.y, e.endX = s.x, e.endY = s.y, e.points = r.map((o) => [
    o.x - i.x,
    o.y - i.y
  ]);
}, WE = (e) => {
  const t = e.points?.map(([o, a]) => ({ x: e.startX + o, y: e.startY + a })).filter((o) => Number.isFinite(o.x) && Number.isFinite(o.y));
  if (!t || t.length < 2)
    return e;
  const r = [...t], i = !!e.startArrowhead && Xd.has(e.startArrowhead), s = !!e.endArrowhead && Xd.has(e.endArrowhead);
  if (!i && !s)
    return e;
  if (i && (r[0] = Gd(r[0], r[1], Yd)), s) {
    const o = r.length - 1;
    r[o] = Gd(r[o], r[o - 1], Yd);
  }
  return qE(e, r), e;
}, zE = (e, t) => {
  const r = pt(e.getAttribute("stroke") || getComputedStyle(e).stroke || ""), i = parseFloat(e.getAttribute("stroke-width") || getComputedStyle(e).strokeWidth || "1");
  me(r) && r !== "none" && (t.strokeColor = r), Number.isFinite(i) && i > 0 && (t.strokeWidth = i);
}, HE = (e) => {
  const t = [];
  return e.forEach((r) => {
    I0(r).forEach((i) => {
      const s = t[t.length - 1];
      s && s.x === i.x && s.y === i.y || t.push(i);
    });
  }), O0(t);
}, D0 = (e, t, r) => {
  if (e.length < 2)
    throw new Error(`Class diagram edge ${t?.id || "<unknown>"} is missing usable path points`);
  const i = e[0], s = e[e.length - 1], o = Lh(i.x, i.y, s.x, s.y, {
    id: t?.getAttribute("data-id") || t?.id || void 0,
    ...r,
    points: e.map((a) => [
      a.x - i.x,
      a.y - i.y
    ])
  });
  return t && zE(t, o), WE(o);
}, R0 = (e, t) => D0(HE(e), e[0], t), YE = (e, t) => {
  const r = I0(e);
  return D0([r[0], r[r.length - 1]], e, t);
}, UE = (e, t) => R0([e], t), XE = (e, t) => [
  `${e}-cyclic-special-1`,
  `${e}-cyclic-special-mid`,
  `${e}-cyclic-special-2`
].map((i) => t.querySelector(`path[id="${i}"][data-edge="true"]`)).filter((i) => i !== null), GE = (e) => e.points?.map(([t, r]) => ({ x: e.startX + t, y: e.startY + r })).filter((t) => Number.isFinite(t.x) && Number.isFinite(t.y)) || [], jd = (e, t) => {
  const r = GE(e);
  if (r.length < 2)
    return null;
  const i = t === "start", s = i ? r[0] : r[r.length - 1], o = i ? r[1] : r[r.length - 2], a = o.x === s.x ? i ? -1 : 1 : Math.sign(o.x - s.x), n = o.y === s.y ? 1 : Math.sign(o.y - s.y);
  return {
    x: s.x + a * 20,
    y: s.y + (n >= 0 ? 12 : -28)
  };
}, jE = (e, t) => {
  let r = e;
  for (; r && r !== t; ) {
    if (r.classList.contains("annotation-group") || r.classList.contains("label-group"))
      return "header";
    if (r.classList.contains("members-group"))
      return "members";
    if (r.classList.contains("methods-group"))
      return "methods";
    r = r.parentElement;
  }
  return "other";
}, VE = (e, t, r) => {
  const i = [], s = [], o = [];
  return Object.values(e).forEach((a) => {
    const { domId: n, id: l } = a, c = fe(), h = PE(
      // @ts-ignore
      a.styles || a.cssStyles
    );
    let d;
    try {
      d = r ? r(l) : void 0;
    } catch {
      d = void 0;
    }
    const f = (B) => {
      const F = new RegExp(`^classId-${B}(?:-|$)`);
      return Array.from(t.querySelectorAll("[id]")).filter((Y) => F.test(Y.id))[0];
    }, u = d && t.querySelector(`#${d}`) || t.querySelector(`#${n}`) || t.querySelector(`[data-id='${l}']`) || f(l);
    if (!u)
      throw Error(`DOM Node with id ${n} not found`);
    const p = u.querySelector("rect") || u, m = p.getBBox(), { tx: y, ty: x } = fn(p, t), C = {
      type: "rectangle",
      id: l,
      groupId: c,
      x: m.x + y,
      y: m.y + x,
      width: m.width,
      height: m.height,
      metadata: { classId: l }
    }, k = p.getAttribute("fill"), T = p.getAttribute("stroke"), w = p.getAttribute("stroke-width"), _ = p.getAttribute("stroke-dasharray"), A = getComputedStyle(p), v = pt(k || h.fill || (k ? A.fill : "")), N = pt(T || h.stroke || (T ? A.stroke : "")), O = w || h["stroke-width"] || (w ? A.strokeWidth : ""), P = _ || h["stroke-dasharray"] || (_ ? A.strokeDasharray === "none" ? "" : A.strokeDasharray : ""), H = (B) => {
      if (!B || !me(B))
        return !1;
      const F = B.toLowerCase();
      return !(F === "none" || F === "transparent" || F === "rgba(0, 0, 0, 0)" || F === "black" || F === "#000" || F === "#000000" || F === "rgb(0, 0, 0)" || F === "rgba(0, 0, 0, 1)");
    };
    H(v) ? C.bgColor = v : C.bgColor = void 0, H(N) ? C.strokeColor = N : C.strokeColor = void 0, O ? C.strokeWidth = Number(O) : C.strokeWidth = void 0, P && P.trim().length > 0 ? C.strokeStyle = "dashed" : C.strokeStyle = void 0, i.push(C), [
      ...Array.from(u.querySelectorAll("line")),
      ...Array.from(u.querySelectorAll("g.divider path"))
    ].forEach((B) => {
      const { tx: F, ty: z } = fn(B, t);
      let Y, G, ht, rt;
      if (B.tagName.toLowerCase() === "line")
        Y = Number(B.getAttribute("x1")) + F, G = Number(B.getAttribute("y1")) + z, ht = Number(B.getAttribute("x2")) + F, rt = Number(B.getAttribute("y2")) + z;
      else {
        const ct = B.getBBox();
        Y = ct.x + F, ht = ct.x + ct.width + F;
        const it = ct.y + ct.height / 2 + z;
        G = it, rt = it;
      }
      if (Y === ht && G === rt)
        return;
      const lt = Fs(
        // @ts-ignore
        B,
        Y,
        G,
        ht,
        rt,
        {
          groupId: c,
          id: fe()
        }
      );
      C.strokeColor ? lt.strokeColor = C.strokeColor : lt.strokeColor = void 0, C.strokeWidth !== void 0 ? lt.strokeWidth = C.strokeWidth : lt.strokeWidth = void 0, C.strokeStyle ? lt.strokeStyle = C.strokeStyle : lt.strokeStyle = void 0, lt.metadata = { classId: l }, s.push(lt);
    });
    const R = Array.from(u.querySelectorAll("text, foreignObject")), M = [];
    R.forEach((B) => {
      const F = B.tagName.toLowerCase() === "foreignobject", z = F ? [] : Array.from(B.querySelectorAll("tspan")), Y = z.length ? z.map((ct) => ct.textContent?.trim()).filter(Boolean).join(`
`) : B.textContent?.trim() || "";
      if (!Y)
        return;
      const G = B.getBBox(), { ty: ht } = fn(B, t);
      let rt = parseFloat(getComputedStyle(B).fontSize || "");
      if (F && (!Number.isFinite(rt) || !rt)) {
        const ct = B.querySelector("div, span, p");
        ct && (rt = parseFloat(getComputedStyle(ct).fontSize || ""));
      }
      (!Number.isFinite(rt) || rt <= 0) && (rt = Math.max(12, G.height * 0.6)), rt = rt * 0.9;
      const lt = _h(B, h.color);
      M.push({
        section: jE(B, u),
        text: le(Y),
        x: G.x,
        y: G.y + ht,
        width: C && C.width ? Math.max(C.width - 8, G.width) : G.width,
        height: G.height,
        fontSize: rt,
        color: lt
      });
    });
    const E = M.filter((B) => B.section === "header").sort((B, F) => B.y - F.y || B.x - F.x);
    if (!C.label) {
      const B = E.length === 0 && M.length === 1 ? M : E;
      B.length > 0 && (C.label = {
        text: B.map((F) => F.text).join(`
`),
        fontSize: Math.max(...B.map((F) => F.fontSize)),
        color: B.find((F) => F.color)?.color,
        verticalAlign: "top"
      });
    }
    M.filter((B) => E.length > 0 ? B.section !== "header" : !(C.label && M.length === 1)).forEach((B) => {
      const F = oa((C?.x || 0) + 4, B.y, B.text, {
        width: B.width,
        height: B.height,
        fontSize: B.fontSize,
        color: B.color,
        id: fe(),
        groupId: c,
        metadata: { classId: l }
      });
      o.push(F);
    });
  }), { nodes: i, lines: s, text: o };
}, ZE = (e, t, r, i) => {
  const s = Array.from(r.querySelectorAll('.edgePaths path[data-edge="true"]:not([id^="edgeNote"]):not([id*="-cyclic-special-"])'));
  if (e.length === 0)
    return { arrows: [], text: [] };
  const o = [], a = [];
  let n = 0;
  return e.forEach((l) => {
    const { id1: c, id2: h, relation: d } = l, f = t.find((O) => O.id === c), u = t.find((O) => O.id === h);
    if (!f)
      throw new Error(`parseRelations: Cannot find node with id ${c}`);
    if (!u)
      throw new Error(`parseRelations: Cannot find node with id ${h}`);
    const p = NE(d.lineType), m = Ud(d.type1), y = Ud(d.type2);
    let x;
    if (c === h) {
      const O = XE(c, r);
      if (!O.length)
        throw new Error(`parseRelations: Cannot find rendered SVG edge for relation ${c} -> ${h}`);
      x = R0(O, {
        strokeStyle: p,
        startArrowhead: m,
        endArrowhead: y,
        label: l.title ? { text: l.title } : void 0,
        start: { type: "rectangle", id: f.id },
        end: { type: "rectangle", id: u.id }
      });
    } else {
      const O = s[n];
      if (!O)
        throw new Error(`parseRelations: Cannot find rendered SVG edge for relation ${c} -> ${h}`);
      n += 1, x = YE(O, {
        strokeStyle: p,
        startArrowhead: m,
        endArrowhead: y,
        label: l.title ? { text: l.title } : void 0,
        start: { type: "rectangle", id: f.id },
        end: { type: "rectangle", id: u.id }
      });
    }
    o.push(x);
    const { relationTitle1: C, relationTitle2: k } = l, T = c === h, w = 20, _ = 15, A = 15;
    let v, N;
    if (C && C !== "none") {
      if (T) {
        const P = jd(x, "start");
        P && (v = P.x, N = P.y);
      } else
        switch (i) {
          case "TB":
            v = x.startX - w, x.endX < x.startX && (v -= A), N = x.startY + _;
            break;
          case "BT":
            v = x.startX + w, x.endX > x.startX && (v += A), N = x.startY - _;
            break;
          case "LR":
            v = x.startX + w, N = x.startY + _, x.endY > x.startY && (N += A);
            break;
          case "RL":
            v = x.startX - w, N = x.startY - _, x.startY > x.endY && (N -= A);
            break;
          default:
            v = x.startX - w, N = x.startY + _;
        }
      v ??= x.startX - w, N ??= x.startY + _;
      const O = oa(v, N, C, {
        fontSize: 16
      });
      a.push(O);
    }
    if (k && k !== "none") {
      if (T) {
        const P = jd(x, "end");
        P && (v = P.x, N = P.y);
      } else
        switch (i) {
          case "TB":
            v = x.endX + w, x.endX < x.startX && (v += A), N = x.endY - _;
            break;
          case "BT":
            v = x.endX - w, x.endX > x.startX && (v -= A), N = x.endY + _;
            break;
          case "LR":
            v = x.endX - w, N = x.endY - _, x.endY > x.startY && (N -= A);
            break;
          case "RL":
            v = x.endX + w, N = x.endY + _, x.startY > x.endY && (N += A);
            break;
          default:
            v = x.endX + w, N = x.endY - _;
        }
      v ??= x.endX + w, N ??= x.endY + _;
      const O = oa(v, N, k, {
        fontSize: 16
      });
      a.push(O);
    }
  }), { arrows: o, text: a };
}, KE = (e, t, r) => {
  const i = [], s = [];
  return e.forEach((o, a) => {
    const { id: n, text: l, class: c } = o, h = t.querySelector(`#${n}`);
    if (!h)
      throw new Error(`Node with id ${n} not found!`);
    const { transformX: d, transformY: f } = Or(h), u = h.firstChild, p = Je(u, "rectangle", {
      id: n,
      subtype: "note",
      label: { text: l }
    });
    if (Object.assign(p, {
      x: p.x + d,
      y: p.y + f
    }), i.push(p), c) {
      const m = r.find((_) => _.id === c);
      if (!m)
        throw new Error(`class node with id ${c} not found!`);
      const y = t.querySelector(`path[id="edgeNote${a + 1}"][data-edge="true"]`);
      if (y) {
        s.push(UE(y, {
          strokeStyle: "dotted",
          startArrowhead: null,
          endArrowhead: null,
          start: { id: p.id, type: "rectangle" },
          end: { id: m.id, type: "rectangle" }
        }));
        return;
      }
      const x = p.x + (p.width || 0) / 2, C = p.y + (p.height || 0), k = x, T = m.y, w = Lh(x, C, k, T, {
        strokeStyle: "dotted",
        startArrowhead: null,
        endArrowhead: null,
        start: { id: p.id, type: "rectangle" },
        end: { id: m.id, type: "rectangle" }
      });
      s.push(w);
    }
  }), { notes: i, connectors: s };
}, QE = (e, t) => {
  const r = e.db, i = r.getDirection?.() || "TB", s = [], o = [], a = [], n = [], l = r.getNamespaces?.() || [], c = r.getClasses?.() || {}, h = c instanceof Map ? Object.fromEntries(c) : c;
  if (h && Object.keys(h).length) {
    const x = (
      //@ts-ignore
      typeof r.lookUpDomId == "function" ? (
        //@ts-ignore
        r.lookUpDomId.bind(r)
      ) : void 0
    ), C = VE(h, t, x);
    s.push(C.nodes), o.push(...C.lines), a.push(...C.text), n.push(...C.nodes);
  }
  const d = r.getRelations?.() || [], { arrows: f, text: u } = ZE(d, n, t, i), p = r.getNotes?.() || [], { notes: m, connectors: y } = KE(p, t, n);
  return s.push(m), f.push(...y), a.push(...u), { type: "class", nodes: s, lines: o, arrows: f, text: a, namespaces: l };
}, Vd = 18, JE = (e) => {
  const t = {};
  return e && e.forEach((r) => {
    ge(r).forEach(({ property: i, value: s }) => {
      i && s && (t[i] = pt(s));
    });
  }), t;
}, tF = (e) => {
  if (e == null || e === "")
    return;
  const t = typeof e == "number" ? e : parseFloat(pt(e));
  if (!(!Number.isFinite(t) || t <= 0))
    return t;
}, Ah = (e, t) => {
  let r = 0, i = 0, s = e;
  for (; s && s !== t; ) {
    const { transformX: o, transformY: a } = Or(s);
    r += o, i += a, s = s.parentElement;
  }
  return { tx: r, ty: i };
}, eF = (e) => {
  const t = Array.from(e.querySelectorAll("tspan")), r = t.length ? t.map((i) => i.textContent?.trim()).filter(Boolean).join(`
`) : e.textContent?.trim() || "";
  return le(r);
}, rF = (e) => {
  const t = e.querySelector("text, foreignObject, div, span, p") || e;
  let r = parseFloat(getComputedStyle(t).fontSize || "");
  return (!Number.isFinite(r) || r <= 0) && (r = Math.max(12, e.getBBox().height * 0.75)), r;
}, iF = (e, t, r) => {
  const i = eF(e);
  if (!i)
    return null;
  const s = e.getBBox(), { tx: o, ty: a } = Ah(e, t);
  return {
    className: e.getAttribute("class") || "",
    text: i,
    x: s.x + o,
    y: s.y + a,
    width: s.width,
    height: s.height,
    fontSize: rF(e),
    color: _h(e, r)
  };
}, sF = (e, t, r, i, s, o, a) => {
  const { tx: n, ty: l } = Ah(e, t);
  let c = 0, h = 0, d = 0, f = 0;
  if (e.tagName.toLowerCase() === "line")
    c = Number(e.getAttribute("x1")) + n, h = Number(e.getAttribute("y1")) + l, d = Number(e.getAttribute("x2")) + n, f = Number(e.getAttribute("y2")) + l;
  else {
    const p = Sl(e);
    if (!p)
      return null;
    c = p.startX + n, h = p.startY + l, d = p.endX + n, f = p.endY + l;
  }
  const u = {
    type: "line",
    id: fe(),
    groupId: r,
    startX: c,
    startY: h,
    endX: d,
    endY: f,
    metadata: { entityId: i }
  };
  return s && me(s) && s !== "none" && (u.strokeColor = s), o !== void 0 && (u.strokeWidth = o), a && (u.strokeStyle = a), u;
}, Zd = (e) => {
  switch (e?.toLowerCase()) {
    case "one":
      return "cardinality_one";
    case "many":
      return "cardinality_many";
    case "only_one":
      return "cardinality_exactly_one";
    case "one_or_more":
      return "cardinality_one_or_many";
    case "zero_or_one":
      return "cardinality_zero_or_one";
    case "zero_or_more":
      return "cardinality_zero_or_many";
    default:
      return null;
  }
}, oF = (e) => {
  switch (e) {
    case "dotted":
      return "dotted";
    case "dashed":
      return "dashed";
    default:
      return "solid";
  }
}, aF = (e, t) => {
  const r = t.querySelector(`path[id="${e.id}"][data-edge="true"]`);
  return r ? [r] : e.start !== e.end ? [] : [
    `${e.start}-cyclic-special-1`,
    `${e.start}-cyclic-special-mid`,
    `${e.start}-cyclic-special-2`
  ].map((s) => t.querySelector(`path[id="${s}"][data-edge="true"]`)).filter((s) => s !== null);
}, nF = (e) => {
  const t = [];
  return e.forEach((r) => {
    nu(r).forEach((i) => {
      const s = t[t.length - 1];
      s && s.x === i.x && s.y === i.y || t.push(i);
    });
  }), t;
}, lF = (e, t) => {
  const r = t.querySelector(`[id="${e.id}"]`);
  if (!r)
    throw new Error(`ER entity ${e.id} not found in rendered SVG`);
  const i = e.attributes.length ? fe() : void 0, s = r.getBBox(), { tx: o, ty: a } = Ah(r, t), n = JE([
    ...e.cssStyles || [],
    ...e.cssCompiledStyles || []
  ]), l = pt(n.fill || ""), c = pt(n.stroke || ""), h = tF(n["stroke-width"]), d = pt(n["stroke-dasharray"] || ""), f = Array.from(r.querySelectorAll("g.label")).map((k) => iF(k, t, n.color)).filter((k) => k !== null), u = f.find((k) => k.className.includes("name")) || f[0], p = f.filter((k) => k !== u), m = u?.text || le(e.alias || e.label || ""), y = {
    type: "rectangle",
    id: e.id,
    groupId: i,
    x: s.x + o,
    y: s.y + a,
    width: s.width,
    height: s.height,
    label: {
      text: m,
      fontSize: e.attributes.length ? Vd : u?.fontSize || 16,
      color: u?.color,
      textAlign: "center",
      verticalAlign: e.attributes.length ? "top" : "middle"
    },
    metadata: {
      entityId: e.id,
      entityLabel: e.label,
      entityAlias: e.alias
    }
  };
  me(l) && l !== "none" && (y.bgColor = l), me(c) && c !== "none" && (y.strokeColor = c), h && Number.isFinite(h) && h > 0 && (y.strokeWidth = h), d && d !== "none" && (y.strokeStyle = "dashed");
  const x = Array.from(r.querySelectorAll(".divider path, path.divider, line.divider")).map((k) => sF(k, t, i, e.id, y.strokeColor, y.strokeWidth, y.strokeStyle)).filter((k) => k !== null), C = p.map((k) => oa(k.x, k.y, k.text, {
    id: fe(),
    groupId: i,
    width: k.width,
    height: k.height,
    fontSize: Vd,
    color: k.color,
    metadata: { entityId: e.id }
  }));
  return { container: y, lines: x, text: C };
}, hF = (e, t) => {
  const r = aF(e, t);
  if (!r.length)
    throw new Error(`ER relationship ${e.id} not found in rendered SVG`);
  const i = nF(r);
  if (i.length < 2)
    throw new Error(`ER relationship ${e.id} is missing usable path points`);
  const s = i[0], o = i[i.length - 1], a = r[0], n = pt(a.getAttribute("stroke") || getComputedStyle(a).stroke || ""), l = Number(a.getAttribute("stroke-width") || getComputedStyle(a).strokeWidth || 1), c = Lh(s.x, s.y, o.x, o.y, {
    id: e.id,
    label: e.label ? {
      text: le(e.label),
      fontSize: 16,
      textAlign: "center"
    } : void 0,
    strokeStyle: oF(e.pattern),
    startArrowhead: Zd(e.arrowTypeStart),
    endArrowhead: Zd(e.arrowTypeEnd),
    start: { type: "rectangle", id: e.start },
    end: { type: "rectangle", id: e.end },
    points: i.map((h) => [
      h.x - s.x,
      h.y - s.y
    ])
  });
  return me(n) && n !== "none" && (c.strokeColor = n), Number.isFinite(l) && l > 0 && (c.strokeWidth = l), c;
}, cF = (e, t) => {
  const r = e.getData(), i = r.nodes, s = r.edges, o = [], a = [], n = [];
  i.forEach((c) => {
    const h = lF(c, t);
    o.push(h.container), a.push(...h.lines), n.push(...h.text);
  });
  const l = s.map((c) => hF(c, t));
  return {
    type: "erd",
    nodes: [o],
    lines: a,
    arrows: l,
    text: n
  };
}, Yr = (e) => {
  const t = pt(e || "");
  return !t || t === "none" || t === "transparent" || t === "rgba(0, 0, 0, 0)" || t === "rgba(0,0,0,0)" ? !1 : me(t);
}, P0 = (e, t, r) => {
  switch (t) {
    case Ct.FILL:
    case Ct.STROKE:
      Yr(r) && (e[t] = pt(r));
      break;
    case Ct.STROKE_WIDTH:
    case Ct.STROKE_DASHARRAY:
      pt(r) && (e[t] = pt(r));
      break;
  }
}, N0 = (e, t, r) => {
  t === te.COLOR && Yr(r) && (e[te.COLOR] = pt(r));
}, dF = (e, t, r) => {
  e && ge(e).forEach(({ property: i, value: s }) => {
    P0(t, i, s), N0(r, i, s);
  });
}, uF = (e, t) => {
  e && ge(e).forEach(({ property: r, value: i }) => {
    if (r === Ct.FILL && Yr(i)) {
      t[te.COLOR] = pt(i);
      return;
    }
    N0(t, r, i);
  });
}, fF = (e) => {
  const t = /* @__PURE__ */ new Set();
  return e.filter(Boolean).forEach((r) => {
    ge(r || "").forEach(({ property: i }) => {
      t.add(i);
    });
  }), t;
}, pF = (e, t, r) => {
  if (!e)
    return;
  [
    [Ct.FILL, e.getAttribute("fill")],
    [Ct.STROKE, e.getAttribute("stroke")],
    [
      Ct.STROKE_WIDTH,
      e.getAttribute("stroke-width")
    ],
    [
      Ct.STROKE_DASHARRAY,
      e.getAttribute("stroke-dasharray")
    ]
  ].forEach(([s, o]) => {
    if (!r.has(s) || t[s])
      return;
    const a = pt(o || "");
    a && P0(t, s, a);
  });
}, gF = (e, t, r) => {
  if (!e)
    return;
  const i = [
    e,
    ...Array.from(e.querySelectorAll("text, foreignObject, div, span, p"))
  ];
  for (const s of i) {
    if (t[te.COLOR] || (r.has(te.COLOR) || r.has(Ct.FILL)) && (uF(s.getAttribute("style"), t), t[te.COLOR]))
      break;
    const o = pt(s.getAttribute("fill") || s.getAttribute("color") || "");
    (r.has(te.COLOR) || r.has(Ct.FILL)) && Yr(o) && (t[te.COLOR] = o);
  }
}, Eh = (e, t) => {
  let r = 0, i = 0, s = e;
  for (; s && s !== t; ) {
    const { transformX: o, transformY: a } = Or(s);
    r += o, i += a, s = s.parentElement;
  }
  return { tx: r, ty: i };
}, mF = (e, t) => {
  const r = e.getBBox(), { tx: i, ty: s } = Eh(e, t);
  return {
    x: r.x + i,
    y: r.y + s,
    width: r.width,
    height: r.height
  };
}, yF = (e, t) => {
  const r = e.querySelector("line.divider");
  if (!r)
    return;
  const { tx: i, ty: s } = Eh(r, t);
  return {
    startX: Number(r.getAttribute("x1")) + i,
    startY: Number(r.getAttribute("y1")) + s,
    endX: Number(r.getAttribute("x2")) + i,
    endY: Number(r.getAttribute("y2")) + s
  };
}, xF = (e) => {
  const t = e.getBBox();
  return Math.abs(t.width * t.height);
}, Kd = (e, t) => {
  const r = e.getAttribute("style");
  if (!r)
    return;
  const i = ge(r).find((s) => s.property === t);
  if (i)
    return pt(i.value);
}, xl = (e, t) => {
  const r = e.map((s) => ({ element: s, area: xF(s) })).filter(({ area: s }) => Number.isFinite(s) && s > 0);
  return r.length === 0 ? null : r.sort((s, o) => t === "largest" ? o.area - s.area : s.area - o.area)[0].element;
}, CF = (e, t) => {
  if (!e || !t.has(Ct.FILL) && !t.has(Ct.STROKE))
    return;
  const r = pt(e.getAttribute("fill") || Kd(e, Ct.FILL) || ""), i = pt(e.getAttribute("stroke") || Kd(e, Ct.STROKE) || "");
  if (Yr(r))
    return r;
  if (Yr(i))
    return i;
}, bF = (e, t) => {
  const r = Array.from(e.querySelectorAll("circle, ellipse, path")), i = xl(r, "smallest");
  return CF(i, t);
}, kF = (e) => {
  if (e.length < 2)
    return e;
  const t = e.slice(1), r = t.filter((i) => i.trim().length > 0).reduce((i, s) => {
    const o = s.match(/^\s*/)?.[0].length ?? 0;
    return Math.min(i, o);
  }, Number.POSITIVE_INFINITY);
  return !Number.isFinite(r) || r <= 0 ? e.map((i) => i.trimEnd()) : [
    e[0].trimEnd(),
    ...t.map((i) => i.replace(new RegExp(`^\\s{0,${r}}`), "").trimEnd())
  ];
}, SF = (e) => {
  const t = Array.isArray(e.label) ? e.label.map((i) => le(i)) : le(e.label || "").split(`
`);
  return kF(t).join(`
`);
}, wF = (e) => e.description ? (Array.isArray(e.description) ? e.description : [e.description]).map((r) => le(r)).filter((r) => r.length > 0) : [], TF = (e) => {
  const t = /* @__PURE__ */ new Set(), r = (s) => (s && t.add(s), s), i = (s) => {
    const o = s.find((a) => !t.has(a));
    return r(o || null);
  };
  return (s) => {
    const o = [
      `[id='${s.domId}']`,
      `[id='${s.id}']`,
      `[data-id='${s.id}']`
    ];
    for (const a of o) {
      const n = e.querySelector(a);
      if (n)
        return r(n);
    }
    switch (s.shape) {
      case "divider":
        return i(Array.from(e.querySelectorAll("g.statediagram-cluster-alt")));
      case "stateStart":
        return i(Array.from(e.querySelectorAll("g.node.default")).filter((a) => a.querySelector("circle.state-start")));
      case "stateEnd":
        return i(Array.from(e.querySelectorAll("g.node.default")).filter((a) => !a.querySelector("circle.state-start")));
      default:
        return null;
    }
  };
}, _F = (e, t) => {
  switch (t) {
    case "roundedWithTitle":
      return e.querySelector("rect.outer") || e.querySelector("rect") || e;
    case "divider":
      return e.querySelector("rect.divider") || e.querySelector("rect") || e;
    case "rectWithTitle":
      return e.querySelector("rect.outer") || e.querySelector("rect") || e;
    case "stateStart":
      return xl(Array.from(e.querySelectorAll("circle, ellipse, path")), "largest") || e;
    case "stateEnd":
      return xl(Array.from(e.querySelectorAll("circle, ellipse, path")), "largest") || e;
    default:
      return e.querySelector("rect, path, circle, ellipse, polygon") || e;
  }
}, vF = (e, t, r) => {
  const i = r(e);
  if (!i)
    throw new Error(`State node element not found for "${e.id}"`);
  const s = _F(i, e.shape), o = {}, a = {}, n = [
    e.labelStyle,
    ...e.cssCompiledStyles || [],
    ...e.cssStyles || []
  ], l = fF(n);
  n.filter(Boolean).forEach((h) => {
    dF(h, o, a);
  }), pF(s, o, l), gF(i, a, l);
  const c = mF(s, t);
  return {
    id: e.id,
    shape: e.shape,
    text: SF(e),
    description: wF(e),
    x: c.x,
    y: c.y,
    width: c.width,
    height: c.height,
    parentId: e.parentId,
    position: e.position,
    containerStyle: o,
    labelStyle: a,
    dividerLine: e.shape === "rectWithTitle" ? yF(i, t) : void 0,
    endInnerColor: e.shape === "stateEnd" ? bF(i, l) : void 0,
    isRenderable: e.shape !== "noteGroup"
  };
}, BF = (e, t) => {
  const r = t.querySelector(`[id='${e.id}']`);
  if (!r)
    return null;
  const { tx: i, ty: s } = Eh(r, t), o = lu(r, { x: i, y: s }, "MCL");
  if (o.reflectionPoints.length < 2)
    return null;
  const a = {}, n = (c, h) => {
    switch (c) {
      case Ct.STROKE:
        Yr(h) && (a.strokeColor = pt(h));
        break;
      case Ct.STROKE_WIDTH: {
        const d = parseFloat(pt(h));
        Number.isFinite(d) && d > 0 && (a.strokeWidth = d);
        break;
      }
      case Ct.STROKE_DASHARRAY:
        pt(h) && (a.strokeStyle = "dashed");
        break;
    }
  };
  [e.style].filter(Boolean).forEach((c) => {
    ge(c || "").forEach(({ property: h, value: d }) => {
      n(h, d);
    });
  });
  const l = e.arrowhead === "none" || e.classes?.includes("note-edge");
  return {
    id: e.id,
    start: e.start,
    end: e.end,
    text: le(e.label || ""),
    ...o,
    strokeColor: a.strokeColor,
    strokeWidth: a.strokeWidth,
    strokeStyle: l ? "dashed" : a.strokeStyle,
    isNoteEdge: l
  };
}, LF = (e, t) => {
  const { nodes: r, edges: i } = e.getData(), s = TF(t);
  return {
    type: "state",
    nodes: r.map((o) => vF(o, t, s)),
    edges: i.map((o) => BF(o, t)).filter((o) => o !== null)
  };
};
let Qd = Promise.resolve();
const AF = (e) => {
  const t = Qd.then(e, e);
  return Qd = t.then(() => {
  }, () => {
  }), t;
};
let Jd = null, EF = 0;
const FF = (e) => JSON.stringify(e), tu = (e) => {
  const t = e.querySelector("svg");
  if (!t)
    throw new Error("SVG element not found");
  const r = t.getBoundingClientRect(), i = r.width, s = r.height;
  t.setAttribute("width", `${i}`), t.setAttribute("height", `${s}`);
  const o = "image/svg+xml", a = unescape(encodeURIComponent(t.outerHTML)), l = `data:image/svg+xml;base64,${btoa(a)}`;
  return {
    type: "graphImage",
    mimeType: o,
    dataURL: l,
    width: i,
    height: s
  };
}, MF = async (e, t = Vs) => AF(async () => {
  const r = t.themeVariables?.fontSize ?? Vs.themeVariables.fontSize, i = {
    ...Vs,
    ...t,
    fontSize: r,
    themeVariables: {
      ...Vs.themeVariables,
      ...t.themeVariables,
      fontSize: r
    }
  }, s = FF(i);
  s !== Jd && (dn.initialize(i), Jd = s);
  const o = await dn.mermaidAPI.getDiagramFromText(qx(e)), a = `mermaid-to-excalidraw-${EF++}`, n = document.createElement("div");
  n.setAttribute("style", "opacity: 0; position: fixed; z-index: -1; left: -99999px; top: -99999px;");
  const l = `${a}-container`;
  n.id = l, document.getElementById(l)?.remove(), document.body.appendChild(n);
  try {
    const { svg: c } = await dn.render(a, e, n);
    n.innerHTML = c;
    let h;
    try {
      switch (o.type) {
        case "flowchart-v2":
        case "graph": {
          h = BE(o.db, n);
          break;
        }
        case "sequence": {
          h = RE(o, n);
          break;
        }
        case "class":
        case "classDiagram": {
          h = QE(o, n);
          break;
        }
        case "er": {
          h = cF(o.db, n);
          break;
        }
        case "state":
        case "stateDiagram": {
          h = LF(o.db, n);
          break;
        }
        default:
          h = tu(n);
      }
    } catch (d) {
      console.error("Error processing Mermaid diagram:", d), h = tu(n);
    }
    return h;
  } finally {
    n.remove();
  }
}), $F = async (e, t) => {
  const r = t || {}, i = parseInt(r.themeVariables?.fontSize ?? "") || Ms, s = await MF(e, {
    ...r,
    themeVariables: {
      ...r.themeVariables
    }
  });
  return Yx(s, {
    fontSize: i
  });
}, hM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseMermaidToExcalidraw: $F
}, Symbol.toStringTag, { value: "Module" }));
export {
  jF as $,
  Eb as A,
  PF as B,
  fr as C,
  Pe as D,
  Vx as E,
  Lt as F,
  Pb as G,
  oh as H,
  bu as I,
  ww as J,
  fT as K,
  yS as L,
  sS as M,
  Pc as N,
  Rc as O,
  GF as P,
  zF as Q,
  UF as R,
  YF as S,
  qF as T,
  nt as U,
  Rl as V,
  XF as W,
  WF as X,
  Jr as Y,
  VF as Z,
  g as _,
  Mb as a,
  Mv as a$,
  HF as a0,
  HC as a1,
  Cs as a2,
  DF as a3,
  ga as a4,
  sT as a5,
  xb as a6,
  Eu as a7,
  xc as a8,
  lS as a9,
  $w as aA,
  Uw as aB,
  Yw as aC,
  Hw as aD,
  Gw as aE,
  Xw as aF,
  Mw as aG,
  fg as aH,
  Pw as aI,
  Dw as aJ,
  Iw as aK,
  pg as aL,
  _w as aM,
  ie as aN,
  er as aO,
  Vi as aP,
  ah as aQ,
  kg as aR,
  Wr as aS,
  _g as aT,
  du as aU,
  iB as aV,
  sM as aW,
  aM as aX,
  rM as aY,
  Q as aZ,
  iM as a_,
  On as aa,
  uT as ab,
  Be as ac,
  I as ad,
  D as ae,
  vb as af,
  Mu as ag,
  ev as ah,
  By as ai,
  oM as aj,
  ih as ak,
  V as al,
  E_ as am,
  Ql as an,
  Zl as ao,
  Co as ap,
  zw as aq,
  Ww as ar,
  qw as as,
  Nw as at,
  Fw as au,
  dg as av,
  Ow as aw,
  Ew as ax,
  Rw as ay,
  ug as az,
  Fb as b,
  Bv as b0,
  vv as b1,
  oS as b2,
  IF as b3,
  qs as b4,
  L_ as b5,
  B_ as b6,
  $l as b7,
  lr as b8,
  Ss as b9,
  Fc as ba,
  P1 as bb,
  K as bc,
  vg as bd,
  ne as be,
  F1 as bf,
  Ml as bg,
  Xu as bh,
  Ds as bi,
  Vu as bj,
  NF as bk,
  jx as bl,
  hM as bm,
  bt as c,
  ut as d,
  Fu as e,
  Rt as f,
  Ob as g,
  Ke as h,
  ve as i,
  Lw as j,
  Os as k,
  q as l,
  wg as m,
  $s as n,
  RF as o,
  lM as p,
  Ib as q,
  nM as r,
  $b as s,
  Db as t,
  we as u,
  Tw as v,
  mT as w,
  kv as x,
  ZF as y,
  Bi as z
};
//# sourceMappingURL=index.js.map
