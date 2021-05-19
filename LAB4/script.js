fetch('product.json')
.then(function(response) {
  return response.json(); })
.then(function(json) {
  let product = json;
  initialize(product); })
.catch(function(err) {
  console.log("Fetch problem: " + err.message);
});

function initialize(product) {
  var entireNum = product.length;
  var once = false;
  var now = 6;

  document.getElementById('1').innerHTML = '<img src="./image/lotte_1.jpg" alt="롯데">';
  document.getElementById('2').innerHTML = '<img src="./image/lotte_2.jpg" alt="롯데">';
  document.getElementById('3').innerHTML = '<img src="./image/lotte_3.jpg" alt="롯데">';
  document.getElementById('4').innerHTML = '<img src="./image/lotte_4.jpg" alt="롯데">';
  document.getElementById('5').innerHTML = '<img src="./image/doosan_1.jpg" alt="두산">';
  document.getElementById('6').innerHTML = '<img src="./image/doosan_2.jpg" alt="두산">';

  for(var i = 6; i < entireNum; i++) {
    const uni = document.createElement('div');
    uni.id = i + 1;
    uni.className = 'uniform';
    uni.innerHTML = '<img src="' + product[i].image + '" alt="' + product[i].category + '">';
    document.querySelector('#uniforms').append(uni);
    uni.style.display = "none";
  }

  document.getElementById('button_a').onclick = function() {
    var target = document.getElementById('search').value.toUpperCase();
    console.log(target);
    var uniforms = document.getElementById('uniforms');
    var secret = document.getElementById('secret');
    secret.style.display = "none";
    var i = 0;
    var cnt = 0;
    document.querySelectorAll('.uniform').forEach(function(uniform) {
      uniform.style.display = "block";
      if(target != product[i].category && target != "") {
        uniform.style.display = "none";
      } else {
        cnt++;
      }
      i++;
    });
    if(cnt == 0) {
      secret.style.display = "block";
    }
  }

  document.getElementById('button_b').onclick = function() {
    var target = document.getElementById('category').value;
    var uniforms = document.getElementById('uniforms');
    var secret = document.getElementById('secret');
    secret.style.display = "none";
    var i = 0;
    var cnt = 0;
    document.querySelectorAll('.uniform').forEach(function(uniform) {
      uniform.style.display = "block";
      if(target != product[i].category && target != "All") {
        uniform.style.display = "none";
      } else {
        cnt++;
      }
      i++;
    });
  }

  window.onscroll = function() {
    var plus = document.getElementById("uniforms");
    if((window.innerHeight + window.scrollY) >= (document.body.offsetHeight + plus.offsetHeight) && !once) {
      console.log(plus);
      once = true;
      load();
    }
  }

  function load() {
    for(var i = 0; i < 4; i++) {
      if(now < entireNum) {
        document.getElementById(now + 1).style.display = "block";
        now++;
      }
    }
    once = false;
  }

  document.querySelectorAll('.uniform').forEach(function(uniform) {
    uniform.onclick = function() {
      var text = false;
      for(var i = 0; i < uniform.classList.length; i++) {
        if(uniform.classList[i] == "text") {
          text = true;
          break;
        }
      }
      if(text) {
        var des = product[uniform.id - 1].description;
        var cost = product[uniform.id - 1].cost;
        uniform.innerHTML = "<br><br><br>" + des + "<br><br><br>" + cost;
        uniform.classList.remove("text");
      } else {
        uniform.innerHTML = '<img src="' + product[uniform.id - 1].image + '" alt="' + product[uniform.id - 1].category + '">';
        uniform.classList.add("text");
      }
    };
  });
}
