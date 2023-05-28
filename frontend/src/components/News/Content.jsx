import React from 'react'
import NewsArticle from "./NewsArticle";


const Content = () => {
  return (
    <div>
      <NewsArticle
            title="How To Design The Perfect Hero Image:"
            explan="Guide, Practical Tips and Examples"
            date={new Date(2023, 5, 11)}
            imageSrc="/images/NewsImg.png"
            description1="Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing quam ornare adipiscing quam ornare adipiscing quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, eleme. read more"
            description2="Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra,
            sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, eleme. read more"
      />
    </div>
  )
}

export default Content
