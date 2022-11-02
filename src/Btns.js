import {useRef} from 'react';



function Btns({ panel }) {
  const delay = 500;
  const enabled = useRef(true);
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
    //버튼 광클해도 오류안뜨고 모든 모션이 끝나야 실행됨 
    if(!enabled.current) return;
    enabled.current = false;
    //getItems로 부터 필요한 정보값 가져오기
    const [panel_ul, panel_items, len, current_item, current_index] = getItems(panel);

    //현재 순번을 기준으로 다음 활성화 패널 순번 구하기
    let next_index = null;
    (current_index !== len - 1) ? (next_index = current_index + 1) : (next_index = 0);

    //기존 활성화 패널 비활성화 및 다음 활성화 패널 준비
    current_item.classList.remove('on');
    current_item.classList.add('up');
    panel_items[next_index].classList.add('down');

    //기존 활성화 패널이 사라지면 다음 활성화 패널을 활성화
    setTimeout(() => {
      panel_items[next_index].classList.remove('down');
      panel_items[next_index].classList.add('on');
      panel_ul.querySelector('.up').classList.remove('up');
      enabled.current = true;
    }, delay)
  }

  const moveDown = () => {
    if(!enabled.current) return;
    enabled.current = false;
    const [panel_ul, panel_items, len, current_item, current_index] = getItems(panel);
    let prev_index = null;
    (current_index !== 0) ? (prev_index = current_index - 1) : (prev_index = len - 1);

    current_item.classList.remove('on');
    current_item.classList.add('down');
    panel_items[prev_index].classList.add('up');

    setTimeout(() => {
      panel_items[prev_index].classList.remove('up');
      panel_items[prev_index].classList.add('on');
      panel_ul.querySelector('.down').classList.remove('down');
      enabled.current = true;
    }, delay)
  }
  return (
    <>
      <a href="#" className="btnUp" onClick={moveUp}>
        <span></span>
        <em>UP</em>
      </a>

      <a href="#" className="btnDown" onClick={moveDown}>
        <span></span>
        <em>DOWN</em>
      </a>
    </>
  );
}
export default Btns;