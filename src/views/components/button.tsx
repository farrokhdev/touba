import {
  memo,
  ReactElement,
  useCallback,
  MouseEvent,
  ButtonHTMLAttributes,
} from "react";
import { useNavigate } from "react-router-dom";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  route?:string
}

export function ButtonComponent({ onClick, title,route }: Props): ReactElement {
  const navigate = useNavigate()
  const handleOnClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if(route){
        navigate(route)
      }
    },
    [onClick]
  );

  return (
    <button
      className="button-component w-100"
      onClick={handleOnClick}
    >
      <h3 className="button-component-text">
        {title}
      </h3>
    </button>
  )
}

export default memo(ButtonComponent);
