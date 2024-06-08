import {Movie} from "../entities/Movie";
import {IMovie} from "../db/MovieSchema";
import {MovieModel} from "../db/db";
import {SearchCondition} from "../entities/SearchCondition";
import {ISearchResult} from "../entities/CommonTypes";

export class MovieService {
    public static async add(movie: Movie): Promise<IMovie | string[]> {
        movie = Movie.transform(movie);
        const errors = await movie.validateThis();
        if (errors.length > 0) {
            return errors;
        }

        return MovieModel.create(movie);
    }

    public static async edit(id: string, movie: Movie): Promise<string[]> {
        const movieObj = Movie.transform(movie);
        const errors = await movieObj.validateThis(true);
        if (errors.length > 0) {
            return errors;
        }

        await MovieModel.updateOne({_id: id}, movie);
        return errors;
    }

    public static async delete(id: string): Promise<void> {
        await MovieModel.deleteOne({_id: id});
    }

    public static async findById(id: string): Promise<IMovie | null> {
        return MovieModel.findById({_id: id});
    }

    public static async find(condition: SearchCondition): Promise<ISearchResult<IMovie>> {
        const conObj = SearchCondition.transform(condition);
        const errors = await conObj.validateThis();
        if (errors.length > 0) {
            return {
                count: 0,
                data: [],
                errors,
            };
        }

        const movies = await MovieModel.find({
            name: {$regex: new RegExp(conObj.key)},
        })
            .skip((conObj.page - 1) * conObj.limit)
            .limit(conObj.limit);

        const count = await MovieModel.find({
            name: {$regex: new RegExp(conObj.key)},
        }).countDocuments();

        return {
            count,
            data: movies,
            errors: [],
        };
    }
}
