import React from 'react'
import CardContent from "./CardContent";

const CardDkv = () => {
  return (
    <>
      <CardContent
        imageSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAt1BMVEXwhgD///8ASXzwhADzn1IARXoAQnhxiadGa5PwggDvfADvfgAAR3vvfQAAP3YAN3IANHEAO3QANnL//Pn97uL4yKL+9/H859ff5evznU30pmL62sHyljz2toH3w5r61ruwvc31rXHxjib74c7xixv1sHX4zazM1N+Tpbvu8fX9691mgqJ+la8kV4XX3uZRc5i/ydYyXYj2vI4ALm6iscSLn7caUoLp7fKmtcdOcJbEzdlde51qhqUfNjBCAAALx0lEQVR4nO2d6VqzPBCG22JRoKVFrd1Eu7h+7lv1Vc//uD4CXSDzJIQuUiXPdfnHhjS5m8lMJgFKZa1S3g3YAmkGmgGTZpBgMPZ7O0VRzx8DBu2zumUZRZFl1c/aPINT2ygVS4Z9kWTQtvNuUg6y2wkGZ0UbBUzGWZzBuJ53e3JRfRxj4Ft5NycXWX6MQa+gDHoxBjsFZbCjGWgGmgGTZqAZMGkGmgGTZqAZMGkGmgGTZqAZMGkGmgGTZqAZMGkGeTOI9noSYv/64VbkwCDstePUbdsujY67veHw3D/3/eDvfDjsdY9HpeCjuuOERH6iQT/JwGBdt53RzvnzRX98eFQW6+hw3L94Pt8ZBeWdTaP4GQas97ZzPDw5bct6Dmm0T0+Gx8HVmyOxcQZh90fD1jhr5zkU49ZwtCEQG2VgBN0vDVvtg5W6v9BBuzUsBSDWzGFjDFj/R/7par8+0tGpP1ovh80wMCy75PfX3/85h75fsteGYQMMggHQbR1urP8zHba6wXBYS4PXzMBy6r3Tddl/mg5Oe84aMKyVgcEA/FD/Zzrt1Z0VjWJ9DII54Pjip0ZAXAcXx6vNDetiYDjG8+bnAJEOn40VBsN6GFh2t58bgEj9rr1061dnEBjBeX5DYKHD8yVNYmUGQSz8nMcsgHTwvFQsvSKDgEArz14TtazsE8NqDLaNAFPLytyLFRhYzkmenRXqJGPctDwDy/a3ZR7gdeBn8hHLMjDs7jb4ApEOuxkOny/JwDLyjgfS1DfUO7MMA8P28+yeonzVobAMA2tx38NWq32m2J/MDH7HIIikNhQyM7Cssexbt0xjlWAhKwOnu60OEeug66ybgf2cZ4eW0nPq/UmZGBj2tntEpH7apJCFgWVsc1gk1mFKqJCBgTX6XVPBQgcjeceUGVjdPLuxorrSnqkymBb8rVLoWiqDX45ApW9pDH61IUQSm4MaA+s4z9avScfC3qkwmN0N+8slupNZhYHhbG4H+Sd1JEi3qjCwf9MqSaYxDpsVGMgyp6//9lL09X016IArr29J0acBX+jyS1zx06O4WZ1dUvqV/f8ELqDSGci84p5XTZXpes3q7T3fyoZLSr7wrG5fTHG93q2wWZfkOnNSTu2hmIFhiSPkV6+ipprZfLpMXPpUpYUmXPVf0uqrD6JmXTdI4eYU7wHah0plIFsq3tUUGbAmN7/izWzSEu5VsvY9V15jTdSsB5Mv6s2r7oMpIY3B9L54qA7oiESmuTCIAfiJ9xP2cn1HesKpeY2bNdjnS1afFp+C5xukMbAlbvEq5YfiVWvO7eEGdLAar/u9So2FU4OfY6bwgCW8Lz4+ogMhhYEl203LYgrTxsyaDeiZ8Tnu3kuv2yNuJNQ/agmv8c9PaCelDAxDgiCjKTDVzGkX6W9VacQmzcemAl73DbVqQKqu7iVLkHPxcgaObFsZmUItckXCHpjRxPhKL601FjV/vKiMMOgYrvf5S2v73LzR4oMEKQPDkiBAplCrTCOS/X0XdyOaEvaosZvf84rf0ACrEWw15BioJewTk+H9o5SBdDZAprAYnp3XuwaiEA1MMnMHRjsP+76BoVTMyT1xJcAxUEsw6WjhZwQpA5lTgKaQmKofK8i7sWjlE3nG2WUPKDIy78A8Sh0DtYSKR0HxrkHGQBYblMsTYArVZJEHgIkNlVsKpzqLoJ6Qw3XZ6PnHGxB1DNTGmmhVwcUIMgaObDcBmYLJh/A0YgsjYoBv2p/rCRo7XgjojadDHMMHtYQb1Pa+o85AggCbwiVfqkJ72yy/A3yRbXdcFBk1dsO6SGxZ/Up+2TXxqDNfzEuZgdwUUIBEv/GTzm/ePQiUo6nyEoYFzWmw3+HrqlWSXwYsgfwokZLGIGNwgSuIGqRiChCV9wimA5eFcgMYFrx8zOp6IV1MfNUHQevuClp/ocrAlu2sqZkCiobcAZgOWER/RfoYIlhMaoRnwjEAS6jQ9kQ6tBUZSKcDNVNAUXEVrJdqgeu7BUFDED3GuO7yFyYcA7AEvKhictQYGLItBVVTKJdpQTDtuVc4YVJ146klMqbiGQeaz3HFiaZy11BiYMmO3KiaQrmMgj4i7x4mTMxKIsC55LtpLhzDO7WEO0n7E0+KlDCQrZeQKbiwpMIiONATCgtMrhck+RTLvgFLQJncmVpqDBzJXTnQFPAkjKycCoFy9/i6yFiZOwZqCd4Vf3Vcp44aA8mugropXKsxAPK+SGVf/I/dmP7W78SlxNNnQGNFBpJDiOqmgJZHStoHMxqJlmeLTZqljqfPgNpqDOr/CWvIYAqk2YqCQ/mRBzp1DFfUEl7B5TH9V1+VATIF7xMWBfGQivBap8MbVlSMrj/49NmyDCS2gDrmwZL3KtNBDVSH4xu+tsgxEEuoNQRp97kUbUE8J2YwBZRDJwieniiEKr/pFIoUZI6BWgJNn/FSnROFvlHdFNAqmci9ukRpOQSVRMuBY6C/CEif8VL0jeIYCWWQsCk8pG6UVEKn+g2GSxNQ/QCOgfoEkD7jpRgjCWNlaArfqOSj0mzAkuowUqYVXvKRt/tBLQGmzzgpxsrCNZOyKVwrxQZhNugRcaVBEomWqzRbh10KJ8U1k3DtPAHb5vuoIB2lyDTcMEfyBayhQac2ElSTGkXps6QU186iHIqyKdCssrmL0idRvAvGDNkhwqi46gTps4SUcyiCXBo0BWCCX3RjqAIi51myB80dNNRJ3eoWps8SUs6lCXKqwBS4xF4okBB4uSe+LZZ5AXl4GjGTaJmTOH2WkHJOFU8I0BTINNQBe0zeG0gqLYYQODcQYOOSAO8pnkaSPosrw/4C2mNRMoUrkCR3H+CvuBhCdK8QnFGSp2TwdjxRhj0WaAzIFDiv8DkBfWVJIRAKxU2ebKZVaFIQ7FjHiMnSZzFl2GtDe67ppjB4QhvOYfwPPoinRWl2vELmebA3ESsrS58tlGXPFe29ywOkzuCmAUerObkGUV6FO4hF9wvJPu5A4hjk6bOFMu29gzMYaNkcLPyYJmaz4ZnQXqPs6C3ahk7UjkZ6cpShUzxTpaTPFsp0BoOexcFnkGqRhK3z/oUXg8wpF1zBdWZyJSxeiaakz+bKdhaHnsnKehwvalw0r5EsUIUeIYAnXxMZEWFiKi19NlfGM1lkRlgiNWbOPCfiR47TgDO8yXBRlJVJTZ/NlPVsHu8ash/Hq+0/zLoJjJ06M/gN8Z8YHGmLvic9aRAq+xlNLkbIfDLVNefhEzyiTGMamg+oJJyeIFmfnj6baomzuskz2xlNwW3EvBU6ouyBRR7au6guxguOlhXSZ5GWObOdOLufyRSqXvIgOlr2orRDBx1D8BYDBh75U0ifhVru7H78Hg51UzC95gO3iABt5w8URYLbMovFEIqoVdJnqT2U3sszDxIqrpku1/Wate8B/8N8NmnRxkcZaQK+xp2nh2498qGnkj5jasEXVGa5p+v9Zjddt28fl2hgfnzTsjc4qrlH3/M94/VJK1JFsPw9XX/n3j7BA+X0PZ76Xl91Br//tneFzul7//UzIJj0s0D0M2GY/vazgUprezaQfkZUJP2ssJJ+Zlx0gX52oH6G5PSawj9LtPRbhsJGnylb0s8WDqWfMR1eWfhnjYfXFv6Z8+HVhX/3QCl8Fc12UWgt8XIa/S6SNTDQ76SZ1VL0dxOF0u+oCikU/l1lEYaiv7NuWp/jFPvdhdMqi/4Oy0iFf5dppMK/03aqor/beKaiv+N6roK/6zymxDvv2ynvvG//tXfeJxSgYDDqtl0vjY67veHw3D/3/eDvfDjsdY9HJfYR6/qmOz9VDgxiMgJZSbF//XAr8mWwHdIMNAMmzUAzYNIMNAMmzUAzYNIMNAMmzUAzYNIMNAMmzUAzYNIMNAOmBANwX3wRNH2+QcTALygDP8ZgDG+J/vOqj2MMhHfD/mnN7mSeMmin3vfyB2W3EwzKFxmOOv8NGfbsMZEzBuX2WT3a6ymELKu+uB9lzqBc7vu9naKo58eOVcYYFFaagWbApBloBkz/A8/CUFsqfKkjAAAAAElFTkSuQmCC"
        title="DKV"
        description="Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet porttitor rhoncus libero justo laoreet sit amet vitae."
      />
    </>
  )
}

export default CardDkv