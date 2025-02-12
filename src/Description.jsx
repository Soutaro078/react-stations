// @ts-check
import { DogImage } from './DogImage'

/**
 * @param {{ dogUrl: string, onClick: () => void }} props
 */

export const Description = (props) => {
  const { dogUrl, onClick } = props;
  
  return (
    <div>
      <figure>
        <DogImage imageUrl={dogUrl} />
        <figcaption>この画像はランダムに選ばれた犬の写真です。</figcaption>
      </figure>
      <button onClick={onClick}>更新</button>
    </div>
  )
}

