import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

export const fetchProduct = async (catID)=>{
    const productsSnapshots=   await firestore().collection("products").limit(10).where("categories", "array-contains", "Zi1E6mM44XJvvQO3Yc1o").get();
    const products = new Array();
    productsSnapshots.forEach((doc)=>{
        let prodData = doc.data();
        prodData.id = doc.id;
        products.push(prodData);
    })

    return products;
}

export const fetchCategories = async (catID)=>{
    const cats = new Array();
    const catsSnapshots=    await firestore().collection("categories").where("pid", "==", ""+catID).get()
    catsSnapshots.forEach((doc)=>{
        let catData = doc.data();
        catData.id = doc.id;
        cats.push(catData);
    })

    console.log(cats)
    return cats;
}