(function(){
	var styleNode = document.createElement("style");
	var width = document.documentElement.clientWidth/16;
	styleNode.innerHTML = "html{font-size:"+width+"px!important}";
	document.head.appendChild(styleNode);
})()

document.addEventListener("touchstart",function(e){
	e = e||event;
	e.preventDefault();
})

window.onload = function(){
	
	let wrap = document.querySelector("#wrap");
	let lis = document.querySelectorAll("#wrap .lists>li");
	let music = document.querySelector(".music>audio");
	let musicBtn = document.querySelector(".music>img");
	let points = document.querySelectorAll('#wrap .points li');
	
	let h = document.documentElement.clientHeight;
	let w = document.documentElement.clientWidth;
	let len = lis.length;
	
	let point = {
		now:0,
		prev:0,
		next:0,
		dir:"",
		ismoved:false,
		isFirst:false,
		isStart:false
	}
	
	let startY = 0;
				
	let anList = {
		page1Animation: null,
		page2Animation: null,
		page3Animation: null,
		page4Animation: null,
		page5Animation: null,
		page6Animation: null,
		page7Animation: null
	}
	
	
	page1();
	function page1(){
		//第一屏
		let page1Logo = document.querySelector(".page-1 .page-1-logo");
		let page1Title = document.querySelector(".page-1 .page-1-title");
		let page1RedPointT = document.querySelector(".page-1 .page-1-redPointT");
		let page1RedPointB = document.querySelector(".page-1 .page-1-redPointB");
		let page1WhitePoint = document.querySelector(".page-1 .page-1-whitePoint");
		let page1Wrap = document.querySelector(".page-1 .page-1-wrap");
		let page1Gold = document.querySelector(".page-1 .page-1-gold");
		let page1Meteor = document.querySelector(".page-1 .page-1-meteor");
		let page1GoldBag = document.querySelector(".page-1 .page-1-goldBag");
			
		anList.page1Animation = {
			anIn:function(){
				page1Meteor.style.animation = 'moveFromRight .6s 0.2s both' ;
				page1RedPointT.style.animation = 'fadeIn .5s 0.6s both';
				page1Gold.style.animation = 'longMoveFromBottom .6s 1s both';
				page1Wrap.style.animation = 'longMoveFromBottom .6s 1.3s both' ;
				page1RedPointB.style.animation = 'fadeIn .5s 1.6s both';
				page1WhitePoint.style.animation = 'fadeIn .5s 1.6s both';
				page1Logo.style.animation = 'shortMoveFromBottom .6s 1.8s both';
				page1GoldBag.style.animation = 'moveFromRight .6s 2s both';
				page1Title.style.animation = 'shortMoveFromTop .6s 2.3s both';
				
			},
			anOut:function(){
				page1Meteor.style.animation = 'none' ;
				page1RedPointT.style.animation = 'none';
				page1Gold.style.animation ='none';
				page1Wrap.style.animation = 'none';
				page1RedPointB.style.animation = 'none';
				page1WhitePoint.style.animation = 'none';
				page1Logo.style.animation = 'none';
				page1GoldBag.style.animation = 'none';
				page1Title.style.animation = 'none';
			}
		}
	
	}
	
	page2();
	function page2(){
		//第二屏
		let page2Title = document.querySelector(".page-2 .page-2-title");
		let page2Mark = document.querySelector(".page-2 .page-2-mark");
		let page2Text = document.querySelector(".page-2 .page-2-text");
		let page2LeftLine = document.querySelector(".page-2 .page-2-leftLine");
		let page2RightLine = document.querySelector(".page-2 .page-2-rightLine");
		let page2OuterRing = document.querySelector(".page-2 .page-2-outerRing");
		let page2InnerRing = document.querySelector(".page-2 .page-2-innerRing");
		let page2Arrowhead = document.querySelector(".page-2 .page-2-arrowhead");
		let page2Rocked = document.querySelector(".page-2 .page-2-rocked");
		let page2Icon2 = document.querySelector(".page-2 .page-2-icon2");
		let page2Icon2Text = document.querySelector(".page-2 .page-2-icon2Text");
		let page2Icon1 = document.querySelector(".page-2 .page-2-icon1");
		let page2Icon1Text = document.querySelector(".page-2 .page-2-icon1Text");
		let page2Icon4 = document.querySelector(".page-2 .page-2-icon4");
		let page2Icon4Text = document.querySelector(".page-2 .page-2-icon4Text");
		let page2Icon3 = document.querySelector(".page-2 .page-2-icon3");
		let page2Icon3Text = document.querySelector(".page-2 .page-2-icon3Text");
		
		anList.page2Animation = {
			anIn:function(){
				page2OuterRing.style.animation = 'rotateCir 2s  infinite both' ;
				page2Rocked.style.animation = 'moveFromLeft .6s 0.8s  both' ;
				page2Arrowhead.style.animation = 'moveFromLeft .3s 0.9s linear both' ;
				page2LeftLine.style.animation = 'shortMoveFromLeft .6s 1.1s both' ;
				page2RightLine.style.animation = 'shortMoveFromRight .6s 1.1s both' ;
				page2InnerRing.style.animation = 'scaleFromBig .6s 1.4s both' ;
				page2Title.style.animation = 'scaleFromLittle .6s 1.7s both' ;
				page2Mark.style.animation = 'scaleFromBig .6s 2s both' ;
				page2Text.style.animation = 'fadeIn 1s 2s both' ;
				page2Icon2.style.animation = 'shortMoveFromTop .5s 2.5s both' ;
				page2Icon2Text.style.animation = 'shortMoveFromTop .5s 3s both' ;
				page2Icon1.style.animation = 'shortMoveFromLeft .5s 3.5s both' ;
				page2Icon1Text.style.animation = 'shortMoveFromTop .5s 4s both' ;
				page2Icon4.style.animation = 'shortMoveFromTop .5s 4.5s both' ;
				page2Icon4Text.style.animation = 'shortMoveFromTop .5s 5s both' ;
				page2Icon3.style.animation = 'shortMoveFromRight .5s 5.5s both' ;
				page2Icon3Text.style.animation = 'shortMoveFromTop .5s 6s both' ;
				
			},
			anOut:function(){
				page2OuterRing.style.animation = 'none' ;
				page2Rocked.style.animation = 'none' ;
				page2Arrowhead.style.animation = 'none' ;
				page2LeftLine.style.animation =  'none' ;
				page2RightLine.style.animation = 'none';
				page2InnerRing.style.animation = 'none' ;
				page2Title.style.animation = 'none';
				page2Mark.style.animation =  'none';
				page2Text.style.animation =  'none' ;
				page2Icon2.style.animation = 'none';
				page2Icon2Text.style.animation =  'none';
				page2Icon1.style.animation =  'none' ;
				page2Icon1Text.style.animation =  'none' ;
				page2Icon4.style.animation =  'none';
				page2Icon4Text.style.animation = 'none';
				page2Icon2.style.animation = 'none';
				page2Icon2Text.style.animation =  'none';
			}
		}
	}
	
	page3();
	function page3(){
		//第三屏
		let page3Logo = document.querySelector(".page-3 .page-3-logo");
		let page3Title1 = document.querySelector(".page-3 .page-3-title1");
		let page3Title2 = document.querySelector(".page-3 .page-3-title2");
		let page3Title3 = document.querySelector(".page-3 .page-3-title3");
		let page3LeftLine = document.querySelector(".page-3 .page-2-leftLine");
		let page3RightLine = document.querySelector(".page-3 .page-2-rightLine");
		let page3ThreeLine = document.querySelector(".page-3 .page-3-threeLine");
		let page3Triangle = document.querySelector(".page-3 .page-3-triangle");
		let page3CenterIcon = document.querySelector(".page-3 .page-3-centerIcon");
		let page3TopIcon = document.querySelector(".page-3 .page-3-topIcon");
		let page3TopIconText = document.querySelector(".page-3 .page-3-topIconText");
		let page3LeftIcon = document.querySelector(".page-3 .page-3-leftIcon");
		let page3LeftIconText = document.querySelector(".page-3 .page-3-leftIconText");
		let page3RightIcon = document.querySelector(".page-3 .page-3-rightIcon");
		let page3RightIconText = document.querySelector(".page-3 .page-3-rightIconText");
		
		anList.page3Animation = {
			anIn:function(){
				page3ThreeLine.style.animation = 'rotateY .6s 1.5s both';
				page3Triangle.style.animation = 'rotateY 0.5s 0.6s both';
				page3RightLine.style.animation = 'shortMoveFromLeft .6s 1.1s both';
				page3LeftLine.style.animation = 'shortMoveFromRight .6s 1.1s both';
				page3Logo.style.animation = 'shortMoveFromTop 0.5s 1.5s both';
				page3Title1.style.animation = 'scaleFromLittle 0.5s 1.8s both';
				page3Title2.style.animation = 'shortMoveFromLeft 0.5s 2.2s both';
				page3Title3.style.animation = 'shortMoveFromRight 0.5s 2.6s both';
				page3TopIcon.style.animation = 'shortMoveFromTop .8s 3s both';
				page3TopIconText.style.animation = 'longMoveFromLeft .8s 3s both';
				page3LeftIcon.style.animation = 'shortMoveFromBottom .8s 3.8s both';
				page3LeftIconText.style.animation = 'longMoveFromRight .8s 3.8s both';
				page3RightIcon.style.animation = 'shortMoveFromLeft .8s 4.6s both';
				page3RightIconText.style.animation = 'longMoveFromLeft .8s 4.6s both';
				page3CenterIcon.style.animation = 'scaleFromLittle 0.5s 5.4s both';
				
			},
			anOut:function(){
				page3ThreeLine.style.animation = 'none';
				page3Triangle.style.animation = 'none';
				page3RightLine.style.animation = 'none';
				page3LeftLine.style.animation = 'none';
				page3Logo.style.animation = 'none';
				page3Title1.style.animation = 'none';
				page3Title2.style.animation = 'none';
				page3Title3.style.animation = 'none';
				page3TopIcon.style.animation = 'none';
				page3TopIconText.style.animation = 'none';
				page3LeftIcon.style.animation = 'none';
				page3LeftIconText.style.animation = 'none';
				page3RightIcon.style.animation = 'none';
				page3RightIconText.style.animation = 'none';
				page3CenterIcon.style.animation = 'none';
			}
		}
	}
	
	page4();
	function page4(){
		//第四屏
		let page4LeftLine = document.querySelector(".page-4 .page-2-leftLine");
		let page4RightLine = document.querySelector(".page-4 .page-2-rightLine");
		let page4Title1 = document.querySelector(".page-4 .page-4-title1");
		let page4Title2 = document.querySelector(".page-4 .page-4-title2");
		let page4Circle1 = document.querySelector(".page-4 .page-4-circle1");
		let page4CircleText1 = document.querySelector(".page-4 .page-4-circleText1");
		let page4CircleText2 = document.querySelector(".page-4 .page-4-circleText2");
		let page4Circle3 = document.querySelector(".page-4 .page-4-circle3");
		let page4Circle2 = document.querySelector(".page-4 .page-4-circle2");
		let page4Cloud1 = document.querySelector(".page-4 .page-4-cloud1");
		let page4Cloud2 = document.querySelector(".page-4 .page-4-cloud2");
		let page4Col1 = document.querySelector(".page-4 .page-4-col1");
		let page4Col2 = document.querySelector(".page-4 .page-4-col2");
		let page4Col3 = document.querySelector(".page-4 .page-4-col3");
		let page4Col4 = document.querySelector(".page-4 .page-4-col4");
		let page4Col5 = document.querySelector(".page-4 .page-4-col5");
		let page4Line = document.querySelector(".page-4 .page-4-line");
		let page4Rocket = document.querySelector(".page-4 .page-4-rocket");
		let page4Stars = document.querySelector(".page-4 .page-4-stars");
		let page4Text1 = document.querySelector(".page-4 .page-4-text1");
		let page4Text2T = document.querySelector(".page-4 .page-4-text2T");
		let page4Text2B = document.querySelector(".page-4 .page-4-text2B");
		let page4Text3= document.querySelector(".page-4 .page-4-text3");
		
		anList.page4Animation = {
			anIn:function(){
				page4Stars.style.animation = 'fadeIn .5s .5s both';
				page4RightLine.style.animation = 'shortMoveFromLeft .6s .7s both';
				page4LeftLine.style.animation = 'shortMoveFromRight .6s .7s both';
				page4Title1.style.animation = 'fadeIn .5s .9s both';
				page4Title2.style.animation = 'fadeIn .5s 1.4s both';
				page4Circle2.style.animation = 'fadeIn .1s 1.7s both';
				page4Cloud2.style.animation = 'fadeIn .5s 1.8s both';
				page4Cloud1.style.animation = 'shortMoveFromRight .5s 1.8s both';
				page4Col1.style.animation = 'shortMoveFromTop .5s 1.8s both';
				page4Col2.style.animation = 'shortMoveFromTop .5s 2s both';
				page4Col3.style.animation = 'shortMoveFromTop .5s 2.2s both';
				page4Col4.style.animation = 'shortMoveFromTop .5s 2.4s both';
				page4Col5.style.animation = 'shortMoveFromTop .5s 2.6s both';
				page4Rocket.style.animation = 'longMoveFromLeft .5s 3.1s both';
				page4Circle3.style.animation = 'scaleFromBig .5s 3.1s both';
				page4Line.style.animation = 'longMoveFromLeft .5s 3.6s both';
				page4Text3.style.animation = 'shortMoveFromLeft .5s 4.1s both';
				page4Text2T.style.animation = 'shortMoveFromRight .5s 4.6s both';
				page4Text2B.style.animation = 'shortMoveFromRight .5s 4.8s both';
				page4Text1.style.animation = 'shortMoveFromRight .5s 5.3s both';
				page4Circle1.style.animation = 'scaleFromLittle .5s 5.8s both';
				page4CircleText1.style.animation = 'shortMoveFromRight .5s 6.3s both';
				page4CircleText2.style.animation = 'shortMoveFromRight .5s 6.5s both';
				
			}, 
			anOut:function(){
				page4Stars.style.animation = 'none';
				page4RightLine.style.animation = 'none';
				page4LeftLine.style.animation = 'none';
				page4Title1.style.animation = 'none';
				page4Title2.style.animation = 'none';
				page4Circle2.style.animation = 'none';
				page4Cloud2.style.animation = 'none';
				page4Cloud1.style.animation = 'none';
				page4Col1.style.animation = 'none';
				page4Col2.style.animation = 'none';
				page4Col3.style.animation = 'none';
				page4Col4.style.animation = 'none';
				page4Col5.style.animation = 'none';
				page4Rocket.style.animation = 'none';
				page4Circle3.style.animation = 'none';
				page4Line.style.animation = 'none';
				page4Text3.style.animation = 'none';
				page4Text2T.style.animation = 'none';
				page4Text2B.style.animation = 'none';
				page4Text1.style.animation = 'none';
				page4Circle1.style.animation = 'none';
				page4CircleText1.style.animation = 'none';
				page4CircleText2.style.animation = 'none';
				
			}
		}
	}
	
	page5();
	function page5(){
		let page5Circle = document.querySelector(".page-5 .page-5-circle");
		let page5Backgronud = document.querySelector(".page-5 .page-5-backgronud");
		let page5Logo = document.querySelector(".page-5 .page-5-logo");
		let page5LogoImg = document.querySelector(".page-5 .page-5-logoImg");
		let page5Title = document.querySelector(".page-5 .page-5-title");
		let page5Line = document.querySelector(".page-5 .page-5-line");
		let page5WrapBg = document.querySelector(".page-5 .page-5-wrapBg");
		let page5InnerTopLeft = document.querySelector(".page-5 .page-5-innerTopLeft");
		let page5InnerTopPlus = document.querySelector(".page-5 .page-5-innerTopPlus");
		let page5InnerTopRight = document.querySelector(".page-5 .page-5-innerTopRight");
		let page5InnerText = document.querySelector(".page-5 .page-5-innerText");
		let page5Increase = document.querySelector(".page-5 .page-5-increase");
		
		anList.page5Animation = {
			anIn:function(){
				page5Backgronud.style.animation = 'shortMoveFromRight .3s .2s both';
				page5Circle.style.animation = 'rotateCir .7s .2s infinite ';
				page5Logo.style.animation = 'scaleFromLittle .5s .5s both';
				page5LogoImg.style.animation = 'shortMoveFromTop .5s 1s both';
				page5Title.style.animation = 'shortMoveFromTop .5s 1s both';
				page5Line.style.animation = 'shortMoveFromRight .5s 1.5s both';
				page5WrapBg.style.animation = 'fadeIn .5s 1.5s both';
				page5InnerTopLeft.style.animation = 'longMoveFromRight .8s 2s both';
				page5InnerTopRight.style.animation = 'longMoveFromLeft .8s 2s both';
				page5InnerTopPlus.style.animation = 'fadeIn .8s 2s both';
				page5InnerText.style.animation = 'longMoveFromBottom 1.2s 2.8s both';
				page5Increase.style.animation = 'scaleFromBig .2s 4.4s both';
				
			}, 
			anOut:function(){
				page5Backgronud.style.animation = 'none';
				page5Circle.style.animation = 'none';
				page5Logo.style.animation = 'none';
				page5LogoImg.style.animation = 'none';
				page5Title.style.animation = 'none';
				page5Line.style.animation = 'none';
				page5WrapBg.style.animation = 'none';
				page5InnerTopLeft.style.animation = 'none';
				page5InnerTopRight.style.animation = 'none';
				page5InnerTopPlus.style.animation = 'none';
				page5InnerText.style.animation = 'none';
				page5Increase.style.animation = 'none';
			}
		}
	}
	
	page6();
	function page6(){
		let page6LeftLine = document.querySelector(".page-6 .page-2-leftLine");
		let page6RightLine = document.querySelector(".page-6 .page-2-rightLine");
		let page6Title1 = document.querySelector(".page-6 .page-6-title1");
		let page6Title2 = document.querySelector(".page-6 .page-6-title2");
		let page6ListDate1 = document.querySelector(".page-6 .page-6-list1>.page-6-listDate");
		let page6ListArrow1 = document.querySelector(".page-6 .page-6-list1>.page-6-listArrow");
		let page6ListContent1 = document.querySelector(".page-6 .page-6-list1>.page-6-listContent");
		let page6ListDate2 = document.querySelector(".page-6 .page-6-list2>.page-6-listDate");
		let page6ListArrow2 = document.querySelector(".page-6 .page-6-list2>.page-6-listArrow");
		let page6ListContent2 = document.querySelector(".page-6 .page-6-list2>.page-6-listContent");
		let page6ListDate3 = document.querySelector(".page-6 .page-6-list3>.page-6-listDate");
		let page6ListArrow3 = document.querySelector(".page-6 .page-6-list3>.page-6-listArrow");
		let page6ListContent3 = document.querySelector(".page-6 .page-6-list3>.page-6-listContent");
		let page6ListDate4 = document.querySelector(".page-6 .page-6-list4>.page-6-listDate");
		let page6ListArrow4 = document.querySelector(".page-6 .page-6-list4>.page-6-listArrow");
		let page6ListContent4 = document.querySelector(".page-6 .page-6-list4>.page-6-listContent");
		let page6ListDate5 = document.querySelector(".page-6 .page-6-list5>.page-6-listDate");
		let page6ListArrow5 = document.querySelector(".page-6 .page-6-list5>.page-6-listArrow");
		let page6ListContent5 = document.querySelector(".page-6 .page-6-list5>.page-6-listContent");
		let page6ListDate6 = document.querySelector(".page-6 .page-6-list6>.page-6-listDate");
		let page6ListContent6 = document.querySelector(".page-6 .page-6-list6>.page-6-listContent");
		
		anList.page6Animation = {
			anIn:function(){
				page6RightLine.style.animation = 'shortMoveFromLeft .5s .5s both';
				page6LeftLine.style.animation = 'shortMoveFromRight .5s .5s both';
				page6Title2.style.animation = 'shortMoveFromLeft .5s .8s both';
				page6Title1.style.animation = 'shortMoveFromRight .5s .8s both';
				page6ListDate1.style.animation = 'shortMoveFromTop .5s 1.3s both';
				page6ListContent1.style.animation = 'shortMoveFromTop .7s 1.3s both';
				page6ListArrow1.style.animation = 'shortMoveFromTop .5s 2.1s both';
				page6ListDate2.style.animation = 'shortMoveFromTop .5s 2.7s both';
				page6ListContent2.style.animation = 'shortMoveFromTop .7s 2.7s both';
				page6ListArrow2.style.animation = 'shortMoveFromTop .5s 3.5s both';
				page6ListDate3.style.animation = 'shortMoveFromTop .5s 4.1s both';
				page6ListContent3.style.animation = 'shortMoveFromTop .7s 4.1s both';
				page6ListArrow3.style.animation = 'shortMoveFromTop .5s 4.9s both';
				page6ListDate4.style.animation = 'shortMoveFromTop .5s 5.5s both';
				page6ListContent4.style.animation = 'shortMoveFromTop .7s 5.5s both';
				page6ListArrow4.style.animation = 'shortMoveFromTop .5s 6.3s both';
				page6ListDate5.style.animation = 'shortMoveFromTop .5s 6.9s both';
				page6ListContent5.style.animation = 'shortMoveFromTop .7s 6.9s both';
				page6ListArrow5.style.animation = 'shortMoveFromTop .5s 7.7s both';
				page6ListDate6.style.animation = 'shortMoveFromTop .5s 8.3s both';
				page6ListContent6.style.animation = 'shortMoveFromTop .7s 8.3s both';
			}, 
			anOut:function(){
				page6RightLine.style.animation = 'none';
				page6LeftLine.style.animation = 'none';
				page6Title2.style.animation = 'none';
				page6Title1.style.animation = 'none';
				page6ListDate1.style.animation = 'none';
				page6ListContent1.style.animation = 'none';
				page6ListArrow1.style.animation = 'none';
				page6ListDate2.style.animation = 'none';
				page6ListContent2.style.animation = 'none';
				page6ListArrow2.style.animation = 'none';
				page6ListDate3.style.animation = 'none';
				page6ListContent3.style.animation = 'none';
				page6ListArrow3.style.animation = 'none';
				page6ListDate4.style.animation = 'none';
				page6ListContent4.style.animation = 'none';
				page6ListArrow4.style.animation = 'none';
				page6ListDate5.style.animation = 'none';
				page6ListContent5.style.animation = 'none';
				page6ListArrow5.style.animation = 'none';
				page6ListDate6.style.animation = 'none';
				page6ListContent6.style.animation = 'none';
			}
		}
	}
	
	page7();
	function page7(){
		let page7Title = document.querySelector(".page-7 .page-7-title");
		let page7TextT = document.querySelector(".page-7 .page-7-textT");
		let page7TextB = document.querySelector(".page-7 .page-7-textB");
		let page7Circle = document.querySelector(".page-7 .page-7-circle");
		let page7Background = document.querySelector(".page-7 .page-7-background");
		let page7Icon1 = document.querySelector(".page-7 .page-7-icon1");
		let page7Icon2 = document.querySelector(".page-7 .page-7-icon2");
		let page7Icon3 = document.querySelector(".page-7 .page-7-icon3");
		let page7Icon4 = document.querySelector(".page-7 .page-7-icon4");
		let page7Icon5 = document.querySelector(".page-7 .page-7-icon5");
		let page7Icon6 = document.querySelector(".page-7 .page-7-icon6");
		let page7Button = document.querySelector(".page-7 .page-7-button");
		
		anList.page7Animation = {
			anIn:function(){
				page7Background.style.animation = 'longMoveFromTop .7s .5s both';
				page7Circle.style.animation = 'rotate180 .8s 1.2s both';
				page7Title.style.animation = 'scaleFromLittle .6s 2.1s both';
				page7TextT.style.animation = 'shortMoveFromRight .7s 2.8s both';
				page7TextB.style.animation = 'shortMoveFromLeft .7s 2.8s both';
				page7Icon1.style.animation = 'longMoveFromTop .7s 3.6s both';
				page7Icon2.style.animation = 'longMoveFromTop .7s 3.6s both';
				page7Icon3.style.animation = 'longMoveFromTop .8s 3.6s both';
				page7Icon4.style.animation = 'longMoveFromTop .9s 3.6s both';
				page7Icon5.style.animation = 'longMoveFromTop .9s 3.6s both';
				page7Icon6.style.animation = 'longMoveFromTop .7s 3.6s both';
				page7Button.style.animation = 'scaleFromLittle .7s 4.6s both';
				
			}, 
			anOut:function(){
				page7Background.style.animation = 'none';
				page7Circle.style.animation = 'none';
				page7Title.style.animation = 'none';
				page7TextT.style.animation = 'none';
				page7TextB.style.animation = 'none';
				page7Icon1.style.animation = 'none';
				page7Icon2.style.animation = 'none';
				page7Icon3.style.animation = 'none';
				page7Icon4.style.animation = 'none';
				page7Icon5.style.animation = 'none';
				page7Icon6.style.animation = 'none';
				page7Button.style.animation = 'none';
			}
		}
	}
	
	
	
	wrap.addEventListener("touchstart",function(e){
		if(point.ismoved ){
			return
		}
		point.isStart = true 
		point.prev = point.now - 1 ;
		point.next = point.now + 1 ;
		
		
		if(point.prev < 0 ){
			point.prev = len-1 ;
		}else if(point.next > len-1){
			point.next = 0;
		}
		
		
		for(let i=0;i<len;i++){
			lis[i].style.zIndex = 2 ;
			lis[i].style.display = "none";
			lis[i].style.transition = "none";
			lis[i].style.transformOrigin = "0 0" ;
		}
		
		e = e||event;
		let touchC = e.changedTouches[0];
		startY = touchC.clientY;
		
		
		trans.css(lis[point.prev],"translateY",-h);
		trans.css(lis[point.next],"translateY",h);
		
		lis[point.now].style.display = "block";
		
		lis[point.now].style.zIndex = 3 ;
		lis[point.prev].style.zIndex = 4 ;
		lis[point.next].style.zIndex = 4 ;
		
		point.dir = '';
		point.isFirst = false
		
	})
	
	wrap.addEventListener("touchmove",function(e){
		if(point.ismoved || !point.isStart){
			return ;
		}
		
		lis[point.prev].style.display = "block";
		lis[point.next].style.display = 'block';
		
		e = e||event;
		let touchC = e.changedTouches[0];
		let nowY =  touchC.clientY;
		let disY = nowY - startY;
		
		if(disY>0){
			point.dir = "down";
			//down
			trans.css(lis[point.prev],"translateY",-h+disY);
			trans.css(lis[point.next],"translateY",h);
			lis[point.now].style.transformOrigin = w+"px "+h+"px " ;
		}else {
			point.dir = "up";
			//up
			trans.css(lis[point.next],"translateY",h+disY);
			trans.css(lis[point.prev],"translateY",-h);
			lis[point.now].style.transformOrigin = w+"px 0" ;
		}
		
		let scale = 1 - Math.abs(disY)/(Math.abs(disY)+h)/7;
		
		trans.css(lis[point.now],"scale",scale);
	})
	
	wrap.addEventListener("touchend",function(e){
		if(point.dir==="" || point.ismoved ||!point.isStart){
			return;
		}
		point.isStart = false;
			point.ismoved = true;
			e = e||event;
			point.isStart = false;
				if(point.dir==="down"){
					lis[point.prev].style.transition = ".3s transform";
					lis[point.now].style.transition = ".3s transform";
					trans.css(lis[point.now],"scale",0.9);
					lis[point.prev].addEventListener("transitionend",endFn)
					trans.css(lis[point.prev],"translateY",0);
				}else if(point.dir === "up"){
					lis[point.next].style.transition = ".3s transform";
					lis[point.now].style.transition = ".3s transform";
					trans.css(lis[point.now],"scale",0.9);
					lis[point.next].addEventListener("transitionend",endFn)
					trans.css(lis[point.next],"translateY",0);
				}

			function endFn(){
				this.removeEventListener("transitionend",endFn)
				lis[point.now].style.transition = "none";
				trans.css(lis[point.now],"scale",1);
				
				setTimeout(function(){
					let goOut = '';
					if(point.dir==="down"){
						goOut = point.now;
						point.now--;
						if(point.now<0){
							point.now = len-1;
						}
					}else if(point.dir === "up"){
						goOut = point.now;
						point.now++;
						if(point.now>len-1){
							point.now = 0;
						}
					}
					let comeIn = point.now;
					
					//处理小圆点
					tools.removeClass(points[goOut],'active');
					tools.addClass(points[comeIn],'active');
				
					switch (comeIn){
						case 0:
							anList.page1Animation.anIn();
							break;
						case 1:
							anList.page2Animation.anIn();
							break;
						case 2:
							anList.page3Animation.anIn();
							break;
						case 3:
							anList.page4Animation.anIn();
							break;
						case 4:
							anList.page5Animation.anIn();
							break;
						case 5:
							anList.page6Animation.anIn();
							break;
						case 6:
							anList.page7Animation.anIn();
							break;

					}
					
					switch (goOut){
						case 0:
							anList.page1Animation.anOut();
							break;
						case 1:
							anList.page2Animation.anOut();
							break;
						case 2:
							anList.page3Animation.anOut();
							break;
						case 3:
							anList.page4Animation.anOut();
							break;
						case 4:
							anList.page5Animation.anOut();
							break;
						case 5:
							anList.page6Animation.anOut();
							break;
						case 6:
							anList.page7Animation.anOut();
							break;
					}		
					
					point.ismoved = false;
				},10)
				
			}
			
			
		
	})
	
	musicBtn.addEventListener("click",function(){
		if(music.paused){
			music.play();
			this.style.animation = "music 2s linear infinite ";
		}else{
			music.pause();
			this.style.animation = "none";
		}
	})
	
	
	//首页
	firstPage();
	function firstPage(){
		let oc = document.querySelector("canvas");
		
		oc.addEventListener("transitionend",function(){
			music.play();
			musicBtn.style.animation = "music 2s linear infinite ";
			anList.page1Animation.anIn();
		});
		
	}
	
	//刮刮卡
	firstLoad();
	function firstLoad(){
		let oc = document.querySelector("canvas");
		//设置画布为满屏
		oc.width = document.documentElement.clientWidth;
		oc.height = document.documentElement.clientHeight;
		
		if(oc.getContext){
			let ctx = oc.getContext("2d");
			//绘制一张图片
			let img = new Image();
			img.src = "./image/a.png";
			img.onload = function(){
				draw(this);
			}
			
			function draw(img){
				//将图片绘制上屏幕
				ctx.drawImage(img,0,0,oc.width,oc.height);
				//手指刚开始接触屏幕触发事件
				//需要注意的是：touchstart 和 touchend一定会成对触发，也就是有头必有尾
				oc.addEventListener("touchstart",function(e){
					e = e||event;
					//获取手指
					let touchC = e.changedTouches[0];
					//获取其坐标，此处由于是满屏，所以直接取了值
					//不是满屏的话，坐标是touchC.clientX-oc.offsetLeft
					let x = touchC.clientX ;
					let y = touchC.clientY;
					//合成，它能有多个值可以设置
					//此次只用到将我们绘制图形与原图像重合的地方清除
					ctx.globalCompositeOperation = "destination-out";
					//设置开始画的图案样式
					ctx.lineWidth = 30 ;
					ctx.lineCap = "round";
					ctx.lineJoin = "round";
					//清除上一次路径
					ctx.beginPath();
					//将画笔移到手指触屏的位置
					ctx.moveTo(x,y);
					//画一条1px的线，不做此步的话，手指只移动位置是看不到效果的
					ctx.lineTo(x+1,y+1);
					//闭合路径，划线，填充线条
					ctx.stroke();
				})
				//手指在屏幕移动触发事件
				oc.addEventListener("touchmove",function(e){
					e = e||event;
					let touchC = e.changedTouches[0];
					let x = touchC.clientX ;
					let y = touchC.clientY;
					ctx.lineTo(x,y);
					ctx.stroke();
				})
				//手指从屏幕移出触发事件
				oc.addEventListener("touchend",function(e){
					//获取图片的全部信息
					let imgData = ctx.getImageData(0,0,oc.width,oc.height);
					//获取图片全部的像素个数
					let allData = imgData.width * imgData.height;
					//初始化rgba中为0 也就是透明颜色的像素点的个数
					let zero = 0 ;
					//遍历找出所有透明颜色的像素点的个数
					for(let i=0;i<allData;i++){
						//imgData.data中每一个像素占4个位置，分别是代表rgba，我们只需要用到a
						if(imgData.data[4*i+3] === 0){
							zero++;
						}
					}
					//优化：当透明颜色像素占据一半一上时，就将画布置为透明
					if(zero>allData/2){
						oc.style.opacity = 0;
					}
				})
				//画布置为透明动画过渡后，移除画布
				oc.addEventListener("transitionend",function(){
					this.remove();
				})
			}
		}
	}
	
}
