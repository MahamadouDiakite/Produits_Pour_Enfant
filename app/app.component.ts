import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Enfant';
   vue: Boolean = false;
   vue2: Boolean = false;
   HommeHabit =[
    {marque: 'T-shirt',
    description:'Habit souple et leger',
    prix:'15.000F',
    img:'assets/img-enfant/enfant.jpg'
    },
    {marque: 'Jean',
    description:'La qualité fait la différence',
    prix:'20.000F',
    img:'assets/img-enfant/jean.jpg'
    },
    {marque: 'Chaussures',
    description:'La qualité pure',
    prix:'15.000F',
    img:'assets/img-enfant/chaussure.jpg'
    },
    {marque: 'Robe',
    description:'Confortable-Durable',
    prix:'30.000F',
    img:'assets/img-enfant/robe.jpg'
    },
    {marque: 'Collier ',
    description:'Mettre votre outfit en valeur',
    prix:'7.000F',
    img:'assets/img-enfant/collier.jpg'
    },
    {marque: 'talon',
    description:'Confortable pour vos filles',
    prix:'15.000F',
    img:'assets/img-enfant/talon.jpg'
    },
    {marque: 'T-shirt',
    description:'Être classe est un choix',
    prix:'5.000F',
    img:'assets/img-enfant/T-shirt.jpg'
    },
    {marque: 'Pantalon',
    description:'Pas plus meilleur que ceux-ci',
    prix:'5.000F',
    img:'assets/img-enfant/pantalon.jpg'
    },
   
    {marque: 'Robe',
    description:'Simple et leger',
    prix:'15.000F',
    img:'assets/img-enfant/robe2.jpg'
    }
  ] ;
Images: string='';
Descrip: string='';
Prixx: string='';
Mark: string='';
  onDetail(produit: any){
    this.Images= produit.img
    this.Descrip= produit.description
    this.Prixx= produit.prix
    this.Mark= produit.marque
this.vue=true

  }
  OnRetour(){
    if(this.Images){
      this.Images=''
      this.vue=false
    }
  }
  
}
