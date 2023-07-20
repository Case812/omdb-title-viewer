import request from "supertest"
import app from "../index"
import { Movie } from "../interfaces/movie";
describe('MovieController', () => {
  let firstResultId: number;
  let createdId: number;
  it('should get all', async () => {
    const res = await request(app).get('/api/movie/BUTTON1');
    firstResultId = res.body[0].Id;
    expect(firstResultId).toBeTruthy();
    expect(res.status).toEqual(200);
  });
  it('should find one', async () => {
    const res = await request(app).get(`/api/movie/BUTTON1/${firstResultId}`);
    expect(res.status).toEqual(200);
  });
  it('should create', async () => {
    const mockMovie: Movie = {
      Poster: 'mockPoster',
      Title: 'mockTitle',
      imdbID: 'mockImdb',
      Categories: 'BUTTON1',
      Type: 'mockType',
      Year: 'mockYear'
    }
    const res = await request(app).post('/api/movie/BUTTON1').send(mockMovie);
    createdId = res.body.Id;
    expect(res.status).toEqual(200);
    expect(createdId).toBeTruthy();
  });
  it('should update', async () => {
    const mockMovieUpdate: Movie = {
      Id: createdId,
      Poster: 'mockPosterUpdate',
      Title: 'mockTitle',
      imdbID: 'mockImdb',
      Categories: 'BUTTON1',
      Type: 'mockType',
      Year: 'mockYear'
    }
    const res = await request(app).put('/api/movie/BUTTON1').send(mockMovieUpdate);
    expect(res.body.Poster).toEqual('mockPosterUpdate');
    expect(res.status).toEqual(200);
  });
  it('should delete', async () => {
    const deleteRes = await request(app).delete(`/api/movie/${createdId}`);
    const getRes = await request(app).get('/api/movie/BUTTON1');
    const foundElement = getRes.body.find((element: Movie) => element.Id === createdId);
    expect(deleteRes.status).toEqual(200);
    expect(foundElement).not.toBeTruthy();
  });
})