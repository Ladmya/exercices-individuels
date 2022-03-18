# Game_init
state=50
nbPlayer=int(input("How many players will burn their fingertips?"))
spotPlayer=0
players=[]  

for i in range(nbPlayer):  # création liste/tableau de la taille du nb de joueurs où j'assigne le nom des joueurs
    pName=input("What's your name player?")
    players.append(pName)

def retrievalFunc():
    """Récupère le nombre d'allumettes à enlever""" # """""" rappel rôle f() 
    retrieval=int(input("How many matchsticks?"))
    return retrieval

# game_play
while state>0:
    retrieval = retrievalFunc()
    if retrieval in range (1,7) and retrieval<=state:
       state=int(state-retrieval)  #maj nb d'allumettes
       # spotPlayer=(spotPlayer+1) % nbPlayer (alternative pour les 3 prochaines lignes)
       spotPlayer+=1  
       if spotPlayer>=nbPlayer: 
          spotPlayer=0
       print("The number of stickmatches is now", state)
    else:
        print("No, no, no!")
# Gamewin
print(pName," won!")



  




