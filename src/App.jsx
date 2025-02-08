// DO NOT DELETE
import { useState } from 'react'
import './App.css'

/**
 * @type {() => JSX.Element}
 */



export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/brabancon/n02112706_475.jpg')

  // Dog API からランダムな犬の画像を取得する関数
  // fetchは，取ってくるって意味
  const fetchDogImage = async () => {
    try {
      // URLのデータを取得（APIを呼び出して，犬の画像のURLのデータを取得）
      const response = await fetch('https://dog.ceo/api/breeds/image/random'); 
      // 受け取ったデータをJSONに変換（JSが扱いやすい形に変換）
      const data = await response.json(); 
      // 取得したURLをセットする
      setDogUrl(data.message); 
    } catch (error) {
      console.error("画像の取得に失敗しました:", error);
    }
  };

  return (
    <div>
      <header>Dogアプリ</header>
      <figure>
        <img src={dogUrl} alt="ランダムな犬の画像" />
        <figcaption>この画像はランダムに選ばれた犬の写真です。</figcaption>
      </figure>
      <button onClick={fetchDogImage}>更新</button>
    </div>
  )
}
