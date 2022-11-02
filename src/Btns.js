function Btns({ panel }) {
  const getItems = item => {
    const panel_ul = item.current;
    const panel_items = panel_ul.children;
    const items = Array.from(panel_items);
    const len = items.length;
    const current_item = panel_ul.querySelector('.on');
    const current_index = items.indexOf(current_item);
    return [panel_ul, panel_items, len, current_item, current_index];
  }

  const moveUp = () => {
    const [panel_ul, panel_items, len, current_item, current_index] = getItems(panel);
    let next_index = null;
    (current_index !== len - 1) ? (next_index = current_index + 1) : (next_index = 0);

    current_item.classList.remove('on');
    current_item.classList.add('up');
    panel_items[next_index].classList.add('down');

    setTimeout(() => {
      panel_items[next_index].classList.remove('down');
      panel_items[next_index].classList.add('on');
      panel_ul.querySelector('.up').classList.remove('up');
    }, 800)
  }
  return (
    <>
      <a href="#" className="btnUp" onClick={moveUp}>
        <span></span>
        <em>UP</em>
      </a>

      <a href="#" className="btnDown">
        <span></span>
        <em>DOWN</em>
      </a>
    </>
  );
}



export default Btns;