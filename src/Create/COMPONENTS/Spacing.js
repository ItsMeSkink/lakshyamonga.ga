export function Spacing() {
  return (
    <div id="spacing">
      {/* <span class="material-icons">format_line_spacing</span> */}
      <span
        class="material-icons-outlined"
        onClick={() => {
          document.execCommand("superscript");
        }}
      >
        superscript
      </span>
      <span
        class="material-icons-outlined"
        onClick={() => {
          document.execCommand("subscript");
        }}
      >
        subscript
      </span>
    </div>
  );
}
