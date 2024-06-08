import {validate} from "class-validator";
import {plainToInstance} from "class-transformer";
import {ClassConstructor} from "class-transformer/types/interfaces";

export abstract class BaseEntity {
    public async validateThis(skipMissing = false): Promise<string[]> {
        const errors = await validate(this, {
            skipMissingProperties: skipMissing,
        });
        const temp = errors.map(e =>
            Object.values(e.constraints ?? [])
        );

        const result: string[] = [];
        temp.forEach(t => {
            result.push(...t);
        });

        return result;
    }

    protected static baseTransform<T>(cls: ClassConstructor<T>, plainObject: object): T {
        if (plainObject instanceof cls) {
            return plainObject;
        }
        return plainToInstance(cls, plainObject);
    }
}
