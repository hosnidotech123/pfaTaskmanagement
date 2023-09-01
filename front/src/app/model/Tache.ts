
export interface Tache{
    id:number,
    description:string,
    completed:boolean,
    date_debut:string
    date_fin:string

}





// @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;
//     private String description;
//     private Boolean completed;
//     @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
//     private string time;