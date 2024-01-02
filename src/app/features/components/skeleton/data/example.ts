export const SkeletonExample = {
    card:{
        html:
`<section class="customSkeleton">
    <div class="customSkeleton__headerCard">
        <assaf-skeleton shape="circle" size="4rem" 
        styleClass="circle"> </assaf-skeleton>
        <div>
            <assaf-skeleton width="10rem" styleClass="rectangle"> 
            </assaf-skeleton>
            <assaf-skeleton width="5rem" styleClass="rectangle"> 
            </assaf-skeleton>
            <assaf-skeleton height="0.5rem"></assaf-skeleton>
        </div>
    </div>
    <assaf-skeleton width="100%" height="150px"> </assaf-skeleton>
    <div class="customSkeleton__footerCard">
        <assaf-skeleton width="4rem" height="2rem"> 
        </assaf-skeleton>
        <assaf-skeleton width="4rem" height="2rem"> 
        </assaf-skeleton>
    </div>
</section>`,
    },
    list:{
        html:
`<section class="customSkeleton">
    <div class="customSkeleton__headerCard">
        <assaf-skeleton shape="circle" size="4rem"
            styleClass="circle"></assaf-skeleton>
        <div class="customSkeleton__headerCard__item">
            <assaf-skeleton width="100%" styleClass="rectangle">
            </assaf-skeleton>
            <assaf-skeleton width="75%" styleClass="rectangle">
            </assaf-skeleton>
        </div>
    </div>
    <div class="customSkeleton__headerCard">
        <assaf-skeleton shape="circle" size="4rem"
            styleClass="circle"></assaf-skeleton>
        <div class="customSkeleton__headerCard__item">
            <assaf-skeleton width="100%" styleClass="rectangle">
            </assaf-skeleton>
            <assaf-skeleton width="75%" styleClass="rectangle">
            </assaf-skeleton>
        </div>
    </div>
</section>`
    },
    rectanle:{
html:
`<assaf-skeleton styleClass="rectangle"> </assaf-skeleton>
<assaf-skeleton width="10rem" styleClass="rectangle"> </assaf-skeleton>
<assaf-skeleton width="5rem" styleClass="rectangle"> </assaf-skeleton>
<assaf-skeleton height="2rem" styleClass="rectangle"> </assaf-skeleton>
<assaf-skeleton width="10rem" height="4rem"> </assaf-skeleton>
`
    },
    rounded:{
        html:
`<assaf-skeleton styleClass="rectangle" borderRadius="16px"> 
</assaf-skeleton>
<assaf-skeleton width="10rem" styleClass="rectangle"
    borderRadius="16px">
</assaf-skeleton>
<assaf-skeleton width="5rem" styleClass="rectangle"
    borderRadius="16px">
</assaf-skeleton>
<assaf-skeleton height="2rem" styleClass="rectangle"
    borderRadius="16px" >
</assaf-skeleton>
<assaf-skeleton width="10rem" height="4rem"
    borderRadius="16px" >
</assaf-skeleton>
`
    }
}
export const SkeletonStyle =
`.customSkeleton { padding: 1.5rem;
    &__headerCard {  margin-bottom: 1rem;}
    &__footerCard { display: flex; justify-content: space-between; margin-top: 1rem;}
    &__item { width: 100%;} 
  }
.circle { margin-right: 0.5rem;}
.rectangle { margin-bottom: 0.4rem;}

`