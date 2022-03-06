window.onload=function() //イベント：ページが開き終わったとき
{
    document.getElementById("mesi-btn") //HTMLからmesi-btnというidの要素を探す
    .onclick=function() //イベント：要素がクリックされたとき
    {
        console.log("ボタン押した"); //コンソールに文字を書く

        var random = Math.random() * 13;
        console.log(random);
        if (random < 1)
        {
            document.getElementById("mesi-img").setAttribute("src","images/3db3b73bf634c5390a462b1407456489.png");
        }
        else if (random < 2)
        {
            document.getElementById("mesi-img").setAttribute("src","images/3b1539c9eda880e578a22c797541ff6d.png");
        }
        else if (random < 3)
        {
            document.getElementById("mesi-img").setAttribute("src","images/4b27293d6546a00b789b1458e84eebff.png");
        }
        else if (random < 4)
        {
            document.getElementById("mesi-img").setAttribute("src","images/06cf37c00b4f1f65b960326d50ab6fbe.png");
        }
        else if (random < 5)
        {
            document.getElementById("mesi-img").setAttribute("src","images/7a4cdf1964b9a3ed42a07dd0b91cdb30.png");
        }
        else if (random < 6)
        {
            document.getElementById("mesi-img").setAttribute("src","images/73a6259f74e74013c239b9c2407b9ccc.png");
        }
        else if (random < 7)
        {
            document.getElementById("mesi-img").setAttribute("src","images/237c0caa39e77d12550b1dc22f8794f1.png");
        }
        else if (random < 8)
        {
            document.getElementById("mesi-img").setAttribute("src","images/431fa591a3656bbc4d3917ee078fd5fb.png");
        }
        else if (random < 9)
        {
            document.getElementById("mesi-img").setAttribute("src","images/826614fb2944fbff2caaefe5339197aa.png");
        }
        else if (random < 10)
        {
            document.getElementById("mesi-img").setAttribute("src","images/373344111ec83efb667719b650e1133d.png");
        }
        else if (random < 11)
        {
            document.getElementById("mesi-img").setAttribute("src","images/e031cfed954b1de54d6952d1d50c62e9.jpg");
        }
        else if (random < 12)
        {
            document.getElementById("mesi-img").setAttribute("src","images/e9245cf1a3f849cccde3e97bd2318ffb.png");
        }
        else if (random < 13)
        {
            document.getElementById("mesi-img").setAttribute("src","images/f5aa3ce8755a7542513ab6ee3d3bfd5d.png");
        }
    };
};