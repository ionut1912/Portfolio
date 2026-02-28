import axios from "axios";
import type { AxiosResponse } from "axios";
import type { GitHubRepo } from "@/types/Github";

export function fetchGitHubRepos(username: string): Promise<AxiosResponse<GitHubRepo[]>> {
  return axios.get(`https://api.github.com/users/${username}/repos?sort=pushed`);
}
