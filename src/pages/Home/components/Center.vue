<template>
<div style="overflow:hidden;background-color:white;">
    <div style="overflow:hidden">
    <div class="location"><span class="iconfont">&#xe608;</span>附近</div>
    <div class="location-right"><span class="iconfont">&#xe642;</span>玩水季</div>
    </div>
    <div class="lr">
    <div class="left"><a href="http://sale.piao.qunar.com/touch/mk/special?in_track=t_mp_tgw_temai&from=as_rmhd_1_%E5%A8%81%E6%B5%B7&cat=from_area%3Dts_yunying%26from_index%3D0%26dist_city%3D%25E5%25A8%2581%25E6%25B5%25B7"><img src="http://img1.qunarzz.com/piao/fusion/1806/29/30427c0e0658b502.png" /></a></div>
    <div class="right"><a href="https://sale.piao.qunar.com/touch/topic/mk/t_3610.htm?from=as_rmhd_2_%E5%8C%97%E4%BA%AC&amp;cat=from_area%3Dts_yunying%26from_index%3D1%26dist_city%3D%25E5%258C%2597%25E4%25BA%25AC"><img src="http://img1.qunarzz.com/piao/fusion/1809/b7/00000ce26b312902.png" /></a></div>
    </div>
</div>
</template>

<script>
export default{
    name:'HomeCenter'
}
</script>

<style>
.location,.location-right{
    float:left;
    width:50%;
    height:0.9rem;
    line-height: 0.9rem;
    text-align:center;
}
.lr{
    display: flex;
    justify-content: space-around;
    background: black;
}
.left,.right{
    border-radius:10px;
    overflow: hidden;
    width:45%;
    border:solid;
}
.left img,.right img{
    width:100%;
}
</style>
