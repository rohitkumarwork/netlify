import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>MyTownHome</title>
      {/* <link rel="stylesheet" href="/static/fonts.css"></link> */}
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet"></link>
      <meta name="viewport" key="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta name="theme-color" key="theme-color" content="#da7d16"></meta>
      <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_wn4R1r_XykLLXdxoJCfuRiBEXolCOhI&libraries=places"></script>

      <link rel="apple-touch-icon" sizes="180x180" href="static/favicon/apple-touch-icon.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="static/favicon/favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="static/favicon/favicon-16x16.png"></link>

      <meta name="msapplication-TileColor" content="#da7d16"></meta>
    </Head>
    <style jsx global>{`
      body {
        margin: 0px;
        font-family: 'Montserrat', 'SF Pro Icons', 'Helvetica Neue',
        'Helvetica', 'Arial', sans-serif;
      }
      button, input, textarea {
        font-family: 'Montserrat', 'SF Pro Icons', 'Helvetica Neue',
        'Helvetica', 'Arial', sans-serif;
      }
      h1, h2, h3, h4, p {
        margin: 0px;
      }
      h1,h2,h3 {
        color: #363636;
      }
      p {
        color: #4A4A4A;
      }

      ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.2);
        background-color: #f9f9f9;
      }

      ::-webkit-scrollbar {
        width: 7px;
        background-color: black;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #f89e37d1;
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: #F89E37;
        border-radius: 10px;
      }
      .noUi-target,
.noUi-target * {
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -ms-touch-action: none;
  touch-action: none;
  -ms-user-select: none;
  -moz-user-select: none;
  user-select: none;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.noUi-target {
  position: relative;
}
.noUi-base,
.noUi-connects {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
}
/* Wrapper for all connect elements.
 */
.noUi-connects {
  overflow: hidden;
  z-index: 0;
}
.noUi-connect,
.noUi-origin {
  will-change: transform;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -webkit-transform-style: preserve-3d;
  transform-origin: 0 0;
  transform-style: flat;
}
.noUi-connect {
  height: 100%;
  width: 100%;
}
.noUi-origin {
  height: 10%;
  width: 10%;
}
/* Offset direction
 */
.noUi-txt-dir-rtl.noUi-horizontal .noUi-origin {
  left: 0;
  right: auto;
}
/* Give origins 0 height/width so they don't interfere with clicking the
 * connect elements.
 */
.noUi-vertical .noUi-origin {
  width: 0;
}
.noUi-horizontal .noUi-origin {
  height: 0;
}
.noUi-handle {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: absolute;
}
.noUi-touch-area {
  height: 100%;
  width: 100%;
}
.noUi-state-tap .noUi-connect,
.noUi-state-tap .noUi-origin {
  -webkit-transition: transform 0.3s;
  transition: transform 0.3s;
}
.noUi-state-drag * {
  cursor: inherit !important;
}
/* Slider size and handle placement;
 */
.noUi-horizontal {
  height: 18px;
}
.noUi-horizontal .noUi-handle {
  width: 28px;
  height: 28px;
  right: -17px;
  top: -6px;
}
.noUi-vertical {
  width: 18px;
}
.noUi-vertical .noUi-handle {
  width: 28px;
  height: 28px;
  right: -6px;
  top: -17px;
}
.noUi-txt-dir-rtl.noUi-horizontal .noUi-handle {
  left: -17px;
  right: auto;
}
/* Styling;
 * Giving the connect element a border radius causes issues with using transform: scale
 */
.noUi-target {
  background: #cecece7d;
  border-radius: 0px;
  border: 1px solid #d3d3d300;
  box-shadow: inset 0 1px 1px #F0F0F0, 0 3px 6px -5px #BBB;
}
.noUi-connects {
  border-radius: 3px;
}
.noUi-connect {
  background: rgb(248, 158, 55);
}
/* Handles and cursors;
 */
.noUi-draggable {
  cursor: ew-resize;
}
.noUi-vertical .noUi-draggable {
  cursor: ns-resize;
}
.noUi-handle {
  border: 1px solid #D9D9D9;
  border-radius: 20px;
  background: #FFF;
  cursor: default;
  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB;
}
.noUi-active {
  box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #DDD, 0 3px 6px -3px #BBB;
}
/* Handle stripes;
 */
.noUi-handle:before,
.noUi-handle:after {
  content: "";
  display: block;
  position: absolute;
  height: 14px;
  width: 1px;
  background: #f89e37;
  left: 9px;
  top: 6px;
}
.noUi-handle:after {
  left: 17px;
}
.noUi-vertical .noUi-handle:before,
.noUi-vertical .noUi-handle:after {
  width: 14px;
  height: 1px;
  left: 6px;
  top: 14px;
}
.noUi-vertical .noUi-handle:after {
  top: 17px;
}
/* Disabled state;
 */
[disabled] .noUi-connect {
  background: #B8B8B8;
}
[disabled].noUi-target,
[disabled].noUi-handle,
[disabled] .noUi-handle {
  cursor: not-allowed;
}
/* Base;
 *
 */
.noUi-pips,
.noUi-pips * {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.noUi-pips {
  position: absolute;
  color: #999;
}
/* Values;
 *
 */
.noUi-value {
  position: absolute;
  white-space: nowrap;
  text-align: center;
}
.noUi-value-sub {
  color: #ccc;
  font-size: 10px;
}
/* Markings;
 *
 */
.noUi-marker {
  position: absolute;
  background: #CCC;
}
.noUi-marker-sub {
  background: #AAA;
}
.noUi-marker-large {
  background: #AAA;
}
/* Horizontal layout;
 *
 */
.noUi-pips-horizontal {
  padding: 10px 0;
  height: 80px;
  top: 100%;
  left: 0;
  width: 100%;
}
.noUi-value-horizontal {
  -webkit-transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
}
.noUi-rtl .noUi-value-horizontal {
  -webkit-transform: translate(50%, 50%);
  transform: translate(50%, 50%);
}
.noUi-marker-horizontal.noUi-marker {
  margin-left: -1px;
  width: 2px;
  height: 5px;
}
.noUi-marker-horizontal.noUi-marker-sub {
  height: 10px;
}
.noUi-marker-horizontal.noUi-marker-large {
  height: 15px;
}
/* Vertical layout;
 *
 */
.noUi-pips-vertical {
  padding: 0 10px;
  height: 100%;
  top: 0;
  left: 100%;
}
.noUi-value-vertical {
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  padding-left: 25px;
}
.noUi-rtl .noUi-value-vertical {
  -webkit-transform: translate(0, 50%);
  transform: translate(0, 50%);
}
.noUi-marker-vertical.noUi-marker {
  width: 5px;
  height: 2px;
  margin-top: -1px;
}
.noUi-marker-vertical.noUi-marker-sub {
  width: 10px;
}
.noUi-marker-vertical.noUi-marker-large {
  width: 15px;
}
.noUi-tooltip {
  display: block;
  position: absolute;
  border: 1px solid #D9D9D9;
  border-radius: 3px;
  background: #fff;
  color: #000;
  padding: 5px;
  text-align: center;
  white-space: nowrap;
}
.noUi-horizontal .noUi-tooltip {
  -webkit-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  left: 50%;
  bottom: 120%;
}
.noUi-vertical .noUi-tooltip {
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  top: 50%;
  right: 120%;
}
.noUi-horizontal .noUi-origin > .noUi-tooltip {
  -webkit-transform: translate(50%, 0);
  transform: translate(50%, 0);
  left: auto;
  bottom: 10px;
}
.noUi-vertical .noUi-origin > .noUi-tooltip {
  -webkit-transform: translate(0, -18px);
  transform: translate(0, -18px);
  top: auto;
  right: 28px;
}

      
    `}</style>
  </div>
)
