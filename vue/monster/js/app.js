new Vue({
	el:'#app',
	data:{
		playerHealth:100,
		monsterHealth:100,
		gameIsRunning:false,
		logs:[]
	},
	methods:{
		startGame:function(){
			this.gameIsRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
			this.logs = [];
		},
		attack:function(){
			var damage = this.calDamage(10, 3);
			this.monsterHealth -= damage;
			this.logs.unshift({
				isPlayer:true,
				damage:'player hits monster for' + damage
			});
			if(this.checkWin()){
				return;
			}
			this.monsterAttacks();
		},
		specialAttack:function(){
			var damage = this.calDamage(20, 10);
			this.monsterHealth -= damage;
			this.logs.unshift({
				isPlayer:true,
				damage:'player hits hard monster for' + damage
			});
			if(this.checkWin()){
				return;
			}
			this.monsterAttacks();
		},
		monsterAttacks:function(){
			var damage = this.calDamage(12, 5);
			this.playerHealth -= damage;
			this.logs.unshift({
				isPlayer:false,
				damage:'monster hits player for' + damage
			});
			this.checkWin();
		},
		heal:function(){
			if(this.playerHealth <= 90){
				this.playerHealth += 10;
			}else{
				this.playerHealth = 100;
			}
			this.logs.unshift({
				isPlayer:true,
				damage:'player heal for 10'
			});
			this.monsterAttacks();
		},
		giveUp:function(){
			this.gameIsRunning = false;
		},
		calDamage:function(max, min){
			return Math.max((Math.floor(Math.random() * max) + 1), min);
		},
		checkWin:function(){
			if(this.playerHealth <= 0){
				if(confirm('You Lost! New Game?')){
					this.startGame();
				}else{
					this.gameIsRunning = false;
					this.playerHealth = 0;
				}
				return true;
			}else if(this.monsterHealth <= 0){
				if(confirm('You Win! New Game?')){
					this.startGame();
				}else{
					this.gameIsRunning = false;
					this.monsterHealth = 0;
				}
				return true;
			}
			return false;
		}
	}
})