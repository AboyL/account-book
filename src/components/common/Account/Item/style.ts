import styled from 'styled-components'

export const Item = styled.div`
  margin:10px 0;
  border:1px solid gray;
  padding:10px;
  .item-row{
    .item-col{
      text-align:center;
      height:32px;
      line-height:32px;
      .opreate-icon{
        font-size:14px;
        margin-right:10px;
      }
    }
  }
`