# Git work flow
---

## Why
- As a team you are expected to collaborate together in developing the project therefore,  we do expect you to use the git-flow workflow concept in managing features, branches, and PR

## Overall flow of Gitflow
1. A `develop` branch is created from `main`
2. A `release` branch is created from `develop`
3. `Feature` branches are created from `develop`
4. When a `feature` is complete it is merged into the `develop` branch
5. When the `release` branch is done it is merged into `develop` and `main`
6. If an issue in `main` is detected a `hotfix` branch is created from `main`
7. Once the `hotfix` is complete it is merged to both `develop` and `main`

## How it works
- Instead of a single `main` branch, this workflow uses **two** branches to record the history of the project
- The `main` branch stores the **official** release history, and the `develop` branch serves as an **integration** branch for features
</br>

- ![git-work-flow](https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg?cdnVersion=958)

## steps

1. **Create the `develop` branch:**
    ```rb
        $ git flow init

        Initialized empty Git repository in ~/project/.git/
        No branches exist yet. Base branches must be created now.
        Branch name for production releases: [main]
        Branch name for "next release" development: [develop]
        How to name your supporting branch prefixes?
        Feature branches? [feature/]
        Release branches? [release/]
        Hotfix branches? [hotfix/]
        Support branches? [support/]
        Version tag prefix? []

    ```
    - you should now have two branches
        ```bash
            $ git branch

                * develop
                 main
        ```


2. **Create `Feature` branches**
 - Each new `feature` should reside in its own branch, which can be pushed to the `develop` branch when complete.
 - **Features should never interact directly with main.**

 ```bash
  $ git flow feature start feature_branch_name
 ```
 - work and create you feature using your favourite IDE

3. **Finishing a `feature` branch**
  - When you’re done with the *development* work on the *feature*, the next step is to **merge** the `feature_branch` into `develop`.
  ```sh
  $  git flow feature finish feature_branch_name
  ```

4. Release branches
  - Once `develop` has acquired enough features for a release,  you fork a `release` branch off of `develop`.
  - Creating this branch starts the next release cycle, so no new features can be added after this point—only bug fixes, documentation generation, and other release-oriented tasks should go in this branch
  - Once it's ready to ship, the `release` branch gets merged into `main` and tagged with a version number

  ```sh
   $ git flow release start 0.0.1

        Switched to a new branch 'release/0.1.0'
   ```
- Once the `release` is ready to ship, it will get merged it into `main` and `develop`, then the `release` branch will be **deleted**.
- It’s important to merge back into `develop` because critical updates may have been added to the `release` branch and they need to be accessible to `new_features`.


---
### [reference](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
