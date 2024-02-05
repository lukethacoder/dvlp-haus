// import path from 'node:path'
import fs from 'fs'
import git from 'isomorphic-git'

const CWD = process.cwd()

const GIT_REMOTE_BASE_URL =
  'https://github.com/lukethacoder/dvlp-haus/blob/master'

export const getTimestamp = async (
  filePath: string = '/test'
): Promise<Date | null> => {
  const commits = await git.log({
    fs,
    dir: CWD,
    filepath: filePath,
    depth: 5,
    ref: 'master',
  })
  if (commits.length > 0) {
    return new Date(commits[0].commit.committer.timestamp * 1000)
  }

  return null
}

export const getRemotePath = (filePath: string = '/test'): string =>
  `${GIT_REMOTE_BASE_URL}/${filePath}`
