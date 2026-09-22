/* @ds-bundle: {"format":4,"namespace":"BlaiseDesignSystem_021630","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"ClosingSlide","sourcePath":"slides/ClosingSlide.jsx"},{"name":"ProblemSolutionSlide","sourcePath":"slides/ProblemSolutionSlide.jsx"},{"name":"SlideFrame","sourcePath":"slides/SlideFrame.jsx"},{"name":"TitleSlide","sourcePath":"slides/TitleSlide.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"30e9805b1a5e","components/actions/IconButton.jsx":"dce20afcdcc3","components/brand/Icon.jsx":"57c20df10db0","components/brand/Logo.jsx":"05aed5665051","components/data-display/Badge.jsx":"1baef9e474b5","components/data-display/Tag.jsx":"5bbd8e4dd197","components/feedback/Toast.jsx":"ef5e01689b5a","components/feedback/Tooltip.jsx":"4b5c401a968e","components/forms/Checkbox.jsx":"a1bdbcd95689","components/forms/Field.jsx":"3bdc79d079d2","components/forms/Input.jsx":"158cf2df03c4","components/forms/Radio.jsx":"273034e8280b","components/forms/Select.jsx":"cfc6dab57650","components/forms/Switch.jsx":"1444a8a3abd8","components/navigation/Tabs.jsx":"51f0d9162329","components/surfaces/Card.jsx":"b5bcd5849598","components/surfaces/Dialog.jsx":"3c8c473affda","slides/ClosingSlide.jsx":"e9025dee470a","slides/ProblemSolutionSlide.jsx":"184e98f3055e","slides/SlideFrame.jsx":"d9a3352fa8d0","slides/TitleSlide.jsx":"f5507fb46e7e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BlaiseDesignSystem_021630 = window.BlaiseDesignSystem_021630 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: 32,
    px: 12,
    fs: 13.5,
    gap: 6,
    r: 'var(--radius-sm)'
  },
  md: {
    h: 40,
    px: 18,
    fs: 15,
    gap: 8,
    r: 'var(--radius-md)'
  },
  lg: {
    h: 48,
    px: 24,
    fs: 16.5,
    gap: 10,
    r: 'var(--radius-md)'
  }
};
function skin(variant, hovered, active, disabled) {
  if (disabled) return {
    background: 'var(--navy-100)',
    color: 'var(--text-faint)',
    border: '1px solid var(--line-default)',
    boxShadow: 'none'
  };
  switch (variant) {
    case 'secondary':
      return {
        background: hovered ? 'var(--action-secondary-hover)' : 'var(--action-secondary-bg)',
        color: 'var(--text-strong)',
        border: '1px solid ' + (hovered ? 'var(--line-strong)' : 'var(--line-default)'),
        boxShadow: active ? 'none' : 'var(--shadow-xs)'
      };
    case 'ghost':
      return {
        background: hovered ? 'var(--surface-sunken)' : 'transparent',
        color: 'var(--text-strong)',
        border: '1px solid transparent',
        boxShadow: 'none'
      };
    case 'gradient':
      return {
        background: 'var(--brand-gradient)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'border-box',
        color: 'var(--text-on-brand)',
        border: '1px solid transparent',
        boxShadow: active ? 'none' : 'var(--shadow-brand)'
      };
    case 'danger':
      return {
        background: active ? '#b8323c' : hovered ? '#c93944' : 'var(--status-error)',
        color: '#fff',
        border: '1px solid transparent',
        boxShadow: 'none'
      };
    case 'inverse':
      return {
        background: hovered ? 'rgba(255,255,255,.16)' : 'rgba(255,255,255,.08)',
        color: 'var(--text-on-inverse)',
        border: '1px solid rgba(255,255,255,.28)',
        boxShadow: 'none'
      };
    default:
      return {
        background: active ? 'var(--action-primary-active)' : hovered ? 'var(--action-primary-hover)' : 'var(--action-primary)',
        color: 'var(--text-on-brand)',
        border: '1px solid transparent',
        boxShadow: 'none'
      };
  }
}
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  type = 'button',
  onClick,
  style,
  children,
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      borderRadius: s.r,
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: s.fs,
      letterSpacing: '-0.005em',
      lineHeight: 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      transform: active && !disabled ? 'translateY(1px)' : 'none',
      transition: 'var(--transition-control),transform var(--dur-instant) var(--ease-standard)',
      outline: 'none',
      ...skin(variant, hovered, active, disabled),
      ...(focus && !disabled ? {
        boxShadow: 'var(--shadow-focus)'
      } : {}),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOX = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const d = BOX[size] || BOX.md;
  return /*#__PURE__*/React.createElement(__ds_scope.Button, _extends({
    variant: variant,
    size: size,
    disabled: disabled,
    onClick: onClick,
    "aria-label": label,
    title: label,
    style: {
      width: d,
      padding: 0,
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';

/* Lucide (CC-BY-4.0 / ISC) rendered as a CSS mask so the glyph inherits currentColor.
   No brand icon set was supplied; Lucide's 2px-stroke rounded geometry is the closest match. */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  title,
  style,
  ...rest
}) {
  const url = CDN + name + '.svg';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": title || name,
    title: title,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: 'none',
      background: color,
      WebkitMaskImage: 'url(' + url + ')',
      maskImage: 'url(' + url + ')',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Vector brand assets supplied by the client (SVG).
   lockup/mark render the real artwork; tone="light" swaps the lockup's navy wordmark for white.
   variant="wordmark" is the type-only fallback (Manrope 800) for constrained or text-only contexts. */
function Logo({
  variant = 'lockup',
  height = 32,
  basePath = '',
  tone = 'dark',
  style,
  ...rest
}) {
  if (variant === 'wordmark') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: height * 0.78,
        letterSpacing: '-0.03em',
        color: tone === 'light' ? 'var(--text-on-inverse)' : 'var(--text-strong)',
        lineHeight: 1,
        ...style
      }
    }, rest), "Blaise");
  }
  const file = variant === 'mark' ? 'blaise-mark.svg' : tone === 'light' ? 'blaise-logo-white.svg' : 'blaise-logo.svg';
  return /*#__PURE__*/React.createElement("img", _extends({
    src: basePath + 'assets/' + file,
    alt: "Blaise Technology",
    style: {
      height,
      width: 'auto',
      display: 'block',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: 'var(--navy-100)',
    fg: 'var(--text-muted)',
    bd: 'var(--line-default)'
  },
  info: {
    bg: 'var(--status-info-soft)',
    fg: 'var(--sky-500)',
    bd: 'var(--sky-200)'
  },
  success: {
    bg: 'var(--status-success-soft)',
    fg: 'var(--status-success)',
    bd: '#b6e3d0'
  },
  warning: {
    bg: 'var(--status-warning-soft)',
    fg: '#9a6c07',
    bd: '#f0d79a'
  },
  error: {
    bg: 'var(--status-error-soft)',
    fg: 'var(--status-error)',
    bd: '#f2b9bd'
  },
  brand: {
    bg: 'var(--surface-accent-soft)',
    fg: 'var(--action-primary-hover)',
    bd: 'var(--blue-200)'
  },
  teal: {
    bg: 'var(--surface-teal-soft)',
    fg: 'var(--teal-600)',
    bd: 'var(--teal-200)'
  }
};
function Badge({
  tone = 'neutral',
  dot = false,
  solid = false,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 9px',
      borderRadius: 'var(--radius-pill)',
      background: solid ? t.fg : t.bg,
      color: solid ? '#fff' : t.fg,
      border: '1px solid ' + (solid ? 'transparent' : t.bd),
      font: '600 12px/1 var(--font-display)',
      letterSpacing: '-0.002em',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 'var(--radius-pill)',
      background: solid ? '#fff' : t.fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 28,
      padding: onRemove ? '0 6px 0 11px' : '0 11px',
      borderRadius: 'var(--radius-sm)',
      background: hover ? 'var(--navy-100)' : 'var(--surface-sunken)',
      border: '1px solid var(--line-default)',
      color: 'var(--text-strong)',
      font: '500 13px/1 var(--font-body)',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Quitar",
    style: {
      width: 18,
      height: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-faint)',
      borderRadius: 'var(--radius-xs)',
      fontSize: 14,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  success: {
    icon: 'check-circle-2',
    fg: 'var(--status-success)'
  },
  error: {
    icon: 'alert-circle',
    fg: 'var(--status-error)'
  },
  warning: {
    icon: 'alert-triangle',
    fg: 'var(--status-warning)'
  },
  info: {
    icon: 'info',
    fg: 'var(--sky-400)'
  }
};
function Toast({
  tone = 'info',
  title,
  description,
  action,
  onClose,
  style
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      width: 360,
      maxWidth: '100%',
      padding: '14px 16px',
      background: 'var(--surface-panel)',
      border: '1px solid var(--line-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20,
    color: t.fg,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      border: 'none',
      background: 'transparent',
      color: 'var(--text-faint)',
      cursor: 'pointer',
      fontSize: 16,
      lineHeight: 1,
      padding: 2
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  placement = 'top',
  children,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    bottom: {
      top: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    left: {
      right: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    right: {
      left: 'calc(100% + 8px)',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      padding: '6px 10px',
      background: 'var(--navy-800)',
      color: 'var(--text-on-inverse)',
      borderRadius: 'var(--radius-sm)',
      font: '500 12.5px/1.4 var(--font-body)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      opacity: open ? 1 : 0,
      visibility: open ? 'visible' : 'hidden',
      transition: 'opacity var(--dur-fast) var(--ease-standard)',
      pointerEvents: 'none',
      zIndex: 40
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  indeterminate = false,
  disabled = false,
  label,
  description,
  onChange,
  style
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      marginTop: description ? 2 : 0,
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + (on ? 'var(--action-primary)' : 'var(--line-strong)'),
      background: on ? 'var(--action-primary)' : 'var(--surface-panel)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'var(--transition-control)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 2,
      background: '#fff',
      borderRadius: 1
    }
  }) : checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 6,
      borderLeft: '2px solid #fff',
      borderBottom: '2px solid #fff',
      transform: 'rotate(-45deg) translate(1px,-1px)'
    }
  }) : null), (label || description) && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 13.5,
      color: 'var(--text-strong)',
      marginBottom: 6
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-error)',
      marginLeft: 3
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12.5,
      lineHeight: 1.45,
      marginTop: 6,
      color: error ? 'var(--status-error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  size = 'md',
  invalid = false,
  disabled = false,
  iconLeft,
  suffix,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 34 : size === 'lg' ? 46 : 40;
  const border = invalid ? 'var(--status-error)' : focus ? 'var(--action-primary)' : 'var(--line-default)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 12px',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-panel)',
      border: '1px solid ' + border,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: '400 ' + (size === 'sm' ? 14 : 15) + 'px/1.4 var(--font-body)',
      color: 'var(--text-strong)'
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 13
    }
  }, suffix));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  options = [],
  value,
  onChange,
  disabled = false,
  direction = 'column',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      gap: direction === 'row' ? 18 : 10,
      ...style
    }
  }, options.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("label", {
      key: o.value,
      onClick: () => !disabled && onChange && onChange(o.value),
      style: {
        display: 'flex',
        gap: 10,
        alignItems: o.description ? 'flex-start' : 'center',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? .55 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        flex: 'none',
        marginTop: o.description ? 2 : 0,
        borderRadius: 'var(--radius-pill)',
        border: '1px solid ' + (on ? 'var(--action-primary)' : 'var(--line-strong)'),
        background: 'var(--surface-panel)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'var(--transition-control)'
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--action-primary)'
      }
    })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        color: 'var(--text-strong)'
      }
    }, o.label), o.description && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, o.description)));
  }));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  size = 'md',
  invalid = false,
  disabled = false,
  options = [],
  placeholder,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 34 : size === 'lg' ? 46 : 40;
  const border = invalid ? 'var(--status-error)' : focus ? 'var(--action-primary)' : 'var(--line-default)';
  const arrow = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1.5 6 6.5 11 1.5' fill='none' stroke='%235b6a8c' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'/></svg>\")";
  return /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      width: '100%',
      height: h,
      padding: '0 34px 0 12px',
      background: (disabled ? 'var(--surface-sunken)' : 'var(--surface-panel)') + ' ' + arrow + ' no-repeat right 12px center',
      border: '1px solid ' + border,
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      font: '400 ' + (size === 'sm' ? 14 : 15) + 'px/1.4 var(--font-body)',
      color: 'var(--text-strong)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  disabled = false,
  label,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 40,
      height: 23,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--action-primary)' : 'var(--navy-300)',
      position: 'relative',
      transition: 'background-color var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2.5,
      left: checked ? 19.5 : 2.5,
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-pill)',
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style
}) {
  const active = value ?? (items[0] && items[0].value);
  if (variant === 'pill') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        gap: 4,
        padding: 4,
        background: 'var(--surface-sunken)',
        borderRadius: 'var(--radius-md)',
        ...style
      }
    }, items.map(t => {
      const on = t.value === active;
      return /*#__PURE__*/React.createElement("button", {
        key: t.value,
        onClick: () => onChange && onChange(t.value),
        style: {
          height: 32,
          padding: '0 14px',
          border: 'none',
          borderRadius: 'var(--radius-sm)',
          background: on ? 'var(--surface-panel)' : 'transparent',
          boxShadow: on ? 'var(--shadow-xs)' : 'none',
          font: '600 14px/1 var(--font-display)',
          color: on ? 'var(--text-strong)' : 'var(--text-muted)',
          cursor: 'pointer',
          transition: 'var(--transition-control)'
        }
      }, t.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 26,
      borderBottom: '1px solid var(--line-default)',
      ...style
    }
  }, items.map(t => {
    const on = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(t.value),
      style: {
        position: 'relative',
        padding: '0 0 12px',
        border: 'none',
        background: 'transparent',
        font: '600 15px/1 var(--font-display)',
        color: on ? 'var(--text-strong)' : 'var(--text-muted)',
        cursor: 'pointer',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 7,
        font: '600 12px/1 var(--font-display)',
        color: 'var(--text-faint)'
      }
    }, t.count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        borderRadius: 2,
        background: on ? 'var(--action-primary)' : 'transparent'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'default',
  interactive = false,
  padding = 24,
  accent,
  header,
  footer,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    background: 'var(--surface-panel)',
    border: '1px solid var(--line-default)',
    boxShadow: 'var(--shadow-sm)'
  };
  const skins = {
    default: base,
    flat: {
      background: 'var(--surface-panel)',
      border: '1px solid var(--line-default)',
      boxShadow: 'none'
    },
    raised: {
      ...base,
      boxShadow: 'var(--shadow-md)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      border: '1px solid var(--line-inverse)',
      boxShadow: 'none',
      color: 'var(--text-on-inverse)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      position: 'relative',
      transition: 'box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard)',
      ...(skins[variant] || base),
      ...(interactive && hover ? {
        boxShadow: 'var(--shadow-lg)',
        transform: 'translateY(-2px)',
        cursor: 'pointer'
      } : {}),
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInline: 0,
      top: 0,
      height: 3,
      background: 'var(--brand-gradient)'
    }
  }), header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: padding + 'px ' + padding + 'px 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-h4-size)',
      color: variant === 'inverse' ? 'var(--text-on-inverse)' : 'var(--text-strong)'
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px ' + padding + 'px',
      borderTop: '1px solid ' + (variant === 'inverse' ? 'var(--line-inverse)' : 'var(--line-subtle)'),
      background: variant === 'inverse' ? 'transparent' : 'var(--surface-page)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  description,
  width = 460,
  onClose,
  footer,
  children,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(13,21,38,.42)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      zIndex: 50
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-panel)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16,
      padding: '22px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h3-size)',
      lineHeight: 'var(--text-h3-lh)',
      letterSpacing: 'var(--text-h3-ls)',
      fontWeight: 700
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-muted)'
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "x",
      size: 18
    }),
    label: "Cerrar",
    size: "sm",
    onClick: onClose
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 24px 0'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '20px 24px 22px'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// slides/SlideFrame.jsx
try { (() => {
/* 1280×720 deck frame. tone="light" for content slides, "dark" for openers and dividers. */
function SlideFrame({
  tone = 'light',
  rail = true,
  railSize = 6,
  footer,
  pageNumber,
  basePath = '../',
  style,
  children
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 1280,
      height: 720,
      overflow: 'hidden',
      background: dark ? 'var(--surface-inverse)' : 'var(--surface-page)',
      fontFamily: 'var(--font-body)',
      color: dark ? 'var(--text-on-inverse)' : 'var(--text-body)',
      ...style
    }
  }, rail && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: railSize,
      background: 'var(--brand-gradient)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 44,
      left: 72
    }
  }, dark ? /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    height: 26,
    tone: "light",
    basePath: basePath
  }) : /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "lockup",
    height: 26,
    basePath: basePath
  })), children, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 72,
      right: 72,
      bottom: 38,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      font: '500 13px/1 var(--font-body)',
      color: dark ? 'var(--text-on-inverse-muted)' : 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", null, footer), /*#__PURE__*/React.createElement("span", null, pageNumber)));
}
Object.assign(__ds_scope, { SlideFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/SlideFrame.jsx", error: String((e && e.message) || e) }); }

// slides/ClosingSlide.jsx
try { (() => {
const LINKS = [{
  icon: 'bot',
  t: 'Dot',
  d: 'Agentes de atención al cliente',
  u: 'Próximamente'
}, {
  icon: 'file-text',
  t: 'canalfact',
  d: 'Facturación electrónica DGI',
  u: 'canalfact.blaisetechnology.com'
}, {
  icon: 'radar',
  t: 'Iris',
  d: 'Extracción de datos web',
  u: 'iris.blaisetechnology.com'
}, {
  icon: 'shopping-bag',
  t: 'Techub',
  d: 'Tienda de tecnología',
  u: 'techubpa.myshopify.com'
}];
function ClosingSlide({
  title = 'Hablemos de tu próximo proyecto',
  subtitle = 'Una llamada de 30 minutos basta para saber si podemos ayudarte. Sin compromiso.',
  email = 'hola@blaisetechnology.com',
  pageNumber = '12',
  footer = 'Blaise Technology LLC · República de Panamá',
  basePath = '../',
  tone = 'dark',
  railSize = 6,
  ctaStyle = 'gradient',
  scale = 1
}) {
  const dark = tone === 'dark';
  const heading = dark ? 'var(--text-on-inverse)' : 'var(--text-strong)';
  const muted = dark ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)';
  const cta = ctaStyle === 'outline' ? {
    background: 'transparent',
    border: '1.5px solid ' + (dark ? 'var(--brand-teal)' : 'var(--action-primary)'),
    color: dark ? 'var(--brand-teal)' : 'var(--action-primary)',
    boxShadow: 'none'
  } : ctaStyle === 'solid' ? {
    background: 'var(--action-primary)',
    border: '1.5px solid transparent',
    color: '#fff',
    boxShadow: 'none'
  } : {
    background: 'var(--brand-gradient)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'border-box',
    border: '1.5px solid transparent',
    color: '#fff',
    boxShadow: 'var(--shadow-brand)'
  };
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    tone: tone,
    railSize: railSize,
    footer: footer,
    pageNumber: pageNumber,
    basePath: basePath
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 72,
      top: 196,
      width: 540
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 52 * scale,
      lineHeight: 1.08,
      letterSpacing: '-.028em',
      color: heading,
      textWrap: 'balance'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontSize: 19 * Math.min(scale, 1.12),
      lineHeight: 1.6,
      color: muted
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      marginTop: 32,
      height: 52,
      padding: '0 26px',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1,
      ...cta
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 19,
    color: cta.color
  }), email)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 72,
      top: 196,
      width: 520,
      display: 'grid',
      gap: 12
    }
  }, LINKS.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.t,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: '16px 18px',
      borderRadius: 'var(--radius-lg)',
      background: dark ? 'var(--surface-inverse-raised)' : 'var(--surface-panel)',
      border: '1px solid ' + (dark ? 'var(--line-inverse)' : 'var(--line-default)'),
      boxShadow: dark ? 'none' : 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: l.icon,
    size: 22,
    color: dark ? 'var(--brand-teal)' : 'var(--sky-400)'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      lineHeight: 1.2,
      color: heading
    }
  }, l.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.4,
      color: muted
    }
  }, l.d)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.4,
      fontFamily: 'var(--font-mono)',
      color: muted
    }
  }, l.u)))));
}
Object.assign(__ds_scope, { ClosingSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/ClosingSlide.jsx", error: String((e && e.message) || e) }); }

// slides/ProblemSolutionSlide.jsx
try { (() => {
const P = [{
  icon: 'clock',
  t: 'Procesos manuales',
  d: 'Facturación, atención y captura de datos se hacen a mano, con errores y retrabajo.'
}, {
  icon: 'scale',
  t: 'Presión normativa',
  d: 'Desde enero 2026 la factura electrónica es obligatoria sobre 100 facturas al mes o B/.36,000 anuales.'
}, {
  icon: 'unplug',
  t: 'Sistemas aislados',
  d: 'La caja, el ERP y el proveedor autorizado no se hablan entre sí.'
}];
const S = [{
  icon: 'bot',
  t: 'Dot — agentes de atención',
  d: 'Agentes con IA que responden clientes 24/7 en tu tono y escalan cuando hace falta.'
}, {
  icon: 'file-text',
  t: 'canalfact — facturación',
  d: 'Un solo puente hacia los proveedores autorizados por DGI. Cambias de proveedor sin rehacer nada.'
}, {
  icon: 'radar',
  t: 'Iris — extracción de datos',
  d: 'Datos de logística y e-commerce extraídos de la web, listos para tus sistemas.'
}];
function ProblemSolutionSlide({
  eyebrow = 'Problema → solución',
  title = 'Lo que frena al negocio, y con qué lo resolvemos',
  pageNumber = '04',
  footer = 'Blaise Technology LLC · Panamá',
  basePath = '../',
  tone = 'light',
  railSize = 6,
  accentRail = true,
  scale = 1
}) {
  const dark = tone === 'dark';
  const heading = dark ? 'var(--text-on-inverse)' : 'var(--text-strong)';
  const muted = dark ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    tone: tone,
    railSize: railSize,
    footer: footer,
    pageNumber: pageNumber,
    basePath: basePath
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 72,
      top: 132,
      right: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px/1 var(--font-display)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: muted
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 40 * scale,
      lineHeight: 1.1,
      letterSpacing: '-.022em',
      color: heading
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 56px 1fr',
      gap: 0,
      alignItems: 'stretch',
      marginTop: 38
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'rgba(255,255,255,.045)' : 'var(--surface-sunken)',
      borderRadius: 'var(--radius-xl)',
      padding: '26px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 13px/1 var(--font-display)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: muted,
      marginBottom: 20
    }
  }, "Hoy"), P.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.t,
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: i.icon,
    size: 22,
    color: dark ? 'var(--navy-400)' : 'var(--navy-400)',
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17 * scale,
      lineHeight: 1.3,
      color: heading
    }
  }, i.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5 * scale,
      lineHeight: 1.5,
      color: muted,
      marginTop: 4
    }
  }, i.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'var(--brand-gradient)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 18,
    color: "#fff"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'var(--surface-inverse-raised)' : 'var(--surface-panel)',
      border: '1px solid ' + (dark ? 'var(--line-inverse)' : 'var(--line-default)'),
      borderRadius: 'var(--radius-xl)',
      boxShadow: dark ? 'none' : 'var(--shadow-md)',
      padding: '26px 28px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, accentRail && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInline: 0,
      top: 0,
      height: 3,
      background: 'var(--brand-gradient)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 13px/1 var(--font-display)',
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: dark ? 'var(--brand-teal)' : 'var(--action-primary-hover)',
      marginBottom: 20
    }
  }, "Con Blaise"), S.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.t,
    style: {
      display: 'flex',
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: i.icon,
    size: 22,
    color: dark ? 'var(--brand-teal)' : 'var(--sky-400)',
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17 * scale,
      lineHeight: 1.3,
      color: heading
    }
  }, i.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5 * scale,
      lineHeight: 1.5,
      color: muted,
      marginTop: 4
    }
  }, i.d))))))));
}
Object.assign(__ds_scope, { ProblemSolutionSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/ProblemSolutionSlide.jsx", error: String((e && e.message) || e) }); }

// slides/TitleSlide.jsx
try { (() => {
function TitleSlide({
  eyebrow = 'Blaise Technology LLC · Panamá',
  title = 'Tecnología que resuelve problemas reales de negocio',
  subtitle = 'IA aplicada, facturación electrónica, extracción de datos y nube AWS — construido e implementado en Panamá.',
  meta = 'Propuesta comercial · 2026',
  pageNumber = '01',
  basePath = '../',
  tone = 'dark',
  railSize = 6,
  glowOpacity = 0.16,
  scale = 1
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement(__ds_scope.SlideFrame, {
    tone: tone,
    railSize: railSize,
    footer: meta,
    pageNumber: pageNumber,
    basePath: basePath
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 72,
      top: 236,
      width: 900
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 12px/1 var(--font-display)',
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: dark ? 'var(--brand-teal)' : 'var(--action-primary-hover)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '22px 0 0',
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 62 * scale,
      lineHeight: 1.06,
      letterSpacing: '-.03em',
      color: dark ? 'var(--text-on-inverse)' : 'var(--text-strong)',
      textWrap: 'balance'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth: 720,
      fontSize: 20 * Math.min(scale, 1.12),
      lineHeight: 1.6,
      color: dark ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)'
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -140,
      top: -120,
      width: 560,
      height: 560,
      borderRadius: '50%',
      background: 'var(--brand-gradient-diag)',
      opacity: glowOpacity,
      filter: 'blur(4px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 72,
      bottom: 120,
      display: 'flex',
      gap: 10
    }
  }, ['Dot', 'canalfact', 'Iris', 'Techub'].map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + (dark ? 'var(--line-inverse)' : 'var(--line-default)'),
      background: dark ? 'rgba(255,255,255,.04)' : 'var(--surface-panel)',
      font: '600 13px/1 var(--font-display)',
      color: dark ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)'
    }
  }, p))));
}
Object.assign(__ds_scope, { TitleSlide });
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/TitleSlide.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.ClosingSlide = __ds_scope.ClosingSlide;

__ds_ns.ProblemSolutionSlide = __ds_scope.ProblemSolutionSlide;

__ds_ns.SlideFrame = __ds_scope.SlideFrame;

__ds_ns.TitleSlide = __ds_scope.TitleSlide;

})();
